# Plan 041: Establish a Questionnaire interaction-test baseline

> **Executor instructions**: Work only in the current checkout. Do not create or switch branches, do not stash, commit, push, or open a PR. Preserve unrelated dirty changes. Follow every step and stop on a stated STOP condition.
>
> **Drift check**: inspect `git diff -- registry/react/components/questionnaire.tsx` before editing. The current checkout intentionally contains the multiple-choice hit-area implementation (an inner `Field` click handler that activates its checkbox); preserve it and characterize it rather than reverting it.

## Status

- **Priority**: P1
- **Effort**: M
- **Risk**: MED
- **Depends on**: none
- **Category**: tests
- **Planned at**: commit `2310c90`, 2026-08-31

## Why this matters

`Questionnaire` is a 1,300-line client component that coordinates native form data, controlled state, hotkeys, focus, validation, and two answer-control variants. It has no component tests; the previous multiple-choice hit-area regression therefore reached the registry unchecked. The existing `node:test` files only cover pure `lib` helpers, and `package.json` has no `test` script although `CONTRIBUTING.md` advertises one.

## Current state

- `registry/react/components/questionnaire.tsx` owns the public compound component; its multiple-choice path is at lines 890–1015. The current root div preserves radio `onClick`, while the inner `Field` handles blank-padding clicks for multiple choices. The tests must cover this current behavior before plans 042–044 change it.
- `lib/registry-source-path.test.ts` is the in-repo `node:test` + `node:assert/strict` style exemplar.
- `package.json` has `tsx` but no DOM test environment or `test` script. Do not use a browser or add end-to-end tooling.
- `AGENTS.md` prohibits running tests until the operator explicitly authorizes it. This plan may add tests and the test script, but must not execute them without a separate explicit “run tests” instruction.

## Commands

| Purpose | Command | Expected result |
|---|---|---|
| Source lint | `pnpm exec ultracite check registry/react/components/questionnaire.tsx <new-test-path>` | exit 0 |
| Dependency manifest check | `pnpm install --lockfile-only` | only `package.json` and `pnpm-lock.yaml` change as expected |
| Registry artifact | `pnpm registry:build` | exit 0; questionnaire JSON matches source |
| Tests | `pnpm test` | do **not** run without separate operator authorization |

## Scope

**In scope:** `package.json`, `pnpm-lock.yaml`, one new Questionnaire DOM test file, and only any small test bootstrap file that the selected DOM runner requires.

**Out of scope:** production component behavior, docs, examples, browser tooling, Playwright, and unrelated `lib/*.test.ts` cleanup.

## Steps

1. Add the smallest React DOM test stack compatible with `tsx --test` and React 19. Prefer `jsdom` plus `@testing-library/react` and `@testing-library/user-event`; do not introduce a second test runner. Add a `test` script that discovers existing `*.test.ts` files and the new `*.test.tsx` file.
2. Add a focused test fixture using `Questionnaire`, one `QuestionnaireItem`, and `QuestionnaireChoices`. Cover: clicking blank multiple-choice padding toggles the checkbox; clicking it again clears it; disabled choice remains unchanged; single-choice selection still yields the expected `FormData`; and a cancelled public click does not toggle the multiple choice.
3. Keep tests deterministic: no real timers, network, browser, snapshots, or implementation-only state inspection. Query the rendered checkbox/radio and native `FormData`.
4. Run only the source lint and registry generation commands above. Leave a clear note in the execution report that tests await authorization.

## Done criteria

- [ ] `pnpm test` is a documented executable script but has not been run without authorization.
- [ ] A DOM test covers the full multiple-choice card hit area, disabled behavior, cancellation, and single-choice regression.
- [ ] No production source, docs, or examples change.
- [ ] Allowed lint and registry generation checks pass with no unrelated changes.

## STOP conditions

- Adding DOM tests requires a browser, Playwright, or replacing the project’s existing Node test style.
- The installed React/Ark primitives cannot render in a JSDOM-style environment without modifying production code.
- The current Questionnaire source no longer contains the described multiple-choice hit-area behavior.

## Maintenance notes

Subsequent Questionnaire behavior changes must extend this suite before changing hotkeys, focus, validation, or choice composition. Keep this a component-level suite; pure helper tests remain under `lib/`.
