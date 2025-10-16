import { Popover as ArkPopover } from "@ark-ui/react/popover";
import { cn } from "fumadocs-ui/utils/cn";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const popoverVariants = tv({
  slots: {
    root: "relative",
    trigger: "inline-flex",
    indicator: "ml-1 h-4 w-4",
    positioner: [
      "z-50",
      "data-[state=closed]:animate-out data-[state=open]:animate-in",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
      "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
      "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
    ],
    content: [
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none",
      "data-[state=closed]:animate-out data-[state=open]:animate-in",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
      "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
      "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
    ],
    title: "font-semibold text-sm",
    description: "text-muted-foreground text-sm",
    closeTrigger: [
      "absolute top-4 right-4 rounded-sm opacity-70 ring-offset-background",
      "transition-opacity hover:opacity-100",
      "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
      "disabled:pointer-events-none",
      "data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
    ],
    arrow: "fill-popover",
  },
});

const {
  root,
  trigger,
  indicator,
  positioner,
  content,
  title,
  description,
  closeTrigger,
  arrow,
} = popoverVariants();

export interface PopoverProps
  extends React.ComponentProps<typeof ArkPopover.Root>,
    VariantProps<typeof popoverVariants> {}

const PopoverRoot = React.forwardRef<
  React.ElementRef<typeof ArkPopover.Root>,
  PopoverProps
>(({ className, ...props }, ref) => (
  <ArkPopover.Root className={cn(root(), className)} ref={ref} {...props} />
));
PopoverRoot.displayName = "Popover";

const PopoverTrigger = React.forwardRef<
  React.ElementRef<typeof ArkPopover.Trigger>,
  React.ComponentProps<typeof ArkPopover.Trigger>
>(({ className, ...props }, ref) => (
  <ArkPopover.Trigger
    className={cn(trigger(), className)}
    ref={ref}
    {...props}
  />
));
PopoverTrigger.displayName = "PopoverTrigger";

const PopoverIndicator = React.forwardRef<
  React.ElementRef<typeof ArkPopover.Indicator>,
  React.ComponentProps<typeof ArkPopover.Indicator>
>(({ className, ...props }, ref) => (
  <ArkPopover.Indicator
    className={cn(indicator(), className)}
    ref={ref}
    {...props}
  />
));
PopoverIndicator.displayName = "PopoverIndicator";

const PopoverPositioner = React.forwardRef<
  React.ElementRef<typeof ArkPopover.Positioner>,
  React.ComponentProps<typeof ArkPopover.Positioner>
>(({ className, ...props }, ref) => (
  <ArkPopover.Positioner
    className={cn(positioner(), className)}
    ref={ref}
    {...props}
  />
));
PopoverPositioner.displayName = "PopoverPositioner";

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof ArkPopover.Content>,
  React.ComponentProps<typeof ArkPopover.Content>
>(({ className, children, ...props }, ref) => (
  <ArkPopover.Content className={cn(content(), className)} ref={ref} {...props}>
    {children}
  </ArkPopover.Content>
));
PopoverContent.displayName = "PopoverContent";

const PopoverTitle = React.forwardRef<
  React.ElementRef<typeof ArkPopover.Title>,
  React.ComponentProps<typeof ArkPopover.Title>
>(({ className, ...props }, ref) => (
  <ArkPopover.Title className={cn(title(), className)} ref={ref} {...props} />
));
PopoverTitle.displayName = "PopoverTitle";

const PopoverDescription = React.forwardRef<
  React.ElementRef<typeof ArkPopover.Description>,
  React.ComponentProps<typeof ArkPopover.Description>
>(({ className, ...props }, ref) => (
  <ArkPopover.Description
    className={cn(description(), className)}
    ref={ref}
    {...props}
  />
));
PopoverDescription.displayName = "PopoverDescription";

const PopoverCloseTrigger = React.forwardRef<
  React.ElementRef<typeof ArkPopover.CloseTrigger>,
  React.ComponentProps<typeof ArkPopover.CloseTrigger>
>(({ className, ...props }, ref) => (
  <ArkPopover.CloseTrigger
    className={cn(closeTrigger(), className)}
    ref={ref}
    {...props}
  />
));
PopoverCloseTrigger.displayName = "PopoverCloseTrigger";

const PopoverArrow = React.forwardRef<
  React.ElementRef<typeof ArkPopover.Arrow>,
  React.ComponentProps<typeof ArkPopover.Arrow>
>(({ className, ...props }, ref) => (
  <ArkPopover.Arrow className={cn(arrow(), className)} ref={ref} {...props} />
));
PopoverArrow.displayName = "PopoverArrow";

export const Popover = {
  Root: PopoverRoot,
  Trigger: PopoverTrigger,
  Indicator: PopoverIndicator,
  Positioner: PopoverPositioner,
  Content: PopoverContent,
  Title: PopoverTitle,
  Description: PopoverDescription,
  CloseTrigger: PopoverCloseTrigger,
  Arrow: PopoverArrow,
};
