# Plan 016: Keep Snippet compound; drop SelectItem registry

> **Executor instructions**: Follow this plan step by step. Run every
> verification command and confirm the expected result before moving to the
> next step. If anything in the "STOP conditions" section occurs, stop and
> report — do not improvise. When done, update the status row for this plan
> in `plans/README.md` — unless a reviewer dispatched you and told you they
> maintain the index.
>
> **Drift check (run first)**: `git diff --stat 1261047..HEAD -- registry/react/components/snippet.tsx registry/react/examples/snippet content/docs/components/snippet.mdx skills/shark-ui/references/primitives/snippet.md`
> Also read the live `registry/react/components/snippet.tsx` (largely **uncommitted** on top of `1261047`).
> If `SnippetSelect` / `SnippetCode` / `SnippetCopy` are already the only extra public parts, there is no `SnippetSelectItem` / `useSnippet` / `registerOption`, and `items` lives on `Snippet` (not on `SnippetSelect`), this plan may already be done — compare to Target API below before marking DONE.
> If the select menu was removed entirely, STOP.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none (assumes the current compound Snippet already exists in the working tree)
- **Category**: tech-debt
- **Planned at**: commit `1261047`, 2026-08-25 (working tree includes unpublished Snippet compound)
- **Supersedes**: earlier 016 draft that collapsed to a single non-compound `<Snippet items>` with no slots. Operator wants **compound parts kept**.

## Why this matters

The working-tree Snippet is compound **and** a hidden item registry. Public surface today: `Snippet`, `SnippetSelect`, `SnippetSelectItem`, `SnippetCode`, `SnippetCopy`, `useSnippet`. `SnippetSelect` accepts both `items` and handmade `SnippetSelectItem` children, which forces `registerOption` / `unregisterOption`, `SnippetSelectItemsContext`, and `useLayoutEffect` (~L73–96, ~L228–256, ~L355–472 in `registry/react/components/snippet.tsx`). The only select caller (`example-select.tsx`) already passes a list — it never builds menu rows by hand. Keep the **Card-style slots** (select / code / copy). Drop the **second way** to declare options.

Match an existing Shark compound that puts **data on the root** and **slots as children**: `registry/react/components/code-block.tsx` (`code` on `CodeBlock`, `CodeBlockCopy` as a child). Do the same: `items` (and `text`) on `Snippet`; `SnippetSelect` is only the menu chrome.

## Current state

Select example today (`registry/react/examples/snippet/example-select.tsx` ~L74–83):

```tsx
<Snippet defaultValue="pnpm" prompt={false}>
  <SnippetSelect items={items} />
  <SnippetCode />
  <SnippetCopy />
</Snippet>
```

`text` shortcut and composition-viewer stay as `<Snippet text={...} />` (`components/registry-compositions/composition-viewer.tsx` ~L169–173).

Manifest `registry/manifest/snippet.ts` already depends on clipboard, input-group, menu — keep all three.

AGENTS.md: `asChild` on `MenuTrigger`, logical CSS (`ms-auto`, `inline-start` / `inline-end`), `cn()`, no numeric `size` on icons. §15: do not run `pnpm test` / `pnpm typecheck` unless the operator asks. `pnpm lint:check` / `pnpm registry:build` are allowed.

## Target public API (compound, fewer exports)

Export: **`Snippet`**, **`SnippetSelect`**, **`SnippetCode`**, **`SnippetCopy`**, **`SnippetOption`**.

Do **not** export: `SnippetSelectItem`, `useSnippet`.

```tsx
<Snippet text="npx shadcn@latest add @shark/snippet" />

<Snippet defaultValue="pnpm" items={items} prompt={false}>
  <SnippetSelect />
  <SnippetCode />
  <SnippetCopy />
</Snippet>
```

`SnippetOption`: `{ value: string; label: string; icon?: React.ReactNode; code: string | string[] }`.

**`Snippet` props**: `text`, `items`, `value`, `defaultValue`, `onValueChange`, `prompt` (default `true`), `placeholder`, `copyText`, `onCopy`, `size`, `className`, Clipboard rest. Children are the slots.

**`SnippetSelect` props**: `className`, `triggerLabel` (default `"Choose command"`). No `items`. Do not extend all `Menu` props (hardcode positioning `{ gutter: 4, placement: "bottom-start" }` as today).

**`SnippetCode` / `SnippetCopy`**: same roles as today (command display; copy addon). `SnippetCode` children override of the visible string can stay if already implemented; do not add new override APIs.

Shortcut: if `children` is omitted and `text` is set, `Snippet` still renders `SnippetCode` + `SnippetCopy` internally (keep current `text` examples working). If `children` is provided, render only children (caller must include Copy/Code/Select as they want).

Behavior to preserve:

- `text` without `items`: prompt, multiline array, placeholder, copy payload = `text` (or `copyText`).
- `items` present: selected option = `items.find(v => v.value === selectedValue) ?? items[0]`; trigger shows that icon + chevrons + divider; menu rows icon + label + `CheckIcon` with `ms-auto`; copy payload = selected `code`.
- Controlled `value` / uncontrolled `defaultValue` + `onValueChange` unchanged.
- If both `text` and `items`: **`items` wins** for the visible/copy command when a select is shown. Do not document passing both.

## Target internals

Context (unexported `useSnippet`) holds only what slots need, for example: `items`, `selectedOption`, `setSelectedValue`, `selectedValue`, `prompt`, `placeholder`, `fallbackLines` from `text`. **No** `registerOption`, `unregisterOption`, `setOptions` from children, **no** `SnippetSelectItemsContext`.

Derive selection (no parallel options state):

```tsx
const selectedOption =
  items?.find((item) => item.value === selectedValue) ?? items?.[0];
const copyValue =
  copyText ??
  (selectedOption ? toCopyString(selectedOption.code) : toCopyString(text));
```

`SnippetSelect` maps `items` from context to `MenuItem` (local, not exported). Empty `items`: render nothing (or a trigger with only chevrons — prefer **render `null`** if `items` is missing/empty).

No `useLayoutEffect` for option lists. `useCallback` for copy mousedown and menu `onSelect` is fine.

File should drop well below 550 lines. If register/unregister remains, STOP and remove that path.

## Commands you will need

| Purpose | Command | Expected on success |
|---------|---------|---------------------|
| Lint (scoped) | `pnpm exec ultracite check registry/react/components/snippet.tsx registry/react/examples/snippet content/docs/components/snippet.mdx skills/shark-ui/references/primitives/snippet.md skills/shark-ui/references/component-registry.md` | exit 0 |
| Registry | `pnpm registry:build` | exit 0; `public/r/snippet.json` still lists `menu.json`; generated source still has `export const SnippetSelect` (and Code/Copy), **not** `export const SnippetSelectItem` or `export const useSnippet` |

Do not run `pnpm test` or `pnpm typecheck` unless the operator asks.

## Suggested executor toolkit

- `AGENTS.md` + `skills/shark-ui/SKILL.md` for composition (`asChild`, Input Group addons).
- Exemplar for data-on-root + slots: `registry/react/components/code-block.tsx`.

## Scope

**In scope**:

- `registry/react/components/snippet.tsx`
- `registry/react/examples/snippet/example-select.tsx`
- `content/docs/components/snippet.mdx`
- `skills/shark-ui/references/primitives/snippet.md`
- `skills/shark-ui/references/component-registry.md`
- `public/r/snippet.json` only via `pnpm registry:build`
- `plans/README.md` status row for 016

**Out of scope**:

- Removing compound slots (`SnippetSelect` / `SnippetCode` / `SnippetCopy` must stay public)
- `composition-viewer.tsx` (keep `text`)
- `components/thumbs/snippet.tsx`
- Other snippet examples
- `registry/manifest/snippet.ts` (do not drop menu)
- `components/code-block-command.tsx`
- `useConfig().packageManager`

## Git workflow

Work on the **current branch**. Do not create a new branch, stash, or switch. Do not commit unless the operator asks.

## Steps

### Step 1: Thin context and move `items` to `Snippet`

Rewrite `registry/react/components/snippet.tsx`:

- Add `items?: SnippetOption[]` to `Snippet`.
- Remove `items` from `SnippetSelect`.
- Delete `SnippetSelectItem` (export and component). Inline `MenuItem` rows inside `SnippetSelect`.
- Unexport `useSnippet` (keep a file-private hook).
- Delete register/unregister, `sameOptions` if unused, `SnippetSelectItemsContext`, layout-effect option sync.

**Verify**: `rg "export const SnippetSelectItem|export const useSnippet|registerOption" registry/react/components/snippet.tsx` → no matches. `rg "export const SnippetSelect" registry/react/components/snippet.tsx` → a match.

### Step 2: Update `example-select.tsx`

Same icons/`items` array. JSX:

```tsx
<Snippet
  className="mx-auto w-full max-w-md"
  defaultValue="pnpm"
  items={items}
  prompt={false}
>
  <SnippetSelect />
  <SnippetCode />
  <SnippetCopy />
</Snippet>
```

**Verify**: `rg "SnippetSelectItem|SnippetSelect items" registry/react/examples/snippet` → no matches.

### Step 3: Docs and skill

`content/docs/components/snippet.mdx`:

- Anatomy stays:

```text
Snippet
├── SnippetSelect
├── SnippetCode
└── SnippetCopy
```

- Usage: `text` shortcut **and** the compound block with `items` on `Snippet`.
- Delete the **SnippetSelectItem** API section. `SnippetSelect` table: `triggerLabel` only. `Snippet` table includes `items`.
- Best practices: compose the three parts when using a selector; `text` for a single command.

`skills/shark-ui/references/primitives/snippet.md`: drop handmade `SnippetSelectItem` children; show `items` on `Snippet` + three slots. Pitfall: parts outside `Snippet` still applies.

`skills/shark-ui/references/component-registry.md`: compound parts `SnippetSelect`, `SnippetCode`, `SnippetCopy`; options via `items` on root.

**Verify**: `rg "SnippetSelectItem" content/docs/components/snippet.mdx skills/shark-ui/references` → no matches.

### Step 4: Lint and registry

Run the scoped `ultracite check`, then `pnpm registry:build`.

**Verify**: `public/r/snippet.json` includes menu; generated content has `export const SnippetSelect` and does not have `export const SnippetSelectItem`.

### Step 5: Index

Mark 016 DONE in `plans/README.md`.

## Test plan

- No new `pnpm test` files.
- Operator (optional): docs snippet page — compound select still switches managers and copies the right `code`; `text` examples still work. Executor must not open a browser unless asked (AGENTS.md §15).

## Done criteria

- [ ] Public exports: `Snippet`, `SnippetSelect`, `SnippetCode`, `SnippetCopy`, `SnippetOption` only (no `SnippetSelectItem`, no public `useSnippet`).
- [ ] `items` is a prop of `Snippet`, not `SnippetSelect`.
- [ ] No register/unregister / second context / option `useLayoutEffect`.
- [ ] `example-select.tsx` uses the compound JSX in Target API.
- [ ] Docs/skill match that anatomy; no SelectItem section.
- [ ] Scoped ultracite exit 0; `pnpm registry:build` exit 0.
- [ ] No out-of-scope source edits. If registry build rewrites many unrelated `public/r/*.json`, STOP and report.
- [ ] `plans/README.md` row 016 is DONE.

## STOP conditions

- Operator (or live code) no longer has a select menu at all.
- You remove `SnippetSelect` / `SnippetCode` / `SnippetCopy` from the public API — that contradicts this plan; restore them.
- You keep `SnippetSelectItem` as public “for flexibility” — do not.
- `pnpm registry:build` mass-rewrites unrelated JSON.
- Verification fails twice after a reasonable lint fix.

## Maintenance notes

- Reviewer: slots still work if the caller omits `SnippetSelect` (code + copy only) or omits copy (not required to support; if they omit copy, copying won’t exist — acceptable).
- Checkmark stays at the **end** of the row (`ms-auto`), not MenuRadioItem’s start indicator.
- Do not re-add child-collected items unless a real consumer cannot pass `items` on `Snippet`.
