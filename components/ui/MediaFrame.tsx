import clsx from "clsx";
import Image from "next/image";
import type { MediaTone } from "@/lib/media";

type Ratio = "portrait" | "landscape" | "square" | "wide";

type MediaFrameProps = {
  tone?: MediaTone;
  ratio?: Ratio;
  label?: string;
  caption?: string;
  src?: string;
  alt?: string;
  className?: string;
  priority?: boolean;
  embedded?: boolean;
};

const ratios: Record<Ratio, string> = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
  wide: "aspect-[16/9]",
};

const toneFill: Record<MediaTone, string> = {
  teal: "bg-[color:var(--color-teal)]",
  rust: "bg-[color:var(--color-rust)]",
  moss: "bg-[color:var(--color-moss)]",
  tangerine: "bg-[color:var(--color-tangerine)]",
  seafoam: "bg-[color:var(--color-seafoam)]",
  goldenrod: "bg-[color:var(--color-goldenrod)]",
  oat: "bg-[color:var(--color-oat)]",
  cocoa: "bg-[color:var(--color-cocoa)]",
  ink: "bg-[color:var(--color-ink)]",
};

export function MediaFrame({
  tone = "teal",
  ratio = "landscape",
  label,
  caption,
  src,
  alt,
  className,
  priority = false,
  embedded = false,
}: MediaFrameProps) {
  const imageAlt = alt ?? label ?? "";

  return (
    <figure className={clsx("min-w-0", className)}>
      <div
        className={clsx(
          embedded
            ? "relative overflow-hidden"
            : "relative overflow-hidden border-[3px] border-[color:var(--color-ink)] shadow-[6px_6px_0_var(--color-ink)]",
          ratios[ratio],
          !src && toneFill[tone],
        )}
      >
        {src ? (
          <Image
            src={src}
            alt={imageAlt}
            fill
            sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
            priority={priority}
          />
        ) : null}
        {label ? (
          <p className="absolute bottom-0 left-0 right-0 bg-[color:var(--color-ink)] px-3 py-2 font-display text-sm font-bold leading-tight text-[color:var(--color-paper)] md:text-base">
            {label}
          </p>
        ) : null}
      </div>
      {caption ? (
        <figcaption className="mt-3 text-sm text-[color:var(--color-text-muted)]">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
