import { ark } from "@ark-ui/solid/factory";
import { PanelLeftIcon } from "lucide-solid";
import { type ComponentProps, createContext, useContext } from "solid-js";

import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/registry/react/hooks/use-is-mobile";
import { Button } from "@/registry/solid/components/button";
import { Input } from "@/registry/solid/components/input";
import { ScrollArea } from "@/registry/solid/components/scroll-area";
import { Separator } from "@/registry/solid/components/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
} from "@/registry/solid/components/sheet";
import { Skeleton } from "@/registry/solid/components/skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/solid/components/tooltip";

const SIDEBAR_COOKIE_NAME = "sidebar_state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";

interface SidebarContextProps {
  isMobile: boolean;
  open: boolean;
  openMobile: boolean;
  setOpen: (open: boolean) => void;
  setOpenMobile: (open: boolean) => void;
  state: "expanded" | "collapsed";
  toggleSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextProps | null>(null);

interface SidebarProviderProps extends ComponentProps<"div"> {
  /**
   * The default open state of the sidebar.
   *
   * @default true
   */
  defaultOpen?: boolean;
  /**
   * The function to call when the open state of the sidebar changes.
   */
  onOpenChange?: (open: boolean) => void;
  /**
   * The open state of the sidebar.
   */
  open?: boolean;
}

export const SidebarProvider = (props: SidebarProviderProps) => {
  const {
    defaultOpen = true,
    open: openProp,
    onOpenChange: setOpenProp,
    class: className,
    style,
    ...rest
  } = props;

  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = React.useState(false);

  const [_open, _setOpen] = React.useState(defaultOpen);
  const open = openProp ?? _open;
  const setOpen = React.useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === "function" ? value(open) : value;
      if (setOpenProp) {
        setOpenProp(openState);
      } else {
        _setOpen(openState);
      }

      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    },
    [setOpenProp, open]
  );

  const toggleSidebar = React.useCallback(() => {
    if (isMobile) {
      setOpenMobile((open) => !open);
    } else {
      setOpen((open) => !open);
    }
  }, [isMobile, setOpen]);

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
        (event.metaKey || event.ctrlKey)
      ) {
        event.preventDefault();
        toggleSidebar();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleSidebar]);

  const state = open ? "expanded" : "collapsed";

  const contextValue = React.useMemo<SidebarContextProps>(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, toggleSidebar]
  );

  return (
    <SidebarContext.Provider value={contextValue}>
      <ark.div
        class={cn(
          "group/sidebar-wrapper",
          "flex",
          "min-h-svh w-full",
          "has-data-[variant=inset]:bg-sidebar",
          className
        )}
        style={
          {
            "--sidebar-width": SIDEBAR_WIDTH,
            "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
            ...style,
          } as React.CSSProperties
        }
        {...rest}
      />
    </SidebarContext.Provider>
  );
};

interface SidebarProps extends ComponentProps<typeof Sheet> {
  className?: string;
  collapsible?: "offcanvas" | "icon" | "none";
  placement?: "left" | "right";
  variant?: "sidebar" | "floating" | "inset";
}

export const Sidebar = (props: SidebarProps) => {
  const {
    collapsible = "offcanvas",
    placement = "left",
    variant = "sidebar",
    class: className,
    children,
    ...rest
  } = props;

  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

  if (collapsible === "none") {
    return (
      <ark.div
        class={cn(
          "h-full w-(--sidebar-width)",
          "flex flex-col",
          "bg-sidebar",
          "text-sidebar-foreground",
          className
        )}
        {...rest}
      >
        {children}
      </ark.div>
    );
  }

  if (isMobile) {
    return (
      <Sheet
        {...props}
        onOpenChange={({ open }) => setOpenMobile(open)}
        open={openMobile}
      >
        <SheetContent
          class={cn(
            "w-(--sidebar-width)",
            "p-0",
            "bg-sidebar",
            "text-sidebar-foreground",
            "[&>button]:hidden"
          )}
          data-mobile="true"
          data-sidebar="sidebar"
          placement={placement === "left" ? "left" : "right"}
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
            } as React.CSSProperties
          }
        >
          <SheetHeader
            class="sr-only"
            description="Displays the mobile sidebar."
            title="Sidebar"
          />
          <ark.div class="flex size-full flex-col">{children}</ark.div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <ark.div
      class={cn("group peer", "hidden md:block", "text-sidebar-foreground")}
      data-collapsible={state === "collapsed" ? collapsible : ""}
      data-placement={placement}
      data-state={state}
      data-variant={variant}
    >
      <ark.div
        class={cn(
          "relative",
          "w-(--sidebar-width)",
          "bg-transparent",
          "transition-[width] duration-200 ease-linear",
          "group-data-[collapsible=offcanvas]:w-0",
          "group-data-[placement=right]:rotate-180",
          variant === "floating" || variant === "inset"
            ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]"
            : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
        )}
      />
      <ark.div
        class={cn(
          "fixed inset-y-0 z-10",
          "w-(--sidebar-width)",
          "hidden md:flex",
          "h-svh",
          "transition-[inset-inline-start,inset-inline-end,width] duration-200 ease-linear",
          placement === "left"
            ? "inset-s-0 group-data-[collapsible=offcanvas]:inset-s-[calc(var(--sidebar-width)*-1)]"
            : "inset-e-0 group-data-[collapsible=offcanvas]:inset-e-[calc(var(--sidebar-width)*-1)]",
          variant === "floating" || variant === "inset"
            ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]"
            : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[placement=right]:border-s group-data-[placement=left]:border-e",
          className
        )}
        {...props}
      >
        <ark.div
          class={cn(
            "size-full",
            "flex flex-col",
            "bg-sidebar",
            "group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow-sm"
          )}
          data-sidebar="sidebar"
        >
          {children}
        </ark.div>
      </ark.div>
    </ark.div>
  );
};

export const SidebarTrigger = (props: ComponentProps<typeof Button>) => {
  const { class: className, onClick, ...rest } = props;

  const { toggleSidebar } = useSidebar();

  return (
    <Button
      class={cn("size-7", className)}
      data-sidebar="trigger"
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      size="icon-md"
      variant="ghost"
      {...rest}
    >
      <PanelLeftIcon class="rtl:rotate-180" />
      <ark.span class="sr-only">Toggle Sidebar</ark.span>
    </Button>
  );
};

export const SidebarRail = (props: ComponentProps<typeof ark.button>) => {
  const { class: className, ...rest } = props;

  const { toggleSidebar } = useSidebar();

  return (
    <ark.button
      aria-label="Toggle Sidebar"
      class={cn(
        "absolute inset-y-0 z-20 -translate-x-1/2",
        "w-4",
        "hidden sm:flex",
        "transition-all ease-linear",
        "after:absolute after:inset-s-1/2 after:inset-y-0 after:w-[2px]",
        "hover:after:bg-sidebar-border",
        "group-data-[placement=left]:-inset-e-4 group-data-[placement=right]:inset-s-0",
        "in-data-[placement=left]:cursor-w-resize in-data-[placement=right]:cursor-e-resize",
        "[[data-placement=left][data-state=collapsed]_&]:cursor-e-resize [[data-placement=right][data-state=collapsed]_&]:cursor-w-resize",
        "group-data-[collapsible=offcanvas]:translate-x-0 hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:after:start-full",
        "[[data-placement=left][data-collapsible=offcanvas]_&]:-inset-e-2",
        "[[data-placement=right][data-collapsible=offcanvas]_&]:-inset-s-2",
        className
      )}
      data-sidebar="rail"
      onClick={toggleSidebar}
      tabIndex={-1}
      title="Toggle Sidebar"
      type="button"
      {...rest}
    />
  );
};

export const SidebarInset = (props: ComponentProps<typeof ark.main>) => {
  const { class: className, ...rest } = props;

  return (
    <ark.main
      class={cn(
        "relative flex w-full flex-1 flex-col bg-background",
        "md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ms-2",
        "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ms-0",
        "md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm",
        className
      )}
      {...rest}
    />
  );
};

export const SidebarInput = (props: ComponentProps<typeof Input>) => {
  const { class: className, ...rest } = props;

  return (
    <Input
      class={cn("h-8 w-full bg-background shadow-none", className)}
      data-sidebar="input"
      {...rest}
    />
  );
};

export const SidebarHeader = (props: ComponentProps<typeof ark.div>) => {
  const { class: className, ...rest } = props;

  return (
    <ark.div
      class={cn("flex flex-col gap-2 p-2", className)}
      data-sidebar="header"
      {...rest}
    />
  );
};

export const SidebarFooter = (props: ComponentProps<typeof ark.div>) => {
  const { class: className, ...rest } = props;

  return (
    <ark.div
      class={cn("flex flex-col gap-2 p-2", className)}
      data-sidebar="footer"
      {...rest}
    />
  );
};

export const SidebarSeparator = (props: ComponentProps<typeof Separator>) => {
  const { class: className, ...rest } = props;

  return (
    <Separator
      class={cn("mx-2 w-auto bg-sidebar-border", className)}
      data-sidebar="separator"
      {...rest}
    />
  );
};

interface SidebarContentProps extends ComponentProps<"div"> {
  /**
   * Whether to add a scroll fade effect to the sidebar content.
   *
   * @default false
   */
  scrollFade?: boolean;
}
export const SidebarContent = (props: SidebarContentProps) => {
  const { scrollFade = false, className, ...rest } = props;

  return (
    <ScrollArea
      class="[--fade-size:3rem] **:data-[slot=scroll-area-scrollbar]:hidden"
      scrollFade={scrollFade}
    >
      <ark.div
        class={cn(
          "min-h-0",
          "flex flex-1 flex-col gap-2",
          "overflow-auto",
          "group-data-[collapsible=icon]:overflow-hidden",
          className
        )}
        data-sidebar="content"
        data-slot="sidebar-content"
        {...rest}
      />
    </ScrollArea>
  );
};

export const SidebarGroup = (props: ComponentProps<typeof ark.div>) => {
  const { class: className, ...rest } = props;

  return (
    <ark.div
      class={cn("relative flex w-full min-w-0 flex-col p-2", className)}
      data-sidebar="group"
      {...rest}
    />
  );
};

export const SidebarGroupLabel = (props: ComponentProps<typeof ark.div>) => {
  const { class: className, ...rest } = props;

  return (
    <ark.div
      class={cn(
        "h-8",
        "px-2",
        "flex shrink-0 items-center",
        "font-medium text-sidebar-foreground/70 text-xs",
        "rounded-md",
        "transition-[margin,opacity] duration-200 ease-linear",
        "outline-hidden ring-sidebar-ring focus-visible:ring-2",
        "[&_svg]:size-4 [&_svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        className
      )}
      data-sidebar="group-label"
      {...rest}
    />
  );
};

export const SidebarGroupAction = (
  props: ComponentProps<typeof ark.button>
) => {
  const { class: className, ...rest } = props;

  return (
    <ark.button
      class={cn(
        "absolute inset-e-3 top-3.5",
        "aspect-square w-5",
        "p-0",
        "flex items-center justify-center",
        "rounded-md",
        "text-sidebar-foreground",
        "transition-transform",
        "outline-hidden ring-sidebar-ring",
        "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        "focus-visible:ring-2",
        "[&_svg]:size-4 [&_svg]:shrink-0",
        "after:absolute after:-inset-2 md:after:hidden",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      data-sidebar="group-action"
      type="button"
      {...rest}
    />
  );
};

export const SidebarGroupContent = (props: ComponentProps<typeof ark.div>) => {
  const { class: className, ...rest } = props;

  return (
    <ark.div
      class={cn("w-full text-sm", className)}
      data-sidebar="group-content"
      {...rest}
    />
  );
};

export const SidebarMenu = (props: ComponentProps<typeof ark.ul>) => {
  const { class: className, ...rest } = props;

  return (
    <ark.ul
      class={cn("w-full min-w-0", "flex flex-col gap-1", className)}
      data-sidebar="menu"
      {...rest}
    />
  );
};

export const SidebarMenuItem = (props: ComponentProps<typeof ark.li>) => {
  const { class: className, ...rest } = props;

  return (
    <ark.li
      class={cn("group/menu-item relative", className)}
      data-sidebar="menu-item"
      {...rest}
    />
  );
};

const sidebarMenuSubButtonVariants = tv({
  base: [
    "flex h-7 min-w-0 items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-hidden ring-sidebar-ring ltr:-translate-x-px rtl:translate-x-px",
    "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground",
    "disabled:pointer-events-none disabled:opacity-64 aria-disabled:pointer-events-none aria-disabled:opacity-64",
    "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
    "[&>span:last-child]:truncate [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:text-sidebar-accent-foreground",
    "group-data-[collapsible=icon]:hidden",
  ],
  variants: {
    size: {
      sm: "text-xs",
      md: "text-sm",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface SidebarMenuButtonProps extends ComponentProps<typeof Button> {
  isActive?: boolean;
  tooltip?: string | ComponentProps<typeof TooltipContent>;
}

export const SidebarMenuButton = ({
  tooltip,
  ...props
}: SidebarMenuButtonProps) => {
  const {
    isActive = false,
    size = "md",
    variant = "ghost",
    class: className,
    ...rest
  } = props;

  const { isMobile, state } = useSidebar();

  const button = (
    <Button
      class={cn(
        "peer/menu-button w-full",
        "justify-start gap-2",
        "overflow-hidden",
        "transition-[width,height,padding]",
        "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        "focus-visible:sidebar-ring-[3px] outline-none focus-visible:ring-sidebar-ring/32",
        "active:bg-sidebar-accent active:text-sidebar-accent-foreground",
        "group-has-data-[sidebar=menu-action]/menu-item:pe-8",
        className
      )}
      clickEffect={false}
      data-active={isActive}
      data-sidebar="menu-button"
      data-size={size}
      size={size}
      variant={variant}
      {...rest}
    />
  );

  if (!tooltip) {
    return button;
  }

  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip,
    };
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent hidden={state !== "collapsed" || isMobile} {...tooltip} />
    </Tooltip>
  );
};

interface SidebarMenuActionProps extends ComponentProps<typeof ark.button> {
  showOnHover?: boolean;
}

export const SidebarMenuAction = (props: SidebarMenuActionProps) => {
  const { class: className, showOnHover = false, ...rest } = props;

  return (
    <ark.button
      class={cn(
        "absolute inset-e-1 top-1.5",
        "aspect-square w-5",
        "p-0",
        "flex items-center justify-center",
        "rounded-md",
        "text-sidebar-foreground",
        "transition-transform",
        "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        "outline-hidden ring-sidebar-ring focus-visible:ring-2",
        "peer-hover/menu-button:text-sidebar-accent-foreground",
        "after:absolute after:-inset-2 md:after:hidden",
        "peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=md]/menu-button:top-1.5 peer-data-[size=sm]/menu-button:top-1",
        "group-data-[collapsible=icon]:hidden",
        "[&_svg]:size-4 [&_svg]:shrink-0",
        !!showOnHover &&
          "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
        className
      )}
      data-sidebar="menu-action"
      type="button"
      {...rest}
    />
  );
};

export const SidebarMenuBadge = (props: ComponentProps<typeof ark.div>) => {
  const { class: className, ...rest } = props;

  return (
    <ark.div
      class={cn(
        "absolute inset-s-1",
        "flex items-center justify-center",
        "px-1",
        "h-5 min-w-5",
        "rounded-md",
        "select-none font-medium text-sidebar-foreground text-xs tabular-nums",
        "pointer-events-none",
        "peer-hover/menu-button:text-sidebar-accent-foreground",
        "peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "peer-data-[size=md]/menu-button:top-1.5",
        "peer-data-[size=sm]/menu-button:top-1",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      data-sidebar="menu-badge"
      {...rest}
    />
  );
};

interface SidebarMenuSkeletonProps extends ComponentProps<typeof ark.div> {
  showIcon?: boolean;
}

export const SidebarMenuSkeleton = (props: SidebarMenuSkeletonProps) => {
  const { class: className, showIcon = false, ...rest } = props;

  const width = React.useMemo(
    () => `${Math.floor(Math.random() * 40) + 50}%`,
    []
  );

  return (
    <ark.div
      class={cn("flex h-8 items-center gap-2 rounded-md px-2", className)}
      data-sidebar="menu-skeleton"
      {...rest}
    >
      {!!showIcon && (
        <Skeleton class="size-4 rounded-md" data-sidebar="menu-skeleton-icon" />
      )}
      <Skeleton
        class="h-4 max-w-(--skeleton-width) flex-1"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as React.CSSProperties
        }
      />
    </ark.div>
  );
};

export const SidebarMenuSub = (props: ComponentProps<typeof ark.ul>) => {
  const { class: className, ...rest } = props;

  return (
    <ark.ul
      class={cn(
        "mx-3.5 flex min-w-0 flex-col gap-1 px-2.5 py-0.5 ltr:translate-x-px rtl:-translate-x-px",
        "border-sidebar-border border-s",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      data-sidebar="menu-sub"
      {...rest}
    />
  );
};

export const SidebarMenuSubItem = ({
  class: className,
  ...props
}: ComponentProps<typeof ark.li>) => (
  <ark.li
    class={cn("group/menu-sub-item relative", className)}
    data-sidebar="menu-sub-item"
    {...props}
  />
);

interface SidebarMenuSubButtonProps
  extends ComponentProps<typeof ark.a>,
    VariantProps<typeof sidebarMenuSubButtonVariants> {
  isActive?: boolean;
}

export const SidebarMenuSubButton = (props: SidebarMenuSubButtonProps) => {
  const { size = "md", isActive = false, className, ...rest } = props;

  return (
    <ark.a
      class={cn(sidebarMenuSubButtonVariants({ size }), className)}
      data-active={isActive}
      data-sidebar="menu-sub-button"
      data-size={size}
      {...rest}
    />
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);

  if (context === null) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }

  return context;
};
