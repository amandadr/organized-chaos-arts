import clsx from "clsx";
import { ButtonLink } from "@/components/ui/ButtonLink";

type CtaBannerProps = {
  eyebrow?: string;
  title: string;
  body: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  tone?: "ink" | "teal" | "rust" | "tangerine" | "goldenrod";
};

export function CtaBanner({
  eyebrow,
  title,
  body,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  tone = "ink",
}: CtaBannerProps) {
  const tones = {
    ink: "bg-[color:var(--color-ink)] text-[color:var(--color-paper)]",
    teal: "bg-[color:var(--color-teal)] text-[color:var(--color-paper)]",
    rust: "bg-[color:var(--color-rust)] text-[color:var(--color-paper)]",
    tangerine: "bg-[color:var(--color-tangerine)] text-[color:var(--color-ink)]",
    goldenrod: "bg-[color:var(--color-goldenrod)] text-[color:var(--color-ink)]",
  } as const;

  const light = tone === "tangerine" || tone === "goldenrod";

  return (
    <section className="overflow-x-clip px-[5%] py-16 md:py-20">
      <div
        className={clsx(
          "mx-auto flex w-full max-w-6xl min-w-0 flex-col gap-8 border-[3px] border-[color:var(--color-ink)] px-8 py-12 shadow-[8px_8px_0_var(--color-ink)] md:flex-row md:items-end md:justify-between md:px-12 md:py-14",
          tones[tone],
        )}
      >
        <div className="max-w-xl min-w-0">
          {eyebrow ? (
            <p
              className={clsx(
                "inline-block border-2 px-3 py-1 text-eyebrow",
                light
                  ? "border-[color:var(--color-ink)] bg-[color:var(--color-paper)] text-[color:var(--color-ink)]"
                  : "border-[color:var(--color-paper)] bg-[color:var(--color-rust)] text-[color:var(--color-paper)]",
              )}
            >
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-h2 mt-4 text-balance">{title}</h2>
          <p className="mt-4 text-lg leading-relaxed opacity-90">{body}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={primaryHref} variant={light ? "primary" : "inverse"}>
            {primaryLabel}
          </ButtonLink>
          {secondaryHref && secondaryLabel ? (
            <ButtonLink
              href={secondaryHref}
              variant={light ? "secondary" : "ghost"}
            >
              {secondaryLabel}
            </ButtonLink>
          ) : null}
        </div>
      </div>
    </section>
  );
}
