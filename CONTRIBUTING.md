# Contributing to shark-ui

Thanks for your interest in contributing to shark-ui. This document covers how to get set up and submit changes.

## Development Setup

1. **Clone and install**

   ```bash
   git clone https://github.com/vinihvc/shark-ui.git
   cd shark-ui
   pnpm install
   ```

2. **Start the docs site**

   ```bash
   pnpm dev
   ```

   Docs run at http://localhost:3000.

## Commands

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `pnpm dev`        | Start docs site (Turbo mode)         |
| `pnpm build`      | Build production                     |
| `pnpm typecheck`  | Run TypeScript type-check            |
| `pnpm lint:check` | Run lint (Ultracite/Biome)           |
| `pnpm lint:fix`   | Auto-fix lint issues                |
| `pnpm registry:build` | Rebuild component registry JSON |

## Before Submitting

- Run `pnpm lint:fix` before committing (lint-staged runs automatically on pre-commit).
- Run `pnpm typecheck` to ensure there are no type errors.
- Run `pnpm build` to verify the project builds.

## Project Structure

- **`registry/react/components/`** — Component implementations
- **`registry/manifest/`** — Component metadata (dependencies, etc.)
- **`registry/react/examples/`** — Usage examples shown in docs
- **`content/docs/`** — MDX documentation
- **`public/r/`** — Built registry output (generated)

## Component Guidelines

- Components wrap Ark UI primitives with Tailwind styling.
- Use `cn()` from `@/lib/utils` for class merging.
- Use `tailwind-variants` for variant-based styling.
- Add `data-slot` on component wrappers.
- Use named exports (not default) for components.

## Pull Requests

1. Open an issue or discuss the change first if it's substantial.
2. Fork, create a branch, and make your changes.
3. Ensure lint and build pass.
4. Submit a PR with a clear description of the change.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
