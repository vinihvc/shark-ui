"use client";

import { ark } from "@ark-ui/react";
import { Presence } from "@ark-ui/react/presence";
import { XIcon } from "lucide-react";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";

interface ActionBarContextValue {
  onClose?: () => void;
}

const ActionBarContext = React.createContext<ActionBarContextValue>({});

const actionBarVariants = tv({
  slots: {
    positioner: ["fixed right-0 bottom-0 left-0 z-50 flex px-4 pb-4"],
    content: [
      "flex w-full max-w-full items-center gap-2",
      "rounded-lg border bg-popover px-4 py-2",
      "text-popover-foreground shadow-lg",
    ],
  },
  variants: {
    placement: {
      bottom: {
        positioner: "justify-center",
      },
      "bottom-start": {
        positioner: "justify-start",
      },
      "bottom-end": {
        positioner: "justify-end",
      },
    },
    size: {
      sm: {
        content: "py-1.5 text-sm",
      },
      md: {
        content: "py-2 text-sm",
      },
      lg: {
        content: "py-2.5 text-base",
      },
    },
  },
  defaultVariants: {
    placement: "bottom",
    size: "md",
  },
});

export interface ActionBarRootProps {
  children: React.ReactNode;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  open?: boolean;
}

export const ActionBarRoot = (props: ActionBarRootProps) => {
  const { open, defaultOpen = false, onOpenChange, children } = props;

  const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : internalOpen;

  const handleClose = React.useCallback(() => {
    if (!isControlled) {
      setInternalOpen(false);
    }
    onOpenChange?.(false);
  }, [isControlled, onOpenChange]);

  const context = React.useMemo(
    () => ({ onClose: handleClose }),
    [handleClose]
  );

  return (
    <ActionBarContext.Provider value={context}>
      <Presence present={isOpen} unmountOnExit>
        {children}
      </Presence>
    </ActionBarContext.Provider>
  );
};

export interface ActionBarPositionerProps
  extends React.ComponentProps<typeof ark.div>,
    VariantProps<typeof actionBarVariants> {}

export const ActionBarPositioner = (props: ActionBarPositionerProps) => {
  const { placement = "bottom", size = "md", className, ...rest } = props;
  const { positioner } = actionBarVariants({ placement, size });

  return (
    <ark.div
      className={cn(positioner(), className)}
      data-placement={placement}
      data-slot="action-bar-positioner"
      {...rest}
    />
  );
};

export interface ActionBarContentProps
  extends React.ComponentProps<typeof ark.div>,
    VariantProps<typeof actionBarVariants> {}

export const ActionBarContent = (props: ActionBarContentProps) => {
  const { size = "md", className, ...rest } = props;
  const { content } = actionBarVariants({ size });

  return (
    <ark.div
      className={cn(content(), className)}
      data-slot="action-bar-content"
      {...rest}
    />
  );
};

export interface ActionBarCloseTriggerProps
  extends React.ComponentProps<typeof Button> {}

export const ActionBarCloseTrigger = (props: ActionBarCloseTriggerProps) => {
  const context = React.useContext(ActionBarContext);
  const { className, ...rest } = props;

  return (
    <Button
      aria-label="Close"
      className={cn("shrink-0", className)}
      data-slot="action-bar-close-trigger"
      onClick={context.onClose}
      size="icon-sm"
      type="button"
      variant="ghost"
      {...rest}
    >
      <XIcon className="size-4" />
    </Button>
  );
};

export interface ActionBarSelectionTriggerProps
  extends React.ComponentProps<typeof ark.span> {
  count?: number;
  label?: string;
}

export const ActionBarSelectionTrigger = (
  props: ActionBarSelectionTriggerProps
) => {
  const { count = 0, label, className, children, ...rest } = props;

  return (
    <ark.span
      className={cn("shrink-0 font-medium", className)}
      data-slot="action-bar-selection-trigger"
      {...rest}
    >
      {children ??
        label ??
        (count === 1 ? "1 item selected" : `${count} items selected`)}
    </ark.span>
  );
};

export interface ActionBarSeparatorProps
  extends React.ComponentProps<typeof ark.div> {}

export const ActionBarSeparator = (props: ActionBarSeparatorProps) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn("h-4 w-px shrink-0 bg-border", className)}
      data-slot="action-bar-separator"
      role="separator"
      {...rest}
    />
  );
};
