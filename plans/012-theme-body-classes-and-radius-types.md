# Plan 012: Apply theme classes surgically and tighten radius types

> **Executor instructions**: Follow this plan step by step. Run every
> verification command and confirm the expected result before moving to the
> next step. If anything in the "STOP conditions" section occurs, stop and
> report — do not improvise. When done, update the status row for this plan
> in `plans/README.md` — unless a reviewer dispatched you and told you they
> maintain the index.
>
> **Drift check (run first)**: `git diff --stat 1261047..HEAD -- providers/themes.tsx store/config.ts lib/preview-theme.ts components/registry-compositions/preview-theme-sync.tsx styles/themes.css components/layout/header/header.customize.tsx`
> If any in-scope file changed since this plan was written, compare the
> "Current state" excerpts against the live code before proceeding; on a
> mismatch, treat it as a STOP condition.

## Status

- **Result**: DONE (executed 2026-08-24 on current branch, no stash)

- **Priority**: P1
- **Effort**: S
- **Risk**: MED
- **Depends on**: none (can run parallel with 011)
- **Category**: bug
- **Planned at**: commit `1261047`, 2026-08-24

## Why this matters

`ThemesProvider` loops `document.body.classList` and **removes every class**, then adds `bg-*`, `radius-*`, `theme-*`. Dark mode lives on `<html>` (`ThemeProvider attribute="class"` in `app/providers.tsx`), so the homepage usually survives. Any other body class (tour `relative`, future layout classes) is wiped on every theme change. Block/template iframes mount the same provider **and** `PreviewThemeSync`, which already removes only known prefixes.

Separately, `BorderRadius` includes `"xl" | "2xl"` and `PREVIEW_BORDER_RADII` allows them, but `BORDER_RADIUS` / `.radius-*` in `styles/themes.css` only go through `lg`. Stale `localStorage` `config.borderRadius` of `xl` makes `BORDER_RADIUS.findIndex` return `-1` and the customize slider index `BORDER_RADIUS[value[0]]` unsafe. `PrimaryColor` repeats `"pink" | "rose"` in the union.

## Current state

`providers/themes.tsx`:

```ts
React.useEffect(() => {
  for (const className of Array.from(document.body.classList)) {
    document.body.classList.remove(className);
  }
  document.body.classList.add(`bg-${grayColor}`);
  document.body.classList.add(`radius-${borderRadius}`);
  document.body.classList.add(`theme-${primaryColor}`);
}, [primaryColor, grayColor, borderRadius]);
```

Default context is `{} as ThemesProviderProps`, so `if (!context)` in `useThemes` never throws (`{}` is truthy). Leave that unless you touch the file anyway — then use `undefined` default or a real null check. Do not expand scope to rewrite context API.

`components/registry-compositions/preview-theme-sync.tsx` filters:

```ts
className === "light" ||
className === "dark" ||
className.startsWith("theme-") ||
className.startsWith("bg-") ||
className.startsWith("radius-")
```

and sets `mode` on `document.documentElement`, theme classes on `body`.

`store/config.ts`: `BorderRadius = "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl"`; `PrimaryColor` lists pink/rose twice; `DEFAULT_BORDER_RADIUS = "md"`.

`lib/themes.ts` `BORDER_RADIUS` values: `none`, `xs`, `sm`, `md`, `lg` only. CSS: `.radius-none` … `.radius-lg` only (`styles/themes.css` ~L1175–1193).

`lib/preview-theme.ts` `PREVIEW_BORDER_RADII` includes `xl` and `2xl`.

`header.customize.tsx` Slider: `defaultValue={[5]}` while `max={BORDER_RADIUS.length - 1}` is `4`; `value` is controlled via `findIndex`.

`app/layout.tsx`: `<body>` has no className; fonts are on `<html>`.

## Commands you will need

| Purpose | Command | Expected on success |
|---------|---------|---------------------|
| Tests | `pnpm test` | exit 0 |
| Lint | `pnpm lint:check` | exit 0 on touched files |

## Scope

**In scope**:
- `providers/themes.tsx`
- `store/config.ts` (type unions only)
- `lib/preview-theme.ts` (`PREVIEW_BORDER_RADII` only)
- `lib/preview-theme` helper for shared class names **or** a tiny `lib/theme-classes.ts` if that avoids circular imports — prefer putting `isThemeBodyClass` + `applyDocumentThemeClasses` next to preview types in `lib/preview-theme.ts` if it stays free of React
- `components/registry-compositions/preview-theme-sync.tsx` — switch to the shared helper (same behavior)
- `components/layout/header/header.customize.tsx` — slider `defaultValue` / guard `findIndex < 0`
- Optional: `lib/preview-theme.ts` tests in `lib/preview-theme.test.ts` + `package.json` test script append

**Out of scope**:
- `createCssVars` / `styles/themes.css` token values (plan 011)
- Theme selector NativeSelect (plan 013)
- Adding `.radius-xl` / `.radius-2xl` UI — **remove from the type**, do not expand the picker
- Changing `ThemeProvider` `attribute` or moving dark class to body

## Git workflow

Work on the **current branch**. Do not create a new branch, stash, or switch. Do not commit unless the operator asks.

## Steps

### Step 1: Shared body-class apply helper

In `lib/preview-theme.ts` (or `lib/theme-classes.ts` if you must keep preview-theme types-only — types-only is not required), export something like:

```ts
export const isManagedThemeClass = (className: string) =>
  className === "light" ||
  className === "dark" ||
  className.startsWith("theme-") ||
  className.startsWith("bg-") ||
  className.startsWith("radius-");

export const applyBodyThemeClasses = (input: {
  borderRadius: BorderRadius;
  grayColor: GrayColor;
  primaryColor: PrimaryColor;
}) => {
  const body = document.body;
  body.classList.remove(
    ...Array.from(body.classList).filter(isManagedThemeClass)
  );
  body.classList.add(
    `bg-${input.grayColor}`,
    `radius-${input.borderRadius}`,
    `theme-${input.primaryColor}`
  );
};
```

Guard `typeof document === "undefined"` if the module is imported from a Server Component path — `ThemesProvider` is `"use client"`; `preview-theme-sync` is client. Keep the helper client-safe (no `"use client"` in `lib/` unless the repo already does that).

`ThemesProvider` effect: call `applyBodyThemeClasses({ primaryColor, grayColor, borderRadius })` instead of wiping all classes.

`PreviewThemeSync`: keep origin check and html `light`/`dark` handling; use `isManagedThemeClass` for both html and body filters; still add `mode` only on `documentElement` and theme trio only on `body` (current split).

**Verify**: `rg 'classList.remove\\(className\\)' providers/themes.tsx` → no match. `rg 'applyBodyThemeClasses|isManagedThemeClass' providers/themes.tsx` → match.

### Step 2: Tighten types and preview allowlist

- `BorderRadius`: derive from `BORDER_RADIUS` **or** list only `"none" | "xs" | "sm" | "md" | "lg"`. If deriving from `lib/themes.ts`, avoid a cycle (`lib/themes.ts` must not import `store/config.ts`). Simplest: edit the union in `store/config.ts` to drop `xl` | `2xl`.
- `PrimaryColor`: delete the duplicate `"pink" | "rose"` lines.
- `PREVIEW_BORDER_RADII`: drop `xl` and `2xl` so `satisfies readonly BorderRadius[]` still holds.

In `header.customize.tsx`: remove incorrect `defaultValue={[5]}` or set it to the index of `DEFAULT_BORDER_RADIUS`. If `findIndex` is `-1`, treat as `DEFAULT_BORDER_RADIUS` (md) when reading slider value and when calling `setConfig`.

**Verify**: `rg 'xl' store/config.ts` — `BorderRadius` union has no `xl`/`2xl`. `rg '2xl' lib/preview-theme.ts` — not in `PREVIEW_BORDER_RADII`.

### Step 3: Unit test the class filter

Add `lib/preview-theme.test.ts` (or beside the helper file) with `node:test`: `isManagedThemeClass("theme-red")` true, `"relative"` false, `"dark"` true. Append to `package.json` `scripts.test`.

**Verify**: `pnpm test` exit 0.

## Test plan

- Filter helper: managed vs unrelated class names.
- Optional: `isPreviewThemeMessage` rejects `borderRadius: "xl"` after the allowlist change (payload that used to pass).

## Done criteria

- [ ] `ThemesProvider` does not remove non-theme body classes
- [ ] `PreviewThemeSync` uses the same managed-class predicate
- [ ] `BorderRadius` / preview allowlist match CSS (none–lg)
- [ ] Duplicate `PrimaryColor` members gone
- [ ] Slider cannot index `-1` into `BORDER_RADIUS`
- [ ] `pnpm test` exit 0; no extra in-scope files
- [ ] `plans/README.md` row 012 updated

## STOP conditions

- Dark class is actually on `body` in this checkout (then wiping body classes is a user-visible flash/bug — still switch to surgical remove, and do **not** strip `dark` from body without putting it back).
- Sharing the helper forces a `lib` → `store` → `lib` cycle you cannot break without moving types; then duplicate the three-line predicate in both files and report.

## Maintenance notes

- New radius steps: add CSS class, `BORDER_RADIUS` row, and type together.
- Reviewer: iframe `/view` still gets `html.dark` from postMessage, not from wiping body.
- Deferred: persist-migration of old `xl` localStorage values beyond slider fallback.
