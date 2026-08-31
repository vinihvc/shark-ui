import { defineRegistryComponent } from "./schema";

const checkboxDefinition = defineRegistryComponent({
  adapters: {
    react: {
      bindings: { checked: "checked", checkedChange: "onCheckedChange" },
      evidence: {
        "checked-state": ["Indicator", "HiddenInput", "indeterminate"],
        "form-state": ["ArkCheckbox.Root", "...rest"],
      },
      packageVersion: "5.39.1",
      sources: ["checkbox.tsx"],
      status: "stable",
    },
    solid: {
      bindings: { checked: "checked", checkedChange: "onCheckedChange" },
      evidence: {
        "checked-state": ["Indicator", "HiddenInput", "indeterminate"],
        "form-state": ["ArkCheckbox.Root", "...rest"],
      },
      packageVersion: "5.39.1",
      sources: ["checkbox.tsx"],
      status: "preview",
    },
    svelte: {
      bindings: { checked: "checked", checkedChange: "onCheckedChange" },
      evidence: {
        "checked-state": ["Indicator", "HiddenInput", "indeterminate"],
        "form-state": ["ArkCheckbox.Root", "...rest"],
      },
      packageVersion: "5.24.1",
      sources: [
        "checkbox/index.ts",
        "checkbox/checkbox.svelte",
        "checkbox/checkbox-group.svelte",
        "checkbox/checkbox-indicator.svelte",
      ],
      status: "preview",
    },
    vue: {
      bindings: { checked: "checked", checkedChange: "update:checked" },
      evidence: {
        "checked-state": ["Indicator", "HiddenInput", "indeterminate"],
        "form-state": ["ArkCheckbox.Root", "forwardedAttrs"],
      },
      packageVersion: "5.39.1",
      sources: [
        "checkbox/index.ts",
        "checkbox/checkbox.vue",
        "checkbox/checkbox-group.vue",
        "checkbox/checkbox-indicator.vue",
      ],
      status: "preview",
    },
  },
  dependencies: {
    common: ["tailwind-variants"],
    frameworks: {
      react: ["@ark-ui/react", "lucide-react"],
      solid: ["@ark-ui/solid", "solid-js"],
      svelte: ["@ark-ui/svelte", "svelte"],
      vue: ["@ark-ui/vue", "vue"],
    },
    registry: { react: [], solid: [], svelte: [], vue: [] },
  },
  description: "Checkbox composition backed by the Ark UI checkbox machine.",
  name: "checkbox",
  parts: [
    { element: "div", name: "CheckboxGroup", slot: "checkbox-group" },
    {
      element: "label",
      name: "Checkbox",
      primitive: "Checkbox.Root",
      slot: "checkbox",
    },
    {
      element: "div",
      name: "CheckboxIndicator",
      parent: "Checkbox",
      primitive: "Checkbox.Indicator",
      slot: "checkbox-indicator",
    },
  ],
  props: {},
  recipes: [
    {
      base: [
        "relative",
        "inline-flex shrink-0 items-center justify-center",
        "size-4",
        "bg-transparent",
        "rounded-sm border border-input shadow-xs/5",
        "transition-shadow",
        "data-focus-visible:border-primary data-focus-visible:ring-[3px] data-focus-visible:ring-ring/32 data-focus-visible:ring-offset-1 data-focus-visible:ring-offset-background",
        "dark:data-focus-visible:data-invalid:border-destructive-foreground/64 dark:data-focus-visible:data-invalid:ring-destructive-foreground/48",
        "data-disabled:opacity-64",
        "[[data-disabled],[data-checked],[data-invalid]]:shadow-none",
        "data-invalid:border-destructive data-invalid:ring-[3px] data-invalid:ring-destructive/24",
        "dark:data-invalid:border-destructive-foreground dark:data-invalid:text-destructive-foreground dark:data-invalid:ring-destructive-foreground/20",
        "dark:not-data-checked:bg-input/32 dark:data-invalid:ring-destructive-foreground/24",
        "motion-reduce:transition-none!",
      ],
      name: "checkboxVariants",
    },
  ],
  scenarios: [
    {
      assertions: [
        "renders checked, unchecked and indeterminate indicators",
        "keeps the hidden input in the root",
      ],
      name: "checked-state",
    },
    {
      assertions: [
        "forwards invalid and disabled states",
        "emits the framework-native checked binding",
      ],
      name: "form-state",
    },
  ],
  strategy: "ark",
});

export default checkboxDefinition;
