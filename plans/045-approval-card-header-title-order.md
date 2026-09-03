# Plan 045: Render Approval Card titles before header actions

> **Executor instructions**: Work in the current checkout. Do not create or switch branches, do not stash, commit, push, or open a PR. Preserve unrelated dirty files. Follow every step and verification gate. If a STOP condition occurs, report it rather than improvising. The reviewer maintains `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 2310c90..HEAD -- registry/react/components/approval-card.tsx public/r/approval-card.json content/docs/ai-elements/approval-card.mdx`

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `2310c90`, 2026-08-31

## Why this matters

`ApprovalCardHeader` documents `title` as a supported prop, including a title-plus-action composition. Its current render order places all child content before the generated title. Because `ApprovalCardAction` applies `ms-auto`, an action child consumes the flexible space before the title and reverses the intended visual hierarchy. The prop form must produce the same title-first layout as the explicit `ApprovalCardTitle` form.

## Current state

- `registry/react/components/approval-card.tsx` is the copyable registry source. It wraps the shared `CardHeader` and publishes the component through `public/r/approval-card.json`.
- At lines 133–138, the current header renders `children` and only then renders `<ApprovalCardTitle>{title}</ApprovalCardTitle>`.
- At lines 160–175, `ApprovalCardAction` is a flex item with `ms-auto`; it belongs after the title in DOM and visual order.
- `content/docs/ai-elements/approval-card.mdx:106–112` documents the affected form: a `title` prop plus icon and `ApprovalCardAction` children.
- Match the repo convention of `cn()` class composition and `data-slot` attributes. Keep the quiet semantic styling defined in `DESIGN.md`: no color or geometry redesign is needed.

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Source lint | `pnpm exec ultracite check registry/react/components/approval-card.tsx` | exits 0 |
| Registry generation | `pnpm registry:build` | exits 0 |
| Registry sync | `node -e 'const fs=require("node:fs");const j=JSON.parse(fs.readFileSync("public/r/approval-card.json","utf8"));const f=j.files.find((x)=>x.path==="registry/react/components/approval-card.tsx");if(!f||f.content!==fs.readFileSync("registry/react/components/approval-card.tsx","utf8"))process.exit(1)'` | exits 0 |
| Scoped whitespace | `git diff --check -- registry/react/components/approval-card.tsx public/r/approval-card.json content/docs/ai-elements/approval-card.mdx` | no output, exits 0 |

Do not run a browser, `pnpm test`, or `pnpm typecheck` without separate operator authorization.

## Scope

**In scope:**

- `registry/react/components/approval-card.tsx`
- `public/r/approval-card.json` — generated only
- `content/docs/ai-elements/approval-card.mdx` — only if the existing title snippet needs a factual correction after the source change

**Out of scope:**

- `registry/react/components/card.tsx` — the shared Card header is correct; this is Approval Card’s custom flex composition.
- Questionnaire navigation, validation, or hotkeys.
- New tests or test dependencies; plan 036 records that the repository has no proportional DOM-component test harness.

## Steps

### Step 1: Put the generated title before header children

In `ApprovalCardHeader`, render the generated `ApprovalCardTitle` first whenever `title` is present. Preserve the existing convenience behavior that a bare string child becomes `ApprovalCardTitle` only when `title` is absent. Render icons and `ApprovalCardAction` children after the generated title.

The important resulting order is:

```tsx
{!!title && <ApprovalCardTitle>{title}</ApprovalCardTitle>}
{!title && typeof children === "string" ? (
  <ApprovalCardTitle>{children}</ApprovalCardTitle>
) : (
  children
)}
```

Do not change the header classes, action classes, icon alignment rules, or title typography.

**Verify**: `pnpm exec ultracite check registry/react/components/approval-card.tsx` exits 0.

### Step 2: Confirm the documented prop form remains accurate

Read the `## Title` section in `content/docs/ai-elements/approval-card.mdx`. Keep the prop example as `title` plus icon/action children; it should now reflect the implementation. Edit only if it contains a factual mismatch.

**Verify**: `rg -n -C 4 'ApprovalCardHeader title=' content/docs/ai-elements/approval-card.mdx` shows the title-prop example with an action child.

### Step 3: Regenerate the installable registry source

Run the registry builder so consumers receive the corrected header order.

**Verify**: run the Registry generation and Registry sync commands above; both exit 0.

## Test plan

No DOM test harness exists in this repository; do not introduce one for this focused ordering fix. Use the source lint and the documented composition as characterization checks. A reviewer should inspect that the prop title is the first meaningful header child, followed by icon/action children.

## Done criteria

- [ ] `title` renders before any icon or `ApprovalCardAction` child.
- [ ] String-child title behavior is unchanged when `title` is absent.
- [ ] The `title` documentation remains accurate.
- [ ] Registry JSON exactly matches component source.
- [ ] Scoped lint and whitespace checks pass.
- [ ] No files outside Scope changed.

## STOP conditions

- The current header no longer contains the documented title-prop and children branches.
- Correct ordering requires a Card API change or a styling redesign.
- `pnpm registry:build` modifies generated items beyond the Approval Card artifact that were not already dirty.

## Maintenance notes

Keep generated structural content first and optional actions last in this flex header. Any future title, badge, or close-action addition must preserve that order so `ms-auto` continues to move only the trailing action to the inline end.
