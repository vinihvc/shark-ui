import type { BlockCategory } from "@/lib/registry";

export const BLOCK_CATEGORIES = [
  {
    description: "Sign-in and account access flows.",
    label: "Authentication",
    order: 1,
    slug: "authentication",
  },
  {
    description: "Application shells, analytics, and operational overviews.",
    label: "Dashboard",
    order: 2,
    slug: "dashboard",
  },
  {
    description:
      "Application sidebars with navigation, workspace switching, and messaging layouts.",
    label: "Sidebar",
    order: 3,
    slug: "sidebar",
  },
  {
    description: "Chat sidebars, composers, threads, and AI workspace shells.",
    label: "AI",
    order: 4,
    slug: "ai",
  },
] as const satisfies readonly BlockCategory[];
