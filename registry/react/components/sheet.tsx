import type { ark } from "@ark-ui/react";
import { Dialog as ArkDialog } from "@ark-ui/react/dialog";
import { Portal } from "@ark-ui/react/portal";
import { X } from "lucide-react";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import {
  Dialog,
  DialogBackdrop,
  DialogBody,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  dialogContentVariants,
} from "@/registry/react/components/dialog";

export const Sheet = (props: React.ComponentProps<typeof ArkDialog.Root>) => (
  <Dialog data-part="sheet" {...props} />
);

export const SheetTrigger = (
  props: React.ComponentProps<typeof ArkDialog.Trigger>
) => <ArkDialog.Trigger data-scope="sheet" {...props} />;

const sheetContentVariants = tv({
  base: [
    "translate-x-0 translate-y-0",
    "rounded-none border-0",
    "data-[state=open]:zoom-in-100",
    "data-[state=closed]:zoom-out-100",
  ],
  variants: {
    side: {
      top: [
        "inset-x-0 top-0",
        "h-auto w-full sm:max-w-full",
        "data-[state=closed]:slide-out-to-top",
        "data-[state=open]:slide-in-from-top",
        "border-b",
      ],
      bottom: [
        "inset-x-0 bottom-0",
        "h-auto w-full sm:max-w-full",
        "data-[state=closed]:slide-out-to-bottom",
        "data-[state=open]:slide-in-from-bottom",
        "border-t",
      ],
      left: [
        "inset-y-0 right-auto left-0",
        "h-full w-3/4 sm:max-w-sm",
        "data-[state=closed]:slide-out-to-left",
        "data-[state=open]:slide-in-from-left",
        "border-r",
      ],
      right: [
        "inset-y-0 right-0 left-auto",
        "h-full w-3/4 sm:max-w-sm",
        "data-[state=closed]:slide-out-to-right",
        "data-[state=open]:slide-in-from-right",
        "border-l",
      ],
    },
  },
  defaultVariants: {
    side: "right",
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
  const { side, showCloseButton = true, className, children, ...rest } = props;

  return (
    <Portal>
      <DialogBackdrop data-scope="sheet" />

      <ArkDialog.Positioner data-scope="sheet">
        <ArkDialog.Content
          className={cn(
            dialogContentVariants(),
            sheetContentVariants({ side }),
            className
          )}
          data-scope="sheet"
          data-side={side}
          {...rest}
        >
          {children}

          {!!showCloseButton && (
            <ArkDialog.CloseTrigger
              asChild
              className="absolute top-4 right-4"
              data-scope="sheet"
            >
              <Button
                className="size-8 border-none opacity-70 hover:opacity-100"
                size="icon-md"
                variant="ghost"
              >
                <X />

                <span className="sr-only">Close</span>
              </Button>
            </ArkDialog.CloseTrigger>
          )}
        </ArkDialog.Content>
      </ArkDialog.Positioner>
    </Portal>
  );
};

export const SheetBody = (props: React.ComponentProps<typeof ark.div>) => (
  <DialogBody data-scope="sheet" {...props} />
);

export const SheetHeader = (props: React.ComponentProps<typeof ark.div>) => (
  <DialogHeader data-scope="sheet" {...props} />
);

export const SheetTitle = (
  props: React.ComponentProps<typeof ArkDialog.Title>
) => <DialogTitle data-scope="sheet" {...props} />;

export const SheetDescription = (
  props: React.ComponentProps<typeof ArkDialog.Description>
) => <DialogDescription data-scope="sheet" {...props} />;

export const SheetClose = (
  props: React.ComponentProps<typeof ArkDialog.CloseTrigger>
) => <DialogClose data-scope="sheet" {...props} />;

export const SheetFooter = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <DialogFooter
      className={cn("mt-auto flex flex-col gap-2", className)}
      data-scope="sheet"
      {...rest}
    />
  );
};
