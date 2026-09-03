"use client";

import {
  ScrollArea as ArkScrollArea,
  useScrollAreaContext,
} from "@ark-ui/react/scroll-area";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

export const useScrollArea = useScrollAreaContext;

const scrollAreaVariants = tv({
  base: [
    "max-h-[inherit] min-h-0 w-full min-w-0 flex-1",
    "rounded-[inherit]",
    "outline-none",
    "scrollbar-none",
  ],
  defaultVariants: {
    scrollbarGutter: false,
    scrollFade: false,
  },
  variants: {
    scrollbarGutter: {
      true: ["in-data-overflow-x:pb-2.5", "in-data-overflow-y:pe-2.5"],
    },
    scrollFade: {
      true: [
        "data-overflow-y:not-data-at-top:mask-t-from-[calc(100%-var(--fade-size))]",
        "data-overflow-y:not-data-at-bottom:mask-b-from-[calc(100%-var(--fade-size))]",
        "data-overflow-x:not-data-at-left:mask-l-from-[calc(100%-var(--fade-size))]",
        "data-overflow-x:not-data-at-right:mask-r-from-[calc(100%-var(--fade-size))]",
        "motion-reduce:transition-none!",
      ],
    },
  },
});

interface ScrollAreaProps
  extends React.ComponentProps<typeof ArkScrollArea.Root>,
    VariantProps<typeof scrollAreaVariants> {
  /**
   * Set the orientation of the scroll area
   */
  orientation?: "both" | "horizontal" | "vertical";
}

export const ScrollArea = (props: ScrollAreaProps) => {
  const {
    scrollFade = false,
    scrollbarGutter = false,
    orientation = "both",
    className,
    children,
    ...rest
  } = props;

  return (
    <ArkScrollArea.Root
      className={cn(
        "[--fade-size:1.5rem]",
        "relative",
        "size-full min-h-0 min-w-0",
        "flex w-full flex-col",
        "overflow-hidden",
        className
      )}
      data-slot="scroll-area"
      {...rest}
    >
      <ArkScrollArea.Viewport
        className={cn(
          scrollAreaVariants({ scrollbarGutter, scrollFade }),
          orientation === "horizontal" && "overflow-y-hidden!",
          orientation === "vertical" && "overflow-x-hidden!"
        )}
        data-slot="scroll-area-viewport"
      >
        <ArkScrollArea.Content data-slot="scroll-area-content">
          {children}
        </ArkScrollArea.Content>
      </ArkScrollArea.Viewport>

      {orientation === "horizontal" ? null : (
        <ScrollAreaScrollbar orientation="vertical" />
      )}
      {orientation === "vertical" ? null : (
        <ScrollAreaScrollbar orientation="horizontal" />
      )}

      <ArkScrollArea.Corner data-slot="scroll-area-corner" />
    </ArkScrollArea.Root>
  );
};

export const ScrollAreaScrollbar = (
  props: React.ComponentProps<typeof ArkScrollArea.Scrollbar>
) => {
  const { orientation, className, ...rest } = props;

  return (
    <ArkScrollArea.Scrollbar
      className={cn(
        "flex",
        "m-1",
        "bg-transparent",
        "opacity-0",
        "transition-opacity delay-300",
        "data-[orientation=vertical]:w-1.5",
        "data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:flex-col",
        "data-hover:opacity-100 data-hover:delay-0 data-hover:duration-100",
        "data-scrolling:opacity-100 data-scrolling:delay-0 data-scrolling:duration-100",
        "data-[orientation=vertical]:in-[[data-slot=scroll-area]:not([data-overflow-y])]:hidden",
        "data-[orientation=horizontal]:in-[[data-slot=scroll-area]:not([data-overflow-x])]:hidden",
        "motion-reduce:transition-none!",
        className
      )}
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      {...rest}
    >
      <ArkScrollArea.Thumb
        className="relative flex-1 rounded-full bg-foreground/20"
        data-slot="scroll-area-thumb"
      />
    </ArkScrollArea.Scrollbar>
  );
};
