import {
  computed,
  defineComponent,
  h,
  inject,
  onBeforeUnmount,
  onMounted,
  provide,
  ref,
  type InjectionKey,
  type PropType,
} from "vue";
import { cn } from "@/lib/utils";
import Button from "../button.vue";
import { buttonVariants } from "../_shark/button.contract";

const SIDEBAR_COOKIE_NAME = "sidebar_state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";

interface SidebarContextValue {
  isMobile: Readonly<{ value: boolean }>;
  open: Readonly<{ value: boolean }>;
  openMobile: { value: boolean };
  setOpen: (value: boolean) => void;
  state: Readonly<{ value: "collapsed" | "expanded" }>;
  toggleSidebar: () => void;
}

const sidebarContextKey = Symbol(
  "shark-sidebar"
) as InjectionKey<SidebarContextValue>;

export const useSidebar = () => {
  const context = inject(sidebarContextKey);
  if (!context)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return context;
};

export const SidebarProvider = defineComponent({
  name: "SidebarProvider",
  inheritAttrs: false,
  props: {
    defaultOpen: { default: true, type: Boolean },
    onOpenChange: Function as PropType<(open: boolean) => void>,
    open: Boolean,
  },
  setup(props, { attrs, slots }) {
    const internalOpen = ref(props.defaultOpen);
    const openMobile = ref(false);
    const isMobile = ref(false);
    const open = computed(() => props.open ?? internalOpen.value);
    const state = computed(() => (open.value ? "expanded" : "collapsed"));
    const setOpen = (value: boolean) => {
      props.onOpenChange?.(value);
      if (props.open === undefined) internalOpen.value = value;
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${value}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    };
    const toggleSidebar = () => {
      if (isMobile.value) openMobile.value = !openMobile.value;
      else setOpen(!open.value);
    };
    let media: MediaQueryList | undefined;
    const updateMobile = () => {
      isMobile.value = media?.matches ?? false;
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (
        event.key.toLowerCase() === SIDEBAR_KEYBOARD_SHORTCUT &&
        (event.metaKey || event.ctrlKey)
      ) {
        event.preventDefault();
        toggleSidebar();
      }
    };
    onMounted(() => {
      media = window.matchMedia("(max-width: 767px)");
      updateMobile();
      media.addEventListener("change", updateMobile);
      window.addEventListener("keydown", onKeyDown);
    });
    onBeforeUnmount(() => {
      media?.removeEventListener("change", updateMobile);
      window.removeEventListener("keydown", onKeyDown);
    });
    provide(sidebarContextKey, {
      isMobile,
      open,
      openMobile,
      setOpen,
      state,
      toggleSidebar,
    });
    return () => {
      const { class: className, style, ...rest } = attrs;
      return h(
        "div",
        {
          ...rest,
          class: cn(
            "group/sidebar-wrapper flex min-h-svh w-full has-data-[variant=inset]:bg-sidebar",
            className as string
          ),
          "data-slot": "sidebar-wrapper",
          style: {
            "--sidebar-width": SIDEBAR_WIDTH,
            "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
            ...(style as object),
          },
        },
        slots.default?.()
      );
    };
  },
});

export const Sidebar = defineComponent({
  name: "Sidebar",
  inheritAttrs: false,
  props: {
    collapsible: {
      default: "offcanvas",
      type: String as PropType<"icon" | "none" | "offcanvas">,
    },
    placement: { default: "left", type: String as PropType<"left" | "right"> },
    variant: {
      default: "sidebar",
      type: String as PropType<"floating" | "inset" | "sidebar">,
    },
  },
  setup(props, { attrs, slots }) {
    const context = useSidebar();
    return () => {
      const { class: className, ...rest } = attrs;
      if (props.collapsible === "none") {
        return h(
          "aside",
          {
            ...rest,
            class: cn(
              "h-full w-(--sidebar-width) flex flex-col bg-sidebar text-sidebar-foreground",
              className as string
            ),
            "data-slot": "sidebar",
          },
          slots.default?.()
        );
      }
      if (context.isMobile.value) {
        if (!context.openMobile.value) return null;
        return h("div", {}, [
          h("button", {
            "aria-label": "Close sidebar",
            class: "fixed inset-0 z-40 bg-black/32",
            onClick: () => {
              context.openMobile.value = false;
            },
            type: "button",
          }),
          h(
            "aside",
            {
              ...rest,
              "aria-modal": "true",
              class: cn(
                "fixed inset-y-0 z-50 flex flex-col bg-sidebar text-sidebar-foreground",
                props.placement === "left" ? "inset-s-0" : "inset-e-0",
                className as string
              ),
              "data-mobile": "true",
              "data-sidebar": "sidebar",
              "data-slot": "sidebar",
              role: "dialog",
              style: { width: SIDEBAR_WIDTH_MOBILE },
            },
            slots.default?.()
          ),
        ]);
      }
      return h(
        "aside",
        {
          class: "group peer hidden text-sidebar-foreground md:block",
          "data-collapsible":
            context.state.value === "collapsed" ? props.collapsible : "",
          "data-placement": props.placement,
          "data-slot": "sidebar",
          "data-state": context.state.value,
          "data-variant": props.variant,
        },
        [
          h("div", {
            class: cn(
              "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear group-data-[collapsible=offcanvas]:w-0 group-data-[placement=right]:rotate-180",
              props.variant === "floating" || props.variant === "inset"
                ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]"
                : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)",
              "motion-reduce:transition-none!"
            ),
            "data-slot": "sidebar-gap",
          }),
          h(
            "div",
            {
              ...rest,
              class: cn(
                "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) md:flex transition-[inset-inline-start,inset-inline-end,width] duration-200 ease-linear",
                props.placement === "left"
                  ? "inset-s-0 group-data-[collapsible=offcanvas]:-inset-s-(--sidebar-width)"
                  : "inset-e-0 group-data-[collapsible=offcanvas]:-inset-e-(--sidebar-width)",
                props.variant === "floating" || props.variant === "inset"
                  ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]"
                  : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[placement=right]:border-s group-data-[placement=left]:border-e",
                className as string
              ),
              "data-slot": "sidebar-container",
            },
            h(
              "div",
              {
                class:
                  "flex size-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow-sm",
                "data-sidebar": "sidebar",
                "data-slot": "sidebar-inner",
              },
              slots.default?.()
            )
          ),
        ]
      );
    };
  },
});

export const SidebarTrigger = defineComponent({
  name: "SidebarTrigger",
  inheritAttrs: false,
  setup(_props, { attrs, slots }) {
    const context = useSidebar();
    return () => {
      const { class: className, onClick, ...rest } = attrs;
      return h(
        Button,
        {
          ...rest,
          class: cn("size-7", className as string),
          "data-sidebar": "trigger",
          "data-slot": "sidebar-trigger",
          onClick: (event: MouseEvent) => {
            (onClick as ((event: MouseEvent) => void) | undefined)?.(event);
            context.toggleSidebar();
          },
          size: "icon-md",
          variant: "ghost",
        },
        {
          default: () =>
            slots.default?.() ?? [
              h(
                "svg",
                {
                  "aria-hidden": "true",
                  class: "rtl:rotate-180",
                  fill: "none",
                  viewBox: "0 0 24 24",
                },
                [
                  h("rect", {
                    height: "16",
                    rx: "2",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    width: "18",
                    x: "3",
                    y: "4",
                  }),
                  h("path", {
                    d: "M9 4v16",
                    stroke: "currentColor",
                    "stroke-width": "2",
                  }),
                ]
              ),
              h("span", { class: "sr-only" }, "Toggle Sidebar"),
            ],
        }
      );
    };
  },
});

const createPart = (
  name: string,
  tag: string,
  slot: string,
  sidebar: string | undefined,
  baseClass: string
) =>
  defineComponent({
    name,
    inheritAttrs: false,
    setup(_props, { attrs, slots }) {
      return () => {
        const { class: className, ...rest } = attrs;
        return h(
          tag,
          {
            ...rest,
            class: cn(baseClass, className as string),
            ...(sidebar ? { "data-sidebar": sidebar } : {}),
            "data-slot": slot,
          },
          slots.default?.()
        );
      };
    },
  });

export const SidebarRail = defineComponent({
  name: "SidebarRail",
  inheritAttrs: false,
  setup(_props, { attrs }) {
    const context = useSidebar();
    return () =>
      h("button", {
        ...attrs,
        "aria-label": "Toggle Sidebar",
        class: cn(
          "absolute inset-y-0 z-20 -translate-x-1/2 hidden w-4 transition-all ease-linear sm:flex after:absolute after:inset-s-1/2 after:inset-y-0 after:w-[2px] hover:after:bg-sidebar-border",
          attrs.class as string
        ),
        "data-sidebar": "rail",
        "data-slot": "sidebar-rail",
        onClick: context.toggleSidebar,
        tabindex: -1,
        title: "Toggle Sidebar",
        type: "button",
      });
  },
});

export const SidebarInset = createPart(
  "SidebarInset",
  "main",
  "sidebar-inset",
  undefined,
  "relative flex w-full flex-1 flex-col bg-background md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ms-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm"
);
export const SidebarInput = createPart(
  "SidebarInput",
  "input",
  "sidebar-input",
  "input",
  "h-8 w-full rounded-md border border-input bg-background px-2 text-sm shadow-none outline-none focus-visible:ring-[3px] focus-visible:ring-ring/32"
);
export const SidebarHeader = createPart(
  "SidebarHeader",
  "div",
  "sidebar-header",
  "header",
  "flex flex-col gap-2 p-2"
);
export const SidebarFooter = createPart(
  "SidebarFooter",
  "div",
  "sidebar-footer",
  "footer",
  "flex flex-col gap-2 p-2"
);
export const SidebarSeparator = createPart(
  "SidebarSeparator",
  "div",
  "sidebar-separator",
  "separator",
  "mx-2 h-px w-auto shrink-0 bg-sidebar-border"
);
export const SidebarContent = defineComponent({
  inheritAttrs: false,
  name: "SidebarContent",
  props: { scrollFade: Boolean },
  setup(props, { attrs, slots }) {
    return () => {
      const { class: className, ...rest } = attrs;
      return h(
        "div",
        {
          ...rest,
          class: cn(
            "min-h-0 flex flex-1 flex-col gap-0 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
            props.scrollFade &&
              "[mask-image:linear-gradient(to_bottom,transparent,black_3rem,black_calc(100%-3rem),transparent)]",
            className as string
          ),
          "data-sidebar": "content",
          "data-slot": "sidebar-content",
        },
        slots.default?.()
      );
    };
  },
});
export const SidebarGroup = createPart(
  "SidebarGroup",
  "div",
  "sidebar-group",
  "group",
  "relative flex w-full min-w-0 flex-col p-2"
);
export const SidebarGroupLabel = createPart(
  "SidebarGroupLabel",
  "div",
  "sidebar-group-label",
  "group-label",
  "flex h-8 shrink-0 items-center rounded-md px-2 font-medium text-sidebar-foreground/70 text-xs transition-[margin,opacity] duration-200 ease-linear group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0"
);
export const SidebarGroupContent = createPart(
  "SidebarGroupContent",
  "div",
  "sidebar-group-content",
  "group-content",
  "w-full text-sm"
);
export const SidebarMenu = createPart(
  "SidebarMenu",
  "ul",
  "sidebar-menu",
  "menu",
  "flex w-full min-w-0 flex-col gap-0"
);
export const SidebarMenuItem = createPart(
  "SidebarMenuItem",
  "li",
  "sidebar-menu-item",
  "menu-item",
  "group/menu-item relative"
);
export const SidebarMenuBadge = createPart(
  "SidebarMenuBadge",
  "div",
  "sidebar-menu-badge",
  "menu-badge",
  "pointer-events-none absolute inset-e-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 font-medium text-sidebar-foreground text-xs tabular-nums group-data-[collapsible=icon]:hidden"
);
export const SidebarMenuSub = createPart(
  "SidebarMenuSub",
  "ul",
  "sidebar-menu-sub",
  "menu-sub",
  "mx-3.5 flex min-w-0 flex-col gap-1 border-sidebar-border border-s px-2.5 py-0.5 ltr:translate-x-px rtl:-translate-x-px group-data-[collapsible=icon]:hidden"
);
export const SidebarMenuSubItem = createPart(
  "SidebarMenuSubItem",
  "li",
  "sidebar-menu-sub-item",
  "menu-sub-item",
  "group/menu-sub-item relative"
);

export const SidebarGroupAction = defineComponent({
  name: "SidebarGroupAction",
  inheritAttrs: false,
  setup(_props, { attrs, slots }) {
    return () =>
      h(
        "button",
        {
          ...attrs,
          class: cn(
            buttonVariants({
              clickEffect: false,
              size: "icon-xs",
              variant: "ghost",
            }),
            "absolute inset-e-3 top-3.5 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:hidden",
            attrs.class as string
          ),
          "data-sidebar": "group-action",
          "data-slot": "sidebar-group-action",
          type: "button",
        },
        slots.default?.()
      );
  },
});

export const SidebarMenuButton = defineComponent({
  name: "SidebarMenuButton",
  inheritAttrs: false,
  props: {
    isActive: Boolean,
    size: { default: "md", type: String },
    tooltip: String,
    variant: { default: "ghost", type: String },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        Button,
        {
          ...attrs,
          class: cn(
            "peer/menu-button group/menu-button w-full justify-start gap-2 overflow-hidden p-2 transition-[width,height,padding] group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! hover:bg-sidebar-accent hover:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground",
            attrs.class as string
          ),
          clickEffect: false,
          "data-active": props.isActive,
          "data-sidebar": "menu-button",
          "data-size": props.size,
          "data-slot": "sidebar-menu-button",
          size: props.size,
          title: props.tooltip,
          variant: props.variant,
        },
        { default: slots.default }
      );
  },
});

export const SidebarMenuAction = defineComponent({
  name: "SidebarMenuAction",
  inheritAttrs: false,
  props: { showOnHover: Boolean },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        "button",
        {
          ...attrs,
          class: cn(
            buttonVariants({
              clickEffect: false,
              size: "icon-xs",
              variant: "ghost",
            }),
            "absolute inset-e-1 top-1.5 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:hidden",
            !props.showOnHover &&
              "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 md:opacity-0",
            attrs.class as string
          ),
          "data-sidebar": "menu-action",
          "data-slot": "sidebar-menu-action",
          type: "button",
        },
        slots.default?.()
      );
  },
});

export const SidebarMenuSkeleton = defineComponent({
  name: "SidebarMenuSkeleton",
  inheritAttrs: false,
  props: { showIcon: Boolean },
  setup(props, { attrs }) {
    const width = `${Math.floor(Math.random() * 40) + 50}%`;
    return () =>
      h(
        "div",
        {
          ...attrs,
          class: cn(
            "flex h-8 items-center gap-2 rounded-md px-2",
            attrs.class as string
          ),
          "data-sidebar": "menu-skeleton",
          "data-slot": "sidebar-menu-skeleton",
        },
        [
          props.showIcon
            ? h("div", {
                class: "size-4 animate-pulse rounded-md bg-muted",
                "data-sidebar": "menu-skeleton-icon",
              })
            : null,
          h("div", {
            class:
              "h-4 max-w-(--skeleton-width) flex-1 animate-pulse rounded-md bg-muted",
            "data-sidebar": "menu-skeleton-text",
            style: { "--skeleton-width": width },
          }),
        ]
      );
  },
});

export const SidebarMenuSubButton = defineComponent({
  name: "SidebarMenuSubButton",
  inheritAttrs: false,
  props: { isActive: Boolean, size: { default: "md", type: String } },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        "a",
        {
          ...attrs,
          class: cn(
            buttonVariants({
              clickEffect: false,
              size: props.size as "md",
              variant: "ghost",
            }),
            "w-full min-w-0 justify-start overflow-hidden px-2 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
            attrs.class as string
          ),
          "data-active": props.isActive,
          "data-sidebar": "menu-sub-button",
          "data-size": props.size,
          "data-slot": "sidebar-menu-sub-button",
        },
        slots.default?.()
      );
  },
});
