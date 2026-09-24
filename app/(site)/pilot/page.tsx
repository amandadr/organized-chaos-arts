import type { Metadata } from "next";
import { CatalogEmpty } from "@/components/sections/Cards";
import { ContactForm } from "@/components/sections/ContactForm";
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
import { getEditorialPage, getSiteSettings } from "@/lib/sanity/queries";
import { isSanityConfigured } from "@/sanity/config";

const fallback = {
  title: "Pilot",
  description:
    "A small group of working artists helping shape Organized Chaos Arts from the ground up.",
};

export async function generateMetadata(): Promise<Metadata> {
  return editorialMetadata(await getEditorialPage("pilot"), fallback);
}

export default async function Page() {
  const [page, settings] = await Promise.all([
    getEditorialPage("pilot"),
    getSiteSettings(),
  ]);
  const timeline = copyItems(page?.items);
  const image = heroImage(page);
  const configured = isSanityConfigured();

  return (
    <>
      <PageHero
        eyebrow={page?.eyebrow ?? "Pilot"}
        title={page?.title ?? fallback.title}
        body={page?.lede ?? missingPageBody(configured)}
        actions={[
          { href: "#apply", label: "Apply" },
          { href: "/for-artists", label: "Artist FAQ", variant: "secondary" },
        ]}
        tone="teal"
        image={image.src}
        imageAlt={image.alt}
        mediaLabel="First cohort"
      />
      <Section tone="goldenrod">
        <SectionIntro
          title={page?.secondaryTitle ?? "How the pilot runs"}
          body={
            page?.secondaryBody ??
            "Small on purpose. We would rather know twelve artists well than publish a hundred empty profiles."
          }
        />
        {timeline.length > 0 ? (
          <FeatureList items={timeline} palette="deep" surface="goldenrod" />
        ) : (
          <CatalogEmpty
            title="Timeline still being written"
            body={missingPageBody(configured)}
          />
        )}
      </Section>
      <Section id="apply">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-h2">Ask to be included</h2>
            <p className="mt-4 text-[color:var(--color-text-muted)]">
              Same honest limitation as the rest of the site: this form does
              not store anything yet. It is here so the invitation has a door.
            </p>
          </div>
          <ContactForm
            heading="Pilot application"
            submitLabel="Request a place"
            email={settings?.contactEmail}
          />
        </div>
      </Section>
      <CtaBanner
        tone="ink"
        title="Not ready to apply?"
        body="Walk the gallery anyway. The public pages are for looking, whether or not you ever send a bio."
        primaryHref="/gallery"
        primaryLabel="Gallery"
        secondaryHref="/values"
        secondaryLabel="Values"
      />
    </>
  );
}
