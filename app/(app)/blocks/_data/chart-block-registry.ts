import type { ComponentType } from "react";

export const CHART_BLOCK_REGISTRY: Record<
  string,
  () => Promise<{ default: ComponentType }>
> = {
  "charts/area-charts/chart-area-interactive": () =>
    import("@/registry/react/blocks/charts/area-charts/chart-area-interactive"),
  "charts/area-charts/chart-area-default": () =>
    import("@/registry/react/blocks/charts/area-charts/chart-area-default"),
  "charts/area-charts/chart-area-linear": () =>
    import("@/registry/react/blocks/charts/area-charts/chart-area-linear"),
  "charts/area-charts/chart-area-step": () =>
    import("@/registry/react/blocks/charts/area-charts/chart-area-step"),
  "charts/area-charts/chart-area-legend": () =>
    import("@/registry/react/blocks/charts/area-charts/chart-area-legend"),
  "charts/area-charts/chart-area-stacked": () =>
    import("@/registry/react/blocks/charts/area-charts/chart-area-stacked"),
  "charts/area-charts/chart-area-stacked-expand": () =>
    import(
      "@/registry/react/blocks/charts/area-charts/chart-area-stacked-expand"
    ),
  "charts/area-charts/chart-area-icons": () =>
    import("@/registry/react/blocks/charts/area-charts/chart-area-icons"),
  "charts/area-charts/chart-area-gradient": () =>
    import("@/registry/react/blocks/charts/area-charts/chart-area-gradient"),
  "charts/area-charts/chart-area-axes": () =>
    import("@/registry/react/blocks/charts/area-charts/chart-area-axes"),
  "charts/bar-charts/chart-bar-interactive": () =>
    import("@/registry/react/blocks/charts/bar-charts/chart-bar-interactive"),
  "charts/bar-charts/chart-bar-default": () =>
    import("@/registry/react/blocks/charts/bar-charts/chart-bar-default"),
  "charts/bar-charts/chart-bar-horizontal": () =>
    import("@/registry/react/blocks/charts/bar-charts/chart-bar-horizontal"),
  "charts/bar-charts/chart-bar-multiple": () =>
    import("@/registry/react/blocks/charts/bar-charts/chart-bar-multiple"),
  "charts/bar-charts/chart-bar-stacked": () =>
    import("@/registry/react/blocks/charts/bar-charts/chart-bar-stacked"),
  "charts/bar-charts/chart-bar-label": () =>
    import("@/registry/react/blocks/charts/bar-charts/chart-bar-label"),
  "charts/bar-charts/chart-bar-label-custom": () =>
    import("@/registry/react/blocks/charts/bar-charts/chart-bar-label-custom"),
  "charts/bar-charts/chart-bar-mixed": () =>
    import("@/registry/react/blocks/charts/bar-charts/chart-bar-mixed"),
  "charts/bar-charts/chart-bar-active": () =>
    import("@/registry/react/blocks/charts/bar-charts/chart-bar-active"),
  "charts/bar-charts/chart-bar-negative": () =>
    import("@/registry/react/blocks/charts/bar-charts/chart-bar-negative"),
  "charts/line-charts/chart-line-interactive": () =>
    import("@/registry/react/blocks/charts/line-charts/chart-line-interactive"),
  "charts/line-charts/chart-line-default": () =>
    import("@/registry/react/blocks/charts/line-charts/chart-line-default"),
  "charts/line-charts/chart-line-linear": () =>
    import("@/registry/react/blocks/charts/line-charts/chart-line-linear"),
  "charts/line-charts/chart-line-step": () =>
    import("@/registry/react/blocks/charts/line-charts/chart-line-step"),
  "charts/line-charts/chart-line-multiple": () =>
    import("@/registry/react/blocks/charts/line-charts/chart-line-multiple"),
  "charts/line-charts/chart-line-dots": () =>
    import("@/registry/react/blocks/charts/line-charts/chart-line-dots"),
  "charts/line-charts/chart-line-dots-custom": () =>
    import("@/registry/react/blocks/charts/line-charts/chart-line-dots-custom"),
  "charts/line-charts/chart-line-dots-colors": () =>
    import("@/registry/react/blocks/charts/line-charts/chart-line-dots-colors"),
  "charts/line-charts/chart-line-label": () =>
    import("@/registry/react/blocks/charts/line-charts/chart-line-label"),
  "charts/line-charts/chart-line-label-custom": () =>
    import(
      "@/registry/react/blocks/charts/line-charts/chart-line-label-custom"
    ),
  "charts/pie-charts/chart-pie-simple": () =>
    import("@/registry/react/blocks/charts/pie-charts/chart-pie-simple"),
  "charts/pie-charts/chart-pie-separator-none": () =>
    import(
      "@/registry/react/blocks/charts/pie-charts/chart-pie-separator-none"
    ),
  "charts/pie-charts/chart-pie-label": () =>
    import("@/registry/react/blocks/charts/pie-charts/chart-pie-label"),
  "charts/pie-charts/chart-pie-label-custom": () =>
    import("@/registry/react/blocks/charts/pie-charts/chart-pie-label-custom"),
  "charts/pie-charts/chart-pie-label-list": () =>
    import("@/registry/react/blocks/charts/pie-charts/chart-pie-label-list"),
  "charts/pie-charts/chart-pie-legend": () =>
    import("@/registry/react/blocks/charts/pie-charts/chart-pie-legend"),
  "charts/pie-charts/chart-pie-donut": () =>
    import("@/registry/react/blocks/charts/pie-charts/chart-pie-donut"),
  "charts/pie-charts/chart-pie-donut-active": () =>
    import("@/registry/react/blocks/charts/pie-charts/chart-pie-donut-active"),
  "charts/pie-charts/chart-pie-donut-text": () =>
    import("@/registry/react/blocks/charts/pie-charts/chart-pie-donut-text"),
  "charts/pie-charts/chart-pie-stacked": () =>
    import("@/registry/react/blocks/charts/pie-charts/chart-pie-stacked"),
  "charts/pie-charts/chart-pie-interactive": () =>
    import("@/registry/react/blocks/charts/pie-charts/chart-pie-interactive"),
  "charts/radar-charts/chart-radar-default": () =>
    import("@/registry/react/blocks/charts/radar-charts/chart-radar-default"),
  "charts/radar-charts/chart-radar-dots": () =>
    import("@/registry/react/blocks/charts/radar-charts/chart-radar-dots"),
  "charts/radar-charts/chart-radar-lines-only": () =>
    import(
      "@/registry/react/blocks/charts/radar-charts/chart-radar-lines-only"
    ),
  "charts/radar-charts/chart-radar-label-custom": () =>
    import(
      "@/registry/react/blocks/charts/radar-charts/chart-radar-label-custom"
    ),
  "charts/radar-charts/chart-radar-grid-custom": () =>
    import(
      "@/registry/react/blocks/charts/radar-charts/chart-radar-grid-custom"
    ),
  "charts/radar-charts/chart-radar-grid-none": () =>
    import("@/registry/react/blocks/charts/radar-charts/chart-radar-grid-none"),
  "charts/radar-charts/chart-radar-grid-circle": () =>
    import(
      "@/registry/react/blocks/charts/radar-charts/chart-radar-grid-circle"
    ),
  "charts/radar-charts/chart-radar-grid-circle-no-lines": () =>
    import(
      "@/registry/react/blocks/charts/radar-charts/chart-radar-grid-circle-no-lines"
    ),
  "charts/radar-charts/chart-radar-grid-circle-fill": () =>
    import(
      "@/registry/react/blocks/charts/radar-charts/chart-radar-grid-circle-fill"
    ),
  "charts/radar-charts/chart-radar-grid-fill": () =>
    import("@/registry/react/blocks/charts/radar-charts/chart-radar-grid-fill"),
  "charts/radar-charts/chart-radar-multiple": () =>
    import("@/registry/react/blocks/charts/radar-charts/chart-radar-multiple"),
  "charts/radar-charts/chart-radar-legend": () =>
    import("@/registry/react/blocks/charts/radar-charts/chart-radar-legend"),
  "charts/radar-charts/chart-radar-icons": () =>
    import("@/registry/react/blocks/charts/radar-charts/chart-radar-icons"),
  "charts/radar-charts/chart-radar-radius": () =>
    import("@/registry/react/blocks/charts/radar-charts/chart-radar-radius"),
  "charts/radial-charts/chart-radial-simple": () =>
    import("@/registry/react/blocks/charts/radial-charts/chart-radial-simple"),
  "charts/radial-charts/chart-radial-label": () =>
    import("@/registry/react/blocks/charts/radial-charts/chart-radial-label"),
  "charts/radial-charts/chart-radial-grid": () =>
    import("@/registry/react/blocks/charts/radial-charts/chart-radial-grid"),
  "charts/radial-charts/chart-radial-text": () =>
    import("@/registry/react/blocks/charts/radial-charts/chart-radial-text"),
  "charts/radial-charts/chart-radial-shape": () =>
    import("@/registry/react/blocks/charts/radial-charts/chart-radial-shape"),
  "charts/radial-charts/chart-radial-stacked": () =>
    import("@/registry/react/blocks/charts/radial-charts/chart-radial-stacked"),
  "charts/tooltips/chart-tooltip-default": () =>
    import("@/registry/react/blocks/charts/tooltips/chart-tooltip-default"),
  "charts/tooltips/chart-tooltip-indicator-line": () =>
    import(
      "@/registry/react/blocks/charts/tooltips/chart-tooltip-indicator-line"
    ),
  "charts/tooltips/chart-tooltip-indicator-none": () =>
    import(
      "@/registry/react/blocks/charts/tooltips/chart-tooltip-indicator-none"
    ),
  "charts/tooltips/chart-tooltip-label-custom": () =>
    import(
      "@/registry/react/blocks/charts/tooltips/chart-tooltip-label-custom"
    ),
  "charts/tooltips/chart-tooltip-label-formatter": () =>
    import(
      "@/registry/react/blocks/charts/tooltips/chart-tooltip-label-formatter"
    ),
  "charts/tooltips/chart-tooltip-label-none": () =>
    import("@/registry/react/blocks/charts/tooltips/chart-tooltip-label-none"),
  "charts/tooltips/chart-tooltip-formatter": () =>
    import("@/registry/react/blocks/charts/tooltips/chart-tooltip-formatter"),
  "charts/tooltips/chart-tooltip-icons": () =>
    import("@/registry/react/blocks/charts/tooltips/chart-tooltip-icons"),
  "charts/tooltips/chart-tooltip-advanced": () =>
    import("@/registry/react/blocks/charts/tooltips/chart-tooltip-advanced"),
};
