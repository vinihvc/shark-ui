import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const CHAT_BUNDLE = [
  "attachment",
  "marker",
  "message",
  "message-bubble",
  "message-scroller",
  "prompt-input",
  "reasoning",
  "shimmer",
  "tool-result",
] as const;

const manifest: RegistryItemType = {
  dependencies: [],
  description:
    "Conversation primitives for chat: transcript, composer, tool calls, and reasoning.",
  name: "chat",
  registryDependencies: CHAT_BUNDLE.map((name) =>
    absoluteUrl(`/r/${name}.json`)
  ),
  type: "registry:ui",
};

export default manifest;
