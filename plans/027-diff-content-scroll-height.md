# Plan 027: Give DiffContent a bounded flex scrollport

> **Executor instructions**: Follow this plan step by step. Run every
> verification command and confirm the expected result before moving to the
> next step. If anything in the "STOP conditions" section occurs, stop and
> report — do not improvise. When done, update the status row for this plan
> in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 891952a..HEAD -- registry/react/components/diff.tsx registry/react/components/scroll-area.tsx`
> Live uncommitted `diff.tsx` is authoritative. If `DiffContent` is no longer
> a `ScrollArea` with `h-auto max-h-80`, STOP and report.
>
> **Operator override**: stay on the current branch. Do **not** `git stash`,
> create a branch, commit, or push. Do not run `pnpm test`, `pnpm typecheck`,
> or open a browser.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: MED
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `891952a`, 2026-08-27

## Why this matters

`DiffContent` wants “grow with the hunk until `max-h-80`, then scroll” (vertical and horizontal). Shark `ScrollArea` root ships `size-full` (`h-full`) and the viewport is `flex-1 max-h-[inherit]`. `DialogBody` works because its parent has a definite height. `Diff` does not. `h-auto max-h-80` fighting `size-full` makes the scrollport fragile, so sticky line numbers and the docs “Scroll” example can fail.

## Current state

`registry/react/components/diff.tsx` `DiffContent` (today):

```tsx
<ScrollArea
  className={cn("h-auto max-h-80 min-h-0 w-full min-w-0", className)}
  dir="ltr"
>
  <div className="w-max min-w-full py-1 text-sm leading-5" data-slot="diff-content" {...rest}>
    {children}
  </div>
</ScrollArea>
```

`registry/react/components/scroll-area.tsx` root: `"size-full"` plus viewport `"max-h-[inherit] min-h-0 w-full flex-1"`.

Exemplar for a **capped** flex child: `registry/react/components/dialog.tsx` `DialogBody` uses `<ScrollArea className="min-h-0 flex-1">` inside a sized flex column. Recreate that locally with a `max-h-80` flex column wrapper — do **not** change `scroll-area.tsx`.

Keep `dir="ltr"` (code gutters). Keep `max-h-80`. Keep inner `w-max min-w-full` so long lines expand horizontally.

## Commands you will need

| Purpose | Command | Expected on success |
|---------|---------|---------------------|
| Lint | `pnpm lint:fix -- registry/react/components/diff.tsx` | exit 0 |
| Wrapper present | `rg 'flex max-h-80' registry/react/components/diff.tsx` | match in `DiffContent` |
| ScrollArea not size-battling | `rg 'h-auto max-h-80' registry/react/components/diff.tsx` | no matches |

## Scope

**In scope**:
- `registry/react/components/diff.tsx` (`DiffContent` only)

**Out of scope**:
- `registry/react/components/scroll-area.tsx`
- Moving `className`/`rest` onto one node (plan 028)
- Examples, docs, manifest, thumbs
- `public/r/diff.json` until a later plan runs `pnpm registry:build` (028–031 may rebuild once at the end)

## Git workflow

- Stay on `feat/new-components`. Do not stash, branch, commit, or push.

## Steps

### Step 1: Wrap ScrollArea in a max-height flex column

Replace `DiffContent` so the **outer** node is:

- `flex max-h-80 min-h-0 w-full min-w-0 flex-col overflow-hidden`
- `dir="ltr"`
- Keep spreading `className` on this wrapper **or** on ScrollArea for this plan; plan 028 will put `className` + `rest` on the wrapper. For 027, at minimum the wrapper must own `max-h-80` and `overflow-hidden`.

Inner `ScrollArea` layout classes only: `min-h-0 w-full flex-1` (no `h-auto max-h-80`).

Keep the inner track `div` with `w-max min-w-full py-1 text-sm leading-5`.

Do not change `DiffLine` sticky classes.

**Verify**: `rg 'flex max-h-80' registry/react/components/diff.tsx` matches. `rg 'h-auto max-h-80' registry/react/components/diff.tsx` has no matches. `pnpm lint:fix -- registry/react/components/diff.tsx` exits 0.

## Test plan

No new test files (repo has no `*.test.ts` for primitives). Do not run `pnpm test`.

## Done criteria

- [ ] `DiffContent` outer wrapper includes `max-h-80`, `flex`, `flex-col`, `overflow-hidden`, `min-h-0`
- [ ] `ScrollArea` inside uses `flex-1 min-h-0`, not `h-auto max-h-80`
- [ ] `dir="ltr"` still present
- [ ] `pnpm lint:fix -- registry/react/components/diff.tsx` exits 0
- [ ] `plans/README.md` row 027 updated

## STOP conditions

- `ScrollArea` API no longer accepts `className` as the root.
- Fix appears to require editing `scroll-area.tsx`.

## Maintenance notes

Short hunks should still shrink (wrapper height follows content until 20rem). Reviewers: do not “fix” this by setting `h-80` (always 320px). Plan 028 must keep this wrapper.
