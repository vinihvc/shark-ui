"use client";

import { ark } from "@ark-ui/react/factory";
import { Popover as ArkPopover } from "@ark-ui/react/popover";
import { Portal } from "@ark-ui/react/portal";
import React from "react";
import { tv } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { Badge } from "@/registry/react/components/badge";
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

const defaultPositioning = { gutter: "16px", placement: "bottom" } as const;

const ActionBarContext = React.createContext(
  defaultPositioning as ActionBarPositioning
);

export interface ActionBarProps
  extends Omit<ArkPopover.RootProps, "positioning"> {
  /**
   * Placement and gutter of the action bar.
   */
  positioning?: ActionBarPositioning;
}

export const ActionBar = (props: ActionBarProps) => {
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

  const context = React.useMemo(
    () => ({ ...defaultPositioning, ...positioning }),
    [positioning]
  );

  return (
    <ActionBarContext.Provider value={context}>
      <ArkPopover.Root
        autoFocus={false}
        closeOnEscape={closeOnEscape}
        closeOnInteractOutside={false}
        defaultOpen={open === undefined ? defaultOpen : undefined}
        lazyMount={lazyMount}
        modal={false}
        open={open}
        unmountOnExit={unmountOnExit}
        {...rest}
      />
    </ActionBarContext.Provider>
  );
};

export interface ActionBarTriggerProps
  extends React.ComponentProps<typeof ArkPopover.Trigger> {}

export const ActionBarTrigger = (props: ActionBarTriggerProps) => (
  <ArkPopover.Trigger data-slot="action-bar-trigger" {...props} />
);

const actionBarPositionerVariants = tv({
  base: [
    "fixed inset-x-0 bottom-0 z-50",
    "flex",
    "px-4 pb-[calc(var(--gutter)+env(safe-area-inset-bottom,0))]",
    "pointer-events-none",
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
  const { className, ...rest } = props;

  const { placement, gutter } = _useActionBar();

  return (
    <Portal>
      <ark.div
        className={cn(actionBarPositionerVariants({ placement }))}
        data-placement={placement}
        data-slot="action-bar-positioner"
        style={{ "--gutter": gutter } as React.CSSProperties}
      >
        <ArkPopover.Content
          aria-label="Bulk actions"
          className={cn(
            "[--space:--spacing(2)]",
            "flex w-fit items-center gap-1",
            "rounded-xl border shadow-lg/5",
            "px-[calc(var(--space)+2px)] py-(--space)",
            "bg-popover",
            "text-popover-foreground",
            "pointer-events-auto",
            "data-[state=closed]:animate-out data-[state=open]:animate-in",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            "data-[state=open]:slide-in-from-bottom-2 data-[state=closed]:slide-out-to-bottom-2",
            "motion-reduce:animate-none!",
            className
          )}
          data-slot="action-bar-content"
          {...rest}
        />
      </ark.div>
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
  extends React.ComponentProps<typeof ArkPopover.CloseTrigger> {}

export const ActionBarClose = (props: ActionBarCloseProps) => {
  const { className, ...rest } = props;

  return (
    <ArkPopover.CloseTrigger
      aria-label="Close"
      className={cn(
        "opacity-64 transition-opacity",
        "hover:opacity-100",
        "motion-reduce:transition-none!",
        className
      )}
      data-slot="action-bar-close"
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
    throw new Error("ActionBarContext not found");
  }

  return context;
};
