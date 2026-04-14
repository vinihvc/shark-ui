import { Dialog as ArkDialog, useDialogContext } from "@ark-ui/solid/dialog";
import { XIcon } from "lucide-solid";
import type { ComponentProps } from "solid-js";

import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/solid/components/button";
import {
  Dialog,
  DialogBody,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
} from "@/registry/solid/components/dialog";

export const useSheet = useDialogContext;

export const Sheet = (props: ComponentProps<typeof Dialog>) => (
  <Dialog data-slot="sheet" {...props} />
);

export const SheetTrigger = (
  props: ComponentProps<typeof ArkDialog.Trigger>
) => <ArkDialog.Trigger data-slot="sheet-trigger" {...props} />;

export const SheetOverlay = (props: ComponentProps<typeof DialogOverlay>) => {
  return <DialogOverlay data-slot="sheet-overlay" {...props} />;
};

const sheetPositionerVariants = tv({
  base: ["fixed inset-0 z-50 grid h-svh w-screen"],
  variants: {
    placement: {
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
  extends ComponentProps<typeof ArkDialog.Positioner>,
    VariantProps<typeof sheetPositionerVariants> {}

export const SheetPositioner = (props: SheetPositionerProps) => {
  const { variant = "default", placement, className, ...rest } = props;

  return (
    <ArkDialog.Positioner
      class={cn(sheetPositionerVariants({ placement, variant }), className)}
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
    placement: {
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
        "data-[state=closed]:slide-out-to-start-10 data-[state=open]:slide-in-from-start-10",
      ],
      right: [
        "w-[calc(100%-(--spacing(12)))] max-w-md",
        "col-start-2",
        "border-s",
        "data-[state=closed]:slide-out-to-end-10 data-[state=open]:slide-in-from-end-10",
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
    placement: "right",
    variant: "default",
  },
});

interface SheetContentProps
  extends ComponentProps<typeof ArkDialog.Content>,
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
    placement = "right",
    variant = "default",
    class: className,
    children,
    ...rest
  } = props;

  return (
    <>
      <SheetOverlay />

      <SheetPositioner placement={placement} variant={variant}>
        <ArkDialog.Content
          class={cn(sheetContentVariants({ placement, variant }), className)}
          data-slot="sheet-content"
          {...rest}
        >
          {children}

          {!!showCloseButton && (
            <SheetClose asChild>
              <Button
                aria-label="Close"
                class="absolute inset-e-2 top-2 opacity-64 hover:opacity-100"
                size="icon-sm"
                variant="ghost"
              >
                <XIcon />
              </Button>
            </SheetClose>
          )}
        </ArkDialog.Content>
      </SheetPositioner>
    </>
  );
};

export const SheetHeader = (props: ComponentProps<typeof DialogHeader>) => {
  return <DialogHeader data-slot="sheet-header" {...props} />;
};

export const SheetTitle = (props: ComponentProps<typeof DialogTitle>) => {
  return <DialogTitle data-slot="sheet-title" {...props} />;
};

export const SheetDescription = (
  props: ComponentProps<typeof DialogDescription>
) => {
  return <DialogDescription data-slot="sheet-description" {...props} />;
};

export const SheetBody = (props: ComponentProps<typeof DialogBody>) => {
  const { class: className, ...rest } = props;

  return (
    <DialogBody
      class={cn(
        "in-[[data-slot=sheet-content]:has([data-slot=sheet-header])]:pt-0",
        className
      )}
      data-slot="sheet-body"
      {...rest}
    />
  );
};

export const SheetClose = (
  props: ComponentProps<typeof ArkDialog.CloseTrigger>
) => <ArkDialog.CloseTrigger data-slot="sheet-close" {...props} />;

export const SheetFooter = (props: ComponentProps<typeof DialogFooter>) => {
  const { class: className, ...rest } = props;

  return (
    <DialogFooter
      class={cn("sm:rounded-none", className)}
      data-slot="sheet-footer"
      {...rest}
    />
  );
};
