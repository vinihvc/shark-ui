import {
  Tooltip as ArkTooltip,
  useTooltipContext,
} from "@ark-ui/solid/tooltip";
import type { ComponentProps } from "solid-js";

import { cn } from "@/lib/utils";

export const useTooltip = useTooltipContext;

export const Tooltip = (props: ComponentProps<typeof ArkTooltip.Root>) => {
  const {
    positioning = {
      placement: "top",
    },
    lazyMount = true,
    unmountOnExit = true,
    closeDelay = 100,
    openDelay = 0,
    ...rest
  } = props;

  return (
    <ArkTooltip.Root
      closeDelay={closeDelay}
      data-slot="tooltip"
      lazyMount={lazyMount}
      openDelay={openDelay}
      positioning={positioning}
      unmountOnExit={unmountOnExit}
      {...rest}
    />
  );
};

export const TooltipTrigger = (
  props: ComponentProps<typeof ArkTooltip.Trigger>
) => <ArkTooltip.Trigger data-slot="tooltip-trigger" {...props} />;

export const TooltipContent = (
  props: ComponentProps<typeof ArkTooltip.Content>
) => {
  const { class: className, children, ...rest } = props;
  return (
    <>
      <ArkTooltip.Positioner data-slot="tooltip-positioner">
        <ArkTooltip.Content
          class={cn(
            "z-50 w-fit",
            "px-3 py-1.5",
            "bg-foreground",
            "text-background text-xs",
            "rounded-lg shadow-lg/5",
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
          data-slot="tooltip-content"
          {...rest}
        >
          {children}

          <TooltipArrow />
        </ArkTooltip.Content>
      </ArkTooltip.Positioner>
    </>
  );
};

export const TooltipArrow = (
  props: ComponentProps<typeof ArkTooltip.Arrow>
) => {
  const { style, ...rest } = props;

  return (
    <ArkTooltip.Arrow
      data-slot="tooltip-arrow"
      style={
        {
          "--arrow-background": "var(--foreground)",
          "--arrow-size": "calc(1.5 * var(--spacing))",
          ...style,
        } as React.CSSProperties
      }
      {...rest}
    >
      <ArkTooltip.ArrowTip />
    </ArkTooltip.Arrow>
  );
};
