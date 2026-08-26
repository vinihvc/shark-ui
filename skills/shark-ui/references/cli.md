# Shark UI CLI reference (focused)

Use when installing, previewing, or discovering Shark UI components via the shadcn CLI.

## CLI safety

- Use the project’s package runner consistently, for example:
  - `npx shadcn@latest ...`
  - `pnpm dlx shadcn@latest ...`
  - `bunx shadcn@latest ...`
- Do not invent undocumented CLI flags.

## Primary commands

### Add a component

```bash
npx shadcn@latest add @shark/<component>
```

Examples:

```bash
npx shadcn@latest add @shark/dialog
npx shadcn@latest add @shark/combobox
npx shadcn@latest add @shark/sidebar
```

Install the full component catalog in one step:

```bash
npx shadcn@latest add @shark/ui
```

### Preview before writing (when supported)

```bash
npx shadcn@latest add @shark/dialog --dry-run
npx shadcn@latest add @shark/dialog --diff
npx shadcn@latest add @shark/dialog --view
```

Use preview mode when the user asks what will change, a component may already exist locally, or you need to inspect generated files.

## Discovery (in-repo)

| Resource | Path |
|----------|------|
| Published registry JSON | `public/r/<name>.json` |
| Component source | `registry/react/components/<name>.tsx` |
| Docs | `content/docs/components/<name>.mdx` or `content/docs/ai-elements/<name>.mdx` |
| Examples | `registry/react/examples/<name>/example-*.tsx` |

## Discovery (public)

- Site and docs base: `https://shark.vini.one` (see `config/site.ts`)
- Registry JSON per item: `@shark/<component>.json`

## Manual install path

When the user wants full manual control:

1. Read the component MDX installation section for dependencies.
2. Install listed packages (typically `@ark-ui/react`, `tailwind-variants`, `lucide-react`, etc.).
3. Copy the `ComponentSource` target file(s) and fix imports to the app’s alias (`@/components/ui/...` or project convention).
4. Install `registryDependencies` listed in docs (e.g. Button, ScrollArea) in dependency order.
5. Align global CSS tokens with `content/docs/installation/manual.mdx` / Styling docs.

## Checklist before answering CLI questions

1. Command uses a documented install target (`@shark/<name>` or published `r/<name>.json` URL).
2. Flags are real shadcn CLI flags.
3. Fallback paths point to MDX + `public/r/<name>.json` when CLI search is unavailable.
