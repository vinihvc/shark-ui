# Plan 017: Give every public route intentional metadata and sharpen the homepage promise

> **Executor instructions**: Follow this plan step by step. Run every permitted verification and confirm the expected result. If a STOP condition occurs, stop and report. When done, update plan 017 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 1261047..HEAD -- app/layout.tsx lib/metadata.ts 'app/(app)/(home)' 'app/(app)/blocks/layout.tsx' 'app/(app)/blocks/[category]/page.tsx' 'app/(app)/~offline/page.tsx' config/site.ts package.json`
> This plan was written against a dirty working tree. Also inspect `git diff -- <in-scope paths>` and compare the live symbols below; preserve unrelated edits.

## Status

- **Priority**: P1
- **Effort**: M
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug / SEO
- **Planned at**: commit `1261047`, 2026-08-26

## Why this matters

The root layout currently declares canonical `/` plus homepage Open Graph data. Routes that only export `title` and `description`, notably `/blocks` and `/blocks/[category]`, inherit signals that identify them as the homepage. The homepage itself says little about React, Ark UI, or the shadcn-style distribution model. This plan makes metadata complete and route-specific, improves the main search snippet and H1, and prevents the service-worker fallback from entering search results.

## Current state

- `app/layout.tsx:15-67` owns global metadata and currently includes `alternates.canonical: /`, `openGraph.url: /`, and homepage OG title/description.
- `lib/metadata.ts:12-35` already creates a canonical, OG, and Twitter block, but omits OG `siteName`, `locale`, image dimensions, and image alt text.
- `app/(app)/(home)/page.tsx` has no route metadata export.
- `app/(app)/(home)/_components/hero.tsx` contains the visible H1; its copy does not clearly state “React components built on Ark UI” or the shadcn-style install model.
- `app/(app)/blocks/layout.tsx:19-23` and `app/(app)/blocks/[category]/page.tsx:16-28` export only title/description.
- `app/(app)/~offline/page.tsx` has no metadata. `app/sw.ts` uses `/~offline` as a navigation fallback, so it must be `noindex`.
- `config/site.ts` is the shared brand/config source. Keep product claims factual and consistent with it.
- `AGENTS.md` §15 forbids browser use, `pnpm test`, and `pnpm typecheck` until the operator explicitly authorizes each action. `pnpm lint:check` is allowed.

## Commands you will need

| Purpose | Command | Expected on success |
|---|---|---|
| Inspect route metadata | `rg -n "canonical|openGraph|twitter|robots|createMetadata" app lib/metadata.ts` | every public route in scope has an intentional owner |
| Scoped lint | `pnpm exec ultracite check app/layout.tsx lib/metadata.ts 'app/(app)/(home)' 'app/(app)/blocks/layout.tsx' 'app/(app)/blocks/[category]/page.tsx' 'app/(app)/~offline/page.tsx' config/site.ts` | exit 0 |

Do not run a browser, `pnpm test`, or `pnpm typecheck` unless the operator explicitly grants permission in the task that executes this plan.

## Scope

**In scope**:

- `app/layout.tsx`
- `lib/metadata.ts`
- `lib/metadata.test.ts` (create if tests are authorized)
- `app/(app)/(home)/page.tsx`
- `app/(app)/(home)/_components/hero.tsx`
- `app/(app)/blocks/layout.tsx`
- `app/(app)/blocks/[category]/page.tsx`
- `app/(app)/~offline/page.tsx`
- `config/site.ts` only if the shared description must change
- `package.json` only to register a new test file
- `plans/README.md`

**Out of scope**: JSON-LD (plan 026), block detail routes (plan 022), visual redesign, dynamic OG generation, and changing the PWA fallback route.

## Git workflow

Use the current branch and working tree. Do not stash, switch branches, commit, push, or open a PR unless asked.

## Steps

### Step 1: Separate global metadata from homepage metadata

Keep `metadataBase`, icons, manifest, creator, keywords, RSS alternate, and the title template in `app/layout.tsx`. Remove only route-specific homepage fields that leak through inheritance: the root canonical and root `openGraph.url`/homepage-specific OG and Twitter title/description. Export homepage metadata from `app/(app)/(home)/page.tsx` with `createMetadata({ title, description, url: "/" })`.

**Verify**: `rg -n "canonical: absoluteUrl\(\"/\"\)|url: absoluteUrl\(\"/\"\)" app/layout.tsx` → no matches; `rg -n "createMetadata|url: \"/\"" 'app/(app)/(home)/page.tsx'` → both match.

### Step 2: Complete the shared social metadata helper

In `lib/metadata.ts`, have `createMetadata` emit the same stable social fields as the old root metadata: OG `siteName`, `locale: "en_US"`, and an image object with URL, `1200x630`, and meaningful alt text; Twitter remains `summary_large_image` and uses the same image. Add an optional `imageAlt` prop defaulting to a title-derived Shark UI label. Do not introduce mutable dates or environment-dependent metadata.

**Verify**: `rg -n "siteName|locale|height: 630|width: 1200|imageAlt" lib/metadata.ts` → all five concepts match.

### Step 3: Give blocks and offline routes explicit intent

- Change `/blocks` metadata to `createMetadata` with canonical `/blocks`.
- Change each valid category to `createMetadata` with canonical `/blocks/${category.slug}`; invalid categories may still return `{}` and then `notFound()`.
- Export metadata on `/~offline` with a descriptive title and `robots: { index: false, follow: false }`. Do not include it in the sitemap and do not block it in `robots.txt`—crawlers must be able to read the `noindex` directive.

**Verify**: `rg -n "url: .*/blocks|robots" 'app/(app)/blocks' 'app/(app)/~offline/page.tsx'` → route URLs and offline robots directive match.

### Step 4: Make the homepage proposition search-readable

Update the homepage metadata, visible H1, and supporting sentence so a first-time reader can immediately understand: Shark UI offers open-source, shadcn-style React components built on Ark UI and installed into the consumer’s codebase. Keep the tone concise, do not keyword-stuff, and preserve the existing CTA/layout. Use one primary H1.

**Verify**: `rg -ni "React|Ark UI|shadcn" 'app/(app)/(home)/page.tsx' 'app/(app)/(home)/_components/hero.tsx'` → all three concepts appear naturally across metadata and visible copy.

### Step 5: Add deterministic helper tests if authorized

If the operator explicitly authorizes `pnpm test`, create `lib/metadata.test.ts` using the `node:test` + `node:assert/strict` style in `lib/url.test.ts`. Cover canonical URL, OG site/locale/image dimensions/alt, Twitter image, and a custom image/alt. Add the file to the explicit `package.json` test list.

If tests are not authorized, do not create a test that cannot be run; record “automated test deferred by AGENTS.md §15” in the status note and rely on scoped lint/static inspection.

## Test plan

- Required now: scoped ultracite command exits 0 and all `rg` checks match the expected ownership.
- With explicit permission: `pnpm test` exits 0 including `lib/metadata.test.ts`.
- Browser inspection is optional and separately gated by explicit permission.

## Done criteria

- [ ] Root metadata no longer makes child routes canonical to `/`.
- [ ] Homepage, `/blocks`, and block categories have their own canonical, OG, and Twitter metadata.
- [ ] Social images include URL, alt, width, and height.
- [ ] Homepage H1/supporting copy describes React + Ark UI + shadcn-style distribution.
- [ ] `/~offline` is `noindex, nofollow` and remains absent from the sitemap.
- [ ] Scoped lint exits 0; gated checks are either authorized and passing or explicitly recorded as deferred.
- [ ] No out-of-scope source files changed; README row is updated.

## STOP conditions

- The live root metadata has already been reorganized and no longer leaks route-specific fields.
- The copy change would require a new product claim not supported by repository docs.
- A test or browser check is needed but permission was not granted—do not bypass the gate.
- An in-scope file contains overlapping user edits that cannot be preserved confidently.

## Maintenance notes

All new public routes should use `createMetadata`; global layout metadata should remain global only. Plan 026 builds structured data on top of this stable ownership.
