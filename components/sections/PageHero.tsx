import clsx from "clsx";
import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { MediaFrame } from "@/components/ui/MediaFrame";
import type { MediaTone } from "@/lib/media";

type Action = {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "ochre" | "ghost" | "inverse";
};

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  body: string;
  actions?: Action[];
  tone?: MediaTone;
  mediaLabel?: string;
  mediaCaption?: string;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
};

const bands: Record<
  MediaTone,
  { section: string; invert: boolean; chip: string }
> = {
  teal: {
    section: "bg-[color:var(--color-teal)] text-[color:var(--color-paper)]",
    invert: true,
    chip: "border-[color:var(--color-ink)] bg-[color:var(--color-goldenrod)] text-[color:var(--color-ink)]",
  },
  rust: {
    section: "bg-[color:var(--color-rust)] text-[color:var(--color-paper)]",
    invert: true,
    chip: "border-[color:var(--color-ink)] bg-[color:var(--color-goldenrod)] text-[color:var(--color-ink)]",
  },
  cocoa: {
    section: "bg-[color:var(--color-cocoa)] text-[color:var(--color-paper)]",
    invert: true,
    chip: "border-[color:var(--color-ink)] bg-[color:var(--color-tangerine)] text-[color:var(--color-ink)]",
  },
  ink: {
    section: "bg-[color:var(--color-ink)] text-[color:var(--color-paper)]",
    invert: true,
    chip: "border-[color:var(--color-paper)] bg-[color:var(--color-rust)] text-[color:var(--color-paper)]",
  },
  tangerine: {
    section: "bg-[color:var(--color-tangerine)] text-[color:var(--color-ink)]",
    invert: false,
    chip: "border-[color:var(--color-ink)] bg-[color:var(--color-paper)] text-[color:var(--color-ink)]",
  },
  seafoam: {
    section: "bg-[color:var(--color-seafoam)] text-[color:var(--color-ink)]",
    invert: false,
    chip: "border-[color:var(--color-ink)] bg-[color:var(--color-goldenrod)] text-[color:var(--color-ink)]",
  },
  goldenrod: {
    section: "bg-[color:var(--color-goldenrod)] text-[color:var(--color-ink)]",
    invert: false,
    chip: "border-[color:var(--color-ink)] bg-[color:var(--color-paper)] text-[color:var(--color-ink)]",
  },
  oat: {
    section: "bg-[color:var(--color-oat)] text-[color:var(--color-ink)]",
    invert: false,
    chip: "border-[color:var(--color-ink)] bg-[color:var(--color-tangerine)] text-[color:var(--color-ink)]",
  },
  moss: {
    section: "bg-[color:var(--color-moss)] text-[color:var(--color-paper)]",
    invert: true,
    chip: "border-[color:var(--color-ink)] bg-[color:var(--color-goldenrod)] text-[color:var(--color-ink)]",
  },
};

export function PageHero({
  eyebrow,
  title,
  body,
  actions,
  tone = "teal",
  mediaLabel,
  mediaCaption,
  image,
  imageAlt,
  children,
}: PageHeroProps) {
  const band = bands[tone];

  return (
    <section
      className={clsx(
        "overflow-x-clip border-b-[3px] border-[color:var(--color-ink)] px-[5%] py-14 md:py-18 lg:py-20",
        band.section,
      )}
    >
      <div className="mx-auto grid w-full min-w-0 max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
        <div className="min-w-0">
          {eyebrow ? (
            <p className={clsx("inline-block border-2 px-3 py-1 text-eyebrow", band.chip)}>
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-h1 mt-4 text-balance">{title}</h1>
          <p
            className={clsx(
              "mt-5 max-w-xl text-lg leading-relaxed whitespace-pre-line",
              band.invert ? "opacity-90" : "text-[color:var(--color-cocoa)]",
            )}
          >
            {body}
          </p>
          {actions && actions.length > 0 ? (
            <div className="mt-8 flex flex-wrap gap-3">
              {actions.map((action) => (
                <ButtonLink
                  key={action.href + action.label}
                  href={action.href}
                  variant={
                    action.variant ?? (band.invert ? "ochre" : "primary")
                  }
                  {...(action.href.startsWith("http")
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                >
                  {action.label}
                </ButtonLink>
              ))}
            </div>
          ) : null}
          {children}
        </div>
        <MediaFrame
          src={image}
          alt={imageAlt ?? mediaLabel ?? title}
          tone={tone}
          ratio="landscape"
          label={mediaLabel}
          caption={mediaCaption}
          className={clsx("w-full", mediaCaption ? "" : "lg:mt-6")}
          priority
        />
      </div>
    </section>
  );
}
