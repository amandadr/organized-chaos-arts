import type { Metadata } from "next";
import { CatalogEmpty, ValueGrid } from "@/components/sections/Cards";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FaqList } from "@/components/sections/Lists";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionIntro } from "@/components/sections/Section";
import {
  editorialMetadata,
  heroImage,
  missingPageBody,
} from "@/lib/editorial";
import { getEditorialPage, getFaqs, getValues } from "@/lib/sanity/queries";
import { isSanityConfigured } from "@/sanity/config";

const fallback = {
  title: "Values",
  description:
    "Shared community standards for Organized Chaos Arts — how we look, speak, and share the work.",
};

export async function generateMetadata(): Promise<Metadata> {
  return editorialMetadata(await getEditorialPage("values"), fallback);
}

export default async function Page() {
  const [page, values, faqs] = await Promise.all([
    getEditorialPage("values"),
    getValues(),
    getFaqs("values"),
  ]);
  const image = heroImage(page);
  const configured = isSanityConfigured();

  return (
    <>
      <PageHero
        eyebrow={page?.eyebrow ?? "Values"}
        title={page?.title ?? fallback.title}
        body={page?.lede ?? missingPageBody(configured)}
        actions={[
          { href: "/for-artists", label: "For artists" },
          { href: "/contact", label: "Contact", variant: "secondary" },
        ]}
        tone="cocoa"
        image={image.src}
        imageAlt={image.alt}
        mediaLabel="Ground rules"
      />
      <Section tone="teal">
        <SectionIntro
          title={page?.secondaryTitle ?? "What we will not trade away"}
          body={
            page?.secondaryBody ??
            "Commitments that survive the pilot, the CMS, and whatever comes after membership."
          }
          invert
        />
        {values.length > 0 ? (
          <ValueGrid items={values} surface="teal" />
        ) : (
          <CatalogEmpty
            title="Values still being written"
            body={missingPageBody(configured)}
          />
        )}
      </Section>
      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <SectionIntro
            title="In the room"
            body="Short answers for the situations that usually need a longer meeting."
          />
          {faqs.length > 0 ? (
            <FaqList items={faqs} surface="default" />
          ) : (
            <CatalogEmpty
              title="No standards listed yet"
              body={missingPageBody(configured)}
            />
          )}
        </div>
      </Section>
      <CtaBanner
        tone="tangerine"
        title="If these are your rules too"
        body="Apply to the pilot, or write if you want to help hold the standard as the directory grows."
        primaryHref="/for-artists"
        primaryLabel="Apply"
        secondaryHref="/support"
        secondaryLabel="Support the work"
      />
    </>
  );
}
