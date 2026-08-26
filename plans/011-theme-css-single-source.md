# Plan 011: Make copied theme CSS match the live preview

> **Executor instructions**: Follow this plan step by step. Run every
> verification command and confirm the expected result before moving to the
> next step. If anything in the "STOP conditions" section occurs, stop and
> report — do not improvise. When done, update the status row for this plan
> in `plans/README.md` — unless a reviewer dispatched you and told you they
> maintain the index.
>
> **Drift check (run first)**: `git diff --stat 1261047..HEAD -- lib/themes.ts styles/themes.css components/dialog/copy-theme.tsx package.json`
> If any in-scope file changed since this plan was written, compare the
> "Current state" excerpts against the live code before proceeding; on a
> mismatch, treat it as a STOP condition.

## Status

- **Result**: DONE (executed 2026-08-24 on current branch, no stash)

- **Priority**: P1
- **Effort**: M
- **Risk**: MED
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `1261047`, 2026-08-24

## Why this matters

`/themes` tells developers to copy CSS into `globals.css`. Live preview is class-based (`body.theme-red`, `body.bg-slate`) in `styles/themes.css`. The dialog uses `createCssVars()` in `lib/themes.ts`, a second handwritten template. They already disagree: `.theme-*` has **only light** primary tokens, while `createCssVars` emits different **dark** primaries (e.g. red-600 on the site vs red-700 in the snippet). The snippet also omits `--code` / `--code-highlight` that every gray scale sets in `themes.css`. Consumers paste a theme that does not match what they previewed.

## Current state

- `styles/themes.css` — imported from `styles/globals.css`. Starts with `@import "tailwindcss"` (globals already imports Tailwind). `.theme-red` through `.theme-rose` set six light tokens only, no `@variant dark`. Neutral primary has no class (comment: same as default). `.bg-slate` … `.bg-taupe` set gray tokens with `@variant dark`. `.radius-none` … `.radius-lg` set `--radius`.
- `lib/themes.ts` — `PRIMARY_COLORS`, `GRAY_COLORS`, `BORDER_RADIUS`, and `createCssVars` (from ~L1216) which interpolates a giant `:root` / `.dark` string. Light `--destructive` is hardcoded `var(--color-red-500)`; dark destructive comes from `grayCss.dark`. Gray **light** objects have no `destructive` / `code` keys; `themes.css` gray blocks do set `--code`.
- `components/dialog/copy-theme.tsx` — looks up current config in those arrays and calls `createCssVars(primary.cssVars, gray.cssVars, radius.cssVars)`.
- `providers/themes.tsx` — adds `theme-${primary}`, `bg-${gray}`, `radius-${radius}` on `document.body`.
- Tests: `package.json` `"test": "tsx --test lib/highlight-code.test.ts lib/url.test.ts lib/registry-source-path.test.ts"`. Pattern: `node:test` + `node:assert/strict`, see `lib/url.test.ts`.

Example mismatch (red primary):

```css
/* styles/themes.css — applies in light AND dark */
.theme-red {
  --primary: var(--color-red-600);
  --ring: var(--color-red-500);
}

/* createCssVars .dark */
--primary: var(--color-red-700);
--ring: var(--color-red-900);
```

Indigo: preview always `--color-indigo-600`; copy dark uses `--color-indigo-500` (`PRIMARY_COLORS` indigo `cssVars.dark`).

Conventions: named exports; do not introduce Vitest. PRODUCT.md: copy-and-own registry, docs English. Do not rewrite `content/docs/(root)/styling.mdx` in this plan.

## Commands you will need

| Purpose | Command | Expected on success |
|---------|---------|---------------------|
| Tests | `pnpm test` | exit 0; includes new `lib/themes.test.ts` |
| Lint | `pnpm lint:check` | exit 0, or only pre-existing issues outside in-scope files |

## Suggested executor toolkit

- Node `tsx --test` as in existing `lib/*.test.ts`.

## Scope

**In scope**:
- `lib/themes.ts` (`createCssVars` and gray/primary token objects only as needed for missing keys)
- `lib/themes.test.ts` (create)
- `styles/themes.css` (`.theme-*` dark variants; optional drop of duplicate `@import "tailwindcss"` if `@variant dark` still compiles — if dropping the import breaks variants, keep it)
- `package.json` (`scripts.test` — append `lib/themes.test.ts` only)

**Out of scope**:
- Regenerating the entire gray `.bg-*` CSS from TypeScript in one shot
- `registry/manifest/style.ts` / `pnpm registry:build` / `public/r`
- `content/docs/(root)/styling.mdx`
- `providers/themes.tsx` (plan 012)
- Theme selector UI (plans 013–015)
- Adding Shiki highlighting to the copy dialog (plan 015)

## Git workflow

Work on the **current branch**. Do not create a new branch, stash, or switch. Touch only in-scope paths. Do not commit unless the operator asks. Message style if asked: short imperative or `fix:` / `chore:`.

## Steps

### Step 1: Characterization tests for `createCssVars`

Create `lib/themes.test.ts` modeled on `lib/url.test.ts`. Import `PRIMARY_COLORS`, `GRAY_COLORS`, `BORDER_RADIUS`, `createCssVars`.

Cases (use `.find` on the arrays by `value`):

1. Neutral + zinc + md: output contains `:root {` and `.dark {`, `--radius: 0.5rem`, light `--primary:` equal to `PRIMARY_COLORS` neutral light primary, dark `--primary:` equal to neutral dark primary.
2. Red + slate + md: `.dark` block contains `--primary: var(--color-red-700)` (from `PRIMARY_COLORS` red `cssVars.dark`, not red-600).
3. Output includes `--code:` in both `:root` and `.dark` **after** you implement step 2 (write the assertion now; it will fail until step 2).

Append `lib/themes.test.ts` to `package.json` `scripts.test`.

**Verify**: `pnpm test` — cases 1–2 pass against current `createCssVars`; case 3 fails until step 2.

### Step 2: Build `createCssVars` from merged objects

Replace the hand-maintained interpolation list with a small formatter that:

1. Defines `STATUS_LIGHT` / `STATUS_DARK` records for info/success/warning/chart-1..5 matching **today’s** `createCssVars` values (do not invent new chart hues).
2. Merges for `:root`: `{ ...gray.light, ...STATUS_LIGHT, ...primary.light, ...radiusCss }` and for `.dark`: `{ ...gray.dark, ...STATUS_DARK, ...primary.dark, ...radiusCss }`. Later objects win (primary overlays gray’s `primary` / `ring` / sidebar-primary keys).
3. Emits `--${key}: ${value};` for each own key. Keep `:root` first, then `.dark`. Include `--radius` from `radiusCss`.
4. Add `code` and `code-highlight` (and `code-foreground` if you set it) on **each** `GRAY_COLORS` light/dark object using the same `color-mix` formulas already in `styles/themes.css` for that gray (copy from `.bg-slate` etc., do not invent). Then they flow into the snippet automatically.

Do **not** keep a 80-line template of individual `--background:` lines after this step.

**Verify**: `pnpm test` — all three cases pass. `rg 'createCssVars' lib/themes.ts` still exports the same function name and arity so `copy-theme.tsx` needs no change.

### Step 3: Dark variants on `.theme-*`

For every `.theme-red` … `.theme-rose` in `styles/themes.css`, add `@variant dark { ... }` whose six properties equal `PRIMARY_COLORS[i].cssVars.dark` (primary, primary-foreground, ring, sidebar-primary, sidebar-primary-foreground, sidebar-ring). Leave the existing light declarations as `cssVars.light`.

Do not add `.theme-neutral` unless you also add it in `ThemesProvider` (out of scope). Neutral preview continues to use `globals.css` defaults plus gray classes.

**Verify**: `rg '@variant dark' styles/themes.css` — matches inside each `.theme-*` (not only inside `.bg-*`). Spot-check `.theme-red` dark `--primary: var(--color-red-700)`.

### Step 4: Optional Tailwind import

If `@variant dark` still works after removing line 1 `@import "tailwindcss"` from `styles/themes.css` (globals already imports it), remove it. If dark variants stop generating, keep the import and note that in the plan status.

**Verify**: `pnpm lint:check` on touched files. Do not run full `pnpm typecheck` (`next build`) unless the operator asks — it is heavy.

## Test plan

- File: `lib/themes.test.ts` (new), pattern `lib/url.test.ts`.
- Cases: merge overlay (colored primary wins over gray primary); radius emission; `--code` present; red dark primary token.
- `pnpm test` → exit 0 including the new file.

## Done criteria

- [ ] `pnpm test` exits 0; `lib/themes.test.ts` is listed in `package.json` `scripts.test`
- [ ] `createCssVars` is not a duplicated token laundry list; it merges objects
- [ ] Each `.theme-*` (except missing neutral) has `@variant dark` matching `PRIMARY_COLORS[].cssVars.dark`
- [ ] Copied CSS includes `--code` (and highlight) from gray data
- [ ] No files outside the in-scope list are modified (`git status`)
- [ ] `plans/README.md` status row for 011 updated

## STOP conditions

- `createCssVars` callers expect a different signature than three cssVars objects.
- Adding `@variant dark` inside `.theme-*` requires changing `@custom-variant dark` in `globals.css`.
- You feel you must regenerate all `.bg-*` blocks to finish — stop; that is explicitly out of scope. Gray preview CSS may still duplicate `GRAY_COLORS`; this plan only locks **primary dark** + **snippet completeness**.

## Maintenance notes

- New primary colors: add to `PRIMARY_COLORS` **and** a `.theme-*` block with light + `@variant dark`, or the preview drifts again. Prefer a later script to emit `.theme-*` from the array.
- Reviewer: confirm light overlay still uses `cssVars.light` (not dark) on `.theme-*`.
- Deferred: generating `.bg-*` from `GRAY_COLORS`; docs styling page; Shiki in the copy dialog (015).
