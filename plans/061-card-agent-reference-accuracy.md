# Plan 061: Synchronize the Card agent reference with the public API

> **Executor instructions**: Work in the existing checkout. Do not create or switch branches, stash, commit, push, or open a PR. Preserve unrelated dirty files. Follow each step and stop on a STOP condition.
>
> **Drift check (run first)**: `git diff --stat 2310c90..HEAD -- skills/shark-ui/references/primitives/card.md registry/react/components/card.tsx content/docs/components/card.mdx`

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: `plans/060-card-media-video-contract.md`
- **Category**: docs
- **Planned at**: commit `2310c90`, 2026-08-31

## Why this matters

The in-repository Shark skill is a source of implementation guidance. Its Card reference omits `tailwind-variants` from manual dependencies and says the default spacing is `--spacing(4)`, while the public docs and source use `--spacing(6)`. Agents following it can produce incomplete installs and wrong visual density.

## Current state

- `skills/shark-ui/references/primitives/card.md:14–18` lists only `@ark-ui/react` under manual dependencies.
- `skills/shark-ui/references/primitives/card.md:95–97` documents `--spacing(4)`.
- `content/docs/components/card.mdx:31–33` lists `@ark-ui/react tailwind-variants` and lines 143–145 state `--spacing(6)`.
- `registry/react/components/card.tsx:2` imports `tailwind-variants`, and line 11 initializes `--space:--spacing(6)`.

## Commands you will need

| Purpose | Command | Expected result |
| --- | --- | --- |
| Consistency scan | `rg -n 'tailwind-variants|Default spacing is' skills/shark-ui/references/primitives/card.md content/docs/components/card.mdx registry/react/components/card.tsx` | both docs match source |
| Whitespace | `git diff --check` | no output, exit 0 |

## Scope

**In scope:**

- `skills/shark-ui/references/primitives/card.md`

**Out of scope:**

- Changing package dependencies or component implementation.
- Rewriting the public Card documentation.
- Altering any other primitive reference.

## Steps

### Step 1: Correct manual dependencies

Update the manual-install snippet to list both `@ark-ui/react` and `tailwind-variants`, matching the public documentation and component imports.

**Verify**: consistency scan shows both dependency names in the agent reference.

### Step 2: Correct default spacing

Replace only the stale default-spacing value with `--spacing(6)`. Preserve the existing custom-space example and direct-child guidance.

**Verify**: consistency scan shows `--spacing(6)` in both documentation surfaces and source.

## Test plan

This is documentation-only. No test framework is required; the source/doc consistency scan and whitespace check are the regression gates.

## Done criteria

- [ ] Agent and public docs list the dependency used by the component.
- [ ] Agent and public docs match the source default spacing.
- [ ] `git diff --check` passes.
- [ ] No files outside Scope changed, excluding pre-existing unrelated changes.

## STOP conditions

- The Card source changes its dependency or default spacing before this plan begins.
- The agent reference is generated from another source rather than maintained directly.

## Maintenance notes

When changing Card dependencies, variants, or spacing, update both `content/docs/components/card.mdx` and this skill reference in the same change.
