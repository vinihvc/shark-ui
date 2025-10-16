import { Tooltip as ArkTooltip } from "@ark-ui/react/tooltip";
import { cn } from "fumadocs-ui/utils/cn";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const tooltipVariants = tv({
  slots: {
    root: "relative",
    trigger: "inline-flex",
    positioner: [
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-popover-foreground text-sm shadow-md",
      "data-[state=closed]:animate-out data-[state=open]:animate-in",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
      "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
      "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
    ],
    content:
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-popover-foreground text-sm shadow-md",
    arrow: "fill-popover",
  },
});

const { root, trigger, positioner, content, arrow } = tooltipVariants();

export interface TooltipProps
  extends React.ComponentProps<typeof ArkTooltip.Root>,
    VariantProps<typeof tooltipVariants> {}

const TooltipRoot = React.forwardRef<
  React.ElementRef<typeof ArkTooltip.Root>,
  TooltipProps
>(({ className, ...props }, ref) => (
  <ArkTooltip.Root className={cn(root(), className)} ref={ref} {...props} />
));
TooltipRoot.displayName = "Tooltip";

const TooltipTrigger = React.forwardRef<
  React.ElementRef<typeof ArkTooltip.Trigger>,
  React.ComponentProps<typeof ArkTooltip.Trigger>
>(({ className, ...props }, ref) => (
  <ArkTooltip.Trigger
    className={cn(trigger(), className)}
    ref={ref}
    {...props}
  />
));
TooltipTrigger.displayName = "TooltipTrigger";

const TooltipPositioner = React.forwardRef<
  React.ElementRef<typeof ArkTooltip.Positioner>,
  React.ComponentProps<typeof ArkTooltip.Positioner>
>(({ className, ...props }, ref) => (
  <ArkTooltip.Positioner
    className={cn(positioner(), className)}
    ref={ref}
    {...props}
  />
));
TooltipPositioner.displayName = "TooltipPositioner";

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof ArkTooltip.Content>,
  React.ComponentProps<typeof ArkTooltip.Content>
>(({ className, ...props }, ref) => (
  <ArkTooltip.Content
    className={cn(content(), className)}
    ref={ref}
    {...props}
  />
));
TooltipContent.displayName = "TooltipContent";

const TooltipArrow = React.forwardRef<
  React.ElementRef<typeof ArkTooltip.Arrow>,
  React.ComponentProps<typeof ArkTooltip.Arrow>
>(({ className, ...props }, ref) => (
  <ArkTooltip.Arrow className={cn(arrow(), className)} ref={ref} {...props} />
));
TooltipArrow.displayName = "TooltipArrow";

export const Tooltip = {
  Root: TooltipRoot,
  Trigger: TooltipTrigger,
  Positioner: TooltipPositioner,
  Content: TooltipContent,
  Arrow: TooltipArrow,
};
