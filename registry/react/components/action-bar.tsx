"use client";

import { Portal } from "@ark-ui/react";
import { ark } from "@ark-ui/react/factory";
import { Presence } from "@ark-ui/react/presence";
import React from "react";
import { tv } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { Badge } from "@/registry/react/components/badge";
import { useHotkey } from "@/registry/react/components/hotkeys";
import { Separator } from "@/registry/react/components/separator";

interface ActionBarPositioning {
  /**
   * The gutter from the edge in pixels.
   *
   * @default '16px'
   */
  gutter?: string;
  /**
   * The placement of the action bar.
   *
   * @default "bottom"
   */
  placement?: "bottom" | "bottom-start" | "bottom-end";
}

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
  positioning: ActionBarPositioning;
  /**
   * The function to call when the action bar is mounted
   */
  unmountOnExit?: boolean;
}

const ActionBarContext = React.createContext({} as ActionBarContextValue);

export interface ActionBarProps
  extends Pick<ActionBarContextValue, "lazyMount" | "unmountOnExit"> {
  /**
   * Whether to close the action bar when the Escape key is pressed.
   *
   * @default true
   */
  closeOnEscape?: boolean;
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
   * Placement and gutter of the action bar.
   */
  positioning?: ActionBarContextValue["positioning"];
}

const defaultPositioning = { gutter: "16px", placement: "bottom" } as const;

export const ActionBar = (props: React.PropsWithChildren<ActionBarProps>) => {
  const {
    open,
    defaultOpen = false,
    closeOnEscape = true,
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

  useHotkey({
    action: (event) => {
      if (event.defaultPrevented) {
        return;
      }
      handleClose();
    },
    enabled: () => isOpen && closeOnEscape,
    hotkey: "escape",
    options: { preventDefault: true },
  });

  const context = React.useMemo(
    () => ({
      isOpen,
      lazyMount,
      onClose: handleClose,
      onOpen: handleOpen,
      positioning: { ...defaultPositioning, ...positioning },
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
    "px-4 pb-[calc(var(--gutter)+env(safe-area-inset-bottom,0))]",
    "pointer-events-none",
    "data-[state=closed]:animate-out data-[state=open]:animate-in",
    "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
    "data-[state=open]:slide-in-from-bottom-2 data-[state=closed]:slide-out-to-bottom-2",
    "motion-reduce:animate-none!",
  ],
  defaultVariants: {
    placement: "bottom",
  },
  variants: {
    placement: {
      bottom: "justify-center",
      "bottom-end": "justify-end",
      "bottom-start": "justify-start",
    },
  },
});

export interface ActionBarContentProps
  extends React.ComponentProps<typeof ark.div> {}

export const ActionBarContent = (props: ActionBarContentProps) => {
  const { "aria-labelledby": ariaLabelledby, className, ...rest } = props;

  const { isOpen, lazyMount, unmountOnExit, positioning } = _useActionBar();

  const placement = positioning.placement;
  const gutter = positioning.gutter;

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
          style={{ "--gutter": gutter } as React.CSSProperties}
        >
          <ark.div
            aria-labelledby={ariaLabelledby}
            className={cn(
              "[--space:--spacing(2)]",
              "flex w-fit items-center gap-1",
              "rounded-xl border shadow-lg/5",
              "px-[calc(var(--space)+2px)] py-(--space)",
              "bg-popover",
              "text-popover-foreground",
              "pointer-events-auto",
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

export interface ActionBarSeparatorProps
  extends React.ComponentProps<typeof Separator> {}

export const ActionBarSeparator = (props: ActionBarSeparatorProps) => {
  const { className, ...rest } = props;

  return (
    <Separator
      className={cn("mx-1 h-1/2", className)}
      data-slot="action-bar-separator"
      orientation="vertical"
      {...rest}
    />
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
        "motion-reduce:transition-none!",
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

export interface ActionBarValueProps
  extends React.ComponentProps<typeof Badge> {
  /**
   * The number of items selected
   */
  count: number;
  /**
   * The label of the selection trigger
   */
  label?: string;
}

export const ActionBarValue = (props: ActionBarValueProps) => {
  const { label, count = 0, className, children, ...rest } = props;

  return (
    <Badge
      className={cn("shrink-0 font-medium text-sm tabular-nums", className)}
      data-slot="action-bar-value"
      variant="secondary"
      {...rest}
    >
      {children ?? label ?? count}
    </Badge>
  );
};

export const ActionBarBody = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "flex items-center gap-1",
        "**:data-[slot=action-bar-separator]:h-2",
        className
      )}
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
