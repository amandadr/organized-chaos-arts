/**
 * Medium → discipline classification for the seed assert.
 * Keep in sync with `mediumMatchers` in `lib/palette.ts`.
 */

const mediumMatchers = [
  { pattern: /collage/i, discipline: "collage" },
  { pattern: /mixed/i, discipline: "mixed-media" },
  {
    pattern:
      /gelatin|darkroom|silver\s*print|photograph|film\s*photo|analogue\s*photo/i,
    discipline: "photography",
  },
  { pattern: /ink|illustrat|drawing|digital/i, discipline: "illustration" },
  {
    pattern: /linocut|etching|litho|woodcut|silkscreen|screen\s*print/i,
    discipline: "printmaking",
  },
  {
    pattern:
      /ceramic|stoneware|porcelain|pottery|clay|glaze|wheel-?thrown|hand-?built|salt-?glaze/i,
    discipline: "ceramics",
  },
  { pattern: /jewel|sterling|silver|gold|bead/i, discipline: "jewelry" },
  { pattern: /glass|blown/i, discipline: "glass" },
  { pattern: /textile|fibre|fiber|cloth|quilt|weave|wool/i, discipline: "textiles" },
  { pattern: /sculpt/i, discipline: "sculpture" },
  { pattern: /wood|maple|oak|walnut|salvage|timber|driftwood/i, discipline: "wood" },
  { pattern: /paint|oil|acrylic|gouache|watercolou?r/i, discipline: "painting" },
];

export function disciplineFromMedium(medium) {
  const match = mediumMatchers.find((entry) => entry.pattern.test(medium));
  return match?.discipline ?? "mixed-media";
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
