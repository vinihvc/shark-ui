import { ark } from "@ark-ui/solid/factory";
import type { ComponentProps } from "solid-js";
import { cn } from "@/lib/utils";

export const Frame = (props: ComponentProps<typeof ark.div>) => {
  const { class: className, ...rest } = props;

  return (
    <ark.div
      class={cn(
        "relative",
        "p-1",
        "flex flex-col",
        "bg-muted/72",
        "rounded-2xl",
        "*:[[data-slot=frame-panel]+[data-slot=frame-panel]]:mt-1",
        className
      )}
      data-slot="frame"
      {...rest}
    />
  );
};

export const FramePanel = (props: ComponentProps<typeof ark.div>) => {
  const { class: className, ...rest } = props;

  return (
    <ark.div
      class={cn(
        "relative",
        "p-5",
        "bg-background",
        "rounded-xl border shadow-xs/5",
        className
      )}
      data-slot="frame-panel"
      {...rest}
    />
  );
};

export const FrameHeader = (props: ComponentProps<typeof ark.header>) => {
  const { class: className, ...rest } = props;

  return (
    <ark.header
      class={cn("flex flex-col", "px-5 py-4", className)}
      data-slot="frame-panel-header"
      {...rest}
    />
  );
};

export const FrameTitle = (props: ComponentProps<typeof ark.div>) => {
  const { class: className, ...rest } = props;

  return (
    <ark.div
      class={cn("font-semibold text-sm", className)}
      data-slot="frame-panel-title"
      {...rest}
    />
  );
};

export const FrameDescription = (props: ComponentProps<typeof ark.div>) => {
  const { class: className, ...rest } = props;

  return (
    <ark.div
      class={cn("text-muted-foreground text-sm", className)}
      data-slot="frame-panel-description"
      {...rest}
    />
  );
};

export const FrameFooter = (props: ComponentProps<typeof ark.footer>) => {
  const { class: className, ...rest } = props;

  return (
    <ark.footer
      class={cn("px-5 py-4", className)}
      data-slot="frame-panel-footer"
      {...rest}
    />
  );
};
