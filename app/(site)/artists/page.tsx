import type { Metadata } from "next";
import {
  ArtistGrid,
  CatalogEmpty,
} from "@/components/sections/Cards";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { artistGridItemFromSanity, featuredFirst } from "@/lib/catalog";
import { getArtists } from "@/lib/sanity/queries";
import { isSanityConfigured } from "@/sanity/config";

export const metadata: Metadata = {
  title: "Artists",
  description:
    "A visual index of independent artists working across Atlantic Canada.",
};

export default async function Page() {
  const records = await getArtists();
  const artists = featuredFirst(records).map(artistGridItemFromSanity);
  const lead = artists[0];
  const configured = isSanityConfigured();

  return (
    <>
      <PageHero
        eyebrow="Directory"
        title="The artists of Organized Chaos"
        body="Independent makers across Atlantic Canada — ceramics, film, cloth, glass, wood, ink, and whatever else the neighbourhood is making."
        actions={
          lead
            ? [
                { href: `/artists/${lead.slug}`, label: "Open a profile" },
                {
                  href: "/gallery",
                  label: "View the work",
                  variant: "secondary",
                },
              ]
            : [
                { href: "/for-artists", label: "Join as artist" },
                { href: "/contact", label: "Ask a question", variant: "secondary" },
              ]
        }
        tone="ink"
        image={lead?.portraitUrl ?? undefined}
        imageAlt={lead?.portraitAlt}
        mediaLabel={lead?.name}
      />
      <Section tone="oat">
        {artists.length > 0 ? (
          <ArtistGrid items={artists} surface="oat" />
        ) : (
          <CatalogEmpty
            title="The wall is still empty"
            body={
              configured
                ? "No artists are published yet. Add a document in Studio and it will show up here."
                : "The directory reads from Sanity. Add a project ID to .env.local, publish artists in Studio, or run the seed script."
            }
          />
        )}
      </Section>
      <CtaBanner
        tone="goldenrod"
        eyebrow="For artists"
        title="Want to be in the room?"
        body="The pilot is open to independent makers in Atlantic Canada. A short bio and a few images is enough to start."
        primaryHref="/for-artists"
        primaryLabel="Join as artist"
        secondaryHref="/contact"
        secondaryLabel="Ask a question"
      />
    </>
  );
}
