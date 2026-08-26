# Plan 014: Share one Field+Select pattern for Gray, Primary, and Radius

> **Executor instructions**: Follow this plan step by step. Run every
> verification command and confirm the expected result before moving to the
> next step. If anything in the "STOP conditions" section occurs, stop and
> report — do not improvise. When done, update the status row for this plan
> in `plans/README.md` — unless a reviewer dispatched you and told you they
> maintain the index.
>
> **Drift check (run first)**: `git diff --stat 1261047..HEAD -- app/(app)/themes/_components/theme-selector components/layout/header/header.customize.tsx`
> If any in-scope file changed since this plan was written, compare the
> "Current state" excerpts against the live code before proceeding; on a
> mismatch, treat it as a STOP condition.

## Status

- **Result**: DONE (executed 2026-08-24 on current branch, no stash)

- **Priority**: P2
- **Effort**: M
- **Risk**: LOW
- **Depends on**: plans/013-theme-gray-native-select-value.md (Gray NativeSelect `value` must exist in the pattern you extract)
- **Category**: tech-debt
- **Planned at**: commit `1261047`, 2026-08-24

## Why this matters

`/themes` implements three near-copies of Field + `useIsMobile` + NativeSelect vs Select (`theme-selector.gray.tsx`, `.primary.tsx`, `.radius.tsx`). The header customize sheet is a **different** UI (RadioGroup + Slider) on the same `useConfig()` atom — that duplication is product, not a bug. The three page selects drift (Gray forgot `value`; Primary recreates `createListCollection` every render; Gray/Radius hoist it). One small field component prevents the next missed `value` and keeps collection stable.

## Current state

All three files: `"use client"`, `createListCollection` from `@ark-ui/react`, `Field`/`FieldLabel`, `Select*` from `@/registry/react/components/select`, `NativeSelect*` from `@registry/react/components/native-select` (note **two alias styles** — keep whatever each file already uses, or standardize on `@/registry/react/...` to match AGENTS.md).

Primary (~L34–36) builds `collection` **inside** the component. Gray and Radius hoist `const collection = createListCollection({ items: ... })` at module scope.

Primary trigger shows `bg-primary` swatch + `SelectValue`; items use `item.hex` light/dark via `useTheme().resolvedTheme`. Gray trigger uses dynamic `` `bg-${config.grayColor}-500` `` (Tailwind may not see that string; item `hex` is a full class like `bg-slate-500`). Prefer `GRAY_COLORS.find` + `hex` on the trigger if you touch Gray as part of the extract.

Header customize (`components/layout/header/header.customize.tsx`) RadioGroups + Slider + Copy + Reset/Shuffle — **do not convert to Select**.

AGENTS.md: Select uses `collection` + `SelectItem`; Field without manual `id`/`htmlFor`.

## Commands you will need

| Purpose | Command | Expected on success |
|---------|---------|---------------------|
| Lint | `pnpm lint:check` | exit 0 on touched files |

## Scope

**In scope**:
- `app/(app)/themes/_components/theme-selector/theme-selector.gray.tsx`
- `app/(app)/themes/_components/theme-selector/theme-selector.primary.tsx`
- `app/(app)/themes/_components/theme-selector/theme-selector.radius.tsx`
- One new file in that folder, e.g. `theme-selector.field.tsx`, plus export from `index.ts` **only if** something outside needs it (page imports `ThemeSelector` from `theme-selector.tsx`; prefer not exporting the field from `index.ts`)

**Out of scope**:
- `header.customize.tsx` behavior, layout, hotkey `c`, Shuffle/Reset
- Changing which colors exist
- Replacing Select with RadioGroup on `/themes` or vice versa
- `CardsDemo`

## Git workflow

Work on the **current branch**. Do not create a new branch, stash, or switch. Do not commit unless the operator asks.

## Steps

### Step 1: Extract `ThemeSelectorField`

Create a client component that accepts:

- `label: string`
- `collection` (already created at module scope by the caller)
- `value: string` (current config value)
- `onValueChange: (value: string) => void`
- `placeholder?: string`
- `trigger?: React.ReactNode` (optional extra inside `SelectTrigger` before `SelectValue`)
- `renderItem: (item: { label: string; value: string }) => React.ReactNode` for `SelectItem` children

Mobile: `Field` + `NativeSelect` with `value={value}` and `onChange` → `onValueChange(target.value)`. Map `collection.items` to `NativeSelectOption`.

Desktop: `Select` with `collection`, `value={[value]}`, `onValueChange={({ value }) => onValueChange(value[0] ?? "")}`. Do not call `onValueChange` with `undefined`.

Hoist collections in **all three** callers (move Primary’s `createListCollection` to module scope like Gray).

Keep Badge “Default” inside `renderItem` in each caller (they know `DEFAULT_*` constants).

**Verify**: the three selector files no longer import `useIsMobile` if the field owns it. `rg 'NativeSelect' app/(app)/themes/_components/theme-selector/theme-selector.gray.tsx` → no match (usage only in `.field.tsx`).

### Step 2: Gray trigger swatch

If the shared trigger API allows a node, pass Gray’s swatch using the **complete** `hex` class from `GRAY_COLORS` (e.g. `item.hex` for current gray), not `` `bg-${config.grayColor}-500` ``.

**Verify**: `rg 'bg-\$\{' app/(app)/themes/_components/theme-selector` → no match.

### Step 3: Lint

**Verify**: `pnpm lint:check` on the folder.

## Test plan

No new unit tests unless you extract a non-React mapper. Do not add component tests infrastructure.

## Done criteria

- [ ] One NativeSelect/Select implementation; three thin wrappers
- [ ] All NativeSelects controlled; Primary collection not recreated per render
- [ ] Header customize file untouched
- [ ] `plans/README.md` row 014 updated

## STOP conditions

- Ark `Select` requires `collection` identity such that module-level `createListCollection` breaks updates — then keep collection in the wrapper but `useMemo` with `[]` deps; do not put `createListCollection` in the render path without memo.
- Unifying with header radios seems “cleaner” — stop; that is out of scope.

## Maintenance notes

- Reviewer: mobile/desktop split must stay behind `useIsMobile` as today; do not ship two visible selects.
- Follow-up: header still duplicates color lists visually; that is intentional density for the sheet.
