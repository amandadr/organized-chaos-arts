/**
 * Medium → discipline classification for the seed assert.
 * Keep in sync with `mediumMatchers` in `lib/palette.ts`.
 */

const mediumMatchers = [
  { pattern: /collage/i, discipline: "collage" },
  { pattern: /mixed/i, discipline: "mixed-media" },
  {
    pattern:
      /gelatin|darkroom|silver\s*print|photograph|albumen|daguerre|film\s*photo|analogue\s*photo/i,
    discipline: "photography",
  },
  {
    pattern: /ink|illustrat|drawing|charcoal|pastel|graphite|chalk|wash|brush|digital/i,
    discipline: "illustration",
  },
  {
    pattern:
      /linocut|etching|litho|woodcut|engraving|mezzotint|aquatint|silkscreen|screen\s*print/i,
    discipline: "printmaking",
  },
  {
    pattern:
      /ceramic|earthenware|stoneware|porcelain|pottery|clay|terracotta|glaze|wheel-?thrown|hand-?built|salt-?glaze/i,
    discipline: "ceramics",
  },
  { pattern: /jewel|sterling|necklace|brooch|bracelet|bead/i, discipline: "jewelry" },
  { pattern: /glass|blown|stained\s*glass/i, discipline: "glass" },
  {
    pattern: /textile|fibre|fiber|cloth|quilt|weave|wool|silk|linen|tapestry|embroidery/i,
    discipline: "textiles",
  },
  {
    pattern: /sculpt|bronze|marble|alabaster/i,
    discipline: "sculpture",
  },
  {
    pattern: /paint|oil|acrylic|gouache|tempera|fresco|watercolou?r/i,
    discipline: "painting",
  },
  {
    pattern: /wood|maple|oak|walnut|salvage|timber|driftwood/i,
    discipline: "wood",
  },
];

/**
 * Returns a discipline only when a matcher hits. Used by the Cleveland fetch
 * so unmatched museum techniques are skipped instead of falling through to mixed-media.
 */
export function matchedDisciplineFromMedium(medium) {
  if (!medium) return null;
  const match = mediumMatchers.find((entry) => entry.pattern.test(medium));
  return match?.discipline ?? null;
}

export function disciplineFromMedium(medium) {
  return matchedDisciplineFromMedium(medium) ?? "mixed-media";
}

/**
 * Throws if any artwork's classified discipline is outside its artist's disciplines.
 */
export function assertArtworkDisciplines(artists, artworks) {
  const byId = new Map(artists.map((artist) => [artist._id, artist]));
  const offenders = [];

  for (const artwork of artworks) {
    const artist = byId.get(artwork.artistId);
    if (!artist) {
      offenders.push(`${artwork._id}: missing artist ${artwork.artistId}`);
      continue;
    }
    const classified = disciplineFromMedium(artwork.medium);
    if (!artist.disciplines.includes(classified)) {
      offenders.push(
        `${artwork._id} "${artwork.medium}" → ${classified}; artist has [${artist.disciplines.join(", ")}]`,
      );
    }
  }

  if (offenders.length > 0) {
    throw new Error(
      `Seed medium classification mismatch (${offenders.length}):\n- ${offenders.join("\n- ")}`,
    );
  }
}
