import type { BlockDefinition } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

export const aiBlocks = [
  {
    category: "ai",
    dependencies: ["lucide-react"],
    description:
      "Align UI–style chat sidebar with search, pinned projects, grouped history, and user footer.",
    files: [
      {
        path: "blocks/ai/ai-chat-sidebar-01/page.tsx",
        source: "page.tsx",
        target: "app/ai-chat-sidebar/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/ai/ai-chat-sidebar-01/components/chat-sidebar.tsx",
        source: "components/chat-sidebar.tsx",
        target: "@components/ai-chat-sidebar/chat-sidebar.tsx",
        type: "registry:component",
      },
    ],
    meta: {
      featured: true,
      order: 1,
      previewHeight: 820,
    },
    name: "ai-chat-sidebar-01",
    preview: () => import("./ai-chat-sidebar-01/page"),
    registryDependencies: [
      absoluteUrl("/r/avatar.json"),
      absoluteUrl("/r/badge.json"),
      absoluteUrl("/r/button.json"),
      absoluteUrl("/r/input-group.json"),
      absoluteUrl("/r/separator.json"),
      absoluteUrl("/r/sidebar.json"),
    ],
    title: "AI Chat Sidebar",
    type: "registry:block",
  },
  {
    category: "ai",
    dependencies: ["lucide-react"],
    description:
      "Premium upgrade banner, prompt composer, model picker, think mode, and voice input.",
    files: [
      {
        path: "blocks/ai/ai-chat-composer-01/page.tsx",
        source: "page.tsx",
        target: "app/ai-chat-composer/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/ai/ai-chat-composer-01/components/chat-composer.tsx",
        source: "components/chat-composer.tsx",
        target: "@components/ai-chat-composer/chat-composer.tsx",
        type: "registry:component",
      },
    ],
    meta: {
      featured: true,
      order: 2,
      previewHeight: 320,
    },
    name: "ai-chat-composer-01",
    preview: () => import("./ai-chat-composer-01/page"),
    registryDependencies: [
      absoluteUrl("/r/announcement.json"),
      absoluteUrl("/r/button.json"),
      absoluteUrl("/r/file-upload.json"),
      absoluteUrl("/r/input-group.json"),
      absoluteUrl("/r/model-selector.json"),
      absoluteUrl("/r/popover.json"),
      absoluteUrl("/r/prompt-input.json"),
      absoluteUrl("/r/speech-input.json"),
    ],
    title: "AI Chat Composer",
    type: "registry:block",
  },
  {
    category: "ai",
    dependencies: ["lucide-react"],
    description:
      "Personalized empty chat state with greeting and suggestion chips.",
    files: [
      {
        path: "blocks/ai/ai-chat-empty-01/page.tsx",
        source: "page.tsx",
        target: "app/ai-chat-empty/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/ai/ai-chat-empty-01/components/chat-empty.tsx",
        source: "components/chat-empty.tsx",
        target: "@components/ai-chat-empty/chat-empty.tsx",
        type: "registry:component",
      },
    ],
    meta: {
      featured: false,
      order: 3,
      previewHeight: 480,
    },
    name: "ai-chat-empty-01",
    preview: () => import("./ai-chat-empty-01/page"),
    registryDependencies: [absoluteUrl("/r/suggestion.json")],
    title: "AI Chat Empty State",
    type: "registry:block",
  },
  {
    category: "ai",
    dependencies: ["lucide-react"],
    description:
      "Rich assistant thread with reasoning, tools, approval, plan, sources, and message actions.",
    files: [
      {
        path: "blocks/ai/ai-chat-thread-01/page.tsx",
        source: "page.tsx",
        target: "app/ai-chat-thread/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/ai/ai-chat-thread-01/demo-messages.ts",
        source: "demo-messages.ts",
        target: "@components/ai-chat-thread/demo-messages.ts",
        type: "registry:file",
      },
      {
        path: "blocks/ai/ai-chat-thread-01/components/chat-thread.tsx",
        source: "components/chat-thread.tsx",
        target: "@components/ai-chat-thread/chat-thread.tsx",
        type: "registry:component",
      },
    ],
    meta: {
      featured: true,
      order: 4,
      previewHeight: 820,
    },
    name: "ai-chat-thread-01",
    preview: () => import("./ai-chat-thread-01/page"),
    registryDependencies: [
      absoluteUrl("/r/approval-card.json"),
      absoluteUrl("/r/attachment.json"),
      absoluteUrl("/r/avatar.json"),
      absoluteUrl("/r/bubble.json"),
      absoluteUrl("/r/button.json"),
      absoluteUrl("/r/confirmation.json"),
      absoluteUrl("/r/message.json"),
      absoluteUrl("/r/message-scroller.json"),
      absoluteUrl("/r/plan.json"),
      absoluteUrl("/r/reasoning.json"),
      absoluteUrl("/r/sources.json"),
      absoluteUrl("/r/suggestion.json"),
      absoluteUrl("/r/task.json"),
      absoluteUrl("/r/tool.json"),
      absoluteUrl("/r/tooltip.json"),
    ],
    title: "AI Chat Thread",
    type: "registry:block",
  },
  {
    category: "ai",
    dependencies: ["lucide-react"],
    description: "Projects grid with create CTA and workflow cards.",
    files: [
      {
        path: "blocks/ai/ai-chat-projects-01/page.tsx",
        source: "page.tsx",
        target: "app/ai-chat-projects/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/ai/ai-chat-projects-01/components/chat-projects.tsx",
        source: "components/chat-projects.tsx",
        target: "@components/ai-chat-projects/chat-projects.tsx",
        type: "registry:component",
      },
    ],
    meta: {
      featured: false,
      order: 5,
      previewHeight: 720,
    },
    name: "ai-chat-projects-01",
    preview: () => import("./ai-chat-projects-01/page"),
    registryDependencies: [
      absoluteUrl("/r/button.json"),
      absoluteUrl("/r/card.json"),
    ],
    title: "AI Chat Projects",
    type: "registry:block",
  },
] as const satisfies readonly BlockDefinition[];
