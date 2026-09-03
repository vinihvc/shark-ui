# Plan 036: Make State documentation copyable in a fresh consumer project

> **Executor instructions**: Follow this plan step by step. Do not create a branch, do not switch branches, do not run `git stash`, do not commit, and touch only the files listed in Scope. The current working tree may contain unrelated changes. Do not modify any of them.
>
> **Drift check (run first)**: `git diff --stat 2310c90..HEAD -- content/docs/components/state.mdx registry/react/examples/state`
> If any in-scope file changed since this plan was written, compare the excerpts below against live code. Stop if they no longer match materially.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: docs
- **Planned at**: commit `2310c90`, 2026-08-31

## Why this matters

Shark UI is a copy-and-own registry. The `State` Usage snippet currently imports only State parts but renders an undefined `Icon` and `Button`; copying it therefore fails immediately. The default CLI command installs only `@shark/state`, while the documented examples also use Button, Avatar, Input Group, and Kbd. Keep `State` dependency-free, but make every documented copy path explicit about its companion primitives and icon package.

## Current state

- `content/docs/components/state.mdx` is the public State documentation.
- `registry/react/examples/state/` contains the rendered source shown by each `ComponentPreview`.
- `registry/manifest/state.ts` must remain dependency-free beyond `@ark-ui/react` and `tailwind-variants`; State itself composes ordinary elements and must not pull in example-only primitives.

Current broken Usage excerpt from `content/docs/components/state.mdx:60-83`:

```tsx
import {
  State,
  StateContent,
  StateDescription,
  StateHeader,
  StateMedia,
  StateTitle,
} from "@/components/ui/state";

<State>
  <StateHeader>
    <StateMedia variant="icon">
      <Icon />
    </StateMedia>
    <StateTitle>No projects yet</StateTitle>
    <StateDescription>Create a project to get started.</StateDescription>
  </StateHeader>
  <StateContent>
    <Button>Create project</Button>
  </StateContent>
</State>
```

The existing docs pattern for component dependencies is a concise `Step` before manual dependencies, for example `content/docs/components/combobox.mdx:32`. Keep the page in the mandated heading order: Installation, Anatomy, Usage, Examples, API Reference.

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 2310c90..HEAD -- content/docs/components/state.mdx registry/react/examples/state` | No relevant drift, or drift reviewed and compatible |
| Scoped lint | `pnpm exec ultracite check content/docs/components/state.mdx registry/react/examples/state` | Exit 0 |

Do not run `pnpm test`, `pnpm typecheck`, a build, or a browser. The repository rules require explicit operator authorization for those checks.

## Scope

**In scope**:

- `content/docs/components/state.mdx`

**Out of scope**:

- `registry/manifest/state.ts` and `public/r/state.json` — State has no runtime registry dependencies.
- `registry/react/components/state.tsx` — this is a documentation/DX correction, not an API or visual change.
- Any unrelated component documentation.

## Git workflow

- Work on the current checkout; do not create a branch, switch branches, stash, commit, push, or open a PR.
- Preserve unrelated dirty files.

## Steps

### Step 1: Document companion requirements without adding runtime dependencies

In `content/docs/components/state.mdx`, leave the basic CLI installation for `@shark/state` intact. In the manual flow, add a dependency note that the State source itself only requires Ark UI and Tailwind Variants. Add a separate, clearly-labelled note immediately before Usage explaining that the shown default composition also needs `Button` and `lucide-react`; include the matching `@/components/ui/button` and specific Lucide icon imports in the Usage import block. Replace the undefined `Icon` usage with the imported specific icon.

Also add one concise prerequisite sentence to each relevant example section:

- Default, Outline, Background: Button and Lucide icons.
- Avatar: Avatar and Button.
- Avatar Group: Avatar and Button.
- Input Group: Input Group and Kbd.
- Icon: Lucide icons only.

Use links under `/docs/components/<slug>` for Shark primitives. Do not list these example-only primitives in `registry/manifest/state.ts`.

**Verify**: `rg -n '<Icon|<Button|Avatar|InputGroup|Kbd' content/docs/components/state.mdx` → each referenced symbol has either an import in Usage or an explicit per-example prerequisite.

### Step 2: Preserve the public API documentation

Keep the existing frontmatter, anatomy, examples, and API tables intact except for prerequisite/import additions. Do not rename State parts or add a variant to the public API.

**Verify**: `rg -n 'State(Media|Header|Title|Description|Content)?' content/docs/components/state.mdx` → all six public parts remain documented.

### Step 3: Run the allowed focused check

Run the scoped Ultracite check only.

**Verify**: `pnpm exec ultracite check content/docs/components/state.mdx registry/react/examples/state` → exit 0.

## Test plan

No automated component test is needed: this plan changes Markdown examples only. The focused lint command is the regression gate; it must validate the MDX and all rendered example sources.

## Done criteria

- [ ] The Usage snippet has no undefined `Icon` or `Button` references.
- [ ] Each example’s non-State companion primitives are disclosed in docs.
- [ ] `registry/manifest/state.ts` is unchanged.
- [ ] Scoped Ultracite check exits 0.
- [ ] No out-of-scope file is modified.

## STOP conditions

- Stop if docs rendering requires a component dependency in `registry/manifest/state.ts`; report the mismatch instead of making State depend on its examples.
- Stop if the current State docs have materially changed from the quoted Usage block.
- Stop if the focused lint command reports violations unrelated to State docs/examples.

## Maintenance notes

When adding a new State example, list its non-State primitive prerequisites next to that example. The component must remain a light layout primitive; companion components belong to usage documentation, not its registry manifest.
