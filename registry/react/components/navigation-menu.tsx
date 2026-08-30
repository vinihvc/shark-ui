"use client";

import {
  NavigationMenu as ArkNavigationMenu,
  useNavigationMenu as useArkNavigationMenu,
  useNavigationMenuContext as useArkNavigationMenuContext,
} from "@ark-ui/react/navigation-menu";
import type React from "react";
import { cn } from "@/lib/utils";

export const useNavigationMenu = useArkNavigationMenu;
export const useNavigationMenuContext = useArkNavigationMenuContext;
export const NavigationMenuContext = ArkNavigationMenu.Context;

export type {
  NavigationMenuArrowProps,
  NavigationMenuContentProps,
  NavigationMenuContextProps,
  NavigationMenuIndicatorProps,
  NavigationMenuItemIndicatorProps,
  NavigationMenuItemProps,
  NavigationMenuLinkProps,
  NavigationMenuListProps,
  NavigationMenuRootProps as NavigationMenuProps,
  NavigationMenuRootProviderProps,
  NavigationMenuTriggerProps,
  NavigationMenuValueChangeDetails,
  NavigationMenuViewportPositionerProps,
  NavigationMenuViewportProps,
  UseNavigationMenuContext,
  UseNavigationMenuProps,
  UseNavigationMenuReturn,
} from "@ark-ui/react/navigation-menu";

export const NavigationMenu = (
  props: React.ComponentProps<typeof ArkNavigationMenu.Root>
) => {
  const { className, lazyMount = true, unmountOnExit = true, ...rest } = props;

  return (
    <ArkNavigationMenu.Root
      className={cn("relative w-fit max-w-full", className)}
      data-slot="navigation-menu"
      lazyMount={lazyMount}
      unmountOnExit={unmountOnExit}
      {...rest}
    />
  );
};

export const NavigationMenuRootProvider = (
  props: React.ComponentProps<typeof ArkNavigationMenu.RootProvider>
) => {
  const { className, lazyMount = true, unmountOnExit = true, ...rest } = props;

  return (
    <ArkNavigationMenu.RootProvider
      className={cn("relative w-fit max-w-full", className)}
      data-slot="navigation-menu"
      lazyMount={lazyMount}
      unmountOnExit={unmountOnExit}
      {...rest}
    />
  );
};

export const NavigationMenuList = (
  props: React.ComponentProps<typeof ArkNavigationMenu.List>
) => {
  const { className, ...rest } = props;

  return (
    <ArkNavigationMenu.List
      className={cn(
        "relative flex list-none items-center gap-1",
        "data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-stretch",
        "[&:has(>[data-slot=navigation-menu-indicator])>[data-slot=navigation-menu-item]]:static",
        className
      )}
      data-slot="navigation-menu-list"
      {...rest}
    />
  );
};

export const NavigationMenuItem = (
  props: React.ComponentProps<typeof ArkNavigationMenu.Item>
) => {
  const { className, ...rest } = props;

  return (
    <ArkNavigationMenu.Item
      className={cn("relative", className)}
      data-slot="navigation-menu-item"
      {...rest}
    />
  );
};

export const NavigationMenuTrigger = (
  props: React.ComponentProps<typeof ArkNavigationMenu.Trigger>
) => {
  const { className, ...rest } = props;

  return (
    <ArkNavigationMenu.Trigger
      className={cn(
        "inline-flex h-9 w-full items-center justify-between gap-1.5 rounded-lg px-3 py-2 font-medium text-sm outline-none",
        "hover:bg-accent hover:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
        "focus-visible:ring-[3px] focus-visible:ring-ring/32",
        "disabled:pointer-events-none disabled:opacity-64",
        "[&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0",
        className
      )}
      data-slot="navigation-menu-trigger"
      {...rest}
    />
  );
};

export const NavigationMenuLink = (
  props: React.ComponentProps<typeof ArkNavigationMenu.Link>
) => {
  const { className, ...rest } = props;

  return (
    <ArkNavigationMenu.Link
      className={cn(
        "flex items-center gap-2 rounded-lg px-3 py-2 text-sm no-underline outline-none",
        "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
        "data-current:bg-accent data-current:font-medium data-current:text-accent-foreground",
        "focus-visible:ring-[3px] focus-visible:ring-ring/32",
        className
      )}
      data-slot="navigation-menu-link"
      {...rest}
    />
  );
};

export const NavigationMenuContent = (
  props: React.ComponentProps<typeof ArkNavigationMenu.Content>
) => {
  const { className, ...rest } = props;
  const { isViewportRendered } = useNavigationMenuContext();

  return (
    <ArkNavigationMenu.Content
      className={cn(
        "absolute z-[calc(50+var(--nested-layer-count,0))]",
        "flex w-max min-w-48 max-w-[min(40rem,calc(100vw-3rem))] flex-col gap-1 p-1",
        "max-h-[70dvh] overflow-y-auto rounded-xl text-popover-foreground outline-none",
        isViewportRendered
          ? "start-0 top-0"
          : "start-0 top-full mt-2 border bg-popover shadow-lg/5 data-[orientation=vertical]:start-full data-[orientation=vertical]:top-0 data-[orientation=vertical]:ms-2 data-[orientation=vertical]:mt-0",
        "data-[state=open]:fade-in-0 duration-100 data-[state=open]:animate-in",
        "data-[motion=from-start]:slide-in-from-start-2 data-[motion=from-end]:slide-in-from-end-2",
        "motion-reduce:animate-none!",
        className
      )}
      data-slot="navigation-menu-content"
      data-viewport={isViewportRendered || undefined}
      {...rest}
    />
  );
};

export const NavigationMenuIndicator = (
  props: React.ComponentProps<typeof ArkNavigationMenu.Indicator>
) => {
  const { className, ...rest } = props;

  return (
    <ArkNavigationMenu.Indicator
      className={cn(
        "pointer-events-none absolute start-(--trigger-x) bottom-0 h-0.5 w-(--trigger-width) rounded-full bg-primary",
        "rtl:start-[calc(100%_-_var(--trigger-x)_-_var(--trigger-width))]",
        "data-[orientation=vertical]:top-(--trigger-y) data-[orientation=vertical]:bottom-auto data-[orientation=vertical]:h-(--trigger-height) data-[orientation=vertical]:w-0.5",
        "has-[>[data-slot=navigation-menu-arrow]]:-bottom-2 has-[>[data-slot=navigation-menu-arrow]]:flex has-[>[data-slot=navigation-menu-arrow]]:h-2 has-[>[data-slot=navigation-menu-arrow]]:justify-center has-[>[data-slot=navigation-menu-arrow]]:bg-transparent",
        "transition-[inset-inline-start,top,width,height] duration-200 ease-out motion-reduce:transition-none!",
        className
      )}
      data-slot="navigation-menu-indicator"
      {...rest}
    />
  );
};

export const NavigationMenuItemIndicator = (
  props: React.ComponentProps<typeof ArkNavigationMenu.ItemIndicator>
) => {
  const { className, ...rest } = props;

  return (
    <ArkNavigationMenu.ItemIndicator
      className={cn(
        "absolute inset-x-3 bottom-0 h-0.5 rounded-full bg-primary",
        className
      )}
      data-slot="navigation-menu-item-indicator"
      {...rest}
    />
  );
};

export const NavigationMenuArrow = (
  props: React.ComponentProps<typeof ArkNavigationMenu.Arrow>
) => {
  const { className, ...rest } = props;

  return (
    <ArkNavigationMenu.Arrow
      className={cn(
        "relative top-1 size-2 rotate-45 border-s border-t bg-popover",
        className
      )}
      data-slot="navigation-menu-arrow"
      {...rest}
    />
  );
};

export const NavigationMenuViewportPositioner = (
  props: React.ComponentProps<typeof ArkNavigationMenu.ViewportPositioner>
) => {
  const { className, ...rest } = props;

  return (
    <ArkNavigationMenu.ViewportPositioner
      className={cn(
        "pointer-events-none absolute start-0 end-0 top-full z-[calc(50+var(--nested-layer-count,0))] flex justify-center",
        "data-[align=start]:justify-start data-[align=end]:justify-end",
        "data-[orientation=vertical]:start-full data-[orientation=vertical]:end-auto data-[orientation=vertical]:top-0",
        className
      )}
      data-slot="navigation-menu-viewport-positioner"
      {...rest}
    />
  );
};

export const NavigationMenuViewport = (
  props: React.ComponentProps<typeof ArkNavigationMenu.Viewport>
) => {
  const { className, ...rest } = props;

  return (
    <ArkNavigationMenu.Viewport
      className={cn(
        "pointer-events-auto relative mt-2 box-content h-(--viewport-height) w-(--viewport-width) flex-none overflow-hidden",
        "max-h-[70dvh] max-w-[calc(100vw-3rem)] rounded-xl border bg-popover text-popover-foreground shadow-lg/5",
        "data-[orientation=vertical]:ms-2 data-[orientation=vertical]:mt-0",
        "transition-[width,height] duration-200 ease-out",
        "data-[state=open]:fade-in-0 data-[state=open]:zoom-in-[98%] data-[state=open]:animate-in",
        "data-[state=open]:[animation-duration:100ms]",
        "motion-reduce:animate-none! motion-reduce:transition-none!",
        className
      )}
      data-slot="navigation-menu-viewport"
      {...rest}
    />
  );
};
