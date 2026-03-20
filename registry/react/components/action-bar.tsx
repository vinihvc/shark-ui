"use client";

import { Portal } from "@ark-ui/react";
import { ark } from "@ark-ui/react/factory";
import { Presence } from "@ark-ui/react/presence";
import React from "react";
import { tv } from "tailwind-variants";
import { cn } from "@/lib/utils";

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
   * The positioning of the action bar.
   */
  positioning: {
    /**
     * The offset from the edge in pixels.
     *
     * @default '16px'
     */
    offset?: string;
    /**
     * The placement of the action bar.
     *
     * @default "bottom"
     */
    placement?: "bottom" | "bottom-start" | "bottom-end";
  };
  /**
   * The function to call when the action bar is mounted
   */
  unmountOnExit?: boolean;
}

const ActionBarContext = React.createContext({} as ActionBarContextValue);

export interface ActionBarProps
  extends Pick<ActionBarContextValue, "lazyMount" | "unmountOnExit"> {
  /**
   * The default open state of the action bar.
   */
  defaultOpen?: boolean;
  /**
   * The function to call when the open state of the action bar changes.
   */
  onOpenChange?: (open: boolean) => void;
  /**
   * The open state of the action bar.
   */
  open?: boolean;
  /**
   * Placement and offset of the action bar.
   */
  positioning?: ActionBarContextValue["positioning"];
}

const defaultPositioning = { placement: "bottom", offset: "16px" } as const;

export const ActionBar = (props: React.PropsWithChildren<ActionBarProps>) => {
  const {
    open,
    defaultOpen = false,
    positioning,
    lazyMount = true,
    unmountOnExit = true,
    onOpenChange,
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
      positioning: { ...defaultPositioning, ...positioning },
      lazyMount,
      unmountOnExit,
    }),
    [handleClose, handleOpen, isOpen, lazyMount, unmountOnExit, positioning]
  );

  return <ActionBarContext.Provider value={context} {...rest} />;
};

export interface ActionBarTriggerProps
  extends React.ComponentProps<typeof ark.button> {}

export const ActionBarTrigger = (props: ActionBarTriggerProps) => {
  const { onClick, ...rest } = props;

  const { onOpen, isOpen } = _useActionBar();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onOpen?.();
    onClick?.(event);
  };

  return (
    <ark.button
      aria-expanded={isOpen}
      data-slot="action-bar-trigger"
      data-state={isOpen ? "open" : "closed"}
      onClick={handleClick}
      type="button"
      {...rest}
    />
  );
};

const actionBarPositionerVariants = tv({
  base: [
    "fixed inset-x-0 bottom-0 z-50",
    "flex",
    "px-4 pb-(--offset)",
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

export interface ActionBarContentProps
  extends React.ComponentProps<typeof ark.div> {}

export const ActionBarContent = (props: ActionBarContentProps) => {
  const {
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledby,
    className,
    ...rest
  } = props;

  const { isOpen, lazyMount, unmountOnExit, positioning } = _useActionBar();

  const placement = positioning.placement;
  const offset = positioning.offset;

  return (
    <Portal>
      <Presence
        asChild
        lazyMount={lazyMount}
        present={isOpen}
        unmountOnExit={unmountOnExit}
      >
        <ark.div
          className={cn(actionBarPositionerVariants({ placement }))}
          data-placement={placement}
          data-slot="action-bar-positioner"
          style={{ "--offset": offset } as React.CSSProperties}
        >
          <ark.div
            aria-label={
              ariaLabelledby ? undefined : (ariaLabel ?? "Selection actions")
            }
            aria-labelledby={ariaLabelledby}
            className={cn(
              "[--space:--spacing(4)]",
              "flex w-full max-w-full items-center gap-2",
              "rounded-lg border border-input shadow-lg/5",
              "p-(--space)",
              "bg-popover",
              "text-popover-foreground",
              className
            )}
            data-slot="action-bar-content"
            role="toolbar"
            {...rest}
          />
        </ark.div>
      </Presence>
    </Portal>
  );
};

export interface ActionBarCloseProps
  extends React.ComponentProps<typeof ark.button> {}

export const ActionBarClose = (props: ActionBarCloseProps) => {
  const { className, onClick, ...rest } = props;

  const { onClose, isOpen } = _useActionBar();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClose?.();
    onClick?.(event);
  };

  return (
    <ark.button
      aria-label="Close"
      className={cn(
        "opacity-64 transition-opacity",
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

export const ActionBarBody = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn("ml-auto flex items-center gap-2", className)}
      {...rest}
    />
  );
};

const _useActionBar = () => {
  const context = React.useContext(ActionBarContext);

  if (!context) {
    throw new Error("useActionBar must be used within a ActionBarProvider.");
  }

  return context;
};
