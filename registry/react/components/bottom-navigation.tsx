"use client";

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
      {...rest}
    />
  );
};

export const BottomNavigationList = (
  props: React.ComponentProps<typeof ArkTabs.List>
) => {
  const { className, ...rest } = props;

  return (
    <ArkTabs.List
      className={cn(
        "flex w-full items-center justify-around",
        "min-h-16 shrink-0",
        "border-border border-t bg-background",
        "safe-area-inset-bottom",
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
        "min-w-0 px-2 py-2",
        "font-medium text-muted-foreground text-xs",
        "cursor-pointer",
        "transition-colors",
        "hover:text-foreground",
        "aria-selected:text-primary",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "data-disabled:pointer-events-none data-disabled:opacity-64",
        "[&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0",
        className
      )}
      data-slot="bottom-navigation-item"
      {...rest}
    />
  );
};

export const BottomNavigationItemIcon = (
  props: React.ComponentProps<"span">
) => {
  const { className, ...rest } = props;

  return (
    <span
      className={cn("flex items-center justify-center", className)}
      data-slot="bottom-navigation-item-icon"
      {...rest}
    />
  );
};

export const BottomNavigationItemLabel = (
  props: React.ComponentProps<"span">
) => {
  const { className, ...rest } = props;

  return (
    <span
      className={cn("truncate", className)}
      data-slot="bottom-navigation-item-label"
      {...rest}
    />
  );
};

export const BottomNavigationItemBadge = (
  props: React.ComponentProps<"span">
) => {
  const { className, ...rest } = props;

  return (
    <span
      className={cn(
        "absolute end-1/2 top-1 translate-x-6 -translate-y-1/2",
        "flex size-4 items-center justify-center",
        "rounded-full bg-primary font-medium text-[10px] text-primary-foreground",
        "min-w-4 px-1",
        className
      )}
      data-slot="bottom-navigation-item-badge"
      {...rest}
    />
  );
};
