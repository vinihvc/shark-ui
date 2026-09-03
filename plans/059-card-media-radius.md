# Plan 059: Match image media corners to the Card surface

> **Executor instructions**: Work in the existing checkout. Do not create or switch branches, stash, commit, push, or open a PR. Preserve unrelated dirty files. Follow each step and stop on a STOP condition.
>
> **Drift check (run first)**: `git diff --stat 2310c90..HEAD -- registry/react/components/card.tsx registry/react/examples/card/example-product.tsx public/r/card.json`

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: `plans/058-card-direct-child-layout-state.md`
- **Category**: bug
- **Planned at**: commit `2310c90`, 2026-08-31

## Why this matters

The Card root is `rounded-xl`, but `CardMedia variant="image"` clips to `rounded-t-sm`. This visibly mismatches the containing surface and made the product example add `overflow-hidden` to Card as a workaround. Image media should own correct clipping without every consumer knowing the workaround.

## Current state

- `registry/react/components/card.tsx:18` makes Card `rounded-xl`.
- `registry/react/components/card.tsx:40–44` makes image media `overflow-hidden rounded-t-sm`, removes horizontal padding, and styles its image.
- `registry/react/examples/card/example-product.tsx:11` adds `className="overflow-hidden"` to Card solely while demonstrating image media.

## Commands you will need

| Purpose | Command | Expected result |
| --- | --- | --- |
| Focused lint | `pnpm lint:check -- registry/react/components/card.tsx registry/react/examples/card/example-product.tsx` | exit 0 |
| Registry generation | `pnpm registry:build` | exit 0 |
| Source scan | `rg -n 'rounded-t-sm|rounded-t-xl|overflow-hidden' registry/react/components/card.tsx registry/react/examples/card/example-product.tsx` | CardMedia uses the Card-matching top radius; example has no workaround |
| Whitespace | `git diff --check` | no output, exit 0 |

Do not run `pnpm test`, `pnpm typecheck`, or a browser without separate authorization.

## Scope

**In scope:**

- `registry/react/components/card.tsx`
- `registry/react/examples/card/example-product.tsx`
- `public/r/card.json` (generated only)

**Out of scope:**

- Making every Card globally `overflow-hidden`.
- Changing Card's `rounded-xl` token or image aspect ratio.
- Reworking image URLs or product copy.

## Steps

### Step 1: Align the media clipping radius

Change only the image-media top radius so it matches the root Card's `rounded-xl` geometry. Preserve `overflow-hidden`, zero horizontal padding, image object-fit styles, and all data attributes.

**Verify**: the source scan reports no `rounded-t-sm` in CardMedia and reports the matching top radius.

### Step 2: Remove the now-redundant example workaround

Remove `overflow-hidden` from the example's Card class. Keep the example's width, media height, alt text, and buttons unchanged.

**Verify**: the source scan shows clipping is owned by CardMedia, not the example root.

### Step 3: Regenerate the installable source

Run `pnpm registry:build` and confirm `public/r/card.json` matches the component source.

## Test plan

No DOM visual-test setup exists. The regression contract is that the primitive, not a consumer, owns top-image clipping; validate via the targeted class scan, focused lint, generator, and whitespace check.

## Done criteria

- [ ] Image media has the same top-corner geometry as Card.
- [ ] The official product example needs no root overflow workaround.
- [ ] Generated registry output matches source.
- [ ] Focused lint and `git diff --check` pass.

## STOP conditions

- Card's radius has become configurable in a way that cannot be represented by the same utility.
- Removing the example class changes an unrelated intentional clipping behavior.
- The generator modifies unrelated artifacts beyond pre-existing dirty files.

## Maintenance notes

Keep image-media clipping local to `CardMedia`; adding global overflow clipping to Card can unexpectedly clip descendants and focus indicators.
