# Plan 049: Restore focused lint cleanliness for Approval Card examples

> **Executor instructions**: Work in the current checkout. Do not create or switch branches, do not stash, commit, push, or open a PR. Preserve unrelated dirty files. Follow every step and verification gate. If a STOP condition occurs, report it rather than improvising. The reviewer maintains `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 2310c90..HEAD -- registry/react/examples/approval-card`

## Status

- **Priority**: P3
- **Effort**: S
- **Risk**: LOW
- **Depends on**: `plans/047-approval-card-default-validation-feedback.md`, `plans/048-approval-card-close-example-behavior.md`
- **Category**: dx
- **Planned at**: commit `2310c90`, 2026-08-31

## Why this matters

The repository has a known global lint backlog, but the Approval Card subset should still be independently clean. Its targeted Ultracite check currently reports formatting errors in six existing examples because they lack a final newline. This small cleanup restores a reliable scoped check for future Approval Card work without touching unrelated backlog.

## Current state

- `pnpm exec ultracite check registry/react/components/approval-card.tsx registry/react/examples/approval-card` reports formatter errors for exactly these files:
  - `example-clarification.tsx`
  - `example-command.tsx`
  - `example-file-edit.tsx`
  - `example-mcp-tool.tsx`
  - `example-permission-scope.tsx`
  - `example-plan.tsx`
- The diagnostic is only an EOF newline addition after `export default Example;`; no code behavior change is requested.
- The component source and newer examples already pass this scoped checker.

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Scoped lint | `pnpm exec ultracite check registry/react/components/approval-card.tsx registry/react/examples/approval-card` | exits 0 |
| Scoped whitespace | `git diff --check -- registry/react/examples/approval-card` | no output, exits 0 |
| Change review | `git diff --word-diff=plain -- registry/react/examples/approval-card` | only final-newline changes in the six listed files, plus the planned changes from 039/040 |

Do not run a browser, `pnpm test`, or `pnpm typecheck` without separate operator authorization.

## Scope

**In scope:**

- `registry/react/examples/approval-card/example-clarification.tsx`
- `registry/react/examples/approval-card/example-command.tsx`
- `registry/react/examples/approval-card/example-file-edit.tsx`
- `registry/react/examples/approval-card/example-mcp-tool.tsx`
- `registry/react/examples/approval-card/example-permission-scope.tsx`
- `registry/react/examples/approval-card/example-plan.tsx`

**Out of scope:**

- Any behavior, copy, imports, or layout in those examples.
- Files outside `registry/react/examples/approval-card`.
- The global Ultracite backlog.

## Steps

### Step 1: Add only the missing final newline to each flagged example

Use the repository formatter or a minimal editor operation to add the final newline after `export default Example;` in each listed file. Do not reformat surrounding code and do not modify `example-default.tsx`, which plan 039 owns.

**Verify**: inspect `git diff --word-diff=plain -- registry/react/examples/approval-card`; only EOF whitespace should be new in the six files.

### Step 2: Confirm the focused component suite is clean

Run the scoped lint command.

**Verify**: it exits 0. Then run the scoped whitespace command; it exits 0 with no output.

## Test plan

Formatting-only plan; no runtime tests are appropriate. The focused lint command is the complete verification gate.

## Done criteria

- [ ] The six named examples contain a final newline and no other formatting churn.
- [ ] The focused Approval Card lint command exits 0.
- [ ] Scoped whitespace check passes.
- [ ] No files outside Scope changed.

## STOP conditions

- Formatter output proposes changes beyond final newlines in a listed example.
- The focused lint command reports a new diagnostic in component source or a file outside Scope.
- A concurrent change has materially altered any listed example.

## Maintenance notes

Keep the focused command in review notes for future Approval Card changes. It provides actionable signal even while the repository-wide lint backlog remains unresolved.
