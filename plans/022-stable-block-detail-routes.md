# Plan 022: Give every published block a stable, indexable detail URL

> **Executor instructions**: Execute in order, run each permitted verification, and update plan 022 in `plans/README.md`. Do not invent Ark/Shark APIs.
>
> **Drift check (run first)**: `git diff --stat 1261047..HEAD -- 'app/(app)/blocks' components/registry-compositions/composition-viewer.tsx lib/blocks.ts app/sitemap.ts registry/react/blocks`

## Status

- **Priority**: P2
- **Effort**: M
- **Risk**: MED
- **Depends on**: plans 017 and 019
- **Category**: SEO / routing
- **Planned at**: commit `1261047`, 2026-08-26

## Why this matters

Individual blocks are currently selected with `/blocks/<category>?block=<name>`. Query-state URLs are weak landing pages: navigation, metadata, sitemap discovery, sharing, and canonical ownership all stop at the category. A static detail route gives each published composition a durable URL with its own title, description, install command, and internal links.

## Current state

- `app/(app)/blocks/[category]/page.tsx` statically generates category routes and passes all published blocks to `BlocksBrowser`.
- `app/(app)/blocks/_components/blocks-browser.tsx:144-163` reads `useSearchParams()` and creates `?block=` links.
- `lib/blocks.ts` exposes published block definitions and file-tree helpers.
- `registry/react/blocks/_categories` defines valid category slugs.
- `components/registry-compositions/composition-viewer.tsx:190-207` renders an article/H2 but omits the description in compact mode.
- Static export is intentional. Use `generateStaticParams` and `dynamicParams = false`; do not add a server API or runtime database.

## Scope

**In scope**:

- `app/(app)/blocks/[category]/[block]/page.tsx` (create)
- `app/(app)/blocks/[category]/page.tsx`
- `app/(app)/blocks/_components/blocks-browser.tsx`
- a small shared block-page helper/component under `app/(app)/blocks/_components` if needed
- `components/registry-compositions/composition-viewer.tsx` only to expose an existing description on canonical detail pages
- `app/sitemap.ts`
- `lib/blocks.ts` only for a pure lookup/parameter helper
- `plans/README.md`

**Out of scope**: `/view` preview implementation, registry JSON shape, block content/design, redirects requiring a server, and Templates routes.

## Git workflow

Use the current branch and dirty working tree. Do not stash, switch branches, commit, push, or open a PR unless asked.

## Steps

### Step 1: Define canonical route ownership

Create `/blocks/[category]/[block]`. Generate params only for published blocks, validate that the block belongs to the category, set `dynamicParams = false`, and call `notFound()` for invalid pairs. Use existing block lookup helpers; add one small pure helper to `lib/blocks.ts` only if current APIs cannot express this without duplicate filtering.

**Verify**: a read-only script compares generated `(category, block)` pairs to published definitions; counts and values match exactly, with no drafts.

### Step 2: Add unique metadata and visible context

`generateMetadata` must use `createMetadata` from plan 017 with canonical `/blocks/${category}/${block}` and the block’s factual title/description. The rendered page must have one H1 (the block title), a visible description, install command, Preview/Code surface, and links back to its category/other blocks. Do not rely on an `sr-only` H1 whose visible context is missing.

**Verify**: `rg -n "createMetadata|generateStaticParams|dynamicParams|<h1|description" 'app/(app)/blocks/[category]/[block]/page.tsx'` → all route contracts match.

### Step 3: Replace internal query links

Update `BlocksBrowser` links to `/blocks/${category}/${block}`. The category page may select the first published block as a catalog overview, but its canonical must remain the category URL. Remove `useSearchParams` when it is no longer needed and do not add client redirects for old query URLs under static export. Existing external `?block=` bookmarks may continue showing the category default; document this limitation.

**Verify**: `rg -n '\?block=|useSearchParams' 'app/(app)/blocks'` → no matches.

### Step 4: Add detail routes to the sitemap

Extend the deterministic sitemap from plan 019 with every published detail URL exactly once. Do not include `/view` URLs or fabricated `lastModified` values.

**Verify**: sitemap uniqueness/exclusion check from plan 019 still passes and its detail count equals the published block count.

### Step 5: Lint and gated runtime checks

Run scoped ultracite on changed TS/TSX files. Ask before `pnpm typecheck` or browser verification. With browser permission, verify one route per category, direct load, navigation, canonical/link metadata in the DOM, and invalid block 404 behavior.

## Commands you will need

| Purpose | Command | Expected on success |
|---|---|---|
| Remove query navigation | `rg -n '\?block=|useSearchParams' 'app/(app)/blocks'` | no matches |
| Forbidden sitemap routes | `rg -n '/view|new Date' app/sitemap.ts` | no matches |
| Scoped lint | `pnpm exec ultracite check 'app/(app)/blocks' components/registry-compositions/composition-viewer.tsx lib/blocks.ts app/sitemap.ts` | exit 0 |

## Test plan

- Read-only route-contract script: every published block maps to one unique detail param and sitemap URL; drafts map to none.
- With explicit typecheck permission: `pnpm typecheck` exits 0 and static params compile against the generated route types.
- With explicit browser permission: direct-load one detail per category, navigate between blocks, and verify an invalid slug resolves to the static 404.

## Done criteria

- [ ] Every published block has exactly one static detail route and sitemap URL.
- [ ] Detail metadata/title/description are block-specific.
- [ ] All internal selection links use path URLs, not `?block=`.
- [ ] Category pages retain their own canonical identity.
- [ ] Invalid/draft combinations are not generated.
- [ ] Scoped lint passes; gated runtime checks are reported honestly.
- [ ] README row updated.

## STOP conditions

- Published block definitions do not provide stable unique names.
- More than one category claims the same `(category, block)` URL.
- The implementation would require enabling dynamic server rendering or changing `/view` indexing.
- Browser/typecheck is needed but not authorized.

## Maintenance notes

Block names become public URL identifiers after this ships. Future renames need an explicit migration/redirect strategy; static export cannot silently preserve arbitrary legacy query URLs.
