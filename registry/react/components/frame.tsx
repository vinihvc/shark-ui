import { ark } from "@ark-ui/react/factory";
import type React from "react";
import { cn } from "@/lib/utils";

export const Frame = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "flex flex-col gap-4",
        "rounded-xl border bg-card text-card-foreground shadow-md/5",
        "in-focus-visible:ring-[3px] in-focus-visible:ring-ring/32 in-focus-visible:ring-offset-2 in-focus-visible:ring-offset-background",
        className
      )}
      data-slot="frame"
      {...rest}
    />
  );
};

export const FrameHeader = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn("flex flex-col gap-1", "px-4 pt-4", className)}
      data-slot="frame-header"
      {...rest}
    />
  );
};

export const FrameTitle = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "font-semibold text-base text-foreground leading-tight",
        className
      )}
      data-slot="frame-title"
      {...rest}
    />
  );
};

export const FrameDescription = (
  props: React.ComponentProps<typeof ark.div>
) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn("text-muted-foreground text-sm", className)}
      data-slot="frame-description"
      {...rest}
    />
  );
};

export const FramePanel = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn("flex flex-col gap-1 px-4", className)}
      data-slot="frame-panel"
      {...rest}
    />
  );
};

export const FrameFooter = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "border-border border-t px-4 py-4",
        "text-muted-foreground text-sm",
        className
      )}
      data-slot="frame-footer"
      {...rest}
    />
  );
};
