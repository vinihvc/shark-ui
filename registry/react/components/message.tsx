"use client";

import { ark } from "@ark-ui/react/factory";
import type React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/react/components/tooltip";

export const MessageGroup = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn("flex min-w-0 flex-col gap-2", className)}
      data-slot="message-group"
      {...rest}
    />
  );
};

interface MessageProps extends React.ComponentProps<typeof ark.div> {
  align?: "end" | "start";
}

export const Message = (props: MessageProps) => {
  const { align = "start", className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "group/message relative flex w-full min-w-0 gap-2 text-sm data-[align=end]:flex-row-reverse",
        className
      )}
      data-align={align}
      data-slot="message"
      {...rest}
    />
  );
};

export const MessageAvatar = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "flex w-fit min-w-8 shrink-0 items-center justify-center self-end overflow-hidden rounded-full bg-muted group-has-data-[slot=message-footer]/message:-translate-y-8",
        className
      )}
      data-slot="message-avatar"
      {...rest}
    />
  );
};

export const MessageContent = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "wrap-break-word flex w-full min-w-0 flex-col gap-2.5 group-data-[align=end]/message:*:data-slot:self-end",
        className
      )}
      data-slot="message-content"
      {...rest}
    />
  );
};

export const MessageHeader = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "flex min-w-0 max-w-full items-center px-3 font-medium text-muted-foreground text-xs group-has-data-[variant=ghost]/message:px-0",
        className
      )}
      data-slot="message-header"
      {...rest}
    />
  );
};

export const MessageFooter = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "flex min-w-0 max-w-full items-center px-3 font-medium text-muted-foreground text-xs group-has-data-[variant=ghost]/message:px-0 group-data-[align=end]/message:justify-end",
        className
      )}
      data-slot="message-footer"
      {...rest}
    />
  );
};

export const MessageActions = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn("flex items-center gap-1", className)}
      data-slot="message-actions"
      {...rest}
    />
  );
};

interface MessageActionProps extends React.ComponentProps<typeof Button> {
  label?: string;
  tooltip?: string;
}

export const MessageAction = (props: MessageActionProps) => {
  const {
    children,
    className,
    label,
    size = "icon-xs",
    tooltip,
    type = "button",
    variant = "ghost",
    ...rest
  } = props;

  const accessibleLabel = label ?? tooltip;
  const button = (
    <Button
      aria-label={accessibleLabel}
      className={className}
      data-slot="message-action"
      size={size}
      type={type}
      variant={variant}
      {...rest}
    >
      {children}
    </Button>
  );

  if (!tooltip) {
    return button;
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent>{tooltip}</TooltipContent>
    </Tooltip>
  );
};
