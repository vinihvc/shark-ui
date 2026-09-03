# Plan 077: Lock the Link Overlay CSS contract with DOM tests

> **Executor instructions**: Work in the current checkout. Do not create or
> switch branches, do not use `git stash`, and do not commit unless the
> operator explicitly asks. Follow each step and stop on a STOP condition.
> Skip updating `plans/README.md` if a reviewer dispatched you — they maintain
> the index.
>
> **Drift check (run first)**: `git diff --stat 2310c90..HEAD -- registry/react/components/link-overlay.tsx test/icon-tile.test.tsx package.json test/setup-dom.ts`
> If `LinkBox` / `LinkOverlay` class names or `data-slot` values differ from
> the excerpts below, stop and report.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: tests
- **Planned at**: commit `2310c90`, 2026-09-01

## Why this matters

Link Overlay is a CSS-only stretched-link primitive (same technique as Chakra
UI). There are zero tests. A class rename, a lost `static` on the overlay, or
`asChild` dropping `data-slot="link-overlay"` silently breaks whole-card
clicks and inner-link stacking. Characterization tests on the public class
and slot contract catch that without a browser.

Operator authorization to run the focused test command is granted for this
execution.

## Current state

- `registry/react/components/link-overlay.tsx` is the primitive.
- `test/icon-tile.test.tsx` is the DOM-test shape to copy (`node:test`,
  `@testing-library/react`, `afterEach(cleanup)`, `data-slot` assertions).
- `package.json` script `test` is:
  `tsx --import ./test/setup-dom.ts --test lib/*.test.ts test/*.test.tsx`
- `test/setup-dom.ts` already installs JSDOM for `test/*.test.tsx`.

`registry/react/components/link-overlay.tsx:7–39` currently contains:

```tsx
export const LinkBox = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "relative",
        "[&_a[href]:not([data-slot=link-overlay])]:relative [&_a[href]:not([data-slot=link-overlay])]:z-1",
        className
      )}
      data-slot="link-box"
      {...rest}
    />
  );
};

export const LinkOverlay = (props: React.ComponentProps<typeof ark.a>) => {
  const { className, ...rest } = props;

  return (
    <ark.a
      className={cn(
        "static",
        "-mx-1 -my-0.5 px-1 py-0.5",
        "rounded-md border border-transparent",
        "before:absolute before:inset-0 before:z-0 before:block before:h-full before:w-full before:cursor-inherit before:content-['']",
        "outline-none focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-ring/32",
        className
      )}
      data-slot="link-overlay"
      {...rest}
    />
  );
};
```

Do not change those classes. Tests assert fragments of them.

`test/icon-tile.test.tsx:53–66` is the asChild exemplar:

```tsx
it("forwards disabled state styling to an interactive child", () => {
  const { getByRole } = render(
    <IconTile asChild>
      <button disabled type="button">
        Settings
      </button>
    </IconTile>
  );
  const button = getByRole("button", { name: "Settings" });
  assert.equal(button.getAttribute("data-slot"), "icon-tile");
});
```

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 2310c90..HEAD -- registry/react/components/link-overlay.tsx test/icon-tile.test.tsx package.json test/setup-dom.ts` | component excerpts still match |
| Focused tests | `pnpm exec tsx --import ./test/setup-dom.ts --test test/link-overlay.test.tsx` | all new tests pass, exit 0 |
| Focused lint | `pnpm exec ultracite check test/link-overlay.test.tsx` | exit 0 |
| Whitespace | `git diff --check -- test/link-overlay.test.tsx` | no output, exit 0 |

Do not run `pnpm typecheck`, a browser, or the full `pnpm test` suite (other
suites in this dirty tree may be in progress). Do not modify `package.json`;
`test/*.test.tsx` is already discovered.

## Scope

**In scope**:

- `test/link-overlay.test.tsx` (create)

**Out of scope**:

- `registry/react/components/link-overlay.tsx`
- `package.json` / `test/setup-dom.ts`
- Docs and examples (plans 076 and 078)
- Computed-style / z-index hit-testing (JSDOM will not apply Tailwind)
- Next.js `Link` in tests (no router). Use a native `<a>` for `asChild`.

## Git workflow

- Work in the existing tree; do not create or switch branches, stash, commit,
  push, or open a PR.
- Preserve unrelated dirty files.

## Steps

### Step 1: Add `test/link-overlay.test.tsx`

Create the file modeled on `test/icon-tile.test.tsx`:

- Imports at the top: `assert` from `node:assert/strict`, `afterEach, describe, it` from `node:test`, `cleanup, render` from `@testing-library/react`, `LinkBox, LinkOverlay` from `@/registry/react/components/link-overlay`.
- `afterEach(cleanup)`.
- `describe("LinkOverlay", () => { ... })`.

Three `it` cases, no more:

1. **Overlay marker and stretch classes.** Render
   `<LinkBox><LinkOverlay href="/post">Title</LinkOverlay></LinkBox>`.
   `getByRole("link", { name: "Title" })` must have
   `data-slot="link-overlay"`, `href="/post"`, and className fragments
   `static`, `before:absolute`, `before:inset-0`, `before:z-0`.

2. **Box containing block and inner-link raise selector.** Same tree plus
   `<a href="/author">Author</a>`. Query `[data-slot="link-box"]`. Assert
   className includes `relative`,
   `[&_a[href]:not([data-slot=link-overlay])]:relative`, and
   `[&_a[href]:not([data-slot=link-overlay])]:z-1`. The Author link must
   not have `data-slot="link-overlay"`.

3. **asChild forwards slot and stretch classes.** Render
   `<LinkOverlay asChild><a href="/custom">Custom</a></LinkOverlay>` inside
   `LinkBox`. The Custom link must have `data-slot="link-overlay"` and
   className fragments `static` and `before:absolute`.

Use `assert.ok`, `assert.equal`, and `assert.notEqual`. Do not snapshot
full class strings.

**Verify**: `pnpm exec tsx --import ./test/setup-dom.ts --test test/link-overlay.test.tsx` → all three pass.

### Step 2: Lint and whitespace

Run focused lint and `git diff --check` on the new file only.

**Verify**: both commands exit 0 with no whitespace complaints.

## Test plan

- New file `test/link-overlay.test.tsx` as specified in step 1.
- Structural pattern: `test/icon-tile.test.tsx`.
- Happy path, asChild forwarding, inner non-overlay link marker.
- No computed CSS, no click coordinates, no Next.js router.

## Done criteria

- [ ] `test/link-overlay.test.tsx` exists with the three cases above.
- [ ] `pnpm exec tsx --import ./test/setup-dom.ts --test test/link-overlay.test.tsx` exits 0.
- [ ] `pnpm exec ultracite check test/link-overlay.test.tsx` exits 0.
- [ ] `git diff --check -- test/link-overlay.test.tsx` is clean.
- [ ] `registry/react/components/link-overlay.tsx` is unmodified by this task.
- [ ] No files outside Scope changed by this task.

## STOP conditions

- The component class strings in “Current state” no longer match the file.
- The DOM test harness (`test/setup-dom.ts` or `@testing-library/react`) is
  missing.
- Making the assertions pass appears to require changing the primitive.
- `tsx --test` cannot load the new file without editing `package.json`.

## Maintenance notes

If overlay classes or `data-slot` values change, update these tests in the
same PR. Do not replace class-fragment checks with computed `z-index` unless
a real stylesheet is injected into JSDOM.
