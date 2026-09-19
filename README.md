# Organized Chaos Arts

Public website for [organizedchaosarts.ca](https://organizedchaosarts.ca) — Next.js App Router, TypeScript, Tailwind CSS 3 (Relume preset), and Sanity for public/editorial content. Auth and billing come later (see `docs/`).

## Requirements

- Node.js **22+** (see `.nvmrc`)
- npm (packages install locally into `node_modules`; nothing is installed globally)

## Local setup

```bash
nvm use          # or otherwise use Node 22+
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Design tokens live at [http://localhost:3000/design-system](http://localhost:3000/design-system). Studio: [http://localhost:3000/studio](http://localhost:3000/studio) after env vars are set.

Copy `.env.example` to `.env.local` and add Sanity project values when you are ready to open Studio. Notes: `docs/sanity.md`. Secrets stay out of git.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Development server (webpack) |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript (`tsc --noEmit`) |
| `npm run format` | Prettier write |
| `npm run format:check` | Prettier check |
| `npm run typegen` | Generate Sanity schema + GROQ types |
| `npm run sanity:seed` | Upload development artists/artwork |

## Relume

Installed and configured per [react-docs.relume.io](https://react-docs.relume.io/):

- `@relume_io/relume-ui` + `@relume_io/relume-tailwind`
- Tailwind **v3** with Relume preset in `tailwind.config.ts`
- Site Builder export unpacked under `components/relume/`

See `docs/relume.md`.

## Documentation

- `docs/begin.md` — full original roadmap
- `docs/dev-plan.md` — current phase sequence
- `docs/architecture.md` — system ownership
- `docs/design-system.md` — token roles
- `docs/relume.md` — Relume install + export notes
- `docs/sanity.md` — Studio, env, seed, preview
- `docs/content-model.md` — artist-slice schemas
- `docs/decisions/` — short ADRs
- `AGENTS.md` — rules for Cursor / coding agents

## Current status

Local foundation, Relume shell, and Sanity-backed home, gallery, Instagram, and artist pages. Resources, FAQs, and values still use placeholder copy.
