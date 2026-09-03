# Plan 076: Document Next.js Link via `asChild`, not a source fork

> **Executor instructions**: Work in the current checkout. Do not create or
> switch branches, do not use `git stash`, and do not commit unless the
> operator explicitly asks. Follow each step and stop on a STOP condition.
> Skip updating `plans/README.md` if a reviewer dispatched you — they maintain
> the index.
>
> **Drift check (run first)**: `git diff --stat 2310c90..HEAD -- content/docs/components/link-overlay.mdx registry/react/examples/link-overlay/example-with-link.tsx registry/react/components/link-overlay.tsx`
> If the “Always use Link” fork diff is gone, or `LinkOverlay` no longer
> supports `asChild`, stop and report.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: docs
- **Planned at**: commit `2310c90`, 2026-09-01

## Why this matters

Shark’s Link Overlay already matches Chakra’s Custom Link pattern:
`LinkOverlay asChild` around Next.js `Link`. The public page also tells
consumers to replace `ark.a` with `next/link` inside `link-overlay.tsx`. That
fork drops Ark `asChild`, couples the registry item to Next.js, and
contradicts both the live `example-with-link` preview and the API table’s
`asChild` row. The API table also marks `href` as required even though
`asChild` puts `href` on the child and the component is typed as
`React.ComponentProps<typeof ark.a>`.

## Current state

- `content/docs/components/link-overlay.mdx` — public docs.
- `registry/react/examples/link-overlay/example-with-link.tsx` — the correct
  Next.js composition (do not edit).
- `registry/react/components/link-overlay.tsx` — `LinkOverlay` is `ark.a` with
  `asChild` from the Ark factory (do not edit).

`content/docs/components/link-overlay.mdx:74–106` currently has:

- `## Link` with the one-liner “The `asChild` prop renders another element with link overlay styling.” plus `example-with-link`.
- `## Examples` / `### Article` (keep).
- `### Always use Link` telling the reader to edit `link-overlay.tsx`, with a `diff` fence that removes `@ark-ui/react/factory` and `ark.a` and adds `import Link from "next/link"`. Delete that whole subsection.

The exemplar already in `example-with-link.tsx:9–11`:

```tsx
<LinkOverlay asChild>
  <Link href="#">Simple blog post title</Link>
</LinkOverlay>
```

Match the Button docs voice in `content/docs/components/button.mdx:99–104`:
a short “Link” section that names `asChild` as the composition path, not a
source edit.

`href` in the LinkOverlay API table (`link-overlay.mdx:121`) says `required`.
Breadcrumb uses `-` for optional `href` (`content/docs/components/breadcrumb.mdx:143`).
Match Breadcrumb.

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 2310c90..HEAD -- content/docs/components/link-overlay.mdx registry/react/examples/link-overlay/example-with-link.tsx registry/react/components/link-overlay.tsx` | only expected dirty-tree noise; the fork section must still exist before you edit |
| Fork gone | `rg -n 'Always use Link|link-overlay\.tsx' content/docs/components/link-overlay.mdx` | no `Always use Link`; `link-overlay.tsx` only if still used for ComponentSource (installation), not a source-edit recipe |
| asChild named | `rg -n 'asChild' content/docs/components/link-overlay.mdx` | still present in the Link section and the API tables |
| href default | `rg -n 'href' content/docs/components/link-overlay.mdx` | Usage snippet may still pass `href`; API table default is `-`, not `required` |
| Whitespace | `git diff --check -- content/docs/components/link-overlay.mdx` | no output, exit 0 |
| Focused lint | `pnpm exec ultracite check content/docs/components/link-overlay.mdx` | exit 0 |

Do not run `pnpm test`, `pnpm typecheck`, or a browser.

## Scope

**In scope**:

- `content/docs/components/link-overlay.mdx`

**Out of scope**:

- `registry/react/components/link-overlay.tsx` — keep `ark.a`.
- `registry/react/examples/link-overlay/example-with-link.tsx` — already correct.
- `skills/shark-ui/references/primitives/link-overlay.md`
- `public/r/link-overlay.json`
- Adding a text-selection caveat, raising `button` in `LinkBox`, or changing
  the default Card example (plans 077 and 078).

## Git workflow

- Work in the existing tree; do not create or switch branches, stash, commit,
  push, or open a PR.
- Preserve unrelated dirty files.

## Steps

### Step 1: Rewrite the Link section as the Next.js composition path

In `content/docs/components/link-overlay.mdx`, keep the `## Link` heading and
the `example-with-link` preview. Replace the one-liner with two short
sentences that state:

1. `asChild` merges overlay styles onto another element (Next.js `Link`,
   React Router `Link`, or a native `<a>`).
2. Pass `href` on that child. Do not edit the published `LinkOverlay`
   source to swap in a framework `Link`.

Keep it as terse as the Button `## Link` section. Do not add a second preview.
Do not mention `ark.a` in the new prose (the deleted fork recipe is the only
place that name should disappear from).

**Verify**: `rg -n 'asChild' content/docs/components/link-overlay.mdx` still
hits the Link section; the prose must say not to edit the component source.

### Step 2: Delete the “Always use Link” fork recipe

Remove the entire `### Always use Link` subsection under `## Examples`,
including the `diff` fence that swaps `ark.a` for `next/link`. Leave
`### Article` as the only Examples subsection.

**Verify**: `rg -n 'Always use Link' content/docs/components/link-overlay.mdx` finds nothing. `rg -n 'import Link from "next/link"' content/docs/components/link-overlay.mdx` finds nothing. `rg -n 'ark\\.a' content/docs/components/link-overlay.mdx` finds nothing.

### Step 3: Mark overlay `href` optional in the API table

In the LinkOverlay API table, change the `href` Default column from
`required` to `-`. Keep Type as `string`. Do not add a new row.

**Verify**: the table line matches Breadcrumb’s optional `href` style; no
`required` remains on that row.

## Test plan

Documentation-only. Regression is the `rg` scans above. Do not add tests here
(plan 077 owns the component contract).

## Done criteria

- [ ] The page does not tell readers to edit `link-overlay.tsx` to use Next.js `Link`.
- [ ] `## Link` documents `asChild` as the composition path and still renders `example-with-link`.
- [ ] `### Always use Link` and the `ark.a` → `next/link` diff are gone.
- [ ] LinkOverlay API `href` default is `-`.
- [ ] `git diff --check -- content/docs/components/link-overlay.mdx` is clean.
- [ ] `pnpm exec ultracite check content/docs/components/link-overlay.mdx` exits 0.
- [ ] No files outside Scope changed by this task.

## STOP conditions

- `LinkOverlay` no longer comes from `ark.a` / no longer accepts `asChild`.
- `example-with-link.tsx` no longer uses `LinkOverlay asChild` wrapping `next/link`.
- Fixing the docs appears to require changing component source.
- A heading-order conflict would force moving `## Link` after `## API Reference`.

## Maintenance notes

If another routing library example is added, keep it on `asChild` like
`example-with-link.tsx`. Reviewers should reject any docs that ask consumers
to fork the published `ark.a` host.
