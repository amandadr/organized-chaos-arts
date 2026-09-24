# 004 — Categorical colour roles

## Decision

Colour-coding is for **data**. Page furniture (home lists, values, FAQs, resource cards, chrome) stays on quiet brand fills. Palette tokens mark medium and place only.

| Role | Tokens | Why |
| --- | --- | --- |
| Artist cards | Seafoam: mint, sky, orchid, peach | Light bodies so dark tags read on top. |
| Medium (discipline tags **and** artwork cards) | One token per discipline (see map) | Ceramics is always the same green on a homepage tag and on the piece card. |
| Location tags | `--color-palette-moss-leaf` for every city | Place is one signal. It is not a second rainbow. |
| Home / lists / values / FAQs / resources | Brand paper, oat, seafoam, goldenrod | Calm furniture. No lemon, aqua, iris, or chartreuse on the landing page. |
| Chrome | Existing brand tokens | Header, footer, links, primary buttons. Home CTAs use teal, not rust. |

Bright categorical leftovers (tangerine lemon/aqua/iris, goldenrod chartreuse/aqua/violet, rust ochre/jade, punch, coral) stay in CSS for the token gallery. They are not assigned to live UI until contrast and hierarchy are re-checked.

Artwork `medium` is free text in Sanity. The UI classifies it against the discipline list with keywords, then uses that discipline’s token. Colour is a supplement — the medium string remains visible.

## Discipline map

| Discipline | Token | Cue |
| --- | --- | --- |
| Ceramics | `--color-palette-teal-green` | Earth / glaze |
| Glass | `--color-palette-teal-blue` | Water / glass |
| Textiles | `--color-palette-teal-plum` | Dye |
| Wood | `--color-palette-teal-umber` | Bark |
| Jewelry | `--color-palette-rust-berry` | Garnet |
| Photography | `--color-palette-rust-indigo` | Darkroom |
| Collage | `--color-palette-cocoa-wine` | Cut paper |
| Illustration | `--color-palette-cocoa-olive` | Ink |
| Printmaking | `--color-palette-moss-navy` | Press / proof |
| Mixed media | `--color-palette-cocoa-midnight` | Combine |
| Sculpture | `--color-palette-moss-khaki` | Stone |
| Painting | `--color-palette-moss-grape` | Pigment |

Sculpture and painting previously used iris and violet. Those reads as neon on homepage tags, so they moved to moss. Printmaking left cocoa-pine because it sat too close to ceramics green on gallery cards.

## Contrast

Body copy and small tags need 4.5:1 (WCAG 2.2 AA). These tokens miss that with both ink and paper, so they are **not** used on text-bearing UI:

- `--color-palette-rust-ochre`
- `--color-palette-rust-jade`
- `--color-palette-tangerine-punch`
- `--color-palette-goldenrod-coral`

Foreground pairing for assigned palette tokens lives in `lib/palette.ts` (`paletteOn`) and the matching `.oca-fill-palette-*` class.

## Consequences

- Do not cycle a shared fill list across artists, artworks, and tags.
- Do not use a medium or location token as decoration on “how it works” or values cards — the colour would stop meaning a type.
- Do not vary location chips by province.
- Artist listing sections should not sit on brand seafoam, or seafoam cards blend into the band (home artists uses oat).
- Card fills must not match the section surface, and must not match the previous two or three cards in the grid (so neighbours never share a fill). If two ceramics would sit side by side, the second piece falls back to a quiet fill; the medium string still names the type.
- If artwork later gains a discipline field, drop the keyword matcher and keep the same token map.
