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

## Pages

Public routes use OCA-named sections. Relume remains a layout source under `components/relume/`. Temporary `/design-system` remains for token review.
