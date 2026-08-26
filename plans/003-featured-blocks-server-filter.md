# Plan 003: Pass only featured blocks into the `/blocks` catalog client

> **Executor instructions**: Follow this plan step by step. Run every
> verification command and confirm the expected result before moving to the
> next step. If anything in the "STOP conditions" section occurs, stop and
> report — do not improvise. When done, update the status row for this plan
> in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 1261047 -- app/(app)/blocks/page.tsx app/(app)/blocks/_components/blocks-browser.tsx`
> If those files no longer match "Current state", STOP.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: perf
- **Planned at**: commit `1261047`, 2026-08-24

## Why this matters

`app/(app)/blocks/page.tsx` loads **all** `getPublishedBlocks()` (each file includes Shiki `highlightedContent`) and passes the full list into client `BlocksBrowser` with `featuredOnly`. Filtering happens in the browser (`blocks-browser.tsx`). PRODUCT.md asks to load expensive previews only when needed. Today both published blocks (`login-01`, `dashboard-01`) are `meta.featured: true`, so payload is unchanged until a non-featured block is added — this plan is the guard so that future catalog growth does not hydrate unused highlight HTML on `/blocks`.

**Behavior note (intentional):** after this change, search on `/blocks` only searches the featured set. Full search remains on `/blocks/[category]`, which already filters by category on the server. Do not load all blocks “for search” on the featured page.

## Current state

`app/(app)/blocks/page.tsx`:

```tsx
const blocks = await getPublishedBlocks();
const browserBlocks = blocks.map((block) => ({
  block,
  tree: createBlockFileTree(block.files),
}));
// ...
<BlocksBrowser blocks={browserBlocks} featuredOnly />
```

`app/(app)/blocks/_components/blocks-browser.tsx` — `featuredOnly` filter:

```tsx
if (!(query || !featuredOnly || block.meta.featured)) {
  return false;
}
```

`app/(app)/blocks/[category]/page.tsx` already filters by `block.category` on the server. Do not change that file.

`registry/react/blocks/authentication/_registry.ts` and `dashboard/_registry.ts` set `meta.featured: true`.

Conventions: Server Components stay async; keep `dynamic = "force-static"` and `revalidate = false`. Keep `Suspense` + `Skeleton` around `BlocksBrowser`.

## Commands you will need

| Purpose | Command | Expected on success |
|---------|---------|---------------------|
| Confirm filter | `rg 'meta.featured' 'app/(app)/blocks/page.tsx'` | match |
| Lint | `pnpm lint:check` | no new issues in touched files |

## Scope

**In scope**:
- `app/(app)/blocks/page.tsx`
- `app/(app)/blocks/_components/blocks-browser.tsx` (only if `featuredOnly` becomes unused and should be removed)

**Out of scope**:
- `lib/blocks.ts` (do not skip highlighting inside `getPublishedBlocks` here — that is a larger split)
- `scripts/build-registry.mts` highlight skip (deferred)
- category page, `BlockViewer` lazy iframe (already exists)
- Home/themes demo deferral

## Git workflow

- Stay on `main`. Do not branch, stash, switch, commit, or push unless asked.

## Steps

### Step 1: Filter featured before mapping trees

In `app/(app)/blocks/page.tsx`, after `getPublishedBlocks()`, keep only `block.meta.featured`. Then map `createBlockFileTree` as today.

You may leave `featuredOnly` on `BlocksBrowser` as a second filter, **or** remove the `featuredOnly` prop and its filter in `blocks-browser.tsx` because the server already narrowed the list. Prefer **removing** `featuredOnly` from the featured page **and** from `BlocksBrowser` if nothing else passes it (grep first). If something else passes `featuredOnly`, keep the prop.

**Verify**:
- `rg 'featuredOnly' app/(app)/blocks` — either unused everywhere, or still defined and used
- `rg 'meta.featured' 'app/(app)/blocks/page.tsx'` → match
- Category page still has `.filter((block) => block.category === category.slug)`

## Test plan

No test runner. Grep + manual reasoning: featured page props are a subset. Do not add tests in this plan.

## Done criteria

- [ ] `/blocks` page filters `meta.featured` on the server before passing props
- [ ] No orphan `featuredOnly` API (used or deleted, not half-dead)
- [ ] Category page still receives category-filtered full payloads
- [ ] `plans/README.md` row 003 is DONE

## STOP conditions

- `meta.featured` is missing from the `PublishedBlock` type (it exists on definitions today).
- Removing `featuredOnly` would require editing files outside `app/(app)/blocks/**`.

## Maintenance notes

- When adding a non-featured block, it must **not** appear on `/blocks` until `meta.featured` is true; it should appear on `/blocks/<category>`.
- Reviewer: confirm we did not strip highlights from category pages.
