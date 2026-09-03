# Plan 057: Use the card foreground token throughout Card

> **Executor instructions**: Work in the existing checkout. Do not create or switch branches, stash, commit, push, or open a PR. Preserve unrelated dirty files. Follow each step and stop on a STOP condition.
>
> **Drift check (run first)**: `git diff --stat 2310c90..HEAD -- registry/react/components/card.tsx public/r/card.json`

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `2310c90`, 2026-08-31

## Why this matters

`Card` is a reusable themed surface. Its root and title currently force the generic foreground token even though Shark defines a distinct `card-foreground` token. Consumers who customize card surfaces independently cannot obtain the documented matching foreground pair.

## Current state

- `registry/react/components/card.tsx` is the copyable registry source. Its root currently contains `"bg-card"` and `"text-foreground"` (lines 15–16), while `CardTitle` contains `"text-foreground"` (line 109).
- `styles/globals.css:26–27` exposes both `card` and `card-foreground`; `DESIGN.md` declares Cards use the semantic card surface and matching foreground.
- Other copyable surfaces establish the expected pattern: `registry/react/components/attachment.tsx:20` uses `bg-card text-card-foreground`.

## Commands you will need

| Purpose | Command | Expected result |
| --- | --- | --- |
| Focused lint | `pnpm lint:check -- registry/react/components/card.tsx` | exit 0 |
| Registry generation | `pnpm registry:build` | exit 0; only intended Card JSON changes beyond pre-existing changes |
| Artifact parity | `node -e 'const fs=require("node:fs");const j=JSON.parse(fs.readFileSync("public/r/card.json","utf8"));if(j.files[0].content!==fs.readFileSync("registry/react/components/card.tsx","utf8"))process.exit(1)'` | exit 0 |
| Whitespace | `git diff --check` | no output, exit 0 |

Do not run `pnpm test`, `pnpm typecheck`, or a browser without separate authorization.

## Scope

**In scope:**

- `registry/react/components/card.tsx`
- `public/r/card.json` (generated only)

**Out of scope:**

- Changing the values of global theme tokens.
- Changing color classes in unrelated Card consumers.
- Altering heading level, spacing, or card variants.

## Steps

### Step 1: Use the semantic foreground pair

Replace the generic foreground class on `Card` and `CardTitle` with `text-card-foreground`. Preserve all other classes, DOM structure, `data-slot` values, and `asChild` behavior.

**Verify**: `rg -n 'text-foreground|text-card-foreground' registry/react/components/card.tsx` shows `text-card-foreground` on the root and title, with no `text-foreground` remaining in this component.

### Step 2: Regenerate the published source

Run the registry generator; do not hand-edit `public/r/card.json`.

**Verify**: run the generation and artifact-parity commands above.

## Test plan

No DOM component-test harness is configured. Characterize this styling contract with the focused source scan in Step 1 and generated-artifact parity; do not introduce a test dependency for this one-token correction.

## Done criteria

- [ ] Card root and CardTitle use `text-card-foreground`.
- [ ] `public/r/card.json` exactly contains the updated source.
- [ ] Focused lint and `git diff --check` pass.
- [ ] No files outside Scope changed, excluding pre-existing unrelated changes.

## STOP conditions

- `card-foreground` no longer exists in the active theme token contract.
- The generator changes unrelated registry artifacts that are not already dirty.
- The current source differs materially from the excerpts above.

## Maintenance notes

Future card parts should inherit the root foreground unless they intentionally use a more specific semantic token. Reviewers should reject reintroduction of generic `text-foreground` inside the Card primitive without a documented reason.
