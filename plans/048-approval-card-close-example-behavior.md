# Plan 048: Make the close-button example actually dismiss the Approval Card

> **Executor instructions**: Work in the current checkout. Do not create or switch branches, do not stash, commit, push, or open a PR. Preserve unrelated dirty files. Follow every step and verification gate. If a STOP condition occurs, report it rather than improvising. The reviewer maintains `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 2310c90..HEAD -- registry/react/examples/approval-card/example-with-close-button.tsx content/docs/ai-elements/approval-card.mdx`

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: `plans/045-approval-card-header-title-order.md`
- **Category**: docs
- **Planned at**: commit `2310c90`, 2026-08-31

## Why this matters

The “With close button” documentation claims to demonstrate a dismiss action. Its handler currently only posts a toast claiming the request was closed; the Approval Card remains mounted and actionable. A reference example must demonstrate the state ownership required for a close action, otherwise consumers can copy a misleading implementation.

## Current state

- `registry/react/examples/approval-card/example-with-close-button.tsx:18–43` declares submit, reject, and close handlers. `handleClose` creates a toast but does not update state.
- `example-with-close-button.tsx:45–76` unconditionally renders the card.
- The example already has a client boundary and imports React types. It may add `useState` from React.
- The close control is correctly located in `ApprovalCardAction` with an accessible `aria-label` (`example-with-close-button.tsx:51–60`). Preserve that structure and its `ghost` icon-button appearance.
- `content/docs/ai-elements/approval-card.mdx:153–157` describes the example as a dismiss action.

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Example lint | `pnpm exec ultracite check registry/react/examples/approval-card/example-with-close-button.tsx` | exits 0 |
| Source scan | `rg -n 'useState|isOpen|setIsOpen\(false\)|ApprovalCardAction' registry/react/examples/approval-card/example-with-close-button.tsx` | shows controlled open state, close transition, and retained header action |
| Scoped whitespace | `git diff --check -- registry/react/examples/approval-card/example-with-close-button.tsx content/docs/ai-elements/approval-card.mdx` | no output, exits 0 |

Do not run a browser, `pnpm test`, or `pnpm typecheck` without separate operator authorization.

## Scope

**In scope:**

- `registry/react/examples/approval-card/example-with-close-button.tsx`
- `content/docs/ai-elements/approval-card.mdx`

**Out of scope:**

- Adding a reusable `onClose` prop to `ApprovalCard`.
- Changing reject, submit, or toast component behavior.
- Adding a reopen control inside the example; the example should show dismissal, not invent product policy.

## Steps

### Step 1: Add local open state to the example

Import `useState` and initialize a boolean open state to `true`. In `handleClose`, set it to `false` before creating the existing informational toast. Keep the existing submit and reject handlers unchanged.

### Step 2: Conditionally render the card

Render the `ApprovalCard` only while the local state is open. Keep the outer width wrapper mounted so the preview layout remains stable, but do not render an alternate action or a fake “closed” card. The toast is the existing confirmation that the request was dismissed.

**Verify**: run the Example lint and Source scan commands above; both succeed.

### Step 3: Clarify the ownership model in docs

Update the sentence under `### With close button` to state that the surrounding application owns the open state. Do not imply that `ApprovalCardAction` itself dismisses anything.

**Verify**: run the scoped whitespace command above; it exits 0.

## Test plan

No DOM test harness is configured. Do not add dependencies. The source scan must show the open-state transition and conditional render; a future component-test harness can exercise the click path.

## Done criteria

- [ ] Clicking Close changes the example’s local open state to false.
- [ ] The Approval Card is no longer rendered after closing.
- [ ] The accessible close control remains in `ApprovalCardAction`.
- [ ] Docs state that the consumer controls dismissal.
- [ ] Targeted lint and scoped whitespace checks pass.
- [ ] No files outside Scope changed.

## STOP conditions

- The example is no longer a client component.
- Dismissal requires a new public Approval Card API or a global store.
- The preview host requires the card to remain mounted for unrelated functionality.

## Maintenance notes

Keep close behavior application-owned. `ApprovalCardAction` is a layout slot for a caller-provided control, so product-specific close, minimize, or menu behavior belongs in the caller state rather than the component primitive.
