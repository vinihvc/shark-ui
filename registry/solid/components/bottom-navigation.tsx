import { ark } from "@ark-ui/solid/factory";
import { Tabs as ArkTabs } from "@ark-ui/solid/tabs";
import type { ComponentProps } from "solid-js";

import { cn } from "@/lib/utils";

export const BottomNavigation = (
  props: ComponentProps<typeof ArkTabs.Root>
) => {
  const {
    "aria-label": ariaLabel = "Main navigation",
    class: className,
    ...rest
  } = props;

  return (
    <ArkTabs.Root
      aria-label={ariaLabel}
      class={cn("w-full", className)}
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
  props: ComponentProps<typeof ArkTabs.List>
) => {
  const { "aria-label": ariaLabel, className, ...rest } = props;

  return (
    <ArkTabs.List
      aria-label={ariaLabel ?? "Main navigation"}
      class={cn(
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
  props: ComponentProps<typeof ArkTabs.Trigger>
) => {
  const { class: className, ...rest } = props;

  return (
    <ArkTabs.Trigger
      class={cn(
        "relative",
        "min-w-0",
        "flex flex-1 flex-col items-center justify-center gap-0.5",
        "p-2",
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
  props: ComponentProps<typeof ark.span>
) => {
  const { class: className, ...rest } = props;

  return (
    <ark.span
      aria-hidden
      class={cn("flex items-center justify-center", className)}
      data-slot="bottom-navigation-item-icon"
      {...rest}
    />
  );
};

export const BottomNavigationItemLabel = (
  props: ComponentProps<typeof ark.span>
) => {
  const { class: className, ...rest } = props;

  return (
    <ark.span
      class={cn("truncate font-medium text-xs", className)}
      data-slot="bottom-navigation-item-label"
      {...rest}
    />
  );
};
