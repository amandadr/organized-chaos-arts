# Sanity

Embedded Studio at `/studio`. Client, Live Content, and Draft Mode live in `lib/sanity/`.

## One-time project setup

1. Log in to the Sanity CLI (`npx sanity login`) or create an account at [sanity.io/manage](https://www.sanity.io/manage).
2. Create a project (dataset: `production`) and copy the project ID.
3. Copy `.env.example` to `.env.local` and set:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET` (`production`)
   - `SANITY_API_READ_TOKEN` — Viewer token. Required for draft preview, and for published reads if the dataset is private (new Sanity projects default to private).
   - `SANITY_API_WRITE_TOKEN` — Editor token, seed script only
4. Allow the Next app to talk to the API (credentials on):

```bash
npx sanity cors add http://localhost:3000 --credentials
```

5. Seed the development catalog (and re-seed after pull when the roster changes):

```bash
npm run sanity:seed
```

The seed **replaces** the artist and artwork roster: it upserts the invented Atlantic catalog in `scripts/seed/catalog.mjs` (~20 makers / ~100 works), asserts that each artwork’s medium classifies into its artist’s disciplines, then deletes leftover `artist` / `artwork` documents that are no longer in that set. Editorial documents (site settings, values, FAQs, resources, page copy) are upserted but not pruned. Medium → discipline matching lives in `lib/palette.ts` (keep `scripts/seed/classify.mjs` in sync).

6. Restart `npm run dev` and open [http://localhost:3000/studio](http://localhost:3000/studio).

Production will need the deployed origin added as a CORS origin as well.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run sanity` | Sanity CLI (`cors`, datasets, …) |
| `npm run typegen` | Extract schema + generate GROQ types |
| `npm run sanity:seed` | Replace development artist/artwork roster + upsert editorial content |

## Preview

Presentation Tool in Studio loads the site in an iframe and hits `/api/draft-mode/enable`. Draft Mode uses the read token. `SanityLive` and visual-editing overlays are mounted on public pages only, not on `/studio`.

Public routes read published Sanity documents for artists, artwork, resources, values, FAQs, and page copy. Contact forms still stay in the browser until a mailbox is wired; they can show the Studio contact email.
