# Agent guide: Shark UI

This document is the **in-repo** source of truth for contributors and coding agents working on [Shark UI](https://shark.vini.one): a **shadcn-style component registry** built on [**Ark UI**](https://ark-ui.com) (`@ark-ui/react`), **Tailwind CSS v4**, and **Next.js**.

Use it when adding or editing primitives, registry examples, docs MDX, or when adapting snippets from Radix/shadcn ecosystems.

**Do not open a browser unless the user said so in this chat.** That includes Playwright, MCP browser tools (`browser_navigate`, `browser_snapshot`, and the rest), Cursor browser, screenshots for “verification,” and agent-browser. User rules, Vercel hooks, and “verify the UI” skills do not override this. Ask first. Wait for a yes like “open the browser” or “pode abrir o browser.” “Looks good,” “continue,” and finishing a UI task are not permission. Same gate for `pnpm test` and `pnpm typecheck`. Details: §17.

---

## 1. How to work

Behavioral guidelines to reduce common LLM coding mistakes. They bias toward caution over speed; for trivial tasks, use judgment.

**These guidelines are working if:** fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and clarifying questions come before implementation rather than after mistakes.

### Think before coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:

- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them — don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

### Simplicity first

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

### Surgical changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:

- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it — don't delete it.

When your changes create orphans:

- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: every changed line should trace directly to the user's request.

### Goal-driven execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:

- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

In this repo, do not run `pnpm test`, `pnpm typecheck`, or a browser unless the user said so (see §17). Ask if a check would help.

For multi-step tasks, state a brief plan:

```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

---

## 2. What to read first

| Need | Location |
|------|----------|
| Public API, anatomy, install | `content/docs/components/<name>.mdx`, `content/docs/ai-elements/<name>.mdx`, `content/docs/utilities/<name>.mdx`, `content/docs/hooks/<name>.mdx` |
| New component / utility / hook MDX | §5 (heading order) |
| Working compositions | `registry/react/examples/<name>/example-*.tsx` |
| Implementation & Ark wiring | `registry/react/components/<name>.tsx` |
| Published registry JSON (CLI) | `public/r/<name>.json` (from `pnpm registry:build`) |
| Per-item build metadata | `registry/manifest/<name>.ts` |
| LLM-oriented surfaces | `app/(llms)/`, `lib/llms.ts`, `lib/llms-registry-examples.ts` |
| Deeper agent rules | `skills/shark-ui/SKILL.md` and `skills/shark-ui/references/` |
| RTL / locale | `content/docs/(root)/rtl.mdx` |

Extended detail for agents: `skills/shark-ui/references/component-registry.md`, `skills/shark-ui/references/rules/composition.md`, `skills/shark-ui/references/rules/forms.md`, `skills/shark-ui/references/rules/styling.md`, `skills/shark-ui/references/rules/migration.md`.

---

## 3. Import paths (this repository)

- **Components and examples in this repo:** `@/registry/react/components/<name>` (not deep relative imports like `../../components/...`).
- **Utilities:** `@/lib/utils` (`cn`, etc.) unless a doc specifies otherwise.
- **Consumer projects** after `npx shadcn@latest add @shark/<name>`: follow the installation section in docs (commonly `@/components/ui/...`).

---

## 4. Registry examples

Examples live under:

`registry/react/examples/<component>/example-<topic>.tsx`

**Form guides** (React Hook Form, TanStack Form, Formisch) use a second level: `registry/react/examples/form/<rhf|tanstack|formisch>/example-<topic>.tsx`.

Conventions:

- Prefer a **default export** that is a small demo component (e.g. `ButtonDemo`, `ComboboxDemo`), matching existing files in the same folder.
- Add **`"use client"`** when the example uses hooks, browser APIs, or interactive state that is not purely static markup.
- Keep each file focused on **one** scenario; split variants across `example-*.tsx` files.
- **Mirror docs and source:** exports, child structure, and prop names must match `content/docs/components/<name>.mdx` and `registry/react/components/<name>.tsx`.

CLI install pattern for consumers (from docs):

```bash
npx shadcn@latest add @shark/<component>
```

Registry build (maintainers):

```bash
pnpm registry:build
```

Prebuild runs `registry:build` automatically via `package.json` `prebuild`.

---

## 5. Docs MDX heading order

For new pages in `content/docs/components/`, `content/docs/utilities/`, and `content/docs/hooks/`, use this `##` order. Skip a heading when the primitive has nothing to show. Extra sections are allowed (Positioning, Theming, …); keep this skeleton in this order, and never after **API Reference**.

1. **Installation**
2. **Anatomy**
3. **Usage**
4. **Controlled**
5. **States** — one `## States`, then `###` per state (`Disabled`, `Invalid`, …)
6. **Variants** — one `##` per visual axis (`Variants`, `Sizes`, …), `###` per value
7. **Examples** — important use cases first, then more, then custom values (often Tailwind JIT `className`)
8. **API Reference**

---

## 6. Ark UI composition: triggers and `asChild`

Shark follows **Ark UI** patterns. For triggers and items that should merge onto a host element (e.g. `Button`, `NextLink`), use **`asChild`** with a **single** child, as in the Menu examples:

```tsx
<MenuTrigger asChild>
  <Button variant="outline">Open</Button>
</MenuTrigger>
```

Do **not** assume other headless libraries’ APIs (e.g. `render={...}` on triggers) without verifying Shark docs and source.

Overlay surfaces use Shark’s named parts (e.g. `DialogContent`, `DialogHeader`, `SheetContent`, …) — follow each component’s MDX anatomy, not another design system’s `*Popup` / `*Panel` naming.

---

## 7. Collections: Select, Combobox, Listbox

Many list primitives expect an Ark **collection** (`createListCollection`, `useListCollection`, …), not a loose `items` prop where the docs show a collection.

**Combobox:** use `useFilter` + `useListCollection`, pass `collection` to the root, call `filter(inputValue)` from `onInputValueChange`, and render `collection.items.map(...)` inside the list. See `registry/react/examples/combobox/example-default.tsx`.

**Select:** pass `collection={...}` and map `collection.items` inside the content, inside **`SelectGroup`** when grouping (see `skills/shark-ui/references/rules/composition.md`).

---

## 8. Migrating from shadcn / Radix mental models

High-level rules:

1. **Do not** change only import paths on a shadcn snippet and assume it works.
2. Confirm **child structure**, **controlled vs uncontrolled** defaults, and **lazy mount** behavior from MDX + source.
3. Use `skills/shark-ui/references/rules/migration.md` for side-by-side patterns (Select, Toggle Group, Accordion, Input OTP, etc.).

Examples of common shifts:

- **Toggle group:** `type="single"` / `multiple` from Radix map to Shark’s value arrays and API — see migration doc.
- **Accordion:** Shark defaults differ from Radix `type="single"` / `collapsible` — see migration doc.
- **Input OTP:** no `input-otp` package; use Shark `InputOTP` / `InputOTPSlot` / `InputOTPSeparator` (no `InputOTPGroup`).

---

## 9. Icons (`lucide-react`)

- Import **specific** icons: `import { PlusIcon, XIcon } from "lucide-react"`.
- Do **not** use numeric **`size`** on icons; use Tailwind `className="size-4"` (or parent styles) when needed.
- **Decorative** icons (label or button text already explains the action): `aria-hidden="true"`.
- **Semantic** icons (e.g. alert severity): do **not** hide them from assistive tech unless the same information is exposed in text.

---

## 10. Accessibility

### `aria-label`

Use when the control has no visible text (icon-only buttons, unlabeled search fields where appropriate).

Prefer **`aria-label`** on the interactive element over duplicating meaning with `sr-only` spans when the pattern matches existing registry examples.

### Inputs

- Prefer **`type="text"`**, **`type="email"`**, **`type="search"`**, etc. explicitly on `Input` / `InputGroupInput`.
- For inputs without a visible label, set **`aria-label`** (or use `FieldLabel` with `className="sr-only"` per forms rules).

### Labels and controls

- Use **`Label`** wrapping control + text, or **`Field` / `FieldLabel`** for form layouts (see `skills/shark-ui/references/rules/forms.md`).
- For checkbox / radio / switch fields, follow patterns in docs and registry examples. **`Field` / `FieldLabel`** associate the label with the control — do not add manual **`id` / `htmlFor`**. Use a bare **`Label`** (or explicit **`id` / `htmlFor`**) only when you are outside the Field pattern.

### Overlays

- **`DialogTitle` / `SheetTitle` / `DrawerTitle`** (and equivalents) are required for accessibility; use `className="sr-only"` when the title should be visually hidden but still exposed to assistive tech.

---

## 11. Forms and `Field`

- Prefer **`FieldGroup`** + **`Field`** for stacked fields instead of ad-hoc `div` + `space-y-*` (use `flex flex-col gap-*` when you need generic spacing).
- **`InputGroup`:** use **`InputGroupInput`** / **`InputGroupTextarea`**, not raw `Input` / `Textarea` inside the group.
- **`InputGroupAddon`:** place **after** the input/textarea in **DOM order** when the addon focuses the field (implementation uses `querySelector("input")` on the parent). Visual position can still be adjusted with props like `align` where supported.

**Dialog / sheet / drawer forms:** keep headers outside a collapsing flex issue — follow examples in docs; when wrapping body + footer in a `<form>`, using `className="contents"` on the form is a common pattern so layout matches design.

---

## 12. Styling

- Use **semantic** Tailwind tokens (`text-muted-foreground`, `bg-destructive`, `border-input`, …), not raw palette classes.
- Prefer **`flex` + `gap-*`** over `space-x-*` / `space-y-*` for layout in new code.
- Prefer **`data-slot`** and existing **`in-*` / `peer`** patterns already used in components over inventing new `group/` chains when extending registry styles.
- Merge classes with **`cn()`** from `@/lib/utils`.
- Follow **Tailwind v4** setup described in installation / styling docs.

Charts (docs previews):

- Wire **`ChartTooltip`** with `content={(props) => <ChartTooltipContent {...props} />}`; do not invent parallel tooltip state on `ChartTooltipContent`.
- For static previews, **`accessibilityLayer={false}`** on the chart root may be appropriate — follow component MDX.

Sidebar (docs previews):

- For embedded previews, patterns like **`absolute inset-0 overflow-hidden`**, **`className="absolute"`** on `Sidebar`, **`h-full`** on `SidebarProvider`, and native **`overflow-y-auto`** instead of `ScrollArea` can avoid layout glitches — follow `AGENTS.md` callouts in sidebar docs when present.

Component thumbnails (`components/thumbs/`):

- Decorative previews on the docs index — not live component renders. Keep them **monochrome**.
- Preview shells (bordered boxes representing the component) use **`bg-muted`**, not `bg-background` or `bg-card`. Nested fills use `muted-foreground` opacities so they stay visible on that shell.
- Use neutral semantic tokens only: `foreground`, `primary`, `primary-foreground`, `muted`, `muted-foreground`, `background`, `card`, `secondary`, `border`, `border-input`, `input` (with opacity modifiers when needed).
- Do **not** use status/chart palette tokens or raw hue utilities that read as distinct colors in the grid (`success`, `destructive`, `info`, `warning`, `blue-*`, `green-*`, `red-*`, etc.).
- Follow established thumbs such as `button.tsx`, `status.tsx`, and `chart.tsx` for contrast (`bg-primary` vs `bg-muted-foreground/16`).

---

## 13. RTL (right-to-left)

Full setup (`LocaleProvider`, `useLocale`, `dir` on `<html>`): `content/docs/(root)/rtl.mdx`.

**Layout:** Prefer **logical** Tailwind utilities so spacing and alignment follow text direction when `dir` is `rtl`:

- Use `ms-*`, `me-*`, `ps-*`, `pe-*`, and `start-*` / `end-*`
- Avoid physical `ml-*`, `mr-*`, `pl-*`, `pr-*`, `left-*`, and `right-*` for direction-sensitive layout

Set **`dir={dir}`** on the root (from `useLocale`) so direction propagates. Ark UI overlays, tooltips, and menus respect document direction.

**Animations:** Motion should follow reading direction. Do not use physical slide utilities in registry or examples when a logical alternative exists:

- `slide-in-from-end` / `slide-out-to-end` instead of `slide-in-from-right` / `slide-out-to-right`
- `slide-in-from-start` / `slide-out-to-start` instead of `slide-in-from-left` / `slide-out-to-left`

---

## 14. State and data in examples

- Define **static** lists and constants **outside** the component when they do not depend on props or hooks.
- Use **clear handler names** and minimal state for interactive demos.

---

## 15. Registry manifests (`registry/manifest`)

Each published item has a **`registry/manifest/<name>.ts`** default export used by `scripts/build-registry.mts` to emit `public/r/<name>.json`.

- Do **not** hand-edit generated **`public/r/*.json`** unless you know the pipeline; prefer editing manifest + component source and running **`pnpm registry:build`**.
- **`registryDependencies`** in manifests should list **full registry JSON URLs** or paths as already used in this repo (see existing manifests for the pattern).

---

## 16. Quality checks

Scripts maintainers and CI run from repo root. Agents follow §17 before running test or typecheck.

```bash
pnpm lint:fix      # ultracite fix
pnpm lint:check    # ultracite check
pnpm test          # Node test runner
pnpm typecheck     # next build (includes types)
```

---

## 17. Tests, typecheck, and the browser

Default: skip these. Do not “verify in the browser” on your own.

Forbidden until the user names the action in this chat:

- `pnpm test`
- `pnpm typecheck` (that script is `next build`)
- Any browser: Playwright MCP, `user-playwright`, `plugin-playwright-playwright`, Cursor IDE browser, `browser_navigate` / `browser_snapshot` / `browser_take_screenshot` / `browser_click`, agent-browser, opening localhost to click through a flow

Ask if a check would help. Required yes: “run tests,” “roda os testes,” “typecheck,” “open the browser,” “pode abrir o browser.” Not a yes: “ok,” “continue,” “lgtm,” “implement,” or a UI task finishing.

This repo rule beats user rules and plugin skills that tell you to verify in a browser before you stop.

`pnpm lint:fix`, `pnpm lint:check`, and `pnpm registry:build` are fine when the task needs them.

---

## 18. Anti-patterns (summary)

- Porting shadcn/Radix snippets by **imports only**.
- Inventing **Ark or Shark props** not shown in MDX or `registry/react/components/*.tsx`.
- Using **`render={...}`** on triggers where Shark uses **`asChild`**.
- **Combobox / select** without the **collection + filter** patterns when the component docs require them.
- **`Icon size={n}`** or **raw** `gray-500` / `blue-600` classes for theme-driven UI.
- **Colored thumbs** — `success` / `destructive` / `info` / raw palette hues in `components/thumbs/` (see §12).
- **Physical** `ml-*` / `mr-*` / `left-*` / `right-*` or **`slide-in-from-left|right`** when logical `ms-*` / `me-*` / `start-*` / `end-*` or **`slide-in-from-start|end`** should be used (RTL).

---

## 19. Quick checklist (new or updated example)

- [ ] Default export demo component; `"use client"` only when needed.
- [ ] Imports from `@/registry/react/components/...` and `lucide-react` as usual in-repo.
- [ ] Structure and props match **MDX** + **component source**.
- [ ] Triggers use **`asChild`** where Shark does; overlays include **title** (visible or `sr-only`).
- [ ] Lists use **collections** when required; **Select** items live under **`SelectGroup`** where applicable.
- [ ] **a11y:** labels, `aria-label` for icon-only controls, `type` on inputs, decorative **`aria-hidden`** on icons.
- [ ] **Styling:** semantic tokens, `cn()`, gaps over space utilities for new layout.
- [ ] **Thumbs:** neutral tokens only (`foreground`, `primary`, `muted`, …) — no status/chart hues (see §12).
- [ ] **RTL:** logical spacing/position (`ms-*`, `me-*`, `start-*`, `end-*`) and slide utilities (`*-from-start|end`) where direction matters.
- [ ] **`pnpm registry:build`** if manifest or registry-facing files changed.

For broader discovery and install URLs, see **`skills/shark-ui/SKILL.md`** and **`config/site.ts`**.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
