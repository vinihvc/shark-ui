# Plan 008: Skip Shiki when packaging compositions in `registry:build`

> **Executor instructions**: Follow this plan step by step. Run every
> verification command and confirm the expected result before moving to the
> next step. If anything in the "STOP conditions" section occurs, stop and
> report — do not improvise. When done, update the status row for this plan
> in `plans/README.md` — unless a reviewer dispatched you and told you they
> maintain the index.
>
> **Drift check (run first)**: `git diff --stat 1261047..HEAD -- lib/compositions.ts lib/blocks.ts lib/templates.ts scripts/build-registry.mts lib/registry.ts`
> If any in-scope file changed since this plan was written, compare the
> "Current state" excerpts against the live code before proceeding; on a
> mismatch, treat it as a STOP condition.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: perf
- **Planned at**: commit `1261047`, 2026-08-24

## Why this matters

`scripts/build-registry.mts` `processCompositions` calls `getPublishedBlocks()` and `getPublishedTemplates()`, which run `highlightCode` (Shiki) for every composition file, then **discard** `highlightedContent` when writing `public/r/<name>.json` (only `content`, `path`, `target`, `type` are serialized). That CPU cost hits every `pnpm registry:build` and `prebuild`. PRODUCT.md asks for cacheable delivery and loading expensive work only when needed; the docs site still needs highlighted HTML, but the CLI JSON does not.

Separately, `validateFile` `readFile`s each source, then `loadPublishedComposition` reads the same paths again.

## Current state

`lib/compositions.ts` — `createCompositionCatalog` (latest shape):

- `validateFile` reads via `readFile(toSourcePath(...))` then checks relative imports and `@/registry/react/components/<name>` vs `registryDependencies`.
- `loadPublishedComposition` (React `cache`) reads each file again, `prepareFileContent`, then `highlightedContent: await highlightCode(content, getLanguage(file.path))`.
- `getPublishedCompositions` always `await validateDefinitions()` then maps `loadPublishedComposition`.

Return value today:

```ts
return {
  getDefinition,
  getPublishedComposition,
  getPublishedCompositions,
  validateDefinitions,
};
```

`lib/blocks.ts` / `lib/templates.ts` — thin wrappers: `getPublishedBlocks = catalog.getPublishedCompositions` (same for templates).

`scripts/build-registry.mts` `processCompositions`:

```ts
const [blocks, templates] = await Promise.all([
  getPublishedBlocks(),
  getPublishedTemplates(),
]);
// ...
files: composition.files.map(({ content, path, target, type }) => ({
  content,
  path,
  target,
  type,
})),
```

`lib/registry.ts` — `PublishedCompositionFile` requires `highlightedContent: string`. Keep that type for the **site** loader. Introduce a slimmer type for registry JSON packaging, e.g. `CompositionArtifactFile` with `content` + definition fields, **without** `highlightedContent`.

Do **not** change the `/blocks` or `/templates` pages to skip highlighting in this plan (that was previously deferred: static export makes on-demand highlight hard). This plan is **build-script only** plus the catalog API needed to support it.

Conventions: named exports; `createCompositionCatalog` stays the single factory. `pnpm registry:build` is the only way to refresh `public/r` (AGENTS.md). After changing loaders, run `registry:build` and expect JSON **content** to stay equivalent (no localhost regressions — plan 001).

## Commands you will need

| Purpose | Command | Expected on success |
|---------|---------|---------------------|
| Registry build | `pnpm registry:build` | exit 0 |
| Sample JSON | `node -e "JSON.parse(require('fs').readFileSync('public/r/login-01.json','utf8'))"` | exit 0 |
| Lint | `pnpm lint:check` | exit 0 for touched files |

## Suggested executor toolkit

- AGENTS.md registry build section: do not hand-edit `public/r/*.json`.

## Scope

**In scope**:
- `lib/compositions.ts`
- `lib/registry.ts` (add a type for non-highlighted files if needed; do not rename all `Block*` aliases)
- `lib/blocks.ts`
- `lib/templates.ts`
- `scripts/build-registry.mts`
- regenerated `public/r/*.json` **only if** `registry:build` rewrites them (content should be identical aside from incidental formatting)

**Out of scope**:
- Deferring `highlightedContent` on `/blocks` client catalog (static-export constraint; previously rejected as a batch item)
- Deleting `_blocks` / `_templates` (plan 009)
- Changing `highlightCode` / Shiki themes
- Merging `lib/blocks.ts` and `lib/templates.ts` into one module

## Git workflow

Work on the **current branch**. Do not create a new branch, stash, or switch. Touch only in-scope paths. Do not commit unless the operator asks.

## Steps

### Step 1: Load composition files once without highlighting

In `createCompositionCatalog`:

1. Add an internal loader that, for one composition: validates category / single `registry:page` / unique sources (same rules as `validateDefinition`), reads each file **once**, runs the existing relative-import and `registryDependencies` checks on that string, then `prepareFileContent`.
2. Export `getCompositionArtifacts` (name flexible) from the catalog object: `cache`d list (or per-item) of compositions with `files` containing `content` but **not** calling `highlightCode`.
3. Keep `getPublishedCompositions` / `loadPublishedComposition` for the site: they should call the same single-read prepare path, then add `highlightedContent` via `highlightCode`. Do not leave a double `readFile` on the site path.

Wire `lib/blocks.ts` as `getBlockArtifacts` (or export `catalog.getCompositionArtifacts` under a clear name `getBlockRegistryItems`). Same for templates. Exact export names: `getBlockRegistryArtifacts` and `getTemplateRegistryArtifacts` so grep is obvious.

**Verify**: `rg 'highlightCode' lib/compositions.ts` — still used only on the published-for-site path. `rg 'getBlockRegistryArtifacts' lib/blocks.ts` → export exists.

### Step 2: Point `registry:build` at artifacts

In `processCompositions`, replace `getPublishedBlocks()` / `getPublishedTemplates()` with the artifact getters. Keep duplicate-name checks and `writeArtifact` field mapping unchanged (`content`, `path`, `target`, `type`).

**Verify**: `rg 'getPublishedBlocks' scripts/build-registry.mts` → no matches (unless used elsewhere in that file; they should not be). `rg 'getBlockRegistryArtifacts' scripts/build-registry.mts` → match.

### Step 3: Rebuild registry and confirm JSON still has source, not HTML highlight

Run `pnpm registry:build`.

Spot-check `public/r/login-01.json` and `public/r/dashboard-01.json` (and a template JSON if one is emitted, e.g. `ai-chat-01`): `files[].content` is TSX/source, not a Shiki `<pre` HTML string. `registryDependencies` still use `https://shark.vini.one` (or `NEXT_PUBLIC_SITE_URL` if set), not `localhost`.

**Verify**: `pnpm registry:build` → exit 0. `rg 'highlightedContent' public/r/login-01.json` → no matches. `rg '<pre' public/r/login-01.json` → no matches.

### Step 4: Lint

**Verify**: `pnpm lint:check` → exit 0 for touched files.

## Test plan

No new test file required unless plan 006's runner exists and you want a tiny assertion that artifact files lack `highlightedContent` — optional, not mandatory. Verification is `registry:build` + grep.

## Done criteria

- [ ] `processCompositions` does not call `highlightCode` (directly or via `getPublished*`)
- [ ] Site `getPublishedBlocks` / `getPublishedTemplates` still attach `highlightedContent` for catalog pages
- [ ] Each composition file is read once per load (validate uses the same buffer)
- [ ] `pnpm registry:build` exits 0; sample JSON has source `content`, not Shiki HTML
- [ ] No files outside the in-scope list except generated `public/r/*.json`
- [ ] `plans/README.md` status row 008 updated

## STOP conditions

- `getPublishedBlocks` is used at **module top level** of `build-registry.mts` (side-effect import) — still replace that usage; if removing it breaks another import cycle, STOP and report.
- Composition JSON schema in shadcn expects extra fields you would drop — do not remove fields that exist today besides avoiding highlight; if `writeArtifact` starts failing schema, STOP.
- You cannot share one read between validate and publish without rewriting half of `lib/compositions.ts` — prefer a slightly longer but still single-read function over a risky rewrite; if the file has already been split, adapt to the live structure.

## Maintenance notes

- Future “highlight only the open Code tab” work should reuse the artifact loader and highlight in the App Router page, not in `registry:build`.
- Reviewer: confirm `/blocks` still receives `highlightedContent` (do not switch catalog pages to artifacts).
