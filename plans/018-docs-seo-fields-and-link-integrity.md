# Plan 018: Add dedicated docs SEO fields and prevent broken internal links

> **Executor instructions**: Execute in order, honor every STOP condition, and update plan 018 in `plans/README.md` when complete.
>
> **Drift check (run first)**: `git diff --stat 1261047..HEAD -- source.config.ts 'app/(app)/docs/[[...slug]]/page.tsx' content/docs lib package.json`
> The working tree was dirty when planned. Inspect live diffs and preserve unrelated content edits.

## Status

- **Priority**: P1
- **Effort**: M
- **Risk**: LOW
- **Depends on**: plan 017
- **Category**: docs / SEO / tests
- **Planned at**: commit `1261047`, 2026-08-26

## Why this matters

Public MDX descriptions are usually too short to make useful search snippets, while visible one-line introductions are intentionally terse. In the audited tree, 148 descriptions were under 120 characters, 133 were under 70, and several pages reused indistinguishable copy. Separately, the Sidebar page links to `/docs/components/use-is-mobile`, but the real page is `/docs/hooks/use-is-mobile`. Dedicated SEO fields preserve concise UI copy while allowing unique search metadata, and a link test prevents repeat regressions.

## Current state

- `source.config.ts` extends the docs schema only with `links`; title and description come from the base schema.
- `app/(app)/docs/[[...slug]]/page.tsx` passes `doc.title` and `doc.description` directly to `createMetadata` and also renders them visibly.
- `content/docs/components/sidebar.mdx:37` contains the wrong `/docs/components/use-is-mobile` path.
- `content/docs/components/button.mdx` has generic metadata. `autocomplete.mdx` and `combobox.mdx` currently have effectively identical descriptions.
- `lib/url.test.ts` is the local `node:test`/`assert` exemplar. `package.json` explicitly lists test files instead of using a glob.
- AGENTS.md §15 gates `pnpm test`, `pnpm typecheck`, and browser use; scoped lint is allowed.

## Commands you will need

| Purpose | Command | Expected on success |
|---|---|---|
| Find descriptions | `rg -n '^description:|^seoTitle:|^seoDescription:' content/docs` | new SEO fields appear only where useful |
| Find stale link | `rg -n '/docs/components/use-is-mobile' content/docs` | no matches |
| Scoped lint | `pnpm exec ultracite check source.config.ts 'app/(app)/docs/[[...slug]]/page.tsx' lib/docs-links.test.ts` | exit 0 (omit nonexistent test path until created) |

## Scope

**In scope**:

- `source.config.ts`
- `app/(app)/docs/[[...slug]]/page.tsx`
- `content/docs/components/sidebar.mdx`
- Priority frontmatter: `content/docs/(root)/index.mdx`, `content/docs/(root)/installation.mdx` if present, `content/docs/components/index.mdx`, `button.mdx`, `combobox.mdx`, `autocomplete.mdx`, `dialog.mdx`, `select.mdx`, `sidebar.mdx`, `content/docs/ai-elements/prompt-input.mdx`, `content/docs/ai-elements/message.mdx`
- `lib/docs-links.test.ts` (create if tests are authorized)
- `package.json` only for the explicit test list
- `plans/README.md`

**Out of scope**: rewriting all 148 pages in one batch, changing visible component API descriptions, external-link checking, content localization, and structured data.

## Git workflow

Use the current branch and working tree. Do not stash, switch branches, commit, push, or open a PR unless asked. Touch only the files in Scope and preserve unrelated dirty changes.

## Steps

### Step 1: Add optional frontmatter SEO fields

Extend the Fumadocs schema with optional `seoTitle` and `seoDescription` strings. In the docs route, use `seoTitle ?? title` and `seoDescription ?? description` only for `createMetadata`; continue rendering the original title/description in the page header.

**Verify**: `rg -n "seoTitle|seoDescription" source.config.ts 'app/(app)/docs/[[...slug]]/page.tsx'` → both fields appear in schema and fallback expressions.

### Step 2: Repair the known broken link

Change only the Sidebar destination to `/docs/hooks/use-is-mobile`; keep its human-readable label intact.

**Verify**: `rg -n '/docs/(components|hooks)/use-is-mobile' content/docs/components/sidebar.mdx` → exactly one `/docs/hooks/use-is-mobile` match.

### Step 3: Improve the highest-value search snippets

For each existing priority file in Scope, add unique `seoTitle` only when the visible title is ambiguous in search, and add a factual `seoDescription` of roughly 120–160 characters. Describe what the page helps a React developer build, mention Ark UI/Shark UI only where natural, and differentiate close concepts such as Autocomplete versus Combobox. Do not copy the same sentence between pages; do not change API claims without checking the page/source.

**Verify**: run a short read-only script or `awk` to report SEO-description lengths; every newly added value is 120–160 characters and no two are identical.

### Step 4: Add a deterministic internal-doc-link test if authorized

With explicit test permission, create `lib/docs-links.test.ts`. Recursively read MDX under `content/docs`, extract absolute Markdown links beginning `/docs`, strip hashes/query strings, derive valid public routes from MDX paths (route groups like `(root)` do not appear in the URL; `index.mdx` maps to its directory), and assert every target exists. Ignore external URLs, images, code fences, and non-doc application routes. Model test syntax after `lib/url.test.ts`, then add the test file to `package.json`.

If permission is absent, fix the known link and document the test as gated/deferred instead of adding unrun code.

## Test plan

- Static check: stale Sidebar URL has zero matches.
- Content check: priority SEO descriptions are unique and 120–160 characters.
- With explicit permission: `pnpm test` passes and the new test demonstrably fails if the old Sidebar URL is restored.
- Scoped ultracite exits 0 for TS files.

## Done criteria

- [ ] Search metadata can differ from visible docs title/description without duplicating page rendering logic.
- [ ] The known Sidebar link points to the real hook page.
- [ ] Priority docs have unique, descriptive search snippets.
- [ ] Link regression coverage is passing if test permission was granted, otherwise clearly deferred.
- [ ] No bulk rewrite of unrelated docs; README row updated.

## STOP conditions

- Fumadocs already reserves these field names with different semantics.
- A target MDX page does not exist; skip it and report rather than create an unrelated page.
- Link parsing cannot distinguish fenced code reliably—narrow the test or stop; do not create a noisy test.
- Tests/browser are needed but not authorized.

## Maintenance notes

Future docs should use concise visible `description` plus unique `seoDescription` when the visible line is too short for search. Keep the route fallback so older pages remain valid.
