import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { stegaClean } from "next-sanity";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Section } from "@/components/sections/Section";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { toneFromKey } from "@/lib/media";
import { imageUrl } from "@/lib/sanity/image";
import { getResourceBySlug, getResourceSlugs } from "@/lib/sanity/queries";

type ResourcePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = true;

export async function generateStaticParams() {
  const resources = await getResourceSlugs();
  return resources.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({
  params,
}: ResourcePageProps): Promise<Metadata> {
  const { slug } = await params;
  const resource = await getResourceBySlug(slug, { stega: false });
  if (!resource) {
    return { title: "Resource" };
  }

  const title = resource.seo?.title || resource.title;
  const description = resource.seo?.description || resource.summary;
  const shareImage = imageUrl(resource.seo?.image ?? resource.image, 1200);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: shareImage ? [{ url: shareImage }] : undefined,
    },
  };
}

export default async function Page({ params }: ResourcePageProps) {
  const { slug } = await params;
  const resource = await getResourceBySlug(slug);
  if (!resource) {
    notFound();
  }

  const title = stegaClean(resource.title);
  const category = stegaClean(resource.category);
  const published = resource.publishedAt
    ? new Date(resource.publishedAt).toLocaleDateString("en-CA", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <>
      <Section>
        <p className="text-eyebrow text-[color:var(--color-brand-cool)]">
          {category}
        </p>
        <h1 className="text-h1 mt-3 max-w-3xl text-balance">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-[color:var(--color-text-muted)]">
          {resource.summary}
        </p>
        <p className="mt-3 text-sm text-[color:var(--color-text-muted)]">
          {published ? `${published} · ` : null}
          Organized Chaos Arts
        </p>
        <div className="mt-10 max-w-4xl">
          <MediaFrame
            src={imageUrl(resource.image, 1600) ?? undefined}
            alt={resource.image.alt || title}
            tone={toneFromKey(stegaClean(resource.slug))}
            ratio="wide"
            label={category}
          />
        </div>
        <div className="mt-12 max-w-2xl whitespace-pre-line text-lg leading-relaxed text-[color:var(--color-text)]">
          {resource.body}
        </div>
        <div className="mt-10">
          <ButtonLink href="/resources" variant="secondary">
            Back to resources
          </ButtonLink>
        </div>
      </Section>
      <CtaBanner
        tone="teal"
        title="Take this back to the studio"
        body="When you have a note of your own, send it. The shelf stays small on purpose."
        primaryHref="/for-artists"
        primaryLabel="Join as artist"
        secondaryHref="/gallery"
        secondaryLabel="Gallery"
      />
    </>
  );
}
