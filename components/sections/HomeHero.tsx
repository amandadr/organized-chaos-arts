import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { MediaFrame } from "@/components/ui/MediaFrame";
import type { ArtworkGridItem } from "@/lib/catalog";
import { site } from "@/lib/navigation";

const heroFrames = [
  { ratio: "portrait" as const, className: "col-span-1", priority: true },
  { ratio: "square" as const, className: "" },
  { ratio: "landscape" as const, className: "" },
];

export function HomeHero({ highlights }: { highlights: ArtworkGridItem[] }) {
  const [first, second, third] = highlights;
  const frames = [first, second, third].filter(Boolean);

  return (
    <section className="overflow-x-clip border-b-[3px] border-[color:var(--color-ink)] bg-[color:var(--color-goldenrod)] px-[5%] pb-8 pt-12 text-[color:var(--color-ink)] md:pb-12 md:pt-16 lg:pt-20">
      <div className="mx-auto grid w-full min-w-0 max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
        <div className="min-w-0">
          <p className="inline-block border-2 border-[color:var(--color-ink)] bg-[color:var(--color-paper)] px-3 py-1 text-eyebrow text-[color:var(--color-ink)]">
            Atlantic Canada
          </p>
          <h1 className="text-display mt-5 text-balance">{site.tagline}</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[color:var(--color-cocoa)] md:text-xl">
            {site.name} is a local cultural hub for independent artists. The
            directory is built by hand so you can find the work — and the people
            behind it — without a feed getting in the way.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/artists">Meet the artists</ButtonLink>
            <ButtonLink href="/gallery" variant="secondary">
              Walk the gallery
            </ButtonLink>
          </div>
        </div>

        {frames.length > 0 ? (
          <div className="grid min-w-0 grid-cols-2 gap-4">
            {first ? (
              <HeroFrame artwork={first} {...heroFrames[0]} />
            ) : null}
            <div className="grid min-w-0 gap-4 self-end">
              {second ? (
                <HeroFrame artwork={second} {...heroFrames[1]} />
              ) : null}
              {third ? (
                <HeroFrame artwork={third} {...heroFrames[2]} />
              ) : null}
            </div>
          </div>
        ) : (
          <MediaFrame
            tone="rust"
            ratio="portrait"
            label="The wall is still empty"
            className="w-full"
            priority
          />
        )}
      </div>
    </section>
  );
}

function HeroFrame({
  artwork,
  ratio,
  className,
  priority = false,
}: {
  artwork: ArtworkGridItem;
  ratio: "portrait" | "square" | "landscape";
  className: string;
  priority?: boolean;
}) {
  const href = artwork.artistSlug
    ? `/artists/${artwork.artistSlug}`
    : "/gallery";

  return (
    <Link href={href} className={`min-w-0 ${className}`}>
      <MediaFrame
        src={artwork.imageUrl ?? undefined}
        alt={artwork.imageAlt}
        tone={artwork.tone}
        ratio={ratio}
        label={artwork.artistName ?? artwork.title}
        priority={priority}
      />
    </Link>
  );
}
