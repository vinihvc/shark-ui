import { Tabs as ArkTabs } from "@ark-ui/react/tabs";
import type React from "react";
import { cn } from "@/lib/utils";

export const Tabs = (props: React.ComponentProps<typeof ArkTabs.Root>) => {
  const { lazyMount = true, unmountOnExit = true, className, ...rest } = props;

  return (
    <ArkTabs.Root
      className={cn("flex flex-col gap-2", className)}
      lazyMount={lazyMount}
      unmountOnExit={unmountOnExit}
      {...rest}
    />
  );
};

export const TabsList = (props: React.ComponentProps<typeof ArkTabs.List>) => {
  const { className, ...rest } = props;

  return (
    <ArkTabs.List
      className={cn(
        "relative",
        "h-9 w-fit p-1",
        "inline-flex items-center justify-center",
        "bg-muted",
        "text-muted-foreground",
        "rounded-lg",
        className
      )}
      {...rest}
    />
  );
};

export const TabsTrigger = (
  props: React.ComponentProps<typeof ArkTabs.Trigger>
) => {
  const { className, ...rest } = props;

  return (
    <ArkTabs.Trigger
      className={cn(
        "h-[calc(100%-1px)] px-2 py-1",
        "inline-flex flex-1 items-center justify-center gap-1.5",
        "whitespace-nowrap font-medium text-muted-foreground text-sm",
        "rounded-md border border-transparent",
        "transition-[color,box-shadow]",
        "focus-visible:border-ring focus-visible:outline-1 focus-visible:outline-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
        "disabled:pointer-events-none disabled:opacity-50",
        "aria-selected:text-foreground",
        "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      {...rest}
    />
  );
};

export const TabsIndicator = (
  props: React.ComponentProps<typeof ArkTabs.Indicator>
) => {
  const { className, ...rest } = props;

  return (
    <ArkTabs.Indicator
      className={cn(
        "absolute bottom-0 h-0.5 w-(--width) bg-primary",
        className
      )}
      {...rest}
    />
  );
};

export const TabsContent = (
  props: React.ComponentProps<typeof ArkTabs.Content>
) => {
  const { className, ...rest } = props;

  return (
    <ArkTabs.Content
      className={cn("flex-1 outline-none", className)}
      {...rest}
    />
  );
};
