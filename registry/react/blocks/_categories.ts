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
    description: "Chat sidebars, composers, threads, and AI workspace shells.",
    label: "AI",
    order: 3,
    slug: "ai",
  },
] as const satisfies readonly BlockCategory[];
