import { ark } from "@ark-ui/react";
import { Dialog as ArkDialog } from "@ark-ui/react/dialog";
import { Portal } from "@ark-ui/react/portal";
import { X } from "lucide-react";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import { ScrollArea } from "./scroll-area";

export const Dialog = (props: React.ComponentProps<typeof ArkDialog.Root>) => {
  const { lazyMount = true, unmountOnExit = true, ...rest } = props;

  return (
    <ArkDialog.Root
      lazyMount={lazyMount}
      unmountOnExit={unmountOnExit}
      {...rest}
    />
  );
};

export const DialogTrigger = (
  props: React.ComponentProps<typeof ArkDialog.Trigger>
) => <ArkDialog.Trigger {...props} />;

export const dialogOverlayVariants = tv({
  base: [
    "z-[calc(40+var(--layer-index,0))]",
    "bg-black/32 backdrop-blur-sm",
    "fixed inset-0",
    "duration-200",
    "data-[state=closed]:animate-out data-[state=open]:animate-in",
    "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
  ],
});

export const DialogOverlay = (
  props: React.ComponentProps<typeof ArkDialog.Backdrop>
) => {
  const { className, ...rest } = props;

  return (
    <ArkDialog.Backdrop
      className={cn(dialogOverlayVariants(), className)}
      data-slot="dialog-overlay"
      {...rest}
    />
  );
};

export const dialogContentVariants = tv({
  base: [
    "[--space:--spacing(6)]",
    "z-[calc(50+var(--layer-index,0))]",
    "relative",
    "row-start-2",
    "max-h-[calc(100vh-10rem)] min-h-0 w-full min-w-0",
    "flex flex-col",
    "bg-popover",
    "text-popover-foreground",
    "rounded-lg border shadow-lg/5",
    "focus:outline-none focus:ring-0",
    "transition-[scale,opacity,translate] duration-200 ease-in-out will-change-transform",
    "data-has-nested:scale-[calc(1-var(--nested-layer-count)*0.05)]",
    "data-has-nested:origin-top data-has-nested:-translate-y-[calc(1.25rem*var(--nested-layer-count))] data-has-nested:scale-[calc(1-0.1*var(--nested-layer-count))]",
    "opacity-[calc(1-0.2*var(--nested-layer-count))]",
    "data-[state=closed]:animate-out data-[state=open]:animate-in",
    "data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
    "data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95",
  ],
  variants: {
    size: {
      sm: ["max-w-xs"],
      md: ["max-w-sm"],
      lg: ["max-w-md"],
      xl: ["max-w-lg"],
      fullscreen: ["size-full"],
    },
    bottomStickOnMobile: {
      true: [
        "max-sm:max-w-none",
        "max-sm:rounded-none max-sm:rounded-t-lg max-sm:border-x-0 max-sm:border-t max-sm:border-b-0",
        "max-sm:opacity-[calc(1-min(var(--nested-dialogs),1))]",
        "max-sm:slide-in-from-bottom-5",
        "max-sm:slide-out-to-bottom-5",
      ],
    },
  },
  defaultVariants: {
    size: "md",
    bottomStickOnMobile: true,
  },
});

interface DialogContentProps
  extends React.ComponentProps<typeof ArkDialog.Content>,
    VariantProps<typeof dialogContentVariants> {
  /**
   * Show close button at the top right corner
   *
   * @default true
   */
  showCloseButton?: boolean;
}

export const DialogContent = (props: DialogContentProps) => {
  const {
    showCloseButton = true,
    bottomStickOnMobile = true,
    className,
    size = "md",
    children,
    ...rest
  } = props;

  return (
    <Portal>
      <DialogOverlay />

      <ArkDialog.Positioner
        className={cn(
          "fixed inset-0 z-50 grid grid-rows-[1fr_auto_3fr] justify-items-center p-4",
          bottomStickOnMobile &&
            "max-sm:grid-rows-[1fr_auto] max-sm:p-0 max-sm:pt-12"
        )}
        data-slot="dialog-positioner"
      >
        <ArkDialog.Content
          className={cn(
            dialogContentVariants({ size, bottomStickOnMobile }),
            className
          )}
          data-slot="dialog-content"
          {...rest}
        >
          {children}

          {!!showCloseButton && (
            <DialogClose asChild>
              <Button
                className="absolute top-2 right-2 opacity-70 hover:opacity-100"
                size="icon-md"
                variant="ghost"
              >
                <X />

                <span className="sr-only">Close</span>
              </Button>
            </DialogClose>
          )}
        </ArkDialog.Content>
      </ArkDialog.Positioner>
    </Portal>
  );
};

export const DialogBody = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ScrollArea>
      <ark.div
        className={cn(
          "flex-1",
          "p-(--space)",
          "overflow-auto",
          "in-[[data-slot=dialog-content]:has([data-slot=dialog-header])]:pt-1",
          "in-[[data-slot=dialog-content]:has([data-slot=dialog-footer]:not(.border-t))]:pb-1",
          className
        )}
        data-slot="dialog-body"
        {...rest}
      />
    </ScrollArea>
  );
};

interface DialogHeaderProps extends React.ComponentProps<typeof ark.div> {
  /**
   * The title of the dialog
   */
  title?: string;
  /**
   * The description of the dialog
   */
  description?: string;
}

export const DialogHeader = (props: DialogHeaderProps) => {
  const { className, title, description, children, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "flex flex-col gap-2 p-(--space) in-[[data-slot=dialog-content]:has([data-slot=dialog-body])]:pb-3",
        className
      )}
      data-slot="dialog-header"
      {...rest}
    >
      {!!title && <DialogTitle>{title}</DialogTitle>}

      {!!description && <DialogDescription>{description}</DialogDescription>}

      {!title && typeof children === "string" ? (
        <DialogTitle>{children}</DialogTitle>
      ) : (
        children
      )}
    </ark.div>
  );
};

export const DialogTitle = (
  props: React.ComponentProps<typeof ArkDialog.Title>
) => {
  const { className, ...rest } = props;

  return (
    <ArkDialog.Title
      className={cn(
        "font-heading font-semibold text-xl leading-none",
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

export const DialogFooter = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        "sm:rounded-b-[calc(var(--radius-lg)-1px)]",
        "px-(--space) py-4",
        "bg-muted/72",
        "border-t",
        className
      )}
      data-slot="dialog-footer"
      {...rest}
    />
  );
};
