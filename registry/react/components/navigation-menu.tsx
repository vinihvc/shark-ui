"use client";

import { Portal } from "@ark-ui/react";
import {
  NavigationMenu as ArkNavigationMenu,
  type NavigationMenuContentProps,
  type NavigationMenuLinkProps,
  type NavigationMenuTriggerProps,
} from "@ark-ui/react/navigation-menu";
import { ChevronDownIcon } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";

export const NavigationMenu = (
  props: React.ComponentProps<typeof ArkNavigationMenu.Root>
) => {
  const { lazyMount = true, unmountOnExit = true, className, ...rest } = props;

  return (
    <ArkNavigationMenu.Root
      className={cn(
        "group relative",
        "[--arrow-size:20px] [--indicator-size:10px]",
        className
      )}
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
      className={cn("flex", "data-[orientation=vertical]:flex-col", className)}
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
      className={cn(
        "relative",
        "group-data-[variant=viewport]:static",
        className
      )}
      data-slot="navigation-menu-item"
      {...rest}
    />
  );
};

export const NavigationMenuTrigger = (props: NavigationMenuTriggerProps) => {
  const { className, children, ...rest } = props;

  return (
    <ArkNavigationMenu.Trigger
      className={cn(
        "flex cursor-pointer items-center gap-1 border-0 bg-transparent px-4 py-2.5 font-medium text-inherit",
        "focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2",
        "[&>svg]:size-3.5 [&>svg]:transition-[rotate] [&>svg]:duration-200 [&>svg]:ease-[ease]",
        "[&[data-state=open]>svg]:-rotate-180",
        className
      )}
      data-slot="navigation-menu-trigger"
      type="button"
      {...rest}
    >
      {children}
      <ChevronDownIcon />
    </ArkNavigationMenu.Trigger>
  );
};

export const NavigationMenuLink = (
  props: NavigationMenuLinkProps & {
    context?: "default" | "content" | "viewport";
  }
) => {
  const { className, context = "default", ...rest } = props;

  return (
    <ArkNavigationMenu.Link
      className={cn(
        "flex cursor-pointer items-center gap-1 border-0 bg-transparent px-4 py-2.5 font-medium text-inherit no-underline",
        "focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2",
        "[&>svg]:size-3.5 [&>svg]:transition-[rotate] [&>svg]:duration-200 [&>svg]:ease-[ease]",
        "[&[data-state=open]>svg]:-rotate-180",
        "data-current:text-primary",
        "data-disabled:cursor-not-allowed data-disabled:opacity-50",
        context === "content" &&
          "flex min-h-8 w-full px-[0.725rem] text-inherit outline-none",
        context === "viewport" &&
          "flex items-center gap-2 rounded p-2 text-inherit text-sm leading-5 outline-none hover:bg-muted focus-visible:bg-muted focus-visible:outline-2 focus-visible:outline-ring focus-visible:-outline-offset-1 data-disabled:text-muted-foreground data-disabled:opacity-50",
        className
      )}
      data-slot="navigation-menu-link"
      {...rest}
    />
  );
};

export const NavigationMenuContent = (props: NavigationMenuContentProps) => {
  const { className, ...rest } = props;

  return (
    <ArkNavigationMenu.Content
      className={cn(
        "absolute top-0 left-0 grid flex-col gap-2.5 p-5 outline-none",
        "bg-popover",
        "will-change-[transform,opacity]",
        "rtl:right-0 rtl:left-auto",
        "data-[variant=default]:top-full data-[variant=default]:left-0 data-[variant=default]:mt-2 data-[variant=default]:w-max data-[variant=default]:min-w-48",
        "data-[variant=viewport]:top-0 data-[variant=viewport]:left-0",
        "data-[data-motion=from-start]:animate-[nav-menu-from-left_250ms_ease]",
        "data-[data-motion=from-end]:animate-[nav-menu-from-right_250ms_ease]",
        "data-[data-motion=to-start]:animate-[nav-menu-to-left_250ms_ease]",
        "data-[data-motion=to-end]:animate-[nav-menu-to-right_250ms_ease]",
        className
      )}
      data-slot="navigation-menu-content"
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
        "absolute z-2 flex justify-center overflow-hidden",
        "h-(--indicator-size) transition-[translate,width] duration-250 ease-[ease]",
        "bg-accent/50",
        "data-[orientation=horizontal]:bottom-[-15px] data-[orientation=horizontal]:left-0 data-[orientation=horizontal]:w-(--trigger-width) data-[orientation=horizontal]:translate-x-(--trigger-x)",
        "data-[orientation=vertical]:top-0 data-[orientation=vertical]:right-[-15px] data-[orientation=vertical]:h-(--trigger-height) data-[orientation=vertical]:translate-y-(--trigger-y) data-[orientation=vertical]:items-center",
        "data-[state=open]:animate-[nav-menu-fade-in_250ms_ease]",
        "data-[state=closed]:animate-[nav-menu-fade-out_250ms_ease]",
        className
      )}
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
    <Portal>
      <ArkNavigationMenu.ViewportPositioner
        className={cn(
          "absolute flex justify-center",
          "data-[orientation=horizontal]:top-full data-[orientation=horizontal]:left-0",
          "data-[orientation=vertical]:top-0 data-[orientation=vertical]:left-full",
          "data-[align=start]:justify-start data-[align=end]:justify-end data-[align=center]:justify-center",
          className
        )}
        data-slot="navigation-menu-viewport-positioner"
        {...rest}
      />
    </Portal>
  );
};

export const NavigationMenuViewport = (
  props: React.ComponentProps<typeof ArkNavigationMenu.Viewport>
) => {
  const { className, ...rest } = props;

  return (
    <ArkNavigationMenu.Viewport
      className={cn(
        "relative top-0 left-0 overflow-hidden rounded-lg bg-popover",
        "h-(--viewport-height) w-(--viewport-width) flex-[0_0_auto]",
        "origin-top transition-[width,height] duration-300 ease-[ease]",
        "drop-shadow-[0_1px_2px_var(--color-border)]",
        "z-[calc(var(--layer-index,0)+50)]",
        "data-[orientation=horizontal]:mt-[15px]",
        "data-[orientation=vertical]:ml-[15px]",
        "data-[state=open]:animate-[nav-menu-scale-in_200ms_ease]",
        "data-[state=closed]:animate-[nav-menu-scale-out_200ms_ease]",
        className
      )}
      data-slot="navigation-menu-viewport"
      {...rest}
    />
  );
};

export const NavigationMenuTriggerIcon = ({
  className,
  children,
  ...rest
}: React.ComponentProps<"span">) => (
  <span
    className={cn("inline-flex items-center justify-center", className)}
    data-slot="navigation-menu-trigger-icon"
    {...rest}
  >
    {children}
  </span>
);

export const NavigationMenuArrow = (
  props: React.ComponentProps<typeof ArkNavigationMenu.Arrow>
) => {
  const { className, ...rest } = props;

  return (
    <ArkNavigationMenu.Arrow
      className={cn(
        "relative h-(--arrow-size) w-(--arrow-size) rotate-45 bg-popover",
        "shadow-[color-mix(in_srgb,var(--color-border)_40%,transparent)_-1px_-1px_1px]",
        "data-[orientation=horizontal]:top-1",
        "data-[orientation=vertical]:left-3",
        className
      )}
      data-slot="navigation-menu-arrow"
      {...rest}
    />
  );
};

export const NavigationMenuGridLinkList = ({
  className,
  ...rest
}: React.ComponentProps<"ul">) => (
  <ul
    className={cn(
      "m-0 grid list-none gap-2 p-0",
      "w-[400px] grid-cols-2",
      className
    )}
    data-slot="navigation-menu-grid-link-list"
    {...rest}
  />
);

export const NavigationMenuFlexLinkList = ({
  className,
  ...rest
}: React.ComponentProps<"ul">) => (
  <ul
    className={cn(
      "m-0 flex list-none flex-col gap-2 p-0",
      "w-[250px]",
      className
    )}
    data-slot="navigation-menu-flex-link-list"
    {...rest}
  />
);

export const NavigationMenuLinkCard = ({
  className,
  ...rest
}: React.ComponentProps<"a">) => (
  <a
    className={cn(
      "block rounded-md p-3 no-underline",
      "[&_p]:font-normal [&_p]:text-sm",
      "hover:bg-muted/20",
      className
    )}
    data-slot="navigation-menu-link-card"
    {...rest}
  />
);
