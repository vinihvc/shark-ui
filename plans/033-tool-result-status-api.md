# Plan 033: Give Tool Result one status configuration and one customization path

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving to the next step. If anything in the STOP conditions occurs, stop and report — do not improvise. Do not update `plans/README.md`; the reviewer maintains the index.
>
> **Drift check (run first)**: `git diff --stat 891952a..HEAD -- registry/react/components/tool-result.tsx content/docs/ai-elements/tool-result.mdx registry/react/examples/tool-result registry/manifest/tool-result.ts public/r/tool-result.json`
>
> `tool-result.tsx` and its docs were untracked when this plan was written. If either is absent from the executor checkout, STOP: do not recreate an uncommitted component from this plan.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: tech-debt
- **Planned at**: commit `891952a`, 2026-08-27

## Why this matters

Status metadata is split into label and class records plus a separate icon switch. More importantly, `ToolResultTrigger` always injects `ToolResultStatus`, while the exported component accepts children advertised as an override. A consumer following that public API gets both the custom status and the injected default. Keep the trigger as the owner of status placement and make root-level `statusLabel` the only supported label customization path.

## Current state

- `registry/react/components/tool-result.tsx:32–68` has `STATUS_LABEL`, `STATUS_CLASS`, and `ToolResultStatusIcon` independently keyed by `ToolResultStatus`.
- `ToolResultTrigger` injects `<ToolResultStatus />` at line 110.
- `ToolResultStatus` is exported at lines 161–181, accepts children, and reads status only from context.
- `content/docs/ai-elements/tool-result.mdx:159` claims that children of `ToolResultStatus` replace the default label, despite the trigger's unconditional injection.
- The manual install deliberately lists only Ark UI and Lucide. Do not add `tailwind-variants`: there is one status axis and a typed metadata record is the simpler, dependency-free pattern.

## Commands you will need

| Purpose | Command | Expected on success |
|---|---|---|
| Generated registry | `pnpm registry:build` | exit 0; generated source matches |
| Source scan | `rg -n 'STATUS_LABEL|STATUS_CLASS|ToolResultStatusIcon|ToolResultStatus' registry/react/components/tool-result.tsx content/docs/ai-elements/tool-result.mdx` | only the intended consolidated/private references remain |
| Whitespace | `git diff --check` | no output, exit 0 |

Do not run `pnpm test`, `pnpm typecheck`, or a browser without separate operator authorization.

## Scope

**In scope:**

- `registry/react/components/tool-result.tsx`
- `content/docs/ai-elements/tool-result.mdx`
- `registry/react/examples/tool-result/example-custom-status.tsx` (new)
- `public/r/tool-result.json` (generated only)

**Out of scope:**

- Adding `tailwind-variants` or changing the manifest's dependencies.
- Renaming status values or changing their default English labels.
- Reworking `Task`, `Reasoning`, or `Status` to share a cross-component status abstraction.

## Git workflow

- Work in the current checkout. Do not create or switch branches, do not stash, commit, push, or open a PR.
- Preserve unrelated dirty changes.

## Steps

### Step 1: Consolidate status metadata

Replace the two records and icon switch with one private `STATUS_CONFIG` object keyed exhaustively by `ToolResultStatus`. Each entry must contain its default label, semantic text class, and Lucide icon component. Type the object with `satisfies Record<ToolResultStatus, ...>` so a newly added status cannot omit any required metadata. Preserve the running icon's reduced-motion behavior without duplicating labels/classes elsewhere.

**Verify**: `rg -n 'STATUS_LABEL|STATUS_CLASS|ToolResultStatusIcon' registry/react/components/tool-result.tsx` returns no matches, and `rg -n 'STATUS_CONFIG|satisfies Record<ToolResultStatus' registry/react/components/tool-result.tsx` returns the new configuration.

### Step 2: Replace the conflicting compound status slot with a root prop

Add `statusLabel?: React.ReactNode` to `ToolResultProps` and context. The trigger-owned internal status renderer must use `statusLabel ?? STATUS_CONFIG[status].label`. Remove the public `ToolResultStatus` export; consumers should not insert a second status into `ToolResultTrigger`. Keep the icon and semantic text class coupled to the root `status` even when the label is customized.

**Verify**: `rg -n 'export const ToolResultStatus|statusLabel' registry/react/components/tool-result.tsx` shows no exported status slot and shows the root customization prop/context usage.

### Step 3: Update docs and add a focused customization example

Remove `ToolResultStatus` from Anatomy and API prose. Document `statusLabel` as the way to localize or customize the text while preserving the status icon/color. Add a small `example-custom-status.tsx` that uses an existing status with a different label; it must not render a second status element or manually reproduce status styles.

**Verify**: `rg -n 'statusLabel|ToolResultStatus' content/docs/ai-elements/tool-result.mdx registry/react/examples/tool-result/example-custom-status.tsx` shows the new API and no consumer-facing status slot.

### Step 4: Regenerate the registry item

Run the generator instead of editing JSON directly.

**Verify**: `pnpm registry:build` exits 0, then `node -e 'const fs=require("node:fs"); const j=JSON.parse(fs.readFileSync("public/r/tool-result.json","utf8")); if(j.files[0].content!==fs.readFileSync("registry/react/components/tool-result.tsx","utf8")) process.exit(1)'` exits 0.

## Test plan

No registry-component test harness exists. Inspect the focused example source to ensure one status is supplied by the trigger and the custom label is passed only through `statusLabel`; registry-source parity protects the installed artifact.

## Done criteria

- [ ] One exhaustive config owns label, class, and icon metadata.
- [ ] There is exactly one public label-customization route: `ToolResult statusLabel`.
- [ ] Docs and example no longer teach a duplicate status slot.
- [ ] `pnpm registry:build` and `git diff --check` pass.
- [ ] No files outside Scope changed.

## STOP conditions

- The component has already shipped a documented public `ToolResultStatus` API that must remain backward compatible.
- The icon type cannot be represented without weakening type safety or adding a runtime dependency.
- Generation changes unrelated files beyond pre-existing dirty changes.

## Maintenance notes

Future status additions change only `ToolResultStatus` and `STATUS_CONFIG`. Keep user-provided labels textual; a custom icon is intentionally out of scope so the displayed status cannot contradict its semantic state.
