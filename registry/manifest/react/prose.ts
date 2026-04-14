import type { RegistryItemType } from "@/lib/registry";

const dependencies: string[] = ["@ark-ui/react"];

const cssVars = {};

const css = {
  "@layer components": {
    ".prose h1:not(.not-prose h1)": {
      "font-size": "var(--text-2xl)",
      "font-weight": "800",
      "line-height": "var(--text-2xl--line-height)",
      "letter-spacing": "var(--tracking-tight)",
      "scroll-margin": "calc(var(--spacing) * 20)",
    },
    ".prose h2:not(.not-prose h2)": {
      "padding-bottom": "calc(var(--spacing) * 2)",
      "margin-top": "calc(var(--spacing) * 8)",
      "font-size": "var(--text-xl)",
      "font-weight": "600",
      "line-height": "var(--text-xl--line-height)",
      "letter-spacing": "var(--tracking-tight)",
      "scroll-margin": "calc(var(--spacing) * 20)",
    },
    ".prose h2:not(.not-prose h2):first-child": {
      "margin-top": "0",
    },
    ".prose h3:not(.not-prose h3)": {
      "margin-top": "calc(var(--spacing) * 8)",
      "font-size": "var(--text-lg)",
      "font-weight": "600",
      "line-height": "var(--text-lg--line-height)",
      "letter-spacing": "var(--tracking-tight)",
      "scroll-margin": "calc(var(--spacing) * 20)",
    },
    ".prose h3:not(.not-prose h3):first-child": {
      "margin-top": "0",
    },
    ".prose h4:not(.not-prose h4)": {
      "margin-top": "calc(var(--spacing) * 8)",
      "font-size": "var(--text-lg)",
      "font-weight": "600",
      "line-height": "var(--text-lg--line-height)",
      "letter-spacing": "var(--tracking-tight)",
      "scroll-margin": "calc(var(--spacing) * 20)",
    },
    ".prose h4:not(.not-prose h4):first-child": {
      "margin-top": "0",
    },
    ".prose h5:not(.not-prose h5)": {
      "margin-top": "calc(var(--spacing) * 8)",
      "font-size": "var(--text-lg)",
      "font-weight": "600",
      "line-height": "var(--text-lg--line-height)",
      "letter-spacing": "var(--tracking-tight)",
      "scroll-margin": "calc(var(--spacing) * 20)",
    },
    ".prose h5:not(.not-prose h5):first-child": {
      "margin-top": "0",
    },
    ".prose h6:not(.not-prose h6)": {
      "margin-top": "calc(var(--spacing) * 8)",
      "font-size": "var(--text-base)",
      "font-weight": "600",
      "line-height": "var(--text-base--line-height)",
      "letter-spacing": "var(--tracking-tight)",
      "scroll-margin": "calc(var(--spacing) * 20)",
    },
    ".prose h6:not(.not-prose h6):first-child": {
      "margin-top": "0",
    },
    ".prose h1:not(.not-prose h1) + p, .prose h2:not(.not-prose h2) + p, .prose h3:not(.not-prose h3) + p, .prose h4:not(.not-prose h4) + p, .prose h5:not(.not-prose h5) + p, .prose h6:not(.not-prose h6) + p":
      {
        "margin-top": "0",
      },
    ".prose p:not(.not-prose p)": {
      "line-height": "1.75",
    },
    ".prose p:not(.not-prose p):not(:first-child)": {
      "margin-top": "calc(var(--spacing) * 6)",
    },
    ".prose li:not(.not-prose li)": {
      "line-height": "1.75",
    },
    ".prose a:not(.not-prose a)": {
      "font-weight": "500",
      color: "var(--color-primary)",
      "text-decoration": "underline",
      "text-underline-offset": "var(--spacing)",
    },
    ".prose blockquote:not(.not-prose blockquote)": {
      "padding-left": "calc(var(--spacing) * 6)",
      "margin-top": "calc(var(--spacing) * 6)",
      "font-style": "italic",
      "border-left": "2px solid var(--color-border)",
    },
    ".prose table:not(.not-prose table)": {
      width: "100%",
      "margin-top": "calc(var(--spacing) * 6)",
      "margin-bottom": "calc(var(--spacing) * 6)",
      "overflow-y": "auto",
    },
    ".prose table:not(.not-prose table) thead tr": {
      padding: "0",
      margin: "0",
      "border-top": "1px solid var(--color-border)",
    },
    ".prose table:not(.not-prose table) thead tr:nth-child(even)": {
      "background-color": "var(--color-muted)",
    },
    ".prose table:not(.not-prose table) th": {
      padding: "calc(var(--spacing) * 2) calc(var(--spacing) * 4)",
      "font-weight": "700",
      "text-align": "left",
      border: "1px solid var(--color-border)",
    },
    '.prose table:not(.not-prose table) th[align="center"]': {
      "text-align": "center",
    },
    '.prose table:not(.not-prose table) th[align="right"]': {
      "text-align": "right",
    },
    ".prose table:not(.not-prose table) tbody tr": {
      padding: "0",
      margin: "0",
      "border-top": "1px solid var(--color-border)",
    },
    ".prose table:not(.not-prose table) tbody tr:nth-child(even)": {
      "background-color": "var(--color-muted)",
    },
    ".prose table:not(.not-prose table) td": {
      padding: "calc(var(--spacing) * 2) calc(var(--spacing) * 4)",
      "text-align": "left",
      border: "1px solid var(--color-border)",
    },
    '.prose table:not(.not-prose table) td[align="center"]': {
      "text-align": "center",
    },
    '.prose table:not(.not-prose table) td[align="right"]': {
      "text-align": "right",
    },
    ".prose ul:not(.not-prose ul)": {
      "margin-top": "calc(var(--spacing) * 6)",
      "margin-left": "calc(var(--spacing) * 6)",
      "list-style": "disc",
    },
    ".prose ul:not(.not-prose ul) > li": {
      "margin-top": "calc(var(--spacing) * 2)",
    },
    ".prose ul:not(.not-prose ul) p": {
      display: "inline",
      "margin-top": "0",
      "margin-bottom": "0",
    },
    ".prose ol:not(.not-prose ol)": {
      "margin-top": "calc(var(--spacing) * 6)",
      "margin-left": "calc(var(--spacing) * 6)",
      "list-style": "decimal",
    },
    ".prose ol:not(.not-prose ol) > li": {
      "margin-top": "calc(var(--spacing) * 2)",
    },
    ".prose ol:not(.not-prose ol) p": {
      display: "inline",
      "margin-top": "0",
      "margin-bottom": "0",
    },
    ".prose img:not(.not-prose img), .prose picture:not(.not-prose picture), .prose video:not(.not-prose video)":
      {
        "margin-top": "calc(var(--spacing) * 6)",
        "margin-bottom": "calc(var(--spacing) * 6)",
      },
    ".prose picture > img:not(.not-prose picture > img)": {
      "margin-top": "0",
      "margin-bottom": "0",
    },
    ".prose kbd:not(.not-prose kbd)": {
      padding: "calc(var(--spacing) * 0.5) calc(var(--spacing) * 1.5)",
      "font-size": "var(--text-xs)",
      "font-weight": "600",
      "line-height": "var(--text-xs--line-height)",
      "background-color": "var(--color-muted)",
      "border-radius": "calc(var(--radius) - 2px)",
    },
    ".prose hr": {
      "margin-top": "calc(var(--spacing) * 10)",
      "margin-bottom": "calc(var(--spacing) * 10)",
    },
    ".prose dl:not(.not-prose dl)": {
      "margin-top": "calc(var(--spacing) * 6)",
      "margin-bottom": "calc(var(--spacing) * 6)",
    },
    ".prose dl:not(.not-prose dl) dt": {
      "margin-top": "calc(var(--spacing) * 6)",
      "font-weight": "600",
      "letter-spacing": "var(--tracking-tight)",
    },
    ".prose dl:not(.not-prose dl) dt:first-child": {
      "margin-top": "0",
    },
    ".prose details:not(.not-prose details)": {
      "margin-top": "calc(var(--spacing) * 6)",
    },
    ".prose details:not(.not-prose details) summary": {
      "margin-top": "calc(var(--spacing) * 6)",
      "font-weight": "600",
      "letter-spacing": "var(--tracking-tight)",
      cursor: "pointer",
    },
    ".prose details:not(.not-prose details) p:first-of-type": {
      "margin-top": "calc(var(--spacing) * 2)",
    },
    ".prose mark:not(.not-prose mark)": {
      "background-color": "var(--color-yellow-300)",
    },
    ".prose small:not(.not-prose small)": {
      "font-size": "var(--text-xs)",
      "line-height": "1",
    },
    ".prose figure:not(.not-prose figure)": {
      "margin-top": "calc(var(--spacing) * 6)",
      "margin-bottom": "calc(var(--spacing) * 6)",
    },
    ".prose figure:not(.not-prose figure) img": {
      "margin-top": "0",
      "margin-bottom": "0",
      "border-radius": "var(--radius)",
    },
    ".prose figure:not(.not-prose figure) figcaption": {
      "margin-top": "calc(var(--spacing) * 2)",
      "font-size": "var(--text-sm)",
      "font-weight": "500",
      "line-height": "var(--text-sm--line-height)",
      color: "var(--color-muted-foreground)",
    },
    ".prose code:not(.not-prose code)": {
      padding: "calc(var(--spacing) * 0.5) calc(var(--spacing) * 1.5)",
      "font-size": "var(--text-xs)",
      "font-weight": "500",
      "line-height": "var(--text-xs--line-height)",
      color: "var(--color-muted-foreground)",
      "background-color": "var(--color-muted)",
      "border-radius": "var(--radius-sm)",
    },
  },
};

const manifest: RegistryItemType = {
  name: "prose",
  type: "registry:style",
  dependencies,
  cssVars,
  css,
};

export default manifest;
