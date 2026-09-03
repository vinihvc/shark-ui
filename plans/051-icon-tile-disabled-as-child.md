# Plan 051: Make disabled interactive Icon Tiles visibly unavailable

> **Executor instructions**: Work in the current checkout. Do not create or
> switch branches, do not use `git stash`, and do not commit unless the
> operator explicitly asks. Follow each step and stop on a STOP condition.
>
> **Drift check (run first)**: `git diff --stat 2310c90..HEAD -- registry/react/components/icon-tile.tsx content/docs/components/icon-tile.mdx registry/react/examples/icon-tile/example-link.tsx public/r/icon-tile.json`
> If the implementation no longer uses `asChild` or its interactive-host
> selectors differ materially, stop and report.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: accessibility
- **Planned at**: commit `2310c90`, 2026-08-31

## Why this matters

The component documents `asChild` for semantic interactive hosts and supplies
host-specific hover and pointer styling. A disabled `<button>` composed through
that path still matches `[button&]:cursor-pointer` and the hover selectors, so
it can look actionable despite native disabled semantics. Shark's `Button`
already establishes the intended grammar: reduced opacity and no pointer
interaction for both `disabled` and `aria-disabled` states.

## Current state

- `registry/react/components/icon-tile.tsx:15–18` adds pointer cursor, hover
  transitions, and focus styles but has no disabled or `aria-disabled` rules.
- The `default` and `outline` variants at lines 58–72 add unguarded hover
  styles for button hosts.
- `registry/react/components/button.tsx:15–18` is the local exemplar for
  disabled and `aria-disabled` styling; use its semantic behavior rather than
  inventing new tokens.
- `content/docs/components/icon-tile.mdx:94–98` documents `asChild` with a
  link. The component remains visual-only; this plan must not turn it into a
  button primitive or add click handlers.

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Targeted lint | `pnpm exec ultracite check registry/react/components/icon-tile.tsx content/docs/components/icon-tile.mdx registry/react/examples/icon-tile/example-link.tsx` | Exit 0, no fixes applied. |
| Publish artifact | `pnpm registry:build` | Exit 0 and regenerate `public/r/icon-tile.json`. |
| Whitespace check | `git diff --check -- registry/react/components/icon-tile.tsx content/docs/components/icon-tile.mdx registry/react/examples/icon-tile/example-link.tsx public/r/icon-tile.json` | No output, exit 0. |

Do not run browser checks, `pnpm test`, or `pnpm typecheck` without explicit
operator authorization.

## Scope

**In scope**:

- `registry/react/components/icon-tile.tsx`
- `content/docs/components/icon-tile.mdx`
- `registry/react/examples/icon-tile/example-link.tsx` only if an existing
  example needs a concise note or adjustment to illustrate the final contract
- `public/r/icon-tile.json` (generated only)

**Out of scope**:

- Adding event handlers, loading state, click effects, or a dedicated IconTile
  button component.
- Changing the `Button` component.
- Changing non-interactive Icon Tile usages in blocks, templates, or examples.

## Steps

### Step 1: Add disabled-state styling to the shared base

Add `disabled:pointer-events-none disabled:opacity-64` and their
`aria-disabled` counterparts to the Icon Tile base classes, matching
`Button`'s values. Ensure these styles land on the child host through `asChild`.

**Verify**: `rg -n 'disabled:.*pointer-events-none|aria-disabled:.*pointer-events-none' registry/react/components/icon-tile.tsx` returns both native and ARIA rules.

### Step 2: Prevent disabled buttons from receiving interactive hover feedback

Guard button-host hover selectors in the `default` and `outline` variants so a
disabled button cannot receive the accent hover surface. Keep anchor hover
behavior unchanged. Use Tailwind state selectors compatible with the existing
`[button&]` pattern; do not add JavaScript state.

**Verify**: inspect the final variant strings and confirm the button hover
selector is disabled-aware while the anchor hover selector remains present.

### Step 3: Clarify the composition boundary in docs

Keep the existing link example. Add a brief sentence only if needed to make
the boundary explicit: IconTile adds visual treatment; the child element owns
native semantics such as `disabled`. Do not add a redundant full button demo
unless the existing docs cannot state this clearly.

**Verify**: `pnpm exec ultracite check registry/react/components/icon-tile.tsx content/docs/components/icon-tile.mdx registry/react/examples/icon-tile/example-link.tsx` exits 0.

### Step 4: Regenerate the public artifact

Run `pnpm registry:build`; do not hand-edit JSON. Confirm the published
`icon-tile.json` embeds the disabled styles and no files outside scope changed.

**Verify**: run the remaining commands in **Commands you will need**; all succeed.

## Test plan

Plan 039 should include assertions that the base variant output contains both
native and ARIA disabled rules and that the button-hover class is guarded. Do
not introduce a DOM test framework solely for this plan.

## Done criteria

- [ ] A disabled or `aria-disabled` host loses pointer interaction and is
  visually reduced.
- [ ] Button hover feedback is not applied while disabled.
- [ ] Anchor behavior and IconTile's visual-only API remain unchanged.
- [ ] Generated registry output matches source.

## STOP conditions

- `ark.span` with `asChild` does not forward state attributes/classes to a
  native child in the current Ark version.
- Tailwind cannot express a disabled-aware host selector without a custom CSS
  rule or a JavaScript handler.
- The change requires modifying `Button` or any consuming block/template.

## Maintenance notes

Any new interactive-host selector on IconTile must be reviewed alongside
disabled and `aria-disabled` states. This component is still not a replacement
for `Button`; the host retains behavior and semantics.
