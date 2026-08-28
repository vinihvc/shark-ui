import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  BORDER_RADIUS,
  createCssVars,
  GRAY_COLORS,
  PRIMARY_COLORS,
} from "./themes";

const byValue = <T extends { value: string }>(
  items: readonly T[],
  value: string
) => {
  const item = items.find((entry) => entry.value === value);
  assert.ok(item, `missing ${value}`);
  return item;
};

describe("createCssVars", () => {
  it("emits radius and overlayed primary for neutral + zinc + md", () => {
    const primary = byValue(PRIMARY_COLORS, "neutral");
    const gray = byValue(GRAY_COLORS, "zinc");
    const radius = byValue(BORDER_RADIUS, "md");
    const css = createCssVars(primary.cssVars, gray.cssVars, radius.cssVars);
    const rootBlock = css.slice(0, css.indexOf(".dark {"));
    const darkBlock = css.slice(css.indexOf(".dark {"));

    assert.ok(css.includes(":root {"));
    assert.ok(css.includes(".dark {"));
    assert.ok(css.includes("--radius: 0.5rem;"));
    assert.ok(
      rootBlock.includes(`--primary: ${primary.cssVars.light.primary};`)
    );
    assert.ok(
      darkBlock.includes(`--primary: ${primary.cssVars.dark.primary};`)
    );
  });

  it("uses red dark primary from PRIMARY_COLORS, not the light token", () => {
    const primary = byValue(PRIMARY_COLORS, "red");
    const gray = byValue(GRAY_COLORS, "slate");
    const radius = byValue(BORDER_RADIUS, "md");
    const css = createCssVars(primary.cssVars, gray.cssVars, radius.cssVars);
    const darkBlock = css.slice(css.indexOf(".dark {"));

    assert.ok(darkBlock.includes("--primary: var(--color-red-700);"));
    assert.ok(!darkBlock.includes("--primary: var(--color-red-600);"));
  });

  it("includes --code in :root and .dark", () => {
    const primary = byValue(PRIMARY_COLORS, "neutral");
    const gray = byValue(GRAY_COLORS, "zinc");
    const radius = byValue(BORDER_RADIUS, "md");
    const css = createCssVars(primary.cssVars, gray.cssVars, radius.cssVars);
    const rootBlock = css.slice(0, css.indexOf(".dark {"));
    const darkBlock = css.slice(css.indexOf(".dark {"));

    assert.ok(rootBlock.includes("--code:"));
    assert.ok(darkBlock.includes("--code:"));
  });
});
