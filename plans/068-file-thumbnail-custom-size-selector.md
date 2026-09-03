# Plan 068: Correct the FileThumbnail custom-size badge selector

> **Executor instructions**: Work only in the current checkout. Do not create or switch branches, do not stash, commit, push, or open a PR. Preserve unrelated dirty changes.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: —
- **Category**: correctness
- **Planned at**: commit `2310c90`, 2026-09-01

## Why this matters

The larger custom-size example targets a nonexistent `data-slot`, so its intended horizontal badge padding is never applied.

## Scope

**In scope:** `registry/react/examples/file-thumbnail/example-custom-size.tsx`.

**Out of scope:** changing component slot names, changing the documented customization approach, or adding component sizes.

## Steps

1. Replace the malformed second badge attribute selector with the published `file-thumbnail-badge` slot.
2. Preserve the example’s existing sheet dimensions and all other customization values.

## Verification

| Purpose | Command | Expected result |
|---|---|---|
| Focused lint | `pnpm exec ultracite check registry/react/examples/file-thumbnail/example-custom-size.tsx` | exit 0 |
| Whitespace | `git diff --check` | no errors in in-scope changes |

## Done criteria

- [ ] Both custom-size examples address only the documented badge and sheet slots.
- [ ] The larger badge receives its intended horizontal padding class.

## STOP conditions

- The component’s slot contract has changed; synchronize with the source before editing the example.
