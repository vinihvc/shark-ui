# Plan 032: Make result-only tool rows non-interactive

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving to the next step. If anything in the STOP conditions occurs, stop and report — do not improvise. Do not update `plans/README.md`; the reviewer maintains the index.
>
> **Drift check (run first)**: `git diff --stat 891952a..HEAD -- registry/react/components/tool-result.tsx content/docs/ai-elements/tool-result.mdx registry/react/examples/tool-result registry/react/blocks/ai/ai-chat-thread-01/components/chat-thread.tsx registry/react/templates/ai/_ai-chat-01/components/chat-thread.tsx registry/react/templates/ai/_ai-ide-01/components/ide-chat.tsx registry/manifest/tool-result.ts public/r/tool-result.json`
>
> `tool-result.tsx` and associated files were untracked when this plan was written. If they are absent from the executor checkout, STOP: do not recreate an uncommitted component from this plan.

## Status

- **Priority**: P1
- **Effort**: M
- **Risk**: MED
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `891952a`, 2026-08-27

## Why this matters

`ToolResultTrigger` always renders Ark's collapsible button and indicator, even when a `ToolResult` has no `ToolResultContent`. The published chat-thread block and two AI templates use that shape, so users get a chevron and an expand/collapse control that reveals nothing. Add an explicit static-row mode that preserves the compact visual row, status, and busy state without exposing a false interactive affordance.

## Current state

- `registry/react/components/tool-result.tsx` is the copyable compound component. Its root is always `Collapsible` (lines 70–90) and its trigger is always `CollapsibleTrigger` plus `CollapsibleIndicator` (lines 93–113).
- `registry/react/blocks/ai/ai-chat-thread-01/components/chat-thread.tsx:192–197` and `registry/react/templates/ai/_ai-chat-01/components/chat-thread.tsx:192–197` render `ToolResult` with a trigger but no content.
- `registry/react/templates/ai/_ai-ide-01/components/ide-chat.tsx:122–127` does the same before rendering a sibling `Diff`.
- The design system requires keyboard controls to expose meaningful labels and avoids decorative interactive controls. Use semantic tokens and logical utilities; keep the existing `data-slot` vocabulary.
- `Collapsible` is a wrapper around Ark UI. Reuse it for the collapsible mode; do not import a different headless primitive.

## Commands you will need

| Purpose | Command | Expected on success |
|---|---|---|
| Drift check | command shown above | In-scope source matches this plan, or STOP |
| Generated registry | `pnpm registry:build` | exit 0; `public/r/tool-result.json` reflects the component source |
| Whitespace | `git diff --check` | no output, exit 0 |

Do not run `pnpm test`, `pnpm typecheck`, or a browser: the repository rules require separate operator authorization and none is granted by this plan.

## Scope

**In scope:**

- `registry/react/components/tool-result.tsx`
- `content/docs/ai-elements/tool-result.mdx`
- `registry/react/examples/tool-result/example-static.tsx` (new)
- `registry/react/blocks/ai/ai-chat-thread-01/components/chat-thread.tsx`
- `registry/react/templates/ai/_ai-chat-01/components/chat-thread.tsx`
- `registry/react/templates/ai/_ai-ide-01/components/ide-chat.tsx`
- `public/r/tool-result.json` (generated only)

**Out of scope:**

- `registry/react/components/collapsible.tsx` and other AI elements. Do not change their semantics while solving this component-specific bug.
- Any redesign of the sibling `Diff` in `ide-chat.tsx`.
- A heuristic based on inspecting React children to infer whether content exists; fragments and conditional children make that API unreliable.

## Git workflow

- Work in the current checkout. Do not create or switch branches, do not stash, do not commit, push, or open a PR.
- Preserve unrelated dirty changes exactly as found.

## Steps

### Step 1: Add an explicit static-row mode to the compound API

In `ToolResult`, add a boolean `collapsible` prop that defaults to `true`; expose its resolved value through `ToolResultContext` along with `status`. When `collapsible` is false, keep the root's layout, `data-slot`, `data-status`, and `aria-busy`, but make `ToolResultTrigger` render a non-interactive semantic container instead of `CollapsibleTrigger`, with no chevron and no expand/collapse ARIA attributes. When true, preserve the current Ark `CollapsibleTrigger` behavior exactly.

Use the same trigger layout classes in both modes. The static mode must not forward button-only attributes such as `type`, `disabled`, `aria-expanded`, or `aria-controls` onto the non-interactive element. Keep `ToolResultContent` supported only in collapsible mode; document this contract rather than trying to infer children.

**Verify**: `rg -n 'collapsible|CollapsibleIndicator|ToolResultContext' registry/react/components/tool-result.tsx` shows the explicit mode, contextual propagation, and an indicator only on the interactive path.

### Step 2: Convert known outputless rows to static mode

Set `collapsible={false}` at each of the three known outputless call sites listed in Current state. Do not move the sibling `Diff` into `ToolResult`; that would alter the template composition rather than fix the false affordance.

**Verify**: `rg -n -U '<ToolResult status="success">\n\s*<ToolResultTrigger>' registry/react/blocks/ai/ai-chat-thread-01/components/chat-thread.tsx registry/react/templates/ai/_ai-chat-01/components/chat-thread.tsx registry/react/templates/ai/_ai-ide-01/components/ide-chat.tsx` returns no matches.

### Step 3: Document and demonstrate the mode

Add a focused static-row example under `registry/react/examples/tool-result/` using `collapsible={false}`, title, name, and status but no content. Add a corresponding **Static Row** section before the existing terminal/diff examples. In API reference, list `collapsible` with default `true` and state that it must be false when the row has no expandable detail.

**Verify**: `rg -n 'Static Row|collapsible' content/docs/ai-elements/tool-result.mdx registry/react/examples/tool-result/example-static.tsx` returns the new documentation and example.

### Step 4: Regenerate the registry item

Run the registry generator; do not hand-edit its JSON output. Confirm only the expected generated `tool-result` registry item changes in this plan's generated scope.

**Verify**: `pnpm registry:build` exits 0, then `node -e 'const fs=require("node:fs"); const j=JSON.parse(fs.readFileSync("public/r/tool-result.json","utf8")); const c=j.files[0].content; const s=fs.readFileSync("registry/react/components/tool-result.tsx","utf8"); if (c !== s) process.exit(1)'` exits 0.

## Test plan

No component-test harness is configured for registry React components. The regression is covered structurally: the three outputless call sites opt into static mode, the static example remains contentless, and the generated registry source must exactly match the component source. Do not introduce a test framework in this plan.

## Done criteria

- [ ] A `collapsible={false}` `ToolResultTrigger` is not a button and has no chevron.
- [ ] All three known outputless usages opt into static mode.
- [ ] Docs include a static-row example and exact API contract.
- [ ] `pnpm registry:build` and `git diff --check` pass.
- [ ] No files outside Scope changed.

## STOP conditions

- The untracked component does not exist in the executor checkout.
- Supporting static mode requires changing `Collapsible` or an unrelated primitive.
- A known static call site actually needs to reveal detail after inspection.
- Registry generation changes unrelated files beyond pre-existing dirty changes.

## Maintenance notes

When adding a result without details, explicitly choose `collapsible={false}`. If a future API wants automatic selection, design a typed composed structure rather than scanning arbitrary React children.
