"use client";

import {
  NavigationMenu as ArkNavigationMenu,
  type NavigationMenuContentProps,
  type NavigationMenuLinkProps,
  type NavigationMenuTriggerProps,
} from "@ark-ui/react/navigation-menu";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

export const NavigationMenu = (
  props: React.ComponentProps<typeof ArkNavigationMenu.Root>
) => {
  const { lazyMount = true, unmountOnExit = true, className, ...rest } = props;

  return (
    <ArkNavigationMenu.Root
      className={cn("relative", className)}
      data-slot="navigation-menu"
      lazyMount={lazyMount}
      unmountOnExit={unmountOnExit}
      {...rest}
    />
  );
};

const navigationMenuListVariants = tv({
  base: [
    "relative flex items-center gap-1",
    "data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-stretch",
  ],
});

export const NavigationMenuList = (
  props: React.ComponentProps<typeof ArkNavigationMenu.List>
) => {
  const { className, ...rest } = props;

  return (
    <ArkNavigationMenu.List
      className={cn(navigationMenuListVariants(), className)}
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

const navigationMenuTriggerVariants = tv({
  base: [
    "inline-flex items-center justify-center gap-1.5",
    "h-9 px-3 sm:h-8",
    "whitespace-nowrap font-medium text-sm",
    "rounded-md border border-transparent",
    "text-muted-foreground",
    "cursor-pointer",
    "transition-colors",
    "hover:bg-accent hover:text-accent-foreground",
    "data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
    "outline-none focus-visible:ring-[3px] focus-visible:ring-ring/32",
    "data-disabled:pointer-events-none data-disabled:opacity-64",
  ],
});

export const NavigationMenuTrigger = (props: NavigationMenuTriggerProps) => {
  const { className, ...rest } = props;

  return (
    <ArkNavigationMenu.Trigger
      className={cn(navigationMenuTriggerVariants(), className)}
      data-slot="navigation-menu-trigger"
      {...rest}
    />
  );
};

const navigationMenuContentVariants = tv({
  base: [
    "absolute top-full left-0 z-50",
    "mt-1 min-w-48",
    "overflow-hidden rounded-lg border",
    "bg-popover text-popover-foreground",
    "shadow-lg/5",
    "data-[state=closed]:animate-out data-[state=open]:animate-in",
    "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
    "data-[state=closed]:zoom-out-[98%] data-[state=open]:zoom-in-[98%]",
    "data-[state=closed]:slide-out-to-top-2 data-[state=open]:slide-in-from-top-2",
  ],
});

export const NavigationMenuContent = (props: NavigationMenuContentProps) => {
  const { className, ...rest } = props;

  return (
    <ArkNavigationMenu.Content
      className={cn(navigationMenuContentVariants(), className)}
      data-slot="navigation-menu-content"
      {...rest}
    />
  );
};

const navigationMenuLinkVariants = tv({
  base: [
    "block w-full",
    "px-3 py-2",
    "text-sm",
    "rounded-md",
    "text-popover-foreground",
    "no-underline",
    "transition-colors",
    "hover:bg-accent hover:text-accent-foreground",
    "focus-visible:bg-accent focus-visible:text-accent-foreground focus-visible:outline-none",
    "data-current:bg-accent data-current:text-accent-foreground",
    "data-disabled:pointer-events-none data-disabled:opacity-64",
  ],
});

export const NavigationMenuLink = (props: NavigationMenuLinkProps) => {
  const { className, ...rest } = props;

  return (
    <ArkNavigationMenu.Link
      className={cn(navigationMenuLinkVariants(), className)}
      data-slot="navigation-menu-link"
      {...rest}
    />
  );
};

const navigationMenuIndicatorVariants = tv({
  base: [
    "absolute top-0 left-0",
    "transition-[transform,width,height] duration-250 ease-out",
    "data-[orientation=horizontal]:h-full data-[orientation=horizontal]:w-(--trigger-width) data-[orientation=horizontal]:translate-x-(--trigger-x)",
    "data-[orientation=vertical]:h-(--trigger-height) data-[orientation=vertical]:w-full data-[orientation=vertical]:translate-y-(--trigger-y)",
  ],
  variants: {
    variant: {
      default: "rounded-md bg-accent/50",
      underline:
        "bg-primary data-[orientation=horizontal]:top-auto data-[orientation=horizontal]:bottom-0 data-[orientation=horizontal]:h-0.5 data-[orientation=vertical]:w-0.5",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface NavigationMenuIndicatorProps
  extends React.ComponentProps<typeof ArkNavigationMenu.Indicator>,
    VariantProps<typeof navigationMenuIndicatorVariants> {}

export const NavigationMenuIndicator = (
  props: NavigationMenuIndicatorProps
) => {
  const { variant = "default", className, ...rest } = props;

  return (
    <ArkNavigationMenu.Indicator
      className={cn(navigationMenuIndicatorVariants({ variant }), className)}
      data-slot="navigation-menu-indicator"
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
      className={cn("absolute top-full left-0 z-50 w-full", className)}
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
        "overflow-hidden rounded-lg border",
        "bg-popover text-popover-foreground",
        "shadow-lg/5",
        "transition-[width,height] duration-300 ease-out",
        "[--viewport-height:var(--viewport-height)] [--viewport-width:var(--viewport-width)]",
        "data-[state=closed]:animate-out data-[state=open]:animate-in",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      )}
      data-slot="navigation-menu-viewport"
      {...rest}
    />
  );
};
