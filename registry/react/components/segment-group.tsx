"use client";

import { SegmentGroup as ArkSegmentGroup } from "@ark-ui/react/segment-group";
import type React from "react";
import { cn } from "@/lib/utils";

type SegmentGroupVariant = "default" | "underline";

interface SegmentGroupProps
  extends React.ComponentProps<typeof ArkSegmentGroup.Root> {
  /**
   * The visual variant of the segment group.
   *
   * @default "default"
   */
  variant?: SegmentGroupVariant;
}

export const SegmentGroup = (props: SegmentGroupProps) => {
  const {
    orientation = "horizontal",
    variant = "default",
    className,
    ...rest
  } = props;

  return (
    <ArkSegmentGroup.Root
      className={cn(
        "group/segment-group relative",
        "flex gap-2",
        "isolate",
        "data-[orientation=vertical]:flex-col",
        "data-disabled:opacity-64",
        "data-[variant=underline]:gap-1 data-[variant=underline]:border-input data-[variant=underline]:border-b",
        className
      )}
      data-slot="segment-group"
      data-variant={variant}
      orientation={orientation}
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
        "relative",
        "cursor-pointer",
        "data-[orientation=vertical]:w-full data-[orientation=vertical]:justify-start",
        "rounded-[inherit] border border-transparent",
        "outline-none data-focus-visible:border-primary data-focus-visible:ring-[3px] data-focus-visible:ring-ring/32",
        "data-disabled:pointer-events-none data-disabled:opacity-64",
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

export const SegmentGroupIndicator = (
  props: React.ComponentProps<typeof ArkSegmentGroup.Indicator>
) => {
  const { className, ...rest } = props;

  return (
    <ArkSegmentGroup.Indicator
      className={cn(
        "absolute top-(--top) left-(--left) z-0",
        "h-(--height) w-(--width)",
        "rounded-[inherit]",
        "bg-input",
        "transition-[width,height,left,top] duration-150 ease-out",
        "[transition-property:var(--transition-property,width,height,left,top)]",
        "group-data-[variant=underline]/segment-group:bg-primary",
        "group-data-[variant=underline]/segment-group:top-[calc(var(--top)+var(--height)-1px)]",
        "group-data-[variant=underline]/segment-group:h-0.5",
        className
      )}
      data-slot="segment-group-indicator"
      {...rest}
    />
  );
};
