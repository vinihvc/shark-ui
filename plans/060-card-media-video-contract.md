# Plan 060: Make CardMedia's video contract real

> **Executor instructions**: Work in the existing checkout. Do not create or switch branches, stash, commit, push, or open a PR. Preserve unrelated dirty files. Follow each step and stop on a STOP condition.
>
> **Drift check (run first)**: `git diff --stat 2310c90..HEAD -- registry/react/components/card.tsx content/docs/components/card.mdx public/r/card.json`

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: `plans/059-card-media-radius.md`
- **Category**: bug
- **Planned at**: commit `2310c90`, 2026-08-31

## Why this matters

The public CardMedia API describes an image, video, or media area. The `image` variant currently gives full-size, cover behavior only to nested `<img>`, leaving a native `<video>` inconsistent despite the documented promise. Keep the documented video support and apply the same contained-media rules.

## Current state

- `content/docs/components/card.mdx:170–178` describes CardMedia as “Image, video, or media area.”
- `registry/react/components/card.tsx:43` has `[&_img]:size-full [&_img]:object-cover`; there is no corresponding video selector.
- CardMedia is a generic Ark `div`; do not introduce a video-specific component or prop.

## Commands you will need

| Purpose | Command | Expected result |
| --- | --- | --- |
| Focused lint | `pnpm lint:check -- registry/react/components/card.tsx content/docs/components/card.mdx` | exit 0 |
| Contract scan | `rg -n '\[&_img\]|\[&_video\]|Image, video' registry/react/components/card.tsx content/docs/components/card.mdx` | matching image and video styling plus documentation |
| Registry generation | `pnpm registry:build` | exit 0 |
| Whitespace | `git diff --check` | no output, exit 0 |

Do not run `pnpm test`, `pnpm typecheck`, or a browser without separate authorization.

## Scope

**In scope:**

- `registry/react/components/card.tsx`
- `content/docs/components/card.mdx`
- `public/r/card.json` (generated only)

**Out of scope:**

- Video controls, autoplay, poster images, or loading behavior.
- Adding a remote video example.
- Changing the three existing CardMedia variants.

## Steps

### Step 1: Style video as contained image media

Extend only the `image` variant's descendant selectors so nested `<video>` gets the same full-size and `object-cover` treatment as `<img>`. Preserve image behavior exactly.

**Verify**: contract scan returns both image and video selectors in the image variant.

### Step 2: Clarify the API wording

Keep the existing “Image, video, or media area” description, adding one concise sentence that image-layout styling applies to both `<img>` and `<video>` when `variant="image"` is selected.

**Verify**: the docs state the selector contract without introducing a new unsupported prop.

### Step 3: Regenerate the registry source

Run `pnpm registry:build`; do not edit JSON manually.

## Test plan

No DOM component-test harness exists. Validate that both supported native media tags receive identical sizing and object-fit classes through the targeted source scan and generated-artifact parity.

## Done criteria

- [ ] `<img>` and `<video>` receive identical layout treatment in `image` media.
- [ ] API documentation accurately describes that behavior.
- [ ] Focused lint, registry build, and `git diff --check` pass.
- [ ] No files outside Scope changed, excluding pre-existing unrelated changes.

## STOP conditions

- A repository convention prohibits styling video descendants through CardMedia.
- The generated CSS would make video controls inaccessible or unusable.
- The documentation team prefers to remove video from the supported contract instead of styling it.

## Maintenance notes

CardMedia governs layout only. Keep playback policy in consumer code so a registry primitive does not impose autoplay or control semantics.
