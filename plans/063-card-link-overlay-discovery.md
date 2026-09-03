# Plan 063: Surface the clickable Card composition pattern

> **Executor instructions**: Work in the existing checkout. Do not create or switch branches, stash, commit, push, or open a PR. Preserve unrelated dirty files. Follow each step and stop on a STOP condition.
>
> **Drift check (run first)**: `git diff --stat 2310c90..HEAD -- content/docs/components/card.mdx registry/react/examples/link-overlay/example-default.tsx`

## Status

- **Priority**: P3
- **Effort**: S
- **Risk**: LOW
- **Depends on**: `plans/062-card-docs-variants-heading.md`
- **Category**: direction
- **Planned at**: commit `2310c90`, 2026-08-31

## Why this matters

Shark already has a working `LinkOverlay` + Card composition, but a developer reading only the Card page cannot discover it. A concise cross-link improves composition discovery without expanding Card's primitive API or duplicating the LinkOverlay documentation.

## Current state

- `registry/react/examples/link-overlay/example-default.tsx:12–20` wraps Card with `LinkBox`, then uses `LinkOverlay asChild` around `CardTitle asChild` and an anchor.
- `content/docs/components/card.mdx` has no reference to `LinkOverlay`.
- Shark's product purpose is to help developers inspect and understand production-oriented compositions (`PRODUCT.md:11–14`).

## Commands you will need

| Purpose | Command | Expected result |
| --- | --- | --- |
| Link scan | `rg -n 'LinkOverlay|link overlay' content/docs/components/card.mdx` | one concise Card-page pointer |
| Focused lint | `pnpm lint:check -- content/docs/components/card.mdx` | exit 0 |
| Whitespace | `git diff --check` | no output, exit 0 |

## Scope

**In scope:**

- `content/docs/components/card.mdx`

**Out of scope:**

- Changing `LinkBox`, `LinkOverlay`, or their example.
- Making all Cards interactive by default.
- Adding a duplicate full clickable-card example to the Card page.

## Steps

### Step 1: Add a compact composition pointer

In the Card page's Examples section, add one short paragraph or callout after the existing examples: when the whole card needs one destination, use `LinkOverlay` and `LinkBox`; link to [Link Overlay](/docs/components/link-overlay). Do not describe Card itself as a link, and do not add nested interactive controls to the guidance.

**Verify**: Link scan returns exactly the intended pointer; confirm the target is the site-relative Link Overlay documentation route used elsewhere in MDX, not a raw source-file URL.

## Test plan

This is a documentation discovery change. Verify the single cross-link and MDX lint; browser link-following requires separate authorization.

## Done criteria

- [ ] Card docs point to the established LinkOverlay composition.
- [ ] The guidance preserves the distinction between a clickable card and a Card primitive.
- [ ] Focused lint and `git diff --check` pass.
- [ ] No files outside Scope changed, excluding pre-existing unrelated changes.

## STOP conditions

- The Link Overlay documentation route cannot be determined from existing MDX conventions.
- The only valid pattern would require adding a new public Card API.

## Maintenance notes

Keep the full implementation example owned by Link Overlay. Card docs should stay a discoverability pointer so the two pages do not drift.
