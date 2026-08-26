# Plan 010: Honest CI gates (lint, tests, Node 26, pull_request)

> **Executor instructions**: Follow this plan step by step. Run every
> verification command and confirm the expected result before moving to the
> next step. If anything in the "STOP conditions" section occurs, stop and
> report — do not improvise. When done, update the status row for this plan
> in `plans/README.md` — unless a reviewer dispatched you and told you they
> maintain the index.
>
> **Drift check (run first)**: `git diff --stat 1261047..HEAD -- .github/workflows/build-registry.yml package.json CONTRIBUTING.md`
> If any in-scope file changed since this plan was written, compare the
> "Current state" excerpts against the live code before proceeding; on a
> mismatch, treat it as a STOP condition.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: plans/006-exclusive-package-manager-command-tabs.md (for `pnpm test`). If 006 is not done, skip the test CI step and still do lint/Node/`pull_request`/CONTRIBUTING.
- **Category**: dx
- **Planned at**: commit `1261047`, 2026-08-24

## Why this matters

CI (`.github/workflows/build-registry.yml`) runs only `registry:build` and `typecheck` (`typecheck` is `next build`). It never runs Ultracite. `engines.node` is `>=26` but the workflow uses `node-version: "lts/*"`, which can diverge from what maintainers run. The workflow is `on: push` only, so some PR flows never get the gate. `CONTRIBUTING.md` claims Turbo `pnpm dev`, TypeScript-only typecheck, and automatic lint-staged pre-commit — `package.json` has `lint-staged` config but **no** husky/`prepare`/git hook wiring.

This plan makes CI and CONTRIBUTING match reality. It does **not** rename `typecheck` away from `next build` (that would drop Next-generated type checking unless a second job is added carefully).

## Current state

`.github/workflows/build-registry.yml`:

```yaml
name: Build registry

on:
  push:

jobs:
  build:
    runs-on: ubuntu-latest
    env:
      NEXT_PUBLIC_SITE_URL: https://shark.vini.one
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "lts/*"
          cache: "pnpm"
      - name: Install dependencies
        run: pnpm install --frozen-lockfile
      - name: Typecheck and Build
        run: pnpm run registry:build && pnpm run typecheck
```

`package.json`: `"typecheck": "next build"`, `"lint:check": "ultracite check"`, `"engines": { "node": ">=26" }`, `lint-staged` block present, no `test` until plan 006.

`CONTRIBUTING.md` Commands table: `pnpm dev` described as “(Turbo mode)”; `pnpm typecheck` as “Run TypeScript type-check”; Before Submitting: “lint-staged runs automatically on pre-commit”.

Do **not** add husky in this plan (new hook toolchain is a product choice). Document that contributors must run `pnpm lint:fix` themselves.

Keep `NEXT_PUBLIC_SITE_URL: https://shark.vini.one` (plan 001).

Do not switch CI to `pnpm build` (Next + Serwist) in this plan unless you confirm Serwist CLI works in GitHub Actions with the existing `serwist.config.ts` — default is **not** to add Serwist; `typecheck` already runs `next build`. Adding Serwist is a STOP-or-skip: omit it.

## Commands you will need

| Purpose | Command | Expected on success |
|---------|---------|---------------------|
| Lint locally | `pnpm lint:check` | exit 0 |
| Tests (if 006 done) | `pnpm test` | exit 0 |
| YAML sanity | read the workflow; `actionlint` not required |

## Scope

**In scope**:
- `.github/workflows/build-registry.yml`
- `CONTRIBUTING.md`

**Out of scope**:
- Changing `package.json` `typecheck` script to `tsc --noEmit`
- Adding husky / simple-git-hooks
- `pnpm audit` in CI (transitive js-yaml/brace-expansion; separate decision)
- Serwist `pnpm build` job
- README.md (unless you must fix a one-line engines note; default skip)

## Git workflow

Work on the **current branch**. Do not create a new branch, stash, or switch. Touch only in-scope paths. Do not commit unless the operator asks.

## Steps

### Step 1: Workflow triggers, Node, lint, tests

Update `.github/workflows/build-registry.yml`:

1. `on:` both `push` and `pull_request` (to the default branch is enough; if you cannot name it, `pull_request:` with no branch filter is OK).
2. Optional: `concurrency` group `${{ github.workflow }}-${{ github.ref }}` with `cancel-in-progress: true` so push+PR duplicates are cheap.
3. `node-version: "26"` (not `lts/*`).
4. After install, run `pnpm lint:check` as its own step (fail the job on lint errors). If the first CI run fails on **pre-existing** lint across the whole repo, STOP and report rather than `lint:fix` the entire tree in this plan.
5. If `package.json` contains `"test"`, add a step `pnpm test` after lint, before registry:build.
6. Keep `pnpm run registry:build && pnpm run typecheck` (can split into two steps). Keep `NEXT_PUBLIC_SITE_URL`.

**Verify**: `rg 'lts/\\*' .github/workflows/build-registry.yml` → no matches. `rg 'lint:check' .github/workflows/build-registry.yml` → match. `rg 'pull_request' .github/workflows/build-registry.yml` → match. `rg 'node-version: "26"' .github/workflows/build-registry.yml` → match.

### Step 2: Fix CONTRIBUTING.md

- `pnpm dev`: “Start docs site” — **remove** “(Turbo mode)”. Actual script is `next dev`.
- `pnpm typecheck`: “Production Next.js build (includes typecheck). Slow.” — do not claim it is `tsc` only.
- `pnpm test`: add a row if the script exists after 006.
- Before Submitting: remove “lint-staged runs automatically on pre-commit”. Replace with: run `pnpm lint:fix` (and `pnpm test` if present) before opening a PR; CI runs `lint:check`.
- Mention Node 26+ (`engines` in package.json).

**Verify**: `rg 'Turbo mode' CONTRIBUTING.md` → no matches. `rg 'pre-commit' CONTRIBUTING.md` → no claim that hooks run automatically.

### Step 3: Local lint (and tests)

**Verify**: `pnpm lint:check` → exit 0. If 006 landed, `pnpm test` → exit 0.

## Test plan

No new unit tests. The workflow file is the artifact. Do not invent GitHub Actions runs from this environment.

## Done criteria

- [ ] Workflow uses Node 26, `pull_request`, `pnpm lint:check`, and `pnpm test` when the script exists
- [ ] `NEXT_PUBLIC_SITE_URL` still set for registry:build
- [ ] CONTRIBUTING matches scripts (no Turbo, no fake pre-commit, honest typecheck)
- [ ] No files outside the in-scope list are modified
- [ ] `plans/README.md` status row 010 updated

## STOP conditions

- `pnpm lint:check` fails on hundreds of pre-existing files — report; do not mass-format the repo in this plan.
- `pnpm/action-setup` or `checkout` versions in the file are already newer than v4 — keep the newer pins; do not downgrade.
- Default branch is not `main` and you would need extra GitHub knowledge — `pull_request` without branch filter is fine.

## Maintenance notes

- When `typecheck` is eventually split into `tsc --noEmit` plus `next build`, update CONTRIBUTING and keep a full build job.
- Reviewer: first PR after this may fail lint if local never ran Ultracite; that is the point of the gate.
- Transitive `js-yaml` (via `front-matter`) and `brace-expansion` (via Serwist) highs from `pnpm audit` are **not** in this plan; pin/overrides later.
