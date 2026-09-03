# Plan 047: Show validation feedback in the default Approval Card example

> **Executor instructions**: Work in the current checkout. Do not create or switch branches, do not stash, commit, push, or open a PR. Preserve unrelated dirty files. Follow every step and verification gate. If a STOP condition occurs, report it rather than improvising. The reviewer maintains `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 2310c90..HEAD -- registry/react/examples/approval-card/example-default.tsx content/docs/ai-elements/approval-card.mdx`

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: `plans/045-approval-card-header-title-order.md`
- **Category**: docs
- **Planned at**: commit `2310c90`, 2026-08-31

## Why this matters

The default preview is the principal copy-paste reference for a multi-step approval flow. It defines two required steps but omits `ApprovalCardError` entirely. Questionnaire correctly blocks progression and focuses an invalid control, yet the preview gives no visible explanation of what the user must do. The default should demonstrate the error part that its own Anatomy and API reference promise.

## Current state

- `registry/react/examples/approval-card/example-default.tsx:56–71` maps each item to title, description, choices, and shortcut, then closes the item without an error part.
- `example-default.tsx:113–115` and `136–139` mark `direction` and `timing` as `required: true`.
- `registry/react/components/questionnaire.tsx:549–566` validates items on navigation and prevents submission when required answers are absent.
- `QuestionnaireError` is hidden until the item is invalid (`questionnaire.tsx:1096–1120`); it must be composed inside each item for feedback to appear.
- Existing Approval Card examples, such as `example-plan.tsx:84–101`, place `ApprovalCardError` after `ApprovalCardChoices`. Follow that composition order.

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Example lint | `pnpm exec ultracite check registry/react/examples/approval-card/example-default.tsx` | exits 0 |
| Source scan | `rg -n 'ApprovalCardError|required: true' registry/react/examples/approval-card/example-default.tsx` | shows the import, item error part, and required item definitions |
| Scoped whitespace | `git diff --check -- registry/react/examples/approval-card/example-default.tsx content/docs/ai-elements/approval-card.mdx` | no output, exits 0 |

Do not run a browser, `pnpm test`, or `pnpm typecheck` without separate operator authorization.

## Scope

**In scope:**

- `registry/react/examples/approval-card/example-default.tsx`
- `content/docs/ai-elements/approval-card.mdx` — only if the existing default-preview text needs a concise validation note

**Out of scope:**

- Questionnaire validation source.
- The newly added dedicated invalid-state example.
- Changing question copy, choices, shortcuts, navigation, or toast behavior.

## Steps

### Step 1: Compose the error part in every default-step item

Import `ApprovalCardError` in `example-default.tsx`. Within the existing item map, render `<ApprovalCardError />` immediately after `ApprovalCardChoices`. Render it for every item; the underlying component stays hidden unless that active item is invalid, so optional steps remain unaffected.

Do not add ad-hoc state, custom validation, or duplicate error strings.

**Verify**: run the Example lint and Source scan commands above; both succeed.

### Step 2: Keep the docs accurate

Read the default preview and the `States > Invalid` section in `content/docs/ai-elements/approval-card.mdx`. Add documentation only if the implementation causes a factual mismatch; the existing Invalid state section already covers validation feedback.

**Verify**: the scoped whitespace command exits 0.

## Test plan

No DOM test harness exists. Do not add one. The static composition check ensures the default contains the supported error slot; Questionnaire owns the validation behavior and has already been audited in plan 036.

## Done criteria

- [ ] `ApprovalCardError` is imported and composed after choices in the default map.
- [ ] Required steps display native Questionnaire feedback when invalid.
- [ ] The optional step does not receive custom validation logic.
- [ ] The targeted lint and whitespace checks pass.
- [ ] No files outside Scope changed.

## STOP conditions

- The default example no longer maps `QuestionnaireItem`-compatible Approval Card items.
- Adding the error part requires editing Questionnaire source or changing the public API.
- Existing documentation contradicts the supported `ApprovalCardError` behavior in a way that needs a broader docs rewrite.

## Maintenance notes

The default example is a behavioral reference. When adding required questions to it later, keep an `ApprovalCardError` within each composed item so keyboard and pointer validation remain understandable.
