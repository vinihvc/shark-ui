import { Dialog as ArkDialog } from "@ark-ui/react/dialog";
import { Portal } from "@ark-ui/react/portal";
import { cn } from "fumadocs-ui/utils/cn";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const sheetVariants = tv({
  slots: {
    root: "relative",
    trigger: "inline-flex",
    backdrop: [
      "fixed inset-0 z-50",
      "bg-background/80 backdrop-blur-sm",
      "data-[state=closed]:animate-out data-[state=open]:animate-in",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
    ],
    positioner: "fixed inset-0 z-50",
    content: [
      "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out",
      "data-[state=closed]:duration-300 data-[state=open]:duration-500",
      "data-[state=closed]:animate-out data-[state=open]:animate-in",
    ],
    variants: {
      side: {
        top: [
          "inset-x-0 top-0 border-b",
          "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        ],
        bottom: [
          "inset-x-0 bottom-0 border-t",
          "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        ],
        left: [
          "inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left",
        ],
        right: [
          "inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right",
        ],
      },
    },
    defaultVariants: {
      side: "right",
    },
    title: ["font-semibold text-lg leading-none tracking-tight"],
    description: ["text-muted-foreground text-sm"],
    closeTrigger: [
      "absolute top-4 right-4 rounded-sm opacity-70 ring-offset-background",
      "transition-opacity hover:opacity-100",
      "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
      "disabled:pointer-events-none",
      "data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
    ],
    header: "flex flex-col space-y-2 text-center sm:text-left",
    footer: "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
    body: "flex-1 overflow-auto py-4",
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
  header,
  footer,
  body,
} = sheetVariants();

export interface SheetProps
  extends React.ComponentProps<typeof ArkDialog.Root>,
    VariantProps<typeof sheetVariants> {}

export interface SheetContentProps
  extends React.ComponentProps<typeof ArkDialog.Content>,
    VariantProps<typeof sheetVariants> {}

const SheetRoot = React.forwardRef<
  React.ElementRef<typeof ArkDialog.Root>,
  SheetProps
>(({ className, ...props }, ref) => (
  <ArkDialog.Root className={cn(root(), className)} ref={ref} {...props} />
));
SheetRoot.displayName = "Sheet";

const SheetTrigger = React.forwardRef<
  React.ElementRef<typeof ArkDialog.Trigger>,
  React.ComponentProps<typeof ArkDialog.Trigger>
>(({ className, ...props }, ref) => (
  <ArkDialog.Trigger
    className={cn(trigger(), className)}
    ref={ref}
    {...props}
  />
));
SheetTrigger.displayName = "SheetTrigger";

const SheetBackdrop = React.forwardRef<
  React.ElementRef<typeof ArkDialog.Backdrop>,
  React.ComponentProps<typeof ArkDialog.Backdrop>
>(({ className, ...props }, ref) => (
  <ArkDialog.Backdrop
    className={cn(backdrop(), className)}
    ref={ref}
    {...props}
  />
));
SheetBackdrop.displayName = "SheetBackdrop";

const SheetPositioner = React.forwardRef<
  React.ElementRef<typeof ArkDialog.Positioner>,
  React.ComponentProps<typeof ArkDialog.Positioner>
>(({ className, ...props }, ref) => (
  <ArkDialog.Positioner
    className={cn(positioner(), className)}
    ref={ref}
    {...props}
  />
));
SheetPositioner.displayName = "SheetPositioner";

const SheetContent = React.forwardRef<
  React.ElementRef<typeof ArkDialog.Content>,
  SheetContentProps
>(({ className, side = "right", children, ...props }, ref) => (
  <Portal>
    <SheetBackdrop />
    <SheetPositioner>
      <ArkDialog.Content
        className={cn(content({ side }), className)}
        ref={ref}
        {...props}
      >
        {children}
      </ArkDialog.Content>
    </SheetPositioner>
  </Portal>
));
SheetContent.displayName = "SheetContent";

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof ArkDialog.Title>,
  React.ComponentProps<typeof ArkDialog.Title>
>(({ className, ...props }, ref) => (
  <ArkDialog.Title className={cn(title(), className)} ref={ref} {...props} />
));
SheetTitle.displayName = "SheetTitle";

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof ArkDialog.Description>,
  React.ComponentProps<typeof ArkDialog.Description>
>(({ className, ...props }, ref) => (
  <ArkDialog.Description
    className={cn(description(), className)}
    ref={ref}
    {...props}
  />
));
SheetDescription.displayName = "SheetDescription";

const SheetCloseTrigger = React.forwardRef<
  React.ElementRef<typeof ArkDialog.CloseTrigger>,
  React.ComponentProps<typeof ArkDialog.CloseTrigger>
>(({ className, ...props }, ref) => (
  <ArkDialog.CloseTrigger
    className={cn(closeTrigger(), className)}
    ref={ref}
    {...props}
  />
));
SheetCloseTrigger.displayName = "SheetCloseTrigger";

const SheetHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div className={cn(header(), className)} ref={ref} {...props} />
));
SheetHeader.displayName = "SheetHeader";

const SheetFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div className={cn(footer(), className)} ref={ref} {...props} />
));
SheetFooter.displayName = "SheetFooter";

const SheetBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div className={cn(body(), className)} ref={ref} {...props} />
));
SheetBody.displayName = "SheetBody";

export const Sheet = {
  Root: SheetRoot,
  Trigger: SheetTrigger,
  Backdrop: SheetBackdrop,
  Positioner: SheetPositioner,
  Content: SheetContent,
  Title: SheetTitle,
  Description: SheetDescription,
  CloseTrigger: SheetCloseTrigger,
  Header: SheetHeader,
  Footer: SheetFooter,
  Body: SheetBody,
};
