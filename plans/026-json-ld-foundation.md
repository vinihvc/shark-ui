# Plan 026: Add minimal, factual JSON-LD for the site, docs, and changelog

> **Executor instructions**: Implement only schema supported by visible repository facts. Do not add ratings, pricing, company addresses, or other invented properties. Update plan 026 in `plans/README.md` when complete.
>
> **Drift check (run first)**: `git diff --stat 1261047..HEAD -- app/layout.tsx 'app/(app)/docs' components/seo lib/metadata.ts config/site.ts package.json`

## Status

- **Priority**: P3
- **Effort**: M
- **Risk**: LOW
- **Depends on**: plans 017, 018, 020, and 022
- **Category**: SEO
- **Planned at**: commit `1261047`, 2026-08-26

## Why this matters

After canonical metadata and route content are correct, small factual structured-data graphs can clarify site identity, documentation breadcrumbs, and dated changelog articles. JSON-LD will not compensate for weak content and does not guarantee rich results, so it belongs after the higher-priority plans and should remain deliberately minimal.

## Current state

- `app/layout.tsx` is the global server layout.
- `app/(app)/docs/[[...slug]]/page.tsx` has the current document title, description, URL, and breadcrumb-like slug hierarchy.
- Changelog pages expose a frontmatter date via `lib/changelog.ts`.
- `config/site.ts`/`SITE_CONFIG` supplies site name, URL, description, and creator; do not infer a legal Organization if the config does not substantiate one.
- No shared JSON-LD renderer currently provides safe `<` escaping.

## Scope

**In scope**:

- `components/seo/json-ld.tsx` (create)
- `components/seo/json-ld.test.ts` or `lib/json-ld.test.ts` if tests are authorized
- `app/layout.tsx`
- `app/(app)/docs/[[...slug]]/page.tsx`
- changelog detail route(s) under `app/(app)/docs/changelog`
- `package.json` only for explicit test registration
- `plans/README.md`

**Out of scope**: Product/SoftwareApplication schema, Review/AggregateRating, FAQ schema, schema for iframe previews, dynamic data fetching, and claims absent from source.

## Git workflow

Use the current branch and dirty working tree. Do not stash, switch branches, commit, push, or open a PR unless asked.

## Steps

### Step 1: Create one safe server JSON-LD renderer

Create a typed server component/helper that serializes a supplied plain object with `JSON.stringify(value).replaceAll("<", "\\u003c")` into `<script type="application/ld+json">`. It must not accept a pre-serialized arbitrary string. Follow the repository’s existing escaped inert-script pattern in `app/(app)/blocks/layout.tsx:27-39`.

**Verify**: `rg -n 'application/ld\+json|replaceAll' components/seo/json-ld.tsx` → both match; serialized `<script>` input cannot terminate the script element.

### Step 2: Add a factual site graph

Render `WebSite` at the root with `name`, canonical `url`, and `description` from `SITE_CONFIG`. Add `Organization`/`Person` only if the configuration and public pages clearly establish the entity and public URL/logo; otherwise omit it. Do not add `SearchAction` because the site does not expose a verified site-search URL template.

**Verify**: the root graph contains only repository-backed values and one canonical production URL.

### Step 3: Add docs breadcrumbs

On public docs pages, render `BreadcrumbList` items derived from actual public route segments/navigation labels, ending with the current page. Use absolute canonical URLs from `absoluteUrl`. Do not emit breadcrumbs for `/~offline` or `/view`.

**Verify**: for representative route data (`/docs/components/button`), item positions are 1..N, URLs are absolute and ordered, and final name equals the visible page title.

### Step 4: Add changelog Article only where dates are real

On individual changelog pages, emit `Article` (or `TechArticle`) with headline, description, canonical URL, and `datePublished` sourced from frontmatter. Add `dateModified` only if a separate truthful field exists. The changelog summary hub from plan 020 must not emit five duplicate Article bodies.

**Verify**: every article date comes directly from its page data and is ISO-8601 parseable.

### Step 5: Test serialization if authorized

With explicit `pnpm test` permission, add a node test covering normal data, absolute URLs, breadcrumb positions, and malicious `</script><script>` text escaping. Register the test in `package.json`. Run scoped lint. Browser or external rich-results tools require separate permission/network scope and are optional.

## Commands you will need

| Purpose | Command | Expected on success |
|---|---|---|
| Unsupported schema scan | `rg -n 'AggregateRating|Review|SearchAction|offers|price' components/seo app` | no new unsupported matches |
| Scoped lint | `pnpm exec ultracite check components/seo app/layout.tsx 'app/(app)/docs'` | exit 0 |
| Gated tests | `pnpm test` | exit 0 when explicitly authorized |

## Test plan

- With explicit test permission, cover normal serialization, hostile closing-script text, absolute canonical URLs, ordered breadcrumb positions, and ISO changelog dates.
- Without permission, run read-only serialization examples from the helper and record exact output; do not claim the unrun test suite passed.
- External schema validators and browser inspection are optional and require their respective permissions.

## Done criteria

- [ ] One safe reusable JSON-LD renderer escapes `<`.
- [ ] Root emits factual `WebSite` data only.
- [ ] Docs emit ordered absolute BreadcrumbList data.
- [ ] Individual changelog pages emit dated Article data; hub does not duplicate articles.
- [ ] No unsupported commercial/review claims were added.
- [ ] Scoped lint passes; gated tests are passing or documented deferred.
- [ ] README row updated.

## STOP conditions

- Required values cannot be established from repository content.
- Existing CSP or framework rules require a nonce/integration not represented in current code.
- Changelog dates are missing or ambiguous.
- Tests/browser are desired but not authorized.

## Maintenance notes

Structured data must stay synchronized with visible content and canonical metadata. Remove a property when its source of truth disappears; never preserve it solely because a validator once accepted it.
