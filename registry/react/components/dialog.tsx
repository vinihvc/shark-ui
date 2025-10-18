import { Dialog as ArkDialog } from "@ark-ui/react/dialog";
import { Portal } from "@ark-ui/react/portal";
import { X } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./button";

export const Dialog = (props: React.ComponentProps<typeof ArkDialog.Root>) => (
  <ArkDialog.Root data-slot="dialog" {...props} />
);

export const DialogTrigger = (
  props: React.ComponentProps<typeof ArkDialog.Trigger>
) => <ArkDialog.Trigger data-slot="dialog-trigger" {...props} />;

export const DialogBackdrop = (
  props: React.ComponentProps<typeof ArkDialog.Backdrop>
) => {
  const { className, ...rest } = props;

  return (
    <ArkDialog.Backdrop
      className={cn(
        "fixed inset-0 z-50 bg-background/50 backdrop-blur-xs",
        className
      )}
      data-slot="dialog-backdrop"
      {...rest}
    />
  );
};

export const DialogPositioner = (
  props: React.ComponentProps<typeof ArkDialog.Positioner>
) => <ArkDialog.Positioner data-slot="dialog-positioner" {...props} />;

interface DialogContentProps
  extends React.ComponentProps<typeof ArkDialog.Content> {
  /**
   * If `true`, the close button will be shown.
   *
   * @default true
   */
  showCloseButton?: boolean;
}

export const DialogContent = (props: DialogContentProps) => {
  const { showCloseButton = true, className, children, ...rest } = props;

  return (
    <Portal>
      <DialogBackdrop />

      <DialogPositioner>
        <ArkDialog.Content
          className={cn(
            "z-50",
            "-translate-x-1/2 -translate-y-1/2 fixed top-1/2 left-1/2",
            "flex flex-col",
            "p-6",
            "bg-background",
            "w-full max-w-[calc(100%-2rem)] sm:max-w-lg",
            "border shadow-lg",
            "rounded-lg",
            "focus:outline-none focus:ring-0",
            "duration-200",
            "data-[state=closed]:animate-out data-[state=open]:animate-in",
            "data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
            "data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95",
            className
          )}
          data-slot="dialog-content"
          {...rest}
        >
          {children}

          {showCloseButton && (
            <DialogClose asChild className="absolute top-4 right-4">
              <Button
                className="size-8 border-none opacity-70 hover:opacity-100"
                size="icon"
                variant="ghost"
              >
                <X />

                <span className="sr-only">Close</span>
              </Button>
            </DialogClose>
          )}
        </ArkDialog.Content>
      </DialogPositioner>
    </Portal>
  );
};

export const DialogHeader = (props: React.ComponentProps<"div">) => {
  const { className, ...rest } = props;

  return (
    <div
      className={cn("flex flex-col gap-2", className)}
      data-slot="dialog-header"
      {...rest}
    />
  );
};

export const DialogTitle = (
  props: React.ComponentProps<typeof ArkDialog.Title>
) => {
  const { className, ...rest } = props;

  return (
    <ArkDialog.Title
      className={cn(
        "font-semibold text-lg leading-none tracking-tight",
        className
      )}
      data-slot="dialog-title"
      {...rest}
    />
  );
};

export const DialogDescription = (
  props: React.ComponentProps<typeof ArkDialog.Description>
) => {
  const { className, ...rest } = props;

  return (
    <ArkDialog.Description
      className={cn("text-muted-foreground text-sm", className)}
      data-slot="dialog-description"
      {...rest}
    />
  );
};

export const DialogClose = (
  props: React.ComponentProps<typeof ArkDialog.CloseTrigger>
) => <ArkDialog.CloseTrigger data-slot="dialog-close-trigger" {...props} />;

export const DialogFooter = (props: React.ComponentProps<"div">) => {
  const { className, ...rest } = props;

  return (
    <div
      className={cn("mt-4 flex flex-row-reverse gap-2", className)}
      data-slot="dialog-footer"
      {...rest}
    />
  );
};
