# Plan 031: Name DiffStats and DiffLine for assistive tech

> **Executor instructions**: Follow this plan step by step. Run every
> verification command and confirm the expected result before moving to the
> next step. If anything in the "STOP conditions" section occurs, stop and
> report — do not improvise. When done, update the status row for this plan
> in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 891952a..HEAD -- registry/react/components/diff.tsx content/docs/ai-elements/diff.mdx`
> If `DiffStats` already has a default `aria-label` covering added/removed,
> STOP and report what landed.
>
> **Operator override**: stay on the current branch. Do **not** `git stash`,
> create a branch, commit, or push. Do not run `pnpm test`, `pnpm typecheck`,
> or open a browser.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: docs
- **Planned at**: commit `891952a`, 2026-08-27

## Why this matters

`DiffStats` renders `+{added}` / `-{removed}` with color tokens. `DiffLine` type is color plus a `+`/`-` sign (`select-none`). Assistive tech gets punctuation without a stable English name. Sibling primitives already use English `aria-label` (e.g. CodeBlock copy: `"Copy code"`). `DiffContent` also forces `dir="ltr"` for the gutter; that is undocumented.

## Current state

`DiffStats` (`registry/react/components/diff.tsx`): `ark.span` with two visual spans, no `aria-label`.

`DiffLine`: `data-type={lineType}`, sign from `DIFF_MARKERS`, no row `aria-label`.

Docs `content/docs/ai-elements/diff.mdx` Usage/API do not mention LTR or stats naming.

Match AGENTS.md: `aria-label` on the control when there is no extra visible sentence. Do not add `sr-only` duplicate text if the label is on the same element.

Keep `DiffStats` overridable: if the caller passes `aria-label` in `...rest`, it must win (`...rest` after the default label, or only set default when `aria-label` is undefined).

## Commands you will need

| Purpose | Command | Expected on success |
|---------|---------|---------------------|
| Lint | `pnpm lint:fix -- registry/react/components/diff.tsx content/docs/ai-elements/diff.mdx` | exit 0 |
| Stats label | `rg 'added, .*removed' registry/react/components/diff.tsx` | match |
| Docs LTR | `rg 'dir=.ltr' content/docs/ai-elements/diff.mdx` | match in prose or API |

## Scope

**In scope**:
- `registry/react/components/diff.tsx` (`DiffStats`, `DiffLine`)
- `content/docs/ai-elements/diff.mdx` (one short Usage or API note)

**Out of scope**:
- i18n / `LocaleProvider` strings
- Making `Diff` a `role="table"`
- Examples (they inherit labels)
- Hiding filename icon (already `aria-hidden`)

## Git workflow

- Stay on `feat/new-components`. Do not stash, branch, commit, or push.

## Steps

### Step 1: DiffStats default aria-label

On the `ark.span` with `data-slot="diff-stats"`:

- Default `aria-label={\`${added} added, ${removed} removed\`}`
- Spread `{...rest}` **after** that attribute so callers can override
- Leave the visible `+{added}` / `-{removed}` spans as they are

**Verify**: default label string exists; `...rest` comes after `aria-label` in the JSX.

### Step 2: DiffLine row name; hide redundant sign from AT

On the `data-slot="diff-line"` `div`:

- Set `aria-label` using `line` and `lineType`:
  - `add` → `Line ${line}, added` (if `line` is null/undefined, `Added line`)
  - `delete` → `Line ${line}, deleted` / `Deleted line`
  - `context` → `Line ${line}` / omit label if `line` is null (context with no number is just the code)
- Put `aria-hidden="true"` on the sign span (`data-slot="diff-line-sign"`) so `+`/`-` are not double-spoken
- Do **not** aria-hide the code
- Prefer not aria-hiding the number if the row label already includes it (hide the **sign** only)

Use a small helper in the same file (not a new module) with an exhaustive `switch` on `DiffLineType` and a `never` default (repo `typescript-exhaustive-switch` rule).

**Verify**: helper + `aria-hidden="true"` on the sign. Lint exits 0.

### Step 3: Docs sentence

In `content/docs/ai-elements/diff.mdx`, after Usage (before Examples) or under DiffLine API, add **at most two sentences**:

1. `DiffContent` sets `dir="ltr"` so line numbers stay on the code’s left.
2. `DiffStats` exposes “N added, M removed” to assistive tech via `aria-label` (overridable).

Do not add a new preview.

**Verify**: `rg 'dir=.ltr' content/docs/ai-elements/diff.mdx` matches.

## Test plan

No tests. Do not run `pnpm test`.

## Done criteria

- [ ] `DiffStats` has default `aria-label` `${added} added, ${removed} removed` overridable via rest
- [ ] `DiffLine` has type-aware `aria-label`; sign is `aria-hidden`
- [ ] Exhaustive switch (or equivalent `never` default) for the label helper
- [ ] Docs mention LTR and stats `aria-label`
- [ ] `pnpm lint:fix` on the two files exits 0
- [ ] `plans/README.md` row 031 updated

## STOP conditions

- Ark `span` strips `aria-label` (unlikely). If so, STOP rather than wrapping extra DOM without reporting.

## Maintenance notes

English labels match CodeBlock. If the site localizes primitives later, these strings must move to the same i18n path as `"Copy code"`. After 028–031, run **one** `pnpm registry:build` so `public/r/diff.json` includes cssVars (029) and the new TSX.
