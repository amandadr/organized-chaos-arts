import { TextLink } from "@/components/ui/TextLink";

export default function Home() {
  return (
    <main className="container" style={{ paddingBlock: "var(--space-3xl)" }}>
      <p className="text-eyebrow text-muted">Organized Chaos Arts</p>
      <h1 className="text-h1" style={{ marginTop: "var(--space-sm)" }}>
        Local foundation
      </h1>
      <p
        className="text-body text-muted"
        style={{
          marginTop: "var(--space-md)",
          maxWidth: "var(--container-sm)",
        }}
      >
        Project scaffolding, semantic design tokens, and documentation are in
        place. Page content and site shell come next.
      </p>
      <p style={{ marginTop: "var(--space-lg)" }}>
        <TextLink href="/design-system">View design system</TextLink>
      </p>
    </main>
  );
}
