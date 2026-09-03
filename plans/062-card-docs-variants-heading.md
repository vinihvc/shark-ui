# Plan 062: Put CardMedia under the standard Variants section

> **Executor instructions**: Work in the existing checkout. Do not create or switch branches, stash, commit, push, or open a PR. Preserve unrelated dirty files. Follow each step and stop on a STOP condition.
>
> **Drift check (run first)**: `git diff --stat 2310c90..HEAD -- content/docs/components/card.mdx`

## Status

- **Priority**: P3
- **Effort**: S
- **Risk**: LOW
- **Depends on**: `plans/060-card-media-video-contract.md`
- **Category**: docs
- **Planned at**: commit `2310c90`, 2026-08-31

## Why this matters

Component documentation follows a predictable order: Variants precede Examples. CardMedia variants are currently introduced under `## Card media`, which makes the page an exception and hides the API axis from readers and future maintainers scanning standardized pages.

## Current state

- `content/docs/components/card.mdx:116` begins the variant material with `## Card media`; its `Default`, `Icon`, and `Image` subsections are at lines 120, 126, and 133.
- `AGENTS.md:135–145` requires a `## Variants` section for visual axes before `## Examples`.
- The current previews and copy must remain intact; this plan changes hierarchy only.

## Commands you will need

| Purpose | Command | Expected result |
| --- | --- | --- |
| Heading scan | `rg -n '^## (Variants|Card media|Examples)$|^### (Default|Icon|Image)$' content/docs/components/card.mdx` | one `Variants` section before `Examples`; no `Card media` heading |
| Focused lint | `pnpm lint:check -- content/docs/components/card.mdx` | exit 0 |
| Whitespace | `git diff --check` | no output, exit 0 |

## Scope

**In scope:**

- `content/docs/components/card.mdx`

**Out of scope:**

- Changing preview filenames or example code.
- Reordering Installation, Anatomy, Usage, or API Reference.
- Adding variants to the Card implementation.

## Steps

### Step 1: Rename the section without changing its content

Replace `## Card media` with `## Variants`. Keep the existing introduction and `Default`, `Icon`, and `Image` subsections in the same order immediately before `## Examples`. Remove accidental surplus blank lines if the MDX formatter flags them.

**Verify**: run the heading scan and focused lint commands.

## Test plan

MDX hierarchy is the behavior under test. Use the heading scan and lint; do not introduce browser checks.

## Done criteria

- [ ] CardMedia variants are under exactly one `## Variants` heading.
- [ ] `## Examples` follows the variants section.
- [ ] Preview references and prose are unchanged except for structural wording required by Plan 040.
- [ ] Focused lint and `git diff --check` pass.

## STOP conditions

- The documentation system treats `Variants` as a reserved generated heading.
- Another in-progress change has moved the same section and makes this plan's hierarchy ambiguous.

## Maintenance notes

Future Card visual axes belong as `###` subsections under this same `## Variants` heading unless they warrant a separately named axis per the documentation convention.
