import type { Metadata } from "next";
import {
  CatalogEmpty,
  ResourceGrid,
} from "@/components/sections/Cards";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionIntro } from "@/components/sections/Section";
import { featuredFirst, resourceGridItemFromSanity } from "@/lib/catalog";
import { getResources } from "@/lib/sanity/queries";
import { isSanityConfigured } from "@/sanity/config";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Field notes, pricing thoughts, and studio habits for working artists.",
};

export default async function Page() {
  const records = featuredFirst(await getResources());
  const resources = records.map(resourceGridItemFromSanity);
  const lead = resources[0];
  const configured = isSanityConfigured();

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="The field notes that keep a practice alive"
        body="Essays and practical notes from the community. Not a content mill — a small shelf of things worth rereading."
        actions={[
          {
            href: lead ? `/resources/${lead.slug}` : "/for-artists",
            label: lead ? "Read a sample" : "For artists",
          },
          { href: "/for-artists", label: "For artists", variant: "secondary" },
        ]}
        tone="goldenrod"
        image={lead?.imageUrl ?? undefined}
        imageAlt={lead?.imageAlt}
        mediaLabel="Sketchbook"
      />
      <Section tone="seafoam">
        <SectionIntro
          title="From the shelf"
          body="Notes from the community. Follow a title into the full piece."
        />
        {resources.length > 0 ? (
          <ResourceGrid items={resources} />
        ) : (
          <CatalogEmpty
            title="The shelf is empty"
            body={
              configured
                ? "No resources are published yet. Add a document in Studio."
                : "Resources read from Sanity. Connect a project, then publish notes or run the seed script."
            }
          />
        )}
      </Section>
      <CtaBanner
        tone="tangerine"
        title="Have a note worth sharing?"
        body="Send the idea. If it belongs on the shelf, we will edit it with you."
        primaryHref="/contact"
        primaryLabel="Send a note"
        secondaryHref="/artists"
        secondaryLabel="Meet the artists"
      />
    </>
  );
}
