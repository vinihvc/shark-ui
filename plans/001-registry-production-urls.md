# Plan 001: Bake production registry URLs (never localhost) into `public/r`

> **Executor instructions**: Follow this plan step by step. Run every
> verification command and confirm the expected result before moving to the
> next step. If anything in the "STOP conditions" section occurs, stop and
> report — do not improvise. When done, update the status row for this plan
> in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 1261047 -- lib/url.ts scripts/build-registry.mts .github/workflows/build-registry.yml public/r/button.json`
> If those files no longer match "Current state", STOP.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: docs
- **Planned at**: commit `1261047`, 2026-08-24

## Why this matters

`npx shadcn@latest add @shark/<name>` follows `registryDependencies` inside `public/r/*.json`. Those URLs are produced by `absoluteUrl()` at `registry:build` time. When `NEXT_PUBLIC_SITE_URL` is unset and `NODE_ENV` is not `production`, `absoluteUrl` falls back to `http://localhost:3000`. Committed artifacts already contain that host, so CLI consumers resolving nested deps from git or a non-production build get broken URLs. PRODUCT.md requires registry metadata and installation output to stay aligned. After this plan, every `registryDependencies` entry is under `https://shark.vini.one` (or `NEXT_PUBLIC_SITE_URL` if explicitly set), and `registry:build` fails if `localhost` appears.

## Current state

- `lib/url.ts` — `getBaseUrl()` prefers env, then production `SITE_CONFIG.url`, then `VERCEL_URL`, then localhost.
- `config/site.ts` — `url: "https://shark.vini.one"`.
- `registry/manifest/button.ts:31` — `registryDependencies: [absoluteUrl("/r/spinner.json")]`.
- `registry/react/blocks/authentication/_registry.ts:31-37` — same `absoluteUrl("/r/....json")` pattern.
- `scripts/build-registry.mts` — writes `public/r/<name>.json`; no URL assertion. Top-level import of `getPublishedBlocks` evaluates block registries (and thus `absoluteUrl`) at module load.
- `public/r/button.json:25` — `"registryDependencies": ["http://localhost:3000/r/spinner.json"]`.
- `.github/workflows/build-registry.yml` — `pnpm run registry:build && pnpm run typecheck`; no `NEXT_PUBLIC_SITE_URL`.

`getBaseUrl` today:

```ts
const getBaseUrl = (): string => {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (envUrl) {
    return envUrl.replace(TRAILING_SLASH, "");
  }
  if (process.env.NODE_ENV === "production") {
    return SITE_CONFIG.url.replace(TRAILING_SLASH, "");
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(TRAILING_SLASH, "")}`;
  }
  return "http://localhost:3000";
};
```

Conventions: keep `absoluteUrl` as the single helper; do not hand-edit `public/r/*.json` — regenerate via `pnpm registry:build` (AGENTS.md). Match existing script style in `scripts/build-registry.mts` (named consts, no default export, `main().catch`).

PRODUCT constraint: public documentation and registry are English; site URL is `SITE_CONFIG.url`.

## Commands you will need

| Purpose | Command | Expected on success |
|---------|---------|---------------------|
| Rebuild registry | `pnpm registry:build` | exit 0; logs processed items |
| Guard localhost | `rg -l 'localhost:3000' public/r` | no files (empty) |
| Sample URL | `rg 'shark.vini.one/r/spinner' public/r/button.json` | at least one match |
| Lint | `pnpm lint:check` | exit 0 (or only pre-existing issues unrelated to touched files) |

There is no `pnpm test` script in this repo.

## Scope

**In scope**:
- `lib/url.ts`
- `scripts/build-registry.mts`
- `.github/workflows/build-registry.yml`
- regenerated `public/r/*.json` (via `pnpm registry:build` only)

**Out of scope**:
- Changing how docs pages / sitemap / OG metadata use `absoluteUrl` beyond the `getBaseUrl` fallback change (sitemap localhost is plan 002).
- Renaming `absoluteUrl` or rewriting every manifest to a new helper (unnecessary if `getBaseUrl` always uses the public site URL).
- `app/sitemap.ts`, blocks catalog, PWA, Drawer docs.

## Git workflow

- Stay on the current branch (`main`). Do **not** create a branch. Do **not** `git stash`. Do **not** switch branches.
- Do **not** commit unless the operator asks.
- Do **not** push.

## Steps

### Step 1: Make `getBaseUrl` default to the public site URL

In `lib/url.ts`, after the `NEXT_PUBLIC_SITE_URL` branch, return `SITE_CONFIG.url` (strip trailing slash). Remove the `NODE_ENV === "production"` special case, the `VERCEL_URL` branch, and the `http://localhost:3000` fallback.

Keep `NEXT_PUBLIC_SITE_URL` as an override for rare forks.

**Verify**: `rg 'localhost:3000' lib/url.ts` → no matches.

### Step 2: Fail `registry:build` if baked JSON contains localhost

In `scripts/build-registry.mts`, after `processBlocks()` / `processStandaloneManifests` succeed (end of `main`), scan every `public/r/*.json`. If file contents include `localhost` or `127.0.0.1`, throw with the filename. Also, if `registryDependencies` is an array of strings, each `http` URL must start with `https://shark.vini.one/` (read the host from `SITE_CONFIG.url` in `config/site.ts` so it stays in sync). Import `SITE_CONFIG` from `../config/site`.

Call this assertion at the end of `main` so a poisoned write cannot exit 0.

**Verify**: temporarily not required; step 3 is the real gate.

### Step 3: Pin the site URL in CI when generating the registry

In `.github/workflows/build-registry.yml`, set:

```yaml
env:
  NEXT_PUBLIC_SITE_URL: https://shark.vini.one
```

on the job (or on the "Typecheck and Build" step). Do not change `node-version` in this plan.

**Verify**: `rg 'NEXT_PUBLIC_SITE_URL' .github/workflows/build-registry.yml` → match.

### Step 4: Regenerate registry artifacts

Run `pnpm registry:build` from the repo root.

**Verify**:
- exit 0
- `rg -l 'localhost:3000' public/r` → empty
- `rg 'https://shark.vini.one/r/spinner.json' public/r/button.json` → match
- `rg 'https://shark.vini.one/r/button.json' public/r/login-01.json` → match (block deps)

## Test plan

No unit-test runner exists. Characterization is the assertion in `scripts/build-registry.mts` plus the `rg` gates above. Do not add Vitest in this plan.

## Done criteria

- [ ] `lib/url.ts` has no `localhost` fallback
- [ ] `pnpm registry:build` exits 0
- [ ] `rg -l 'localhost:3000' public/r` prints nothing
- [ ] `public/r/button.json` `registryDependencies` use `https://shark.vini.one`
- [ ] CI workflow sets `NEXT_PUBLIC_SITE_URL`
- [ ] No files outside scope except `plans/README.md` status
- [ ] `plans/README.md` row 001 is DONE

## STOP conditions

- `pnpm registry:build` fails for a reason other than the new URL assertion (fix the assertion if it is too strict on non-HTTP relative deps — relative `/r/...` strings, if any, are allowed; only `http` URLs are checked).
- A manifest uses `absoluteUrl` for a non-registry path that must stay local — report; do not special-case silently.
- Regenerating `public/r` would require editing files outside `public/r` besides the three source files listed.

## Maintenance notes

- Future `registry:build` on a machine with `NEXT_PUBLIC_SITE_URL=http://localhost:3000` will still fail the assertion — that is intended.
- Reviewer: confirm we did not hand-edit JSON; diff of `public/r` should be host rewrite + whatever the current tree already had from prior local builds.
- Follow-up deferred: fast `tsc` typecheck, Node 24 pin in CI (not this plan).
