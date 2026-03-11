export type TemplateStatus = "available" | "coming-soon";

export interface MockTemplate {
  description: string;
  id: string;
  livePreviewUrl: string;
  name: string;
  previewUrl?: string;
  status: TemplateStatus;
}

export const MOCK_TEMPLATES: MockTemplate[] = [
  {
    id: "auth",
    name: "Auth",
    description:
      "Complete login and signup flows with form validation. Includes password reset and OAuth-ready structure.",
    previewUrl: "/templates/auth",
    status: "available",
    livePreviewUrl: "/templates/auth",
  },
  {
    id: "dashboard",
    name: "Dashboard",
    description:
      "Admin dashboard layout with sidebar navigation, data tables, and customizable widgets.",
    previewUrl: "/templates/dashboard",
    status: "available",
    livePreviewUrl: "/templates/dashboard",
  },
  {
    id: "landing",
    name: "Landing",
    description:
      "Marketing landing page with hero, features, pricing, and CTA sections. Optimized for conversions.",
    previewUrl: "/templates/landing",
    status: "available",
    livePreviewUrl: "/templates/landing",
  },
  {
    id: "blog",
    name: "Blog",
    description:
      "MDX-powered blog with responsive design, SEO metadata, and dynamic Open Graph images.",
    previewUrl: "/templates/blog",
    status: "available",
    livePreviewUrl: "/templates/blog",
  },
  {
    id: "ai",
    name: "AI",
    description:
      "Landing page for AI products with feature showcase, demos, and integration highlights.",
    previewUrl: "/templates/ai",
    status: "available",
    livePreviewUrl: "/templates/ai",
  },
  {
    id: "ecommerce",
    name: "Ecommerce",
    description:
      "Online store with product grid, cart, checkout, and product detail pages.",
    previewUrl: "/templates/ecommerce",
    status: "available",
    livePreviewUrl: "/templates/ecommerce",
  },
];
