import { stegaClean } from "next-sanity";
import { toneFromKey, type MediaTone } from "@/lib/media";
import {
  artistCardToken,
  disciplineToken,
  mediumToken,
  quietCardFill,
  regionToken,
  type PaletteToken,
} from "@/lib/palette";
import { imageUrl } from "@/lib/sanity/image";
import type { ArtistCard, ArtworkCard } from "@/lib/sanity/types";
import { atlanticRegions, disciplines } from "@/sanity/schemas/lists";

export type CatalogTag = {
  kind: "discipline" | "place";
  label: string;
  token: PaletteToken;
};

export type ArtistGridItem = {
  slug: string;
  name: string;
  city: string;
  regionLabel: string;
  portraitUrl: string | null;
  portraitAlt: string;
  shortBio: string;
  tags: CatalogTag[];
  fillToken: PaletteToken;
  tone: MediaTone;
};

export type ArtworkGridItem = {
  slug: string;
  title: string;
  imageUrl: string | null;
  imageFullUrl: string | null;
  imageAlt: string;
  medium: string;
  year: string | number | null;
  dimensions: string | null;
  description: string | null;
  artistSlug: string | null;
  artistName: string | null;
  purchaseUrl: string | null;
  fillToken: PaletteToken;
  tone: MediaTone;
};

const regionTitles = Object.fromEntries(
  atlanticRegions.map((region) => [region.value, region.title]),
) as Record<(typeof atlanticRegions)[number]["value"], string>;

const disciplineTitles = Object.fromEntries(
  disciplines.map((discipline) => [discipline.value, discipline.title]),
) as Record<(typeof disciplines)[number]["value"], string>;

export function regionLabel(region: string) {
  return regionTitles[region as keyof typeof regionTitles] ?? region;
}

export function disciplineLabel(value: string) {
  return disciplineTitles[value as keyof typeof disciplineTitles] ?? value;
}

export function artistTagsFrom(artist: {
  disciplines: readonly string[];
  city: string;
  region: string;
}): CatalogTag[] {
  return [
    ...artist.disciplines.map((discipline) => {
      const value = stegaClean(discipline);
      return {
        kind: "discipline" as const,
        label: disciplineLabel(value),
        token: disciplineToken(value),
      };
    }),
    {
      kind: "place" as const,
      label: artist.city,
      token: regionToken(),
    },
  ];
}

export function artistGridItemFromSanity(artist: {
  slug: string;
  name: string;
  city: string;
  region: string;
  disciplines: readonly string[];
  shortBio: string;
  portrait: ArtistCard["portrait"];
}): ArtistGridItem {
  const slug = stegaClean(artist.slug);
  const name = stegaClean(artist.name);
  return {
    slug,
    name,
    city: artist.city,
    regionLabel: regionLabel(artist.region),
    portraitUrl: imageUrl(artist.portrait, 1200),
    portraitAlt: artist.portrait.alt || `Portrait of ${name}`,
    shortBio: artist.shortBio,
    tags: artistTagsFrom(artist),
    fillToken: artistCardToken(slug),
    tone: toneFromKey(slug),
  };
}

export function artworkGridItemFromSanity(
  artwork: {
    slug: string;
    title: string;
    medium: string;
    year: number | null;
    dimensions?: string | null;
    description?: string | null;
    purchaseUrl?: string | null;
    image: ArtworkCard["image"];
  },
  artist: { slug: string; name: string },
): ArtworkGridItem {
  const slug = stegaClean(artwork.slug);
  const title = stegaClean(artwork.title);
  const artistName = stegaClean(artist.name);
  return {
    slug,
    title,
    imageUrl: imageUrl(artwork.image, 1600),
    imageFullUrl: imageUrl(artwork.image, 2400),
    imageAlt: artwork.image.alt || `${title} by ${artistName}`,
    medium: artwork.medium,
    year: artwork.year,
    dimensions: artwork.dimensions ?? null,
    description: artwork.description ?? null,
    artistSlug: stegaClean(artist.slug),
    artistName,
    purchaseUrl: artwork.purchaseUrl ?? null,
    fillToken: mediumToken(stegaClean(artwork.medium)),
    tone: toneFromKey(slug),
  };
}

export function artworkGridItemFromSanityWithArtist(artwork: {
  slug: string;
  title: string;
  medium: string;
  year: number | null;
  dimensions?: string | null;
  description?: string | null;
  purchaseUrl?: string | null;
  image: ArtworkCard["image"];
  artist: { slug: string; name: string };
}): ArtworkGridItem {
  return artworkGridItemFromSanity(artwork, artwork.artist);
}

export type ResourceGridItem = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  imageUrl: string | null;
  imageAlt: string;
  fillClass: string;
  tone: MediaTone;
};

export function resourceGridItemFromSanity(resource: {
  slug: string;
  title: string;
  category: string;
  summary: string;
  image: ArtworkCard["image"];
}): ResourceGridItem {
  const slug = stegaClean(resource.slug);
  const title = stegaClean(resource.title);
  return {
    slug,
    title,
    category: stegaClean(resource.category),
    summary: resource.summary,
    imageUrl: imageUrl(resource.image, 1600),
    imageAlt: resource.image.alt || title,
    fillClass: quietCardFill(stegaClean(resource.category)),
    tone: toneFromKey(slug),
  };
}

export function featuredFirst<T extends { featured?: boolean | null }>(items: readonly T[]) {
  return [
    ...items.filter((item) => item.featured),
    ...items.filter((item) => !item.featured),
  ];
}
