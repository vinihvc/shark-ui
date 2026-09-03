# Plan 058: Restrict Card layout state to direct children

> **Executor instructions**: Work in the existing checkout. Do not create or switch branches, stash, commit, push, or open a PR. Preserve unrelated dirty files. Follow each step and stop on a STOP condition.
>
> **Drift check (run first)**: `git diff --stat 2310c90..HEAD -- registry/react/components/card.tsx public/r/card.json`

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: MED
- **Depends on**: `plans/057-card-semantic-foreground.md`
- **Category**: bug
- **Planned at**: commit `2310c90`, 2026-08-31

## Why this matters

Card padding is conditional on whether it contains image media or a footer. The existing `has-data-*` utility matches any descendant, so an inner Card or arbitrary nested element with the same data attribute changes the outer Card's spacing. The public composition contract requires structural parts as direct children; the selector must encode that boundary.

## Current state

- `registry/react/components/card.tsx:17` has `has-data-[variant=image]:pt-0 has-data-[slot=card-footer]:pb-0`.
- `CardMedia` emits `data-variant={variant}` at line 60 and `CardFooter` emits `data-slot="card-footer"` at line 172.
- `skills/shark-ui/references/primitives/card.md:105` explicitly says `CardHeader`, `CardContent`, and `CardFooter` should be direct children.

## Commands you will need

| Purpose | Command | Expected result |
| --- | --- | --- |
| Focused lint | `pnpm lint:check -- registry/react/components/card.tsx` | exit 0 |
| Build registry | `pnpm registry:build` | exit 0 |
| Selector scan | `rg -n 'has-data-\[variant=image\]|has-data-\[slot=card-footer\]|has-\[>_' registry/react/components/card.tsx` | only direct-child structural selectors remain |
| Whitespace | `git diff --check` | no output, exit 0 |

Do not run `pnpm test`, `pnpm typecheck`, or a browser without separate authorization.

## Scope

**In scope:**

- `registry/react/components/card.tsx`
- `public/r/card.json` (generated only)

**Out of scope:**

- Allowing wrapper elements around Card sections.
- Renaming `data-slot` or `data-variant` values.
- Changing CardHeader's own action selector.

## Steps

### Step 1: Encode direct-child matching

Replace both broad `has-data-*` utilities on the Card root with valid Tailwind v4 arbitrary `:has(> …)` utilities that match only direct `CardMedia[data-variant="image"]` and direct `CardFooter[data-slot="card-footer"]` children. Keep the same `pt-0` and `pb-0` outcomes for valid Card anatomy.

**Verify**: inspect the generated Tailwind class syntax in source and run focused lint. The old two `has-data-*` utility strings must no longer occur.

### Step 2: Regenerate the registry artifact

Run `pnpm registry:build`; do not edit the JSON manually.

**Verify**: run artifact parity from Plan 057 and `git diff --check`.

## Test plan

There is no JSX test harness. Add no dependency. The executor must manually inspect the selector so it uses a child combinator and confirm the previous broad selectors are absent; browser verification is explicitly out of scope without approval.

## Done criteria

- [ ] Image and footer layout adjustments apply only to direct Card children.
- [ ] Nested cards cannot alter outer-card padding through their data attributes.
- [ ] Registry source is regenerated and focused lint passes.
- [ ] No files outside Scope changed, excluding pre-existing unrelated changes.

## STOP conditions

- Tailwind v4 rejects the direct-child arbitrary selector during focused lint or generation.
- Achieving direct-child semantics requires custom CSS or global configuration.
- The Card source has already replaced these selectors with a different structural mechanism.

## Maintenance notes

Any future structural Card part that changes root spacing must use the same direct-child boundary. Do not reintroduce descendant `:has()` selectors for Card anatomy.
