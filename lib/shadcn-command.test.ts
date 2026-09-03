import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  formatShadcnCommandDisplay,
  packageManagerCommandVariants,
} from "./shadcn-command";

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

describe("packageManagerCommandVariants", () => {
  it("maps npx followed by npm install to the selected package manager", () => {
    const variants = packageManagerCommandVariants(
      "npx shadcn@latest add @shark/chat-simulator && npm install ai @ai-sdk/react"
    );
    assert.deepEqual(variants, {
      bun: "bunx --bun shadcn@latest add @shark/chat-simulator && bun add ai @ai-sdk/react",
      npm: "npx shadcn@latest add @shark/chat-simulator && npm install ai @ai-sdk/react",
      pnpm: "pnpm dlx shadcn@latest add @shark/chat-simulator && pnpm add ai @ai-sdk/react",
      yarn: "yarn shadcn@latest add @shark/chat-simulator && yarn add ai @ai-sdk/react",
    });
  });
});
