import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const CHAT_BUNDLE = [
  "approval-card",
  "attachment",
  "bubble",
  "confirmation",
  "context",
  "marker",
  "message",
  "message-scroller",
  "model-selector",
  "prompt-input",
  "queue",
  "reasoning",
  "shimmer",
  "sources",
  "speech-input",
  "suggestion",
  "tool",
] as const;

const manifest: RegistryItemType = {
  dependencies: [],
  description:
    "Conversation primitives for chat: transcript, composer, tools, usage, and voice.",
  name: "chat",
  registryDependencies: CHAT_BUNDLE.map((name) =>
    absoluteUrl(`/r/${name}.json`)
  ),
  type: "registry:ui",
};

export default manifest;
