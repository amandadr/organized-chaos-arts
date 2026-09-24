import type { Metadata } from "next";
import { CatalogEmpty } from "@/components/sections/Cards";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionIntro } from "@/components/sections/Section";
import {
  ArtworkViewer,
  ArtworkViewerTrigger,
} from "@/components/ui/ArtworkViewer";
import { artworkGridItemFromSanityWithArtist } from "@/lib/catalog";
import { editorialMetadata, heroImage, missingPageBody } from "@/lib/editorial";
import { getArtworks, getEditorialPage } from "@/lib/sanity/queries";
import { isSanityConfigured } from "@/sanity/config";

const fallback = {
  title: "Instagram",
  description:
    "Studio glimpses and community highlights from Organized Chaos Arts.",
};

export async function generateMetadata(): Promise<Metadata> {
  return editorialMetadata(await getEditorialPage("instagram"), fallback);
}

export default async function Page() {
  const [page, artworkRecords] = await Promise.all([
    getEditorialPage("instagram"),
    getArtworks(),
  ]);
  const artworks = artworkRecords
    .map(artworkGridItemFromSanityWithArtist)
    .slice(0, 12);
  const lead = artworks[0];
  const image = heroImage(page);
  const configured = isSanityConfigured();
  // Prefer Studio hero art; otherwise hang a catalogue lead and open the viewer.
  const heroArtwork = image.src ? undefined : lead;

  return (
    <>
      <PageHero
        eyebrow={page?.eyebrow ?? "Feed"}
        title={page?.title ?? fallback.title}
        body={page?.lede ?? missingPageBody(configured)}
        actions={[
          { href: "/gallery", label: "Open the gallery" },
          { href: "/contact", label: "Send a studio shot", variant: "secondary" },
        ]}
        tone="cocoa"
        image={image.src}
        imageAlt={image.alt}
        artwork={heroArtwork}
        viewerItems={heroArtwork ? artworks : undefined}
        mediaLabel="Daily looking"
      />
      <Section tone="tangerine">
        <SectionIntro
          title={page?.secondaryTitle ?? "Stills from the directory"}
          body={
            page?.secondaryBody ??
            "A grid from the catalogue until a live feed is connected."
          }
        />
        {artworks.length > 0 ? (
          <ArtworkViewer items={artworks}>
            <ul className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {artworks.map((artwork) => (
                <li key={artwork.slug} className="min-w-0">
                  <ArtworkViewerTrigger artwork={artwork} ratio="square" />
                </li>
              ))}
            </ul>
          </ArtworkViewer>
        ) : (
          <CatalogEmpty
            title="No stills yet"
            body={
              configured
                ? "No artworks are published yet. Add work in Studio and a grid will fill this page."
                : "This page reads from Sanity. Connect a project, then publish work or run the seed script."
            }
          />
        )}
      </Section>
      <CtaBanner
        tone="teal"
        title="The live feed comes after the looking"
        body="We would rather hang the work properly than paste an unstyled embed. Follow the gallery while the pipe gets built."
        primaryHref="/gallery"
        primaryLabel="Gallery"
        secondaryHref="/artists"
        secondaryLabel="Artists"
      />
    </>
  );
}
