# Plan 079: Link Sidebar docs to the published blocks catalog

> **Executor instructions**: Follow this plan exactly. Do not run tests,
> typecheck, builds, or a browser without explicit operator authorization.
> When complete, update only this plan's row in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 2310c90..HEAD -- content/docs/components/sidebar.mdx registry/react/blocks/_registry.ts registry/react/blocks/sidebar/_registry.ts app/(app)/blocks/[category]/page.tsx`
> If the route or registry differs from the current state below, stop and
> report; do not invent a destination URL.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: docs
- **Planned at**: commit `2310c90`, 2026-09-01

## Why this matters

The Sidebar documentation says full-page examples are coming soon, although
the public block catalog already includes four Sidebar blocks. This hides
copyable examples from users. Link only Sidebar: Chart files are not currently
included in the public `BLOCKS` registry, so its corresponding “soon” text is
not part of this plan.

## Current state

- `content/docs/components/sidebar.mdx` is the public primitive page.
- `registry/react/blocks/_registry.ts` includes `sidebarBlocks` in `BLOCKS`.
- `registry/react/blocks/sidebar/_registry.ts` defines four blocks with
  `category: "sidebar"`.
- `app/(app)/blocks/[category]/page.tsx` creates a static category route from
  `BLOCK_CATEGORIES`, which includes `sidebar`.

`content/docs/components/sidebar.mdx:13-15` currently says:

```md
For full-page examples that wire the sidebar:

Browse the Sidebar Components (soon).
```

The confirmed public destination is `/blocks/sidebar`.

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Verify link | `rg -n '\]\(/blocks/sidebar\)' content/docs/components/sidebar.mdx` | one result |
| Verify stale copy absent | `rg -n 'Sidebar Components \(soon\)' content/docs/components/sidebar.mdx` | no output, exit 1 |
| Verify whitespace | `git diff --check -- content/docs/components/sidebar.mdx` | no output, exit 0 |

## Scope

**In scope**:

- `content/docs/components/sidebar.mdx`
- `plans/README.md` (this plan's status only)

**Out of scope**:

- `content/docs/components/chart.mdx`
- block routes, registries, previews, and Sidebar source

## Git workflow

- Work in the current tree; do not branch, stash, switch branches, or commit
  unless instructed by the operator.
- Preserve unrelated user changes.

## Steps

### Step 1: Replace the unavailable-catalog message

In `content/docs/components/sidebar.mdx`, retain the introductory sentence and
replace `Browse the Sidebar Components (soon).` with natural Markdown that
links to `/blocks/sidebar`, for example `Browse the [Sidebar
Blocks](/blocks/sidebar).` Do not change the `PreviewIframe` or installation
sections.

**Verify**: run both `rg` commands from the command table.

### Step 2: Confirm the minimal docs diff

Ensure that only the catalog invitation changed, then update the plan status.

**Verify**: `git diff --check -- content/docs/components/sidebar.mdx` → no
output and exit 0.

## Test plan

This is an internal-link documentation change. The public route and registry
are verified by source inspection; use the static scans above. Do not open a
browser or run tests without explicit authorization.

## Done criteria

- [ ] The intro links to `/blocks/sidebar`.
- [ ] `Sidebar Components (soon)` is absent.
- [ ] `git diff --check -- content/docs/components/sidebar.mdx` passes.
- [ ] No file outside scope changed for this work.
- [ ] Plan 079 is marked DONE in `plans/README.md`.

## STOP conditions

- `sidebarBlocks` is no longer part of `BLOCKS`.
- The public route is no longer `/blocks/sidebar`.
- The change requires editing Chart documentation or registry code.

## Maintenance notes

When a component page points to blocks, validate the public `BLOCKS` registry,
not only files present under `registry/react/blocks/`.
