import { ark } from "@ark-ui/solid/factory";
import {
  FloatingPanel as ArkFloatingPanel,
  useFloatingPanelContext,
} from "@ark-ui/solid/floating-panel";
import { Maximize, MaximizeIcon, MinimizeIcon, MinusIcon } from "lucide-solid";
import type { ComponentProps } from "solid-js";

import { cn } from "@/lib/utils";
import { Button, type ButtonProps } from "@/registry/solid/components/button";
import { ScrollArea } from "@/registry/solid/components/scroll-area";

export const useFloatingPanel = useFloatingPanelContext;

export const FloatingPanel = (
  props: ComponentProps<typeof ArkFloatingPanel.Root>
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
  props: ComponentProps<typeof ArkFloatingPanel.Trigger>
) => <ArkFloatingPanel.Trigger data-slot="floating-panel-trigger" {...props} />;

interface FloatingPanelContentProps
  extends ComponentProps<typeof ArkFloatingPanel.Content> {
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
    <>
      <ArkFloatingPanel.Positioner
        class="inset-s-(--x) top-(--y) z-50"
        data-slot="floating-panel-positioner"
      >
        <ArkFloatingPanel.Content
          class={cn(
            "[--space:--spacing(4)]",
            "group/floating-panel",
            "relative",
            "flex flex-col",
            "h-(--height) min-h-0 w-(--width)",
            "bg-popover",
            "text-popover-foreground",
            "rounded-2xl border shadow-lg/5",
            "transition-[scale,opacity,translate] duration-200 ease-in-out will-change-transform",
            "data-[state=open]:fade-in-0 data-[state=open]:zoom-in-[98%] data-[state=open]:animate-in",
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
    </>
  );
};

export const FloatingPanelDragTrigger = (
  props: ComponentProps<typeof ArkFloatingPanel.DragTrigger>
) => {
  return (
    <ArkFloatingPanel.DragTrigger
      data-slot="floating-panel-drag-trigger"
      {...props}
    />
  );
};

export const FloatingPanelHeader = (
  props: ComponentProps<typeof ArkFloatingPanel.Header>
) => {
  const { class: className, ...rest } = props;

  return (
    <FloatingPanelDragTrigger>
      <ArkFloatingPanel.Header
        class={cn(
          "relative",
          "min-w-0",
          "px-(--space) py-[calc(var(--space)*0.5)]",
          "flex flex-1 shrink-0 items-center gap-2",
          "bg-muted/48",
          "rounded-t-2xl border-b",
          "overflow-hidden",
          "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
          className
        )}
        {...rest}
      />
    </FloatingPanelDragTrigger>
  );
};

export const FloatingPanelControl = (
  props: ComponentProps<typeof ArkFloatingPanel.Control>
) => {
  const { class: className, ...rest } = props;

  return (
    <ArkFloatingPanel.Control
      class={cn("ms-auto flex items-center gap-2 rtl:me-auto", className)}
      {...rest}
    />
  );
};

interface FloatingPanelStageTriggerProps
  extends Omit<ComponentProps<typeof ArkFloatingPanel.StageTrigger>, "stage">,
    ButtonProps {}

export const FloatingPanelMinimize = (
  props: FloatingPanelStageTriggerProps
) => {
  const { size = "icon-xs", variant = "ghost", ...rest } = props;

  return (
    <ArkFloatingPanel.StageTrigger {...rest} asChild stage="minimized">
      <Button aria-label="Minimize" size={size} variant={variant}>
        <MinusIcon />
      </Button>
    </ArkFloatingPanel.StageTrigger>
  );
};

export const FloatingPanelMaximize = (
  props: FloatingPanelStageTriggerProps
) => {
  const { size = "icon-xs", variant = "ghost", ...rest } = props;

  return (
    <ArkFloatingPanel.StageTrigger {...rest} asChild stage="maximized">
      <Button aria-label="Maximize" size={size} variant={variant}>
        <Maximize />
      </Button>
    </ArkFloatingPanel.StageTrigger>
  );
};

export const FloatingPanelRestore = (props: FloatingPanelStageTriggerProps) => {
  const { size = "icon-xs", variant = "outline", ...rest } = props;

  return (
    <ArkFloatingPanel.StageTrigger {...rest} asChild stage="default">
      <Button aria-label="Restore" size={size} variant={variant}>
        <MinimizeIcon class="hidden group-data-maximized/floating-panel:block" />
        <MaximizeIcon class="hidden group-data-minimized/floating-panel:block" />
      </Button>
    </ArkFloatingPanel.StageTrigger>
  );
};

export const FloatingPanelTitle = (
  props: ComponentProps<typeof ArkFloatingPanel.Title>
) => {
  const { class: className, ...rest } = props;

  return (
    <ArkFloatingPanel.Title
      class={cn(
        "min-w-0 flex-1",
        "flex items-center gap-2",
        "truncate whitespace-nowrap font-medium text-sm leading-none",
        className
      )}
      data-slot="floating-panel-title"
      {...rest}
    />
  );
};

export const FloatingPanelResizeTrigger = (
  props: ComponentProps<typeof ArkFloatingPanel.ResizeTrigger>
) => (
  <ArkFloatingPanel.ResizeTrigger
    data-slot="floating-panel-resize-trigger"
    {...props}
  />
);

export const FloatingPanelStageTrigger = (
  props: ComponentProps<typeof ArkFloatingPanel.StageTrigger>
) => (
  <ArkFloatingPanel.StageTrigger
    data-slot="floating-panel-stage-trigger"
    {...props}
  />
);

export const FloatingPanelCloseTrigger = (
  props: ComponentProps<typeof ArkFloatingPanel.CloseTrigger>
) => (
  <ArkFloatingPanel.CloseTrigger
    data-slot="floating-panel-close-trigger"
    {...props}
  />
);

interface FloatingPanelBodyProps
  extends ComponentProps<typeof ArkFloatingPanel.Body> {
  /**
   * Add a fade effect to the scroll area
   *
   * @default false
   */
  scrollFade?: boolean;
}

export const FloatingPanelBody = (props: FloatingPanelBodyProps) => {
  const { scrollFade = false, className, children, ...rest } = props;

  return (
    <ScrollArea scrollFade={scrollFade}>
      <ArkFloatingPanel.Body
        class={cn(
          "flex flex-col gap-4",
          "p-(--space)",
          "overflow-auto",
          "in-[[data-slot=floating-panel-content]:has([data-slot=floating-panel-footer]:not(.border-t))]:pb-1",
          className
        )}
        data-slot="floating-panel-body"
        {...rest}
      >
        {children}
      </ArkFloatingPanel.Body>
    </ScrollArea>
  );
};

export const FloatingPanelFooter = (props: ComponentProps<typeof ark.div>) => {
  const { class: className, ...rest } = props;

  return (
    <ark.div
      class={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        "sm:rounded-b-[calc(var(--radius-2xl)-1px)]",
        "px-(--space) py-4",
        "bg-muted/48",
        "border-t",
        className
      )}
      data-slot="floating-panel-footer"
      {...rest}
    />
  );
};
