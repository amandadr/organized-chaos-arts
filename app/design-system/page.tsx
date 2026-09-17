import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { TextLink } from "@/components/ui/TextLink";

export const metadata: Metadata = {
  title: "Design system",
  description:
    "Temporary gallery of OCA design tokens and foundational UI primitives.",
  robots: { index: false, follow: false },
};

const colorTokens = [
  "background",
  "surface",
  "surface-alt",
  "text",
  "text-muted",
  "text-inverse",
  "border",
  "border-strong",
  "brand-warm",
  "brand-warm-bright",
  "brand-cool",
  "brand-cool-bright",
  "accent-supporting-1",
  "accent-supporting-2",
  "link",
  "focus",
  "success",
  "warning",
  "error",
] as const;

const spacingTokens = [
  "2xs",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
  "3xl",
  "4xl",
] as const;

const sectionStyle = {
  marginTop: "var(--space-3xl)",
  paddingTop: "var(--space-xl)",
  borderTop: "var(--border-width) solid var(--color-border)",
} as const;

export default function DesignSystemPage() {
  return (
    <main className="container" style={{ paddingBlock: "var(--space-3xl)" }}>
      <p className="text-eyebrow text-muted">Temporary route</p>
      <h1 className="text-h1" style={{ marginTop: "var(--space-sm)" }}>
        Design system
      </h1>
      <p
        className="text-body text-muted"
        style={{
          marginTop: "var(--space-md)",
          maxWidth: "var(--container-md)",
        }}
      >
        Starter tokens for light mode. Values will be replaced when Relume
        palette and typography are confirmed. Remove or protect this route
        before launch.
      </p>
      <p style={{ marginTop: "var(--space-md)" }}>
        <TextLink href="/">Back to home</TextLink>
      </p>

      <section style={sectionStyle} aria-labelledby="typography-heading">
        <h2 id="typography-heading" className="text-h2">
          Typography
        </h2>
        <div
          style={{
            display: "grid",
            gap: "var(--space-md)",
            marginTop: "var(--space-lg)",
          }}
        >
          <p className="text-display">Display</p>
          <p className="text-h1">Heading 1</p>
          <p className="text-h2">Heading 2</p>
          <p className="text-h3">Heading 3</p>
          <p className="text-h4">Heading 4</p>
          <p className="text-body">
            Body text for longer reading. The quick brown fox jumps over the
            lazy dog.
          </p>
          <p className="text-body-sm">Small body for denser UI copy.</p>
          <p className="text-caption text-muted">Caption / helper text</p>
          <p className="text-eyebrow">Eyebrow label</p>
          <p className="text-nav">Navigation item</p>
        </div>
      </section>

      <section style={sectionStyle} aria-labelledby="colours-heading">
        <h2 id="colours-heading" className="text-h2">
          Colours
        </h2>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: "var(--space-lg) 0 0",
            display: "grid",
            gap: "var(--space-md)",
            gridTemplateColumns: "repeat(auto-fill, minmax(10rem, 1fr))",
          }}
        >
          {colorTokens.map((token) => (
            <li key={token}>
              <div
                style={{
                  height: "4rem",
                  borderRadius: "var(--radius-md)",
                  border: "var(--border-width) solid var(--color-border)",
                  background: `var(--color-${token})`,
                }}
                aria-hidden="true"
              />
              <p
                className="text-caption"
                style={{ marginTop: "var(--space-xs)" }}
              >
                --color-{token}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section style={sectionStyle} aria-labelledby="buttons-heading">
        <h2 id="buttons-heading" className="text-h2">
          Buttons
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "var(--space-md)",
            marginTop: "var(--space-lg)",
            alignItems: "center",
          }}
        >
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="primary" disabled>
            Disabled
          </Button>
        </div>
        <p
          className="text-body-sm text-muted"
          style={{ marginTop: "var(--space-md)" }}
        >
          Tab to a button to confirm the focus ring uses --color-focus.
        </p>
      </section>

      <section style={sectionStyle} aria-labelledby="links-heading">
        <h2 id="links-heading" className="text-h2">
          Links
        </h2>
        <p style={{ marginTop: "var(--space-lg)" }}>
          Inline example:{" "}
          <TextLink href="#forms-heading">jump to form controls</TextLink>.
        </p>
      </section>

      <section style={sectionStyle} aria-labelledby="forms-heading">
        <h2 id="forms-heading" className="text-h2">
          Form controls
        </h2>
        <form
          style={{
            display: "grid",
            gap: "var(--space-md)",
            marginTop: "var(--space-lg)",
            maxWidth: "var(--container-sm)",
          }}
          action="#"
          method="get"
        >
          <div>
            <label
              htmlFor="ds-name"
              className="text-body-sm"
              style={{ display: "block", marginBottom: "var(--space-2xs)" }}
            >
              Name
            </label>
            <input
              id="ds-name"
              name="name"
              type="text"
              autoComplete="name"
              style={{
                width: "100%",
                minHeight: "2.75rem",
                paddingInline: "var(--space-sm)",
                borderRadius: "var(--radius-md)",
                border: "var(--border-width) solid var(--color-border-strong)",
                background: "var(--color-surface)",
                color: "var(--color-text)",
                font: "inherit",
              }}
            />
          </div>
          <div>
            <label
              htmlFor="ds-message"
              className="text-body-sm"
              style={{ display: "block", marginBottom: "var(--space-2xs)" }}
            >
              Message
            </label>
            <textarea
              id="ds-message"
              name="message"
              rows={3}
              style={{
                width: "100%",
                padding: "var(--space-sm)",
                borderRadius: "var(--radius-md)",
                border: "var(--border-width) solid var(--color-border-strong)",
                background: "var(--color-surface)",
                color: "var(--color-text)",
                font: "inherit",
                resize: "vertical",
              }}
            />
          </div>
          <Button type="submit" variant="secondary">
            Submit (demo)
          </Button>
        </form>
      </section>

      <section style={sectionStyle} aria-labelledby="spacing-heading">
        <h2 id="spacing-heading" className="text-h2">
          Spacing
        </h2>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: "var(--space-lg) 0 0",
            display: "grid",
            gap: "var(--space-sm)",
          }}
        >
          {spacingTokens.map((token) => (
            <li
              key={token}
              style={{ display: "flex", alignItems: "center", gap: "var(--space-md)" }}
            >
              <span
                className="text-caption"
                style={{ width: "4rem", flexShrink: 0 }}
              >
                {token}
              </span>
              <span
                style={{
                  height: "var(--space-md)",
                  width: `var(--space-${token})`,
                  background: "var(--color-brand-cool)",
                  borderRadius: "var(--radius-sm)",
                }}
                aria-hidden="true"
              />
            </li>
          ))}
        </ul>
      </section>

      <section style={sectionStyle} aria-labelledby="images-heading">
        <h2 id="images-heading" className="text-h2">
          Image treatment
        </h2>
        <div
          style={{
            marginTop: "var(--space-lg)",
            display: "grid",
            gap: "var(--space-lg)",
            gridTemplateColumns: "repeat(auto-fit, minmax(14rem, 1fr))",
          }}
        >
          <figure style={{ margin: 0 }}>
            <div
              style={{
                aspectRatio: "4 / 5",
                background: "var(--color-surface-alt)",
                border: "var(--border-width) solid var(--color-border)",
                borderRadius: "var(--radius-md)",
                display: "grid",
                placeItems: "center",
              }}
            >
              <span className="text-caption text-muted">Portrait 4:5</span>
            </div>
            <figcaption
              className="text-caption text-muted"
              style={{ marginTop: "var(--space-xs)" }}
            >
              Preserve artwork aspect ratios; avoid aggressive cropping.
            </figcaption>
          </figure>
          <figure style={{ margin: 0 }}>
            <div
              style={{
                aspectRatio: "16 / 9",
                background: "var(--color-surface-alt)",
                border: "var(--border-width) solid var(--color-border)",
                borderRadius: "var(--radius-md)",
                display: "grid",
                placeItems: "center",
              }}
            >
              <span className="text-caption text-muted">Landscape 16:9</span>
            </div>
            <figcaption
              className="text-caption text-muted"
              style={{ marginTop: "var(--space-xs)" }}
            >
              Cards should support multiple orientations.
            </figcaption>
          </figure>
        </div>
      </section>

      <section style={sectionStyle} aria-labelledby="cards-heading">
        <h2 id="cards-heading" className="text-h2">
          Cards
        </h2>
        <div
          style={{
            marginTop: "var(--space-lg)",
            padding: "var(--space-lg)",
            background: "var(--color-surface)",
            border: "var(--border-width) solid var(--color-border)",
            borderRadius: "var(--radius-lg)",
            maxWidth: "var(--container-sm)",
          }}
        >
          <p className="text-eyebrow text-muted">Surface</p>
          <h3 className="text-h4" style={{ marginTop: "var(--space-xs)" }}>
            Example card
          </h3>
          <p
            className="text-body-sm text-muted"
            style={{ marginTop: "var(--space-sm)" }}
          >
            Uses --color-surface, --color-border, and spacing tokens.
          </p>
        </div>
      </section>
    </main>
  );
}
