# Plan 019: Make the sitemap deterministic, unique, and limited to canonical pages

> **Executor instructions**: Follow this plan exactly and update plan 019 in `plans/README.md` when done.
>
> **Drift check (run first)**: `git diff --stat 1261047..HEAD -- app/sitemap.ts lib/sitemap.test.ts package.json`
> This is a fresh audit of the current dirty worktree. Plan 002 is historical and DONE; do not assume its older sitemap snapshot still applies.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: plan 018
- **Category**: bug / SEO / tests
- **Planned at**: commit `1261047`, 2026-08-26

## Why this matters

`app/sitemap.ts` stamps every generated docs/category URL with `new Date()` on every build and includes `/docs/changelog` both manually and through the docs source. That creates false freshness and duplicate sitemap entries, wasting crawl attention and making change signals untrustworthy.

## Current state

At `app/sitemap.ts:10-39`:

- `staticRoutes` manually includes `/docs/changelog`.
- `source.getPages()` also includes the changelog index.
- block categories and all docs use `lastModified: new Date()`.
- `/view`, `/~offline`, and private underscore routes are not intended sitemap entries.

`absoluteUrl()` is the existing production URL helper. AGENTS.md §15 gates tests/typecheck/browser.

## Scope

**In scope**: `app/sitemap.ts`, `lib/sitemap.test.ts` if tests are authorized, `package.json` test registration, `plans/README.md`.

**Out of scope**: per-block URLs until plan 022, Templates until plan 024, invented modification timestamps, robots policy, and content frontmatter.

## Git workflow

Use the current branch and dirty working tree. Do not stash, switch branches, commit, push, or open a PR unless asked.

## Steps

### Step 1: Remove duplicate ownership and false dates

Choose one owner for `/docs/changelog`; prefer `source.getPages()` and remove the manual static entry. Remove every build-time `new Date()` from the sitemap. Omit `lastModified` when no real source date exists rather than manufacturing one. Preserve sensible priority/change-frequency values.

**Verify**: `rg -n "new Date|docs/changelog" app/sitemap.ts` → no `new Date`; changelog is not manually hard-coded.

### Step 2: Enforce uniqueness and exclusions

Before returning, deduplicate by final absolute URL or structure the producers so duplication is impossible. The output must include `/`, `/blocks`, `/themes`, each published block category, and every public docs source page exactly once. It must exclude `/view`, `/~offline`, `/api`, and underscore-private routes.

**Verify**: a read-only Node script importing or reproducing the route list reports `total === new Set(urls).size` and zero forbidden prefixes.

### Step 3: Add a sitemap contract test if authorized

With explicit `pnpm test` permission, create `lib/sitemap.test.ts`, model it after `lib/url.test.ts`, and register it in `package.json`. Assert unique absolute URLs, zero false “now” timestamps, required routes present, forbidden routes absent, and stable output across two immediate calls.

Without permission, do not add an unrun test; record the gate as deferred.

## Commands you will need

| Purpose | Command | Expected on success |
|---|---|---|
| Static regression | `rg -n 'new Date|/view|~offline' app/sitemap.ts` | no matches |
| Scoped lint | `pnpm exec ultracite check app/sitemap.ts lib/sitemap.test.ts` | exit 0 (omit missing test path) |
| Gated tests | `pnpm test` | exit 0 when explicitly authorized |

## Test plan

- With explicit test permission, add the contract cases named in Step 3 and run the full explicit `pnpm test` script.
- Without permission, run the static uniqueness/exclusion script twice and save its counts in the handoff; do not claim automated coverage.
- No browser is necessary for this plan.

## Done criteria

- [ ] No duplicate URL is returned.
- [ ] No generated-at-build `lastModified` value remains.
- [ ] Only canonical public routes are present.
- [ ] Contract test passes if authorized; otherwise deferral is recorded.
- [ ] No out-of-scope files changed; README row updated.

## STOP conditions

- `source.getPages()` no longer contains the changelog index; in that case keep one explicit entry and document why.
- A real modification date would require Git history or filesystem mtime—omit it; do not invent a fragile dependency.
- Tests require permission that has not been given.

## Maintenance notes

Plan 022 should extend this sitemap with canonical per-block routes. Plan 024 should add `/templates` only after the catalog release gate passes.
