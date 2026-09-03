# Plan 038: Demonstrate semantic headings in State compositions

> **Executor instructions**: Follow this plan step by step. Do not create a branch, switch branches, run `git stash`, commit, or modify files outside Scope. Preserve unrelated dirty work.
>
> **Drift check (run first)**: `git diff --stat 2310c90..HEAD -- content/docs/components/state.mdx registry/react/examples/state`
> Stop if State’s public parts, the documented `asChild` API, or the examples materially differ from the excerpts below.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: `plans/036-state-copyable-docs.md`
- **Category**: docs
- **Planned at**: commit `2310c90`, 2026-08-31

## Why this matters

`StateTitle` is intentionally generic: it renders an Ark factory `div` and supports `asChild`. The current public Usage snippet and all seven examples use it as plain text, so consumers copy a visually prominent title that is not a heading in the document outline. The owning screen must choose heading level, so document and demonstrate the existing `asChild` escape hatch rather than hard-coding a heading in the component API.

## Current state

- `registry/react/components/state.tsx:71-80` renders `StateTitle` with `ark.div`.
- `content/docs/components/state.mdx:146-153` documents `StateTitle` and states `asChild` is supported.
- `content/docs/components/state.mdx:77` and all State examples use `<StateTitle>…</StateTitle>`.

The repository’s `AGENTS.md` requires `asChild` with one child for host-element composition. The State title should therefore use this exact shape:

```tsx
<StateTitle asChild>
  <h2>No Projects Yet</h2>
</StateTitle>
```

Use `h2` in documentation previews because those states are sections below the docs page’s H1. Do not alter `StateTitle` implementation or change the public prop table.

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 2310c90..HEAD -- content/docs/components/state.mdx registry/react/examples/state` | No unexpected drift |
| Scoped lint | `pnpm exec ultracite check content/docs/components/state.mdx registry/react/examples/state` | Exit 0 |

Do not run tests, typecheck, builds, or a browser.

## Scope

**In scope**:

- `content/docs/components/state.mdx`
- `registry/react/examples/state/example-default.tsx`
- `registry/react/examples/state/example-icon.tsx`
- `registry/react/examples/state/example-outline.tsx`
- `registry/react/examples/state/example-background.tsx`
- `registry/react/examples/state/example-avatar.tsx`
- `registry/react/examples/state/example-avatar-group.tsx`
- `registry/react/examples/state/example-input-group.tsx`

**Out of scope**:

- `registry/react/components/state.tsx` — retain the flexible `ark.div` implementation.
- Manifests, generated artifacts, thumbnails, and non-State docs.

## Git workflow

- Current checkout only; no new branch, no stash, no commit.

## Steps

### Step 1: Teach the semantic pattern in Usage and API reference

In the Usage composition, render the title through `StateTitle asChild` with one `h2` child. Add one concise sentence below the StateTitle API description: consumers should use `asChild` to supply the heading level appropriate to their page hierarchy.

**Verify**: `rg -n 'StateTitle asChild|heading level' content/docs/components/state.mdx` → finds both the Usage pattern and the API guidance.

### Step 2: Apply the same composition to every State example

Wrap each existing `StateTitle` child in the seven example files with `StateTitle asChild` and one `h2`. Preserve each title string, media, buttons, and layout classes. Do not add an `h1`, since the preview is a section of documentation.

**Verify**: `rg -L 'StateTitle asChild' registry/react/examples/state/*.tsx` → prints no files.

### Step 3: Run the allowed focused check

Run the scoped lint command.

**Verify**: `pnpm exec ultracite check content/docs/components/state.mdx registry/react/examples/state` → exit 0.

## Test plan

No new unit tests: this plan documents and exercises an existing rendering capability. The source check verifies every displayed example uses the semantic composition; scoped lint verifies valid TSX and MDX formatting.

## Done criteria

- [ ] Usage and all seven examples render their title through `StateTitle asChild` with one `h2` child.
- [ ] The API reference explains that heading level is consumer-selected.
- [ ] `registry/react/components/state.tsx` is unchanged.
- [ ] Scoped Ultracite check exits 0.
- [ ] No files outside Scope are modified.

## STOP conditions

- Stop if `StateTitle` does not accept `asChild` with a single heading child in this version of Ark UI.
- Stop if satisfying the rule requires changing the State component API.
- Stop if another plan or concurrent edit has already changed the docs/examples semantically.

## Maintenance notes

Future State examples should use the heading level appropriate to their surrounding document; docs previews use `h2`, while a consumer page may need `h1` or `h3`.
