# Plan 053: Complete Icon Tile anatomy and non-SVG documentation

> **Executor instructions**: Work in the current checkout. Do not create or
> switch branches, do not use `git stash`, and do not commit unless the
> operator explicitly asks. Follow each step and stop on a STOP condition.
>
> **Drift check (run first)**: `git diff --stat 2310c90..HEAD -- content/docs/components/icon-tile.mdx registry/react/examples/icon-tile public/r/icon-tile.json`
> If the docs have already added an Anatomy section or an initials example,
> compare the live version to this plan and stop on conflicting design intent.

## Status

- **Priority**: P3
- **Effort**: S
- **Risk**: LOW
- **Depends on**: `050-icon-tile-namespaced-size-variable.md`
- **Category**: docs
- **Planned at**: commit `2310c90`, 2026-08-31

## Why this matters

The public description says IconTile supports icons, initials, and short text,
but every current example contains an SVG. The page also skips the project’s
standard Anatomy section despite this being a one-part primitive. Adding both
keeps the copy-and-own registry contract inspectable and tells consumers that
non-SVG content is intentional rather than an accidental side effect.

## Current state

- `content/docs/components/icon-tile.mdx:3` promises “icons, initials, and
  short text.”
- The page moves directly from `## Installation` to `## Usage` at lines 8–47;
  it has no `## Anatomy` section.
- Every file in `registry/react/examples/icon-tile/` uses Lucide SVGs.
- `content/docs/components/state.mdx` is the local documentation exemplar for
  a concise text-tree Anatomy section.
- Product documentation is English; keep all new copy in English and preserve
  semantic Tailwind tokens.

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Targeted lint | `pnpm exec ultracite check content/docs/components/icon-tile.mdx registry/react/examples/icon-tile/example-initials.tsx` | Exit 0, no fixes applied. |
| Publish artifact | `pnpm registry:build` | Exit 0; example discovery remains valid. |
| Whitespace check | `git diff --check -- content/docs/components/icon-tile.mdx registry/react/examples/icon-tile/example-initials.tsx public/r/icon-tile.json` | No output, exit 0. |

Do not run browser checks, `pnpm test`, or `pnpm typecheck` without explicit
operator authorization.

## Scope

**In scope**:

- `content/docs/components/icon-tile.mdx`
- `registry/react/examples/icon-tile/example-initials.tsx` (new)
- `public/r/icon-tile.json` only if the registry build changes it

**Out of scope**:

- New IconTile props, variants, or typography scaling behavior.
- Rewriting existing icon, card, item, badge, or link examples.
- Changes to global docs navigation or component thumbnails.

## Steps

### Step 1: Add the single-part anatomy section

Insert `## Anatomy` between Installation and Usage. Use the same fenced text
tree style as `content/docs/components/state.mdx`, with exactly one root:
`IconTile`. Do not invent child slots because IconTile has a single element and
accepts ordinary children.

**Verify**: `rg -n '^## (Installation|Anatomy|Usage)' content/docs/components/icon-tile.mdx` prints the three headings in that order.

### Step 2: Add a focused initials example

Create `registry/react/examples/icon-tile/example-initials.tsx`. Its default
export must be named `Example` because it is not `example-default.tsx`. Render
one or more decorative initial/short-text tiles, use the component's existing
default or an explicit supported variant only when demonstrating a visual
difference, and use semantic classes if any typography adjustment is required.
Keep it static and do not add a client directive.

**Verify**: `rg -n 'export default Example' registry/react/examples/icon-tile/example-initials.tsx` returns one match.

### Step 3: Surface the example in the docs

Add an “Initials and short text” entry in `## Examples`, before composition
examples such as Item and Card. Use `ComponentPreview` with
`componentName="icon-tile"` and `fileName="example-initials"`. Keep the
existing headings in the documented order.

**Verify**: `rg -n 'example-initials|Initials and short text' content/docs/components/icon-tile.mdx` returns both references.

### Step 4: Validate registry discovery

Run targeted lint, then `pnpm registry:build`, then the whitespace check. Do
not manually modify public JSON; the JSON may be unchanged because component
examples are not embedded in the component artifact.

**Verify**: run all commands in **Commands you will need**; all succeed.

## Test plan

This is static documentation and an example-only change. Registry build and
targeted lint verify example discovery and syntax; no new runtime test is
required.

## Done criteria

- [ ] Anatomy is present between Installation and Usage with only `IconTile`.
- [ ] A static, non-SVG example demonstrates initials or short text.
- [ ] The docs preview references that example before composition examples.
- [ ] No API or design behavior changed.

## STOP conditions

- The preview system cannot discover a new Icon Tile example without a
  registry/config change outside scope.
- The implementation cannot render text children as expected without new
  styling or an API change.
- The docs already contain conflicting anatomy terminology.

## Maintenance notes

When the component’s child-content contract changes, keep this example aligned
with the description. Do not add slots to the anatomy unless the component
exports corresponding named parts.
