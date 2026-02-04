import { ScrollArea as ArkScrollArea } from "@ark-ui/react/scroll-area";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

const scrollAreaVariants = tv({
  base: [
    "h-full",
    "rounded-[inherit]",
    "transition-shadows",
    "outline-none",
    "transition-all",
  ],
  variants: {
    scrollFade: {
      true: [
        "[--fade-size:1.5rem]",
        "data-at-top:mask-b-from-[calc(100%-var(--fade-size))]",
        "data-at-bottom:mask-t-from-[calc(100%-var(--fade-size))]",
      ],
    },
  },
  defaultVariants: {
    scrollFade: false,
  },
});

interface ScrollAreaProps
  extends React.ComponentProps<typeof ArkScrollArea.Root>,
    VariantProps<typeof scrollAreaVariants> {
  /**
   * The direction of the scroll area
   *
   * @default 'vertical'
   */
  direction?: "vertical" | "horizontal" | "both";
}

export const ScrollArea = (props: ScrollAreaProps) => {
  const {
    scrollFade = false,
    direction = "vertical",
    className,
    children,
    ...rest
  } = props;

  return (
    <>
      <style>
        {`
          [data-slot='scroll-area-viewport'] {
            scrollbar-width: none;
          }
          [data-slot='scroll-area-viewport']::-webkit-scrollbar {
            display: none;
          }
        }`}
      </style>

      <ArkScrollArea.Root
        className={cn("size-full min-h-0", className)}
        data-slot="scroll-area"
        {...rest}
      >
        <ArkScrollArea.Viewport
          className={cn(scrollAreaVariants({ scrollFade }))}
          data-slot="scroll-area-viewport"
        >
          <ArkScrollArea.Content data-slot="scroll-area-content">
            {children}
          </ArkScrollArea.Content>
        </ArkScrollArea.Viewport>

        {(direction === "vertical" || direction === "both") && (
          <ScrollAreaScrollbar orientation="vertical" />
        )}
        {(direction === "horizontal" || direction === "both") && (
          <ScrollAreaScrollbar orientation="horizontal" />
        )}

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
        "bg-foreground/5",
        "opacity-0 transition-opacity delay-300",
        "data-[orientation=vertical]:w-1",
        "data-[orientation=horizontal]:h-1 data-[orientation=horizontal]:flex-col",
        "data-hover:opacity-100 data-hover:delay-0 data-hover:duration-100",
        "data-scrolling:opacity-100 data-scrolling:delay-0 data-scrolling:duration-100",
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
