"use client";

import { ark } from "@ark-ui/react/factory";
import { Tabs as ArkTabs } from "@ark-ui/react/tabs";
import type React from "react";
import { cn } from "@/lib/utils";

export const BottomNavigation = (
  props: React.ComponentProps<typeof ArkTabs.Root>
) => {
  const { className, ...rest } = props;

  return (
    <ArkTabs.Root
      className={cn("w-full", className)}
      data-slot="bottom-navigation"
      style={{
        height:
          "calc(calc(var(--spacing)*14) + env(safe-area-inset-bottom, 0px))",
      }}
      {...rest}
    />
  );
};

export const BottomNavigationList = (
  props: React.ComponentProps<typeof ArkTabs.List>
) => {
  const { "aria-label": ariaLabel, className, ...rest } = props;

  return (
    <ArkTabs.List
      aria-label={ariaLabel ?? "Main navigation"}
      className={cn(
        "fixed inset-x-0 bottom-0 z-10",
        "flex w-full items-center justify-around",
        "min-h-14 shrink-0",
        "border-t bg-background/60 backdrop-blur-sm",
        "pb-[env(safe-area-inset-bottom,0px)]",
        className
      )}
      data-slot="bottom-navigation-list"
      {...rest}
    />
  );
};

export const BottomNavigationItem = (
  props: React.ComponentProps<typeof ArkTabs.Trigger>
) => {
  const { className, ...rest } = props;

  return (
    <ArkTabs.Trigger
      className={cn(
        "relative flex flex-1 flex-col items-center justify-center gap-0.5",
        "min-w-0 p-2",
        "text-muted-foreground",
        "cursor-pointer",
        "transition-colors",
        "hover:text-foreground",
        "aria-selected:text-primary",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "data-disabled:pointer-events-none data-disabled:opacity-64",
        "[&_svg:not([class*='size-'])]:size-5 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        "has-[data-slot=bottom-navigation-item-label]:size-4",
        "pointer-coarse:after:absolute pointer-coarse:after:size-full pointer-coarse:after:min-h-11 pointer-coarse:after:min-w-11",
        className
      )}
      data-slot="bottom-navigation-item"
      {...rest}
    />
  );
};

export const BottomNavigationItemIcon = (
  props: React.ComponentProps<typeof ark.span>
) => {
  const { className, ...rest } = props;

  return (
    <ark.span
      aria-hidden
      className={cn("flex items-center justify-center", className)}
      data-slot="bottom-navigation-item-icon"
      {...rest}
    />
  );
};

export const BottomNavigationItemLabel = (
  props: React.ComponentProps<typeof ark.span>
) => {
  const { className, ...rest } = props;

  return (
    <ark.span
      className={cn("truncate font-medium text-xs", className)}
      data-slot="bottom-navigation-item-label"
      {...rest}
    />
  );
};
