# Sanity content model (artist slice)

Sanity owns **public / editorial** content. It is not a user database. Membership, ownership, and auth stay out of this model.

This phase models the artist vertical slice plus remaining public editorial copy. Events wait until those routes exist.

## Documents

### `siteSettings` (singleton, `_id: siteSettings`)

- `siteName` (required)
- `tagline`
- `description` (required)
- `contactEmail`
- `instagramUrl`
- `seo` (object)

Primary navigation stays in `lib/navigation.ts` for now so the shell does not have two sources of truth.

### `artist`

- `name`, `slug` (required)
- `portrait` (required image + alt)
- `shortBio` (required, max 280) — listings
- `bio` (required) — profile
- `city`, `region` (Atlantic: NS, NB, PE, NL)
- `disciplines` (required, at least one; predefined list)
- `website`, `instagramUrl` (optional URLs)
- `featured` (boolean)
- `seo` (optional)

Artists do **not** store an array of artwork references. Artwork points at the artist; queries collect works with `artist._ref`.

### `artwork`

- `title`, `slug` (required)
- `artist` (required reference → `artist`)
- `image` (required image + alt)
- `year` (optional number)
- `medium` (required)
- `dimensions` (optional free text)
- `description` (optional)
- `purchaseUrl` (optional; off-site sales only)
- `featured` (boolean)

### `resource`

- `title`, `slug`, `category`, `summary`, `body` (required)
- `image` (required image + alt)
- `publishedAt` (optional datetime)
- `featured` (boolean)
- `seo` (optional)

### `value`

- `title`, `body` (required)
- `order` (number)

Used on home and `/values`.

### `faq`

- `question`, `answer`, `group` (`artists` | `contact` | `values`)
- `order` (number)

### `editorialPage`

Keyed by `pageId`: `home`, `about`, `values`, `for-artists`, `pilot`, `support`, `contact`, `instagram`.

- `eyebrow`, `title`, `lede`
- optional hero `image` + alt
- `secondaryTitle`, `secondaryBody`
- `items` (title + body blocks)
- `seo` (optional)

Presentation colour “tones” are not CMS fields. Mapping a record to a Relume/OCA colour is a UI concern.

## Objects

### `seo`

Optional `title`, `description`, and share `image`.

### Images

Public portraits and artwork use Sanity `image` with hotspot/crop plus a required `alt` string on the image field.

## Queries

Typed fetch helpers live in `lib/sanity/queries.ts` and GROQ in `sanity/queries/`. They return empty/null when env vars are missing so the Next.js build does not require a live project.
