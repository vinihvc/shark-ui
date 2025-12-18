import { ScrollArea as ArkScrollArea } from "@ark-ui/react/scroll-area";
import type React from "react";
import { cn } from "@/lib/utils";

export const ScrollArea = (
  props: React.ComponentProps<typeof ArkScrollArea.Root>
) => {
  const { className, children, ...rest } = props;

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

      <ArkScrollArea.Root className={cn("flex size-full", className)} {...rest}>
        <ArkScrollArea.Viewport
          className={cn(
            "size-full",
            "rounded-md",
            "-outline-offset-1 outline-1 outline-gray-300",
            "transition-[color,box-shadow]",
            "outline-none focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50"
          )}
        >
          <ArkScrollArea.Content>{children}</ArkScrollArea.Content>
        </ArkScrollArea.Viewport>

        <ScrollAreaScrollbar orientation="vertical" />

        <ArkScrollArea.Corner />
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
        "m-2 flex rounded-md bg-muted opacity-0 transition-opacity delay-300 duration-150",
        "hover:opacity-100 hover:delay-0 hover:duration-75 data-scrolling:opacity-100 data-scrolling:delay-0 data-scrolling:duration-75",
        "before:absolute before:content-['']",
        orientation === "vertical" &&
          "h-full w-1 justify-center before:h-full before:w-5 data-[overflow-y=false]:hidden",
        orientation === "horizontal" &&
          "h-1 w-full items-center before:h-5 before:w-full data-[overflow-x=false]:hidden",
        className
      )}
      orientation={orientation}
      {...rest}
    >
      <ArkScrollArea.Thumb className="relative flex-1 rounded-md bg-primary" />
    </ArkScrollArea.Scrollbar>
  );
};
