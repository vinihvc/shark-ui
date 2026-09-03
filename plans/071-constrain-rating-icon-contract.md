# Plan 071: Make the Rating icon contract clone-safe

> **Executor instructions**: Work only in the current checkout. Do not create or switch branches, do not stash, commit, push, or open a PR. Preserve unrelated dirty changes. Update this plan's status row in `plans/README.md` only after the in-scope change and its allowed verification are complete.
>
> **Drift check (run first)**: `git diff --stat 2310c90..HEAD -- registry/react/components/rating.tsx test/rating.test.tsx public/r/rating.json`
> If an existing in-scope file changed since this plan was written, compare the icon prop and both `React.cloneElement` calls with the excerpts below. If the component no longer clones the same element twice, STOP and report; do not impose this type contract on a redesigned rendering path.

## Status

- **Priority**: P1
- **Effort**: M
- **Risk**: LOW
- **Depends on**: —
- **Category**: correctness, tests
- **Planned at**: commit `2310c90`, 2026-09-01

## Why this matters

`Rating` duplicates its `icon` element to draw the empty and filled layers of each rating item. Its public prop is currently `React.ReactNode`, which permits strings, numbers, `null`, fragments, and arrays, but the implementation immediately passes that value to `React.cloneElement`. Non-element values therefore fail at runtime; the `as React.ReactElement` casts only hide the mismatch from TypeScript. Narrowing the prop to the SVG React element the renderer requires makes invalid consumer usage fail at compile time and lets the clone calls stay type-safe.

## Current state

- `registry/react/components/rating.tsx` is the published registry component. It defaults to a Lucide SVG and uses two cloned copies for the unfilled and filled layers.
- `registry/react/examples/rating/example-custom-icon.tsx` demonstrates the supported custom icon shape: a Lucide `<HeartIcon />` element.
- `test/icon-tile.test.tsx` is the current DOM-test style: `node:test`, `node:assert/strict`, Testing Library `render`, and `cleanup` in `afterEach`.
- `public/r/rating.json` is generated registry output. Per `AGENTS.md`, never edit it by hand; regenerate it through `pnpm registry:build` after a registry-facing source change.

Current unsafe contract and usage from `registry/react/components/rating.tsx:13-19,66-79`:

```tsx
interface RatingProps extends React.ComponentProps<typeof ArkRatingGroup.Root> {
  icon?: React.ReactNode;
}

React.cloneElement(icon as React.ReactElement, {
  "data-bg": "",
} as React.ComponentProps<"svg">)

React.cloneElement(icon as React.ReactElement, {
  "data-fg": "",
  fill: "currentColor",
} as React.ComponentProps<"svg">)
```

Supported existing example from `registry/react/examples/rating/example-custom-icon.tsx:1-6`:

```tsx
<Rating allowHalf className="text-destructive" icon={<HeartIcon />} />
```

The desired public contract is a single SVG React element, such as `React.ReactElement<React.SVGProps<SVGSVGElement>>`. Use an equivalent precise type only if it accepts the existing Lucide example and gives `cloneElement` the `data-*` and `fill` SVG props without an unsafe assertion. Do not accept arbitrary `ReactNode` and do not add a runtime fallback for invalid nodes; this is a TypeScript public-API correction.

## Commands you will need

| Purpose | Command | Expected result |
| --- | --- | --- |
| Focused lint | `pnpm exec ultracite check registry/react/components/rating.tsx test/rating.test.tsx` | exit 0 |
| Registry artifact | `pnpm registry:build` | exit 0; the Rating JSON embeds the final source |
| Focused test (only with authorization) | `pnpm test -- test/rating.test.tsx` | all Rating tests pass |
| Whitespace | `git diff --check` | no errors in in-scope changes |

Do not run `pnpm test`, `pnpm typecheck`, or any browser check without separate explicit authorization, per `AGENTS.md`. `pnpm registry:build` is permitted and required for this registry-facing source change. If the build rewrites unrelated already-dirty registry JSON files, preserve those changes and do not include them as part of this plan.

## Scope

**In scope:**

- `registry/react/components/rating.tsx`
- `test/rating.test.tsx` (create)
- `public/r/rating.json` (generated only by `pnpm registry:build`)
- `plans/README.md` (status row only, after completion)

**Out of scope:**

- Any change to the public root name: it is `Rating`, not `RatingGroup`.
- Changing Ark UI state handling, half-rating clipping classes, focus styling, count behavior, or rating values.
- Changing the custom-icon example unless the final precise type rejects its existing `<HeartIcon />` usage; that outcome is a STOP condition, not a reason to weaken the component contract.
- Manually editing generated `public/r/rating.json`.

## Git workflow

- Work in the existing branch and checkout. The repository already has unrelated dirty files, including generated registry output; preserve all of them.
- Do not commit, push, create a branch, or open a PR unless the operator explicitly asks.

## Steps

### Step 1: Narrow the public icon prop to an SVG element

In `registry/react/components/rating.tsx`, replace `icon?: React.ReactNode` with a type that represents one SVG React element and supports SVG props. Keep the default `<StarIcon />` and the `Rating` export unchanged. Update the two `React.cloneElement` calls so TypeScript derives the SVG prop shape from the narrowed icon type; remove the assertions that falsely convert arbitrary nodes to `React.ReactElement`.

Do not alter the `data-bg`, `data-fg`, or `fill="currentColor"` layering behavior.

**Verify**: `pnpm exec ultracite check registry/react/components/rating.tsx` → exit 0.

### Step 2: Add focused rendering coverage for the supported icon contract

Create `test/rating.test.tsx`, modeled structurally after `test/icon-tile.test.tsx`:

1. Import `assert` from `node:assert/strict`, `afterEach`, `describe`, and `it` from `node:test`, plus Testing Library `cleanup` and `render`.
2. Render `<Rating count={1} />` and assert its item indicator contains both the background and foreground marker attributes. This protects the default icon's two-layer rendering.
3. Render `<Rating count={1} icon={<HeartIcon />} />` and assert both layers render an SVG. This protects the documented custom-icon path.
4. Call `cleanup` after every test.

Do not add an invalid-prop test by bypassing types with `as any` or `as never`; the point is that such usage must be rejected by TypeScript, not normalized at runtime.

**Verify**: after explicit test authorization only, `pnpm test -- test/rating.test.tsx` → all tests pass.

### Step 3: Regenerate and inspect the published artifact

Run `pnpm registry:build`. Inspect the `registry/react/components/rating.tsx` content embedded in `public/r/rating.json` to confirm it contains the narrowed icon type and no longer contains `icon?: React.ReactNode` or an assertion of `icon as React.ReactElement`.

**Verify**: `rg -n "icon\?: React\.ReactNode|icon as React\.ReactElement" registry/react/components/rating.tsx public/r/rating.json` → no matches.

### Step 4: Finish scoped checks

Run focused lint for the source and test, then whitespace validation. If the operator has explicitly authorized tests, run the focused test command too; otherwise record that test execution remains pending authorization in the plan index status note.

**Verify**: `pnpm exec ultracite check registry/react/components/rating.tsx test/rating.test.tsx && git diff --check` → both commands exit 0.

## Test plan

- `test/rating.test.tsx` covers the default star's background/foreground layers and the supported Lucide custom-icon path.
- Follow `test/icon-tile.test.tsx:1-9` for harness imports and cleanup, not a browser or integration-test pattern.
- Once explicitly authorized: `pnpm test -- test/rating.test.tsx` → all tests pass.
- Type-level assurance comes from the narrowed prop itself. If typecheck authorization is later granted, run `pnpm typecheck`; it must reject an attempted string or `null` `icon` prop while accepting `<HeartIcon />`.

## Done criteria

- [ ] `RatingProps.icon` accepts only the SVG element shape required by its two clone operations.
- [ ] The component contains no assertion that converts `icon` from an arbitrary React node into a cloneable element.
- [ ] Default and Lucide custom-icon layer rendering are covered in `test/rating.test.tsx`.
- [ ] `public/r/rating.json` is regenerated through `pnpm registry:build` and contains the updated source.
- [ ] Focused Ultracite check and `git diff --check` exit 0.
- [ ] If separately authorized, the focused Rating test exits 0; otherwise its execution is recorded as pending authorization.
- [ ] No files outside the in-scope list are edited by this work.
- [ ] The Plan 071 status row is updated in `plans/README.md`.

## STOP conditions

- The current `Rating` renderer no longer clones the icon twice or no longer requires an SVG element.
- A type precise enough to remove the casts rejects the existing `<HeartIcon />` example.
- Supporting a documented non-SVG icon (for example an image or arbitrary component tree) is a required compatibility promise; report it for an API-design decision rather than silently retaining `ReactNode`.
- `pnpm registry:build` fails or requires modifying a manifest or unrelated source file.

## Maintenance notes

The `icon` prop is intentionally an SVG element because Rating needs to clone it into two visual layers and set SVG-specific attributes. If a future design needs arbitrary icon content, redesign the renderer first (for example, accept a render function or separate foreground/background elements); do not widen this prop without removing the clone-based assumption and adding corresponding tests.
