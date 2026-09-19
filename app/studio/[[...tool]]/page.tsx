import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";
import { isSanityConfigured } from "@/sanity/config";

export const dynamic = "force-static";

export default function StudioPage() {
  if (!isSanityConfigured()) {
    return (
      <main className="mx-auto max-w-xl px-[5%] py-16">
        <p className="text-eyebrow text-[color:var(--color-brand-cool)]">
          Sanity
        </p>
        <h1 className="text-h2 mt-3">Studio is not configured yet</h1>
        <p className="mt-4 text-[color:var(--color-text-muted)]">
          Create a project at{" "}
          <a className="oca-inline-link" href="https://www.sanity.io/manage">
            sanity.io/manage
          </a>
          , copy <code>.env.example</code> to <code>.env.local</code>, and set{" "}
          <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code> and{" "}
          <code>NEXT_PUBLIC_SANITY_DATASET</code>. Then restart{" "}
          <code>npm run dev</code>. Full steps are in <code>docs/sanity.md</code>
          .
        </p>
      </main>
    );
  }

  return <NextStudio config={config} />;
}
