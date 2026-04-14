import { Popover as ArkPopover } from "@ark-ui/solid/popover";
import type { ComponentProps } from "solid-js";

import { cn } from "@/lib/utils";
import { Popover, PopoverTrigger } from "@/registry/solid/components/popover";

export const ToggleTooltip = (
  props: ComponentProps<typeof ArkPopover.Root>
) => {
  const {
    positioning = { placement: "top" },
    lazyMount = true,
    unmountOnExit = true,
    modal = false,
    open: controlledOpen,
    ...rest
  } = props;

  return (
    <Popover
      data-slot="toggle-tooltip"
      lazyMount={lazyMount}
      modal={modal}
      positioning={positioning}
      unmountOnExit={unmountOnExit}
      {...rest}
    />
  );
};

export const ToggleTooltipTrigger = (
  props: ComponentProps<typeof ArkPopover.Trigger>
) => {
  return <PopoverTrigger data-slot="toggle-tooltip-trigger" {...props} />;
};

export const ToggleTooltipContent = (
  props: ComponentProps<typeof ArkPopover.Content>
) => {
  const { class: className, children, ...rest } = props;

  return (
    <>
      <ArkPopover.Positioner data-slot="toggle-tooltip-positioner">
        <ArkPopover.Content
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
          data-slot="toggle-tooltip-content"
          {...rest}
        >
          {children}
          <ToggleTooltipArrow />
        </ArkPopover.Content>
      </ArkPopover.Positioner>
    </>
  );
};

export const ToggleTooltipArrow = (
  props: ComponentProps<typeof ArkPopover.Arrow>
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
      <ArkPopover.ArrowTip />
    </ArkPopover.Arrow>
  );
};
