export const mediaTones = [
  "teal",
  "rust",
  "moss",
  "tangerine",
  "seafoam",
  "goldenrod",
  "oat",
  "cocoa",
  "ink",
] as const;

export type MediaTone = (typeof mediaTones)[number];

/** Stable presentation colour from a slug or other key — not a CMS field. */
export function toneFromKey(key: string): MediaTone {
  let hash = 0;
  for (let index = 0; index < key.length; index += 1) {
    hash = (hash + key.charCodeAt(index) * (index + 1)) % mediaTones.length;
  }
  return mediaTones[hash];
}
