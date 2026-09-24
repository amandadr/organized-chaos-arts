import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { stegaClean } from "next-sanity";
import { ArtworkGrid } from "@/components/sections/Cards";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { Tag } from "@/components/ui/Tag";
import {
  artistTagsFrom,
  artworkGridItemFromSanity,
  disciplineLabel,
  regionLabel,
} from "@/lib/catalog";
import { toneFromKey } from "@/lib/media";
import { imageUrl } from "@/lib/sanity/image";
import { getArtistBySlug, getArtistSlugs } from "@/lib/sanity/queries";

type ArtistPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = true;

export async function generateStaticParams() {
  const artists = await getArtistSlugs();
  return artists.map((artist) => ({ slug: artist.slug }));
}

export async function generateMetadata({
  params,
}: ArtistPageProps): Promise<Metadata> {
  const { slug } = await params;
  const artist = await getArtistBySlug(slug, { stega: false });
  if (!artist) {
    return { title: "Artist" };
  }

  const title = artist.seo?.title || artist.name;
  const description = artist.seo?.description || artist.shortBio;
  const shareImage = imageUrl(artist.seo?.image ?? artist.portrait, 1200);

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

export default async function Page({ params }: ArtistPageProps) {
  const { slug } = await params;
  const artist = await getArtistBySlug(slug);
  if (!artist) {
    notFound();
  }

  const cleanSlug = stegaClean(artist.slug);
  const name = stegaClean(artist.name);
  const primaryDiscipline = artist.disciplines[0]
    ? disciplineLabel(stegaClean(artist.disciplines[0]))
    : "Artist";
  const works = artist.artworks.map((artwork) =>
    artworkGridItemFromSanity(artwork, { slug: cleanSlug, name }),
  );
  const tags = artistTagsFrom(artist);
  const portraitUrl = imageUrl(artist.portrait, 1600);
  const website = artist.website ? stegaClean(artist.website) : null;
  const instagramUrl = artist.instagramUrl
    ? stegaClean(artist.instagramUrl)
    : null;

  const actions = [
    ...(website
      ? [
          {
            href: website,
            label: "Website",
          },
        ]
      : []),
    ...(instagramUrl
      ? [
          {
            href: instagramUrl,
            label: "Instagram",
            variant: "secondary" as const,
          },
        ]
      : []),
    {
      href: "/artists",
      label: "All artists",
      variant: "secondary" as const,
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={`${primaryDiscipline} · ${artist.city}`}
        title={artist.name}
        body={artist.bio}
        actions={actions}
        tone={toneFromKey(cleanSlug)}
        image={portraitUrl ?? undefined}
        imageAlt={artist.portrait.alt || `Portrait of ${name}`}
        mediaLabel={`${artist.city}, ${regionLabel(artist.region)}`}
      />
      <Section tone="oat">
        <p className="inline-block border-2 border-[color:var(--color-ink)] bg-[color:var(--color-tangerine)] px-3 py-1 text-eyebrow text-[color:var(--color-ink)]">
          Selected work
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag key={`${tag.kind}-${tag.label}`} token={tag.token}>
              {tag.label}
            </Tag>
          ))}
        </div>
        <h2 className="text-h2 mt-4">From the studio</h2>
        {works.length > 0 ? (
          <>
            <p className="mt-4 mb-10 max-w-2xl text-[color:var(--color-text-muted)]">
              {works.length === 1
                ? "One piece on the wall for now."
                : `${works.length} works, from the studio to here.`}
            </p>
            <ArtworkGrid items={works} surface="oat" />
          </>
        ) : (
          <p className="mt-4 max-w-2xl text-[color:var(--color-text-muted)]">
            No works published for this artist yet.
          </p>
        )}
        <p className="oca-prose mt-10 text-sm text-[color:var(--color-text-muted)]">
          Looking for someone else?{" "}
          <Link href="/artists">Back to the directory</Link>.
        </p>
      </Section>
      <CtaBanner
        tone="teal"
        title="Want to be in the directory?"
        body="The pilot is open to independent makers in Atlantic Canada. A short bio and a few images is enough to start."
        primaryHref="/artists"
        primaryLabel="Browse artists"
        secondaryHref="/for-artists"
        secondaryLabel="Apply with your work"
      />
    </>
  );
}
