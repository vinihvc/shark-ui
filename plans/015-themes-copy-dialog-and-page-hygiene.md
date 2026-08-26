# Plan 015: Fix copy-theme dialog metadata and `/themes` page hygiene

> **Executor instructions**: Follow this plan step by step. Run every
> verification command and confirm the expected result before moving to the
> next step. If anything in the "STOP conditions" section occurs, stop and
> report — do not improvise. When done, update the status row for this plan
> in `plans/README.md` — unless a reviewer dispatched you and told you they
> maintain the index.
>
> **Drift check (run first)**: `git diff --stat 1261047..HEAD -- components/dialog/copy-theme.tsx app/(app)/themes/page.tsx app/(app)/themes/_components/theme-selector/theme-selector.tsx app/(app)/themes/_components/cards/cards.tsx`
> If any in-scope file changed since this plan was written, compare the
> "Current state" excerpts against the live code before proceeding; on a
> mismatch, treat it as a STOP condition.

## Status

- **Result**: DONE (executed 2026-08-24 on current branch, no stash)

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: plans/011-theme-css-single-source.md (dialog still calls `createCssVars`; 011 may change output but not the call site)
- **Category**: dx
- **Planned at**: commit `1261047`, 2026-08-24

## Why this matters

The copy dialog title is `capitalize` of `cfg.primaryColor` only, so a Slate + Red + sm theme is labeled “red”. The preview `<pre>` has `max-w-xl`, which clips a full theme snippet inside `DialogContent size="xl"`. The page has a commented `{/* <Footer /> */}`, `ThemeSelector` accepts `children` and never renders them, and `CardsDemo` uses physical `pl-*` (AGENTS.md wants `ps-*` for RTL). None of this is the token-drift bug (011); this is the page the user asked to tidy.

## Current state

`components/dialog/copy-theme.tsx`: `DialogTitle` `{cfg.primaryColor}`; description “Copy and paste the following code into your CSS file.”; `CopyButton value={cssCode}`; lines mapped to `<span className="line">` without Shiki. `pre` class includes `max-w-xl`.

`app/(app)/themes/page.tsx`: `dynamic = "force-static"`; heading “Pick a Color. Make it yours.”; `ThemeSelector` + `CardsDemo`; commented Footer.

`theme-selector.tsx` (server-capable file, no `"use client"`): wraps Card + `CopyThemeCodeDialog` + `ButtonVariantsExample`. Props: `React.ComponentProps<typeof Card>` then `const { children, ...rest } = props` and `children` unused. Page does not pass Card props.

`cards.tsx`: `sm:pl-2` at two breakpoints (~L28, ~L49). Calendar/activity duplicated for `md:hidden` vs `hidden md:grid` — **do not** collapse that layout in this plan (easy to break the gallery).

PRODUCT.md: UI English. DESIGN.md: semantic tokens, not ad-hoc palettes.

Do **not** add Shiki to this dialog in this plan (heavy, static export, already deferred in earlier audits).

## Commands you will need

| Purpose | Command | Expected on success |
|---------|---------|---------------------|
| Lint | `pnpm lint:check` | exit 0 on touched files |

## Scope

**In scope**:
- `components/dialog/copy-theme.tsx`
- `app/(app)/themes/page.tsx`
- `app/(app)/themes/_components/theme-selector/theme-selector.tsx`
- `app/(app)/themes/_components/cards/cards.tsx` (spacing class names only)

**Out of scope**:
- Shiki / `highlightCode` for the snippet
- Footer component implementation or importing site Footer
- Merging duplicate CardsDemo columns
- `createCssVars` internals (011)
- Header customize copy button (same dialog — title fix applies there automatically)

## Git workflow

Work on the **current branch**. Do not create a new branch, stash, or switch. Do not commit unless the operator asks.

## Steps

### Step 1: Dialog title and pre width

Title: use labels from the looked-up `primary` / `gray` / `radius` objects, e.g. `{gray.label} / {primary.label} / {radius.label}` (English, no `capitalize` on the raw token). If any lookup fails, keep a fallback like `Theme` rather than an empty title.

Remove `max-w-xl` from the `<pre>` so the snippet can use the dialog body width. Keep `ScrollArea` heights.

**Verify**: `rg 'capitalize' components/dialog/copy-theme.tsx` → no title capitalize. `rg 'max-w-xl' components/dialog/copy-theme.tsx` → no match.

### Step 2: Page and selector hygiene

- Delete the commented `{/* <Footer /> */}` and the useless fragment if `<main>` can be the sole child (keep `ThemesPage` returning `<main>…</main>`).
- `ThemeSelector`: drop unused `children` destructure. If nothing passes Card props, you may keep `...rest` on `Card` for className; the page currently passes none. Do not add a required className API.

**Verify**: `rg 'Footer' app/(app)/themes/page.tsx` → no match. `rg 'children' app/(app)/themes/_components/theme-selector/theme-selector.tsx` → no unused children.

### Step 3: RTL spacing on the gallery

In `cards.tsx` only, replace `sm:pl-2` with `sm:ps-2` and `xl:pl-4` / `xl:pl-3` with `xl:ps-4` / `xl:ps-3` if those physical classes remain.

**Verify**: `rg 'pl-[0-9]' app/(app)/themes/_components/cards/cards.tsx` → no match.

## Test plan

No new tests. Manual: open copy dialog after picking Gray+Primary+Radius; title lists all three; horizontal scroll not clipped by `max-w-xl`.

## Done criteria

- [ ] Dialog title includes gray, primary, and radius labels
- [ ] Snippet pre is not `max-w-xl`
- [ ] Commented Footer gone; unused `children` gone
- [ ] Theme gallery padding uses logical `ps-*`
- [ ] No Shiki added; no Footer imported
- [ ] `plans/README.md` row 015 updated

## STOP conditions

- Site `Footer` is required by a layout regression you can see in code (e.g. `/themes` is the only page missing footer because layout does not include it). Then **report** rather than uncommenting a stale import — check `app/(app)/layout.tsx` first. If the app layout already renders Footer, deleting the comment is correct.
- `DialogTitle` accessibility forbids changing visible text — still update the text; keep the title element.

## Maintenance notes

- Reviewer: header Copy theme uses the same dialog; title change is global and desired.
- Deferred: syntax highlighting; generating themes as registry items (`npx shadcn add @shark/theme-…`).
