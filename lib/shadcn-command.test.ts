import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { formatShadcnCommandDisplay } from "./shadcn-command";

describe("formatShadcnCommandDisplay", () => {
  it("hides shadcn@latest in add commands", () => {
    assert.equal(
      formatShadcnCommandDisplay("npx shadcn@latest add @shark/button"),
      "npx shadcn add @shark/button"
    );
  });

  it("hides shadcn@latest in init commands", () => {
    assert.equal(
      formatShadcnCommandDisplay("pnpm dlx shadcn@latest init @shark/style"),
      "pnpm dlx shadcn init @shark/style"
    );
  });

  it("leaves unrelated commands unchanged", () => {
    assert.equal(formatShadcnCommandDisplay("yarn add foo"), "yarn add foo");
  });
});
