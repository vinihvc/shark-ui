import {
  HoverCard as ArkHoverCard,
  useHoverCardContext,
} from "@ark-ui/solid/hover-card";
import type { ComponentProps } from "solid-js";

import { cn } from "@/lib/utils";

export const useHoverCard = useHoverCardContext;

interface HoverCardProps extends ComponentProps<typeof ArkHoverCard.Root> {}

export const HoverCard = (props: HoverCardProps) => {
  const {
    lazyMount = true,
    unmountOnExit = true,
    closeDelay = 100,
    openDelay = 10,
    positioning = { placement: "top" },
    ...rest
  } = props;

  return (
    <ArkHoverCard.Root
      closeDelay={closeDelay}
      data-slot="hover-card"
      lazyMount={lazyMount}
      openDelay={openDelay}
      positioning={positioning}
      unmountOnExit={unmountOnExit}
      {...rest}
    />
  );
};

export const HoverCardTrigger = (
  props: ComponentProps<typeof ArkHoverCard.Trigger>
) => <ArkHoverCard.Trigger data-slot="hover-card-trigger" {...props} />;

export const HoverCardContent = (
  props: ComponentProps<typeof ArkHoverCard.Content>
) => {
  const { class: className, children, ...rest } = props;

  return (
    <>
      <ArkHoverCard.Positioner data-slot="hover-card-positioner">
        <ArkHoverCard.Content
          class={cn(
            "z-50",
            "w-64",
            "p-4",
            "bg-popover",
            "text-popover-foreground",
            "origin-(--transform-origin)",
            "rounded-xl border shadow-lg/5",
            "outline-hidden",
            "data-[state=closed]:zoom-out-[98%] data-[state=open]:zoom-in-[98%]",
            "data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
            "data-[state=closed]:animate-out data-[state=open]:animate-in",
            "data-[placement=bottom]:slide-in-from-top-2",
            "data-[placement=left]:slide-in-from-end-2",
            "data-[placement=right]:slide-in-from-start-2",
            "data-[placement=top]:slide-in-from-bottom-2",
            className
          )}
          data-slot="hover-card-content"
          {...rest}
        >
          {children}

          <HoverCardArrow />
        </ArkHoverCard.Content>
      </ArkHoverCard.Positioner>
    </>
  );
};

export const HoverCardArrow = (
  props: ComponentProps<typeof ArkHoverCard.Arrow>
) => {
  const { style, ...rest } = props;

  return (
    <ArkHoverCard.Arrow
      data-slot="hover-card-arrow"
      style={
        {
          "--arrow-background": "var(--popover)",
          "--arrow-size": "calc(1.5 * var(--spacing))",
          ...style,
        } as React.CSSProperties
      }
      {...rest}
    >
      <ArkHoverCard.ArrowTip class="border-s border-t" />
    </ArkHoverCard.Arrow>
  );
};
