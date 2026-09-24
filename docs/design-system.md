# Design system

Organized Chaos Arts visual foundation. Relume section utilities use the Tailwind theme in `tailwind.config.ts`; OCA shell UI uses CSS variables in `app/globals.css`.

## Brand direction

- **Paper / ink / rust / teal** — warm paper (`#f6f1e8`), ink (`#292936`), teal links (`#155c59`), rust (`#9a4622`), plus tangerine, seafoam, goldenrod, oat, moss, and cocoa
- **Typography** — Bricolage Grotesque (display) + Manrope (body)
- **Voice** — modern-retro: thick ink borders, hard offset shadows, colour-blocked sections
- Light mode first; semantic roles remappable for dark mode later
- Inline teal links in body copy are always **underlined** (colour is not the only cue)

## Colour roles (light mode)

| Token | Hex | Role |
| --- | --- | --- |
| `--color-paper` | `#f6f1e8` | Page background |
| `--color-ink` | `#292936` | Primary text |
| `--color-muted-ink` | `#625a56` | Secondary text |
| `--color-cocoa` | `#442016` | Dark warm accent |
| `--color-rust` | `#9a4622` | Buttons, labels, links on paper |
| `--color-teal` | `#155c59` | Links, primary buttons |
| `--color-moss` | `#586817` | Supporting text/labels |
| `--color-tangerine` | `#e88534` | Promotional blocks (ink on top) |
| `--color-seafoam` | `#a3ccbf` | Cards, sections (ink on top) |
| `--color-goldenrod` | `#d2a520` | Labels, promotional blocks (ink on top) |
| `--color-oat` | `#e6d7c3` | Alternate surface |

Pairs in the table above meet WCAG 2.2 AA for the listed uses.

## Categorical palettes

Hue-rotated families for colour-coding data (tags, types, and similar). These are not UI roles — keep using `--color-link`, `--color-teal`, and the other semantic tokens for chrome. Some seed hexes below differ slightly from the brand tokens (tangerine, seafoam, goldenrod); do not remap those brand roles until contrast is re-checked.

| Family | Seed | Tokens |
| --- | --- | --- |
| Teal | `#155c59` | `--color-palette-teal-green` `#155c35`, `--color-palette-teal-blue` `#153c5c`, `--color-palette-teal-plum` `#5c153c`, `--color-palette-teal-umber` `#5c3515` |
| Rust | `#9a4622` | `--color-palette-rust-berry` `#9a223a`, `--color-palette-rust-ochre` `#9a8222`, `--color-palette-rust-jade` `#229a82`, `--color-palette-rust-indigo` `#223a9a` |
| Cocoa | `#442016` | `--color-palette-cocoa-wine` `#441623`, `--color-palette-cocoa-olive` `#443716`, `--color-palette-cocoa-pine` `#164437`, `--color-palette-cocoa-midnight` `#162344` |
| Moss | `#586817` | `--color-palette-moss-khaki` `#685017`, `--color-palette-moss-leaf` `#2f6817`, `--color-palette-moss-navy` `#172f68`, `--color-palette-moss-grape` `#501768` |
| Tangerine | `#f47c3c` | `--color-palette-tangerine-punch` `#f43c58`, `--color-palette-tangerine-lemon` `#f4d83c`, `--color-palette-tangerine-aqua` `#3cf4d8`, `--color-palette-tangerine-iris` `#3c58f4` |
| Seafoam | `#7fd3c9` | `--color-palette-seafoam-mint` `#7fd39f`, `--color-palette-seafoam-sky` `#7fb3d3`, `--color-palette-seafoam-orchid` `#d37fb3`, `--color-palette-seafoam-peach` `#d39f7f` |
| Goldenrod | `#d9a04c` | `--color-palette-goldenrod-coral` `#d95a4c`, `--color-palette-goldenrod-chartreuse` `#cbd94c`, `--color-palette-goldenrod-aqua` `#4ccbd9`, `--color-palette-goldenrod-violet` `#5a4cd9` |

### Assigned roles

Families are exclusive so a card and the tags on it cannot share a fill. Mapping lives in `lib/palette.ts`. Full rationale: `docs/decisions/004-categorical-colour-roles.md`.

| Role | Tokens | Foreground |
| --- | --- | --- |
| Artist cards | Seafoam mint, sky, orchid, peach | Ink |
| Medium tags + artwork cards | One token per discipline (see `docs/decisions/004-categorical-colour-roles.md`) | Paper |
| Location tags | `--color-palette-moss-leaf` for every city | Paper |
| Home lists, values, FAQs, resources | Brand paper, oat, seafoam, goldenrod | Ink |
| Unused on text | rust-ochre, rust-jade, tangerine-punch, goldenrod-coral | Neither ink nor paper meets 4.5:1 |

Bright lemon, aqua, iris, and violet tokens are not assigned to landing furniture or to medium tags. Do not use a medium or location token as a decorative fill on unrelated components — the colour would stop meaning a type. Card fills skip the section surface and skip the previous cards in a grid so neighbours never match.

## Pages

Public routes use OCA-named sections. Relume remains a layout source under `components/relume/`. Temporary `/design-system` remains for token review.

## Artwork viewer

Catalogue artwork images open an OCA lightbox (`ArtworkViewer`) so the full piece can be seen without cropping — including the home hero collage, gallery/Instagram page heroes when they show catalogue work, artwork grids, and the Instagram stills grid. Card titles and artist names still link to the artist page. Portraits, resource covers, and editorial page images stay as plain media. The viewer uses a native `<dialog>`, closes on Escape or backdrop click, supports previous/next within the current set, and offers Fit / 2× / 3× zoom.
