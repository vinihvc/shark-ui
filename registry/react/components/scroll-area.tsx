import { ScrollArea as ArkScrollArea } from "@ark-ui/react/scroll-area";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

const scrollAreaVariants = tv({
  base: [
    "h-full",
    "rounded-[inherit] outline-none",
    "transition-shadows",
    "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background",
    "data-has-overflow-x:overscroll-x-contain",
  ],
  variants: {
    scrollbarGutter: {
      true: ["data-has-overflow-y:pe-2.5", "data-has-overflow-x:pb-2.5"],
    },
  },
});

interface ScrollAreaProps
  extends React.ComponentProps<typeof ArkScrollArea.Root>,
    VariantProps<typeof scrollAreaVariants> {}

export const ScrollArea = (props: ScrollAreaProps) => {
  const { scrollbarGutter = false, className, children, ...rest } = props;

  return (
    <>
      <style>
        {`
        [data-slot='scroll-area-viewport'] {
          scrollbar-width: none;
          &::-webkit-scrollbar {
            display: none;
          }
        }
}`}
      </style>

      <ArkScrollArea.Root
        className={cn("size-full min-h-0", className)}
        data-slot="scroll-area"
        {...rest}
      >
        <ArkScrollArea.Viewport
          className={cn(scrollAreaVariants({ scrollbarGutter }))}
          data-slot="scroll-area-viewport"
        >
          <ArkScrollArea.Content data-slot="scroll-area-content">
            {children}
          </ArkScrollArea.Content>
        </ArkScrollArea.Viewport>

        <ScrollAreaScrollbar orientation="vertical" />
        <ScrollAreaScrollbar orientation="horizontal" />

        <ArkScrollArea.Corner data-slot="scroll-area-corner" />
      </ArkScrollArea.Root>
    </>
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
        "opacity-0 transition-opacity delay-300",
        "data-[orientation=vertical]:w-1.5",
        "data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:flex-col",
        "data-hovering:opacity-100 data-scrolling:opacity-100",
        "data-hovering:delay-0 data-scrolling:delay-0",
        "data-hovering:duration-100 data-scrolling:duration-100",
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
