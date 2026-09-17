# Organized Chaos Arts

Public website for [organizedchaosarts.ca](https://organizedchaosarts.ca) — Next.js App Router, TypeScript, and Tailwind. Content, auth, and billing integrations come later (see `docs/`).

## Requirements

- Node.js **22+** (see `.nvmrc`)
- npm (packages install locally into `node_modules`; nothing is installed globally)

## Local setup

```bash
nvm use          # or otherwise use Node 22+
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Design tokens live at [http://localhost:3000/design-system](http://localhost:3000/design-system).

Copy `.env.example` to `.env.local` when you need environment variables. Secrets stay out of git.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Development server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript (`tsc --noEmit`) |
| `npm run format` | Prettier write |
| `npm run format:check` | Prettier check |

## Documentation

- `docs/begin.md` — full original roadmap
- `docs/dev-plan.md` — current phase sequence
- `docs/architecture.md` — system ownership
- `docs/design-system.md` — token roles
- `docs/decisions/` — short ADRs
- `AGENTS.md` — rules for Cursor / coding agents

## Current status

Local kickoff complete: Next.js scaffold, design tokens, docs, and Cursor rules. Next: global site shell (after Relume design review), then Sanity artist vertical slice. GitHub and Netlify are not connected yet.
