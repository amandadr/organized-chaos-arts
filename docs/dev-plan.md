# Development plan

Living sequence for Organized Chaos Arts. The full original roadmap remains in `docs/begin.md`.

## Done — Local kickoff

- Next.js App Router + TypeScript + ESLint (local npm)
- Prettier, `typecheck` script, `.nvmrc` / `engines`, `.env.example`
- `AGENTS.md` + Cursor rules
- Semantic design tokens + temporary `/design-system` route
- Local git + GitHub remote configured

## Done — Relume pages

- Tailwind CSS **3** + branded Relume theme (ink / teal / ochre)
- Bricolage Grotesque + Manrope fonts, shared SiteHeader / SiteFooter / SkipLink
- Public routes: `/`, `/artists`, `/artists/demo`, `/gallery`, `/about`, `/for-artists`, `/resources`, `/resources/demo`, `/values`, `/pilot`, `/contact`, `/support`, `/instagram`
- Placeholder Relume lorem replaced with OCA-flavoured copy

## Done — Sanity content foundation

- Embedded Studio at `/studio` (`next-sanity` + Presentation / Draft Mode)
- Schemas: `siteSettings`, `artist`, `artwork` (+ `seo` object, required image alt)
- Typed GROQ + `lib/sanity/queries.ts` fetch helpers
- Development seed: `npm run sanity:seed` (needs a real project ID)

## Done — Artist and artwork pages

- `/artists` lists published Sanity artists (featured first)
- `/artists/[slug]` loads bio, portrait, and referenced artwork
- `/`, `/gallery`, and `/instagram` hang CMS artwork and artist cards
- Empty CMS shows empty states; unknown slugs 404

## Done — Remaining public copy

- Resources at `/resources` and `/resources/[slug]` (demo route redirects)
- About, values, for-artists, pilot, support, contact, and Instagram heroes/lists from `editorialPage`, `value`, and `faq` documents
- Home “how it works” and values cards from the same documents

## Done — Richer development catalog

- Seed roster: ~20 invented Atlantic makers / ~100 works (niches, 1–2 bodies each)
- Coverage: all disciplines with multi-maker depth where needed; PE ≥3 cities; NL ≥3 cities; NS/NB balanced
- Medium classifier in `lib/palette.ts` aligned with seed strings; seed asserts classification before write
- Catalog data in `scripts/seed/catalog.mjs`; seed prunes leftover artists/artworks
- Fuel for a later hang-and-filter pass (variety ordering, medium chips) — not implemented yet

## Next

1. Gallery hang algorithm + medium filtering (variety ordering; location later)
2. Replace Relume placeholder images with real photography
3. Promote remaining Relume sections into OCA-named components
4. Connect CTAs and forms to real destinations
5. Accessibility and SEO pass on each page

## Then

6. SEO / accessibility / performance sweep
7. Netlify deploy previews
8. Supabase authentication
9. Stripe membership
10. Artist self-service

## Working rules

- One coherent phase per agent task; stop when that phase is done.
- Prefer strong foundations without speculative complexity.
- MVP proves architecture: public site + Sanity content + Netlify. Member login and paid subscriptions are later phases.
