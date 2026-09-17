<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Organized Chaos Arts — Agent Rules

Read `/docs` before significant changes. Prefer `docs/dev-plan.md`, `docs/architecture.md`, and `docs/design-system.md` over inventing structure.

## Operating principles

### Before significant changes

1. Read relevant project documentation.
2. Inspect existing code before creating new patterns.
3. Explain the proposed implementation briefly.
4. Identify the files you expect to create or modify.
5. Flag architectural ambiguity before guessing.

### During implementation

- Prefer existing components over duplication.
- Prefer composition over large configurable mega-components.
- Keep component APIs understandable.
- Use TypeScript properly; avoid `any` unless unavoidable and documented.
- Use Server Components by default; add `"use client"` only when browser-side state or APIs require it.
- Keep secrets on the server; never expose service-role or Stripe secret keys.
- Avoid introducing packages for trivial functionality.
- Preserve accessibility semantics from the beginning (WCAG 2.2 AA).
- Use semantic design tokens (`var(--color-*)`); do not hard-code raw hex/rgb in components.
- Work one coherent phase at a time; stop when the current task is done.
- Do not implement Sanity, Supabase, Stripe, membership, or Relume imports until that phase is requested.
- Do not create empty directories or abstractions that have no current use.

### After significant changes

Always run:

```bash
npm run lint
npm run typecheck
npm run build
```

Do not declare a task complete while linting, type checking, or builds are failing.

## Stack ownership (do not blur)

| System | Owns |
| --- | --- |
| Next.js | Presentation, routing, rendering, application behaviour |
| Sanity | Public/editorial content (not yet wired) |
| Supabase | Auth + private/application data (not yet wired) |
| Stripe | Billing/subscriptions (not yet wired) |
| Netlify | Hosting (not yet connected) |

Full roadmap: `docs/begin.md`. Living plan: `docs/dev-plan.md`.
