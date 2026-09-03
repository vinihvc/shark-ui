# Plan 037: Restore lint-clean State examples

> **Executor instructions**: Follow this plan step by step. Do not create a branch, switch branches, run `git stash`, commit, or touch files outside Scope. Preserve unrelated dirty changes.
>
> **Drift check (run first)**: `git diff --stat 2310c90..HEAD -- registry/react/examples/state`
> Stop if the non-default example files materially differ from the excerpts below.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: dx
- **Planned at**: commit `2310c90`, 2026-08-31

## Why this matters

The new State examples are surfaced as source code in documentation. Six files fail the repository’s focused Ultracite check only because they do not end with a newline. That leaves a fresh component addition failing the normal local quality gate despite otherwise valid source.

## Current state

These files end with `export default Example;` without a terminating newline:

- `registry/react/examples/state/example-avatar.tsx:41`
- `registry/react/examples/state/example-avatar-group.tsx:57`
- `registry/react/examples/state/example-background.tsx:32`
- `registry/react/examples/state/example-icon.tsx:62`
- `registry/react/examples/state/example-input-group.tsx:46`
- `registry/react/examples/state/example-outline.tsx:31`

`example-default.tsx` correctly uses the folder-derived `StateDemo` name. The six non-default examples correctly use `Example`, matching `AGENTS.md` section 4; do not rename exports.

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 2310c90..HEAD -- registry/react/examples/state` | No unexpected drift |
| Scoped lint | `pnpm exec ultracite check registry/react/examples/state` | Exit 0 |

Do not run tests, typecheck, a build, or a browser.

## Scope

**In scope**:

- The six listed `registry/react/examples/state/example-*.tsx` files.

**Out of scope**:

- `example-default.tsx` — already conforms.
- Component source, docs, manifests, generated registry JSON, and all other examples.

## Git workflow

- Current checkout only; no new branch, no `git stash`, no commit.

## Steps

### Step 1: Normalize only the final newline

Add a final newline to each of the six files. Do not change imports, markup, names, formatting, or content.

**Verify**: `tail -c 1 registry/react/examples/state/example-avatar.tsx | od -An -t x1` → outputs `0a`; repeat for all six files.

### Step 2: Confirm quality and scope

Run the focused linter and inspect the diff.

**Verify**: `pnpm exec ultracite check registry/react/examples/state && git diff --check -- registry/react/examples/state` → both commands exit 0.

## Test plan

No behavioral code changes. The focused lint check is the regression test.

## Done criteria

- [ ] All six files terminate in `0a`.
- [ ] Every non-default file still defaults to `Example`.
- [ ] `example-default.tsx` is unchanged.
- [ ] Scoped Ultracite check exits 0.

## STOP conditions

- Stop if normalization changes anything beyond final newlines.
- Stop if an example has been concurrently changed to a different export convention.

## Maintenance notes

Use the repository formatter or ensure a final newline whenever adding a docs example. The filename determines its required default-export name.
