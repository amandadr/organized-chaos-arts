# Development plan

Living sequence for Organized Chaos Arts. The full original roadmap remains in `docs/begin.md`.

## Done — Local kickoff

- Next.js App Router + TypeScript + Tailwind + ESLint (local npm)
- Prettier, `typecheck` script, `.nvmrc` / `engines`, `.env.example`
- `AGENTS.md` + Cursor rules
- Semantic design tokens + temporary `/design-system` route
- Local git only (no GitHub / Netlify yet)

## Next — Site shell

After Relume design review / palette confirmation:

1. SkipLink, SiteHeader, accessible desktop + mobile navigation, SiteFooter
2. PageContainer, Section primitives
3. Adapt Relume sections into OCA-named components (no Relume section-number names)

## Then

4. Sanity: site settings, artist, artwork schemas + typed queries
5. Artist directory + artist profile vertical slice
6. Remaining public pages (home, about, resources, contact, membership marketing)
7. SEO / accessibility / performance sweep
8. GitHub remote + Netlify deploy previews
9. Supabase authentication
10. Stripe membership
11. Artist self-service

## Working rules

- One coherent phase per agent task; stop when that phase is done.
- Prefer strong foundations without speculative complexity.
- MVP proves architecture: public site + Sanity content + Netlify. Member login and paid subscriptions are later phases.
