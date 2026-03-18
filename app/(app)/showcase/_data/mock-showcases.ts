export interface MockShowcase {
  description: string;
  external?: boolean;
  id: string;
  name: string;
  previewUrl: string;
  url: string;
}

export const MOCK_SHOWCASES: MockShowcase[] = [
  {
    id: "templates-landing",
    name: "Landing Template",
    description:
      "Marketing landing page with hero, features, pricing, and CTA sections.",
    url: "/templates/landing",
    previewUrl: "/templates/landing",
  },
  {
    id: "templates-dashboard",
    name: "Dashboard Template",
    description:
      "Admin dashboard layout with sidebar navigation and data tables.",
    url: "/templates/dashboard",
    previewUrl: "/templates/dashboard",
  },
  {
    id: "blocks-hero",
    name: "Hero Block",
    description: "Reusable hero section block for landing pages.",
    url: "/blocks/hero",
    previewUrl: "/blocks/hero",
  },
  {
    id: "blocks-footer",
    name: "Footer Block",
    description: "Footer block with links and branding.",
    url: "/blocks/footer",
    previewUrl: "/blocks/footer",
  },
];
