import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";
import { dataset, projectId } from "@/sanity/config";

const builder = createImageUrlBuilder({
  projectId: projectId || "unconfigured",
  dataset,
});

type ImageSource = {
  asset?: { _ref?: string | null } | null;
} | null;

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export function imageUrl(source: ImageSource, width: number) {
  if (!source?.asset?._ref) {
    return null;
  }
  return urlFor(source)
    .width(width)
    .fit("max")
    .auto("format")
    .quality(80)
    .url();
}
