import { Splitter as ArkSplitter } from "@ark-ui/react/splitter";
import { GripVertical } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";

export const Splitter = (
  props: React.ComponentProps<typeof ArkSplitter.Root>
) => {
  const { className, ...rest } = props;

  return (
    <ArkSplitter.Root
      className={cn("flex size-full", className)}
      data-slot="splitter"
      {...rest}
    />
  );
};

export const SplitterPanel = (
  props: React.ComponentProps<typeof ArkSplitter.Panel>
) => {
  const { className, ...rest } = props;

  return (
    <ArkSplitter.Panel
      className={cn(className)}
      data-slot="splitter-panel"
      {...rest}
    />
  );
};

interface SplitterResizeTriggerProps
  extends React.ComponentProps<typeof ArkSplitter.ResizeTrigger> {
  /**
   * Whether to show the handle
   *
   * @default false
   */
  withHandle?: boolean;
}

export const SplitterResizeTrigger = (props: SplitterResizeTriggerProps) => {
  const { withHandle = false, className, ...rest } = props;

  return (
    <ArkSplitter.ResizeTrigger
      aria-label="Resize"
      className={cn(
        "relative bg-border",
        "flex w-px items-center justify-center",
        "after:-translate-x-1/2 data-[orientation=vertical]:after:-translate-y-1/2",
        "after:absolute after:inset-y-0 after:left-1/2 after:w-1",
        "focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1",
        "data-[orientation=vertical]:h-px data-[orientation=vertical]:w-full",
        "data-[orientation=vertical]:after:left-0 data-[orientation=vertical]:after:h-1 data-[orientation=vertical]:after:w-full",
        "data-[orientation=vertical]:after:translate-x-0",
        "[&[data-orientation=vertical]>div]:rotate-90",
        className
      )}
      data-slot="splitter-resize-trigger"
      {...rest}
    >
      {withHandle && (
        <div
          className={cn(
            "z-10",
            "h-4 w-3",
            "flex items-center justify-center",
            "bg-border",
            "rounded-xs border"
          )}
        >
          <GripVertical className="size-2.5" />
        </div>
      )}
    </ArkSplitter.ResizeTrigger>
  );
};
