import { Dialog as ArkDialog } from "@ark-ui/react/dialog";
import { Portal } from "@ark-ui/react/portal";
import { cn } from "fumadocs-ui/utils/cn";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const dialogVariants = tv({
  slots: {
    root: "relative",
    trigger: "inline-flex",
    backdrop: [
      "fixed inset-0 z-50",
      "bg-background/80 backdrop-blur-sm",
      "data-[state=closed]:animate-out data-[state=open]:animate-in",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
    ],
    positioner: ["fixed inset-0 z-50 flex items-center justify-center", "p-4"],
    content: [
      "relative z-50 grid w-full max-w-lg gap-4 border bg-background p-6 shadow-lg",
      "sm:rounded-lg",
      "data-[state=closed]:animate-out data-[state=open]:animate-in",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
      "data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]",
      "data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
    ],
    title: ["font-semibold text-lg leading-none tracking-tight"],
    description: ["text-muted-foreground text-sm"],
    closeTrigger: [
      "absolute top-4 right-4 rounded-sm opacity-70 ring-offset-background",
      "transition-opacity hover:opacity-100",
      "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
      "disabled:pointer-events-none",
      "data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
    ],
  },
});

const {
  root,
  trigger,
  backdrop,
  positioner,
  content,
  title,
  description,
  closeTrigger,
} = dialogVariants();

export interface DialogProps
  extends React.ComponentProps<typeof ArkDialog.Root>,
    VariantProps<typeof dialogVariants> {
  className?: string;
}

const DialogRoot = React.forwardRef<
  React.ElementRef<typeof ArkDialog.Root>,
  DialogProps
>(({ className, ...props }, ref) => (
  <ArkDialog.Root className={cn(root(), className)} ref={ref} {...props} />
));
DialogRoot.displayName = "Dialog";

const DialogTrigger = React.forwardRef<
  React.ElementRef<typeof ArkDialog.Trigger>,
  React.ComponentProps<typeof ArkDialog.Trigger>
>(({ className, ...props }, ref) => (
  <ArkDialog.Trigger
    className={cn(trigger(), className)}
    ref={ref}
    {...props}
  />
));
DialogTrigger.displayName = "DialogTrigger";

const DialogBackdrop = React.forwardRef<
  React.ElementRef<typeof ArkDialog.Backdrop>,
  React.ComponentProps<typeof ArkDialog.Backdrop>
>(({ className, ...props }, ref) => (
  <ArkDialog.Backdrop
    className={cn(backdrop(), className)}
    ref={ref}
    {...props}
  />
));
DialogBackdrop.displayName = "DialogBackdrop";

const DialogPositioner = React.forwardRef<
  React.ElementRef<typeof ArkDialog.Positioner>,
  React.ComponentProps<typeof ArkDialog.Positioner>
>(({ className, ...props }, ref) => (
  <ArkDialog.Positioner
    className={cn(positioner(), className)}
    ref={ref}
    {...props}
  />
));
DialogPositioner.displayName = "DialogPositioner";

const DialogContent = React.forwardRef<
  React.ElementRef<typeof ArkDialog.Content>,
  React.ComponentProps<typeof ArkDialog.Content>
>(({ className, children, ...props }, ref) => (
  <Portal>
    <DialogBackdrop />
    <DialogPositioner>
      <ArkDialog.Content
        className={cn(content(), className)}
        ref={ref}
        {...props}
      >
        {children}
      </ArkDialog.Content>
    </DialogPositioner>
  </Portal>
));
DialogContent.displayName = "DialogContent";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof ArkDialog.Title>,
  React.ComponentProps<typeof ArkDialog.Title>
>(({ className, ...props }, ref) => (
  <ArkDialog.Title className={cn(title(), className)} ref={ref} {...props} />
));
DialogTitle.displayName = "DialogTitle";

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof ArkDialog.Description>,
  React.ComponentProps<typeof ArkDialog.Description>
>(({ className, ...props }, ref) => (
  <ArkDialog.Description
    className={cn(description(), className)}
    ref={ref}
    {...props}
  />
));
DialogDescription.displayName = "DialogDescription";

const DialogCloseTrigger = React.forwardRef<
  React.ElementRef<typeof ArkDialog.CloseTrigger>,
  React.ComponentProps<typeof ArkDialog.CloseTrigger>
>(({ className, ...props }, ref) => (
  <ArkDialog.CloseTrigger
    className={cn(closeTrigger(), className)}
    ref={ref}
    {...props}
  />
));
DialogCloseTrigger.displayName = "DialogCloseTrigger";

export const Dialog = {
  Root: DialogRoot,
  Trigger: DialogTrigger,
  Backdrop: DialogBackdrop,
  Positioner: DialogPositioner,
  Content: DialogContent,
  Title: DialogTitle,
  Description: DialogDescription,
  CloseTrigger: DialogCloseTrigger,
};
