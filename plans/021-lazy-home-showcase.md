# Plan 021: Stop shipping the desktop showcase to mobile and remove duplicate demo mounts

> **Executor instructions**: Follow every step. Browser and full tests remain gated by AGENTS.md §15. Update plan 021 in `plans/README.md` only when all authorized checks pass.
>
> **Drift check (run first)**: `git diff --stat 1261047..HEAD -- 'app/(app)/(home)/page.tsx' 'app/(app)/(home)/_components/components-examples.tsx' 'app/(app)/(home)/_components'`

## Status

- **Priority**: P2
- **Effort**: M
- **Risk**: MED
- **Depends on**: plan 017
- **Category**: performance
- **Planned at**: commit `1261047`, 2026-08-26

## Why this matters

The homepage hides `ComponentsExamples` below the `md` breakpoint with CSS, but the server still emits it and the client still downloads/hydrates its dependencies. The module statically imports 16 demos and mounts Login, Avatar, Compute, and Commerce in more than one responsive layout. This adds JavaScript and DOM work to mobile for content users never see.

## Current state

- `app/(app)/(home)/page.tsx:32-38` always renders `<ComponentsExamples className="max-md:hidden" />` inside an `aria-hidden` wrapper.
- `app/(app)/(home)/_components/components-examples.tsx:1-16` statically imports 16 demos.
- The same four demos appear in both medium and large layout branches later in that file.
- The showcase is decorative (`aria-hidden`) and must not become keyboard- or screen-reader-visible.
- This is Next.js with repo-specific generated agent rules; inspect the relevant local Next docs before selecting a dynamic import/client boundary.

## Commands you will need

| Purpose | Command | Expected on success |
|---|---|---|
| Loading boundary | `rg -n "matchMedia|import\\(.*components-examples" 'app/(app)/(home)/_components'` | both patterns match in the loader |
| Direct import removed | `rg -n "from .*components-examples" 'app/(app)/(home)/page.tsx'` | no matches |
| Scoped lint | `pnpm exec ultracite check 'app/(app)/(home)/page.tsx' 'app/(app)/(home)/_components/components-examples.tsx' 'app/(app)/(home)/_components/components-examples-loader.tsx'` | exit 0 |

## Suggested executor toolkit

- Use the `vercel-react-best-practices` skill if available for the client boundary and bundle-loading decision.
- Read the applicable `node_modules/next/dist/docs/` section before using `next/dynamic`; AGENTS.md says this Next version may differ from prior knowledge.

## Scope

**In scope**: `app/(app)/(home)/page.tsx`, `app/(app)/(home)/_components/components-examples.tsx`, a new loader under the same `_components` directory, `plans/README.md`.

**Out of scope**: redesigning demos, modifying registry component implementations, changing homepage copy (plan 017), adding analytics, or loading the showcase on phones after interaction.

## Git workflow

Use the current branch and dirty working tree. Do not stash, switch branches, commit, push, or open a PR unless asked.

## Steps

### Step 1: Create a desktop-only loading boundary

Create a small client loader that evaluates `matchMedia("(min-width: 768px)")`, subscribes to changes, and dynamically imports `ComponentsExamples` only when it matches. The initial server/mobile render must not include demo markup or its module graph. Preserve a stable desktop container/minimum geometry to avoid a large layout shift. Clean up the media listener.

Do not call browser globals at module evaluation time. Do not suppress hydration warnings to hide a mismatch.

**Verify**: `rg -n "matchMedia|import\(.*components-examples" 'app/(app)/(home)/_components'` → both appear in the loader; `rg -n "ComponentsExamples" 'app/(app)/(home)/page.tsx'` → page references only the loader, not the heavy module directly.

### Step 2: Ensure each visible demo mounts once

Refactor `components-examples.tsx` so the active desktop layout mounts each demo once. If medium and large arrangements truly require different markup, choose one layout from the same media-query state before mounting children rather than rendering both and hiding one with CSS. Preserve current visual order and decorative accessibility semantics.

**Verify**: count JSX occurrences for Login, Avatar, Compute, and Commerce; each demo component has one mounted occurrence per selected render path, with no simultaneous CSS-hidden duplicate branch.

### Step 3: Verify statically and lint

Run `pnpm exec ultracite check 'app/(app)/(home)/page.tsx' 'app/(app)/(home)/_components/components-examples.tsx' 'app/(app)/(home)/_components/components-examples-loader.tsx'` → exit 0.

Ask the operator before either required runtime check: browser at 375px/1024px, and `pnpm typecheck`. If permission is not granted, leave those checks explicitly pending; do not claim runtime verification.

## Test plan

- Static: no direct heavy import from `page.tsx`; media listener has cleanup; no server reference to `window`/`matchMedia` outside the client boundary.
- With explicit browser permission: at 375px no showcase DOM appears; at ≥768px it appears once; resizing across the breakpoint loads/unloads without console errors or focusable decorative content.
- With explicit typecheck permission: `pnpm typecheck` exits 0.

## Done criteria

- [ ] Mobile initial render does not include or import the showcase bundle.
- [ ] Each displayed demo mounts once.
- [ ] Desktop geometry remains stable during lazy load.
- [ ] Decorative content stays hidden from assistive technology.
- [ ] Scoped lint passes; gated checks are either passing or recorded pending.
- [ ] README row updated.

## STOP conditions

- Local Next docs prohibit the intended dynamic-import pattern for this route.
- The solution requires changing registry demo source files.
- Hydration correctness cannot be established without a browser and permission is absent.
- Existing user edits overlap the responsive layout beyond safe reconciliation.

## Maintenance notes

CSS visibility is not a loading strategy. Future heavy decorative homepage modules should cross an explicit server/client loading boundary and avoid parallel hidden render trees.
