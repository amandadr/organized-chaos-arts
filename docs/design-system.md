# Design system

Token architecture for Organized Chaos Arts. Values below are **starter placeholders** until Relume palette and typography are confirmed. Components must use semantic roles, not raw colours.

## Colour roles (light mode)

| Token | Role |
| --- | --- |
| `--color-background` | Page background |
| `--color-surface` | Cards / elevated panels |
| `--color-surface-alt` | Alternate surface |
| `--color-text` | Primary text |
| `--color-text-muted` | Secondary text |
| `--color-text-inverse` | Text on inverse surfaces |
| `--color-border` | Default border |
| `--color-border-strong` | Emphasized border |
| `--color-brand-warm` | Warm brand accent |
| `--color-brand-warm-bright` | Bright warm accent |
| `--color-brand-cool` | Cool brand accent |
| `--color-brand-cool-bright` | Bright cool accent |
| `--color-accent-supporting-1` | Supporting accent |
| `--color-accent-supporting-2` | Supporting accent |
| `--color-link` | Interactive links |
| `--color-focus` | Focus ring |
| `--color-success` | Success |
| `--color-warning` | Warning |
| `--color-error` | Error |

Light mode is implemented first. Keep the same variable names so dark mode can remap roles later. Do **not** enable automatic dark mode until light mode is stable.

## Typography roles

Display, H1–H4, body, small body, caption, eyebrow/label, navigation, button — defined as CSS custom properties and demonstrated on `/design-system`.

## Spacing and shape

Scale: `2xs` … `4xl`. Also: border widths, radius scale, container widths, image treatment.

## Pending human input

- Final Relume colour values and approved foreground/background pairs
- Final typefaces and type scale from the design
- Decorative / hand-drawn treatments from Relume

Until then, swap token values in `app/globals.css` rather than hard-coding hex in components.
