import {
  Splitter as ArkSplitter,
  useSplitterContext,
} from "@ark-ui/solid/splitter";
import { GripVertical } from "lucide-solid";
import type { ComponentProps } from "solid-js";

import { cn } from "@/lib/utils";

export const useResizable = useSplitterContext;

export const Resizable = (props: ComponentProps<typeof ArkSplitter.Root>) => {
  const { class: className, ...rest } = props;

  return (
    <ArkSplitter.Root
      class={cn("flex size-full", className)}
      data-slot="resizable"
      {...rest}
    />
  );
};

export const ResizablePanel = (
  props: ComponentProps<typeof ArkSplitter.Panel>
) => {
  const { class: className, ...rest } = props;

  return (
    <ArkSplitter.Panel
      class={cn(className)}
      data-slot="resizable-panel"
      {...rest}
    />
  );
};

interface ResizableResizeTriggerProps
  extends ComponentProps<typeof ArkSplitter.ResizeTrigger> {
  /**
   * Whether to show the handle
   *
   * @default false
   */
  withHandle?: boolean;
}

export const ResizableResizeTrigger = (props: ResizableResizeTriggerProps) => {
  const { withHandle = false, className, ...rest } = props;

  return (
    <ArkSplitter.ResizeTrigger
      aria-label="Resize"
      class={cn(
        "relative bg-border",
        "flex w-px items-center justify-center",
        "after:-translate-x-1/2 data-[orientation=vertical]:after:-translate-y-1/2",
        "after:absolute after:inset-s-1/2 after:inset-y-0 after:w-1",
        "focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1",
        "data-[orientation=vertical]:h-px data-[orientation=vertical]:w-full",
        "data-[orientation=vertical]:after:inset-s-0 data-[orientation=vertical]:after:h-1 data-[orientation=vertical]:after:w-full",
        "data-[orientation=vertical]:after:translate-x-0",
        "[&[data-orientation=vertical]>div]:rotate-90",
        className
      )}
      data-slot="resizable-resize-trigger"
      {...rest}
    >
      {withHandle && (
        <div
          class={cn(
            "z-10",
            "h-4 w-3",
            "flex items-center justify-center",
            "bg-border",
            "rounded-xs border"
          )}
        >
          <GripVertical class="size-2.5" />
        </div>
      )}
    </ArkSplitter.ResizeTrigger>
  );
};
