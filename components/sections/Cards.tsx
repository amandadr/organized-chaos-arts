import Link from "next/link";
import { MediaFrame } from "@/components/ui/MediaFrame";
import type {
  ArtistGridItem,
  ArtworkGridItem,
  ResourceGridItem,
} from "@/lib/catalog";

const cardFills = [
  "oca-fill-paper",
  "oca-fill-goldenrod",
  "oca-fill-tangerine",
];

export function ArtworkGrid({
  items,
  featured = false,
}: {
  items: readonly ArtworkGridItem[];
  featured?: boolean;
}) {
  return (
    <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((artwork, index) => {
        const href = artwork.artistSlug
          ? `/artists/${artwork.artistSlug}`
          : "/gallery";
        const featuredLead = featured && index === 0;
        return (
          <li
            key={artwork.slug}
            className={
              featuredLead ? "min-w-0 sm:col-span-2 lg:col-span-2" : "min-w-0"
            }
          >
            <article
              className={`oca-color-card overflow-hidden p-0 ${cardFills[index % cardFills.length]}`}
            >
              <Link href={href} className="block min-w-0">
                <MediaFrame
                  src={artwork.imageUrl ?? undefined}
                  alt={artwork.imageAlt}
                  tone={artwork.tone}
                  ratio={featured && index === 0 ? "wide" : "landscape"}
                  label={artwork.title}
                  priority={featured && index === 0}
                  embedded
                />
              </Link>
              <div className="p-5 md:p-6">
                <h3 className="text-h4">
                  <Link href={href} className="hover:underline">
                    {artwork.title}
                  </Link>
                </h3>
                <p className="mt-1 text-sm opacity-90">
                  {artwork.artistName && artwork.artistSlug ? (
                    <Link
                      href={href}
                      className="font-semibold underline decoration-[0.12em] underline-offset-[0.18em]"
                    >
                      {artwork.artistName}
                    </Link>
                  ) : null}
                  {artwork.artistName ? " · " : null}
                  {artwork.medium}
                  {artwork.year ? ` · ${artwork.year}` : null}
                </p>
                {artwork.description ? (
                  <p className="mt-2 opacity-90">{artwork.description}</p>
                ) : null}
                {artwork.purchaseUrl ? (
                  <p className="mt-3">
                    <a
                      href={artwork.purchaseUrl}
                      className="text-sm font-semibold underline decoration-[0.12em] underline-offset-[0.18em]"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Available from the artist
                    </a>
                  </p>
                ) : null}
              </div>
            </article>
          </li>
        );
      })}
    </ul>
  );
}

const tagTones = [
  "oca-fill-seafoam",
  "oca-fill-goldenrod",
  "oca-fill-tangerine",
  "oca-fill-paper",
];

export function ArtistGrid({ items }: { items: readonly ArtistGridItem[] }) {
  return (
    <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((artist, index) => (
        <li key={artist.slug} className="min-w-0">
          <article
            className={`oca-color-card overflow-hidden p-0 ${cardFills[(index + 1) % cardFills.length]}`}
          >
            <Link href={`/artists/${artist.slug}`} className="block min-w-0">
              <MediaFrame
                src={artist.portraitUrl ?? undefined}
                alt={artist.portraitAlt}
                tone={artist.tone}
                ratio="portrait"
                label={`${artist.city}, ${artist.regionLabel}`}
                embedded
              />
            </Link>
            <div className="p-5 md:p-6">
              <div className="flex flex-wrap gap-2">
                {artist.tags.map((tag, tagIndex) => (
                  <span
                    key={`${artist.slug}-${tag}`}
                    className={`border-2 border-[color:var(--color-ink)] px-3 py-1 text-xs font-bold ${tagTones[tagIndex % tagTones.length]}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-h4 mt-3">
                <Link
                  href={`/artists/${artist.slug}`}
                  className="hover:underline"
                >
                  {artist.name}
                </Link>
              </h3>
              <p className="mt-2 opacity-90">{artist.shortBio}</p>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}

export function CatalogEmpty({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <div className="max-w-2xl">
      <h2 className="text-h2">{title}</h2>
      <p className="mt-4 text-[color:var(--color-text-muted)]">{body}</p>
    </div>
  );
}

export function ResourceGrid({ items }: { items: readonly ResourceGridItem[] }) {
  return (
    <ul className="grid grid-cols-1 gap-8 md:grid-cols-3">
      {items.map((resource, index) => (
        <li key={resource.slug} className="min-w-0">
          <article
            className={`oca-color-card overflow-hidden p-0 ${cardFills[index % cardFills.length]}`}
          >
            <Link href={`/resources/${resource.slug}`} className="block">
              <MediaFrame
                src={resource.imageUrl ?? undefined}
                alt={resource.imageAlt}
                tone={resource.tone}
                ratio="wide"
                label={resource.category}
                embedded
              />
            </Link>
            <div className="p-5 md:p-6">
              <p className="text-eyebrow">{resource.category}</p>
              <h2 className="text-h4 mt-2">
                <Link
                  href={`/resources/${resource.slug}`}
                  className="hover:underline"
                >
                  {resource.title}
                </Link>
              </h2>
              <p className="mt-2">{resource.summary}</p>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}

const valueFills = [
  "oca-fill-paper",
  "oca-fill-goldenrod",
  "oca-fill-seafoam",
  "oca-fill-oat",
];

export function ValueGrid({
  items,
}: {
  items: readonly { title: string; body: string }[];
}) {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {items.map((value, index) => (
        <li
          key={value.title}
          className={`oca-color-card md:p-8 ${valueFills[index % valueFills.length]}`}
        >
          <h3 className="text-h4">{value.title}</h3>
          <p className="mt-3 opacity-90">{value.body}</p>
        </li>
      ))}
    </ul>
  );
}
