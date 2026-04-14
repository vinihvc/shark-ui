import {
  SegmentGroup as ArkSegmentGroup,
  useSegmentGroupContext,
} from "@ark-ui/solid/segment-group";
import type { ComponentProps } from "solid-js";

import { cn } from "@/lib/utils";

export const useSegmentGroup = useSegmentGroupContext;

type SegmentGroupVariant = "default" | "underline";

interface SegmentGroupProps
  extends ComponentProps<typeof ArkSegmentGroup.Root> {
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
    class: className,
    ...rest
  } = props;

  return (
    <ArkSegmentGroup.Root
      class={cn(
        "group/segment-group relative",
        "flex gap-2",
        "isolate",
        "data-[orientation=vertical]:flex-col",
        "data-disabled:opacity-64",
        "data-[variant=underline]:gap-1 data-[variant=underline]:border-input",
        "data-[orientation=horizontal]:data-[variant=underline]:border-b",
        "data-[orientation=vertical]:data-[variant=underline]:border-l",
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
  props: ComponentProps<typeof ArkSegmentGroup.Item>
) => {
  const { class: className, children, ...rest } = props;

  return (
    <ArkSegmentGroup.Item
      class={cn(
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
  props: ComponentProps<typeof ArkSegmentGroup.ItemText>
) => {
  const { class: className, ...rest } = props;

  return (
    <ArkSegmentGroup.ItemText
      class={cn("relative z-1", className)}
      data-slot="segment-group-item-text"
      {...rest}
    />
  );
};

export const SegmentGroupIndicator = (
  props: ComponentProps<typeof ArkSegmentGroup.Indicator>
) => {
  const { class: className, ...rest } = props;

  return (
    <ArkSegmentGroup.Indicator
      class={cn(
        "absolute top-(--top) left-(--left) z-0",
        "h-(--height) w-(--width)",
        "rounded-[inherit]",
        "bg-input",
        "transition-[width,height,left,top] duration-150 ease-out",
        "[transition-property:var(--transition-property,width,height,left,top)]",
        "group-data-[variant=underline]/segment-group:bg-primary",
        "data-[orientation=horizontal]:group-data-[variant=underline]/segment-group:top-[calc(var(--top)+var(--height)-1px)]",
        "data-[orientation=vertical]:group-data-[variant=underline]/segment-group:right-[calc(var(--left)+var(--width)-1px)]",
        "data-[orientation=vertical]:group-data-[variant=underline]/segment-group:-translate-x-px",
        "data-[orientation=horizontal]:group-data-[variant=underline]/segment-group:h-0.5",
        "data-[orientation=vertical]:group-data-[variant=underline]/segment-group:w-0.5",
        className
      )}
      data-slot="segment-group-indicator"
      {...rest}
    />
  );
};
