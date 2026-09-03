# Plan 069: Constrain FileThumbnail format-map tone keys

> **Executor instructions**: Work only in the current checkout. Do not create or switch branches, do not stash, commit, push, or open a PR. Preserve unrelated dirty changes.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: —
- **Category**: correctness
- **Planned at**: commit `2310c90`, 2026-09-01

## Why this matters

`FORMATS_BY_TONE` currently accepts arbitrary object keys and recovers the tone type with an assertion while flattening. A misspelled category could silently produce an invalid runtime class.

## Scope

**In scope:** `registry/react/components/file-thumbnail.tsx` and its focused class-contract test.

**Out of scope:** changing the supported extensions, changing the public tone union, or exposing the internal mapping as public API.

## Steps

1. Constrain `FORMATS_BY_TONE` with `satisfies Partial<Record<FileThumbnailTone, readonly string[]>>` while preserving literal extension values.
2. Retain the existing normalized lookup and fallback behavior.
3. Keep representative automatic mapping, explicit-tone precedence, and white-sheet assertions aligned with the final class contract.

## Verification

| Purpose | Command | Expected result |
|---|---|---|
| Focused lint | `pnpm exec ultracite check registry/react/components/file-thumbnail.tsx test/file-thumbnail.test.tsx` | exit 0 |
| Registry artifact | `pnpm registry:build` | emitted JSON matches source |
| Whitespace | `git diff --check` | no errors in in-scope changes |

Do not run tests, browser checks, or typecheck without the separate authorization required by `AGENTS.md`.

## Done criteria

- [ ] Invalid format-map tone keys fail type checking instead of reaching runtime.
- [ ] Existing normalization, fallback, and explicit-tone behavior are preserved.
- [ ] Registry output is regenerated.

## STOP conditions

- The inferred `FileThumbnailTone` type cannot be used to constrain the map without creating a circular declaration.
