# Plan 044: Correct Questionnaire reset-event typing

> **Executor instructions**: Work only in the current checkout. Do not create or switch branches, do not stash, commit, push, or open a PR. Preserve unrelated dirty changes.
>
> **Drift check**: `git diff --stat 2310c90..HEAD -- registry/react/components/questionnaire.tsx registry/react/examples/questionnaire content/docs/components/questionnaire.mdx public/r/questionnaire.json` plus unstaged diff review must match the excerpts below; otherwise STOP.

## Status

- **Priority**: P3
- **Effort**: S
- **Risk**: LOW
- **Depends on**: `plans/041-questionnaire-interaction-test-baseline.md`
- **Category**: dx
- **Planned at**: commit `2310c90`, 2026-08-31

## Why this matters

The component’s reset handler is typed as `React.SubmitEvent`, even though React invokes `onReset` with a form event. The handler currently only uses common event methods, so it works at runtime, but the wrong type invites future use of submit-only semantics and obscures the actual inherited form contract.

## Current state

- `registry/react/components/questionnaire.tsx:549–567` handles submit with `React.SubmitEvent<HTMLFormElement>`.
- `registry/react/components/questionnaire.tsx:578–596` handles reset but also declares `React.SubmitEvent<HTMLFormElement>` before passing it to the inherited `onReset` prop.
- Questionnaire examples use `React.SubmitEvent` only for submit handlers. No reset example or docs contract exists.

## Commands

| Purpose | Command | Expected result |
|---|---|---|
| Lint | `pnpm exec ultracite check registry/react/components/questionnaire.tsx <questionnaire-test-path>` | exit 0 |
| Focused tests | `pnpm test -- questionnaire` | do **not** run without separate operator authorization |
| Registry | `pnpm registry:build` | exit 0; JSON source parity |
| Whitespace | `git diff --check` | no output |

## Scope

**In scope:** Questionnaire source, its focused test, and generated `public/r/questionnaire.json`.

**Out of scope:** changing the public `onSubmit` type, rewriting examples, or changing generic form primitives.

## Steps

1. Change only `handleReset` to the React form-reset event type accepted by the underlying form’s `onReset` callback; leave `handleSubmit` unchanged.
2. Add a focused test verifying `form.reset()` restores `defaultItem`/`defaultValue`, clears invalid and skipped state, and invokes a consumer `onReset` handler that can cancel the reset with `preventDefault()`.
3. Regenerate the registry item and run allowed lint/whitespace checks. Do not execute tests without the separate authorization named above.

## Done criteria

- [ ] Reset handler type matches the form `onReset` event contract.
- [ ] Cancellation and default restoration are characterized in the Questionnaire test suite.
- [ ] Generated registry source matches the component source.
- [ ] Allowed checks pass; tests await authorization.

## STOP conditions

- React’s current type definitions expose a more specific reset-event type that conflicts with the form prop; use the prop-derived type instead of casting.
- Reset behavior differs from the stated default restoration flow in the current dirty tree.
- The test requires changing production behavior outside this plan’s scope.

## Maintenance notes

Keep native form-event handlers typed from the underlying prop when possible. Do not use `SubmitEvent` as a catch-all form event type.
