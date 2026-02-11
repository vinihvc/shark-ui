# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

shark-ui is a shadcn-style component library built on **Ark UI** (accessibility/behavior) and styled with **Tailwind CSS** + `tailwind-variants`. Components live in a registry and are consumed via CLI or copy-paste. The documentation site is a Next.js 16 App Router application using Fumadocs for MDX docs.

**Stack:** Next.js 16.1.6, React 19, Ark UI 5.x, Tailwind CSS 4, TypeScript 5.9, Fumadocs

## Commands

| Command | Description |
|---|---|
| `pnpm dev` | Start dev server (Turbo mode) |
| `pnpm build` | Build production (runs `registry:build` first) |
| `pnpm lint:check` | Check linting with Ultracite (Biome) |
| `pnpm lint:fix` | Auto-fix lint issues |
| `pnpm registry:build` | Rebuild component registry JSON files |

Linting uses **Ultracite** (wraps Biome). Run `pnpm lint:fix` before committing. Lint-staged is configured to run `registry:build` + `lint:fix` on pre-commit.

## Architecture

### Component Registry

Components are distributed via a registry system:

- **`registry/react/components/*.tsx`** — Component implementations (wrap Ark UI primitives)
- **`registry/manifest/*.ts`** — Component metadata (dependencies, registryDependencies, cssVars)
- **`registry/react/examples/[component]/*.tsx`** — Usage examples
- **`public/r/*.json`** — Built registry output (generated, do not edit)
- **`registry.json`** — Registry index (generated, do not edit)

The build script (`scripts/build-registry.mts`) reads components + manifests and outputs JSON files to `public/r/`.

### Component Authoring Pattern

Components wrap Ark UI primitives with Tailwind styling:

```tsx
"use client";

import { Accordion as ArkAccordion } from "@ark-ui/react/accordion";
import { cn } from "@/lib/utils";

// For components with variants, use tailwind-variants:
// import { tv, type VariantProps } from "tailwind-variants";

export const MyComponent = (props: React.ComponentProps<typeof ArkAccordion.Root>) => {
  const { className, ...rest } = props;
  return (
    <ArkAccordion.Root
      className={cn("...", className)}
      data-slot="my-component"
      {...rest}
    />
  );
};
```

Key conventions:
- Named exports (not default) for components
- `data-slot` attribute on every component wrapper
- Props extend `React.ComponentProps<typeof ArkPrimitive>`
- Use `cn()` from `@/lib/utils` (clsx + tailwind-merge) for class merging
- Use `tailwind-variants` (`tv`) for variant-based styling
- Add `"use client"` directive for interactive components
- Ark UI defaults like `lazyMount={true}`, `unmountOnExit={true}` for overlays

### Example File Convention

- `default.tsx` — Primary demo (shown at top of docs page)
- `example-*.tsx` — Feature-specific examples (e.g., `example-vertical.tsx`)
- `variant-*.tsx` — Variant showcases
- `size-*.tsx` — Size showcases
- `state-*.tsx` — State showcases
- Examples use **default exports**

### Documentation (MDX)

- **`content/docs/components/*.mdx`** — Component docs
- Uses Fumadocs with `<ComponentPreview>`, `<ComponentSource>`, `<CodeTabs>` custom components
- Frontmatter includes `title`, `description`, and `links` (doc/api URLs to Ark UI)
- Reference examples via `<ComponentPreview componentName="x" fileName="example-y" />`

### Styling

- Tailwind CSS v4 with `@theme` directive in CSS (no `tailwind.config` file)
- Global styles in `styles/global.css` with CSS variables for theming (light/dark)
- Semantic color tokens: primary, secondary, muted, accent, destructive, success, info, warning
- Custom animations defined in CSS: slideUp/slideDown, expand/collapse, marquee, indeterminate

### Path Aliases

- `@/*` maps to project root (e.g., `@/lib/utils`, `@/registry/react/components/...`)
