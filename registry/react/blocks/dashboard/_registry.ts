import type { BlockDefinition } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

export const dashboardBlocks = [
  {
    category: "dashboard",
    dependencies: ["lucide-react", "recharts"],
    description:
      "An analytics dashboard with navigation, metrics, a chart, and channel data.",
    files: [
      {
        path: "blocks/dashboard-01/page.tsx",
        source: "page.tsx",
        target: "app/dashboard/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/dashboard-01/components/app-sidebar.tsx",
        source: "components/app-sidebar.tsx",
        target: "@components/dashboard/app-sidebar.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/dashboard-01/components/overview-cards.tsx",
        source: "components/overview-cards.tsx",
        target: "@components/dashboard/overview-cards.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/dashboard-01/components/visitors-chart.tsx",
        source: "components/visitors-chart.tsx",
        target: "@components/dashboard/visitors-chart.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/dashboard-01/components/channels-table.tsx",
        source: "components/channels-table.tsx",
        target: "@components/dashboard/channels-table.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/dashboard-01/data.json",
        source: "data.json",
        target: "app/dashboard/data.json",
        type: "registry:file",
      },
    ],
    meta: {
      featured: true,
      order: 1,
      previewHeight: 900,
    },
    name: "dashboard-01",
    preview: () => import("./dashboard-01/page"),
    registryDependencies: [
      absoluteUrl("/r/avatar.json"),
      absoluteUrl("/r/badge.json"),
      absoluteUrl("/r/button.json"),
      absoluteUrl("/r/card.json"),
      absoluteUrl("/r/chart.json"),
      absoluteUrl("/r/icon-tile.json"),
      absoluteUrl("/r/separator.json"),
      absoluteUrl("/r/sidebar.json"),
      absoluteUrl("/r/table.json"),
    ],
    title: "Analytics Dashboard",
    type: "registry:block",
  },
] as const satisfies readonly BlockDefinition[];
