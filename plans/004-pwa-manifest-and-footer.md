# Plan 004: Give the PWA a name and restore footer Projects links

> **Executor instructions**: Follow this plan step by step. Run every
> verification command and confirm the expected result before moving to the
> next step. If anything in the "STOP conditions" section occurs, stop and
> report — do not improvise. When done, update the status row for this plan
> in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 1261047 -- public/site.webmanifest components/layout/footer.tsx config/site.ts`
> If those files no longer match "Current state", STOP.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `1261047`, 2026-08-24

## Why this matters

`public/site.webmanifest` has empty `name` and `short_name` and no `start_url`/`scope`, while `app/layout.tsx` still points `metadata.manifest` at it. Add-to-home-screen UI shows a blank app name. The site footer still renders a **Projects** column whose `PROJECTS_LINKS` array is empty (Blocks and Templates commented out) while the header already links to `/blocks`. After this plan, the manifest identifies Shark UI and the footer Projects column lists Blocks (not Templates — that route 404s).

## Current state

`public/site.webmanifest`:

```json
{
  "name": "",
  "short_name": "",
  "icons": [ ... 192 and 512 pngs ... ],
  "display": "standalone"
}
```

`config/site.ts`: `name: "Shark UI"`, `url: "https://shark.vini.one"`.

`app/layout.tsx:38`: `manifest: \`${SITE_CONFIG.url}/site.webmanifest\``.

`components/layout/footer.tsx`:

```ts
const PROJECTS_LINKS = [
  // { label: "Blocks", href: "/blocks" },
  // { label: "Templates", href: "/templates" },
] as const;
```

The Projects `<ul>` still maps that empty array (lines 83–98), leaving a heading with no links.

Do not enable Templates. Do not change Serwist / `PwaProvider` / offline-docs gating in this plan.

Conventions: footer links use `Link` for internal hrefs (see `DOCS_LINKS`). Semantic tokens already in the footer — do not restyle.

## Commands you will need

| Purpose | Command | Expected on success |
|---------|---------|---------------------|
| Manifest name | `rg '"name": "Shark UI"' public/site.webmanifest` | match |
| Footer blocks | `rg 'href: "/blocks"' components/layout/footer.tsx` | match |
| No templates footer | `rg '/templates' components/layout/footer.tsx` | no matches |

## Scope

**In scope**:
- `public/site.webmanifest`
- `components/layout/footer.tsx`

**Out of scope**:
- `components/pwa/**`, `app/sw.ts`, Serwist config
- Uncommenting Templates in `config/navigation.ts`
- Theme color / screenshots / maskable icons beyond name/start_url/scope
- `app/layout.tsx` unless the manifest path is wrong (it is not)

## Git workflow

- Stay on `main`. Do not branch, stash, switch, commit, or push unless asked.

## Steps

### Step 1: Fill the web app manifest

Set `name` and `short_name` to `Shark UI` (same as `SITE_CONFIG.name`). Add `"start_url": "/"` and `"scope": "/"`. Keep existing `icons` and `display`. Valid JSON.

**Verify**: `python3 -m json.tool public/site.webmanifest` → exit 0; `rg '"short_name": "Shark UI"' public/site.webmanifest` → match.

### Step 2: Footer Projects = Blocks only

Uncomment the Blocks entry in `PROJECTS_LINKS`. Delete the Templates comment entirely (do not leave a 404 href). Keep the Projects heading.

**Verify**: `rg 'Templates' components/layout/footer.tsx` → no matches; Blocks href present.

## Test plan

No test runner. JSON parse + grep. Do not add Playwright in this plan.

## Done criteria

- [ ] Manifest `name`/`short_name` are `Shark UI`; `start_url` and `scope` are `/`
- [ ] Footer Projects lists Blocks → `/blocks` and not Templates
- [ ] `plans/README.md` row 004 is DONE

## STOP conditions

- Icon files referenced in the manifest are missing from `public/` — report, do not invent new assets.
- Footer structure was refactored so `PROJECTS_LINKS` no longer exists — adapt only within `footer.tsx` or STOP if the column is gone.

## Maintenance notes

- When Templates ships as a real route, add it back to `PROJECTS_LINKS` and nav together.
- Reviewer: PWA install still depends on Serwist opt-in; this plan only fixes identity of the linked manifest.
