"use client";

import { SegmentGroup as ArkSegmentGroup } from "@ark-ui/react/segment-group";
import type React from "react";
import { cn } from "@/lib/utils";

export const SegmentGroup = (
  props: React.ComponentProps<typeof ArkSegmentGroup.Root>
) => {
  const { className, ...rest } = props;

  return (
    <ArkSegmentGroup.Root
      className={cn(
        "relative isolate inline-flex items-center rounded-lg bg-muted p-1",
        "shadow-[inset_0_0_0_1px_hsl(var(--border))]",
        "data-disabled:opacity-64 data-disabled:grayscale",
        className
      )}
      data-slot="segment-group"
      {...rest}
    />
  );
};

export const SegmentGroupIndicator = (
  props: React.ComponentProps<typeof ArkSegmentGroup.Indicator>
) => {
  const { className, ...rest } = props;

  return (
    <ArkSegmentGroup.Indicator
      className={cn(
        "absolute z-0 rounded-md bg-background shadow-sm",
        "transition-[width,height,left,top] duration-150 ease-out",
        className
      )}
      data-slot="segment-group-indicator"
      {...rest}
    />
  );
};

export const SegmentGroupItem = (
  props: React.ComponentProps<typeof ArkSegmentGroup.Item>
) => {
  const { className, children, ...rest } = props;

  return (
    <ArkSegmentGroup.Item
      className={cn(
        "relative flex cursor-pointer select-none items-center justify-center gap-2 rounded-md px-3.5 py-2 font-medium text-foreground text-sm",
        "data-[orientation=vertical]:w-full data-[orientation=vertical]:justify-start",
        "data-disabled:cursor-not-allowed data-disabled:opacity-64",
        "data-[state=checked]:text-primary",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
      data-slot="segment-group-item"
      {...rest}
    >
      {children}

      <ArkSegmentGroup.ItemControl />

      <ArkSegmentGroup.ItemHiddenInput />
    </ArkSegmentGroup.Item>
  );
};

export const SegmentGroupItemText = (
  props: React.ComponentProps<typeof ArkSegmentGroup.ItemText>
) => {
  const { className, ...rest } = props;

  return (
    <ArkSegmentGroup.ItemText
      className={cn("relative z-1", className)}
      data-slot="segment-group-item-text"
      {...rest}
    />
  );
};
