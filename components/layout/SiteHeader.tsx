"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { mainNav, moreNav, site } from "@/lib/navigation";

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 overflow-x-clip border-b-[3px] border-[color:var(--color-ink)] bg-[color:var(--color-rust)] text-[color:var(--color-paper)]">
      <div className="h-2 bg-[color:var(--color-goldenrod)]" aria-hidden />
      <div className="mx-auto flex min-h-16 w-full max-w-6xl items-center justify-between gap-4 px-[5%] lg:min-h-[4.5rem]">
        <Link
          href="/"
          className="min-w-0 font-display text-base font-bold tracking-tight text-[color:var(--color-paper)] md:text-lg"
          onClick={() => setOpen(false)}
        >
          <span className="xl:hidden">{site.shortName}</span>
          <span className="hidden xl:inline">{site.name}</span>
        </Link>

        <nav aria-label="Primary" className="hidden min-w-0 lg:block">
          <ul className="flex items-center gap-3">
            {mainNav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`whitespace-nowrap border-[2px] px-2.5 py-1 text-sm font-bold ${
                      active
                        ? "border-[color:var(--color-ink)] bg-[color:var(--color-goldenrod)] text-[color:var(--color-ink)]"
                        : "border-transparent text-[color:var(--color-paper)] underline-offset-4 hover:underline"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="relative">
              <details className="group">
                <summary className="cursor-pointer list-none px-2.5 py-1 text-sm font-bold text-[color:var(--color-paper)] underline-offset-4 marker:content-none hover:underline">
                  More
                </summary>
                <ul className="absolute right-0 mt-3 min-w-44 border-[3px] border-[color:var(--color-ink)] bg-[color:var(--color-goldenrod)] py-2 text-[color:var(--color-ink)] shadow-[5px_5px_0_var(--color-ink)]">
                  {moreNav.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="block px-4 py-2 text-sm font-bold hover:bg-[color:var(--color-paper)]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          </ul>
        </nav>

        <div className="hidden shrink-0 lg:block">
          <ButtonLink href="/for-artists" variant="ochre">
            Join as artist
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center border-[3px] border-[color:var(--color-ink)] bg-[color:var(--color-goldenrod)] text-[color:var(--color-ink)] lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span aria-hidden className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-5 bg-[color:var(--color-ink)] transition ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-[color:var(--color-ink)] transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-[color:var(--color-ink)] transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <div
          id={menuId}
          className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t-[3px] border-[color:var(--color-ink)] bg-[color:var(--color-goldenrod)] px-[5%] py-6 text-[color:var(--color-ink)] lg:hidden"
        >
          <nav aria-label="Mobile">
            <ul className="flex flex-col gap-2">
              {[...mainNav, ...moreNav].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block border-[2px] border-[color:var(--color-ink)] bg-[color:var(--color-paper)] px-3 py-2 text-lg font-bold"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-6">
            <ButtonLink href="/for-artists" onClick={() => setOpen(false)}>
              Join as artist
            </ButtonLink>
          </div>
        </div>
      ) : null}
    </header>
  );
}
