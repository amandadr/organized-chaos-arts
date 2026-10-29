/**
 * Development catalog built from the committed Cleveland CC0 snapshot.
 * Atlantic places and Unsplash portraits are deliberate stand-ins.
 */

import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { matchedDisciplineFromMedium } from "./classify.mjs";
import { placeForCreatorId } from "./places.mjs";
import { portraitForIndex, unsplashPortraitUrl } from "./portraits.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const snapshot = JSON.parse(
  readFileSync(join(__dirname, "cleveland-snapshot.json"), "utf8"),
);

const CREDIT =
  "Image and data from the Cleveland Museum of Art, released under Creative Commons Zero (CC0).";

function stripHtml(value) {
  return value.replace(/<[^>]+>/g, "").trim();
}

function withCredit(description) {
  const body = description ? stripHtml(description) : "";
  if (!body) return CREDIT;
  if (body.includes("Cleveland Museum of Art")) return body;
  return `${body}\n\n${CREDIT}`;
}

function portraitKeyFor(cmaId) {
  return `portrait-cma-${cmaId}`;
}

function workKeyFor(cmaId) {
  return `work-cma-${cmaId}`;
}

function disciplinesForWorks(works) {
  return [
    ...new Set(
      works.map(
        (work) => matchedDisciplineFromMedium(work.medium) ?? "mixed-media",
      ),
    ),
  ].sort();
}

function normalizeTitle(title) {
  return String(title ?? "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

function workQuality(work) {
  const accession = String(work.url ?? "")
    .split("/")
    .pop();
  const isPart = /\.[a-z]\d*$/i.test(accession ?? "");
  return (work.description ? 2 : 0) + (isPart ? 0 : 1);
}

/** Drop same-title / same-image CMA part records (e.g. 2011.122 vs 2011.122.a). */
function dedupeWorks(works) {
  const byTitle = new Map();
  const seenImages = new Set();

  for (const work of works) {
    const titleKey = normalizeTitle(work.title);
    const previous = byTitle.get(titleKey);
    if (previous) {
      if (workQuality(work) > workQuality(previous)) {
        seenImages.delete(previous.imageUrl);
        byTitle.set(titleKey, work);
        seenImages.add(work.imageUrl);
      }
      continue;
    }
    if (seenImages.has(work.imageUrl)) continue;
    byTitle.set(titleKey, work);
    seenImages.add(work.imageUrl);
  }

  return [...byTitle.values()];
}

const sortedArtists = [...snapshot.artists]
  .sort((a, b) => a.cmaId - b.cmaId)
  .map((artist) => ({
    ...artist,
    works: dedupeWorks(artist.works),
  }));

export const artists = sortedArtists.map((artist, index) => {
  const place = placeForCreatorId(artist.cmaId);
  const portrait = portraitForIndex(index);
  const disciplines = disciplinesForWorks(artist.works);
  return {
    _id: `artist.cma-${artist.cmaId}`,
    name: artist.name,
    slug: artist.slug,
    city: place.city,
    region: place.region,
    disciplines,
    featured: Boolean(artist.featured),
    website: artist.website,
    shortBio: artist.shortBio,
    bio: artist.bio,
    portraitKey: portraitKeyFor(artist.cmaId),
    portraitAlt: `${portrait.alt} (not a photograph of ${artist.name})`,
    portraitUrl: unsplashPortraitUrl(portrait.photoId),
    seo: {
      title: `${artist.name} — ${disciplines.join(", ")}`,
      description: artist.shortBio,
    },
  };
});

export const artworks = sortedArtists.flatMap((artist) =>
  artist.works.map((work, workIndex) => ({
    _id: `artwork.cma-${work.cmaId}`,
    title: work.title,
    slug: work.slug,
    artistId: `artist.cma-${artist.cmaId}`,
    year: work.year,
    medium: work.medium,
    dimensions: work.dimensions,
    description: withCredit(work.description),
    featured: Boolean(artist.featured) && workIndex === 0,
    imageKey: workKeyFor(work.cmaId),
    imageAlt: work.title
      ? `${work.title} by ${artist.name}`
      : `Artwork by ${artist.name}`,
    imageUrl: work.imageUrl,
  })),
);

/** Portrait and Cleveland work images uploaded by the seed. */
export const catalogImagePlan = [
  ...artists.map((artist) => [
    artist.portraitKey,
    artist.portraitUrl,
    `${artist.portraitKey}.jpg`,
  ]),
  ...artworks.map((artwork) => [
    artwork.imageKey,
    artwork.imageUrl,
    `${artwork.imageKey}.jpg`,
  ]),
];
