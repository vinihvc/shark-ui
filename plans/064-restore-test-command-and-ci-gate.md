# Plan 064: Restore the documented test command and CI gate

> **Executor instructions**: Work only in the current checkout. Do not create or switch branches, do not stash, commit, push, or open a PR. Preserve unrelated dirty changes.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: verification
- **Planned at**: commit `2310c90`, 2026-08-31

## Why this matters

`CONTRIBUTING.md` and completed plans 006/010 describe `pnpm test` and a CI test gate, but `package.json` currently has no `test` script and `.github/workflows/build-registry.yml` does not run tests. Six `node:test` suites under `lib/` are therefore not part of the documented or CI contract.

## Scope

**In scope:** `package.json`, `.github/workflows/build-registry.yml`, and the smallest necessary correction in `CONTRIBUTING.md`.

**Out of scope:** changing test assertions, adding a DOM runner, typecheck changes, browser checks, dependency upgrades, or unrelated workflow cleanup.

## Steps

1. Add a `test` script that runs the existing `lib/*.test.ts` files with the already-installed `tsx` runner: `tsx --test lib/*.test.ts`.
2. Add `pnpm test` to the CI job after dependency installation and before registry generation. Keep the existing Node 26 setup, registry build, and typecheck steps unchanged.
3. Reconcile CONTRIBUTING wording so it names the restored command and matches the workflow's actual behavior.

## Verification

| Purpose | Command | Expected result |
|---|---|---|
| Test suite | `pnpm test` | all existing `lib` tests pass |
| Focused lint | `pnpm exec ultracite check package.json CONTRIBUTING.md .github/workflows/build-registry.yml` | exit 0 |
| Whitespace | `git diff --check` | no errors in in-scope changes |

Do not run browser checks or `pnpm typecheck` without explicit operator authorization.

## Done criteria

- [ ] `pnpm test` executes the six existing helper suites.
- [ ] CI runs the same command before generating registry artifacts.
- [ ] Contributor documentation agrees with the executable and CI contracts.

## STOP conditions

- `tsx --test lib/*.test.ts` does not discover the current suites.
- Restoring the command requires changing test implementation or adding packages.

