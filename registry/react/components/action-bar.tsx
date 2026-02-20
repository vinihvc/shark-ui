"use client";

import { ark, Portal } from "@ark-ui/react";
import { Presence } from "@ark-ui/react/presence";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { Separator } from "@/registry/react/components/separator";

interface ActionBarContextValue {
  /**
   * The open state of the action bar
   */
  isOpen?: boolean;
  /**
   * Whether to lazy mount the action bar
   */
  lazyMount?: boolean;
  /**
   * The function to call when the action bar is closed
   */
  onClose?: () => void;
  /**
   * The function to call when the action bar is opened
   */
  onOpen?: () => void;
  /**
   * The function to call when the action bar is mounted
   */
  unmountOnExit?: boolean;
}

const ActionBarContext = React.createContext({} as ActionBarContextValue);

export interface ActionBarProps
  extends Pick<ActionBarContextValue, "lazyMount" | "unmountOnExit"> {
  /**
   * The default open state of the action bar
   */
  defaultOpen?: boolean;
  /**
   * The function to call when the open state of the action bar changes
   */
  onOpenChange?: (open: boolean) => void;
  /**
   * The open state of the action bar
   */
  open?: boolean;
}

export const ActionBar = (props: React.PropsWithChildren<ActionBarProps>) => {
  const {
    open,
    defaultOpen = false,
    onOpenChange,
    lazyMount = true,
    unmountOnExit = true,
    ...rest
  } = props;

  const [internalOpen, setInternalOpen] = React.useState(defaultOpen);

  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : internalOpen;

  const handleClose = React.useCallback(() => {
    if (!isControlled) {
      setInternalOpen(false);
    }

    onOpenChange?.(false);
  }, [isControlled, onOpenChange]);

  const handleOpen = React.useCallback(() => {
    if (!isControlled) {
      setInternalOpen(true);
    }

    onOpenChange?.(true);
  }, [isControlled, onOpenChange]);

  const context = React.useMemo(
    () => ({
      onClose: handleClose,
      onOpen: handleOpen,
      isOpen,
      lazyMount,
      unmountOnExit,
    }),
    [handleClose, handleOpen, isOpen, lazyMount, unmountOnExit]
  );

  return <ActionBarContext.Provider value={context} {...rest} />;
};

export interface ActionBarTriggerProps
  extends React.ComponentProps<typeof ark.button> {}

export const ActionBarTrigger = (props: ActionBarTriggerProps) => {
  const { children, onClick, ...rest } = props;

  const { onOpen, isOpen } = useActionBar();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onOpen?.();
    onClick?.(event);
  };

  return (
    <ark.button
      aria-expanded={isOpen}
      data-slot="action-bar-trigger"
      onClick={handleClick}
      type="button"
      {...rest}
    >
      {children}
    </ark.button>
  );
};

export interface ActionBarPositioning {
  /**
   * The placement of the action bar.
   *
   * @default "bottom"
   */
  placement?: "bottom" | "bottom-start" | "bottom-end";
  /**
   * The offset from the edge in pixels.
   *
   * @default 16
   */
  offset?: number;
}

const actionBarPositionerVariants = tv({
  base: [
    "fixed inset-x-0 bottom-0 z-40",
    "flex",
    "px-4",
    "data-[state=closed]:animate-out data-[state=open]:animate-in",
    "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
    "data-[state=open]:slide-in-from-bottom-2 data-[state=closed]:slide-out-to-bottom-2",
  ],
  variants: {
    placement: {
      bottom: "justify-center",
      "bottom-end": "justify-end",
      "bottom-start": "justify-start",
    },
  },
  defaultVariants: {
    placement: "bottom",
  },
});

export interface ActionBarPositionerProps
  extends React.ComponentProps<typeof ark.div> {
  /**
   * The positioning of the action bar.
   */
  positioning?: ActionBarPositioning;
}

export const ActionBarPositioner = (props: ActionBarPositionerProps) => {
  const {
    positioning = { placement: "bottom", offset: 16 },
    className,
    ...rest
  } = props;

  const { isOpen, lazyMount, unmountOnExit } = useActionBar();

  const placement = positioning.placement ?? "bottom";
  const offset = positioning.offset ?? 16;

  return (
    <Presence
      asChild
      lazyMount={lazyMount}
      present={isOpen}
      unmountOnExit={unmountOnExit}
    >
      <ark.div
        className={cn(actionBarPositionerVariants({ placement }), className)}
        data-placement={placement}
        data-slot="action-bar-positioner"
        style={{ paddingBottom: offset }}
        {...rest}
      />
    </Presence>
  );
};

export interface ActionBarContentProps
  extends React.ComponentProps<typeof ark.div> {
  /**
   * The positioning of the action bar.
   */
  positioning?: ActionBarPositioning;
}

export const ActionBarContent = (props: ActionBarContentProps) => {
  const {
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledby,
    positioning = { placement: "bottom", offset: 16 },
    className,
    ...rest
  } = props;

  const { isOpen } = useActionBar();

  return (
    <Portal>
      <ActionBarPositioner positioning={positioning}>
        <ark.div
          aria-label={
            ariaLabelledby ? undefined : (ariaLabel ?? "Selection actions")
          }
          aria-labelledby={ariaLabelledby}
          className={cn(
            "flex w-full max-w-full items-center gap-2",
            "rounded-xl border shadow-lg/5",
            "p-4",
            "bg-popover",
            "text-popover-foreground",
            className
          )}
          data-slot="action-bar-content"
          data-state={isOpen ? "open" : "closed"}
          role="toolbar"
          {...rest}
        />
      </ActionBarPositioner>
    </Portal>
  );
};

export interface ActionBarCloseProps
  extends React.ComponentProps<typeof ark.button> {}

export const ActionBarClose = (props: ActionBarCloseProps) => {
  const { className, onClick, ...rest } = props;

  const { onClose, isOpen } = useActionBar();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClose?.();
    onClick?.(event);
  };

  return (
    <ark.button
      aria-label="Close"
      className={cn(
        "opacity-70 transition-opacity",
        "hover:opacity-100",
        className
      )}
      data-slot="action-bar-close"
      data-state={isOpen ? "open" : "closed"}
      onClick={handleClick}
      type="button"
      {...rest}
    />
  );
};

export interface ActionBarSelectionTriggerProps
  extends React.ComponentProps<typeof ark.span> {
  /**
   * The number of items selected
   */
  count: number;
  /**
   * The label of the selection trigger
   */
  label?: string;
}

export const ActionBarSelectionTrigger = (
  props: ActionBarSelectionTriggerProps
) => {
  const { label, count = 0, className, children, ...rest } = props;

  return (
    <ark.span
      className={cn("shrink-0 font-medium text-sm", className)}
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
  extends React.ComponentProps<typeof Separator> {}

export const ActionBarSeparator = (props: ActionBarSeparatorProps) => {
  const { className, ...rest } = props;

  return (
    <Separator
      className={cn("h-4", className)}
      orientation="vertical"
      {...rest}
    />
  );
};

const useActionBar = () => {
  const context = React.useContext(ActionBarContext);

  if (!context) {
    throw new Error("useActionBar must be used within a ActionBarProvider.");
  }

  return context;
};
