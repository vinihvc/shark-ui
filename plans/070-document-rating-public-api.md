# Plan 070: Document `Rating` as the public component

> **Executor instructions**: Work only in the current checkout. Do not create or switch branches, do not stash, commit, push, or open a PR. Preserve unrelated dirty changes. Update this plan's status row in `plans/README.md` only after the in-scope change and its allowed verification are complete.
>
> **Drift check (run first)**: `git diff --stat 2310c90..HEAD -- content/docs/components/rating.mdx`
> If the file changed since this plan was written, compare the current Usage section with the excerpt below. If it no longer has the documented mismatch, STOP and report rather than making an unrelated documentation change.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: —
- **Category**: docs
- **Planned at**: commit `2310c90`, 2026-09-01

## Why this matters

The Rating documentation's primary copy-paste snippet imports and renders `RatingGroup`. The published registry module instead exports `Rating`, `RatingItem`, and `useRating`; it does not export `RatingGroup`. A consumer following the primary Usage section receives an import error before they can use the component. This plan makes the public name consistently `Rating`, matching the implementation, all registry examples, and the Shark Rating reference.

## Current state

- `content/docs/components/rating.mdx` is the public MDX page and contains the broken Usage snippet.
- `registry/react/components/rating.tsx` is the published component source. Its public root export is `Rating`.
- `registry/react/examples/rating/example-default.tsx` is the canonical example and imports `Rating` from the same component module.
- `skills/shark-ui/references/primitives/rating.md:20-40` already records the correct consumer vocabulary: `Rating`, not `RatingGroup`.

Current broken docs excerpt from `content/docs/components/rating.mdx:89-97`:

```tsx
import { RatingGroup } from "@/components/ui/rating";

<RatingGroup />
```

Current public component export from `registry/react/components/rating.tsx:11-22`:

```tsx
export const useRating = useRatingGroupContext;

export const Rating = (props: RatingProps) => {
```

The repository's component convention is that examples import the public wrapper from `@/registry/react/components/<name>`; see `registry/react/examples/rating/example-default.tsx:15-31`. Consumer-facing docs use the installed path `@/components/ui/rating`, while retaining the same exported symbol name.

## Commands you will need

| Purpose | Command | Expected result |
| --- | --- | --- |
| Focused lint | `pnpm exec ultracite check content/docs/components/rating.mdx` | exit 0 |
| Whitespace | `git diff --check` | no errors in the in-scope diff |
| Drift scan | `rg -n "RatingGroup" content/docs/components/rating.mdx` | no matches |

Do not run `pnpm test`, `pnpm typecheck`, or any browser check without separate explicit authorization, per `AGENTS.md`.

## Scope

**In scope:**

- `content/docs/components/rating.mdx`
- `plans/README.md` (status row only, after completion)

**Out of scope:**

- Renaming Ark UI's internal `RatingGroup` import in `registry/react/components/rating.tsx`; that namespace is intentionally used only to disambiguate Ark's primitive from Shark's `Rating`.
- Changing component behavior, exports, examples, registry manifests, or generated `public/r/rating.json`.
- Editing `skills/shark-ui/references/primitives/rating.md`; it already uses the correct public name.

## Git workflow

- Work in the existing branch and checkout. The repository currently has unrelated dirty files; preserve them.
- Do not commit, push, create a branch, or open a PR unless the operator explicitly asks.

## Steps

### Step 1: Correct the Usage import and JSX name

In `content/docs/components/rating.mdx`, replace only the two identifiers in the `## Usage` code fences:

- `import { RatingGroup }` becomes `import { Rating }`.
- `<RatingGroup />` becomes `<Rating />`.

Keep the consumer import path (`@/components/ui/rating`), section order, semicolons, and all other docs content unchanged.

**Verify**: `rg -n "RatingGroup" content/docs/components/rating.mdx` → no matches.

### Step 2: Check the documentation edit

Run the focused lint and whitespace commands from **Commands you will need**. Do not use a formatter because this is a two-identifier surgical edit.

**Verify**: `pnpm exec ultracite check content/docs/components/rating.mdx && git diff --check` → both commands exit 0.

## Test plan

- No automated behavior test is required: this plan changes only two documentation identifiers.
- Confirm the snippet statically matches `Rating` exported by `registry/react/components/rating.tsx`.
- Do not open a docs preview or run the browser without explicit authorization.

## Done criteria

- [ ] The Usage snippet imports `Rating` from `@/components/ui/rating`.
- [ ] The Usage snippet renders `<Rating />`.
- [ ] `rg -n "RatingGroup" content/docs/components/rating.mdx` has no output.
- [ ] Focused Ultracite check and `git diff --check` exit 0.
- [ ] No file outside the in-scope list has been edited by this work.
- [ ] The Plan 070 status row is updated in `plans/README.md`.

## STOP conditions

- The live component no longer exports `Rating`, or it now deliberately exports `RatingGroup` as a documented compatibility alias.
- The Usage section has been structurally replaced and the correct consumer import cannot be determined from the component source and examples.
- Focused lint fails for a pre-existing issue outside the changed lines; report the output rather than reformatting unrelated documentation.

## Maintenance notes

`Rating` is the Shark public component name. `RatingGroup` remains appropriate only as the local alias for Ark UI's underlying primitive. Future public docs, examples, and registry reference material should use `Rating` so consumer snippets remain copyable.
