# 001 — Stack boundaries

## Decision

Use Next.js for the website, Sanity for public/editorial content, Supabase for auth and private application data, Stripe for billing, and Netlify for hosting.

## Why

- Public artist/artwork/resource content needs an editorial CMS with strong media handling → **Sanity**.
- Membership, ownership, and private permissions are application data with Row Level Security → **Supabase**.
- Payment and subscription lifecycle must not be trusted from the client → **Stripe** as billing source of truth, synchronized into Supabase via webhooks.
- Deploy previews and Git-based hosting fit the editorial review workflow → **Netlify**.

## Consequences

- Do not duplicate editable public content into Supabase.
- Do not use Sanity as a user database.
- Do not grant membership access from a Stripe browser redirect alone.
- Install and wire each system only when that development phase begins.
