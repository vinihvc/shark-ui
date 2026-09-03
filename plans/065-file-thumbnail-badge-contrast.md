# Plan 065: Guarantee AA contrast for FileThumbnail badge labels

> **Executor instructions**: Work only in the current checkout. Do not create or switch branches, do not stash, commit, push, or open a PR. Preserve unrelated dirty changes.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: 064
- **Category**: accessibility
- **Planned at**: commit `2310c90`, 2026-08-31

## Why this matters

The FileThumbnail badge is only 9–11px. Its `info`, `success`, and `warning` variants use white text on semantic fills; with the default token values those combinations are below normal-text WCAG AA contrast. The sheet must stay white in every color mode, per the public component contract.

## Scope

**In scope:** `registry/react/components/file-thumbnail.tsx`, a focused FileThumbnail test file if Plan 064 establishes the base command, `content/docs/components/file-thumbnail.mdx`, `registry/manifest/file-thumbnail.ts`, and generated `public/r/file-thumbnail.json`.

**Out of scope:** changing extension-to-tone mapping, adding icons or interaction, changing the white sheet, or altering global semantic token values.

## Steps

1. Keep `sheet` as `bg-white`; do not add a dark-mode override.
2. Change the label foreground for `info`, `success`, and `warning` to a documented dark semantic foreground that meets AA against their default fills. Preserve the existing `default`, `destructive`, and `primary` pairings unless measurement shows they also fail.
3. Add a small class-contract test when the test command exists. It must cover representative automatic mappings (`png`, `pdf`, `xlsx`, unknown), explicit `tone` precedence, and the immutable white sheet. Avoid snapshots and browser tooling.
4. Update the component documentation only if its tone description implies white text for all colored badges, then regenerate the registry artifact.

## Verification

| Purpose | Command | Expected result |
|---|---|---|
| Focused tests | `pnpm test -- file-thumbnail` | pass, if the runner supports a name/path filter; otherwise run the complete authorized suite |
| Focused lint | `pnpm exec ultracite check registry/react/components/file-thumbnail.tsx <test-path> content/docs/components/file-thumbnail.mdx` | exit 0 |
| Registry artifact | `pnpm registry:build` | emitted JSON matches source |
| Whitespace | `git diff --check` | no errors in in-scope changes |

Do not run tests, browser checks, or typecheck without the separate authorization required by `AGENTS.md`.

## Done criteria

- [ ] All default FileThumbnail badge foreground/background pairs satisfy WCAG AA for normal text.
- [ ] The sheet remains white in light and dark modes.
- [ ] Mapping, explicit-tone precedence, and visual class contract are covered without browser automation.
- [ ] Published registry output is regenerated.

## STOP conditions

- The semantic token system lacks a stable dark foreground compatible with the component's color contract.
- A test requires browser automation or production-only test hooks.
