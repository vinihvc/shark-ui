# Plan 030: Use one tint recipe for Diff row and sticky gutter

> **Executor instructions**: Follow this plan step by step. Run every
> verification command and confirm the expected result before moving to the
> next step. If anything in the "STOP conditions" section occurs, stop and
> report — do not improvise. When done, update the status row for this plan
> in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 891952a..HEAD -- registry/react/components/diff.tsx`
> If `diffLineVariants` and `diffGutterVariants` already share the same
> `color-mix` strings, STOP and mark REJECTED.
>
> **Operator override**: stay on the current branch. Do **not** `git stash`,
> create a branch, commit, or push. Do not run `pnpm test`, `pnpm typecheck`,
> or open a browser.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: plans/027-diff-content-scroll-height.md
- **Category**: tech-debt
- **Planned at**: commit `891952a`, 2026-08-27

## Why this matters

Add/delete rows use `bg-success/10` / `bg-destructive/10` (transparent overlay). The sticky gutter uses `color-mix(in_srgb, var(--color-success) 10%, var(--card))` so code does not show through. Those are not the same color. The delete hatch uses `var(--destructive)` while mixes use `var(--color-destructive)`. When the gutter sticks on horizontal scroll, the seam is visible and theming has two sources of truth.

## Current state

`registry/react/components/diff.tsx`:

- `diffLineVariants` type add/delete: `bg-success/10`, `bg-destructive/10`
- `diffGutterVariants` type add/delete: `color-mix` against `--card`; hatch `var(--destructive)`

Keep: sticky `left-0`, `w-8`, 3px accent `before:`, 1px `after:` divider, `bg-card` on the gutter **base** so context rows stay opaque while scrolling.

## Commands you will need

| Purpose | Command | Expected on success |
|---------|---------|---------------------|
| Lint | `pnpm lint:fix -- registry/react/components/diff.tsx` | exit 0 |
| Shared mix | `rg 'bg-success/10' registry/react/components/diff.tsx` | no matches |
| Hatch token | `rg 'var\\(--destructive\\)_' registry/react/components/diff.tsx` | no matches (use `--color-destructive`) |

## Scope

**In scope**:
- `registry/react/components/diff.tsx` (`diffLineVariants`, `diffGutterVariants`, optional shared const)

**Out of scope**:
- Changing accent width, hatch angle, or sticky behavior
- `text-sm` / `text-xs` (not this plan)
- Thumbs

## Git workflow

- Stay on `feat/new-components`. Do not stash, branch, commit, or push.

## Steps

### Step 1: One tint string per type

Add a const (same file, above the `tv` blocks):

```ts
const DIFF_TINT_ADD =
  "bg-[color-mix(in_srgb,var(--color-success)_10%,var(--card))]";
const DIFF_TINT_DELETE =
  "bg-[color-mix(in_srgb,var(--color-destructive)_10%,var(--card))]";
```

Use `DIFF_TINT_ADD` / `DIFF_TINT_DELETE` in **both** `diffLineVariants.variants.type` and `diffGutterVariants.variants.type` (gutter add/delete still append `before:bg-success` / hatch).

Hatch must be:

`before:bg-[repeating-linear-gradient(45deg,var(--color-destructive)_0,var(--color-destructive)_1.5px,transparent_1.5px,transparent_3px)]`

Gutter `context` should include `bg-card` (already on base; keep base `bg-card`).

Do not use `bg-success/10` or `bg-destructive/10` on Diff after this.

**Verify**: greps in the table. `pnpm lint:fix -- registry/react/components/diff.tsx` exits 0.

## Test plan

No tests. Do not run `pnpm test`.

## Done criteria

- [ ] Row and gutter add/delete tints are the same `color-mix` classes (shared consts)
- [ ] Hatch uses `var(--color-destructive)`
- [ ] No `bg-success/10` or `bg-destructive/10` in `diff.tsx`
- [ ] `plans/README.md` row 030 updated

## STOP conditions

- Theme has no `--card` / `--color-success` (this repo’s `styles/globals.css` maps them; if those `@theme` names changed, STOP).

## Maintenance notes

If add/delete opacity changes, edit the two consts only. Sticky gutter must stay a solid mix against `--card`, not a transparent overlay.
