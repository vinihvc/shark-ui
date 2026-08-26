# Plan 020: Turn the changelog hub into summaries instead of duplicate full posts

> **Executor instructions**: Follow the steps, preserve unrelated work, honor STOP conditions, and update plan 020 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 1261047..HEAD -- 'app/(app)/docs/changelog' lib/changelog.ts content/docs/changelog`

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: plan 018
- **Category**: SEO / docs
- **Planned at**: commit `1261047`, 2026-08-26

## Why this matters

The changelog hub renders the complete MDX body of the five newest releases while those same bodies also live at individual canonical URLs. Search engines receive substantially duplicated content and users get a long, poorly scannable index. A summary index gives each release one authoritative detail page and strengthens internal links.

## Current state

- `app/(app)/docs/changelog/page.tsx:72-87` renders `<page.data.body />` (or the equivalent `MDX`) for the latest five releases.
- Older releases are rendered as links.
- `lib/changelog.ts` already exposes frontmatter dates and sorts pages.
- Individual changelog routes are public docs pages and remain the canonical full-content destinations.

## Commands you will need

| Purpose | Command | Expected on success |
|---|---|---|
| Ensure bodies are absent | `rg -n "data\\.body|<MDX|\\.body\\(" 'app/(app)/docs/changelog/page.tsx'` | no matches |
| Semantic summaries | `rg -n "dateTime|href" 'app/(app)/docs/changelog/page.tsx'` | both match |
| Scoped lint | `pnpm exec ultracite check 'app/(app)/docs/changelog/page.tsx' lib/changelog.ts` | exit 0 |

## Scope

**In scope**: `app/(app)/docs/changelog/page.tsx`, `lib/changelog.ts` only if a typed summary/date field is needed, changelog index frontmatter, `plans/README.md`.

**Out of scope**: editing release bodies, merging/deleting release URLs, inventing dates, RSS behavior, pagination, and JSON-LD (plan 026).

## Git workflow

Use the current branch and dirty working tree. Do not stash, switch branches, commit, push, or open a PR unless asked.

## Steps

### Step 1: Replace embedded bodies with linked release summaries

Render every changelog entry as a semantic list/article containing its linked title, a `<time dateTime="YYYY-MM-DD">`, and the existing frontmatter description when available. The newest entries may receive stronger styling, but must not mount their MDX body on the hub. Keep the individual page as the only full body.

**Verify**: `rg -n "data\.body|<MDX|\.body\(" 'app/(app)/docs/changelog/page.tsx'` → no matches; `rg -n "dateTime|href" 'app/(app)/docs/changelog/page.tsx'` → both match.

### Step 2: Preserve navigation and metadata quality

Keep all releases discoverable, sorted newest-first, with valid links. Give the hub a unique title/description via the docs metadata path from plan 018. If the current on-page table of contents only referenced embedded bodies, remove or replace it with release anchors—do not leave dead controls.

**Verify**: a read-only script comparing `getChangelogPages()` results to rendered link generation confirms every page is represented once.

### Step 3: Lint; use browser only with permission

Run `pnpm exec ultracite check 'app/(app)/docs/changelog/page.tsx' lib/changelog.ts` → exit 0. If visual confirmation is desired, ask for explicit browser permission before opening it.

## Test plan

- Static assertion: hub source does not import/render MDX bodies.
- Static assertion: each entry emits a link and machine-readable time.
- No new test is required unless list transformation logic moves into `lib/changelog.ts`; if it does, ask before running `pnpm test`.

## Done criteria

- [ ] Changelog hub contains summaries only; individual pages contain full posts.
- [ ] Every release remains linked exactly once and newest-first.
- [ ] Dates use semantic `<time dateTime>` markup.
- [ ] Scoped lint passes; no browser was opened without permission.
- [ ] README row updated.

## STOP conditions

- Changelog frontmatter does not provide a reliable date or description for most entries; report missing files/fields rather than synthesize facts.
- A shared component change outside Scope becomes necessary.
- Visual verification is requested but browser permission is absent.

## Maintenance notes

Keep future release content on its individual route. The hub should remain a durable index, not a second renderer of the same article.
