import type { ReactNode } from "react";
import { paletteFillClass, type PaletteToken } from "@/lib/palette";

export function Tag({
  token,
  children,
}: {
  token: PaletteToken;
  children: ReactNode;
}) {
  return (
    <span
      className={`inline-block border-2 border-[color:var(--color-ink)] px-3 py-1 text-xs font-bold ${paletteFillClass(token)}`}
    >
      {children}
    </span>
  );
}
