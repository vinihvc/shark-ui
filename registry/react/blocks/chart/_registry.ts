import type { BlockDefinition } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const chartPreviews = {
  "chart-area-axes": () => import("./chart-area-axes"),
  "chart-area-default": () => import("./chart-area-default"),
  "chart-area-gradient": () => import("./chart-area-gradient"),
  "chart-area-icons": () => import("./chart-area-icons"),
  "chart-area-interactive": () => import("./chart-area-interactive"),
  "chart-area-legend": () => import("./chart-area-legend"),
  "chart-area-linear": () => import("./chart-area-linear"),
  "chart-area-stacked": () => import("./chart-area-stacked"),
  "chart-area-stacked-expand": () => import("./chart-area-stacked-expand"),
  "chart-area-step": () => import("./chart-area-step"),
  "chart-bar-active": () => import("./chart-bar-active"),
  "chart-bar-default": () => import("./chart-bar-default"),
  "chart-bar-horizontal": () => import("./chart-bar-horizontal"),
  "chart-bar-interactive": () => import("./chart-bar-interactive"),
  "chart-bar-label": () => import("./chart-bar-label"),
  "chart-bar-label-custom": () => import("./chart-bar-label-custom"),
  "chart-bar-mixed": () => import("./chart-bar-mixed"),
  "chart-bar-multiple": () => import("./chart-bar-multiple"),
  "chart-bar-negative": () => import("./chart-bar-negative"),
  "chart-bar-stacked": () => import("./chart-bar-stacked"),
  "chart-line-default": () => import("./chart-line-default"),
  "chart-line-dots": () => import("./chart-line-dots"),
  "chart-line-dots-colors": () => import("./chart-line-dots-colors"),
  "chart-line-dots-custom": () => import("./chart-line-dots-custom"),
  "chart-line-interactive": () => import("./chart-line-interactive"),
  "chart-line-label": () => import("./chart-line-label"),
  "chart-line-label-custom": () => import("./chart-line-label-custom"),
  "chart-line-linear": () => import("./chart-line-linear"),
  "chart-line-multiple": () => import("./chart-line-multiple"),
  "chart-line-step": () => import("./chart-line-step"),
  "chart-pie-donut": () => import("./chart-pie-donut"),
  "chart-pie-donut-active": () => import("./chart-pie-donut-active"),
  "chart-pie-donut-text": () => import("./chart-pie-donut-text"),
  "chart-pie-interactive": () => import("./chart-pie-interactive"),
  "chart-pie-label": () => import("./chart-pie-label"),
  "chart-pie-label-custom": () => import("./chart-pie-label-custom"),
  "chart-pie-label-list": () => import("./chart-pie-label-list"),
  "chart-pie-legend": () => import("./chart-pie-legend"),
  "chart-pie-separator-none": () => import("./chart-pie-separator-none"),
  "chart-pie-simple": () => import("./chart-pie-simple"),
  "chart-pie-stacked": () => import("./chart-pie-stacked"),
  "chart-radar-default": () => import("./chart-radar-default"),
  "chart-radar-dots": () => import("./chart-radar-dots"),
  "chart-radar-grid-circle": () => import("./chart-radar-grid-circle"),
  "chart-radar-grid-circle-fill": () =>
    import("./chart-radar-grid-circle-fill"),
  "chart-radar-grid-circle-no-lines": () =>
    import("./chart-radar-grid-circle-no-lines"),
  "chart-radar-grid-custom": () => import("./chart-radar-grid-custom"),
  "chart-radar-grid-fill": () => import("./chart-radar-grid-fill"),
  "chart-radar-grid-none": () => import("./chart-radar-grid-none"),
  "chart-radar-icons": () => import("./chart-radar-icons"),
  "chart-radar-label-custom": () => import("./chart-radar-label-custom"),
  "chart-radar-legend": () => import("./chart-radar-legend"),
  "chart-radar-lines-only": () => import("./chart-radar-lines-only"),
  "chart-radar-multiple": () => import("./chart-radar-multiple"),
  "chart-radar-radius": () => import("./chart-radar-radius"),
  "chart-radial-grid": () => import("./chart-radial-grid"),
  "chart-radial-label": () => import("./chart-radial-label"),
  "chart-radial-shape": () => import("./chart-radial-shape"),
  "chart-radial-simple": () => import("./chart-radial-simple"),
  "chart-radial-stacked": () => import("./chart-radial-stacked"),
  "chart-radial-text": () => import("./chart-radial-text"),
  "chart-tooltip-advanced": () => import("./chart-tooltip-advanced"),
  "chart-tooltip-default": () => import("./chart-tooltip-default"),
  "chart-tooltip-formatter": () => import("./chart-tooltip-formatter"),
  "chart-tooltip-icons": () => import("./chart-tooltip-icons"),
  "chart-tooltip-indicator-line": () =>
    import("./chart-tooltip-indicator-line"),
  "chart-tooltip-indicator-none": () =>
    import("./chart-tooltip-indicator-none"),
  "chart-tooltip-label-custom": () => import("./chart-tooltip-label-custom"),
  "chart-tooltip-label-formatter": () =>
    import("./chart-tooltip-label-formatter"),
  "chart-tooltip-label-none": () => import("./chart-tooltip-label-none"),
} satisfies Record<string, BlockDefinition["preview"]>;

const interactiveCharts = new Set([
  "chart-area-interactive",
  "chart-pie-interactive",
]);
const CHART_PREFIX_PATTERN = /^chart-/;

const titleCase = (value: string) =>
  value.replace(
    /(^|-)([a-z])/g,
    (_match, separator: string, letter: string) =>
      `${separator ? " " : ""}${letter.toUpperCase()}`
  );

const getChartCopy = (name: string) => {
  const [family = "chart", ...variantParts] = name
    .replace(CHART_PREFIX_PATTERN, "")
    .split("-");
  const variant = variantParts.join("-");
  const familyTitle = titleCase(family);

  return {
    description:
      variant === "default"
        ? `A ready-to-use ${family} chart built with Shark UI and Recharts.`
        : `A ${family} chart example with ${titleCase(variant).toLowerCase()}.`,
    title:
      variant === "default"
        ? `${familyTitle} Chart`
        : `${familyTitle} Chart: ${titleCase(variant)}`,
  };
};

export const chartBlocks = Object.entries(chartPreviews).map(
  ([name, preview], index): BlockDefinition => {
    const copy = getChartCopy(name);
    const registryDependencies = [
      absoluteUrl("/r/card.json"),
      absoluteUrl("/r/chart.json"),
    ];

    if (interactiveCharts.has(name)) {
      registryDependencies.push(absoluteUrl("/r/select.json"));
    }

    return {
      category: "chart",
      dependencies: ["@ark-ui/react", "lucide-react", "recharts"],
      description: copy.description,
      files: [
        {
          path: `blocks/chart/${name}.tsx`,
          source: `../${name}.tsx`,
          target: `app/charts/${name}/page.tsx`,
          type: "registry:page",
        },
      ],
      meta: {
        featured: false,
        order: index + 1,
        previewHeight: 560,
      },
      name,
      preview,
      registryDependencies,
      title: copy.title,
      type: "registry:block",
    };
  }
);
