import type { Metadata, Viewport } from "next";
import { NextStudioLayout } from "next-sanity/studio";
import {
  metadata as studioMetadata,
  viewport as studioViewport,
} from "next-sanity/studio";

export const metadata: Metadata = {
  ...studioMetadata,
  title: {
    absolute: "Sanity Studio",
  },
};

export const viewport: Viewport = studioViewport;

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <NextStudioLayout>{children}</NextStudioLayout>;
}
