# Plan 050: Make the documented Icon Tile size variable effective

> **Executor instructions**: Work in the current checkout. Do not create or
> switch branches, do not use `git stash`, and do not commit unless the
> operator explicitly asks. Follow each step and stop on a STOP condition.
>
> **Drift check (run first)**: `git diff --stat 2310c90..HEAD -- registry/react/components/icon-tile.tsx registry/react/examples/icon-tile/example-custom-size.tsx content/docs/components/icon-tile.mdx public/r/icon-tile.json`
> If the source or docs disagree with the excerpts below, stop and report.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `2310c90`, 2026-08-31

## Why this matters

`IconTile` publishes `--icon-tile-size` as its customization API, but the
component reads a different generic variable, `--size`. Consequently, the
custom-size documentation and its example do not resize the tile as promised;
only the child SVG changes. A namespaced public variable also avoids exposing a
generic variable that can collide with styles in a surrounding composition.

## Current state

- `registry/react/components/icon-tile.tsx` is the published source. Its base
  class at line 8 is `size-(--size)`, while size variants at lines 32–54 write
  `--size`.
- `content/docs/components/icon-tile.mdx:102,122` documents
  `--icon-tile-size` as the public tile-size variable.
- `registry/react/examples/icon-tile/example-custom-size.tsx:11` sets
  `--icon-tile-size`, so it currently cannot affect the tile's width and height.
- Shark UI uses semantic tokens and namespaced component variables. Match the
  public API already written in the Icon Tile docs; do not introduce a second
  compatibility variable.

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Targeted lint | `pnpm exec ultracite check registry/react/components/icon-tile.tsx registry/react/examples/icon-tile/example-custom-size.tsx content/docs/components/icon-tile.mdx` | Exit 0, no fixes applied. |
| Publish artifact | `pnpm registry:build` | Exit 0 and regenerate `public/r/icon-tile.json`. |
| Whitespace check | `git diff --check -- registry/react/components/icon-tile.tsx registry/react/examples/icon-tile/example-custom-size.tsx content/docs/components/icon-tile.mdx public/r/icon-tile.json` | No output, exit 0. |

Do not run browser checks, `pnpm test`, or `pnpm typecheck` without explicit
operator authorization.

## Scope

**In scope**:

- `registry/react/components/icon-tile.tsx`
- `registry/react/examples/icon-tile/example-custom-size.tsx`
- `content/docs/components/icon-tile.mdx`
- `public/r/icon-tile.json` (generated only)

**Out of scope**:

- Other components that use a generic `--size` variable.
- New size variants or any visual redesign.
- Registry manifests and unrelated generated JSON files.

## Steps

### Step 1: Align the implementation with its namespaced public CSS variable

In `iconTileVariants`, change the base `size-(--size)` class to read
`--icon-tile-size`. Change each size variant to set
`--icon-tile-size` instead of `--size`, preserving every existing spacing value
and the independent icon-size and inset variables. Do not change the `size`
prop union, the `fill` behavior, or visual variant classes.

**Verify**: `rg -n 'size-\(--size\)|\[--size:' registry/react/components/icon-tile.tsx` returns no matches, while `rg -n 'icon-tile-size' registry/react/components/icon-tile.tsx` returns the base class and all five size variants.

### Step 2: Keep the custom-size example and docs truthful

Keep the second custom-size example expressed with
`--icon-tile-size` and `--icon-tile-icon-size`; it should now resize both
surfaces. Review the surrounding prose and CSS-variable table so they continue
to name exactly those variables. Only change prose if it no longer matches the
result of step 1.

**Verify**: `rg -n -- '--icon-tile-size' registry/react/examples/icon-tile/example-custom-size.tsx content/docs/components/icon-tile.mdx` shows the example, prose, and API table.

### Step 3: Regenerate the public registry output

Run the registry builder once after source changes. Do not manually edit the
JSON. Confirm the embedded source contains `size-(--icon-tile-size)` and has no
`size-(--size)` or `[--size:` entries.

**Verify**: run the three commands in **Commands you will need**; all succeed.

## Test plan

Plan 039 adds automated class-contract coverage after this public variable is
settled. This plan relies on targeted lint and registry generation only.

## Done criteria

- [ ] All five size variants and the base class use `--icon-tile-size`.
- [ ] The custom-size example changes the tile and icon through documented,
  namespaced variables.
- [ ] `public/r/icon-tile.json` is generated from the corrected source.
- [ ] Only in-scope files changed.

## STOP conditions

- The live component already has a different documented size-variable contract.
- The registry builder changes unrelated source files or fails twice.
- Making the variable namespaced would require touching a consumer outside this
  plan's scope.

## Maintenance notes

Future size customization must use the namespaced variables in the CSS table.
Reviewers should reject a return to generic `--size` unless a deliberate,
documented compatibility policy is added.
