import { isSanityConfigured } from "@/sanity/config";
import type { editorialPageIds, faqGroups } from "@/sanity/schemas/lists";
import {
  artistBySlugQuery,
  artistSlugsQuery,
  artistsQuery,
  artworksQuery,
  editorialPageQuery,
  faqsByGroupQuery,
  featuredArtworksQuery,
  resourceBySlugQuery,
  resourceSlugsQuery,
  resourcesQuery,
  siteSettingsQuery,
  valuesQuery,
} from "@/sanity/queries";
import { sanityFetch } from "./live";

export type FaqGroup = (typeof faqGroups)[number]["value"];
export type EditorialPageId = (typeof editorialPageIds)[number]["value"];

export async function getSiteSettings() {
  if (!isSanityConfigured()) return null;
  const { data } = await sanityFetch({
    query: siteSettingsQuery,
    stega: false,
  });
  return data;
}

export async function getArtists() {
  if (!isSanityConfigured()) return [];
  const { data } = await sanityFetch({ query: artistsQuery });
  return data ?? [];
}

export async function getArtistSlugs() {
  if (!isSanityConfigured()) return [];
  const { data } = await sanityFetch({
    query: artistSlugsQuery,
    perspective: "published",
    stega: false,
  });
  return data ?? [];
}

export async function getArtistBySlug(
  slug: string,
  options: { stega?: boolean } = {},
) {
  if (!isSanityConfigured()) return null;
  const { data } = await sanityFetch({
    query: artistBySlugQuery,
    params: { slug },
    ...(options.stega === false ? { stega: false as const } : {}),
  });
  return data;
}

export async function getArtworks() {
  if (!isSanityConfigured()) return [];
  const { data } = await sanityFetch({ query: artworksQuery });
  return data ?? [];
}

export async function getFeaturedArtworks() {
  if (!isSanityConfigured()) return [];
  const { data } = await sanityFetch({ query: featuredArtworksQuery });
  return data ?? [];
}

export async function getResources() {
  if (!isSanityConfigured()) return [];
  const { data } = await sanityFetch({ query: resourcesQuery });
  return data ?? [];
}

export async function getResourceSlugs() {
  if (!isSanityConfigured()) return [];
  const { data } = await sanityFetch({
    query: resourceSlugsQuery,
    perspective: "published",
    stega: false,
  });
  return data ?? [];
}

export async function getResourceBySlug(
  slug: string,
  options: { stega?: boolean } = {},
) {
  if (!isSanityConfigured()) return null;
  const { data } = await sanityFetch({
    query: resourceBySlugQuery,
    params: { slug },
    ...(options.stega === false ? { stega: false as const } : {}),
  });
  return data;
}

export async function getValues() {
  if (!isSanityConfigured()) return [];
  const { data } = await sanityFetch({ query: valuesQuery });
  return data ?? [];
}

export async function getFaqs(group: FaqGroup) {
  if (!isSanityConfigured()) return [];
  const { data } = await sanityFetch({
    query: faqsByGroupQuery,
    params: { group },
  });
  return data ?? [];
}

export async function getEditorialPage(pageId: EditorialPageId) {
  if (!isSanityConfigured()) return null;
  const { data } = await sanityFetch({
    query: editorialPageQuery,
    params: { pageId },
  });
  return data;
}
