# Plan 005: Document Drawer `swipeDirection` as Ark logical values

> **Executor instructions**: Follow this plan step by step. Run every
> verification command and confirm the expected result before moving to the
> next step. If anything in the "STOP conditions" section occurs, stop and
> report — do not improvise. When done, update the status row for this plan
> in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 1261047 -- content/docs/components/drawer.mdx registry/react/examples/drawer/example-swipe-directions.tsx`
> If the API table no longer contains `left` / `right` for `swipeDirection`, the finding may already be fixed — STOP and mark REJECTED.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: docs
- **Planned at**: commit `1261047`, 2026-08-24

## Why this matters

`content/docs/components/drawer.mdx` documents `swipeDirection` as `"up" | "down" | "left" | "right"`. The living example `registry/react/examples/drawer/example-swipe-directions.tsx` passes `start` and `end`. Ark/Zag types are `"up" | "down" | "start" | "end"`. Physical `left`/`right` are resolved onto `data-swipe-direction` for CSS, not the React prop. Developers copying the API table get TypeScript errors or miss RTL-safe APIs. Stale docs are worse than missing docs.

## Current state

`content/docs/components/drawer.mdx` around line 198:

```
| `swipeDirection` | `"up" \| "down" \| "left" \| "right"` | `"down"` |
```

`registry/react/examples/drawer/example-swipe-directions.tsx:40-54` uses `swipeDirection="start"` and `swipeDirection="end"` (buttons still labeled Left/Right for the LTR demo).

Do not change the example unless the docs sentence needs a pointer to it. Do not change `registry/react/components/drawer.tsx` unless the docs were matching a wrapper that still uses physical names (they should not).

Docs language is English (PRODUCT.md). Keep the API table format (Prop / Type / Default).

## Commands you will need

| Purpose | Command | Expected on success |
|---------|---------|---------------------|
| Old API gone | `rg 'swipeDirection.*left' content/docs/components/drawer.mdx` | no matches |
| New API present | `rg 'start' content/docs/components/drawer.mdx` | match near swipeDirection |

## Scope

**In scope**:
- `content/docs/components/drawer.mdx`

**Out of scope**:
- Drawer component implementation
- Example file labels (Left/Right in LTR are fine)
- Other overlay docs (Sheet, etc.) unless you find the same table copied — if you do, you may fix identical `swipeDirection` rows in other MDX **only if** those components actually use Ark `start`/`end`. If unsure, STOP and report; do not guess.

## Git workflow

- Stay on `main`. Do not branch, stash, switch, commit, or push unless asked.

## Steps

### Step 1: Fix the API table and add one clarifying sentence

Change the Type cell to `` `"up" \| "down" \| "start" \| "end"` ``. Keep default `"down"`.

Immediately under the Drawer API table (or as a one-line note in the `swipeDirection` row’s surrounding prose if a note already exists), add one short sentence: the prop uses logical `start`/`end`; the DOM `data-swipe-direction` attribute is resolved to physical `left`/`right` for styling. Do not write a long RTL essay.

**Verify**:
- `rg 'left.*right' content/docs/components/drawer.mdx` — if matches remain, they must be in that clarifying sentence about `data-swipe-direction`, not in the Type cell
- Type cell contains `start` and `end`, not `left`/`right`

## Test plan

No test runner. Grep + the example file already demonstrates the API. Do not add MDX tests.

## Done criteria

- [ ] API table Type is `"up" | "down" | "start" | "end"`
- [ ] One sentence explains logical prop vs physical data attribute
- [ ] Example file unchanged unless required
- [ ] `plans/README.md` row 005 is DONE

## STOP conditions

- Component wrapper re-exports a different union than Zag (read `registry/react/components/drawer.tsx` `swipeDirection` typing if present). If the wrapper still types `left`/`right`, STOP — docs would then match the wrapper and the example would be the bug (out of scope to change examples + types together without a new plan).

## Maintenance notes

- AGENTS.md RTL rules: prefer `start`/`end` in new examples; this docs fix aligns the table with that.
- Reviewer: ensure we did not claim `left`/`right` are invalid on the data attribute.
