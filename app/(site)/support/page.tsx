import type { Metadata } from "next";
import { CatalogEmpty } from "@/components/sections/Cards";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FeatureList } from "@/components/sections/Lists";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionIntro } from "@/components/sections/Section";
import {
  copyItems,
  editorialMetadata,
  heroImage,
  missingPageBody,
} from "@/lib/editorial";
import { getEditorialPage } from "@/lib/sanity/queries";
import { isSanityConfigured } from "@/sanity/config";

const fallback = {
  title: "Support",
  description:
    "How to keep Organized Chaos Arts alive while membership and donations are still on the way.",
};

export async function generateMetadata(): Promise<Metadata> {
  return editorialMetadata(await getEditorialPage("support"), fallback);
}

export default async function Page() {
  const page = await getEditorialPage("support");
  const ways = copyItems(page?.items);
  const image = heroImage(page);
  const configured = isSanityConfigured();

  return (
    <>
      <PageHero
        eyebrow={page?.eyebrow ?? "Support"}
        title={page?.title ?? fallback.title}
        body={page?.lede ?? missingPageBody(configured)}
        actions={[
          { href: "/for-artists", label: "Join as artist" },
          { href: "/contact", label: "Volunteer a skill", variant: "secondary" },
        ]}
        tone="goldenrod"
        image={image.src}
        imageAlt={image.alt}
        mediaLabel="Community fuel"
      />
      <Section tone="oat">
        <SectionIntro
          title={page?.secondaryTitle ?? "What actually helps right now"}
          body={
            page?.secondaryBody ??
            "We would rather say this plainly than put a fake donate button on the page."
          }
        />
        {ways.length > 0 ? (
          <FeatureList items={ways} palette="deep" />
        ) : (
          <CatalogEmpty
            title="Support notes still being written"
            body={missingPageBody(configured)}
          />
        )}
      </Section>
      <CtaBanner
        tone="ink"
        title="If you have time instead of money"
        body="Editing, photography, translation, and hanging help will matter as soon as the first physical wall exists. Tell us what you can do."
        primaryHref="/contact"
        primaryLabel="Offer help"
        secondaryHref="/about"
        secondaryLabel="About OCA"
      />
    </>
  );
}
