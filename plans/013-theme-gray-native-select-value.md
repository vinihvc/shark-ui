# Plan 013: Control the mobile Gray NativeSelect value

> **Executor instructions**: Follow this plan step by step. Run every
> verification command and confirm the expected result before moving to the
> next step. If anything in the "STOP conditions" section occurs, stop and
> report — do not improvise. When done, update the status row for this plan
> in `plans/README.md` — unless a reviewer dispatched you and told you they
> maintain the index.
>
> **Drift check (run first)**: `git diff --stat 1261047..HEAD -- app/(app)/themes/_components/theme-selector/theme-selector.gray.tsx app/(app)/themes/_components/theme-selector/theme-selector.primary.tsx app/(app)/themes/_components/theme-selector/theme-selector.radius.tsx`
> If any in-scope file changed since this plan was written, compare the
> "Current state" excerpts against the live code before proceeding; on a
> mismatch, treat it as a STOP condition.

## Status

- **Result**: DONE (executed 2026-08-24 on current branch, no stash)

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none (plan 014 will reuse this pattern)
- **Category**: bug
- **Planned at**: commit `1261047`, 2026-08-24

## Why this matters

Theme config is persisted (`atomWithStorage` in `store/config.ts`). On mobile, Gray uses `NativeSelect` **without** `value={config.grayColor}`. Primary and Radius already pass `value`. After reload, the native Gray dropdown can show the first option (Slate) while the page is still Neutral (or whatever was stored). Users copy CSS that does not match the control they see.

## Current state

`theme-selector.gray.tsx` mobile branch (~L37–53):

```tsx
<NativeSelect
  onChange={({ target }) =>
    handleSelectColor(target.value as GrayColor)
  }
>
```

`theme-selector.primary.tsx` (~L42–46) and `theme-selector.radius.tsx` (~L37–41) both set `value={config.primaryColor}` / `value={config.borderRadius}`.

Desktop Gray Select already has `value={[config.grayColor]}`.

`useIsMobile` is `@/registry/react/hooks/use-is-mobile` (file is `.tsx`).

## Commands you will need

| Purpose | Command | Expected on success |
|---------|---------|---------------------|
| Lint | `pnpm lint:check` | exit 0 on the touched file |

## Scope

**In scope**:
- `app/(app)/themes/_components/theme-selector/theme-selector.gray.tsx`

**Out of scope**:
- Extracting a shared select (plan 014)
- Header customize sheet
- Changing `useIsMobile` breakpoint

## Git workflow

Work on the **current branch**. Do not create a new branch, stash, or switch. Do not commit unless the operator asks.

## Steps

### Step 1: Pass `value`

On the Gray `NativeSelect`, add `value={config.grayColor}` exactly like Radius.

Keep `onChange` + `handleSelectColor`. Do not add a second source of truth.

**Verify**: `rg 'NativeSelect' -A 8 'app/(app)/themes/_components/theme-selector/theme-selector.gray.tsx'` → `value={config.grayColor}` present. `pnpm lint:check` on that file.

## Test plan

No new unit test (NativeSelect is Ark/DOM). Regression is visual: persist gray zinc, narrow viewport, Gray select shows Zinc.

If you add a test, do not invent a Playwright job in this plan.

## Done criteria

- [ ] Gray `NativeSelect` is controlled with `config.grayColor`
- [ ] Only the in-scope file changed
- [ ] `plans/README.md` row 013 updated

## STOP conditions

- `NativeSelect` in this repo does not accept `value` (then report; Primary/Radius already use it, so this is unlikely).
- Plan 014 already landed a shared field that includes `value` — mark 013 DONE with one line in the index (duplicate work).

## Maintenance notes

- Any new theme `NativeSelect` must be controlled. Plan 014 should make that structural.
