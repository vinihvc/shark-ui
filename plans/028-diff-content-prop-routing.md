# Plan 028: Route DiffContent className and rest to one labeled node

> **Executor instructions**: Follow this plan step by step. Run every
> verification command and confirm the expected result before moving to the
> next step. If anything in the "STOP conditions" section occurs, stop and
> report — do not improvise. When done, update the status row for this plan
> in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 891952a..HEAD -- registry/react/components/diff.tsx`
> Expect plan 027’s flex wrapper to already exist. If `DiffContent` is still
> a bare `ScrollArea` with `{...rest}` on an inner div, apply 027 first.
>
> **Operator override**: stay on the current branch. Do **not** `git stash`,
> create a branch, commit, or push. Do not run `pnpm test`, `pnpm typecheck`,
> or open a browser.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: plans/027-diff-content-scroll-height.md
- **Category**: bug
- **Planned at**: commit `891952a`, 2026-08-27

## Why this matters

`DiffContent` is typed as `React.ComponentProps<"div">` but splits props: `className` on `ScrollArea`, `{...rest}` (`id`, `aria-*`, event handlers) on the inner track. Consumers cannot label or identify the part named in the anatomy. Shark `ScrollArea` **must** keep `data-slot="scroll-area"` on its root (scrollbar CSS uses `in-[[data-slot=scroll-area]...]`). Put the public slot and consumer props on the **wrapper** from plan 027.

## Current state (after 027, or migrate together)

Target shape:

```tsx
export const DiffContent = (props: React.ComponentProps<"div">) => {
  const { className, children, ...rest } = props;

  return (
    <div
      className={cn(
        "flex max-h-80 min-h-0 w-full min-w-0 flex-col overflow-hidden",
        className
      )}
      data-slot="diff-content"
      dir="ltr"
      {...rest}
    >
      <ScrollArea className="min-h-0 w-full flex-1">
        <div className="w-max min-w-full py-1 text-sm leading-5">
          {children}
        </div>
      </ScrollArea>
    </div>
  );
};
```

Do **not** pass `data-slot="diff-content"` into `ScrollArea` (it would override `scroll-area` via `{...rest}` inside ScrollArea and hide scrollbars).

`onScroll` on the wrapper will not fire for viewport scrolling (Ark viewport is nested). Do not invent a ScrollArea viewport callback. Document in a one-line MDX note only if you already touch docs in plan 031; this plan does not require docs.

## Commands you will need

| Purpose | Command | Expected on success |
|---------|---------|---------------------|
| Lint | `pnpm lint:fix -- registry/react/components/diff.tsx` | exit 0 |
| Slot on wrapper | `rg 'data-slot="diff-content"' registry/react/components/diff.tsx` | one match, on the outer `div` of `DiffContent` |
| Rest not on track | `rg '\{\.\.\.rest\}' registry/react/components/diff.tsx` | match on the `data-slot="diff-content"` element, not the `w-max` track |

## Scope

**In scope**:
- `registry/react/components/diff.tsx` (`DiffContent` only)

**Out of scope**:
- `scroll-area.tsx`
- Forwarding `onScroll` into Ark Viewport
- Examples

## Git workflow

- Stay on `feat/new-components`. Do not stash, branch, commit, or push.

## Steps

### Step 1: Put className, dir, rest, and data-slot on the wrapper

Match the target shape above. Inner track `div` has **no** `{...rest}` and **no** `data-slot="diff-content"`.

**Verify**: `pnpm lint:fix -- registry/react/components/diff.tsx` exits 0. `rg 'data-slot="diff-content"'` is the wrapper. ScrollArea has only layout `className`.

## Test plan

No new tests. Do not run `pnpm test`.

## Done criteria

- [ ] `className` and `{...rest}` are on the `data-slot="diff-content"` node
- [ ] That node is a `div`, not `ScrollArea`
- [ ] `ScrollArea` still has `data-slot="scroll-area"` (default from the primitive)
- [ ] Plan 027 height classes still present
- [ ] `plans/README.md` row 028 updated

## STOP conditions

- Plan 027 wrapper is missing and you cannot restore it without changing ScrollArea.

## Maintenance notes

Callers using `[data-slot=diff-content]` get the labeled region, not the Ark viewport. Do not “fix” scrollbar hiding by renaming ScrollArea’s slot.
