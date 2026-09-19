import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity/visual-editing";
import { DisableDraftMode } from "@/components/sanity/DisableDraftMode";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SkipLink } from "@/components/layout/SkipLink";
import { SanityLive } from "@/lib/sanity/live";
import { isSanityConfigured } from "@/sanity/config";

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isEnabled: isDraftMode } = await draftMode();

  return (
    <>
      <SkipLink />
      <SiteHeader />
      <main id="main-content" className="min-w-0 flex-1">
        {children}
      </main>
      <SiteFooter />
      {isSanityConfigured() ? <SanityLive includeDrafts={isDraftMode} /> : null}
      {isDraftMode ? (
        <>
          <VisualEditing />
          <DisableDraftMode />
        </>
      ) : null}
    </>
  );
}
