"use client";

import { ark } from "@ark-ui/react";
import { Dialog as ArkDialog } from "@ark-ui/react/dialog";
import { Portal } from "@ark-ui/react/portal";
import { XIcon } from "lucide-react";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import { ScrollArea } from "@/registry/react/components/scroll-area";

interface DialogContextProps {
  /**
   * Used internally to show or hide overlay
   *
   * @default true
   */
  modal?: boolean;
}

const DialogContext = React.createContext({} as DialogContextProps);

export const Dialog = (props: React.ComponentProps<typeof ArkDialog.Root>) => {
  const {
    modal = true,
    lazyMount = true,
    unmountOnExit = true,
    ...rest
  } = props;

  return (
    <DialogContext.Provider value={{ modal }}>
      <ArkDialog.Root
        lazyMount={lazyMount}
        modal={modal}
        unmountOnExit={unmountOnExit}
        {...rest}
      />
    </DialogContext.Provider>
  );
};

export const DialogTrigger = (
  props: React.ComponentProps<typeof ArkDialog.Trigger>
) => <ArkDialog.Trigger {...props} />;

export const dialogOverlayVariants = tv({
  base: [
    "fixed inset-0 z-50",
    "bg-black/32 backdrop-blur-sm",
    "duration-200",
    "peer peer-data-[slot=dialog-overlay]:hidden",
    "data-[state=open]:fade-in-0 data-[state=open]:animate-in",
    "data-[state=closed]:fade-out-0 data-[state=closed]:animate-out",
  ],
});

export const DialogOverlay = (
  props: React.ComponentProps<typeof ArkDialog.Backdrop>
) => {
  const { className, ...rest } = props;

  const { modal } = useDialog();

  if (!modal) {
    return null;
  }

  return (
    <ArkDialog.Backdrop
      className={cn(dialogOverlayVariants(), className)}
      data-slot="dialog-overlay"
      {...rest}
    />
  );
};

export const DialogPositioner = (
  props: React.ComponentProps<typeof ArkDialog.Positioner>
) => {
  const { className, ...rest } = props;

  return (
    <ArkDialog.Positioner
      className={cn(
        "fixed inset-0 z-50",
        "h-svh w-screen",
        "grid grid-rows-[1fr_auto_3fr] justify-items-center",
        "p-4",
        className
      )}
      data-slot="dialog-positioner"
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
    "max-h-full min-h-0 w-full min-w-0",
    "flex flex-col",
    "bg-popover",
    "text-popover-foreground",
    "rounded-2xl border shadow-lg/5",
    "focus:outline-none focus:ring-0",
    "-translate-y-[calc(1.25rem*var(--nested-layer-count))]",
    "transition-[scale,opacity,translate] duration-200 ease-in-out will-change-transform",
    "data-[nested=dialog]:data-[state=closed]:slide-in-from-bottom-10 data-[nested=dialog]:data-[state=open]:slide-in-from-bottom-10 data-[has-nested=dialog]:origin-top",
    "scale-[calc(1-0.1*var(--nested-layer-count))] opacity-[calc(1-0.1*var(--nested-layer-count))]",
    "data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-[98%] data-[state=closed]:animate-out",
    "data-[state=open]:fade-in-0 data-[state=open]:zoom-in-[98%] data-[state=open]:animate-in",
  ],
  variants: {
    size: {
      sm: ["max-w-sm"],
      md: ["max-w-md"],
      lg: ["max-w-lg"],
      xl: ["max-w-xl"],
      fullscreen: ["size-full"],
    },
    bottomStickOnMobile: {
      true: [
        "max-sm:max-w-none",
        "max-sm:rounded-none max-sm:rounded-t-2xl max-sm:border-x-0 max-sm:border-t max-sm:border-b-0",
        "max-sm:opacity-[calc(1-min(var(--nested-dialogs),1))]",
        "max-sm:data-[state=closed]:slide-out-to-bottom-5 max-sm:data-[state=open]:slide-in-from-bottom-5",
        "max-sm:data-[state=closed]:zoom-out-100 max-sm:data-[state=open]:zoom-in-100",
      ],
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface DialogContentProps
  extends React.ComponentProps<typeof ArkDialog.Content>,
    VariantProps<typeof dialogContentVariants> {
  /**
   * Stick the dialog to the bottom of the screen on mobile
   *
   * @default true
   */
  bottomStickOnMobile?: boolean;
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
    size = "md",
    className,
    children,
    ...rest
  } = props;

  return (
    <Portal>
      <DialogOverlay />

      <DialogPositioner
        className={cn(
          bottomStickOnMobile &&
            "max-sm:grid-rows-[1fr_auto] max-sm:p-0 max-sm:pt-12"
        )}
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
                aria-label="Close"
                className="absolute top-2 right-2 opacity-64 hover:opacity-100"
                size="icon-md"
                variant="ghost"
              >
                <XIcon />
              </Button>
            </DialogClose>
          )}
        </ArkDialog.Content>
      </DialogPositioner>
    </Portal>
  );
};

interface DialogBodyProps extends React.ComponentProps<typeof ark.div> {
  /**
   * Add a fade effect to the scroll area
   *
   * @default false
   */
  scrollFade?: boolean;
}

export const DialogBody = (props: DialogBodyProps) => {
  const { scrollFade = false, className, ...rest } = props;

  return (
    <ScrollArea scrollFade={scrollFade}>
      <ark.div
        className={cn(
          "flex-1",
          "p-(--space)",
          "overflow-auto",
          "in-[[data-slot=dialog-content]:has([data-slot=dialog-header])]:pt-0",
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
   * The description of the dialog
   */
  description?: string;
  /**
   * The title of the dialog
   */
  title?: string;
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
      className={cn("font-semibold text-lg leading-none", className)}
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
        "sm:rounded-b-[calc(var(--radius-2xl)-1px)]",
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

const useDialog = () => {
  const context = React.useContext(DialogContext);

  if (!context) {
    throw new Error("useDialog must be used within a DialogProvider");
  }

  return context;
};
