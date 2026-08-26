# Plan 023: Publish “Migrating from shadcn/Radix to Shark UI” as public documentation

> **Executor instructions**: This plan adapts an existing internal reference into user-facing docs. Do not change component APIs to match the guide; the guide must match current source. Update plan 023 in `plans/README.md` when done.
>
> **Drift check (run first)**: `git diff --stat 1261047..HEAD -- skills/shark-ui/references/rules/migration.md 'content/docs/(root)' content/docs/meta.json 'app/(app)/docs/[[...slug]]/page.tsx'`

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: plan 018
- **Category**: docs / migration / SEO
- **Planned at**: commit `1261047`, 2026-08-26

## Why this matters

Developers arriving from shadcn/ui and Radix are a high-intent audience, and the repository already contains a strong migration reference at `skills/shark-ui/references/rules/migration.md`. It is agent-only today, so users cannot discover it through navigation or search. Publishing an adapted guide converts existing knowledge into a useful landing page without inventing new product surface.

## Current state

- `skills/shark-ui/references/rules/migration.md` covers the core mental-model shift plus Select collections, Toggle Group arrays, Accordion defaults, Input OTP, composition checks, and common anti-patterns.
- `content/docs/(root)/meta.json` controls root documentation navigation and does not list a migration page.
- Public consumer examples generally import installed components from `@/components/ui/...`; internal examples use `@/registry/react/components/...`. The public guide must use consumer paths.
- Shark triggers use `asChild` with one child where documented; do not port Radix `render={...}` assumptions.
- Component claims must be verified against `content/docs/components/<name>.mdx` and `registry/react/components/<name>.tsx`.

## Commands you will need

| Purpose | Command | Expected on success |
|---|---|---|
| Internal-path scan | `rg -n '@/registry|skills/shark-ui|render=|InputOTPGroup' 'content/docs/(root)/migration.mdx'` | no matches |
| Discovery links | `rg -n 'migration' 'content/docs/(root)/meta.json' 'content/docs/(root)/index.mdx' skills/shark-ui/references/rules/migration.md` | all three surfaces match |
| MDX lint | `pnpm exec ultracite check 'content/docs/(root)/migration.mdx' 'content/docs/(root)/index.mdx' skills/shark-ui/references/rules/migration.md` | exit 0 if MDX is supported by the installed command |

## Scope

**In scope**:

- `content/docs/(root)/migration.mdx` (create)
- `content/docs/(root)/meta.json`
- `content/docs/(root)/index.mdx` for one contextual cross-link
- `content/docs/(root)/skills.mdx` only if it currently discusses migration/internal agent knowledge and a link is natural
- `skills/shark-ui/references/rules/migration.md` only for a short maintenance pointer to the public guide; do not delete the agent reference
- `plans/README.md`

**Out of scope**: changing component implementations, documenting unsupported 1:1 equivalence, mass-editing component pages, or copying repository-only imports into public snippets.

## Git workflow

Use the current branch and dirty working tree. Do not stash, switch branches, commit, push, or open a PR unless asked.

## Steps

### Step 1: Verify every migration claim against current public API

Read the existing migration reference completely, then check the relevant public MDX and source for Select, Toggle Group, Accordion, Input OTP, Menu/Dialog triggers, and overlay named parts. Record any drift before writing. If the internal reference is stale, fix only the stale statement that is necessary to publish an accurate guide and keep it consistent with the public page.

**Verify**: each public snippet uses an export/prop present in current source and follows the anatomy in the corresponding MDX.

### Step 2: Create the public guide

Create `content/docs/(root)/migration.mdx` with:

1. Factual frontmatter, including unique `seoTitle`/`seoDescription` from plan 018.
2. Audience and migration strategy: migrate component-by-component, not import-path-only.
3. A compact shadcn/Radix → Shark/Ark mental-model table.
4. Verified examples for triggers/`asChild`, collection-backed Select/Combobox, Toggle Group array values, Accordion defaults, Input OTP anatomy, and overlay part names/titles.
5. A checklist covering controlled state, lazy mounting, child structure, accessibility, logical RTL utilities, and consumer import paths.
6. Links to the relevant public Shark component docs and installation page.

Adapt and reorganize the internal source; do not blindly duplicate its agent-only wording or internal paths. Keep code examples small and runnable.

**Verify**: `rg -n '@/registry|skills/shark-ui|render=|InputOTPGroup' 'content/docs/(root)/migration.mdx'` → no repository-only imports, internal references, or known wrong migration patterns.

### Step 3: Make it discoverable

Add `migration` to `content/docs/(root)/meta.json` near Installation/Skills, using the established metadata format. Add one contextual link from the docs introduction. Add a small “public version” maintenance link in the internal migration reference so future updates reconcile both surfaces.

**Verify**: `rg -n 'migration' 'content/docs/(root)/meta.json' 'content/docs/(root)/index.mdx' skills/shark-ui/references/rules/migration.md` → all three discovery/maintenance surfaces match.

### Step 4: Validate content

Run `pnpm exec ultracite check 'content/docs/(root)/migration.mdx' 'content/docs/(root)/index.mdx' skills/shark-ui/references/rules/migration.md` if the command accepts these paths; otherwise use the repo’s existing MDX lint path. If plan 018’s authorized link test exists, run `pnpm test` only with permission and confirm the new `/docs/migration` links resolve.

## Test plan

- Static scan for internal imports and known anti-patterns returns no matches.
- Every linked `/docs/...` target exists.
- With explicit browser permission: open `/docs/migration`, verify navigation entry, heading hierarchy, code blocks, and mobile layout.
- No browser/test/typecheck without explicit authorization.

## Done criteria

- [ ] `/docs/migration` is public and listed in root docs navigation.
- [ ] Guide covers the verified high-impact differences from the internal reference.
- [ ] Examples use consumer import paths and current Shark APIs.
- [ ] Intro links to the guide; internal reference points maintainers to the public version.
- [ ] SEO description is unique and useful.
- [ ] Permitted lint/static checks pass; gated checks are reported accurately.
- [ ] README row updated.

## STOP conditions

- Source and public component docs disagree on an API; report the mismatch instead of choosing silently.
- A migration example requires an API not currently shipped.
- The root meta format differs from the current assumption.
- Tests/browser are desired but not authorized.

## Maintenance notes

The internal skill reference may remain denser and agent-oriented, but its behavioral claims and public guide must not diverge. Review both whenever one of the covered primitives changes.
