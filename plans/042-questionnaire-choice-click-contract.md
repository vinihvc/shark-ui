# Plan 042: Keep `QuestionnaireChoice` click callbacks rooted on the choice

> **Executor instructions**: Work only in the current checkout. Do not create or switch branches, do not stash, commit, push, or open a PR. Preserve unrelated dirty changes.
>
> **Drift check**: `git diff --stat 2310c90..HEAD -- registry/react/components/questionnaire.tsx public/r/questionnaire.json` plus unstaged diff review must match the excerpts below; otherwise STOP.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: `plans/041-questionnaire-interaction-test-baseline.md`
- **Category**: bug
- **Planned at**: commit `2310c90`, 2026-08-31

## Why this matters

`QuestionnaireChoiceProps` inherits a div event contract, but the current multiple-choice path forwards `onClick` to its inner `Field`; radios retain it on the outer choice element. Consumers therefore receive different `currentTarget` values depending on `multiple`, and cancellation behavior is coupled to implementation layout. The full-card hit area must remain functional without changing that public contract.

## Current state

- `registry/react/components/questionnaire.tsx:890–940` destructures `onClick`, invokes it from `handleClick`, and conditionally builds `choiceProps`.
- `registry/react/components/questionnaire.tsx:944–989` spreads `choiceProps` on the root `ark.div` for radios, but assigns `handleClick` to the inner `Field` for checkboxes.
- `QuestionnaireChoice` must keep `data-slot="questionnaire-choice"`, checked/disabled state attributes, `Field`/`FieldLabel` wiring, shortcut padding, and the prior full-card padding behavior.

## Commands

| Purpose | Command | Expected result |
|---|---|---|
| Focused tests | `pnpm test -- questionnaire` | do **not** run without separate operator authorization |
| Lint | `pnpm exec ultracite check registry/react/components/questionnaire.tsx <questionnaire-test-path>` | exit 0 |
| Registry | `pnpm registry:build` | exit 0; JSON source parity |
| Whitespace | `git diff --check` | no output |

## Scope

**In scope:** `registry/react/components/questionnaire.tsx`, the Questionnaire test file from plan 037, and generated `public/r/questionnaire.json`.

**Out of scope:** redesigning Field, Checkbox, RadioGroup, `QuestionnaireChoiceProps`, or consumer examples.

## Steps

1. Add a characterization test asserting the callback receives the root `[data-slot="questionnaire-choice"]` as `currentTarget` for both single and multiple choices; assert a cancelled click from the root contract prevents the padding-triggered toggle.
2. Refactor the multiple-choice hit-area implementation so the public `onClick` remains attached to the outer choice root exactly once per user click. Keep the inner handler private and limited to blank Field padding; do not forward the public callback from the inner `Field`.
3. Preserve native click behavior for the checkbox and label. The blank padding route must toggle only once and disabled choices must not toggle.
4. Regenerate only the published Questionnaire artifact and run the allowed checks.

## Done criteria

- [ ] Both variants expose the same root `currentTarget` to `onClick`.
- [ ] `preventDefault()` prevents the padding route from changing selection.
- [ ] Checkbox, label, and padding each cause at most one value transition.
- [ ] Allowed checks pass; tests await authorization.

## STOP conditions

- The only way to preserve the root event contract is an interactive wrapper that violates the repository accessibility lint rules.
- Ark UI emits an unavoidable second root click for a native label activation; report the event sequence before choosing a workaround.
- The fixture from plan 037 cannot distinguish one transition from two.

## Maintenance notes

Review future choice hit-area changes against both the DOM event contract and value-transition count; visual-card layout must not leak into the public event API.
