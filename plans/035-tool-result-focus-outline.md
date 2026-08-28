# Plan 035: Preserve high-contrast focus behavior on Tool Result triggers

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving to the next step. If anything in the STOP conditions occurs, stop and report — do not improvise. Do not update `plans/README.md`; the reviewer maintains the index.
>
> **Drift check (run first)**: `git diff --stat 891952a..HEAD -- registry/react/components/tool-result.tsx registry/manifest/tool-result.ts public/r/tool-result.json`
>
> `tool-result.tsx` was untracked when this plan was written. If it is absent from the executor checkout, STOP: do not recreate an uncommitted component from this plan.

## Status

- **Priority**: P3
- **Effort**: S
- **Risk**: LOW
- **Depends on**: `plans/032-tool-result-static-rows.md`
- **Category**: docs
- **Planned at**: commit `891952a`, 2026-08-27

## Why this matters

The Tool Result trigger currently suppresses the native outline with `outline-none`, then relies on a custom ring. The registry uses `outline-hidden` in several interactive components where a visual custom ring is needed, because it preserves an outline path for forced-colors environments. Make this one class-level correction while preserving the existing focus ring and no other visual changes.

## Current state

- `registry/react/components/tool-result.tsx:101–103` has `outline-none` and the custom `focus-visible:ring-2` sequence.
- `registry/react/components/item.tsx:52` and `registry/react/components/listbox.tsx:77` demonstrate the repository's `outline-hidden` convention for accessible interactive controls.
- The design system requires generous keyboard focus indicators. Do not redesign ring geometry in this small accessibility correction.

## Commands you will need

| Purpose | Command | Expected on success |
|---|---|---|
| Source scan | `rg -n 'outline-none|outline-hidden|focus-visible:ring' registry/react/components/tool-result.tsx` | `outline-hidden` appears on the interactive trigger; no `outline-none` remains there |
| Generated registry | `pnpm registry:build` | exit 0 |
| Whitespace | `git diff --check` | no output, exit 0 |

Do not run `pnpm test`, `pnpm typecheck`, or a browser without separate operator authorization.

## Scope

**In scope:**

- `registry/react/components/tool-result.tsx`
- `public/r/tool-result.json` (generated only)

**Out of scope:**

- Ring width, color, offsets, hover treatment, or trigger dimensions.
- Any global Tailwind configuration.
- Other components that happen to use `outline-none`.

## Git workflow

- Work in the current checkout. Do not create or switch branches, do not stash, commit, push, or open a PR.
- Preserve unrelated dirty changes.

## Steps

### Step 1: Use the accessible outline utility on the interactive trigger

Replace only `outline-none` in the shared interactive `ToolResultTrigger` class list with `outline-hidden`. If plan 032 split static and collapsible trigger paths, apply it only to the focusable collapsible trigger; a static row must not acquire focus styling or `tabIndex`.

**Verify**: Run the Source scan command above; it must show the intended single replacement.

### Step 2: Regenerate the registry item

Use the registry build to update the installable source.

**Verify**: `pnpm registry:build` exits 0, then `node -e 'const fs=require("node:fs"); const j=JSON.parse(fs.readFileSync("public/r/tool-result.json","utf8")); if(j.files[0].content!==fs.readFileSync("registry/react/components/tool-result.tsx","utf8")) process.exit(1)'` exits 0.

## Test plan

This is a one-utility source-level accessibility correction. Confirm the static path from plan 032 remains non-focusable and that the interactive path retains its existing focus-visible ring classes. Do not add a browser or test dependency.

## Done criteria

- [ ] The interactive trigger uses `outline-hidden`.
- [ ] The static row does not receive focus behavior.
- [ ] Existing `focus-visible:ring-*` classes are unchanged.
- [ ] `pnpm registry:build` and `git diff --check` pass.
- [ ] No files outside Scope changed.

## STOP conditions

- The current code no longer has an interactive Tool Result trigger.
- Replacing the utility requires any change beyond this component and generated registry artifact.
- Generation changes unrelated files beyond pre-existing dirty changes.

## Maintenance notes

Keep custom focus treatment coupled to semantic focusability. Any future trigger variant must preserve the same distinction between static presentation and keyboard-interactive disclosure.
