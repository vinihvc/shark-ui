"use client";

import { Portal } from "@ark-ui/react";
import { FloatingPanel as ArkFloatingPanel } from "@ark-ui/react/floating-panel";
import { Maximize, MinusIcon, SquareArrowOutUpRight } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./button";

export const FloatingPanel = (
  props: React.ComponentProps<typeof ArkFloatingPanel.Root>
) => {
  const { lazyMount = true, unmountOnExit = true, ...rest } = props;

  return (
    <ArkFloatingPanel.Root
      data-slot="floating-panel"
      lazyMount={lazyMount}
      unmountOnExit={unmountOnExit}
      {...rest}
    />
  );
};

export const FloatingPanelTrigger = (
  props: React.ComponentProps<typeof ArkFloatingPanel.Trigger>
) => <ArkFloatingPanel.Trigger data-slot="floating-panel-trigger" {...props} />;

interface FloatingPanelContentProps
  extends React.ComponentProps<typeof ArkFloatingPanel.Content> {
  /**
   * Enable resizable panel
   *
   * @default true
   */
  resizable?: boolean;
}

export const FloatingPanelContent = (props: FloatingPanelContentProps) => {
  const { resizable = true, className, children, ...rest } = props;

  return (
    <Portal>
      <ArkFloatingPanel.Positioner
        className="inset-s-(--x) top-(--y) z-50"
        data-slot="floating-panel-positioner"
      >
        <ArkFloatingPanel.Content
          className={cn(
            "relative",
            "h-(--height) w-(--width)",
            "ring-ring/40 focus-visible:outline-none focus-visible:ring-1",
            "rounded-lg border bg-background shadow-lg",
            className
          )}
          data-slot="floating-panel-content"
          {...rest}
        >
          {children}

          {resizable && (
            <>
              <FloatingPanelResizeTrigger axis="n" />
              <FloatingPanelResizeTrigger axis="e" />
              <FloatingPanelResizeTrigger axis="w" />
              <FloatingPanelResizeTrigger axis="s" />
              <FloatingPanelResizeTrigger axis="ne" />
              <FloatingPanelResizeTrigger axis="se" />
              <FloatingPanelResizeTrigger axis="sw" />
              <FloatingPanelResizeTrigger axis="nw" />
            </>
          )}
        </ArkFloatingPanel.Content>
      </ArkFloatingPanel.Positioner>
    </Portal>
  );
};

export const FloatingPanelHeader = (
  props: React.ComponentProps<typeof ArkFloatingPanel.Header>
) => {
  const { className, ...rest } = props;

  return (
    <ArkFloatingPanel.DragTrigger>
      <ArkFloatingPanel.Header
        className={cn(
          "relative flex items-center justify-between gap-2 rounded-t-lg bg-card p-2 [&_svg]:pointer-events-none [&_svg]:size-5",
          className
        )}
        {...rest}
      />
    </ArkFloatingPanel.DragTrigger>
  );
};

export const FloatingPanelControl = (
  props: React.ComponentProps<typeof ArkFloatingPanel.Control>
) => {
  const { className, ...rest } = props;

  return (
    <ArkFloatingPanel.Control
      className={cn("flex items-center gap-2", className)}
      {...rest}
    />
  );
};

interface FloatingPanelMinimizeProps
  extends Omit<
    React.ComponentProps<typeof ArkFloatingPanel.StageTrigger>,
    "stage"
  > {}

export const FloatingPanelMinimize = (props: FloatingPanelMinimizeProps) => {
  const { asChild, ...rest } = props;

  return (
    <ArkFloatingPanel.StageTrigger {...rest} asChild stage="minimized">
      <Button
        aria-label="Minimize"
        asChild={asChild}
        size="icon-sm"
        variant="ghost"
      >
        <MinusIcon />
      </Button>
    </ArkFloatingPanel.StageTrigger>
  );
};

interface FloatingPanelMaximizeProps
  extends Omit<
    React.ComponentProps<typeof ArkFloatingPanel.StageTrigger>,
    "stage"
  > {}

export const FloatingPanelMaximize = (props: FloatingPanelMaximizeProps) => {
  const { asChild, ...rest } = props;

  return (
    <ArkFloatingPanel.StageTrigger {...rest} asChild stage="maximized">
      <Button
        aria-label="Maximize"
        asChild={asChild}
        size="icon-sm"
        variant="ghost"
      >
        <Maximize />
      </Button>
    </ArkFloatingPanel.StageTrigger>
  );
};

interface FloatingPanelRestoreProps
  extends Omit<
    React.ComponentProps<typeof ArkFloatingPanel.StageTrigger>,
    "stage"
  > {}

export const FloatingPanelRestore = (props: FloatingPanelRestoreProps) => {
  const { asChild, ...rest } = props;

  return (
    <ArkFloatingPanel.StageTrigger {...rest} asChild stage="default">
      <Button
        aria-label="Restore"
        asChild={asChild}
        size="icon-sm"
        variant="outline"
      >
        <SquareArrowOutUpRight />
      </Button>
    </ArkFloatingPanel.StageTrigger>
  );
};

export const FloatingPanelTitle = (
  props: React.ComponentProps<typeof ArkFloatingPanel.Title>
) => {
  const { className, ...rest } = props;

  return (
    <ArkFloatingPanel.Title
      className={cn(
        "flex items-center gap-2 font-medium text-base leading-none tracking-tight",
        className
      )}
      {...rest}
    />
  );
};

export const FloatingPanelResizeTrigger = (
  props: React.ComponentProps<typeof ArkFloatingPanel.ResizeTrigger>
) => (
  <ArkFloatingPanel.ResizeTrigger
    data-slot="floating-panel-resize-trigger"
    {...props}
  />
);

export const FloatingPanelStageTrigger = (
  props: React.ComponentProps<typeof ArkFloatingPanel.StageTrigger>
) => (
  <ArkFloatingPanel.StageTrigger
    data-slot="floating-panel-stage-trigger"
    {...props}
  />
);

export const FloatingPanelClose = (
  props: React.ComponentProps<typeof ArkFloatingPanel.CloseTrigger>
) => (
  <ArkFloatingPanel.CloseTrigger
    data-slot="floating-panel-close-trigger"
    {...props}
  />
);

export const FloatingPanelBody = (
  props: React.ComponentProps<typeof ArkFloatingPanel.Body>
) => {
  const { className, ...rest } = props;

  return (
    <ArkFloatingPanel.Body
      className={cn("flex flex-col gap-4 p-4", className)}
      data-slot="floating-panel-body"
      {...rest}
    />
  );
};
