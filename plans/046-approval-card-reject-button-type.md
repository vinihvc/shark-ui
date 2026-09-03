# Plan 046: Make Approval Card rejection non-submitting by contract

> **Executor instructions**: Work in the current checkout. Do not create or switch branches, do not stash, commit, push, or open a PR. Preserve unrelated dirty files. Follow every step and verification gate. If a STOP condition occurs, report it rather than improvising. The reviewer maintains `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 2310c90..HEAD -- registry/react/components/approval-card.tsx public/r/approval-card.json`

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: `plans/045-approval-card-header-title-order.md`
- **Category**: bug
- **Planned at**: commit `2310c90`, 2026-08-31

## Why this matters

Rejecting an approval request must never also submit its questionnaire. `ApprovalCardReject` currently accepts every `Button` prop, including `type`. The shared `Button` intentionally allows callers to override its default type, so a caller who passes `type="submit"` can run `onReject` and then trigger the form path that calls `onApprove`. The public API should make this invalid at the type level and force the rendered control to remain a non-submitting button.

## Current state

- `registry/react/components/approval-card.tsx:307–331` defines `ApprovalCardReject` with `React.ComponentProps<typeof Button>`, spreads `rest` to `<Button>`, and invokes the rejection callback on click.
- `registry/react/components/button.tsx:143–155` sets `type="button"` before `{...rest}`. This is intentional for normal buttons, but it means a supplied `type` can override the default.
- `ApprovalCard` invokes `onApprove` after a valid form submit when the consumer has not prevented the event (`approval-card.tsx:78–86`).
- Questionnaire action wrappers already omit the `type` prop internally; follow that pattern without changing the shared Button API.

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Source lint | `pnpm exec ultracite check registry/react/components/approval-card.tsx` | exits 0 |
| Contract scan | `rg -n 'ApprovalCardRejectProps|Omit<React.ComponentProps<typeof Button>, "type">|type="button"' registry/react/components/approval-card.tsx` | shows an omitted `type` prop and an explicit non-submitting reject button |
| Registry generation | `pnpm registry:build` | exits 0 |
| Scoped whitespace | `git diff --check -- registry/react/components/approval-card.tsx public/r/approval-card.json` | no output, exits 0 |

Do not run a browser, `pnpm test`, or `pnpm typecheck` without separate operator authorization.

## Scope

**In scope:**

- `registry/react/components/approval-card.tsx`
- `public/r/approval-card.json` — generated only
- `content/docs/ai-elements/approval-card.mdx` — only if API wording needs to state the non-submitting contract

**Out of scope:**

- `registry/react/components/button.tsx` — its caller-overridable `type` behavior is required by ordinary form examples.
- `QuestionnaireSubmit`, `QuestionnaireNext`, and `QuestionnairePrevious`.
- New test infrastructure.

## Steps

### Step 1: Narrow the Reject prop type

Introduce a local `ApprovalCardRejectProps` type that omits `"type"` from `React.ComponentProps<typeof Button>`. Use it as the parameter type for `ApprovalCardReject`.

### Step 2: Force the rendered Reject button to `type="button"`

Pass `type="button"` to the wrapped `Button` after any forwarded props so the component’s runtime behavior matches the narrowed public type. Preserve the existing callback order: invoke the caller’s `onClick`, respect `event.preventDefault()`, then invoke `onReject`.

**Verify**: run the Source lint and Contract scan commands above; both succeed.

### Step 3: Update generated output and public API wording if necessary

Regenerate `public/r/approval-card.json`. The current API table does not list a `type` prop for `ApprovalCardReject`; keep it that way. Add one concise sentence only if the current prose could imply Reject may submit.

**Verify**: `pnpm registry:build` exits 0, then run the Registry sync command from plan 037 and the scoped whitespace command above.

## Test plan

No DOM test harness is configured. Do not add dependencies. Source-level characterization is sufficient for this narrow API boundary: the prop type must omit `type`, and the wrapped Button must receive `type="button"` after forwarded props.

## Done criteria

- [ ] TypeScript consumers cannot pass `type` to `ApprovalCardReject`.
- [ ] Reject renders a button type regardless of forwarded props.
- [ ] `onClick` cancellation and `onReject` semantics remain unchanged.
- [ ] Registry JSON exactly matches source.
- [ ] Scoped lint and whitespace checks pass.
- [ ] No files outside Scope changed.

## STOP conditions

- The shared `Button` no longer permits `type` overrides.
- Preserving the public API requires accepting a submitting Reject control.
- Generation changes unrelated registry files not already dirty.

## Maintenance notes

Treat Reject as a semantic action, not a generic Button alias. Future variants may change visual treatment, but must retain the non-submitting type and callback-cancellation behavior.
