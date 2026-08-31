import { ark } from "@ark-ui/solid/factory";
import {
  createContext,
  createMemo,
  createSignal,
  onCleanup,
  onMount,
  Show,
  splitProps,
  useContext,
  type ComponentProps,
  type JSX,
} from "solid-js";
import type { VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { Button, buttonVariants, type ButtonProps } from "./button";

const SIDEBAR_COOKIE_NAME = "sidebar_state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";

interface SidebarContextValue {
  isMobile: () => boolean;
  open: () => boolean;
  openMobile: () => boolean;
  setOpen: (value: boolean | ((current: boolean) => boolean)) => void;
  setOpenMobile: (value: boolean | ((current: boolean) => boolean)) => void;
  state: () => "collapsed" | "expanded";
  toggleSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextValue>();

const callClickHandler = (
  handler: ButtonProps["onClick"],
  event: MouseEvent & { currentTarget: HTMLButtonElement; target: Element }
) => {
  if (!handler) return;
  if (typeof handler === "function") handler(event);
  else handler[0](handler[1], event);
};

interface SidebarProviderProps extends ComponentProps<typeof ark.div> {
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  open?: boolean;
}

export const SidebarProvider = (props: SidebarProviderProps) => {
  const [local, rest] = splitProps(props, [
    "defaultOpen",
    "open",
    "onOpenChange",
    "class",
    "style",
    "children",
  ]);
  const [internalOpen, setInternalOpen] = createSignal(
    local.defaultOpen ?? true
  );
  const [openMobile, setOpenMobile] = createSignal(false);
  const [isMobile, setIsMobile] = createSignal(false);
  const open = () => local.open ?? internalOpen();
  const state = () => (open() ? ("expanded" as const) : ("collapsed" as const));
  const setOpen = (value: boolean | ((current: boolean) => boolean)) => {
    const next = typeof value === "function" ? value(open()) : value;
    local.onOpenChange?.(next);
    if (local.open === undefined) setInternalOpen(next);
    document.cookie = `${SIDEBAR_COOKIE_NAME}=${next}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
  };
  const toggleSidebar = () => {
    if (isMobile()) setOpenMobile((current) => !current);
    else setOpen((current) => !current);
  };

  onMount(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const updateMobile = () => setIsMobile(media.matches);
    const onKeyDown = (event: KeyboardEvent) => {
      if (
        event.key.toLowerCase() === SIDEBAR_KEYBOARD_SHORTCUT &&
        (event.metaKey || event.ctrlKey)
      ) {
        event.preventDefault();
        toggleSidebar();
      }
    };
    updateMobile();
    media.addEventListener("change", updateMobile);
    window.addEventListener("keydown", onKeyDown);
    onCleanup(() => {
      media.removeEventListener("change", updateMobile);
      window.removeEventListener("keydown", onKeyDown);
    });
  });

  const value: SidebarContextValue = {
    isMobile,
    open,
    openMobile,
    setOpen,
    setOpenMobile,
    state,
    toggleSidebar,
  };

  return (
    <SidebarContext.Provider value={value}>
      <ark.div
        {...rest}
        class={cn(
          "group/sidebar-wrapper flex min-h-svh w-full has-data-[variant=inset]:bg-sidebar",
          local.class
        )}
        data-slot="sidebar-wrapper"
        style={{
          "--sidebar-width": SIDEBAR_WIDTH,
          "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
          ...(local.style as JSX.CSSProperties),
        }}
      >
        {local.children}
      </ark.div>
    </SidebarContext.Provider>
  );
};

interface SidebarProps extends ComponentProps<typeof ark.aside> {
  collapsible?: "icon" | "none" | "offcanvas";
  placement?: "left" | "right";
  variant?: "floating" | "inset" | "sidebar";
}

export const Sidebar = (props: SidebarProps) => {
  const [local, rest] = splitProps(props, [
    "collapsible",
    "placement",
    "variant",
    "class",
    "children",
  ]);
  const context = useSidebar();
  const collapsible = () => local.collapsible ?? "offcanvas";
  const placement = () => local.placement ?? "left";
  const variant = () => local.variant ?? "sidebar";

  return (
    <Show
      when={collapsible() !== "none"}
      fallback={
        <ark.aside
          {...rest}
          class={cn(
            "h-full w-(--sidebar-width) flex flex-col bg-sidebar text-sidebar-foreground",
            local.class
          )}
          data-slot="sidebar"
        >
          {local.children}
        </ark.aside>
      }
    >
      <Show
        when={!context.isMobile()}
        fallback={
          <Show when={context.openMobile()}>
            <ark.button
              aria-label="Close sidebar"
              class="fixed inset-0 z-40 bg-black/32"
              onClick={() => context.setOpenMobile(false)}
              type="button"
            />
            <ark.aside
              {...rest}
              aria-modal="true"
              class={cn(
                "fixed inset-y-0 z-50 flex flex-col bg-sidebar text-sidebar-foreground",
                placement() === "left" ? "inset-s-0" : "inset-e-0",
                local.class
              )}
              data-mobile="true"
              data-sidebar="sidebar"
              data-slot="sidebar"
              role="dialog"
              style={{ width: SIDEBAR_WIDTH_MOBILE }}
            >
              {local.children}
            </ark.aside>
          </Show>
        }
      >
        <ark.aside
          class="group peer hidden text-sidebar-foreground md:block"
          data-collapsible={
            context.state() === "collapsed" ? collapsible() : ""
          }
          data-placement={placement()}
          data-slot="sidebar"
          data-state={context.state()}
          data-variant={variant()}
        >
          <ark.div
            class={cn(
              "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
              "group-data-[collapsible=offcanvas]:w-0 group-data-[placement=right]:rotate-180",
              variant() === "floating" || variant() === "inset"
                ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]"
                : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)",
              "motion-reduce:transition-none!"
            )}
            data-slot="sidebar-gap"
          />
          <ark.div
            {...(rest as unknown as ComponentProps<typeof ark.div>)}
            class={cn(
              "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) md:flex",
              "transition-[inset-inline-start,inset-inline-end,width] duration-200 ease-linear",
              placement() === "left"
                ? "inset-s-0 group-data-[collapsible=offcanvas]:-inset-s-(--sidebar-width)"
                : "inset-e-0 group-data-[collapsible=offcanvas]:-inset-e-(--sidebar-width)",
              variant() === "floating" || variant() === "inset"
                ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]"
                : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[placement=right]:border-s group-data-[placement=left]:border-e",
              "motion-reduce:transition-none!",
              local.class
            )}
            data-slot="sidebar-container"
          >
            <ark.div
              class="flex size-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow-sm"
              data-sidebar="sidebar"
              data-slot="sidebar-inner"
            >
              {local.children}
            </ark.div>
          </ark.div>
        </ark.aside>
      </Show>
    </Show>
  );
};

export const SidebarTrigger = (props: ButtonProps) => {
  const [local, rest] = splitProps(props, ["class", "onClick", "children"]);
  const context = useSidebar();
  return (
    <Button
      {...rest}
      class={cn("size-7", local.class)}
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      onClick={(event) => {
        callClickHandler(local.onClick, event);
        context.toggleSidebar();
      }}
      size="icon-md"
      variant="ghost"
    >
      {local.children ?? (
        <svg
          aria-hidden="true"
          class="rtl:rotate-180"
          fill="none"
          viewBox="0 0 24 24"
        >
          <rect
            height="16"
            rx="2"
            stroke="currentColor"
            stroke-width="2"
            width="18"
            x="3"
            y="4"
          />
          <path d="M9 4v16" stroke="currentColor" stroke-width="2" />
        </svg>
      )}
      <ark.span class="sr-only">Toggle Sidebar</ark.span>
    </Button>
  );
};

export const SidebarRail = (props: ComponentProps<typeof ark.button>) => {
  const [local, rest] = splitProps(props, ["class", "onClick"]);
  const context = useSidebar();
  return (
    <ark.button
      {...rest}
      aria-label="Toggle Sidebar"
      class={cn(
        "absolute inset-y-0 z-20 -translate-x-1/2 hidden w-4 transition-all ease-linear sm:flex",
        "after:absolute after:inset-s-1/2 after:inset-y-0 after:w-[2px] hover:after:bg-sidebar-border",
        "group-data-[placement=left]:-inset-e-4 group-data-[placement=right]:inset-s-0",
        "motion-reduce:transition-none!",
        local.class
      )}
      data-sidebar="rail"
      data-slot="sidebar-rail"
      onClick={(event) => {
        callClickHandler(local.onClick, event);
        context.toggleSidebar();
      }}
      tabIndex={-1}
      title="Toggle Sidebar"
      type="button"
    />
  );
};

const simplePart =
  <Tag extends keyof JSX.IntrinsicElements>(
    tag: Tag,
    slot: string,
    sidebar: string | undefined,
    baseClass: string
  ) =>
  (props: JSX.IntrinsicElements[Tag]) => {
    const [local, rest] = splitProps(props as { class?: string }, ["class"]);
    return (
      <ark.div
        {...(rest as ComponentProps<typeof ark.div>)}
        class={cn(baseClass, local.class)}
        data-sidebar={sidebar}
        data-slot={slot}
      />
    );
  };

export const SidebarInset = (props: ComponentProps<typeof ark.main>) => {
  const [local, rest] = splitProps(props, ["class"]);
  return (
    <ark.main
      {...rest}
      class={cn(
        "relative flex w-full flex-1 flex-col bg-background md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ms-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm",
        local.class
      )}
      data-slot="sidebar-inset"
    />
  );
};

export const SidebarInput = (props: ComponentProps<typeof ark.input>) => {
  const [local, rest] = splitProps(props, ["class"]);
  return (
    <ark.input
      {...rest}
      class={cn(
        "h-8 w-full rounded-md border border-input bg-background px-2 text-sm shadow-none outline-none focus-visible:ring-[3px] focus-visible:ring-ring/32",
        local.class
      )}
      data-sidebar="input"
      data-slot="sidebar-input"
    />
  );
};

export const SidebarHeader = simplePart(
  "div",
  "sidebar-header",
  "header",
  "flex flex-col gap-2 p-2"
);
export const SidebarFooter = simplePart(
  "div",
  "sidebar-footer",
  "footer",
  "flex flex-col gap-2 p-2"
);

export const SidebarSeparator = (props: ComponentProps<typeof ark.div>) => {
  const [local, rest] = splitProps(props, ["class"]);
  return (
    <ark.div
      {...rest}
      class={cn("mx-2 h-px w-auto shrink-0 bg-sidebar-border", local.class)}
      data-sidebar="separator"
      data-slot="sidebar-separator"
      role="separator"
    />
  );
};

interface SidebarContentProps extends ComponentProps<typeof ark.div> {
  scrollFade?: boolean;
}
export const SidebarContent = (props: SidebarContentProps) => {
  const [local, rest] = splitProps(props, ["class", "scrollFade"]);
  return (
    <ark.div
      {...rest}
      class={cn(
        "min-h-0 flex flex-1 flex-col gap-0 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        local.scrollFade &&
          "[mask-image:linear-gradient(to_bottom,transparent,black_3rem,black_calc(100%-3rem),transparent)]",
        local.class
      )}
      data-sidebar="content"
      data-slot="sidebar-content"
    />
  );
};

export const SidebarGroup = simplePart(
  "div",
  "sidebar-group",
  "group",
  "relative flex w-full min-w-0 flex-col p-2"
);
export const SidebarGroupLabel = simplePart(
  "div",
  "sidebar-group-label",
  "group-label",
  "flex h-8 shrink-0 items-center rounded-md px-2 font-medium text-sidebar-foreground/70 text-xs transition-[margin,opacity] duration-200 ease-linear outline-hidden ring-sidebar-ring focus-visible:ring-2 [&_svg]:size-4 [&_svg]:shrink-0 group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 motion-reduce:transition-none!"
);

export const SidebarGroupAction = (
  props: ComponentProps<typeof ark.button>
) => {
  const [local, rest] = splitProps(props, ["class"]);
  return (
    <ark.button
      {...rest}
      class={cn(
        buttonVariants({
          clickEffect: false,
          size: "icon-xs",
          variant: "ghost",
        }),
        "absolute inset-e-3 top-3.5 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:hidden",
        local.class
      )}
      data-sidebar="group-action"
      data-slot="sidebar-group-action"
      type="button"
    />
  );
};

export const SidebarGroupContent = simplePart(
  "div",
  "sidebar-group-content",
  "group-content",
  "w-full text-sm"
);

export const SidebarMenu = (props: ComponentProps<typeof ark.ul>) => {
  const [local, rest] = splitProps(props, ["class"]);
  return (
    <ark.ul
      {...rest}
      class={cn("flex w-full min-w-0 flex-col gap-0", local.class)}
      data-sidebar="menu"
      data-slot="sidebar-menu"
    />
  );
};

export const SidebarMenuItem = (props: ComponentProps<typeof ark.li>) => {
  const [local, rest] = splitProps(props, ["class"]);
  return (
    <ark.li
      {...rest}
      class={cn("group/menu-item relative", local.class)}
      data-sidebar="menu-item"
      data-slot="sidebar-menu-item"
    />
  );
};

interface SidebarMenuButtonProps extends ButtonProps {
  isActive?: boolean;
  tooltip?: string;
}
export const SidebarMenuButton = (props: SidebarMenuButtonProps) => {
  const [local, rest] = splitProps(props, [
    "isActive",
    "tooltip",
    "size",
    "variant",
    "class",
  ]);
  return (
    <Button
      {...rest}
      class={cn(
        "peer/menu-button group/menu-button w-full justify-start gap-2 overflow-hidden p-2 transition-[width,height,padding] data-[size=sm]:text-xs data-[size=lg]:h-12 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! hover:bg-sidebar-accent hover:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground [&>span:last-child]:truncate",
        local.class
      )}
      clickEffect={false}
      data-active={local.isActive ?? false}
      data-sidebar="menu-button"
      data-size={local.size ?? "md"}
      data-slot="sidebar-menu-button"
      size={local.size ?? "md"}
      title={local.tooltip}
      variant={local.variant ?? "ghost"}
    />
  );
};

interface SidebarMenuActionProps extends ComponentProps<typeof ark.button> {
  showOnHover?: boolean;
}
export const SidebarMenuAction = (props: SidebarMenuActionProps) => {
  const [local, rest] = splitProps(props, ["class", "showOnHover"]);
  return (
    <ark.button
      {...rest}
      class={cn(
        buttonVariants({
          clickEffect: false,
          size: "icon-xs",
          variant: "ghost",
        }),
        "absolute inset-e-1 top-1.5 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:hidden",
        !local.showOnHover &&
          "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 md:opacity-0",
        local.class
      )}
      data-sidebar="menu-action"
      data-slot="sidebar-menu-action"
      type="button"
    />
  );
};

export const SidebarMenuBadge = simplePart(
  "div",
  "sidebar-menu-badge",
  "menu-badge",
  "pointer-events-none absolute inset-e-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 font-medium text-sidebar-foreground text-xs tabular-nums group-data-[collapsible=icon]:hidden"
);

interface SidebarMenuSkeletonProps extends ComponentProps<typeof ark.div> {
  showIcon?: boolean;
}
export const SidebarMenuSkeleton = (props: SidebarMenuSkeletonProps) => {
  const [local, rest] = splitProps(props, ["class", "showIcon"]);
  const width = `${Math.floor(Math.random() * 40) + 50}%`;
  return (
    <ark.div
      {...rest}
      class={cn("flex h-8 items-center gap-2 rounded-md px-2", local.class)}
      data-sidebar="menu-skeleton"
      data-slot="sidebar-menu-skeleton"
    >
      <Show when={local.showIcon}>
        <ark.div
          class="size-4 animate-pulse rounded-md bg-muted"
          data-sidebar="menu-skeleton-icon"
        />
      </Show>
      <ark.div
        class="h-4 max-w-(--skeleton-width) flex-1 animate-pulse rounded-md bg-muted"
        data-sidebar="menu-skeleton-text"
        style={{ "--skeleton-width": width }}
      />
    </ark.div>
  );
};

export const SidebarMenuSub = (props: ComponentProps<typeof ark.ul>) => {
  const [local, rest] = splitProps(props, ["class"]);
  return (
    <ark.ul
      {...rest}
      class={cn(
        "mx-3.5 flex min-w-0 flex-col gap-1 border-sidebar-border border-s px-2.5 py-0.5 ltr:translate-x-px rtl:-translate-x-px group-data-[collapsible=icon]:hidden",
        local.class
      )}
      data-sidebar="menu-sub"
      data-slot="sidebar-menu-sub"
    />
  );
};

export const SidebarMenuSubItem = (props: ComponentProps<typeof ark.li>) => {
  const [local, rest] = splitProps(props, ["class"]);
  return (
    <ark.li
      {...rest}
      class={cn("group/menu-sub-item relative", local.class)}
      data-sidebar="menu-sub-item"
      data-slot="sidebar-menu-sub-item"
    />
  );
};

interface SidebarMenuSubButtonProps
  extends ComponentProps<typeof ark.a>,
    VariantProps<typeof buttonVariants> {
  isActive?: boolean;
}
export const SidebarMenuSubButton = (props: SidebarMenuSubButtonProps) => {
  const [local, rest] = splitProps(props, ["class", "size", "isActive"]);
  return (
    <ark.a
      {...rest}
      class={cn(
        buttonVariants({
          clickEffect: false,
          size: local.size ?? "md",
          variant: "ghost",
        }),
        "w-full min-w-0 justify-start overflow-hidden px-2 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground [&>span:last-child]:truncate",
        local.class
      )}
      data-active={local.isActive ?? false}
      data-sidebar="menu-sub-button"
      data-size={local.size ?? "md"}
      data-slot="sidebar-menu-sub-button"
    />
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return context;
};
