import type { Metadata } from "next";
import { stegaClean } from "next-sanity";
import { imageUrl } from "@/lib/sanity/image";
import type { EditorialPage } from "@/lib/sanity/types";

export function editorialMetadata(
  page: {
    title: string;
    lede: string;
    seo: { title?: string | null; description?: string | null } | null;
  } | null,
  fallback: { title: string; description: string },
): Metadata {
  const title = page?.seo?.title || page?.title || fallback.title;
  const description = page?.seo?.description || page?.lede || fallback.description;
  return { title, description };
}

export function copyItems(
  items: EditorialPage["items"] | null | undefined,
): { title: string; body: string }[] {
  return (items ?? []).flatMap((item) =>
    item?.title && item.body ? [{ title: item.title, body: item.body }] : [],
  );
}

export function heroImage(page: { image: EditorialPage["image"] } | null) {
  if (!page?.image) return { src: undefined as string | undefined, alt: undefined as string | undefined };
  return {
    src: imageUrl(page.image, 1600) ?? undefined,
    alt: page.image.alt ? stegaClean(page.image.alt) : undefined,
  };
}

export function missingPageBody(configured: boolean) {
  return configured
    ? "This page has no published copy yet. Add a Page copy document in Studio."
    : "This page reads from Sanity. Connect a project, then publish copy or run the seed script.";
}
