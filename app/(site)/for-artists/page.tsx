import type { Metadata } from "next";
import { CatalogEmpty } from "@/components/sections/Cards";
import { ContactForm } from "@/components/sections/ContactForm";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FaqList, FeatureList } from "@/components/sections/Lists";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionIntro } from "@/components/sections/Section";
import {
  copyItems,
  editorialMetadata,
  heroImage,
  missingPageBody,
} from "@/lib/editorial";
import {
  getEditorialPage,
  getFaqs,
  getSiteSettings,
} from "@/lib/sanity/queries";
import { isSanityConfigured } from "@/sanity/config";

const fallback = {
  title: "For artists",
  description:
    "A home for independent artists who want to be seen, not sold to.",
};

export async function generateMetadata(): Promise<Metadata> {
  return editorialMetadata(await getEditorialPage("for-artists"), fallback);
}

export default async function Page() {
  const [page, faqs, settings] = await Promise.all([
    getEditorialPage("for-artists"),
    getFaqs("artists"),
    getSiteSettings(),
  ]);
  const steps = copyItems(page?.items);
  const image = heroImage(page);
  const configured = isSanityConfigured();

  return (
    <>
      <PageHero
        eyebrow={page?.eyebrow ?? "Welcome"}
        title={page?.title ?? fallback.title}
        body={page?.lede ?? missingPageBody(configured)}
        actions={[
          { href: "#apply", label: "Apply to the pilot" },
          { href: "/pilot", label: "How the pilot works", variant: "secondary" },
        ]}
        tone="rust"
        image={image.src}
        imageAlt={image.alt}
        mediaLabel="Open studio"
      />
      <Section tone="seafoam">
        <SectionIntro
          title={page?.secondaryTitle ?? "What joining actually means"}
          body={
            page?.secondaryBody ??
            "A few hours to gather images. No posting schedule. No marketplace fees hiding in the footer."
          }
        />
        {steps.length > 0 ? (
          <FeatureList items={steps} />
        ) : (
          <CatalogEmpty
            title="Steps still being written"
            body={missingPageBody(configured)}
          />
        )}
      </Section>
      <Section tone="oat">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <SectionIntro
            title="Questions we hear first"
            body="If your answer is not here, write to us. We would rather talk than guess."
          />
          {faqs.length > 0 ? (
            <FaqList items={faqs} />
          ) : (
            <CatalogEmpty
              title="No artist FAQs yet"
              body={missingPageBody(configured)}
            />
          )}
        </div>
      </Section>
      <Section id="apply" tone="goldenrod">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <p className="text-eyebrow text-[color:var(--color-brand-cool)]">
              Pilot
            </p>
            <h2 className="text-h2 mt-3">Tell us who you are</h2>
            <p className="mt-4 text-[color:var(--color-text-muted)]">
              This form is a stand-in until applications are stored for real.
              Use Contact if you need a human now.
            </p>
          </div>
          <ContactForm
            heading="Artist inquiry"
            submitLabel="Submit inquiry"
            email={settings?.contactEmail}
          />
        </div>
      </Section>
      <CtaBanner
        tone="ink"
        title="Prefer to read first?"
        body="Community standards, the pilot timeline, and the values behind the directory are public on purpose."
        primaryHref="/values"
        primaryLabel="Values"
        secondaryHref="/pilot"
        secondaryLabel="Pilot details"
      />
    </>
  );
}
