import type { Metadata } from "next";
import Link from "next/link";
import { CatalogEmpty } from "@/components/sections/Cards";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FeatureList } from "@/components/sections/Lists";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionIntro } from "@/components/sections/Section";
import { MediaFrame } from "@/components/ui/MediaFrame";
import {
  copyItems,
  editorialMetadata,
  heroImage,
  missingPageBody,
} from "@/lib/editorial";
import { getEditorialPage } from "@/lib/sanity/queries";
import { isSanityConfigured } from "@/sanity/config";

const fallback = {
  title: "About",
  description:
    "An artist-led community platform being built toward a co-operative, rooted in Atlantic Canada.",
};

export async function generateMetadata(): Promise<Metadata> {
  return editorialMetadata(await getEditorialPage("about"), fallback);
}

export default async function Page() {
  const page = await getEditorialPage("about");
  const pillars = copyItems(page?.items);
  const image = heroImage(page);
  const configured = isSanityConfigured();

  return (
    <>
      <PageHero
        eyebrow={page?.eyebrow ?? "About"}
        title={page?.title ?? fallback.title}
        body={page?.lede ?? missingPageBody(configured)}
        actions={[
          { href: "/values", label: "Read our values" },
          { href: "/contact", label: "Write to us", variant: "secondary" },
        ]}
        tone="seafoam"
        image={image.src}
        imageAlt={image.alt}
        mediaLabel="Atlantic Canada"
      />
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="min-w-0">
            <p className="inline-block border-2 border-[color:var(--color-ink)] bg-[color:var(--color-tangerine)] px-3 py-1 text-eyebrow text-[color:var(--color-ink)]">
              The room
            </p>
            <h2 className="text-h2 mt-4">
              {page?.secondaryTitle ?? "Built by hand, on purpose"}
            </h2>
            {page?.secondaryBody ? (
              <p className="mt-4 whitespace-pre-line text-lg leading-relaxed text-[color:var(--color-text-muted)]">
                {page.secondaryBody}
              </p>
            ) : (
              <p className="mt-4 text-lg leading-relaxed text-[color:var(--color-text-muted)]">
                Start with the <Link href="/artists">artist directory</Link>.
              </p>
            )}
          </div>
          <MediaFrame
            src={image.src}
            alt={image.alt ?? "Studio"}
            tone="teal"
            ratio="landscape"
            label="Studio light"
          />
        </div>
      </Section>
      <Section tone="oat">
        <SectionIntro
          title="What we are trying to hold"
          body="Three jobs the site has to do, even while the rest of the stack is still landing."
        />
        {pillars.length > 0 ? (
          <FeatureList items={pillars} palette="deep" />
        ) : (
          <CatalogEmpty
            title="Still sketching the pillars"
            body={missingPageBody(configured)}
          />
        )}
      </Section>
      <CtaBanner
        tone="ink"
        title="Come in as a neighbour or a maker"
        body="Look at the work, apply to the pilot, or send a note. The door is the point."
        primaryHref="/for-artists"
        primaryLabel="For artists"
        secondaryHref="/gallery"
        secondaryLabel="Gallery"
      />
    </>
  );
}
