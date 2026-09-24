import { disciplines } from "@/sanity/schemas/lists";

/**
 * Categorical colour roles for tags, types, and catalog cards.
 * @see docs/decisions/004-categorical-colour-roles.md
 */
export const paletteTokens = [
  "teal-green",
  "teal-blue",
  "teal-plum",
  "teal-umber",
  "rust-berry",
  "rust-ochre",
  "rust-jade",
  "rust-indigo",
  "cocoa-wine",
  "cocoa-olive",
  "cocoa-pine",
  "cocoa-midnight",
  "moss-khaki",
  "moss-leaf",
  "moss-navy",
  "moss-grape",
  "tangerine-punch",
  "tangerine-lemon",
  "tangerine-aqua",
  "tangerine-iris",
  "seafoam-mint",
  "seafoam-sky",
  "seafoam-orchid",
  "seafoam-peach",
  "goldenrod-coral",
  "goldenrod-chartreuse",
  "goldenrod-aqua",
  "goldenrod-violet",
] as const;

export type PaletteToken = (typeof paletteTokens)[number];

export type DisciplineValue = (typeof disciplines)[number]["value"];

/**
 * Body-text foreground that meets WCAG 2.2 AA (4.5:1).
 * `null` means neither ink nor paper passes — do not use on text surfaces.
 */
export const paletteOn: Record<PaletteToken, "ink" | "paper" | null> = {
  "teal-green": "paper",
  "teal-blue": "paper",
  "teal-plum": "paper",
  "teal-umber": "paper",
  "rust-berry": "paper",
  "rust-ochre": null,
  "rust-jade": null,
  "rust-indigo": "paper",
  "cocoa-wine": "paper",
  "cocoa-olive": "paper",
  "cocoa-pine": "paper",
  "cocoa-midnight": "paper",
  "moss-khaki": "paper",
  "moss-leaf": "paper",
  "moss-navy": "paper",
  "moss-grape": "paper",
  "tangerine-punch": null,
  "tangerine-lemon": "ink",
  "tangerine-aqua": "ink",
  "tangerine-iris": "paper",
  "seafoam-mint": "ink",
  "seafoam-sky": "ink",
  "seafoam-orchid": "ink",
  "seafoam-peach": "ink",
  "goldenrod-coral": null,
  "goldenrod-chartreuse": "ink",
  "goldenrod-aqua": "ink",
  "goldenrod-violet": "paper",
};

export const unusedForTextTokens = [
  "rust-ochre",
  "rust-jade",
  "tangerine-punch",
  "goldenrod-coral",
] as const satisfies readonly PaletteToken[];

/** Artist directory cards — light family, never used for tags or media. */
export const artistCardTokens = [
  "seafoam-mint",
  "seafoam-sky",
  "seafoam-orchid",
  "seafoam-peach",
] as const satisfies readonly PaletteToken[];

/** Every city/region chip uses this one token so place is not mistaken for a medium. */
export const placeToken = "moss-leaf" as const satisfies PaletteToken;

/**
 * Quiet brand fills for page furniture (home lists, values, FAQs, resources).
 * Not for medium/location coding — those stay on palette tokens.
 */
export const quietFillClasses = [
  "oca-fill-paper",
  "oca-fill-oat",
  "oca-fill-seafoam",
  "oca-fill-goldenrod",
] as const;

export const disciplineTokens = {
  ceramics: "teal-green",
  glass: "teal-blue",
  textiles: "teal-plum",
  wood: "teal-umber",
  jewelry: "rust-berry",
  photography: "rust-indigo",
  collage: "cocoa-wine",
  illustration: "cocoa-olive",
  printmaking: "moss-navy",
  "mixed-media": "cocoa-midnight",
  sculpture: "moss-khaki",
  painting: "moss-grape",
} as const satisfies Record<DisciplineValue, PaletteToken>;

/**
 * Order matters: more specific practices win before material words that overlap
 * (e.g. gelatin silver print before printmaking; sculpture before driftwood→wood).
 */
const mediumMatchers: readonly {
  pattern: RegExp;
  discipline: DisciplineValue;
}[] = [
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
    pattern: /ceramic|stoneware|porcelain|pottery|clay|glaze|wheel-?thrown|hand-?built|salt-?glaze/i,
    discipline: "ceramics",
  },
  { pattern: /jewel|sterling|silver|gold|bead/i, discipline: "jewelry" },
  { pattern: /glass|blown/i, discipline: "glass" },
  { pattern: /textile|fibre|fiber|cloth|quilt|weave|wool/i, discipline: "textiles" },
  { pattern: /sculpt/i, discipline: "sculpture" },
  { pattern: /wood|maple|oak|walnut|salvage|timber|driftwood/i, discipline: "wood" },
  { pattern: /paint|oil|acrylic|gouache|watercolou?r/i, discipline: "painting" },
];

export function tokenFromKey<T extends readonly PaletteToken[]>(
  key: string,
  tokens: T,
): T[number] {
  return tokens[indexFromKey(key, tokens.length)];
}

function indexFromKey(key: string, length: number): number {
  let hash = 0;
  for (let index = 0; index < key.length; index += 1) {
    hash = (hash + key.charCodeAt(index) * (index + 1)) % length;
  }
  return hash;
}

export function paletteFillClass(token: PaletteToken): string {
  return paletteFillClassName[token];
}

/** Full class names so Tailwind keeps the matching CSS in `@layer components`. */
const paletteFillClassName: Record<PaletteToken, string> = {
  "teal-green": "oca-fill-palette-teal-green",
  "teal-blue": "oca-fill-palette-teal-blue",
  "teal-plum": "oca-fill-palette-teal-plum",
  "teal-umber": "oca-fill-palette-teal-umber",
  "rust-berry": "oca-fill-palette-rust-berry",
  "rust-ochre": "oca-fill-palette-rust-ochre",
  "rust-jade": "oca-fill-palette-rust-jade",
  "rust-indigo": "oca-fill-palette-rust-indigo",
  "cocoa-wine": "oca-fill-palette-cocoa-wine",
  "cocoa-olive": "oca-fill-palette-cocoa-olive",
  "cocoa-pine": "oca-fill-palette-cocoa-pine",
  "cocoa-midnight": "oca-fill-palette-cocoa-midnight",
  "moss-khaki": "oca-fill-palette-moss-khaki",
  "moss-leaf": "oca-fill-palette-moss-leaf",
  "moss-navy": "oca-fill-palette-moss-navy",
  "moss-grape": "oca-fill-palette-moss-grape",
  "tangerine-punch": "oca-fill-palette-tangerine-punch",
  "tangerine-lemon": "oca-fill-palette-tangerine-lemon",
  "tangerine-aqua": "oca-fill-palette-tangerine-aqua",
  "tangerine-iris": "oca-fill-palette-tangerine-iris",
  "seafoam-mint": "oca-fill-palette-seafoam-mint",
  "seafoam-sky": "oca-fill-palette-seafoam-sky",
  "seafoam-orchid": "oca-fill-palette-seafoam-orchid",
  "seafoam-peach": "oca-fill-palette-seafoam-peach",
  "goldenrod-coral": "oca-fill-palette-goldenrod-coral",
  "goldenrod-chartreuse": "oca-fill-palette-goldenrod-chartreuse",
  "goldenrod-aqua": "oca-fill-palette-goldenrod-aqua",
  "goldenrod-violet": "oca-fill-palette-goldenrod-violet",
};

export function artistCardToken(slug: string): PaletteToken {
  return tokenFromKey(slug, artistCardTokens);
}

export function quietCardFill(indexOrKey: number | string): string {
  const index =
    typeof indexOrKey === "number"
      ? indexOrKey
      : indexFromKey(indexOrKey, quietFillClasses.length);
  return quietFillClasses[index % quietFillClasses.length];
}

export type SurfaceTone =
  | "default"
  | "paper"
  | "oat"
  | "seafoam"
  | "tangerine"
  | "goldenrod"
  | "ink"
  | "teal"
  | "rust";

const surfaceMatchingFill: Record<SurfaceTone, string | null> = {
  default: "oca-fill-paper",
  paper: "oca-fill-paper",
  oat: "oca-fill-oat",
  seafoam: "oca-fill-seafoam",
  tangerine: "oca-fill-tangerine",
  goldenrod: "oca-fill-goldenrod",
  ink: "oca-fill-ink",
  teal: "oca-fill-teal",
  rust: "oca-fill-rust",
};

export const deepFillClasses = [
  "oca-fill-paper",
  "oca-fill-rust",
  "oca-fill-teal",
] as const;

/**
 * Pick fills that do not match the section surface or the previous cards
 * (covers left/above neighbors in a 2- or 3-column grid).
 */
export function distinctFillSequence(
  preferred: readonly string[],
  pool: readonly string[],
  surface: SurfaceTone = "default",
): string[] {
  const avoid = surfaceMatchingFill[surface];
  const usable = [...new Set(pool.filter((fill) => fill !== avoid))];
  if (usable.length === 0) {
    return preferred.map(() => pool[0] ?? "oca-fill-paper");
  }

  const recentWindow = Math.max(1, Math.min(3, usable.length - 1));
  const assigned: string[] = [];
  for (const want of preferred) {
    const recent = new Set(assigned.slice(-recentWindow));
    const ranked = usable.includes(want)
      ? [want, ...usable.filter((fill) => fill !== want)]
      : usable;
    assigned.push(ranked.find((fill) => !recent.has(fill)) ?? ranked[0]);
  }
  return assigned;
}

export function quietFillSequence(
  countOrPreferred: number | readonly string[],
  surface: SurfaceTone,
): string[] {
  const preferred =
    typeof countOrPreferred === "number"
      ? Array.from(
          { length: countOrPreferred },
          (_, index) => quietFillClasses[index % quietFillClasses.length],
        )
      : countOrPreferred;
  return distinctFillSequence(preferred, quietFillClasses, surface);
}

export function artistFillSequence(
  slugs: readonly string[],
  surface: SurfaceTone,
): string[] {
  const pool = artistCardTokens.map((token) => paletteFillClass(token));
  const preferred = slugs.map((slug) => paletteFillClass(artistCardToken(slug)));
  return distinctFillSequence(preferred, pool, surface);
}

export function artworkFillSequence(
  mediumTokens: readonly PaletteToken[],
  surface: SurfaceTone,
): string[] {
  const preferred = mediumTokens.map((token) => paletteFillClass(token));
  const fallbacks = quietFillClasses.filter(
    (fill) => fill !== surfaceMatchingFill[surface],
  );
  const assigned: string[] = [];
  for (const want of preferred) {
    const pool = [...new Set([want, ...fallbacks])].filter(
      (fill) => fill !== surfaceMatchingFill[surface],
    );
    const recentWindow = Math.max(1, Math.min(3, pool.length - 1));
    const recent = new Set(assigned.slice(-recentWindow));
    const ranked = pool.includes(want)
      ? [want, ...pool.filter((fill) => fill !== want)]
      : pool;
    assigned.push(ranked.find((fill) => !recent.has(fill)) ?? ranked[0]);
  }
  return assigned;
}

export function deepFillSequence(count: number, surface: SurfaceTone): string[] {
  const preferred = Array.from(
    { length: count },
    (_, index) => deepFillClasses[index % deepFillClasses.length],
  );
  return distinctFillSequence(preferred, deepFillClasses, surface);
}

export function disciplineToken(value: string): PaletteToken {
  if (value in disciplineTokens) {
    return disciplineTokens[value as DisciplineValue];
  }
  return disciplineTokens["mixed-media"];
}

export function regionToken(): PaletteToken {
  return placeToken;
}

export function disciplineFromMedium(medium: string): DisciplineValue {
  const match = mediumMatchers.find((entry) => entry.pattern.test(medium));
  return match?.discipline ?? "mixed-media";
}

export function mediumToken(medium: string): PaletteToken {
  return disciplineToken(disciplineFromMedium(medium));
}
