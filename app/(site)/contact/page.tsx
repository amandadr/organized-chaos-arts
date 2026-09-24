import type { Metadata } from "next";
import { CatalogEmpty } from "@/components/sections/Cards";
import { ContactForm } from "@/components/sections/ContactForm";
import { FaqList } from "@/components/sections/Lists";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import {
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
  title: "Contact",
  description: "Write to the people behind Organized Chaos Arts. We read everything.",
};

export async function generateMetadata(): Promise<Metadata> {
  return editorialMetadata(await getEditorialPage("contact"), fallback);
}

export default async function Page() {
  const [page, faqs, settings] = await Promise.all([
    getEditorialPage("contact"),
    getFaqs("contact"),
    getSiteSettings(),
  ]);
  const image = heroImage(page);
  const configured = isSanityConfigured();
  const email = settings?.contactEmail ?? null;

  return (
    <>
      <PageHero
        eyebrow={page?.eyebrow ?? "Reach out"}
        title={page?.title ?? fallback.title}
        body={page?.lede ?? missingPageBody(configured)}
        actions={[
          { href: "/instagram", label: "Instagram page" },
          { href: "/support", label: "Support", variant: "secondary" },
        ]}
        tone="oat"
        image={image.src}
        imageAlt={image.alt}
        mediaLabel="Mailbox"
      />
      <Section tone="oat">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_0.9fr]">
          <ContactForm email={email} />
          <div>
            <h2 className="text-h3">{page?.secondaryTitle ?? "Before you write"}</h2>
            <p className="oca-prose mt-3 mb-8 whitespace-pre-line text-[color:var(--color-text-muted)]">
              {page?.secondaryBody ??
                "Artist applications can also start on For artists. Press, partnerships, and corrections can use this form."}
            </p>
            {faqs.length > 0 ? (
              <FaqList items={faqs} surface="oat" />
            ) : (
              <CatalogEmpty
                title="No contact notes yet"
                body={missingPageBody(configured)}
              />
            )}
          </div>
        </div>
      </Section>
    </>
  );
}
