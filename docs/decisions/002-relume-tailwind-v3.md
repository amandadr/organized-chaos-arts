# 002 — Relume + Tailwind CSS 3

## Decision

Use `@relume_io/relume-ui` and `@relume_io/relume-tailwind` with **Tailwind CSS 3.4**, not Tailwind 4.

## Why

- Relume’s published preset and docs target the Tailwind 3 config format (`content`, `presets`, plugins such as `tailwindcss-animate` / `@tailwindcss/typography`).
- The Site Builder React export depends on `@relume_io/relume-ui` plus `framer-motion`, `react-icons`, and `embla-carousel-autoplay`.

## Consequences

- Stay on Tailwind 3 while Relume sections remain the layout source.
- `.npmrc` uses `legacy-peer-deps=true` because Relume peers React 18 and this app uses React 19 (docs: React 18+).
- Container screens omit Relume’s `100%` sm/md values to avoid invalid CSS media queries under Turbopack.
