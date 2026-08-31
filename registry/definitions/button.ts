import { defineRegistryComponent } from "./schema";

const buttonDefinition = defineRegistryComponent({
  adapters: {
    react: {
      bindings: { class: "className", loading: "isLoading" },
      evidence: {
        loading: ["isLoading", "aria-busy", "aria-disabled"],
        variants: ["buttonVariants", 'data-slot="button"'],
      },
      packageVersion: "5.39.1",
      sources: ["button.tsx"],
      status: "stable",
    },
    solid: {
      bindings: { class: "class", loading: "isLoading" },
      evidence: {
        loading: ["isLoading", "aria-busy", "aria-disabled"],
        variants: ["buttonVariants", 'data-slot="button"'],
      },
      packageVersion: "5.39.1",
      sources: ["button.tsx"],
      status: "preview",
    },
    svelte: {
      bindings: { class: "class", loading: "isLoading" },
      evidence: {
        loading: ["isLoading", "aria-busy", "aria-disabled"],
        variants: ["buttonVariants", 'data-slot="button"'],
      },
      packageVersion: "5.24.1",
      sources: ["button.svelte", "button.ts"],
      status: "preview",
    },
    vue: {
      bindings: { class: "class", loading: "isLoading" },
      evidence: {
        loading: ["isLoading", "aria-busy", "aria-disabled"],
        variants: ["buttonVariants", 'data-slot="button"'],
      },
      packageVersion: "5.39.1",
      sources: ["button.vue", "button.ts"],
      status: "preview",
    },
  },
  dependencies: {
    common: ["tailwind-variants"],
    frameworks: {
      react: ["@ark-ui/react"],
      solid: ["@ark-ui/solid", "solid-js"],
      svelte: ["@ark-ui/svelte", "svelte"],
      vue: ["@ark-ui/vue", "vue"],
    },
    registry: {
      react: ["spinner"],
      solid: [],
      svelte: [],
      vue: [],
    },
  },
  description:
    "Button surface with visual variants and a stable loading state.",
  name: "button",
  parts: [{ element: "button", name: "Button", slot: "button" }],
  props: {
    clickEffect: {
      defaultValue: true,
      description: "Apply the pressed scale effect.",
      type: "boolean",
    },
    isLoading: {
      defaultValue: false,
      description: "Replace the visible content with a progress indicator.",
      type: "boolean",
    },
    pill: {
      defaultValue: false,
      description: "Use a fully rounded shape.",
      type: "boolean",
    },
    size: {
      defaultValue: "md",
      description: "Control dimensions and icon sizing.",
      type: "ButtonSize",
      values: [
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "icon-xs",
        "icon-sm",
        "icon-md",
        "icon-lg",
        "icon-xl",
      ],
    },
    variant: {
      defaultValue: "default",
      description: "Select the visual treatment.",
      type: "ButtonVariant",
      values: [
        "default",
        "destructive",
        "ghost",
        "link",
        "outline",
        "secondary",
      ],
    },
  },
  recipes: [
    {
      base: [
        "relative",
        "inline-flex shrink-0 items-center justify-center gap-2",
        "whitespace-nowrap font-medium text-sm",
        "rounded-lg",
        "transition-all",
        "outline-none focus-visible:ring-[3px] focus-visible:ring-ring/32",
        "disabled:pointer-events-none disabled:opacity-64",
        "data-disabled:pointer-events-none data-disabled:opacity-64",
        "aria-disabled:pointer-events-none aria-disabled:opacity-64",
        "data-[state=loading]:pointer-events-none",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/24",
        "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        "motion-reduce:transition-none!",
      ],
      defaultVariants: {
        clickEffect: true,
        pill: false,
        size: "md",
        variant: "default",
      },
      name: "buttonVariants",
      variants: {
        clickEffect: {
          false: null,
          true: "active:not-aria-[haspopup]:scale-[0.98]",
        },
        pill: {
          false: null,
          true: [
            "rounded-full",
            "has-[>svg]:data-[size=xs]:pe-3",
            "has-[>svg]:data-[size=sm]:pe-3.5",
            "has-[>svg]:data-[size=md]:pe-4",
            "has-[>svg]:data-[size=lg]:pe-4.5",
            "has-[>svg]:data-[size=xl]:pe-5",
          ],
        },
        size: {
          "icon-lg": "size-9",
          "icon-md": "size-8",
          "icon-sm": "size-7",
          "icon-xl": "size-10 [&_svg:not([class*='size-'])]:size-5",
          "icon-xs": "size-6 rounded-sm",
          lg: ["h-9", "px-3.5"],
          md: ["h-8", "px-3", "py-2"],
          sm: [
            "h-7",
            "px-2.5",
            "gap-1.5",
            "[&_svg:not([class*='size-'])]:size-3.5",
          ],
          xl: ["h-10", "text-base", "px-4"],
          xs: [
            "h-6",
            "gap-1.5",
            "px-2",
            "text-xs",
            "rounded-sm",
            "[&_svg:not([class*='size-'])]:size-2.5",
          ],
        },
        variant: {
          default: [
            "bg-primary",
            "border border-transparent shadow-primary/24 shadow-sm",
            "text-primary-foreground",
            "hover:bg-primary/90",
            "focus-visible:border-background",
          ],
          destructive: [
            "bg-destructive",
            "text-white",
            "border border-transparent shadow-destructive/24 shadow-sm",
            "hover:bg-destructive/90",
            "focus-visible:border-background focus-visible:ring-destructive-foreground/32",
          ],
          ghost: [
            "hover:bg-accent hover:text-accent-foreground",
            "border border-transparent",
            "focus-visible:border-primary",
          ],
          link: [
            "text-primary",
            "underline-offset-4",
            "border border-transparent",
            "hover:underline",
            "focus-visible:border-primary",
          ],
          outline: [
            "bg-transparent",
            "text-foreground",
            "border border-input shadow-sm/5",
            "hover:bg-accent hover:text-accent-foreground",
            "dark:bg-input/32 dark:hover:bg-input/64",
            "focus-visible:border-primary",
          ],
          secondary: [
            "bg-secondary",
            "text-secondary-foreground",
            "border border-transparent",
            "focus-visible:border-primary",
            "hover:bg-secondary/80",
          ],
        },
      },
    },
  ],
  scenarios: [
    {
      assertions: [
        "renders every variant and size",
        "uses type=button by default",
        "merges consumer classes",
      ],
      name: "variants",
    },
    {
      assertions: [
        "sets aria-busy and aria-disabled",
        "keeps the accessible label",
        "prevents pointer interaction",
      ],
      name: "loading",
    },
  ],
  strategy: "structural",
});

export default buttonDefinition;
