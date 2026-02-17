"use client";

import { SegmentGroup as ArkSegmentGroup } from "@ark-ui/react/segment-group";
import type React from "react";
import { cn } from "@/lib/utils";

const segmentGroupRootClass = cn(
  "relative isolate inline-flex items-center rounded-lg bg-muted p-1",
  "shadow-[inset_0_0_0_1px_hsl(var(--border))]",
  "data-disabled:opacity-50 data-disabled:grayscale"
);

const segmentGroupItemClass = cn(
  "relative flex cursor-pointer select-none items-center justify-center gap-2 rounded-md px-3.5 py-2 font-medium text-foreground text-sm",
  "data-[orientation=vertical]:w-full data-[orientation=vertical]:justify-start",
  "data-disabled:cursor-not-allowed data-disabled:opacity-50",
  "data-[state=checked]:text-primary",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
);

const segmentGroupItemTextClass = cn("relative z-1");

const segmentGroupIndicatorClass = cn(
  "absolute z-0 rounded-md bg-background shadow-sm",
  "transition-[width,height,left,top] duration-150 ease-out"
);

const SegmentGroupRoot = (
  props: React.ComponentProps<typeof ArkSegmentGroup.Root>
) => {
  const { className, ...rest } = props;
  return (
    <ArkSegmentGroup.Root
      className={cn(segmentGroupRootClass, className)}
      data-slot="segment-group"
      {...rest}
    />
  );
};

const SegmentGroupIndicator = (
  props: React.ComponentProps<typeof ArkSegmentGroup.Indicator>
) => (
  <ArkSegmentGroup.Indicator
    className={cn(segmentGroupIndicatorClass, props.className)}
    data-slot="segment-group-indicator"
    {...props}
  />
);

const SegmentGroupItem = (
  props: React.ComponentProps<typeof ArkSegmentGroup.Item>
) => (
  <ArkSegmentGroup.Item
    className={cn(segmentGroupItemClass, props.className)}
    data-slot="segment-group-item"
    {...props}
  />
);

const SegmentGroupItemText = (
  props: React.ComponentProps<typeof ArkSegmentGroup.ItemText>
) => (
  <ArkSegmentGroup.ItemText
    className={cn(segmentGroupItemTextClass, props.className)}
    data-slot="segment-group-item-text"
    {...props}
  />
);

export const SegmentGroup = {
  Root: SegmentGroupRoot,
  Indicator: SegmentGroupIndicator,
  Item: SegmentGroupItem,
  ItemText: SegmentGroupItemText,
  ItemControl: ArkSegmentGroup.ItemControl,
  ItemHiddenInput: ArkSegmentGroup.ItemHiddenInput,
};
