import clsx from "clsx";
import type { ReactNode } from "react";

type Tone =
  | "default"
  | "paper"
  | "oat"
  | "seafoam"
  | "tangerine"
  | "goldenrod"
  | "ink"
  | "teal"
  | "rust";

type SectionProps = {
  children: ReactNode;
  id?: string;
  tone?: Tone;
  className?: string;
};

const tones: Record<Tone, string> = {
  default: "bg-transparent",
  paper: "bg-[color:var(--color-surface)]",
  oat: "bg-[color:var(--color-oat)] text-[color:var(--color-ink)]",
  seafoam: "bg-[color:var(--color-seafoam)] text-[color:var(--color-ink)]",
  tangerine: "bg-[color:var(--color-tangerine)] text-[color:var(--color-ink)]",
  goldenrod: "bg-[color:var(--color-goldenrod)] text-[color:var(--color-ink)]",
  ink: "bg-[color:var(--color-ink)] text-[color:var(--color-paper)]",
  teal: "bg-[color:var(--color-teal)] text-[color:var(--color-paper)]",
  rust: "bg-[color:var(--color-rust)] text-[color:var(--color-paper)]",
};

export function Section({
  children,
  id,
  tone = "default",
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={clsx(
        "overflow-x-clip px-[5%] py-16 md:py-20 lg:py-24",
        tones[tone],
        className,
      )}
    >
      <div className="mx-auto w-full min-w-0 max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  body,
  align = "left",
  invert = false,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  invert?: boolean;
}) {
  return (
    <div
      className={clsx(
        "mb-10 max-w-2xl md:mb-14",
        align === "center" && "mx-auto text-center",
      )}
    >
      {eyebrow ? (
        <p
          className={clsx(
            "inline-block border-2 px-3 py-1 text-eyebrow",
            invert
              ? "border-[color:var(--color-paper)] bg-[color:var(--color-rust)] text-[color:var(--color-paper)]"
              : "border-[color:var(--color-ink)] bg-[color:var(--color-goldenrod)] text-[color:var(--color-ink)]",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-h2 mt-4 text-balance">{title}</h2>
      {body ? (
        <p
          className={clsx(
            "mt-4 text-lg leading-relaxed",
            invert
              ? "text-[color:var(--color-paper)] opacity-90"
              : "text-[color:var(--color-text-muted)]",
          )}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}
