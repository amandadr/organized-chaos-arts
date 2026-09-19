import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { footerNav, site } from "@/lib/navigation";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto overflow-x-clip border-t-[3px] border-[color:var(--color-ink)] bg-[color:var(--color-teal)] px-[5%] py-12 text-[color:var(--color-paper)] md:py-16">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div className="min-w-0">
          <p className="font-display text-2xl font-bold tracking-tight">
            {site.name}
          </p>
          <p className="mt-3 max-w-md opacity-90">{site.tagline}</p>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[color:var(--color-paper)] underline decoration-[0.12em] underline-offset-[0.18em] hover:text-[color:var(--color-goldenrod)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="max-w-md min-w-0 border-[3px] border-[color:var(--color-ink)] bg-[color:var(--color-goldenrod)] p-6 text-[color:var(--color-ink)] shadow-[5px_5px_0_var(--color-ink)]">
          <p className="mb-2 font-display text-lg font-bold">
            Get the monthly dispatch
          </p>
          <p className="mb-4 text-sm">
            New artists, fresh gallery work, and community notes. No spam.
            Until the list is live, this sends you to the contact page.
          </p>
          <form
            className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_auto]"
            action="/contact"
            method="get"
          >
            <label className="sr-only" htmlFor="footer-email">
              Email address
            </label>
            <input
              id="footer-email"
              type="email"
              name="email"
              autoComplete="email"
              required
              placeholder="you@example.com"
              className="oca-input"
            />
            <Button type="submit" variant="primary">
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      <div className="mx-auto mt-10 flex w-full max-w-6xl flex-col gap-3 border-t-2 border-[color:var(--color-paper)] pt-6 text-sm md:flex-row md:items-center md:justify-between">
        <p>
          © {year} {site.name}. All rights reserved.
        </p>
        <p>Built for artists, neighbours, and careful looking.</p>
      </div>
    </footer>
  );
}
