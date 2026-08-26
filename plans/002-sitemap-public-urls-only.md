# Plan 002: Sitemap only public, indexable routes

> **Executor instructions**: Follow this plan step by step. Run every
> verification command and confirm the expected result before moving to the
> next step. If anything in the "STOP conditions" section occurs, stop and
> report — do not improvise. When done, update the status row for this plan
> in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 1261047 -- app/sitemap.ts app/view/[type]/[category]/[file]/page.tsx`
> If `app/sitemap.ts` no longer matches "Current state", STOP.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none (run after 001 if you will also rebuild registry in the same session)
- **Category**: bug
- **Planned at**: commit `1261047`, 2026-08-24

## Why this matters

`app/sitemap.ts` emits `/templates` and every `MOCK_TEMPLATES[].previewUrl` (e.g. `/templates/auth`). The templates catalog lives in `app/(app)/_templates/`, a Next.js private folder, so those URLs 404. Header Templates nav is already commented out in `config/navigation.ts`. The same sitemap also lists `/view/blocks/...` preview iframes whose `generateMetadata` sets `robots: { index: false, follow: false }`. Crawlers get 404s and mixed robots signals. After this plan, the sitemap lists only real public pages (home, docs, changelog, blocks + categories, themes).

## Current state

`app/sitemap.ts` (excerpt):

- Lines 20–24: `absoluteUrl("/templates")` in `staticRoutes`
- Lines 29–36: `templateDemos` from `MOCK_TEMPLATES` `previewUrl`
- Lines 38–48: `blockDemos` from filesystem `getAllRegistryItems({ folderType: "blocks" })` → `/view/blocks/...`
- Lines 50–55: `blockCategories` → `/blocks/${slug}` (KEEP)
- Lines 57–62: `publishedBlockDemos` from `BLOCKS` → `/view/blocks/...`
- Line 25: `/blocks` (KEEP)
- Lines 64–68: doc pages (KEEP)

`app/view/[type]/[category]/[file]/page.tsx:55-64` sets `robots: { follow: false, index: false }` for all preview pages. Do not change that file unless required; omit those URLs from the sitemap instead.

`config/navigation.ts` already comments out Templates. Do not uncomment it.

Do not rewrite `MOCK_TEMPLATES` in this plan (private page only). Do not rename `_templates`.

Conventions: keep `export const dynamic = "force-static"` and `revalidate = false`. Keep `as MetadataRoute.Sitemap` on the return. Unused imports must be removed (Ultracite will fail on them).

## Commands you will need

| Purpose | Command | Expected on success |
|---------|---------|---------------------|
| Lint sitemap | `pnpm lint:check` | exit 0 for `app/sitemap.ts` (repo may have other dirty-file lint) |
| No template routes | `rg '/templates' app/sitemap.ts` | no matches |
| No view routes | `rg '/view/' app/sitemap.ts` | no matches |

## Scope

**In scope**:
- `app/sitemap.ts`

**Out of scope**:
- `app/(app)/_templates/**`
- `app/view/**` metadata (leave `noindex`)
- `config/navigation.ts`
- Shipping a real templates catalog (direction, not this plan)
- `lib/url.ts` (plan 001)

## Git workflow

- Stay on `main`. Do not branch, stash, switch, commit, or push unless asked.

## Steps

### Step 1: Remove unpublished and noindex URLs

Edit `app/sitemap.ts`:

1. Remove `absoluteUrl("/templates")` from `staticRoutes`. Keep `/`, `/docs/changelog`, `/blocks`, `/themes`.
2. Delete `templateDemos` and the `MOCK_TEMPLATES` import.
3. Delete `blockDemos` / `getAllRegistryItems` usage and `publishedBlockDemos` / `BLOCKS` usage.
4. Keep `blockCategories` and `docPages`.
5. Return `[...staticRoutes, ...blockCategories, ...docPages]`.
6. Remove now-unused imports (`MOCK_TEMPLATES`, `getAllRegistryItems`, `BLOCKS`). Keep `BLOCK_CATEGORIES`, `source`, `absoluteUrl`.

**Verify**:
- `rg '/templates' app/sitemap.ts` → no matches
- `rg '/view/' app/sitemap.ts` → no matches
- `rg 'MOCK_TEMPLATES|getAllRegistryItems|BLOCKS' app/sitemap.ts` → no matches
- `rg 'blockCategories|source.getPages' app/sitemap.ts` → matches remain

## Test plan

No test runner. The `rg` gates above are the regression check. Do not add a sitemap unit test in this plan.

## Done criteria

- [ ] Sitemap has no `/templates` or `/view/` URLs
- [ ] Sitemap still includes `/blocks`, `/blocks/<category>`, `/themes`, and doc pages
- [ ] Unused imports removed
- [ ] `plans/README.md` row 002 is DONE

## STOP conditions

- `BLOCK_CATEGORIES` is empty or missing (then `/blocks/[category]` would 404 too — report).
- Fumadocs `source.getPages()` no longer exists or returns non-`/docs` URLs that 404 — report rather than filtering inventively.

## Maintenance notes

- When a public `/templates` route ships, add it back to `staticRoutes` and real item URLs (not mocks).
- `/view/*` should stay out of the sitemap while previews are `noindex`.
