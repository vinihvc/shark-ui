# Plan 009: Remove dead private catalog trees and unused shims

> **Executor instructions**: Follow this plan step by step. Run every
> verification command and confirm the expected result before moving to the
> next step. If anything in the "STOP conditions" section occurs, stop and
> report — do not improvise. When done, update the status row for this plan
> in `plans/README.md` — unless a reviewer dispatched you and told you they
> maintain the index.
>
> **Drift check (run first)**: `git diff --stat 1261047..HEAD -- 'app/(app)/_blocks' 'app/(app)/_templates' 'app/(app)/templates' components/layout/footer.tsx components/layout/blocks-sidebar.tsx lib/registry.ts lib/block-preview-theme.ts components/blocks/block-preview-theme-sync.tsx components/examples package.json`
> Public `app/(app)/templates/` may have grown vs this plan's original SHA — that is expected. Do **not** treat that as a reason to keep `_templates`. STOP only if `_blocks`/`_templates` themselves were already deleted or became the live routes.
> If any in-scope file changed since this plan was written, compare the
> "Current state" excerpts against the live code before proceeding; on a
> mismatch, treat it as a STOP condition.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: tech-debt
- **Planned at**: commit `1261047`, 2026-08-24
- **Re-vetted**: 2026-08-24 (public `/templates` shipped; finding still holds)

## Why this matters

This finding was re-checked after Templates shipped as a public route. The **public** catalog is `app/(app)/templates/page.tsx` (`getPublishedTemplates`, CompositionViewer, nav + sitemap). The **private** `app/(app)/_templates/` tree still does not route (`_` prefix) and still renders `MOCK_TEMPLATES` with URLs like `/templates/auth` that are not the live page. `_blocks/` is still a stub (`"all blocks"`). The cost is now higher: two complete-looking Templates UIs, only one of which is live.

`getAllRegistryItems` remains used only by dead `_blocks`. Unused preview-theme shims, unused marketing examples, `rimraf`, and `@tanstack/zod-form-adapter` are unchanged.

Plan 004 deferred footer Templates until the route shipped. Nav and sitemap already include `/templates`; `PROJECTS_LINKS` in `components/layout/footer.tsx` still lists Blocks only.

## Current state

Delete these trees/files (private, not routed):

- `app/(app)/_blocks/layout.tsx` — imports `BlocksSidebar`, `getAllRegistryItems`
- `app/(app)/_blocks/page.tsx` — stub `"all blocks"` (metadata url `/blocks` would be wrong even if routed)
- `app/(app)/_blocks/_[category]/_page.tsx`
- `app/(app)/_blocks/_components/block-card.tsx`
- `app/(app)/_templates/page.tsx` — mock grid
- `app/(app)/_templates/_data/mock-templates.ts`
- `app/(app)/_templates/_components/hero.tsx`
- `app/(app)/_templates/_components/template-card.tsx`

Keep **public** `app/(app)/blocks/**` and `app/(app)/templates/page.tsx` (the latter is a full marketing + CompositionViewer page — do not revert it to mocks). Keep `config/navigation.ts` Templates item and `app/sitemap.ts` `/templates` + `/view/templates/...` entries.

Then delete, after confirming no remaining imports:

- `components/layout/blocks-sidebar.tsx` — only imported by `_blocks/layout.tsx`
- `lib/block-preview-theme.ts` — re-exports `lib/preview-theme.ts` as `BlockPreview*` aliases; no production importers
- `components/blocks/block-preview-theme-sync.tsx` — re-exports `PreviewThemeSync as BlockPreviewThemeSync`; no production importers
- `getAllRegistryItems` in `lib/registry.ts` (lines ~145–174) **only after** `_blocks` is gone. Keep `getRegistryItem` (used by `app/view/[type]/[category]/[file]/page.tsx`).

Unused marketing examples (no `@/components/examples/<name>` imports in `app/` or `content/`):

- `components/examples/share-card-example.tsx`
- `components/examples/input-group-example.tsx`
- `components/examples/input-group-button-example.tsx`

Do **not** delete examples imported from `app/(app)/(home)/_components/components-examples.tsx`, `app/(app)/themes/_components/**`, or `content/docs/(root)/rtl.mdx`.

Dependencies with zero references: `rimraf` (devDependency), `@tanstack/zod-form-adapter` (dependency). TanStack form examples use `zod` + `useForm` directly (`registry/react/examples/form/tanstack/`). Remove via `pnpm remove rimraf @tanstack/zod-form-adapter` (lockfile update is in scope).

**Do not** merge `lib/blocks.ts` / `lib/templates.ts` or flatten `/view` loaders in this plan.

Conventions: AGENTS.md — do not delete unrelated dead code you notice in `registry/`. PRODUCT.md — Templates is a real public route; removing `_templates` mocks is correct, not “unshipping Templates”.

## Commands you will need

| Purpose | Command | Expected on success |
|---------|---------|---------------------|
| Ripgrep leftovers | `rg 'getAllRegistryItems|BlocksSidebar|MOCK_TEMPLATES|block-preview-theme|BlockPreviewTheme' --glob '!plans/**'` | no matches in app/components/lib |
| Unused examples | `rg 'share-card-example|input-group-example|input-group-button-example'` | no matches except maybe this plan |
| Lint | `pnpm lint:check` | exit 0 |
| Typecheck | `pnpm typecheck` | exit 0 (`next build` — slow; required because deleting pages/types) |

## Scope

**In scope**:
- All files listed above for deletion
- `lib/registry.ts` (remove `getAllRegistryItems` only)
- `package.json` + `pnpm-lock.yaml` via `pnpm remove`
- Empty dirs left behind (`app/(app)/_blocks`, `_templates`, `components/blocks` if empty)
- `components/layout/footer.tsx` — add Templates `{ href: "/templates", label: "Templates" }` to `PROJECTS_LINKS` (plan 004 leftover)

**Out of scope**:
- `app/(app)/templates/page.tsx`, `app/(app)/blocks/**`, `config/navigation.ts`, `app/sitemap.ts`, `app/view/**`
- Unifying `getRegistryItem` with composition `preview()` in `/view`
- Renaming `BlockDefinition` type aliases
- Shipping more templates/blocks
- `public/r`
- `pnpm typecheck` script rename (plan 010)

## Git workflow

Work on the **current branch**. Do not create a new branch, stash, or switch. Touch only in-scope paths. Do not commit unless the operator asks.

## Steps

### Step 1: Delete private route trees

Delete the `_blocks` and `_templates` files listed in Current state. Remove empty directories.

**Verify**: `ls 'app/(app)/_blocks' 'app/(app)/_templates'` → no such directories. `ls 'app/(app)/blocks/page.tsx' 'app/(app)/templates/page.tsx'` → both exist.

### Step 2: Delete exclusive consumers and `getAllRegistryItems`

Delete `components/layout/blocks-sidebar.tsx`, `lib/block-preview-theme.ts`, `components/blocks/block-preview-theme-sync.tsx`. Remove `getAllRegistryItems` from `lib/registry.ts`. If `RegistryListItem` becomes unused except by `getRegistryItem`, keep the types `getRegistryItem` needs.

**Verify**: `rg 'getAllRegistryItems' lib app components` → no matches. `rg 'getRegistryItem' app/view` → still matches.

### Step 3: Delete unused examples

Delete the three example files. Re-run grep; if a dynamic import string appears, STOP (do not delete).

**Verify**: files gone; `rg 'share-card-example' app components content` → no matches.

### Step 4: Remove unused packages

From repo root: `pnpm remove rimraf @tanstack/zod-form-adapter`.

**Verify**: `rg 'rimraf|zod-form-adapter' package.json` → no matches. `rg 'zod-form-adapter' registry content` → no matches.

### Step 5: Footer Projects includes Templates

In `components/layout/footer.tsx`, `PROJECTS_LINKS` is currently:

```ts
const PROJECTS_LINKS = [{ href: "/blocks", label: "Blocks" }] as const;
```

Add Templates after Blocks: `{ href: "/templates", label: "Templates" }`. Do not add mock `/templates/auth` URLs.

**Verify**: `rg 'href: "/templates"' components/layout/footer.tsx` → match.

### Step 6: Lint and typecheck

**Verify**: `pnpm lint:check` → exit 0. `pnpm typecheck` → exit 0.

## Test plan

No new tests. `pnpm typecheck` is the compile gate. If plan 006 added `pnpm test`, run it; it must still pass.

## Done criteria

- [ ] `_blocks` and `_templates` directories are gone; public `/blocks` and `/templates` pages remain
- [ ] Footer Projects lists Blocks and Templates (`/templates`)
- [ ] `getAllRegistryItems` is deleted; `getRegistryItem` remains
- [ ] Unused shims and three example files are gone
- [ ] `rimraf` and `@tanstack/zod-form-adapter` are removed from the manifest/lockfile
- [ ] `pnpm typecheck` exits 0
- [ ] No files outside the in-scope list are modified
- [ ] `plans/README.md` status row 009 updated

## STOP conditions

- Anything under `app/(app)/blocks/` or `app/(app)/templates/page.tsx` (the **public** ones) is imported from `_blocks` / `_templates` — do not delete the public trees; report.
- You are tempted to “replace” public `/templates` with the mock grid — STOP. The mock tree is the one to delete.
- `getAllRegistryItems` is imported from `app/sitemap.ts`, `app/view/`, or `scripts/` — do not delete the function; report. Sitemap currently uses `TEMPLATES` from `_registry`, not `getAllRegistryItems`.
- `pnpm remove` wants to remove a package that `registry/react/examples/form/tanstack` actually imports — STOP.
- `components/blocks/` contains files other than `block-preview-theme-sync.tsx` — delete only the shim; keep other files.

## Maintenance notes

- Next Templates UX work must edit `app/(app)/templates/`, not recreate `_templates` mocks.
- Reviewer: confirm footer and header both point at real `/templates`.
