# Plan 080: Document Shark theme font variables

> **Executor instructions**: Follow this plan in order. Do not run tests,
> typecheck, builds, or a browser without explicit operator authorization.
> When complete, update only this plan's row in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 2310c90..HEAD -- content/docs/(root)/styling.mdx registry/manifest/style.ts`
> If the font-token contract or the commented section differs from the state
> below, stop and report rather than guessing a documentation API.

## Status

- **Priority**: P3
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: docs
- **Planned at**: commit `2310c90`, 2026-09-01

## Why this matters

The published style preset defines `--font-sans`, `--font-heading`, and
`--font-mono`, but the only Font Variables documentation is hidden in an MDX
comment marked TODO. Consumers cannot discover all supported font tokens.

## Current state

- `content/docs/(root)/styling.mdx` is the public styling guide.
- `registry/manifest/style.ts` is the published preset source of truth.

`registry/manifest/style.ts:109-113` declares these tokens:

```ts
theme: {
  "font-heading": "var(--font-heading, ui-sans-serif, system-ui, sans-serif)",
  "font-mono": "var(--font-mono, ui-monospace, monospace)",
  "font-sans": "var(--font-sans, ui-sans-serif, system-ui, sans-serif)",
}
```

`content/docs/(root)/styling.mdx:233-254` hides a partial `## Font Variables`
section in `{/* TODO: work on font-heading ... */}`. Its old snippet covers
only `--font-sans`.

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Verify heading | `rg -n '^## Font Variables$' content/docs/(root)/styling.mdx` | one visible heading |
| Verify tokens | `rg -n -- '--font-(sans|heading|mono)' content/docs/(root)/styling.mdx` | all three tokens appear |
| Verify TODO absent | `rg -n 'TODO: work on font-heading' content/docs/(root)/styling.mdx` | no output, exit 1 |
| Verify whitespace | `git diff --check -- content/docs/(root)/styling.mdx` | no output, exit 0 |

## Scope

**In scope**:

- `content/docs/(root)/styling.mdx`
- `plans/README.md` (this plan's status only)

**Out of scope**:

- `registry/manifest/style.ts`
- runtime font configuration, token values, dependencies, and theme CSS

## Git workflow

- Use the existing working tree. Do not branch, stash, switch branches, or
  commit unless explicitly directed.
- Do not reformat the preceding long CSS block.

## Steps

### Step 1: Publish a complete Font Variables section

Remove the MDX comment hiding the section in
`content/docs/(root)/styling.mdx`. Write a concise visible section that
explains `--font-sans` for body text, `--font-heading` for headings using
`font-heading`, and `--font-mono` for code. State that the preset includes
fallbacks and consumers may define the CSS variables with their chosen font
tooling.

Keep a small `next/font` example only if it accurately assigns at least
`--font-sans` and `--font-heading`; otherwise use generic CSS. Do not present
Next.js as required.

**Verify**: run the heading and token scans from the command table.

### Step 2: Remove provisional copy and validate the patch

Remove `TODO: work on font-heading` while preserving the order and text of the
following Token convention section. Update the plan status after verification.

**Verify**: run the TODO and whitespace checks from the command table.

## Test plan

This is static documentation. The heading, token, and TODO scans plus
`git diff --check` are sufficient; do not run tests, typecheck, build, or a
browser without explicit authorization.

## Done criteria

- [ ] Font Variables is visible rather than commented out.
- [ ] It documents all three published font tokens.
- [ ] It does not require Next.js as the font integration.
- [ ] The TODO is absent.
- [ ] `git diff --check -- content/docs/(root)/styling.mdx` passes.
- [ ] Plan 080 is marked DONE in `plans/README.md`.

## STOP conditions

- The style manifest no longer exposes all three font tokens.
- Accurate documentation needs a preset or dependency change.
- No compact, correct font example can be written without a product decision.

## Maintenance notes

Keep this section synchronized with `cssVars.theme` whenever the published
style manifest changes.
