import type { TemplateCategory } from "@/lib/registry";

export const TEMPLATE_CATEGORIES = [
  {
    description: "Conversational products and assistant workspaces.",
    label: "AI",
    order: 1,
    slug: "ai",
  },
] as const satisfies readonly TemplateCategory[];
