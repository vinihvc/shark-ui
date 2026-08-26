# Plan 007: Contain `ComponentSource` file reads under `registry/react`

> **Executor instructions**: Follow this plan step by step. Run every
> verification command and confirm the expected result before moving to the
> next step. If anything in the "STOP conditions" section occurs, stop and
> report — do not improvise. When done, update the status row for this plan
> in `plans/README.md` — unless a reviewer dispatched you and told you they
> maintain the index.
>
> **Drift check (run first)**: `git diff --stat 1261047..HEAD -- components/component-source.tsx config/constants.ts`
> If any in-scope file changed since this plan was written, compare the
> "Current state" excerpts against the live code before proceeding; on a
> mismatch, treat it as a STOP condition.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none (plan 006 is independent; if 006 added `pnpm test`, you may add one extra test file listed below)
- **Category**: security
- **Planned at**: commit `1261047`, 2026-08-24

## Why this matters

`ComponentSource` reads a file at build time from `join(process.cwd(), REGISTRY_PATH, src)` with no resolved-path check. MDX authors already pass `src="../hooks/..."` and `src="../examples/..."`. A `src` with extra `..` segments can resolve outside `registry/` and, on a malicious docs PR, pull arbitrary files the build user can read into highlighted HTML in the static export.

This is defense in depth for a public contribution surface, not a claim that production MDX is untrusted today.

## Current state

`config/constants.ts`:

```ts
export const REGISTRY_PATH = "registry/react/components";
export const REGISTRY_EXAMPLES_PATH = "registry/react/examples";
```

`components/component-source.tsx`:

```ts
if (src) {
  const sourcePath = join(process.cwd(), REGISTRY_PATH, src);
  codeContent = readFileSync(sourcePath, "utf-8");
}
```

Legitimate MDX `src` values (must keep working):

- `src="/hotkeys.tsx"` (and other `/<file>.tsx` under components) — used widely under `content/docs/components/`
- `src="../hooks/use-is-mobile.tsx"` — `content/docs/hooks/use-is-mobile.mdx`
- `src="../examples/form/formisch/example-demo.tsx"` (and rhf/tanstack/formisch schema files) — `content/docs/forms/*.mdx`

Allowlist root must therefore be **`registry/react`**, not only `registry/react/components`. Do not ban `..` blindly.

Conventions: throw `Error` with a clear message when a path is rejected (same file already throws `"Code content not found"`). Prefer `node:path` `resolve` + `relative` (or `startsWith` on resolved paths with a trailing separator) over regex. Match existing named export `ComponentSource`.

Do not log file contents. Do not add example payloads that read `.env` or secrets in tests or docs.

## Commands you will need

| Purpose | Command | Expected on success |
|---------|---------|---------------------|
| Lint | `pnpm lint:check` | exit 0 (or only pre-existing issues outside in-scope files) |
| Tests (if plan 006 landed) | `pnpm test` | exit 0 including new path tests |

## Scope

**In scope**:
- `components/component-source.tsx`
- Optional helper `lib/registry-source-path.ts` (create) if you extract resolve+containment for tests
- Optional `lib/registry-source-path.test.ts` (create) **only if** `pnpm test` already exists from plan 006

**Out of scope**:
- `app/view/[type]/[category]/[file]/page.tsx` (static params; different loader)
- Changing MDX `src` strings
- Chart `dangerouslySetInnerHTML` / Shiki HTML sinks
- Reading files from `content/` or `app/`

## Git workflow

Work on the **current branch**. Do not create a new branch, stash, or switch. Touch only in-scope paths. Do not commit unless the operator asks.

## Steps

### Step 1: Resolve and contain

Implement a function (in `component-source.tsx` or `lib/registry-source-path.ts`):

1. `const resolved = resolve(process.cwd(), REGISTRY_PATH, src)`
2. `const root = resolve(process.cwd(), "registry/react")`
3. Allow the read only if `resolved === root` or `resolved.startsWith(root + sep)` (`sep` from `node:path`). On Windows-insensitive CI this repo is macOS/Linux; still use `sep`.
4. If not contained, throw `new Error("ComponentSource src is outside the registry")` (or similar) **before** `readFileSync`.
5. If contained, `readFileSync(resolved, "utf-8")` as today.

Keep the `code` prop path unchanged (inline code does not touch the filesystem).

**Verify**: `rg 'resolve\\(' components/component-source.tsx lib/registry-source-path.ts` → containment uses `resolve`. `rg 'readFileSync' components/component-source.tsx` → only after the check.

### Step 2: Tests if a runner exists

If `package.json` has `"test"`, add tests that:

- `../hooks/use-is-mobile.tsx` relative to `REGISTRY_PATH` resolves to a path under `registry/react/hooks/`
- `../examples/form/rhf/example-demo.tsx` is allowed
- `hotkeys.tsx` or `/hotkeys.tsx` is allowed under components
- `../../../package.json` (enough `..` to leave `registry/react`) **throws**

Assert thrown error; do **not** assert contents of `package.json`. If `pnpm test` does not exist yet, skip this step (plan 006 owns the runner).

**Verify**: `pnpm test` → pass, or skipped with a note in the README row if no test script.

### Step 3: Lint

**Verify**: `pnpm lint:check` → exit 0 for touched files.

## Test plan

- Containment unit tests listed in Step 2, modeled after `lib/url.test.ts` / `lib/highlight-code.test.ts` if they exist (`node:test` + `assert/strict`).
- Manual sanity: do not run `next build` unless you already have a reason; MDX `src` paths above must remain valid logically.

## Done criteria

- [ ] `readFileSync` only runs on paths resolved under `registry/react`
- [ ] Escape via `..` throws before read
- [ ] Documented relative `src` patterns (hooks, examples, `/file.tsx`) remain allowed
- [ ] No files outside the in-scope list are modified
- [ ] `plans/README.md` status row 007 updated

## STOP conditions

- `REGISTRY_PATH` is no longer `registry/react/components` — recompute the allowlist root from the actual constant; do not hardcode a wrong folder.
- ComponentSource starts fetching over HTTP instead of `readFileSync` — STOP.
- You believe you must allow `content/docs` files — STOP; that is a product decision, not this plan.

## Maintenance notes

- New MDX `src` pointing outside `registry/react` (e.g. `package.json`, `app/`) will fail the build — that is intended. Add an explicit second root only if maintainers decide to document non-registry files.
- Reviewer: watch for `path.join` vs `path.resolve` (join does not neutralize `..` the same way after containment).
