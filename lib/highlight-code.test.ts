import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { packageManagerCommandVariants } from "./highlight-code";

describe("packageManagerCommandVariants", () => {
  it("keeps npx create- distinct from generic npx", () => {
    const variants = packageManagerCommandVariants(
      "npx create-next-app@latest"
    );
    assert.ok(variants);
    assert.equal(variants.yarn.startsWith("yarn create "), true);
    assert.equal(variants.pnpm.startsWith("pnpm create "), true);
    assert.equal(variants.bun.includes("bunx --bun"), true);
  });

  it("maps generic npx to yarn / pnpm dlx", () => {
    const variants = packageManagerCommandVariants(
      "npx shadcn@latest add @shark/button"
    );
    assert.deepEqual(variants, {
      bun: "bunx --bun shadcn@latest add @shark/button",
      npm: "npx shadcn@latest add @shark/button",
      pnpm: "pnpm dlx shadcn@latest add @shark/button",
      yarn: "yarn shadcn@latest add @shark/button",
    });
  });

  it("maps every npx line in a multi-command block", () => {
    const variants = packageManagerCommandVariants(
      "npx shadcn@latest add @shark/chat-simulator\nnpx shadcn@latest add @shark/use-chat-simulator"
    );
    assert.deepEqual(variants, {
      bun: "bunx --bun shadcn@latest add @shark/chat-simulator\nbunx --bun shadcn@latest add @shark/use-chat-simulator",
      npm: "npx shadcn@latest add @shark/chat-simulator\nnpx shadcn@latest add @shark/use-chat-simulator",
      pnpm: "pnpm dlx shadcn@latest add @shark/chat-simulator\npnpm dlx shadcn@latest add @shark/use-chat-simulator",
      yarn: "yarn shadcn@latest add @shark/chat-simulator\nyarn shadcn@latest add @shark/use-chat-simulator",
    });
  });

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

  it("maps npm install to add", () => {
    const variants = packageManagerCommandVariants("npm install next");
    assert.equal(variants?.yarn, "yarn add next");
    assert.equal(variants?.pnpm, "pnpm add next");
  });

  it("maps npm run", () => {
    const variants = packageManagerCommandVariants("npm run build");
    assert.equal(variants?.yarn, "yarn build");
    assert.equal(variants?.pnpm, "pnpm build");
  });

  it("returns null for non-command source", () => {
    assert.equal(packageManagerCommandVariants("const x = 1"), null);
  });
});
