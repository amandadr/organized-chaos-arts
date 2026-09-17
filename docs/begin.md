# Organized Chaos Arts — Development Plan

**Status:** Initial implementation plan  
**Project:** organizedchaosarts.ca  
**Development approach:** Next.js application developed with Cursor AI Agent  
**Primary deployment:** Netlify  
**Initial priority:** Public website and content platform  
**Future priority:** Paid membership and artist self-service

---

## 1. Project Goal

Build Organized Chaos Arts as a modern, accessible, image-rich arts platform that can launch relatively simply while providing a strong technical foundation for future membership, artist accounts, submissions, events, galleries, and other member-driven functionality.

The website should feel expressive and editorial rather than application-heavy, even though the underlying architecture supports application functionality.

The initial build should prioritize:

- Strong visual execution based on the Relume design
- Excellent presentation of artwork and photography
- Accessibility from the beginning
- Fast page loads and good technical SEO
- A manageable editorial workflow
- Structured content rather than hard-coded page content
- A clean foundation for future member functionality
- Reusable components rather than one-off page implementations

The project should **launch small without architecting small**.

---

# 2. Technical Stack

## Frontend

### Next.js

Next.js is the main website application.

Use:

- App Router
- TypeScript
- Server Components by default
- Client Components only where interaction requires them
- Next.js image handling
- Metadata API
- Static generation where appropriate
- Server-side rendering where appropriate

Avoid making the entire site client-rendered.

---

## UI / Component Foundation

### Relume

The existing Relume sitemap, wireframes, and visual design are the starting point for the frontend.

Relume should be treated as a **component source and design reference**, not as a permanent abstraction layer.

Workflow:

1. Identify the Relume section used by a page.
2. Bring the relevant React component into the repository.
3. Adapt it to OCA's design system.
4. Rename/refactor it according to what it actually does.
5. Replace hard-coded content with props or CMS data.
6. Treat the resulting component as OCA-owned code.

Example:

```text
Relume Team/Profile component
        ↓
ArtistCard
        ↓
Receives an Artist object from Sanity
```

Avoid filling the project with components named after Relume section numbers.

---

## Content Management

### Sanity

Sanity owns **public and editorial content**.

Expected content includes:

* Site settings
* Pages
* Artists
* Artwork
* Articles/resources
* Events
* Markets
* Opportunities
* Organizations
* Curated collections
* Navigation/editorial content

Sanity should describe content semantically.

Do not reproduce a traditional "everything is a blog post" model.

Examples:

```text
Artist
Artwork
Event
Resource
Opportunity
```

should be distinct content types when they represent genuinely different information.

---

## Authentication + Application Data

### Supabase Auth + Postgres

Supabase owns:

* User authentication
* Member accounts
* Membership state
* User preferences
* Artist/profile ownership
* Applications
* Submissions
* Private information
* Permissions
* Future member application data

Supabase should **not become a duplicate CMS**.

Public editorial artist information belongs in Sanity.

Private relationships such as:

```text
User X is allowed to manage Artist Y
```

belong in Supabase.

---

## Payments

### Stripe Billing

Stripe owns:

* Membership products
* Membership prices
* Subscriptions
* Payment methods
* Renewals
* Failed payments
* Cancellations
* Billing state

Stripe webhook events will eventually synchronize relevant membership state into Supabase.

Stripe should be treated as the source of truth for payment/subscription state.

Supabase should store the application-facing representation of that state.

---

## Hosting

### Netlify

Netlify hosts and deploys the Next.js application.

Use:

* Git-based production deployments
* Deploy previews
* Environment variables
* Production and preview environments
* Netlify's Next.js support
* Custom domain when ready

Deploy previews should be used heavily during development and design review.

---

# 3. System Responsibilities

Keep ownership boundaries explicit.

| System            | Owns                                                    |
| ----------------- | ------------------------------------------------------- |
| Next.js           | Presentation, routing, rendering, application behaviour |
| Relume            | Initial layout/component inspiration                    |
| Sanity            | Public/editorial content                                |
| Supabase Auth     | User identity                                           |
| Supabase Postgres | Private/application/member data                         |
| Stripe            | Billing and subscription state                          |
| Netlify           | Hosting and deployment                                  |

A piece of data should normally have **one authoritative owner**.

Avoid synchronizing the same editable content into multiple systems unless there is a clear technical reason.

---

# 4. Initial Architecture

```text
                          ┌──────────────┐
                          │    Sanity    │
                          │              │
                          │ Public and   │
                          │ editorial    │
                          │ content      │
                          └──────┬───────┘
                                 │
                                 │
                          ┌──────▼───────┐
                          │              │
             ┌───────────▶│   Next.js    │◀───────────┐
             │            │              │            │
             │            │ OCA website  │            │
             │            └──────┬───────┘            │
             │                   │                    │
             │             ┌─────┴──────┐             │
             │             │            │             │
       ┌─────┴─────┐ ┌─────▼─────┐ ┌────▼─────┐       │
       │  Netlify  │ │ Supabase  │ │  Stripe  │       │
       │           │ │           │ │          │       │
       │ Hosting   │ │ Auth + DB │ │ Billing  │       │
       └───────────┘ └─────▲─────┘ └────┬─────┘       │
                           │             │             │
                           └─────────────┘             │
                               webhooks               │
```

---

# 5. Repository Strategy

Start with a single repository.

Suggested structure:

```text
/
├── app/
│   ├── (site)/
│   ├── api/
│   ├── studio/
│   ├── layout.tsx
│   └── globals.css
│
├── components/
│   ├── layout/
│   ├── navigation/
│   ├── artists/
│   ├── artwork/
│   ├── resources/
│   ├── events/
│   ├── forms/
│   ├── ui/
│   └── relume/
│
├── lib/
│   ├── sanity/
│   ├── supabase/
│   ├── stripe/
│   ├── seo/
│   └── utils/
│
├── sanity/
│   ├── schemas/
│   ├── queries/
│   └── config/
│
├── types/
│
├── public/
│
├── docs/
│   ├── architecture.md
│   ├── dev-plan.md
│   ├── content-model.md
│   ├── design-system.md
│   └── decisions/
│
├── .cursor/
│   └── rules/
│
├── AGENTS.md
├── README.md
└── package.json
```

This can evolve.

Do not create abstractions or directories that do not yet have a practical use.

---

# 6. Cursor Agent Rules

Cursor should assist development, not independently redesign the system.

Create an `AGENTS.md` containing the most important project rules.

## Agent operating principles

### Before making significant changes

The agent should:

1. Read relevant project documentation.
2. Inspect existing code before creating new patterns.
3. Explain the proposed implementation briefly.
4. Identify the files it expects to create or modify.
5. Flag architectural ambiguity before guessing.

### During implementation

The agent should:

* Prefer existing components over duplication.
* Prefer composition over large configurable mega-components.
* Keep component APIs understandable.
* Use TypeScript properly.
* Avoid `any` unless unavoidable and documented.
* Use Server Components by default.
* Add `"use client"` only when browser-side state or APIs require it.
* Keep secrets on the server.
* Never expose service-role or Stripe secret keys.
* Avoid introducing packages for trivial functionality.
* Keep dependencies intentional.
* Preserve accessibility semantics from the beginning.

### After significant changes

Always run:

```bash
npm run lint
npm run typecheck
npm run build
```

Add tests later where appropriate.

Do not declare a task complete while linting, type checking, or builds are failing.

---

# 7. Accessibility Requirements

Accessibility is a foundation of the build, not a post-launch audit.

Target:

**WCAG 2.2 AA**

At minimum:

* Semantic HTML
* Logical heading hierarchy
* Keyboard operability
* Visible focus states
* Correct labels and accessible names
* Appropriate alternative text
* Accessible forms and validation
* Adequate colour contrast
* No information communicated by colour alone
* Reduced-motion support
* Accessible dialogs and menus
* Meaningful link text
* Proper landmarks
* Responsive text
* Appropriate touch target sizes

Do not remove outlines unless replacing them with an equally visible focus indicator.

Use native HTML elements before recreating their behaviour with ARIA.

---

# 8. Design System Foundation

Build the visual system before extensively styling individual pages.

The design system should include:

## Typography

Define:

* Display
* H1
* H2
* H3
* H4
* Body
* Small body
* Caption
* Eyebrow/label
* Navigation
* Button

Avoid arbitrary font sizes inside individual components.

---

## Spacing

Create a predictable spacing scale.

Example conceptual scale:

```text
2xs
xs
sm
md
lg
xl
2xl
3xl
4xl
```

Use the system rather than introducing arbitrary spacing for every component.

---

## Colour

Implement colours by **semantic role**, not by raw colour names.

Example:

```text
background
surface
surface-alt

text
text-muted
text-inverse

border
border-strong

brand-warm
brand-warm-bright

brand-cool
brand-cool-bright

accent-supporting-1
accent-supporting-2

link
focus

success
warning
error
```

Develop light mode first.

Prepare the token architecture so dark mode can later redefine semantic roles without rewriting components.

Avoid this:

```css
.card {
  background: #f7f1e7;
}
```

Prefer:

```css
.card {
  background: var(--color-surface);
}
```

The final palette should be documented along with approved foreground/background combinations.

---

## Shape and Borders

Define:

* Border width
* Strong border width
* Radius scale
* Image treatment
* Card treatment
* Decorative hand-drawn treatments

The site should retain some irregular, tactile, zine-like personality without making basic interface structure unpredictable.

---

# 9. Image Strategy

OCA is an image-first project.

Images should be treated as primary content rather than decoration.

Requirements:

* Use `next/image` where appropriate.
* Preserve artwork aspect ratios unless a deliberate crop is part of the component.
* Avoid excessive visual cropping of artists' work.
* Store meaningful alt text in Sanity.
* Allow decorative images to use empty alt text.
* Define responsive image sizes.
* Avoid loading full-resolution originals where unnecessary.
* Test image-heavy pages under slower network conditions.
* Prevent layout shift.

Gallery cards should be able to support multiple artwork orientations gracefully.

---

# 10. Sanity Content Model — Initial Draft

Do not model the entire future platform immediately.

Start with content required for the first release.

## Site Settings

Possible fields:

```text
site name
description
default social image
contact information
social profiles
primary navigation
footer navigation
```

---

## Artist

Possible fields:

```text
name
slug
profile image
bio
short bio
location
disciplines
website
social links
featured status
artworks
SEO metadata
```

---

## Artwork

Possible fields:

```text
title
artist
image
alternative text
year
medium
dimensions
description
external purchase link
featured status
```

Do not assume all artwork is for sale.

---

## Resource

Possible fields:

```text
title
slug
summary
featured image
body
author
publication date
resource type
topics
SEO metadata
```

---

## Event / Market

Add when required by the approved sitemap.

Potential fields:

```text
title
slug
description
venue
location
start date
end date
external URL
image
organizer
participating artists
```

---

# 11. Supabase Data Model — Initial Direction

Do not implement every table immediately.

Document the planned model before implementing membership.

Likely initial entities:

```text
profiles
memberships
artist_ownership
submissions
```

Conceptually:

```text
auth.users
    │
    └── profiles
           │
           ├── memberships
           │
           └── artist_ownership
                         │
                         └── Sanity artist document ID
```

Sanity should remain the authoritative source for the public Artist record.

Supabase records who is authorized to manage it.

---

# 12. Stripe Integration Direction

Stripe does not need to be fully implemented during initial public-site development.

However, architecture should anticipate:

```text
Stripe Customer
      │
      ├── Subscription
      │       │
      │       └── Price / membership tier
      │
      ▼
Stripe webhook
      │
      ▼
Supabase membership record
      │
      ▼
Next.js permissions / member experience
```

Never trust client-provided subscription state.

Membership status must ultimately be established server-side.

---

# 13. Development Phases

---

## Phase 0 — Project Definition

Before significant coding:

* [ ] Finalize initial sitemap
* [ ] Review Relume wireframes
* [ ] Review Relume visual design
* [ ] Identify launch-critical pages
* [ ] Identify reusable Relume components
* [ ] Confirm initial colour roles
* [ ] Confirm typography
* [ ] Document initial Sanity content types
* [ ] Define MVP versus future functionality

### Deliverable

A stable enough design and information architecture to begin component development without constantly restructuring the application.

---

# Phase 1 — Repository + Tooling

Create the project.

### Tasks

* [ ] Create GitHub repository
* [ ] Scaffold Next.js
* [ ] Enable TypeScript
* [ ] Configure Tailwind
* [ ] Configure linting
* [ ] Add explicit `typecheck` script
* [ ] Add Prettier if desired
* [ ] Create project directory structure
* [ ] Add `AGENTS.md`
* [ ] Add Cursor project rules
* [ ] Create `.env.example`
* [ ] Create initial documentation
* [ ] Connect repository to Netlify
* [ ] Confirm deploy previews work

### Definition of Done

A blank OCA application can be:

```text
developed locally
→ committed
→ pushed
→ built by Netlify
→ viewed through a deploy preview
```

without errors.

---

# Phase 2 — Design System

Before building complete pages, establish foundational styles.

### Build

* [ ] Global CSS reset/base
* [ ] Font loading
* [ ] Typography scale
* [ ] Colour tokens
* [ ] Spacing scale
* [ ] Container widths
* [ ] Grid rules
* [ ] Breakpoints
* [ ] Border treatments
* [ ] Buttons
* [ ] Links
* [ ] Focus styles
* [ ] Form controls
* [ ] Image treatments

### Build a temporary `/design-system` route

Use it to display:

```text
Typography
Buttons
Links
Colours
Cards
Inputs
Images
Spacing
Focus states
```

This route can be removed or protected before launch.

### Definition of Done

Common visual decisions can be made through reusable tokens/components instead of being re-decided inside every page.

---

# Phase 3 — Global Site Shell

Build the shared website structure.

### Components

* [ ] SiteHeader
* [ ] DesktopNavigation
* [ ] MobileNavigation
* [ ] SiteFooter
* [ ] PageContainer
* [ ] Section
* [ ] PageHero
* [ ] Breadcrumbs if required
* [ ] SkipLink

### Include

* Responsive behaviour
* Keyboard navigation
* Focus management
* Active navigation states

### Definition of Done

Every page can be placed inside a stable, accessible site shell.

---

# Phase 4 — Sanity Setup

Create the Sanity project.

### Tasks

* [ ] Configure Sanity
* [ ] Configure Studio
* [ ] Create initial schemas
* [ ] Define references
* [ ] Add validation rules
* [ ] Configure images
* [ ] Create typed query layer
* [ ] Add preview/draft strategy
* [ ] Populate representative test content

Do not populate Sanity with meaningless lorem ipsum if real-ish test content is available.

Test content should expose:

* Long names
* Short names
* Missing optional fields
* Portrait images
* Landscape images
* Long biographies
* Short biographies
* Multiple artworks

### Definition of Done

Next.js can retrieve typed public content from Sanity reliably.

---

# Phase 5 — First Vertical Slice

Do not build every page independently.

Build one complete content path through the entire stack.

Recommended first slice:

```text
Artist Directory
      ↓
Artist Card
      ↓
Artist Profile
      ↓
Artwork Grid
      ↓
Artwork data from Sanity
```

This tests:

* Routing
* Sanity
* Images
* Cards
* Typography
* Responsive layouts
* Relationships
* Dynamic routes
* SEO
* Accessibility

### Pages

* [ ] Artist index
* [ ] Artist profile

### Components

* [ ] ArtistCard
* [ ] ArtistGrid
* [ ] ArtistHero
* [ ] ArtworkCard
* [ ] ArtworkGrid
* [ ] EmptyState

### Definition of Done

A real artist can be added in Sanity and automatically receive a working public profile without touching application code.

---

# Phase 6 — Core Public Pages

Once the vertical slice is stable, build the remaining MVP pages.

Likely sequence:

1. Home
2. About
3. Artist directory
4. Artist profile
5. Resources
6. Resource/article
7. Events/markets if launch-critical
8. Membership overview
9. Contact

Build from shared components wherever practical.

Avoid forcing unrelated page sections into one overly configurable component.

---

# Phase 7 — SEO + Metadata

Create SEO infrastructure once real page patterns exist.

Include:

* [ ] Page titles
* [ ] Meta descriptions
* [ ] Canonical URLs
* [ ] Open Graph metadata
* [ ] Social images
* [ ] Robots configuration
* [ ] XML sitemap
* [ ] Artist structured data where appropriate
* [ ] Article structured data where appropriate
* [ ] 404 page
* [ ] Redirect strategy

SEO fields should have sensible fallbacks.

Editors should not need to manually enter identical metadata repeatedly.

---

# Phase 8 — Supabase Foundation

Add authentication architecture after the public content layer is stable.

### Tasks

* [ ] Create Supabase project
* [ ] Configure environment variables
* [ ] Add server-side Supabase utilities
* [ ] Add browser utilities only where required
* [ ] Create `profiles`
* [ ] Define Row Level Security policies
* [ ] Build sign-in flow
* [ ] Build sign-out flow
* [ ] Build account shell
* [ ] Test session persistence
* [ ] Test unauthorized access

Do not build artist editing yet unless required for the MVP.

### Definition of Done

A user can securely authenticate and access an account area without exposing private data.

---

# Phase 9 — Membership + Stripe

Treat this as a dedicated project phase.

### Define first

* Membership tiers
* Prices
* Billing intervals
* Benefits
* Membership entitlements
* Cancellation behaviour
* Grace periods
* Failed-payment behaviour

### Then implement

* [ ] Stripe products/prices
* [ ] Checkout
* [ ] Customer mapping
* [ ] Webhook endpoint
* [ ] Subscription synchronization
* [ ] Membership table
* [ ] Billing portal
* [ ] Membership status handling
* [ ] Error/retry handling

### Important

Do not grant access based solely on a successful browser redirect from Stripe.

Stripe webhooks/server verification must establish membership state.

---

# Phase 10 — Artist Self-Service

This should only be built after membership requirements are understood.

Possible future flow:

```text
Member
  ↓
Account
  ↓
Claim/create artist profile
  ↓
Submit changes
  ↓
Review/moderation
  ↓
Sanity public record updated
```

Do not automatically give arbitrary authenticated users permission to edit public content.

Moderation should be designed intentionally.

---

# 14. First Components to Build

A useful initial component inventory:

## Foundations

```text
Container
Section
Stack
Button
TextLink
Badge
Image
RichText
```

## Layout

```text
SiteHeader
MobileNavigation
SiteFooter
PageHero
SectionHeader
CTASection
```

## Artists

```text
ArtistCard
ArtistGrid
ArtistHero
ArtistDetails
ArtistLinks
```

## Artwork

```text
ArtworkCard
ArtworkGrid
ArtworkGallery
ArtworkMetadata
```

## Editorial

```text
ResourceCard
ResourceGrid
ArticleHeader
RichTextRenderer
```

Do not build all of these before they are needed.

This is an inventory, not a mandate.

---

# 15. Relume Migration Workflow

For every Relume section:

### Step 1

Identify what the section actually represents.

Example:

```text
Relume Portfolio 14
```

may actually represent:

```text
FeaturedArtistGrid
```

### Step 2

Copy/import the smallest necessary component.

### Step 3

Remove:

* Demo data
* Placeholder copy
* Unused variants
* Unnecessary dependencies
* Relume-specific naming

### Step 4

Connect it to OCA design tokens.

### Step 5

Make data injectable.

### Step 6

Connect to Sanity only at the appropriate page/container layer.

Prefer:

```tsx
<ArtistGrid artists={artists} />
```

over having `ArtistGrid` independently fetch Sanity data internally.

This keeps presentation components reusable and testable.

---

# 16. Data Access Pattern

Keep external services behind dedicated modules.

Example:

```text
lib/
  sanity/
    client.ts
    artists.ts
    artworks.ts
    resources.ts

  supabase/
    server.ts
    browser.ts
    memberships.ts

  stripe/
    client.ts
    subscriptions.ts
```

Pages should call meaningful functions.

Prefer:

```ts
const artists = await getArtists()
```

over scattering raw query syntax throughout the application.

---

# 17. Type Safety

External data must have explicit types.

Use generated types where practical.

Important domain concepts should have understandable names:

```ts
Artist
Artwork
Resource
Event
Membership
UserProfile
```

Avoid passing giant generic CMS response objects directly through the component tree.

Transform data into useful application-level shapes where appropriate.

---

# 18. Performance Rules

Because OCA is image-heavy:

* Optimize images.
* Specify image dimensions/aspect ratios.
* Avoid unnecessary JavaScript.
* Prefer server rendering for content.
* Lazy-load below-the-fold media.
* Avoid enormous animation libraries unless justified.
* Avoid loading an entire gallery's full-size images immediately.
* Use responsive image sizes.
* Measure rather than guessing.

Initial target:

* Strong Core Web Vitals
* Minimal layout shift
* Fast first render
* Useful content available without client-side JavaScript

---

# 19. Responsive Design

Do not interpret desktop Relume layouts literally at smaller sizes.

For every component evaluate:

* Reading order
* Image order
* Text width
* Navigation
* Touch targets
* Grid collapse
* Horizontal overflow
* Artwork aspect ratios
* Heading wrapping

Test at minimum:

```text
small mobile
large mobile
tablet
small laptop
desktop
wide desktop
```

Do not design exclusively around named device widths.

---

# 20. Light + Dark Mode Strategy

Develop light mode first.

However, every component should use semantic colour roles so dark mode can later be added centrally.

Do not create component CSS like:

```text
white background
brown text
teal link
```

Think:

```text
surface background
primary text
interactive link
```

Dark mode should later remap these roles.

Do not implement automatic dark mode until the light-mode system is stable.

---

# 21. Testing Checklist for Every Page

Before marking a page complete:

### Content

* [ ] Works with realistic content
* [ ] Handles missing optional content
* [ ] Handles unusually long text
* [ ] Handles unusually short text

### Responsive

* [ ] Mobile
* [ ] Tablet
* [ ] Desktop
* [ ] No horizontal overflow

### Accessibility

* [ ] Keyboard usable
* [ ] Focus visible
* [ ] Heading hierarchy sensible
* [ ] Images have correct alt behaviour
* [ ] Links are understandable
* [ ] Contrast passes
* [ ] Interactive controls have accessible names

### Technical

* [ ] No console errors
* [ ] TypeScript passes
* [ ] Lint passes
* [ ] Production build passes
* [ ] Metadata present
* [ ] Images optimized appropriately

---

# 22. Definition of MVP

The MVP should prove the architecture without building the entire roadmap.

A reasonable initial milestone is:

* Public Next.js website
* OCA visual system
* Responsive site shell
* Sanity CMS
* Artist directory
* Artist profiles
* Artwork display
* Resource/article publishing
* Core informational pages
* Membership marketing page
* Netlify deployment
* Technical SEO
* WCAG 2.2 AA baseline

Potentially **not required for the first public release**:

* Member login
* Paid subscriptions
* Artist self-service
* Submission workflow
* Member-only resources
* Marketplace functionality

These can be implemented as deliberate subsequent phases without changing the core architecture.

---

# 23. Avoid Premature Complexity

Do not build:

* A custom component library before real components exist
* A generic page builder
* A complex permissions framework before permissions exist
* A universal data abstraction layer
* A full membership system before membership rules are defined
* Sophisticated caching without evidence it is needed
* Microservices
* Multiple repositories without a practical reason
* Client-side state management for data Next.js already manages
* Custom infrastructure already provided by the selected platforms

Prefer boring, understandable architecture.

---

# 24. Documentation Requirements

Maintain the following as the project develops:

```text
docs/
  architecture.md
  dev-plan.md
  design-system.md
  content-model.md
  membership-model.md
  deployment.md
```

For significant architectural decisions, add:

```text
docs/decisions/
```

Example:

```text
001-sanity-for-public-content.md
002-supabase-for-user-data.md
003-semantic-colour-tokens.md
```

Keep these short.

The goal is to preserve **why decisions were made**, not document every line of code.

---

# 25. Git Workflow

Use small, understandable commits.

Examples:

```text
chore: scaffold Next.js project

feat: add global typography tokens

feat: create site header and mobile navigation

feat: configure Sanity artist schema

feat: add artist directory

fix: preserve artwork aspect ratio on mobile
```

Avoid enormous commits generated by an AI agent containing unrelated changes.

The agent should work one coherent task at a time.

---

# 26. Recommended First Development Sequence

Start here:

```text
1. Scaffold repository
        ↓
2. Netlify deployment
        ↓
3. Documentation + Cursor rules
        ↓
4. Design tokens
        ↓
5. Global shell
        ↓
6. Sanity project
        ↓
7. Artist + Artwork schemas
        ↓
8. Artist directory
        ↓
9. Artist profile
        ↓
10. Home page
        ↓
11. Remaining public pages
        ↓
12. SEO / accessibility / performance sweep
        ↓
13. Supabase authentication
        ↓
14. Stripe membership
        ↓
15. Artist self-service
```

This order deliberately gets a real public content experience working before introducing account and payment complexity.

---

# 27. First Cursor Agent Task

Use the following as the first substantial Cursor prompt after creating the repository:

> Read `AGENTS.md` and everything in `/docs` before making changes.
>
> We are starting the Organized Chaos Arts website using Next.js, TypeScript, Tailwind, Sanity, Supabase, Stripe, and Netlify.
>
> For this task, only establish the frontend project foundation. Do not implement Sanity, Supabase, Stripe, or membership functionality yet.
>
> Please:
>
> 1. Inspect the existing repository.
> 2. Propose a concise implementation plan and identify the files you will change.
> 3. Ensure the project uses the Next.js App Router and TypeScript.
> 4. Establish the basic folder structure described in `docs/dev-plan.md`, but do not create empty directories or abstractions that are not currently useful.
> 5. Create the global layout and base styling foundation.
> 6. Establish semantic CSS variables for the colour system, with light mode as the current implementation and a structure that can support dark mode later.
> 7. Establish basic typography, spacing, containers, links, buttons, and accessible focus styles.
> 8. Create a temporary `/design-system` page demonstrating these foundations.
> 9. Do not invent final page copy.
> 10. Do not import unnecessary libraries.
> 11. Do not build page-specific components yet.
>
> Accessibility target is WCAG 2.2 AA.
>
> After implementation:
>
> * run lint
> * run typecheck
> * run the production build
> * fix any errors
> * summarize what changed
> * identify any decisions that still need human review
>
> Do not proceed into the next development phase automatically.

---

# 28. Second Cursor Agent Task

After the design foundation is approved:

> Read `AGENTS.md`, `docs/dev-plan.md`, `docs/architecture.md`, and `docs/design-system.md`.
>
> Inspect the Relume design and the existing codebase.
>
> Implement the global OCA site shell:
>
> * SiteHeader
> * accessible desktop navigation
> * accessible mobile navigation
> * SkipLink
> * PageContainer
> * Section
> * SiteFooter
>
> Adapt relevant Relume code where useful, but convert imported sections into OCA-owned components with semantic names.
>
> Use existing design tokens. Do not introduce raw hex values or arbitrary typography/spacing values inside components.
>
> Use Server Components by default.
>
> Confirm keyboard behaviour and responsive layouts.
>
> Do not begin Sanity integration yet.
>
> Run lint, typecheck, and production build when complete.
>
> Stop and summarize the result before proceeding further.

---

# 29. Third Cursor Agent Task

Once the shell is approved:

> Read the project documentation before editing.
>
> Set up Sanity as the public/editorial CMS.
>
> For this phase, implement only the content foundation required for the Artist vertical slice.
>
> Create:
>
> * site settings schema
> * artist schema
> * artwork schema
> * relationships between artists and artwork
> * sensible field validation
> * image alt-text fields where appropriate
> * Sanity client utilities
> * typed queries for artists and artworks
>
> Populate enough development content to test realistic UI edge cases.
>
> Do not build Supabase, Stripe, authentication, or membership functionality.
>
> Do not duplicate Sanity content into application constants.
>
> Run lint, typecheck, and production build.
>
> Stop and summarize any content-model decisions that require human approval.

---

# 30. Core Development Principle

Whenever choosing between:

> "Build everything the platform might eventually need"

and:

> "Build today's feature in a way that leaves a sensible path forward"

choose the second.

OCA should have **strong foundations without speculative complexity**.

```

One thing I’d emphasize when you actually start working with Cursor: **don’t hand the agent this whole roadmap and say “build it.”** The plan is context; each implementation prompt should cover one bounded phase and explicitly tell it to stop afterward. That keeps you in the architect/reviewer seat instead of discovering 70 changed files after Cursor enthusiastically built an imaginary membership platform.
```
