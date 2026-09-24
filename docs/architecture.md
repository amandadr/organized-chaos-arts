# Architecture

## Ownership

| System | Owns |
| --- | --- |
| Next.js | Presentation, routing, rendering, application behaviour |
| Relume | Initial layout/component source (`components/relume/`) |
| Sanity | Public and editorial content |
| Supabase Auth | User identity |
| Supabase Postgres | Private / application / member data |
| Stripe | Billing and subscription state |
| Netlify | Hosting and deployment |

A piece of data should normally have **one authoritative owner**. Do not synchronize the same editable content into multiple systems without a clear reason.

## Boundaries

- **Sanity** describes public content (artists, artwork, resources, site settings). It is not a user database.
- **Supabase** owns auth, membership state, ownership links (e.g. which user may manage which Sanity artist ID), and private application data. It is not a duplicate CMS.
- **Stripe** is the source of truth for payment/subscription state; Supabase stores the application-facing representation after webhook verification.
- **Next.js** renders the site and implements application behaviour; keep secrets server-side.
- **Relume** is a section/component source. Tailwind uses `@relume_io/relume-tailwind` (Tailwind CSS 3). See `docs/relume.md`.

## Current wiring

| Integration | Status |
| --- | --- |
| Next.js + Tailwind 3 + Relume preset | Active |
| Relume export (`components/relume/`) | Unpacked; not yet adapted into OCA shell |
| Sanity | Installed: Studio at `/studio`; artist, artwork, resource, value, FAQ, and page-copy schemas; typed queries |
| Supabase | Documented; not installed |
| Stripe | Documented; not installed |
| Netlify | Planned; GitHub remote configured |

See `docs/decisions/001-stack-boundaries.md`, `docs/decisions/003-sanity-embedded-studio.md`, `docs/decisions/004-categorical-colour-roles.md`, `docs/content-model.md`, `docs/sanity.md`, and the full roadmap in `docs/begin.md`.
