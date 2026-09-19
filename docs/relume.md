# Relume

Source: React export from Relume Site Builder (`oca.zip`), unpacked into `components/relume/`.

## Installed packages

Per [Relume React docs](https://react-docs.relume.io/getting-started/installation):

- `@relume_io/relume-ui` — UI elements (Button, Carousel, etc.)
- `@relume_io/relume-tailwind` — Tailwind v3 preset (breakpoints, colours, spacing)
- Export peers also used by sections: `framer-motion`, `react-icons`, `embla-carousel-autoplay`, `clsx`

`.npmrc` sets `legacy-peer-deps=true` because Relume currently peers React 18 while this app uses React 19 (docs allow React 18+).

## Tailwind

- Tailwind CSS **3.4** (Relume preset is not Tailwind v4–compatible)
- Config: [`tailwind.config.ts`](../tailwind.config.ts) — Option 1 preset from [Tailwind Config](https://react-docs.relume.io/getting-started/tailwind)
- Content globs include `app/`, `components/`, and `@relume_io/relume-ui/dist`

## Workflow

1. Treat files under `components/relume/` as **raw Relume sections** (wireframe layouts; Style Guide colours are not exported).
2. When promoting a section into the product UI, copy/adapt it into an OCA-named component (e.g. `SiteHeader`), wire to design tokens / CMS, and drop Relume naming.
3. Do not build features by editing Relume originals in place long-term.

## Pages in this export

`home`, `artists`, `artist-profile`, `gallery`, `for-artists`, `about`, `resources`, `resource-article`, `values-community-standards`, `pilot-participation-info`, `contact`, `support`, `instagram`
