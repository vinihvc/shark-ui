import type { ark } from "@ark-ui/react";
import { Dialog as ArkDialog } from "@ark-ui/react/dialog";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/registry/react/components/dialog";

export const Sheet = (props: React.ComponentProps<typeof ArkDialog.Root>) => (
  <Dialog data-slot="sheet" {...props} />
);

export const SheetTrigger = (
  props: React.ComponentProps<typeof ArkDialog.Trigger>
) => <ArkDialog.Trigger data-slot="sheet" {...props} />;

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
  extends React.ComponentProps<typeof DialogContent>,
    VariantProps<typeof sheetContentVariants> {}

export const SheetContent = (props: SheetContentProps) => {
  const { side, className, ...rest } = props;

  return (
    <DialogContent
      className={cn(sheetContentVariants({ side }), className)}
      data-slot="sheet-content"
      {...rest}
    />
  );
};

export const SheetBody = (props: React.ComponentProps<typeof ark.div>) => (
  <DialogBody data-slot="sheet-body" {...props} />
);

export const SheetHeader = (props: React.ComponentProps<typeof ark.div>) => (
  <DialogHeader data-slot="sheet-header" {...props} />
);

export const SheetTitle = (
  props: React.ComponentProps<typeof ArkDialog.Title>
) => <DialogTitle data-slot="sheet-title" {...props} />;

export const SheetDescription = (
  props: React.ComponentProps<typeof ArkDialog.Description>
) => <DialogDescription data-slot="sheet-description" {...props} />;

export const SheetClose = (
  props: React.ComponentProps<typeof ArkDialog.CloseTrigger>
) => <DialogClose data-slot="sheet-close" {...props} />;

export const SheetFooter = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <DialogFooter
      className={cn("mt-auto flex flex-col gap-2", className)}
      data-slot="sheet-footer"
      {...rest}
    />
  );
};
