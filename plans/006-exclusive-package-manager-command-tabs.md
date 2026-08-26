# Plan 006: Exclusive package-manager command tabs and a tiny test runner

> **Executor instructions**: Follow this plan step by step. Run every
> verification command and confirm the expected result before moving to the
> next step. If anything in the "STOP conditions" section occurs, stop and
> report — do not improvise. When done, update the status row for this plan
> in `plans/README.md` — unless a reviewer dispatched you and told you they
> maintain the index.
>
> **Drift check (run first)**: `git diff --stat 1261047..HEAD -- lib/highlight-code.ts components/code-block.tsx package.json`
> If any in-scope file changed since this plan was written, compare the
> "Current state" excerpts against the live code before proceeding; on a
> mismatch, treat it as a STOP condition.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `1261047`, 2026-08-24

## Why this matters

Docs install snippets go through Shiki transformers in `lib/highlight-code.ts`, then MDX command tabs (`mdx-components.tsx`) read `__yarn__` / `__pnpm__` / `__bun__`. The `npx create-` branch sets the correct yarn/pnpm strings, then a later non-exclusive `if (raw.startsWith("npx"))` overwrites them. Installation docs such as `content/docs/installation/next.mdx` therefore show `yarn create-next-app@latest` and `pnpm dlx create-next-app@latest` instead of `yarn create …` / `pnpm create …`.

The same module also ignores `CodeBlock`'s `showLineNumbers` prop, and the highlight LRU cache key omits that option. This plan also adds the repo's first `pnpm test` script so later plans have a verification baseline.

## Current state

`lib/highlight-code.ts` transformer (non-exclusive `if`s):

```ts
if (raw.startsWith("npx create-")) {
  node.properties.__npm__ = raw;
  node.properties.__yarn__ = raw.replace("npx create-", "yarn create ");
  node.properties.__pnpm__ = raw.replace("npx create-", "pnpm create ");
  node.properties.__bun__ = raw.replace("npx", "bunx --bun");
}

if (raw.startsWith("npm create")) { /* ... */ }

if (raw.startsWith("npx")) {
  node.properties.__npm__ = raw;
  node.properties.__yarn__ = raw.replace("npx", "yarn");
  node.properties.__pnpm__ = raw.replace("npx", "pnpm dlx");
  node.properties.__bun__ = raw.replace("npx", "bunx --bun");
}
```

`highlightCode` cache key is `pre-tab-size-2:${language}:${code}` only (`lib/highlight-code.ts` around the `createHash` call). `showLineNumbers` defaults to true inside `highlightCode` but is not part of the key.

`components/code-block.tsx` declares `showLineNumbers?: boolean` on `CodeBlockProps` but destructures only `title`, `code`, `copyButton`, `lang`, `className`, `...rest` and calls `highlightCode(code, lang)` with no options.

`package.json` has no `test` script. `tsx` is already a devDependency (`tsx` ^4). There are zero `*.test.ts` files.

Conventions: named exports, no default export in `lib/*`. AGENTS.md quality checks: `pnpm lint:check`. Do not add Vitest/Jest — use Node's test runner via `tsx --test` (already available). PRODUCT.md: docs are English.

Exemplar for small lib helpers: `lib/url.ts` (`absoluteUrl`, named exports, no classes).

## Commands you will need

| Purpose | Command | Expected on success |
|---------|---------|---------------------|
| Tests | `pnpm test` | exit 0; new tests listed as pass |
| Lint | `pnpm lint:check` | exit 0, or only pre-existing issues outside in-scope files |

## Suggested executor toolkit

- Node test runner docs: `tsx --test` runs `node:test` files.

## Scope

**In scope**:
- `lib/highlight-code.ts`
- `lib/highlight-code.test.ts` (create)
- `lib/url.test.ts` (create)
- `components/code-block.tsx`
- `package.json` (`scripts.test` only)

**Out of scope**:
- Changing MDX docs copy or `mdx-components.tsx` tab UI
- Shiki themes, LRU size/TTL
- CI wiring (plan 010)
- Full app/e2e tests
- `pnpm registry:build` / `public/r`

## Git workflow

Work on the **current branch**. Do not create a new branch, stash, or switch. Touch only in-scope paths. Do not commit unless the operator asks. Observed message style if you do commit: short imperative or `fix:` / `chore:` (e.g. `chore: upgrade Formisch to v1`).

## Steps

### Step 1: Extract exclusive command variants

In `lib/highlight-code.ts`, export a pure helper (name it `packageManagerCommandVariants`) that takes the raw snippet string and returns `{ npm, yarn, pnpm, bun } | null`.

Match **most-specific first** with `if` / `else if`, in this order:

1. `npm install` → yarn `yarn add`, pnpm `pnpm add`, bun `bun add`
2. `npx create-` → yarn `yarn create ` (note the space after create), pnpm `pnpm create `, bun `bunx --bun` replacing `npx`
3. `npm create` → yarn `yarn create`, pnpm `pnpm create`, bun `bun create`
4. `npx` → yarn `yarn`, pnpm `pnpm dlx`, bun `bunx --bun`
5. `npm run` → yarn `yarn`, pnpm `pnpm`, bun `bun`

If none match, return `null`. In the Shiki `code(node)` transformer, call this helper once and assign `__npm__` / `__yarn__` / `__pnpm__` / `__bun__` only when non-null. Keep assigning `__raw__` as today.

**Verify**: `rg 'else if \\(raw.startsWith\\("npx"\\)' lib/highlight-code.ts` → a match (or equivalent exclusive chain). `rg 'if \\(raw.startsWith\\("npx"\\)' lib/highlight-code.ts` should not show a second non-else `npx` branch that can run after `npx create-`.

### Step 2: Include `showLineNumbers` in highlight options and cache key

In `highlightCode`, include `showLineNumbers` in the SHA-256 cache key (e.g. `pre-tab-size-2:${language}:${showLineNumbers}:${code}`). Read `options` **before** computing the key so default `true` is hashed consistently.

In `components/code-block.tsx`, destructure `showLineNumbers` (default `true`) and pass `{ showLineNumbers }` into `highlightCode`. Do not leave the prop only on `...rest`.

**Verify**: `rg 'showLineNumbers' components/code-block.tsx` → destructure + `highlightCode` call. `rg 'showLineNumbers' lib/highlight-code.ts` → appears in the cache key string.

### Step 3: Add `pnpm test` and characterization tests

Add to `package.json` scripts:

```json
"test": "tsx --test lib/highlight-code.test.ts lib/url.test.ts"
```

Create `lib/highlight-code.test.ts` using `node:test` and `node:assert/strict`. Import `packageManagerCommandVariants` from `./highlight-code.ts`. Cover at least:

- `npx create-next-app@latest` → yarn starts with `yarn create `, pnpm starts with `pnpm create `, bun uses `bunx --bun`
- `npx shadcn@latest add @shark/button` → yarn `yarn shadcn@latest add @shark/button`, pnpm `pnpm dlx shadcn@latest add @shark/button`
- `npm install next` → `yarn add next` / `pnpm add next`
- `npm run build` → `yarn build` / `pnpm build`
- unrelated source (`const x = 1`) → `null`

Create `lib/url.test.ts` that sets `process.env.NEXT_PUBLIC_SITE_URL` in a `before`/`after` (or try/finally) and asserts `absoluteUrl("/r/button.json")` concatenates without a double slash. Also assert that with the env unset, `absoluteUrl("/docs")` uses `SITE_CONFIG.url` from `config/site.ts` (today that is the production site URL). Restore env so tests do not leak.

Do **not** import Shiki-heavy paths beyond the helper; if importing `highlight-code.ts` is slow because it loads Shiki, that is acceptable for two files. Do not mock Shiki.

**Verify**: `pnpm test` → exit 0, both files pass.

### Step 4: Lint

**Verify**: `pnpm lint:check` → exit 0 for the files you touched (fix ultracite issues you introduced).

## Test plan

- New: `lib/highlight-code.test.ts` cases listed in Step 3 (happy path + the overwrite regression + non-command source).
- New: `lib/url.test.ts` env vs config base URL.
- Pattern: Node `node:test` + `assert/strict`; no Jest globals.
- Verification: `pnpm test` → all pass.

## Done criteria

- [ ] `npx create-` variants are not overwritten by the generic `npx` branch (exclusive matching)
- [ ] `CodeBlock` passes `showLineNumbers` into `highlightCode`; cache key includes that flag
- [ ] `pnpm test` exists and exits 0
- [ ] No files outside the in-scope list are modified (`git status`)
- [ ] `plans/README.md` status row 006 updated

## STOP conditions

- The transformer no longer lives in `lib/highlight-code.ts` (moved to MDX/rehype) — rewrite against the new home or STOP.
- `tsx --test` cannot import `lib/highlight-code.ts` because of ESM/Shiki (report the error; do not add Vitest). You may split the helper into `lib/package-manager-commands.ts` imported by both the transformer and tests — that split is allowed if import fails.
- `absoluteUrl` behavior in `lib/url.ts` no longer matches the excerpt (plan 001 already changed fallbacks) — still test current behavior; do not revert plan 001.

## Maintenance notes

- Adding a new package-manager prefix (`bunx`, `deno`, etc.) must get an `else if` **above** generic `npx`, plus a test.
- Reviewer: confirm `yarn create ` keeps the trailing space for `npx create-foo` → `yarn create foo`.
- Plan 010 should call `pnpm test` in CI once this lands.
