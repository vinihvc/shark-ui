---
name: shark-ui
description: Shark UI skill for the Ark UI–based shadcn-style registry. Use when implementing or debugging components (overlays, menus, popovers, sheets, dialogs), collection-driven controls (combobox, select, list patterns), Field/forms, sidebar or chart docs patterns, Tailwind v4 tokens, or migrating Radix/shadcn examples to Shark. Also applies when using the shadcn CLI with `@shark/*`, `components.json`, or registry-style add/search/diff workflows.
compatibility: Requires Tailwind CSS v4 and @ark-ui/react. Designed for React projects using the Shark UI registry (shadcn-style workflow).
---

# Shark UI

Shark UI is a component registry built on [Ark UI](https://ark-ui.com) with a shadcn-like developer experience (`npx shadcn@latest add @shark/<component>`).

Run CLI examples with the project’s package runner (`npx shadcn@latest`, `pnpm dlx shadcn@latest`, or `bunx shadcn@latest`) — match `packageManager` / team convention.

## What this skill is for

Use this skill to:

- pick the right Shark primitive(s) for a UI task
- write correct usage code (imports, composition, props) aligned to Ark UI patterns wrapped by Shark
- avoid assuming Radix/shadcn APIs without checking Shark docs and examples
- use registry examples as the primary “how it fits together” reference

## Principles

1. **Use existing components first.** Prefer Shark primitives and `registry/react/examples/` before custom UI. Use [`references/component-registry.md`](references/component-registry.md).
2. **Compose, don’t reinvent.** Settings-style flows combine documented parts (e.g. `Tabs` + `Card` + `Field`); dashboards use `Sidebar`, `Table`, charts — follow in-repo examples.
3. **Built-in variants before custom classes.** `variant`, `size`, and semantic tokens before re-styling primitives (see [`references/rules/styling.md`](references/rules/styling.md)).
4. **Semantic colors.** `bg-primary`, `text-muted-foreground`, `border-input` — not raw palette utilities for product UI.

## Source of truth

- Component docs: `content/docs/components/*.mdx`, `content/docs/ai-elements/*.mdx`
- Registry examples: `registry/react/examples/<component>/example-*.tsx`
- Implementations: `registry/react/components/<component>.tsx`
- Published registry items: `public/r/<name>.json` (generated from `registry/manifest/<name>.ts`; Vercel regenerates on deploy)
- LLM-oriented routes: `app/(llms)/` and `lib/llms.ts`
- Repository conventions: `AGENTS.md`

## Out of scope

- Next.js app routing, marketing pages, and non-registry app code unless the user explicitly asks.
- Hand-editing generated `public/r/*.json` unless explicitly requested.
- Running `pnpm registry:build` unless the user asks. Edit source and manifests; CI fails if committed JSON is stale; Vercel always regenerates on deploy.

## Critical rules

These rules are always enforced for Shark output. Each section links to longer guidance with Incorrect/Correct patterns where applicable.

### Styling & Tailwind → [`references/rules/styling.md`](references/rules/styling.md)

- **`className` for layout, not ad-hoc reskinning** — prefer variants and semantic tokens on primitives.
- **No `space-x-*` / `space-y-*`.** Use `flex` / `grid` + `gap-*`.
- **`size-*` when width and height match** — prefer over paired `w-*` / `h-*` for icons and square controls.
- **`truncate` shorthand** — not `overflow-hidden text-ellipsis whitespace-nowrap`.
- **No manual `dark:` palette pairs** when semantic tokens cover the case.
- **`cn()` from `@/lib/utils`** for conditional or merged classes.
- **No manual `z-index` on overlays** — `Dialog`, `Sheet`, `Drawer`, `AlertDialog`, `Menu`, `ContextMenu`, `Popover`, `Tooltip`, `HoverCard`, etc. own stacking.

### Forms & inputs → [`references/rules/forms.md`](references/rules/forms.md)

- **`FieldGroup` + `Field`** for form layout — not raw `div` + `space-y-*`.
- **`InputGroup` + `InputGroupInput` / `InputGroupTextarea`** — not raw `Input` / `Textarea` inside a group.
- **Addons** — actions beside inputs use `InputGroup` + `InputGroupAddon` patterns from docs.
- **Small option sets (2–7)** — prefer `ToggleGroup` + `ToggleGroupItem` over looping `Button` with manual active styling.
- **`FieldSet` + `FieldLegend`** for grouped checkboxes/radios — see Field docs.
- **Validation** — `invalid` on `Field`, it will be passed to the control automatically; disabled patterns per forms guide.

### Forms & validation → [`references/rules/forms.md`](references/rules/forms.md)

### Component structure & composition → [`references/rules/composition.md`](references/rules/composition.md)

- **Items inside the correct parent** — follow each primitive’s anatomy (e.g. list rows inside collection/list parts as documented).
- **Triggers** — use **`asChild`** with a single child (`Button`, `a`) per Shark patterns; do not use `render={...}` on triggers (see [`references/rules/migration.md`](references/rules/migration.md)).
- **Overlays need titles** — `DialogTitle`, `SheetTitle`, etc. for a11y; `className="sr-only"` when visually hidden.
- **Compound components** — use exported parts (`CardHeader`, `TabsList` + `TabsTrigger`, etc.) as in MDX, not one blob in a single slot unless the primitive is intentionally minimal.
- **`TabsTrigger` inside `TabsList`** — never bare triggers under `Tabs` root.
- **`Avatar` + `AvatarFallback`** — always provide a fallback for failed images.

### Use components, not one-off markup

- Prefer **`Alert`**, **`Separator`**, **`Skeleton`**, **`Badge`** (and other primitives) over bespoke styled `div`s when the use case matches docs.
- **Toasts** — follow Shark `toast` / docs patterns; do not hand-roll notification DOM unless required.

### Icons

- Follow **`AGENTS.md`** and [`references/rules/styling.md`](references/rules/styling.md) for decorative icons (`aria-hidden`, sizing in examples).
- In product UI, match the icon approach used in the same component’s registry examples and MDX.

### Shark-specific (always)

- Do not invent Shark or Ark APIs — confirm from MDX + `registry/react/components/<name>.tsx`.
- **Combobox** (and similar): `useFilter` + `useListCollection`, `collection` prop, `filter(inputValue)` from `onInputValueChange`, `collection.items.map(...)` in the list (`AGENTS.md`).
- **Select / listbox** with collections: `createListCollection` / `useListCollection` as in examples.
- **Charts**: `ChartTooltip` with `content={(props) => <ChartTooltipContent {...props} />}`; do not stub tooltip props; optional `accessibilityLayer={false}` for static previews (`AGENTS.md`).
- **Sidebar** doc previews: `absolute inset-0 overflow-hidden`, `Sidebar` with `className="absolute"`, `h-full` on `SidebarProvider`, native `overflow-y-auto` when `ScrollArea` breaks layout (`AGENTS.md`).

## Component discovery

Consult [`references/component-registry.md`](references/component-registry.md) for the full list and links to `./references/primitives/<name>.md`.

## Usage workflow

1. Identify intent (overlay, form, collection control, chart, etc.).
2. Open `references/component-registry.md` and the target `./references/primitives/<name>.md` when present.
3. Read `content/docs/components/<name>.mdx` or `content/docs/ai-elements/<name>.mdx` for install, anatomy, API, Ark doc link.
4. Open at least one `registry/react/examples/<component>/example-*.tsx`.
5. If behavior is unclear, read `registry/react/components/<component>.tsx` for Ark imports and prop passthrough.
6. In consumer apps, avoid re-adding components already under `resolvedPaths`.
7. Self-check a11y, controlled vs uncontrolled state, SSR/lazy-mount defaults, and **Critical rules** above.

### Updating / diffing installs

When merging upstream CLI output with local edits, use **`npx shadcn@latest add @shark/<component> --dry-run`** and **`--diff`** per file before overwriting; never **`--overwrite`** without explicit user approval. See [`references/cli.md`](references/cli.md).

## Installation reference

See [`references/cli.md`](references/cli.md).

```bash
npx shadcn@latest add @shark/<component>
```

## High-composition primitives

Read these guides first when touching overlays, collections, or app chrome:

- `./references/primitives/dialog.md`
- `./references/primitives/sheet.md`
- `./references/primitives/menu.md`
- `./references/primitives/context-menu.md`
- `./references/primitives/popover.md`
- `./references/primitives/select.md`
- `./references/primitives/combobox.md`
- `./references/primitives/field.md`
- `./references/primitives/sidebar.md`

## Detailed references

- [`references/rules/styling.md`](references/rules/styling.md) — Semantic colors, variants, `className`, spacing, `size-*`, `truncate`, dark mode, `cn()`, z-index
- [`references/rules/forms.md`](references/rules/forms.md) — `FieldGroup`, `Field`, `InputGroup`, `ToggleGroup`, `FieldSet`, validation
- [`references/rules/composition.md`](references/rules/composition.md) — Trigger/content hierarchies, `asChild`, compound parts
- [`references/rules/migration.md`](references/rules/migration.md) — Radix/shadcn habits vs Shark/Ark (`render` → `asChild`, etc.)
- [`references/cli.md`](references/cli.md) — CLI commands, `@shark/*`, dry-run / diff
- Theming / CSS variables — `content/docs/(root)/styling.mdx` and installation docs in `content/docs/(root)/`

## Output checklist

Before returning code:

- imports and props match Shark docs and/or source
- composition matches Ark patterns used in Shark (triggers,  collection objects)
- explicit `type` on buttons in forms; labels wired for controls
- combobox/select examples use collection + filter patterns when applicable
- **Critical rules** (styling, forms, composition, CLI) satisfied
