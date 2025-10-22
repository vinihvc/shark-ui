import { Portal } from "@ark-ui/react/portal";
import { Tooltip as ArkTooltip } from "@ark-ui/react/tooltip";
import type React from "react";
import { cn } from "@/lib/utils";

export const Tooltip = (
  props: React.ComponentProps<typeof ArkTooltip.Root>
) => {
  const {
    positioning = {
      placement: "top",
    },
    lazyMount = true,
    unmountOnExit = true,
    closeDelay = 100,
    openDelay = 0,
    ...rest
  } = props;

  return (
    <ArkTooltip.Root
      closeDelay={closeDelay}
      lazyMount={lazyMount}
      openDelay={openDelay}
      positioning={positioning}
      unmountOnExit={unmountOnExit}
      {...rest}
    />
  );
};

export const TooltipPortal = (props: React.ComponentProps<typeof Portal>) => (
  <Portal {...props} />
);

export const TooltipTrigger = (
  props: React.ComponentProps<typeof ArkTooltip.Trigger>
) => {
  const { className, ...rest } = props;

  return <ArkTooltip.Trigger className={cn(className)} {...rest} />;
};

export const TooltipPositioner = (
  props: React.ComponentProps<typeof ArkTooltip.Positioner>
) => {
  const { className, ...rest } = props;

  return <ArkTooltip.Positioner className={cn(className)} {...rest} />;
};

export const TooltipContent = (
  props: React.ComponentProps<typeof ArkTooltip.Content>
) => {
  const { className, children, ...rest } = props;
  return (
    <TooltipPortal>
      <TooltipPositioner>
        <ArkTooltip.Content
          className={cn(
            "z-50 w-fit origin-(--radix-tooltip-content-transform-origin)",
            "px-3 py-1.5",
            "bg-foreground",
            "rounded-md",
            "text-pretty text-background text-xs",
            "animate-in",
            "fade-in-0 zoom-in-95",
            "data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
            "data-[state=closed]:animate-out",
            "data-[side=bottom]:slide-in-from-top-2",
            "data-[side=left]:slide-in-from-right-2",
            "data-[side=right]:slide-in-from-left-2",
            "data-[side=top]:slide-in-from-bottom-2",
            className
          )}
          {...rest}
        >
          <TooltipArrow />

          {children}
        </ArkTooltip.Content>
      </TooltipPositioner>
    </TooltipPortal>
  );
};

export const TooltipArrow = (
  props: React.ComponentProps<typeof ArkTooltip.Arrow>
) => {
  const { style, ...rest } = props;

  return (
    <ArkTooltip.Arrow
      style={
        {
          "--arrow-background": "var(--foreground)",
          "--arrow-size": "calc(1.5 * var(--spacing))",
          ...style,
        } as React.CSSProperties
      }
      {...rest}
    >
      <TooltipArrowTip />
    </ArkTooltip.Arrow>
  );
};

export const TooltipArrowTip = (
  props: React.ComponentProps<typeof ArkTooltip.ArrowTip>
) => <ArkTooltip.ArrowTip {...props} />;
