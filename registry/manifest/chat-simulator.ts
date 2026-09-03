import type { RegistryItemType } from "@/lib/registry";

const manifest: RegistryItemType = {
  dependencies: [
    "@ai-sdk/react",
    "@tanstack/ai",
    "@tanstack/ai-client",
    "@tanstack/ai-react",
    "ai",
  ],
  description:
    "Simulate deterministic conversations for AI SDK and TanStack AI.",
  files: [
    {
      path: "registry/react/hooks/use-chat-simulator.ts",
      type: "registry:hook",
    },
  ],
  name: "chat-simulator",
  type: "registry:lib",
};

export default manifest;
