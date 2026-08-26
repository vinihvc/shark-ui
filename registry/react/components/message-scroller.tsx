"use client";

import { ark } from "@ark-ui/react/factory";
import { ScrollArea as ArkScrollArea } from "@ark-ui/react/scroll-area";
import { ArrowDownIcon } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";
import { Button, type ButtonProps } from "@/registry/react/components/button";
import {
  ScrollAreaScrollbar,
  useScrollArea,
} from "@/registry/react/components/scroll-area";

export const useMessageScroller = useScrollArea;

export const MessageScroller = (
  props: React.ComponentProps<typeof ArkScrollArea.Root>
) => {
  const { className, children, ...rest } = props;

  return (
    <ArkScrollArea.Root
      className={cn(
        "group/message-scroller relative flex size-full min-h-0 flex-col overflow-hidden [--fade-size:1.5rem]",
        className
      )}
      data-slot="message-scroller"
      {...rest}
    >
      {children}
      <ScrollAreaScrollbar orientation="vertical" />
      <ArkScrollArea.Corner data-slot="message-scroller-corner" />
    </ArkScrollArea.Root>
  );
};

export const MessageScrollerViewport = (
  props: React.ComponentProps<typeof ArkScrollArea.Viewport>
) => {
  const { className, ...rest } = props;

  return (
    <ArkScrollArea.Viewport
      className={cn(
        "scrollbar-none size-full min-h-0 min-w-0 overflow-y-auto overscroll-contain outline-none contain-content",
        "mask-t-from-[calc(100%-var(--fade-size))] mask-b-from-[calc(100%-var(--fade-size))]",
        "data-at-top:mask-t-from-100% data-at-bottom:mask-b-from-100%",
        "transition-shadow motion-reduce:transition-none!",
        className
      )}
      data-slot="message-scroller-viewport"
      {...rest}
    />
  );
};

export const MessageScrollerContent = (
  props: React.ComponentProps<typeof ArkScrollArea.Content>
) => {
  const { className, ...rest } = props;

  return (
    <ArkScrollArea.Content
      className={cn("flex h-max min-h-full flex-col gap-8", className)}
      data-slot="message-scroller-content"
      {...rest}
    />
  );
};

export const MessageScrollerItem = (
  props: React.ComponentProps<typeof ark.div>
) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "min-w-0 shrink-0 [contain-intrinsic-size:auto_10rem] [content-visibility:auto]",
        className
      )}
      data-slot="message-scroller-item"
      {...rest}
    />
  );
};

interface MessageScrollerButtonProps extends ButtonProps {
  direction?: "end" | "start";
}

export const MessageScrollerButton = (props: MessageScrollerButtonProps) => {
  const {
    direction = "end",
    className,
    children,
    onClick,
    variant = "secondary",
    size = "icon-sm",
    ...rest
  } = props;
  const scrollArea = useScrollArea();
  const isActive =
    direction === "end" ? !scrollArea.isAtBottom : !scrollArea.isAtTop;

  let ariaLabel: string | undefined;
  if (!children) {
    ariaLabel = direction === "end" ? "Scroll to end" : "Scroll to start";
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
    scrollArea.scrollToEdge({
      behavior: "smooth",
      edge: direction === "end" ? "bottom" : "top",
    });
  };

  return (
    <Button
      aria-label={ariaLabel}
      className={cn(
        "absolute start-1/2 -translate-x-1/2 border-border bg-background text-foreground rtl:translate-x-1/2",
        "transition-[translate,scale,opacity] duration-200",
        "hover:bg-muted hover:text-foreground",
        "data-[active=false]:pointer-events-none data-[active=false]:scale-95 data-[active=false]:opacity-0 data-[active=false]:duration-400",
        "data-[active=true]:translate-y-0 data-[active=true]:scale-100 data-[active=true]:opacity-100",
        "data-[direction=end]:data-[active=false]:translate-y-full data-[direction=end]:bottom-4",
        "data-[direction=start]:data-[active=false]:-translate-y-full data-[direction=start]:top-4",
        "data-[direction=start]:[&_svg]:rotate-180",
        className
      )}
      data-active={isActive}
      data-direction={direction}
      data-slot="message-scroller-button"
      size={size}
      variant={variant}
      {...rest}
      onClick={handleClick}
    >
      {children ?? <ArrowDownIcon aria-hidden="true" />}
    </Button>
  );
};
