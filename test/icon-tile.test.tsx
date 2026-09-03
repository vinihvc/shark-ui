import assert from "node:assert/strict";
import { afterEach, describe, it } from "node:test";
import { cleanup, render } from "@testing-library/react";
import {
  IconTile,
  iconTileVariants,
} from "@/registry/react/components/icon-tile";

afterEach(cleanup);

describe("IconTile", () => {
  it("uses the documented default class contract", () => {
    const classes = iconTileVariants();

    assert.ok(classes.includes("border-border bg-muted"));
    assert.ok(classes.includes("--icon-tile-size:--spacing(10)"));
    assert.ok(classes.includes("--icon-tile-icon-size:--spacing(4.5)"));
    assert.ok(
      classes.includes("--icon-tile-radius:calc(var(--icon-tile-size)*0.3)")
    );
  });

  it("supports each visual variant and size", () => {
    assert.ok(
      iconTileVariants({ variant: "outline" }).includes("bg-background")
    );
    assert.ok(iconTileVariants({ variant: "solid" }).includes("bg-primary"));
    assert.ok(
      iconTileVariants({ variant: "frame" }).includes("p-(--icon-tile-inset)")
    );

    for (const [size, spacing] of [
      ["xs", "6"],
      ["sm", "8"],
      ["md", "10"],
      ["lg", "12"],
      ["xl", "14"],
    ] as const) {
      assert.ok(
        iconTileVariants({ size }).includes(
          `--icon-tile-size:--spacing(${spacing})`
        )
      );
    }
  });

  it("makes filled tiles circular", () => {
    assert.ok(
      iconTileVariants({ fill: true }).includes("--icon-tile-radius:9999px")
    );
  });

  it("forwards disabled state styling to an interactive child", () => {
    const { getByRole } = render(
      <IconTile asChild>
        <button disabled type="button">
          Settings
        </button>
      </IconTile>
    );
    const button = getByRole("button", { name: "Settings" });

    assert.ok(button.className.includes("disabled:pointer-events-none"));
    assert.ok(button.className.includes("aria-disabled:pointer-events-none"));
    assert.equal(button.getAttribute("data-slot"), "icon-tile");
  });
});
