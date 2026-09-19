"use client";

import { useIsPresentationTool } from "next-sanity/hooks";

export function DisableDraftMode() {
  const isPresentationTool = useIsPresentationTool();

  if (isPresentationTool) {
    return null;
  }

  return (
    <a
      href="/api/draft-mode/disable"
      className="fixed bottom-4 left-4 z-[100] border-2 border-[color:var(--color-ink)] bg-[color:var(--color-goldenrod)] px-3 py-2 text-sm font-semibold text-[color:var(--color-ink)]"
    >
      Exit draft preview
    </a>
  );
}
