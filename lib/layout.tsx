import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { SITE_CONFIG } from "@/config/site";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions = (): BaseLayoutProps => {
  return {
    nav: {
      title: <>{SITE_CONFIG.name}</>,
    },
    // see https://fumadocs.dev/docs/ui/navigation/links
    links: [
      {
        text: "Documentation",
        url: "/docs",
        active: "nested-url",
        // secondary items will be displayed differently on navbar
        secondary: false,
      },
    ],
  };
};
