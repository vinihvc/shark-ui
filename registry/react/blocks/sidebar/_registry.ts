import type { BlockDefinition } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

export const sidebarBlocks = [
  {
    category: "sidebar",
    dependencies: ["lucide-react"],
    description: "A simple sidebar with navigation grouped by section.",
    files: [
      {
        path: "blocks/sidebar/sidebar-01/page.tsx",
        source: "page.tsx",
        target: "app/dashboard/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/sidebar/sidebar-01/components/app-sidebar.tsx",
        source: "components/app-sidebar.tsx",
        target: "@components/sidebar-01/app-sidebar.tsx",
        type: "registry:component",
      },
    ],
    meta: { featured: true, order: 1, previewHeight: 760 },
    name: "sidebar-01",
    preview: () => import("./sidebar-01/page"),
    registryDependencies: [
      absoluteUrl("/r/icon-tile.json"),
      absoluteUrl("/r/separator.json"),
      absoluteUrl("/r/sidebar.json"),
    ],
    title: "Sidebar 01",
    type: "registry:block",
  },
  {
    category: "sidebar",
    dependencies: ["lucide-react"],
    description: "A sidebar with collapsible sections and nested navigation.",
    files: [
      {
        path: "blocks/sidebar/sidebar-05/page.tsx",
        source: "page.tsx",
        target: "app/dashboard/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/sidebar/sidebar-05/components/app-sidebar.tsx",
        source: "components/app-sidebar.tsx",
        target: "@components/sidebar-05/app-sidebar.tsx",
        type: "registry:component",
      },
    ],
    meta: { featured: true, order: 2, previewHeight: 760 },
    name: "sidebar-05",
    preview: () => import("./sidebar-05/page"),
    registryDependencies: [
      absoluteUrl("/r/collapsible.json"),
      absoluteUrl("/r/separator.json"),
      absoluteUrl("/r/sidebar.json"),
    ],
    title: "Sidebar 05",
    type: "registry:block",
  },
  {
    category: "sidebar",
    dependencies: ["lucide-react"],
    description: "An inset application sidebar that collapses to an icon rail.",
    files: [
      {
        path: "blocks/sidebar/sidebar-07/page.tsx",
        source: "page.tsx",
        target: "app/dashboard/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/sidebar/sidebar-07/components/app-sidebar.tsx",
        source: "components/app-sidebar.tsx",
        target: "@components/sidebar-07/app-sidebar.tsx",
        type: "registry:component",
      },
    ],
    meta: { featured: true, order: 3, previewHeight: 760 },
    name: "sidebar-07",
    preview: () => import("./sidebar-07/page"),
    registryDependencies: [
      absoluteUrl("/r/icon-tile.json"),
      absoluteUrl("/r/separator.json"),
      absoluteUrl("/r/sidebar.json"),
    ],
    title: "Sidebar 07",
    type: "registry:block",
  },
  {
    category: "sidebar",
    dependencies: ["lucide-react"],
    description:
      "A right-side messaging sidebar with labels and unread counts.",
    files: [
      {
        path: "blocks/sidebar/sidebar-14/page.tsx",
        source: "page.tsx",
        target: "app/dashboard/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/sidebar/sidebar-14/components/app-sidebar.tsx",
        source: "components/app-sidebar.tsx",
        target: "@components/sidebar-14/app-sidebar.tsx",
        type: "registry:component",
      },
    ],
    meta: { featured: false, order: 4, previewHeight: 760 },
    name: "sidebar-14",
    preview: () => import("./sidebar-14/page"),
    registryDependencies: [
      absoluteUrl("/r/icon-tile.json"),
      absoluteUrl("/r/sidebar.json"),
    ],
    title: "Sidebar 14",
    type: "registry:block",
  },
] as const satisfies readonly BlockDefinition[];
