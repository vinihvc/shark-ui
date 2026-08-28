# Plan 029: Ship Diff success/destructive cssVars on the registry item

> **Executor instructions**: Follow this plan step by step. Run every
> verification command and confirm the expected result before moving to the
> next step. If anything in the "STOP conditions" section occurs, stop and
> report — do not improvise. When done, update the status row for this plan
> in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 891952a..HEAD -- registry/manifest/diff.ts registry/manifest/alert.ts`
> If `registry/manifest/diff.ts` already exports `cssVars` with `success` and
> `destructive`, STOP and mark REJECTED.
>
> **Operator override**: stay on the current branch. Do **not** `git stash`,
> create a branch, commit, or push. Do not run `pnpm test`, `pnpm typecheck`,
> or open a browser.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: dx
- **Planned at**: commit `891952a`, 2026-08-27

## Why this matters

Diff add/delete styling uses `bg-success/10`, `text-success-foreground`, `text-destructive-foreground`, and hatch `var(--destructive)`. `npx shadcn add @shark/diff` copies the TSX but the manifest currently has **no** `cssVars`, so a consumer theme may lack `--success` / `--destructive`. Alert/Badge ship those tokens on the item. Diff’s own MDX already documents the same light/dark values for **manual** install; the CLI path should inject them too.

## Current state

`registry/manifest/diff.ts` today:

```ts
const manifest: RegistryItemType = {
  dependencies: ["@ark-ui/react", "lucide-react", "tailwind-variants"],
  description: "Unified diff hunks with add, delete, and context lines.",
  name: "diff",
  registryDependencies: [absoluteUrl("/r/scroll-area.json")],
  type: "registry:ui",
};
```

Copy the **success** and **destructive** (and `*-foreground`) entries only — not `info` / `warning` — from `registry/manifest/alert.ts` `cssVars.light` / `cssVars.dark` (same emerald/red mappings). Keep `absoluteUrl` and `registryDependencies`.

Do not delete the CSS block in `content/docs/ai-elements/diff.mdx` (manual install still needs it).

## Commands you will need

| Purpose | Command | Expected on success |
|---------|---------|---------------------|
| Build item | `pnpm registry:build` | exit 0 (ignore unrelated block warnings only if the command still writes `public/r/diff.json`; if the process **exits non-zero**, still confirm `public/r/diff.json` contains `"cssVars"` — if the file updated, continue; if not, STOP) |
| Lint | `pnpm lint:fix -- registry/manifest/diff.ts` | exit 0 |

## Scope

**In scope**:
- `registry/manifest/diff.ts`
- `public/r/diff.json` (via `pnpm registry:build`, not hand-edit)

**Out of scope**:
- `registry/manifest/alert.ts`, `style.ts`, `terminal.ts`
- Changing token values away from Alert’s success/destructive

## Git workflow

- Stay on `feat/new-components`. Do not stash, branch, commit, or push.

## Steps

### Step 1: Add cssVars to the Diff manifest

Add a `cssVars` const with `light` and `dark` keys. Values (must match Alert):

Light: `destructive` `var(--color-red-600)`, `destructive-foreground` `var(--color-red-700)`, `success` `var(--color-emerald-500)`, `success-foreground` `var(--color-emerald-700)`.

Dark: `destructive` `var(--color-red-600)`, `destructive-foreground` `var(--color-red-400)`, `success` `var(--color-emerald-500)`, `success-foreground` `var(--color-emerald-400)`.

Pass `cssVars` on the manifest object.

**Verify**: `pnpm lint:fix -- registry/manifest/diff.ts` exits 0.

### Step 2: Rebuild registry JSON

Run `pnpm registry:build`. Confirm `public/r/diff.json` has a top-level `"cssVars"` object with `light` and `dark`. Do not hand-edit the JSON.

**Verify**: `rg '"cssVars"' public/r/diff.json` matches.

## Test plan

No tests. Do not run `pnpm test`.

## Done criteria

- [ ] `registry/manifest/diff.ts` includes `cssVars` for success + destructive (+ foregrounds), light and dark
- [ ] No info/warning keys on Diff cssVars
- [ ] `public/r/diff.json` contains `cssVars` (generated)
- [ ] `plans/README.md` row 029 updated

## STOP conditions

- `RegistryItemType` no longer accepts `cssVars`.
- `pnpm registry:build` fails **and** does not update `public/r/diff.json`.

## Maintenance notes

If global `style` already defines these tokens, CLI merge is additive and should not wipe other theme keys. Keep Diff cssVars in sync with Alert if those reds/emeralds change.
