import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { Logo } from "@/components/logo";
import { SITE_CONFIG } from "@/config/site";
import { Button } from "@/registry/react/components/button";

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
      title: (
        <>
          <Button size="icon-md" variant="ghost">
            <Logo className="size-6" />
          </Button>

          {SITE_CONFIG.name}
        </>
      ),
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
