import type { Metadata } from "next";
import { ArtworkGrid, CatalogEmpty } from "@/components/sections/Cards";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionIntro } from "@/components/sections/Section";
import { artworkGridItemFromSanityWithArtist } from "@/lib/catalog";
import { getArtworks } from "@/lib/sanity/queries";
import { isSanityConfigured } from "@/sanity/config";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A curated collection of work from Organized Chaos artists across Atlantic Canada.",
};

export default async function Page() {
  const artworkRecords = await getArtworks();
  const artworks = artworkRecords.map(artworkGridItemFromSanityWithArtist);
  const lead = artworks[0];
  const configured = isSanityConfigured();

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Art from the community, hung with care"
        body="A curated collection of work from Organized Chaos artists. Scroll slowly, look closely, and follow the pieces back to the people who made them."
        actions={[
          { href: "/artists", label: "Meet the artists" },
          { href: "/for-artists", label: "Submit work", variant: "secondary" },
        ]}
        tone="goldenrod"
        artwork={lead}
        viewerItems={artworks}
        mediaLabel={lead ? lead.title : "Hung with care"}
      />
      <Section tone="seafoam">
        <SectionIntro
          title="On the wall this month"
          body="Every piece belongs to someone in the directory. Follow it back to the maker."
        />
        {artworks.length > 0 ? (
          <ArtworkGrid items={artworks} surface="seafoam" />
        ) : (
          <CatalogEmpty
            title="The wall is still empty"
            body={
              configured
                ? "No artworks are published yet. Add a document in Studio and it will show up here."
                : "The gallery reads from Sanity. Add a project ID, publish work in Studio, or run the seed script."
            }
          />
        )}
      </Section>
      <CtaBanner
        eyebrow="Collecting"
        title="Follow a piece back to its maker"
        body="Every work in the gallery belongs to someone in the directory. No anonymous drop, no marketplace cut."
        primaryHref="/artists"
        primaryLabel="Browse artists"
        secondaryHref="/resources"
        secondaryLabel="Read field notes"
      />
    </>
  );
}
