# CMS Development Plan

This document tracks the phased plan for adding Payload CMS to the Zenticsys company website.

The goal is to let the SEO and marketing team manage content safely without turning the entire site into an unstructured page builder. Engineering will keep ownership of layout, components, brand presentation, and core assets while gradually exposing the right content fields through the CMS.

## Core Decisions

- CMS: Payload CMS inside the existing Next.js app.
- Backend repo: no separate backend repo.
- Database: MongoDB Atlas, starting with the free tier.
- Hosting: existing Vercel deployment.
- Asset strategy:
  - Core site assets stay in the repo under `public/`.
  - CMS-managed uploads are limited to blog assets at first.
  - Vercel Blob can be added for blog media if upload management is required.
- Editing model: structured content first, not a fully freeform page builder.

## Phase 0: Preparation

Purpose: make the existing app ready for Payload integration.

Tasks:

- Confirm Node version files are committed.
- Confirm Next.js version is compatible with Payload.
- Consolidate duplicate Next config files into one config file.
- Fix or defer ESLint flat config setup.
- Create required environment variable plan.

Expected output:

- One canonical Next config file.
- A clean production build.
- Clear local and Vercel env var requirements.

## Phase 1: CMS Foundation

Purpose: install Payload and prove the CMS runs inside this repo.

Tasks:

- Install Payload dependencies.
- Add Payload config.
- Add MongoDB adapter.
- Add admin route at `/admin`.
- Add API route handlers required by Payload.
- Add base collections:
  - `users`
  - `media`
  - `blogPosts`
- Add `.env.example` with required keys:
  - `DATABASE_URI`
  - `PAYLOAD_SECRET`
  - `NEXT_PUBLIC_SERVER_URL`
- Verify local admin login.
- Verify `pnpm build`.

Expected output:

- Payload admin works locally.
- MongoDB Atlas connection works.
- No frontend page is migrated yet.

## Phase 2: Blog CMS

Purpose: migrate the blog from hardcoded data to Payload.

Current source:

- `src/data/blogPosts.ts`
- `src/app/blog/page.tsx`
- `src/app/blog/[id]/page.tsx`
- `src/app/blog/_partials/*`

CMS fields:

- `title`
- `slug`
- `excerpt`
- `content`
- `author`
- `authorBio`
- `date`
- `readTime`
- `category`
- `tags`
- `featured`
- `coverImage`
- `authorImage`
- `seoTitle`
- `seoDescription`
- `publishedAt`
- `status`

Tasks:

- Create the blog post collection schema.
- Add draft/publish support.
- Seed or manually migrate existing blog posts.
- Update `/blog` to read posts from Payload.
- Update `/blog/[slug]` to read one post from Payload.
- Add metadata generation from CMS SEO fields.
- Keep fallback behavior for missing posts.
- Limit CMS media uploads to blog images only.

Expected output:

- Marketing can create, edit, draft, publish, and update blog content.
- Blog images can be managed through the CMS if storage is configured.
- Non-blog pages remain unchanged.

## Phase 3: Global SEO and Site Settings

Purpose: give SEO control over cross-site metadata without touching page layouts.

CMS globals:

- Site settings
- Default SEO
- Social links
- Contact details
- Footer content

Tasks:

- Add `siteSettings` global.
- Add reusable SEO field group.
- Wire default metadata in `src/app/layout.tsx`.
- Add footer/contact content where appropriate.

Expected output:

- SEO team can manage default titles, descriptions, OG defaults, and common business information.

## Phase 4: Homepage Content

Purpose: make high-impact homepage copy editable while preserving the designed layout.

Candidate sections:

- Hero copy and CTA text
- Solutions section copy
- Featured works text
- Industry expertise text
- Partnerships text
- FAQ content
- Blog references from CMS

Tasks:

- Create `homePage` global or singleton page collection.
- Add structured section fields.
- Replace hardcoded copy section by section.
- Keep homepage images repo-controlled unless explicitly approved.

Expected output:

- Marketing can update homepage copy and SEO.
- Engineering keeps layout and visual assets stable.

## Phase 5: Service Pages

Purpose: migrate service-related content as a group because these pages share patterns.

Pages:

- `/services`
- `/services/custom-website-design`
- `/services/automotive-web-design`

Tasks:

- Add service page schema.
- Add reusable fields for:
  - hero copy
  - service highlights
  - process steps
  - FAQs
  - CTAs
  - SEO metadata
- Migrate one service page first, then repeat for the rest.
- Keep service page assets repo-controlled.

Expected output:

- Marketing can update service page copy, FAQs, and SEO.
- Service page layouts remain component-driven.

## Phase 6: Company and Industry Pages

Purpose: group lower-change informational pages with similar structured content needs.

Pages:

- `/about`
- `/industries`
- `/career`

Tasks:

- Add schemas for company profile content.
- Add schemas for industries and industry cards.
- Add career content and optional job listings.
- Add SEO metadata fields.
- Keep core page assets repo-controlled.

Expected output:

- Marketing can update company, industry, and hiring content.
- Job listings can be managed without code changes if needed.

## Phase 7: Schedule and Conversion Content

Purpose: let marketing adjust conversion copy without risking form behavior.

Pages:

- `/schedule`

Tasks:

- Add editable copy for schedule page hero, FAQs, contact details, and CTAs.
- Keep form schema, validation, and submission logic in code.
- Add SEO metadata fields.

Expected output:

- Marketing can tune conversion content.
- Engineering keeps form behavior and data handling stable.

## Phase 8: Asset Expansion Review

Purpose: decide whether CMS asset control should expand beyond blog media.

Review questions:

- Is Vercel Blob usage staying within free-tier limits?
- Are critical site assets safe from storage cap issues?
- Does marketing need image control for service/homepage pages?
- Is there budget for durable media storage if traffic grows?

Possible outcomes:

- Keep CMS assets limited to blog.
- Allow CMS uploads for selected non-critical sections.
- Move to a paid object storage plan.
- Keep all non-blog assets repo-controlled.

## Guardrails

- Do not make every page a freeform rich text blob.
- Prefer structured fields that map to existing components.
- Keep images for core company pages in the repo until there is a paid or reliable storage plan.
- Do not let CMS content break layout on mobile.
- Add validation for required SEO fields on publish.
- Use drafts for marketing review before publishing.
- Keep rollback options for each phase.

## Open Questions

- Who will own the first admin account?
- Should blog URLs change from `/blog/[id]` to `/blog/[slug]`?
- Will Vercel Blob be enabled immediately or deferred?
- Should existing blog posts be seeded automatically or entered manually by marketing?
- Which page should be migrated after the blog: homepage or services?
