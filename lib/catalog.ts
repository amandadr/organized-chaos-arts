import { stegaClean } from "next-sanity";
import { toneFromKey, type MediaTone } from "@/lib/media";
import { imageUrl } from "@/lib/sanity/image";
import type { ArtistCard, ArtworkCard } from "@/lib/sanity/types";
import { atlanticRegions, disciplines } from "@/sanity/schemas/lists";

export type ArtistGridItem = {
  slug: string;
  name: string;
  city: string;
  regionLabel: string;
  portraitUrl: string | null;
  portraitAlt: string;
  shortBio: string;
  tags: string[];
  tone: MediaTone;
};

export type ArtworkGridItem = {
  slug: string;
  title: string;
  imageUrl: string | null;
  imageAlt: string;
  medium: string;
  year: string | number | null;
  description: string | null;
  artistSlug: string | null;
  artistName: string | null;
  purchaseUrl: string | null;
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
    tags: [
      ...artist.disciplines.map((discipline) =>
        disciplineLabel(stegaClean(discipline)),
      ),
      artist.city,
    ],
    tone: toneFromKey(slug),
  };
}

export function artworkGridItemFromSanity(
  artwork: {
    slug: string;
    title: string;
    medium: string;
    year: number | null;
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
    imageAlt: artwork.image.alt || `${title} by ${artistName}`,
    medium: artwork.medium,
    year: artwork.year,
    description: artwork.description ?? null,
    artistSlug: stegaClean(artist.slug),
    artistName,
    purchaseUrl: artwork.purchaseUrl ?? null,
    tone: toneFromKey(slug),
  };
}

export function artworkGridItemFromSanityWithArtist(artwork: {
  slug: string;
  title: string;
  medium: string;
  year: number | null;
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
    tone: toneFromKey(slug),
  };
}

export function featuredFirst<T extends { featured?: boolean | null }>(items: readonly T[]) {
  return [
    ...items.filter((item) => item.featured),
    ...items.filter((item) => !item.featured),
  ];
}
