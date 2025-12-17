import { ark } from "@ark-ui/react";
import { Dialog as ArkDialog } from "@ark-ui/react/dialog";
import { Portal } from "@ark-ui/react/portal";
import { X } from "lucide-react";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";

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

export const dialogBackdropVariants = tv({
  base: [
    "z-50",
    "fixed inset-0",
    "bg-background/50 backdrop-blur-xs",
    "data-[state=closed]:animate-out data-[state=open]:animate-in",
    "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
  ],
});

export const DialogBackdrop = (
  props: React.ComponentProps<typeof ArkDialog.Backdrop>
) => {
  const { className, ...rest } = props;

  return (
    <ArkDialog.Backdrop
      className={cn(dialogBackdropVariants(), className)}
      {...rest}
    />
  );
};

export const dialogContentVariants = tv({
  base: [
    "relative",
    "z-50",
    "-translate-x-1/2 -translate-y-1/2 fixed top-1/2 left-1/2",
    "flex flex-col gap-4",
    "bg-background",
    "w-full max-w-[calc(100%-2rem)] sm:max-w-lg",
    "rounded-lg border shadow-lg",
    "focus:outline-none focus:ring-0",
    "data-[state=closed]:animate-out data-[state=open]:animate-in",
    "data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
    "data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95",
  ],
  variants: {
    size: {
      sm: ["max-w-sm"],
      md: ["max-w-md"],
      lg: ["max-w-lg"],
      xl: ["max-w-xl"],
      "2xl": ["max-w-2xl"],
      "3xl": ["max-w-3xl"],
      "4xl": ["max-w-4xl"],
      "5xl": ["max-w-5xl"],
      "6xl": ["max-w-6xl"],
      "7xl": ["max-w-7xl"],
      "8xl": ["max-w-8xl"],
      fullscreen: ["size-full"],
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
   * Show close button at the top right corner
   *
   * @default true
   */
  showCloseButton?: boolean;
}

export const DialogContent = (props: DialogContentProps) => {
  const {
    showCloseButton = true,
    className,
    size = "md",
    children,
    ...rest
  } = props;

  return (
    <Portal>
      <DialogBackdrop />

      <ArkDialog.Positioner>
        <ArkDialog.Content
          className={cn(dialogContentVariants({ size }), className)}
          {...rest}
        >
          {children}

          {!!showCloseButton && (
            <DialogClose asChild>
              <Button
                className="absolute top-4 right-4 size-8 opacity-70 hover:opacity-100"
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
    <ark.div
      className={cn("flex-1 overflow-auto p-6", className)}
      data-part="body"
      {...rest}
    />
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
      className={cn("flex flex-col gap-2 p-6 pb-0", className)}
      data-part="header"
      data-scope="dialog"
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
        "font-semibold text-base leading-none tracking-tight",
        className
      )}
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
      {...rest}
    />
  );
};

export const DialogClose = (
  props: React.ComponentProps<typeof ArkDialog.CloseTrigger>
) => <ArkDialog.CloseTrigger asChild {...props} />;

export const DialogFooter = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn("flex flex-row-reverse gap-2 p-6 pt-0", className)}
      data-part="footer"
      data-scope="dialog"
      {...rest}
    />
  );
};
