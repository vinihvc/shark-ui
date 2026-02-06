"use client";

import { Dialog as ArkDialog } from "@ark-ui/react/dialog";
import { Portal } from "@ark-ui/react/portal";
import { XIcon } from "lucide-react";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import {
  DialogBody,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  dialogOverlayVariants,
} from "./dialog";

export const Sheet = (props: React.ComponentProps<typeof ArkDialog.Root>) => (
  <ArkDialog.Root data-slot="sheet" {...props} />
);

export const SheetTrigger = (
  props: React.ComponentProps<typeof ArkDialog.Trigger>
) => <ArkDialog.Trigger data-slot="sheet-trigger" {...props} />;

export const SheetOverlay = (
  props: React.ComponentProps<typeof ArkDialog.Backdrop>
) => {
  const { className, ...rest } = props;

  return (
    <ArkDialog.Backdrop
      className={cn(dialogOverlayVariants(), className)}
      data-slot="sheet-overlay"
      {...rest}
    />
  );
};

const sheetPositionerVariants = tv({
  base: ["fixed inset-0 z-50 grid"],
  variants: {
    side: {
      bottom: "grid grid-rows-[1fr_auto] pt-12",
      top: "grid grid-rows-[auto_1fr] pb-12",
      left: "flex justify-start",
      right: "flex justify-end",
    },
    variant: {
      default: "",
      inset: "sm:p-4",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface SheetPositionerProps
  extends React.ComponentProps<typeof ArkDialog.Positioner>,
    VariantProps<typeof sheetPositionerVariants> {}

export const SheetPositioner = (props: SheetPositionerProps) => {
  const { variant = "default", side, className, ...rest } = props;

  return (
    <ArkDialog.Positioner
      className={cn(sheetPositionerVariants({ side, variant }), className)}
      data-slot="sheet-positioner"
      {...rest}
    />
  );
};

const sheetContentVariants = tv({
  base: [
    "[--space:--spacing(6)]",
    "relative",
    "flex flex-col",
    "max-h-full min-h-0 w-full min-w-0",
    "bg-popover",
    "text-popover-foreground",
    "shadow-lg/5",
    "transition-[opacity,translate] duration-200 ease-in-out will-change-transform",
    "data-[state=closed]:fade-out-0 data-[state=closed]:animate-out",
    "data-[state=open]:fade-in-0 data-[state=open]:animate-in",
  ],
  variants: {
    side: {
      bottom: [
        "row-start-2 border-t",
        "data-[state=closed]:slide-in-from-bottom-10 data-[state=open]:slide-in-from-bottom-10",
      ],
      top: [
        "border-b",
        "data-[state=closed]:slide-out-to-top-10 data-[state=open]:slide-in-from-top-10",
      ],
      left: [
        "w-[calc(100%-(--spacing(12)))] max-w-md",
        "col-start-2",
        "border-e",
        "data-[state=closed]:slide-out-to-left-10 data-[state=open]:slide-in-from-left-10",
      ],
      right: [
        "w-[calc(100%-(--spacing(12)))] max-w-md",
        "col-start-2",
        "border-s",
        "data-[state=closed]:slide-out-to-right-10 data-[state=open]:slide-in-from-right-10",
      ],
    },
    variant: {
      default: "",
      inset: [
        "sm:rounded-2xl sm:border",
        "sm:**:data-[slot=sheet-footer]:rounded-b-[calc(var(--radius-2xl)-1px)]",
      ],
    },
  },
  defaultVariants: {
    side: "right",
    variant: "default",
  },
});

interface SheetContentProps
  extends React.ComponentProps<typeof ArkDialog.Content>,
    VariantProps<typeof sheetContentVariants> {
  /**
   * Show close button at the top right corner
   *
   * @default true
   */
  showCloseButton?: boolean;
}

export const SheetContent = (props: SheetContentProps) => {
  const {
    showCloseButton = true,
    side = "right",
    variant = "default",
    className,
    children,
    ...rest
  } = props;

  return (
    <Portal>
      <SheetOverlay />

      <SheetPositioner side={side} variant={variant}>
        <ArkDialog.Content
          className={cn(sheetContentVariants({ side, variant }), className)}
          data-slot="sheet-content"
          {...rest}
        >
          {children}

          {!!showCloseButton && (
            <SheetClose asChild>
              <Button
                aria-label="Close"
                className="absolute top-2 right-2 opacity-70 hover:opacity-100"
                size="icon-md"
                variant="ghost"
              >
                <XIcon />
              </Button>
            </SheetClose>
          )}
        </ArkDialog.Content>
      </SheetPositioner>
    </Portal>
  );
};

export const SheetHeader = (
  props: React.ComponentProps<typeof DialogHeader>
) => {
  return <DialogHeader data-slot="sheet-header" {...props} />;
};

export const SheetTitle = (
  props: React.ComponentProps<typeof ArkDialog.Title>
) => {
  return <DialogTitle data-slot="sheet-title" {...props} />;
};

export const SheetDescription = (
  props: React.ComponentProps<typeof DialogDescription>
) => {
  return <DialogDescription data-slot="sheet-description" {...props} />;
};

export const SheetBody = (props: React.ComponentProps<typeof DialogBody>) => {
  return <DialogBody data-slot="sheet-body" {...props} />;
};

export const SheetClose = (
  props: React.ComponentProps<typeof ArkDialog.CloseTrigger>
) => <ArkDialog.CloseTrigger data-slot="sheet-close" {...props} />;

export const SheetFooter = (
  props: React.ComponentProps<typeof DialogFooter>
) => {
  const { className, ...rest } = props;

  return (
    <DialogFooter
      className={cn("sm:rounded-none", className)}
      data-slot="sheet-footer"
      {...rest}
    />
  );
};
