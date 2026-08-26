# Plan 024: Publish the Templates catalog only after an explicit release-readiness gate

> **Executor instructions**: This is a gated product direction. Before editing source, obtain an explicit operator confirmation that Templates is ready to be public. If not confirmed, mark this plan BLOCKED with the reason and stop. Never infer readiness from the existence of code.
>
> **Drift check (run first)**: `git diff --stat 1261047..HEAD -- 'app/(app)/_templates' 'app/(app)/templates' config/navigation.ts components/layout/footer.tsx app/sitemap.ts lib/templates.ts`

## Status

- **Priority**: P2
- **Effort**: M
- **Risk**: MED
- **Depends on**: plans 017 and 019
- **Category**: direction / SEO
- **Planned at**: commit `1261047`, 2026-08-26

## Why this matters

The current worktree contains a developed Templates landing page under the private `_templates` segment. Because underscore-prefixed app folders are private, users and crawlers cannot reach it, while the content investment produces no acquisition surface. Publishing can create a valuable intent page—but only if the catalog is complete enough to support its promises.

## Current state

- `app/(app)/_templates/page.tsx` contains a substantial landing/catalog and metadata targeting `/templates`, but `_templates` does not create a route.
- `lib/templates.ts` exposes published templates.
- `config/navigation.ts`, `components/layout/footer.tsx`, and `app/sitemap.ts` currently omit Templates in this worktree snapshot.
- Earlier plan-index notes describing a shipped Templates page are historical and conflict with the current tree. Treat live code as authoritative.
- Static export is intentional; do not add a server-backed catalog.

## Release-readiness gate

Before Step 1, report these counts/facts to the operator:

- number of `getPublishedTemplates()` results;
- whether every published item has a stable slug, title, description, preview, and install/source action;
- whether all links and assets resolve statically;
- whether the page copy makes only supported promises.

Proceed only after an explicit “publish Templates”/equivalent confirmation. Otherwise update README status to `BLOCKED (awaiting Templates release approval)` and stop.

## Scope

**In scope**: move/rename `app/(app)/_templates` to `app/(app)/templates`, route-local helpers imported only by it, `config/navigation.ts`, `components/layout/footer.tsx`, `app/sitemap.ts`, `plans/README.md`.

**Out of scope**: inventing new templates, per-template detail routes, editing template implementations, changing registry JSON, and publishing draft/unreviewed entries.

## Git workflow

Use the current branch and dirty working tree. Do not stash, switch branches, commit, push, or open a PR unless asked. Moving `_templates` is permitted only after the release gate passes.

## Steps

### Step 1: Pass the product gate

Run the read-only readiness audit above and obtain explicit operator approval. Record any excluded drafts. Do not continue on ambiguous approval.

### Step 2: Expose the static route

Move the private route tree to `app/(app)/templates` without leaving duplicate implementations. Ensure the page uses `createMetadata` with canonical `/templates` and renders only `getPublishedTemplates()` results. Preserve current design and accessibility.

**Verify**: `test -f 'app/(app)/templates/page.tsx' && test ! -e 'app/(app)/_templates/page.tsx'` → exit 0; `rg -n 'url: "/templates"|getPublishedTemplates' 'app/(app)/templates'` → matches.

### Step 3: Add discoverability

Add Templates to the primary navigation in the same product grouping as Blocks, to Footer Projects, and to the deterministic sitemap exactly once. Do not add unpublished detail URLs.

**Verify**: `rg -n 'Templates|/templates' config/navigation.ts components/layout/footer.tsx app/sitemap.ts` → each surface has one intentional entry.

### Step 4: Lint and gated runtime verification

Run scoped ultracite. Ask before `pnpm typecheck` or browser use. With browser permission, direct-load `/templates`, verify mobile/desktop layout, every action, metadata/canonical, and that no draft appears.

## Commands you will need

| Purpose | Command | Expected on success |
|---|---|---|
| Private tree removed | `find 'app/(app)' -maxdepth 2 -type d -name '_templates'` | no output |
| Discovery | `rg -n '/templates' config/navigation.ts components/layout/footer.tsx app/sitemap.ts` | one route entry per surface |
| Scoped lint | `pnpm exec ultracite check 'app/(app)/templates' config/navigation.ts components/layout/footer.tsx app/sitemap.ts` | exit 0 |

## Test plan

- Before editing, enumerate published entries and required fields/assets; zero incomplete public entries.
- Static checks confirm one public route, one navigation/footer/sitemap entry, and no `_templates` duplicate.
- With explicit browser permission, direct-load and exercise every visible template action at mobile and desktop widths.
- With explicit typecheck permission, `pnpm typecheck` exits 0 after the route move.

## Done criteria

- [ ] Explicit release approval is recorded.
- [ ] `/templates` exists as a static public route; private duplicate is gone.
- [ ] Only published, complete items render.
- [ ] Canonical metadata, navigation, footer, and sitemap agree on `/templates`.
- [ ] Scoped lint passes; gated checks are accurately reported.
- [ ] README row updated.

## STOP conditions

- No explicit operator approval.
- Published set is empty or required assets/actions are incomplete.
- Moving the route collides with another live `/templates` implementation.
- Publishing requires fabricating content or touching template implementations.

## Maintenance notes

Do not let route folders be the publication flag alone. Continue filtering with the published-template source, and treat template slugs as public contracts if detail routes are added later.
