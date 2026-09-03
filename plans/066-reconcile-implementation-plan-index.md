# Plan 066: Reconcile the implementation-plan index

> **Executor instructions**: Work only in the current checkout. Do not create or switch branches, do not stash, commit, push, or open a PR. Preserve unrelated dirty changes.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: documentation
- **Planned at**: commit `2310c90`, 2026-08-31

## Why this matters

`plans/README.md` is the execution index, but it omits files 017–031, repeats plan number 036 for unrelated work, and its summary mislabels the Questionnaire batch. That makes plan status and dependency ordering unreliable for a future executor.

## Scope

**In scope:** `plans/README.md` only.

**Out of scope:** changing source code, deleting plan files, renumbering historical files, or changing an existing plan's technical scope.

## Steps

1. Inventory every `plans/[0-9][0-9][0-9]-*.md` file and add exactly one index row per plan file.
2. Disambiguate duplicate historical number 036 by using each plan filename in its row title; do not rename either file without a separate migration plan.
3. Preserve recorded statuses when the plan itself has an execution result. Mark unverified plans as `TODO` or `BLOCKED — re-validate source drift`, never `DONE` merely because an old index says so.
4. Correct the summary and dependency notes so they describe the current file set, including plans 041–044 and 064–066.

## Verification

| Purpose | Command | Expected result |
|---|---|---|
| Inventory | `rg --files plans | rg '/[0-9]{3}-.*\\.md$' | sort` | every file has one table row |
| Duplicate check | `rg '^\\| [0-9]{3} \\|' plans/README.md` | only intentional historical duplicate 036 remains, explicitly disambiguated |
| Whitespace | `git diff --check -- plans` | no errors |

## Done criteria

- [ ] The index names every plan file and accurately reports its status.
- [ ] Duplicate historical numbering is visible rather than silently ambiguous.
- [ ] A future executor can derive safe ordering from the index alone.

