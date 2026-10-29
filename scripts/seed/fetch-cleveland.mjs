/**
 * Fetch a bounded CC0 slice from the Cleveland Museum of Art Open Access API
 * and write scripts/seed/cleveland-snapshot.json for the development seed.
 *
 * Run: npm run sanity:fetch-catalog
 */

import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { matchedDisciplineFromMedium } from "./classify.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SNAPSHOT_PATH = join(__dirname, "cleveland-snapshot.json");

const USER_AGENT = "OrganizedChaosArts-dev-seed";
const BASE = "https://openaccess-api.clevelandart.org/api";
const DELAY_MS = 300;
const TARGET_ARTISTS = 20;
const WORKS_PER_ARTIST = 5;
const MIN_WORKS_TO_KEEP = 3;
const FEATURED_COUNT = 4;
const MAX_PAGES_PER_TECHNIQUE = 6;
const PAGE_SIZE = 50;

const ARTWORK_FIELDS = [
  "id",
  "title",
  "creation_date",
  "creation_date_earliest",
  "technique",
  "type",
  "measurements",
  "description",
  "url",
  "images",
  "creators",
].join(",");

/** Technique queries tuned to OCA disciplines so the roster is not all oil paintings. */
const TECHNIQUE_QUERIES = [
  "ceramic",
  "porcelain",
  "earthenware",
  "glass",
  "wood",
  "textile",
  "silk",
  "etching",
  "lithograph",
  "engraving",
  "photograph",
  "watercolor",
  "oil on canvas",
  "bronze",
  "marble",
  "drawing",
  "ink",
  "charcoal",
  "jewelry",
  "collage",
];

const SKIP_NAME =
  /\b(anonymous|unknown|unidentified|circle of|workshop|school of|follower of|after |attributed|studio of|house of|factory|company|studios|museum|culture)\b|&\s*co\.?/i;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function cmaFetch(pathAndQuery) {
  const url = `${BASE}${pathAndQuery}`;
  const response = await fetch(url, {
    headers: { "User-Agent": USER_AGENT, Accept: "application/json" },
  });
  if (!response.ok) {
    throw new Error(`CMA ${response.status} for ${url}`);
  }
  await sleep(DELAY_MS);
  return response.json();
}

function parseCreatorName(description) {
  if (!description) return null;
  const trimmed = description.trim();
  const paren = trimmed.indexOf(" (");
  const name = (paren === -1 ? trimmed : trimmed.slice(0, paren)).trim();
  if (!name || SKIP_NAME.test(name) || SKIP_NAME.test(trimmed)) return null;
  return name;
}

function parseYear(artwork) {
  if (
    typeof artwork.creation_date_earliest === "number" &&
    Number.isFinite(artwork.creation_date_earliest)
  ) {
    return artwork.creation_date_earliest;
  }
  const match = String(artwork.creation_date ?? "").match(
    /\b(1[0-9]{3}|20[0-9]{2})\b/,
  );
  return match ? Number(match[1]) : undefined;
}

function webImageUrl(artwork) {
  return artwork.images?.web?.url ?? null;
}

function eligibleCreator(creators) {
  if (!Array.isArray(creators) || creators.length !== 1) return null;
  const creator = creators[0];
  if (!creator?.id) return null;
  const name = parseCreatorName(creator.description);
  if (!name) return null;
  return { id: creator.id, name, raw: creator };
}

function classifyArtwork(artwork) {
  return matchedDisciplineFromMedium(
    [artwork.technique, artwork.type].filter(Boolean).join(" "),
  );
}

function toWork(artwork, discipline) {
  return {
    id: artwork.id,
    title: artwork.title,
    year: parseYear(artwork),
    medium: artwork.technique || artwork.type || "Mixed media",
    dimensions: artwork.measurements || undefined,
    description: artwork.description
      ? artwork.description.replace(/<[^>]+>/g, "").trim()
      : undefined,
    url: artwork.url,
    imageUrl: webImageUrl(artwork),
    discipline,
  };
}

function normalizeTitle(title) {
  return String(title ?? "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

/** Prefer described works and whole objects over .a/.b part records. */
function workQuality(work) {
  const accession = String(work.url ?? "")
    .split("/")
    .pop();
  const isPart = /\.[a-z]\d*$/i.test(accession ?? "");
  return (work.description ? 2 : 0) + (isPart ? 0 : 1);
}

function slugify(value) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
}

function ensureEntry(byCreator, creator) {
  let entry = byCreator.get(creator.id);
  if (!entry) {
    entry = {
      creator: {
        id: creator.id,
        name: creator.name,
        description: creator.raw.description,
        biography: creator.raw.biography ?? null,
        birthYear: creator.raw.birth_year ?? null,
        deathYear: creator.raw.death_year ?? null,
      },
      works: [],
    };
    byCreator.set(creator.id, entry);
  } else if (!entry.creator.biography && creator.raw.biography) {
    entry.creator.biography = creator.raw.biography;
  }
  return entry;
}

function addWork(entry, artwork) {
  const discipline = classifyArtwork(artwork);
  if (!discipline) return false;
  const imageUrl = webImageUrl(artwork);
  if (!imageUrl) return false;
  if (entry.works.some((work) => work.id === artwork.id)) return false;
  if (entry.works.some((work) => work.imageUrl === imageUrl)) return false;

  const candidate = toWork(artwork, discipline);
  const titleKey = normalizeTitle(candidate.title);
  const existingIndex = entry.works.findIndex(
    (work) => normalizeTitle(work.title) === titleKey,
  );

  if (existingIndex >= 0) {
    if (workQuality(candidate) > workQuality(entry.works[existingIndex])) {
      entry.works[existingIndex] = candidate;
      return true;
    }
    return false;
  }

  if (entry.works.length >= WORKS_PER_ARTIST) return false;
  entry.works.push(candidate);
  return true;
}

async function scanTechnique(byCreator, technique) {
  let skip = 0;
  for (let page = 0; page < MAX_PAGES_PER_TECHNIQUE; page += 1) {
    const query = new URLSearchParams({
      cc0: "1",
      has_image: "1",
      technique,
      limit: String(PAGE_SIZE),
      skip: String(skip),
      fields: ARTWORK_FIELDS,
    });
    const payload = await cmaFetch(`/artworks/?${query}`);
    const rows = payload.data ?? [];
    if (rows.length === 0) break;

    for (const artwork of rows) {
      const creator = eligibleCreator(artwork.creators);
      if (!creator) continue;
      const entry = ensureEntry(byCreator, creator);
      addWork(entry, artwork);
    }

    if (rows.length < PAGE_SIZE) break;
    skip += PAGE_SIZE;
  }
}

async function backfillCreator(entry) {
  if (entry.works.length >= WORKS_PER_ARTIST) return;

  let skip = 0;
  for (let page = 0; page < 4; page += 1) {
    const query = new URLSearchParams({
      cc0: "1",
      has_image: "1",
      artists: entry.creator.name,
      limit: String(PAGE_SIZE),
      skip: String(skip),
      fields: ARTWORK_FIELDS,
    });
    const payload = await cmaFetch(`/artworks/?${query}`);
    const rows = payload.data ?? [];
    if (rows.length === 0) break;

    for (const artwork of rows) {
      const creator = eligibleCreator(artwork.creators);
      if (!creator || creator.id !== entry.creator.id) continue;
      addWork(entry, artwork);
      if (entry.works.length >= WORKS_PER_ARTIST) return;
    }

    if (rows.length < PAGE_SIZE) break;
    skip += PAGE_SIZE;
  }
}

async function collectArtworks() {
  /** @type {Map<number, { creator: object, works: object[] }>} */
  const byCreator = new Map();

  for (const technique of TECHNIQUE_QUERIES) {
    process.stdout.write(`  technique=${technique}… `);
    await scanTechnique(byCreator, technique);
    const ready = [...byCreator.values()].filter(
      (entry) => entry.works.length >= MIN_WORKS_TO_KEEP,
    ).length;
    console.log(`${byCreator.size} creators (${ready} with ${MIN_WORKS_TO_KEEP}+)`);
    if (ready >= TARGET_ARTISTS * 2) break;
  }

  const promising = [...byCreator.values()]
    .filter((entry) => entry.works.length >= 1)
    .sort((a, b) => b.works.length - a.works.length || a.creator.id - b.creator.id)
    .slice(0, TARGET_ARTISTS * 3);

  console.log(`Backfilling works for ${promising.length} promising creators…`);
  for (const entry of promising) {
    await backfillCreator(entry);
  }

  return byCreator;
}

async function enrichBiographies(entries) {
  for (const entry of entries) {
    if (entry.creator.biography) continue;
    try {
      const payload = await cmaFetch(`/creators/${entry.creator.id}`);
      const bio = payload.data?.biography;
      if (bio) entry.creator.biography = bio;
      if (payload.data?.description) {
        entry.creator.description = payload.data.description;
      }
    } catch (error) {
      console.warn(
        `Creator ${entry.creator.id} biography skipped: ${error.message}`,
      );
    }
  }
}

function buildBio(creator) {
  if (creator.biography?.trim()) {
    return creator.biography.replace(/<[^>]+>/g, "").trim();
  }
  const bits = [creator.description || creator.name];
  if (creator.birthYear || creator.deathYear) {
    bits.push(
      `Active ${[creator.birthYear, creator.deathYear].filter(Boolean).join("–")}.`,
    );
  }
  bits.push(
    "Public-domain works from the Cleveland Museum of Art Open Access collection, used as development stand-ins for the Organized Chaos Arts directory.",
  );
  return bits.join(" ");
}

function trimShortBio(bio) {
  const flat = bio.replace(/\s+/g, " ").trim();
  if (flat.length <= 280) return flat;
  const cut = flat.slice(0, 277);
  const lastSpace = cut.lastIndexOf(" ");
  return `${(lastSpace > 140 ? cut.slice(0, lastSpace) : cut).trim()}…`;
}

function diversify(candidates) {
  /** Prefer spreading disciplines across the first TARGET_ARTISTS slots. */
  const selected = [];
  const usedDisciplines = new Set();
  const remaining = [...candidates];

  while (selected.length < TARGET_ARTISTS && remaining.length > 0) {
    const index = remaining.findIndex((entry) => {
      const discs = new Set(entry.works.map((work) => work.discipline));
      return [...discs].some((discipline) => !usedDisciplines.has(discipline));
    });
    const pickIndex = index === -1 ? 0 : index;
    const [entry] = remaining.splice(pickIndex, 1);
    for (const work of entry.works) usedDisciplines.add(work.discipline);
    selected.push(entry);
  }

  return selected.sort((a, b) => a.creator.id - b.creator.id);
}

async function main() {
  console.log("Fetching Cleveland CC0 artworks (rate-limited)…");
  const byCreator = await collectArtworks();

  const candidates = [...byCreator.values()]
    .filter((entry) => entry.works.length >= MIN_WORKS_TO_KEEP)
    .sort((a, b) => a.creator.id - b.creator.id);

  if (candidates.length < TARGET_ARTISTS) {
    console.warn(
      `Only ${candidates.length} creators with ${MIN_WORKS_TO_KEEP}+ classifiable works; continuing with what we have.`,
    );
  }

  const selected = diversify(candidates);
  console.log(`Enriching biographies for ${selected.length} creators…`);
  await enrichBiographies(selected);

  const snapshot = {
    fetchedAt: new Date().toISOString(),
    source: "https://openaccess-api.clevelandart.org/",
    license: "CC0",
    userAgent: USER_AGENT,
    artists: selected.map((entry, index) => {
      const bio = buildBio(entry.creator);
      const disciplines = [
        ...new Set(entry.works.map((work) => work.discipline)),
      ].sort();
      return {
        cmaId: entry.creator.id,
        name: entry.creator.name,
        slug: slugify(entry.creator.name) || `cma-${entry.creator.id}`,
        description: entry.creator.description,
        bio,
        shortBio: trimShortBio(bio),
        disciplines,
        featured: index < FEATURED_COUNT,
        website: `https://www.clevelandart.org/art/collection/search?artist=${encodeURIComponent(entry.creator.name)}`,
        works: entry.works.slice(0, WORKS_PER_ARTIST).map((work) => ({
          cmaId: work.id,
          title: work.title,
          slug: `${slugify(work.title) || "work"}-${work.id}`,
          year: work.year,
          medium: work.medium,
          dimensions: work.dimensions,
          description: work.description,
          url: work.url,
          imageUrl: work.imageUrl,
          discipline: work.discipline,
        })),
      };
    }),
  };

  writeFileSync(SNAPSHOT_PATH, `${JSON.stringify(snapshot, null, 2)}\n`, "utf8");
  const workCount = snapshot.artists.reduce(
    (sum, artist) => sum + artist.works.length,
    0,
  );
  console.log(
    `Wrote ${snapshot.artists.length} artists / ${workCount} works → ${SNAPSHOT_PATH}`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
