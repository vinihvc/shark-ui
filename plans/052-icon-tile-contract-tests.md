# Plan 052: Protect the Icon Tile public class contract with tests

> **Executor instructions**: Work in the current checkout. Do not create or
> switch branches, do not use `git stash`, and do not commit unless the
> operator explicitly asks. Follow each step and stop on a STOP condition.
>
> **Drift check (run first)**: `git diff --stat 2310c90..HEAD -- package.json registry/react/components/icon-tile.tsx registry/react/components/icon-tile.test.ts`
> If the test command or component API differs from this plan, stop and report.

## Status

- **Priority**: P2
- **Effort**: M
- **Risk**: LOW
- **Depends on**: `050-icon-tile-namespaced-size-variable.md`, `051-icon-tile-disabled-as-child.md`
- **Category**: tests
- **Planned at**: commit `2310c90`, 2026-08-31

## Why this matters

IconTile's API is encoded in Tailwind class output: defaults, supported
variants, size variables, fill behavior, and disabled behavior. It has no
automated coverage, while the repository already uses `node:test` for pure
TypeScript modules. A narrow class-contract test prevents future edits from
silently restoring removed variants or breaking documented CSS variables
without requiring a browser or a DOM test framework.

## Current state

- `registry/react/components/icon-tile.tsx` exports `iconTileVariants`, which
  can be tested as a pure function.
- `package.json:15–40` has no `test` script, though `tsx` is a dev dependency.
- `lib/registry-source-path.test.ts` uses `node:assert/strict` and `node:test`;
  use that syntax and naming convention.
- There is no existing Icon Tile test file.

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Focused test | `pnpm test -- registry/react/components/icon-tile.test.ts` | All Icon Tile tests pass. |
| Targeted lint | `pnpm exec ultracite check package.json registry/react/components/icon-tile.tsx registry/react/components/icon-tile.test.ts` | Exit 0, no fixes applied. |
| Registry build | `pnpm registry:build` | Exit 0. |

The repository policy requires explicit operator authorization before running
tests. If authorization has not been granted, add the tests and run lint/build,
then report the skipped test command rather than substituting another runner.
Do not run a browser or `pnpm typecheck` without authorization.

## Scope

**In scope**:

- `package.json`
- `registry/react/components/icon-tile.test.ts` (new)
- `registry/react/components/icon-tile.tsx` only if an export needed for pure
  testing is not already available

**Out of scope**:

- DOM, screenshot, browser, or end-to-end test infrastructure.
- Tests for consuming blocks and templates.
- Changes to IconTile visual design except those already required by plans 037
  and 038.

## Steps

### Step 1: Restore a minimal repository test command

Add a `test` script using the installed `tsx` runner and Node's built-in test
API. It must discover the existing root `lib/*.test.ts` tests and the new
one-level component test path, without adding a testing dependency. Keep the
existing script ordering and JSON formatting.

**Verify**: `node -e 'const p=require("./package.json"); if (!p.scripts.test) process.exit(1)'` exits 0.

### Step 2: Add pure variant-contract tests

Create `registry/react/components/icon-tile.test.ts`, modeled on
`lib/registry-source-path.test.ts`. Import `assert` from `node:assert/strict`,
`describe`/`it` from `node:test`, and `iconTileVariants` from the sibling
component.

Assert the returned class string for:

1. Defaults: `default` variant, `md` size, `fill=false`, and the namespaced
  `--icon-tile-size` variable from plan 050.
2. `fill=true`: circular radius value.
3. Each supported visual variant: `default`, `outline`, `solid`, and `frame`.
4. All five supported sizes and their tile/icon variable values.
5. The disabled/ARIA-disabled base classes from plan 051.

Use `assert.match` for stable semantic fragments rather than asserting one
monolithic class string whose order can change during harmless formatting.

**Verify**: when test authorization is present, run the focused test command;
all cases pass.

### Step 3: Validate the runner and publication path

Run targeted lint and the registry build. Do not edit generated JSON manually.
If tests are authorized, run the full `pnpm test` too; it must include existing
`lib/*.test.ts` files without regressions.

**Verify**: run the commands in **Commands you will need**, respecting the
test-authorization gate.

## Test plan

- New `node:test` suite as described in step 2.
- Existing test structural exemplar: `lib/registry-source-path.test.ts`.
- No DOM assertions: the tested API is the exported `tailwind-variants`
  function, and mounting Ark components would require new infrastructure.

## Done criteria

- [ ] `package.json` has a reproducible `pnpm test` command.
- [ ] The Icon Tile suite verifies defaults, four variants, five sizes, fill,
  and disabled class contracts.
- [ ] Existing `lib/*.test.ts` tests remain discoverable by the script.
- [ ] Targeted lint and registry build pass.
- [ ] Tests pass if authorization was granted; otherwise the skipped command is
  explicitly reported.

## STOP conditions

- `tsx --test` cannot run existing TypeScript tests without adding a new
  dependency.
- Existing test discovery requires a broader script or a CI convention not
  visible in `package.json`.
- Importing `iconTileVariants` triggers browser-only code or makes Node tests
  fail for reasons unrelated to the component.

## Maintenance notes

When a public variant, size, or CSS variable changes, update this suite in the
same change. Do not turn class-contract tests into brittle full-string
snapshots.
