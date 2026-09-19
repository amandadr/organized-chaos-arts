# 003 — Embedded Sanity Studio

## Decision

Run Sanity Studio at `/studio` inside the Next.js app. Keep schemas, GROQ, and Studio config under `sanity/`, and keep server fetch helpers under `lib/sanity/`.

## Why

- One deploy for the public site and the editorial UI (Netlify later).
- `next-sanity` Draft Mode + Presentation Tool match the App Router preview path.
- The documented folder split keeps CMS types out of UI components.

## Consequences

- Route group `(site)` owns header/footer; Studio does not inherit the public chrome.
- Do not query Sanity from Relume leftover sections. Pages call `lib/sanity/queries.ts`.
- A live project ID is required for Studio and seed; the production build still succeeds without credentials.
