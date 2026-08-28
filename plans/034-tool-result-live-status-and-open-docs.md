# Plan 034: Announce tool-result lifecycle changes and document open-state semantics

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving to the next step. If anything in the STOP conditions occurs, stop and report — do not improvise. Do not update `plans/README.md`; the reviewer maintains the index.
>
> **Drift check (run first)**: `git diff --stat 891952a..HEAD -- registry/react/components/tool-result.tsx content/docs/ai-elements/tool-result.mdx registry/react/examples/tool-result/example-default.tsx registry/manifest/tool-result.ts public/r/tool-result.json`
>
> `tool-result.tsx` and companion files were untracked when this plan was written. If they are absent from the executor checkout, STOP: do not recreate an uncommitted component from this plan.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: `plans/033-tool-result-status-api.md`
- **Category**: docs
- **Planned at**: commit `891952a`, 2026-08-27

## Why this matters

The interactive example transitions from `running` to `success`, but the status text is not a live region. A screen-reader user can miss the completion event. Separately, the docs describe `defaultOpen` as true for running status without saying this is only an uncontrolled initial value; a later status transition does not reopen the collapsible. Make lifecycle text polite and atomic, and document the controlled alternative without changing the established `Task`/`Reasoning` behavior.

## Current state

- `registry/react/examples/tool-result/example-default.tsx:29–60` changes status from `running` to `success`, and can restart it.
- `registry/react/components/tool-result.tsx:168–179` renders status text but has neither `aria-live` nor `role="status"`.
- `ToolResult` applies `aria-busy` at line 87; that conveys busy state but is not a replacement for a completion announcement.
- `content/docs/ai-elements/tool-result.mdx:147–150` documents `defaultOpen` and controlled props without explaining the initial-only distinction.
- `Reasoning` and `Task` use the same `defaultOpen={defaultOpen ?? status-derived-default}` pattern. Do not make `ToolResult` auto-open when status changes.

## Commands you will need

| Purpose | Command | Expected on success |
|---|---|---|
| Accessibility source scan | `rg -n 'aria-live|aria-atomic|aria-busy|defaultOpen|onOpenChange' registry/react/components/tool-result.tsx content/docs/ai-elements/tool-result.mdx` | live announcement and precise docs are present |
| Generated registry | `pnpm registry:build` | exit 0 |
| Whitespace | `git diff --check` | no output, exit 0 |

Do not run `pnpm test`, `pnpm typecheck`, or a browser without separate operator authorization.

## Scope

**In scope:**

- `registry/react/components/tool-result.tsx`
- `content/docs/ai-elements/tool-result.mdx`
- `registry/react/examples/tool-result/example-default.tsx`
- `public/r/tool-result.json` (generated only)

**Out of scope:**

- Auto-opening on every status transition.
- Changing `Task`, `Reasoning`, or `Collapsible`.
- Adding an accessibility test runner.

## Git workflow

- Work in the current checkout. Do not create or switch branches, do not stash, commit, push, or open a PR.
- Preserve unrelated dirty changes.

## Steps

### Step 1: Make status changes politely observable

On the single trigger-owned status text element introduced by plan 033, add a polite, atomic live-region contract (`aria-live="polite"` and `aria-atomic="true"`, or the semantically equivalent explicit `role="status"` behavior). Keep the icon `aria-hidden`; the textual label is the announcement. Do not make streamed terminal output a live region, which would produce excessive announcements.

**Verify**: `rg -n 'aria-live="polite"|role="status"|aria-atomic' registry/react/components/tool-result.tsx` returns the status element.

### Step 2: Clarify initial versus controlled opening in docs

State next to the API table that `defaultOpen` is read only on initial mount. Add a compact controlled example using `open` and `onOpenChange` (or explicitly point to Collapsible's controlled API with a complete, valid snippet) for callers that must decide whether a subsequent running state expands. Update the animated default example only if necessary to keep it truthful; do not remove its replay behavior.

**Verify**: `rg -n -i 'initial mount|controlled|onOpenChange' content/docs/ai-elements/tool-result.mdx` returns the clarification and example.

### Step 3: Regenerate the registry item

Run the registry generator, without editing the JSON manually.

**Verify**: `pnpm registry:build` exits 0, then `node -e 'const fs=require("node:fs"); const j=JSON.parse(fs.readFileSync("public/r/tool-result.json","utf8")); if(j.files[0].content!==fs.readFileSync("registry/react/components/tool-result.tsx","utf8")) process.exit(1)'` exits 0.

## Test plan

No component-test infrastructure is configured. The required source assertions are: a single polite atomic status region, a decorative icon that stays hidden from assistive tech, and docs that distinguish uncontrolled initial state from the controlled `open` API.

## Done criteria

- [ ] Status changes are announced politely and atomically.
- [ ] `aria-busy` remains tied only to `running`.
- [ ] Docs accurately describe `defaultOpen` as initial-only and show the controlled path.
- [ ] `pnpm registry:build` and `git diff --check` pass.
- [ ] No files outside Scope changed.

## STOP conditions

- Plan 033 is not DONE or its intended status element no longer exists.
- Adding a live region would duplicate announcements from an established surrounding live region.
- Generation changes unrelated files beyond pre-existing dirty changes.

## Maintenance notes

Status is an event-sized announcement; terminal output is not. If a future consumer manages status inside its own transcript-level live region, it may opt out through the normal ARIA props only after confirming announcements are not duplicated.
