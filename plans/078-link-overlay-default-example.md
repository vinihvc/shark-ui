# Plan 078: Make the default Link Overlay demo a heading link on a Card

> **Executor instructions**: Work in the current checkout. Do not create or
> switch branches, do not use `git stash`, and do not commit unless the
> operator explicitly asks. Follow each step and stop on a STOP condition.
> Skip updating `plans/README.md` if a reviewer dispatched you — they maintain
> the index.
>
> **Drift check (run first)**: `git diff --stat 2310c90..HEAD -- registry/react/examples/link-overlay/example-default.tsx registry/react/examples/link-overlay/example-article.tsx content/docs/components/link-overlay.mdx`
> If the default example no longer wraps Card, or already has a heading
> overlay without footer buttons, stop and report.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: docs
- **Planned at**: commit `2310c90`, 2026-09-01

## Why this matters

The public Link Overlay page says the accessible pattern is a heading-only
link with the rest of the card as hit area. The default preview is a product
Card whose title is an `<a>` via double `asChild`, plus two inert `Button`s
in the footer. Shark `Button` is `position: relative`, so those CTAs eat
overlay clicks and do nothing. That is a worse demonstration than Chakra’s
“whole area is a link” preview, and it conflicts with the Accessibility
section on the same page. Keep the Card composition (Card docs point here)
but put the overlay on a heading and drop the dead buttons.

## Current state

- `registry/react/examples/link-overlay/example-default.tsx` is the default
  `ComponentPreview` (no `fileName`).
- `AGENTS.md` §4: `example-default.tsx` must default-export a component named
  `LinkOverlayDemo` (folder `link-overlay` + `Demo`).
- `example-article.tsx` already covers inner links — do not duplicate it.
- `content/docs/components/card.mdx` points to Link Overlay for whole-card
  destinations; keep a Card in the default demo.

`registry/react/examples/link-overlay/example-default.tsx` currently:

```tsx
import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardFooter,
  CardHeader,
  CardMedia,
  CardTitle,
} from "@/registry/react/components/card";
import { LinkBox, LinkOverlay } from "@/registry/react/components/link-overlay";

const LinkOverlayDemo = () => (
  <LinkBox asChild>
    <Card className="w-full max-w-xs">
      <CardMedia className="h-32 bg-muted" variant="image" />
      <CardHeader description="This sofa is perfect for modern tropical spaces, baroque inspired spaces.">
        <LinkOverlay asChild>
          <CardTitle asChild>
            <a href="#">Living room Sofa</a>
          </CardTitle>
        </LinkOverlay>
      </CardHeader>
      <CardFooter className="flex-row-reverse gap-2">
        <Button className="flex-1">Buy now</Button>
        <Button className="flex-1" variant="outline">
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  </LinkBox>
);

export default LinkOverlayDemo;
```

`content/docs/components/link-overlay.mdx:67–72` says the link stays on the
heading. Match that.

Registry examples: static copy, default export, `"use client"` only when
hooks/browser APIs are needed (this file should stay without it). Imports
from `@/registry/react/components/...`. Prefer `flex` + `gap-*` if you add
layout; here you should only remove footer layout.

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 2310c90..HEAD -- registry/react/examples/link-overlay/example-default.tsx registry/react/examples/link-overlay/example-article.tsx content/docs/components/link-overlay.mdx` | default still has Button footer before you edit |
| No dead CTAs | `rg -n 'Button|CardFooter' registry/react/examples/link-overlay/example-default.tsx` | no matches, exit 1 |
| Heading overlay | `rg -n '<h2>|<LinkOverlay href' registry/react/examples/link-overlay/example-default.tsx` | both present |
| Demo name | `rg -n 'LinkOverlayDemo' registry/react/examples/link-overlay/example-default.tsx` | the default export still uses this name |
| Focused lint | `pnpm exec ultracite check registry/react/examples/link-overlay/example-default.tsx` | exit 0 |
| Whitespace | `git diff --check -- registry/react/examples/link-overlay/example-default.tsx` | no output, exit 0 |

Do not run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or a browser.

## Scope

**In scope**:

- `registry/react/examples/link-overlay/example-default.tsx`

**Out of scope**:

- `example-article.tsx` / `example-with-link.tsx`
- `registry/react/components/link-overlay.tsx` and `card.tsx`
- `content/docs/components/link-overlay.mdx` (plan 076)
- `test/link-overlay.test.tsx` (plan 077)
- Adding an inner “Read more” link (belongs on the Article example)
- Re-raising `button` in `LinkBox`

## Git workflow

- Work in the existing tree; do not create or switch branches, stash, commit,
  push, or open a PR.
- Preserve unrelated dirty files.

## Steps

### Step 1: Replace the default demo body

Rewrite `registry/react/examples/link-overlay/example-default.tsx` to this
shape (keep sofa copy, Card media, and `className="w-full max-w-xs"`):

```tsx
import {
  Card,
  CardHeader,
  CardMedia,
  CardTitle,
} from "@/registry/react/components/card";
import { LinkBox, LinkOverlay } from "@/registry/react/components/link-overlay";

const LinkOverlayDemo = () => (
  <LinkBox asChild>
    <Card className="w-full max-w-xs">
      <CardMedia className="h-32 bg-muted" variant="image" />
      <CardHeader description="This sofa is perfect for modern tropical spaces, baroque inspired spaces.">
        <CardTitle asChild>
          <h2>
            <LinkOverlay href="#">Living room Sofa</LinkOverlay>
          </h2>
        </CardTitle>
      </CardHeader>
    </Card>
  </LinkBox>
);

export default LinkOverlayDemo;
```

Requirements:

- No `Button` import or `CardFooter`.
- One `LinkOverlay` with `href="#"`, nested in `h2`, not `asChild` wrapping
  `CardTitle`.
- Default export remains `LinkOverlayDemo`.
- Do not add `"use client"`.
- Do not add a second inner link.

**Verify**: the four `rg` checks in the command table; lint and whitespace
commands pass.

## Test plan

No new tests. Plan 077 covers the primitive. This file is a registry example;
regression is the scans above (no Button/CardFooter, heading + overlay,
`LinkOverlayDemo`).

## Done criteria

- [ ] Default example has no `Button` or `CardFooter`.
- [ ] The overlay is a heading child: `CardTitle asChild` → `h2` → `LinkOverlay`.
- [ ] Card + `CardMedia` composition is preserved.
- [ ] Default export is still named `LinkOverlayDemo`.
- [ ] `pnpm exec ultracite check registry/react/examples/link-overlay/example-default.tsx` exits 0.
- [ ] `git diff --check -- registry/react/examples/link-overlay/example-default.tsx` is clean.
- [ ] No files outside Scope changed by this task.

## STOP conditions

- Card’s public anatomy no longer includes `CardTitle asChild` or `CardHeader` `description`.
- The default preview is wired to a different file than `example-default.tsx`.
- Matching the Accessibility heading rule appears to require editing Card or Link Overlay primitives.

## Maintenance notes

Keep inner-link demos on `example-article.tsx`. If product CTAs return to this
Card, they need their own `href`/`onClick` and a stacking position above the
overlay — do not add inert buttons back.
