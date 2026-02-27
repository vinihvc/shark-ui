"use client";

import { Popover as ArkPopover } from "@ark-ui/react/popover";
import { Portal } from "@ark-ui/react/portal";
import React, { useCallback, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type OpenedBy = "hover" | "click" | null;

interface ToggleTooltipContextValue {
  closeDelay: number;
  onOpenChange: (details: { open: boolean }) => void;
  openDelay: number;
  openedByRef: React.MutableRefObject<OpenedBy>;
  openOnHover: boolean;
}

const ToggleTooltipContext = React.createContext<
  ToggleTooltipContextValue | undefined
>(undefined);

const useToggleTooltip = () => {
  const context = React.useContext(ToggleTooltipContext);
  if (!context) {
    throw new Error(
      "ToggleTooltip components must be used within ToggleTooltip"
    );
  }
  return context;
};

interface ToggleTooltipProps
  extends Omit<
    React.ComponentProps<typeof ArkPopover.Root>,
    "open" | "onOpenChange"
  > {
  /**
   * Delay before closing on hover leave (ms).
   *
   * @default 100
   */
  closeDelay?: number;
  /**
   * Called when the open state changes.
   */
  onOpenChange?: (details: { open: boolean }) => void;
  /**
   * The controlled open state.
   */
  open?: boolean;
  /**
   * Delay before opening on hover (ms).
   *
   * @default 0
   */
  openDelay?: number;
  /**
   * Open on hover (desktop convenience).
   *
   * @default true
   */
  openOnHover?: boolean;
}

export const ToggleTooltip = (props: ToggleTooltipProps) => {
  const {
    positioning = { placement: "top" },
    lazyMount = true,
    unmountOnExit = true,
    modal = false,
    openOnHover = true,
    openDelay = 0,
    closeDelay = 100,
    open: controlledOpen,
    onOpenChange: controlledOnOpenChange,
    ...rest
  } = props;

  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
  const openedByRef = useRef<OpenedBy>(null);

  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : uncontrolledOpen;

  const onOpenChange = useCallback(
    (details: { open: boolean }) => {
      if (details.open && openedByRef.current === null) {
        openedByRef.current = "click";
      } else if (!details.open) {
        openedByRef.current = null;
      }
      if (isControlled) {
        controlledOnOpenChange?.(details);
      } else {
        setUncontrolledOpen(details.open);
      }
    },
    [isControlled, controlledOnOpenChange]
  );

  const contextValue: ToggleTooltipContextValue = {
    onOpenChange,
    openOnHover,
    openDelay,
    closeDelay,
    openedByRef,
  };

  return (
    <ToggleTooltipContext.Provider value={contextValue}>
      <ArkPopover.Root
        closeOnEscape={true}
        closeOnInteractOutside={true}
        data-slot="toggle-tooltip"
        lazyMount={lazyMount}
        modal={modal}
        onOpenChange={onOpenChange}
        open={open}
        positioning={positioning}
        unmountOnExit={unmountOnExit}
        {...rest}
      />
    </ToggleTooltipContext.Provider>
  );
};

export const ToggleTooltipTrigger = (
  props: React.ComponentProps<typeof ArkPopover.Trigger>
) => {
  const { onOpenChange, openOnHover, openDelay, closeDelay, openedByRef } =
    useToggleTooltip();

  const openTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined
  );
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined
  );

  const handleMouseEnter = useCallback(() => {
    if (!openOnHover) {
      return;
    }
    clearTimeout(closeTimeoutRef.current);
    openTimeoutRef.current = setTimeout(() => {
      openedByRef.current = "hover";
      onOpenChange({ open: true });
    }, openDelay);
  }, [openOnHover, openDelay, onOpenChange, openedByRef]);

  const handleMouseLeave = useCallback(() => {
    if (!openOnHover) {
      return;
    }
    clearTimeout(openTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => {
      if (openedByRef.current === "hover") {
        onOpenChange({ open: false });
        openedByRef.current = null;
      }
    }, closeDelay);
  }, [openOnHover, closeDelay, onOpenChange, openedByRef]);

  const hoverProps = openOnHover
    ? { onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave }
    : {};

  return (
    <ArkPopover.Trigger
      data-slot="toggle-tooltip-trigger"
      {...hoverProps}
      {...props}
    />
  );
};

export const ToggleTooltipContent = (
  props: React.ComponentProps<typeof ArkPopover.Content>
) => {
  const { className, children, ...rest } = props;

  return (
    <Portal>
      <ArkPopover.Positioner data-slot="toggle-tooltip-positioner">
        <ArkPopover.Content
          className={cn(
            "z-50 w-fit",
            "px-3 py-1.5",
            "bg-foreground",
            "text-background text-xs",
            "rounded-lg border shadow-md/5",
            "origin-(--transform-origin) animate-in",
            "fade-in-0 zoom-in-[98%]",
            "data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-[98%]",
            "data-[state=closed]:animate-out",
            "data-[placement=bottom]:slide-in-from-top-2",
            "data-[placement=left]:slide-in-from-end-2",
            "data-[placement=right]:slide-in-from-start-2",
            "data-[placement=top]:slide-in-from-bottom-2",
            className
          )}
          data-slot="toggle-tooltip-content"
          {...rest}
        >
          {children}
          <ToggleTooltipArrow />
        </ArkPopover.Content>
      </ArkPopover.Positioner>
    </Portal>
  );
};

export const ToggleTooltipArrow = (
  props: React.ComponentProps<typeof ArkPopover.Arrow>
) => {
  const { style, ...rest } = props;

  return (
    <ArkPopover.Arrow
      data-slot="toggle-tooltip-arrow"
      style={
        {
          "--arrow-background": "var(--foreground)",
          "--arrow-size": "calc(1.5 * var(--spacing))",
          ...style,
        } as React.CSSProperties
      }
      {...rest}
    >
      <ArkPopover.ArrowTip className="border-s border-t" />
    </ArkPopover.Arrow>
  );
};
