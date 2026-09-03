# Plan 067: Synchronize the FileThumbnail format catalogue

> **Executor instructions**: Work only in the current checkout. Do not create or switch branches, do not stash, commit, push, or open a PR. Preserve unrelated dirty changes.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: —
- **Category**: documentation
- **Planned at**: commit `2310c90`, 2026-09-01

## Why this matters

The public supported-types list and examples must describe the exact extension map. Stale tone copy or omitted formats makes the component harder to adopt correctly.

## Scope

**In scope:** `content/docs/components/file-thumbnail.mdx` and `registry/react/examples/file-thumbnail/example-spreadsheets.tsx`.

**Out of scope:** adding new file formats, changing tone assignments, or changing the component API.

## Steps

1. Make the image-tone wording agree with the current `primary` mapping.
2. Include `xps` in the fixed-layout document list and use the same category name used by the example heading.
3. Include the mapped `numbers` format in the spreadsheet example.
4. Keep the supported-types section as a list of categories, formats, and tones only—no embedded previews.

## Verification

| Purpose | Command | Expected result |
|---|---|---|
| Focused lint | `pnpm exec ultracite check content/docs/components/file-thumbnail.mdx registry/react/examples/file-thumbnail/example-spreadsheets.tsx` | exit 0 |
| Whitespace | `git diff --check` | no errors in in-scope changes |

## Done criteria

- [ ] Documentation and examples list the currently supported formats and their actual tones.
- [ ] No format mapping changes are introduced.

## STOP conditions

- The source mapping changes concurrently; re-read it before documenting the catalogue.
