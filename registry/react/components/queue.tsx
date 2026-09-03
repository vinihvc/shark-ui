"use client";

import { ark } from "@ark-ui/react/factory";
import { ChevronDownIcon } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/react/components/collapsible";

export const Queue = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn("flex w-full min-w-0 flex-col gap-2", className)}
      data-slot="queue"
      {...rest}
    />
  );
};

export const QueueSection = (
  props: React.ComponentProps<typeof Collapsible>
) => {
  const { className, defaultOpen = true, ...rest } = props;

  return (
    <Collapsible
      className={cn(
        "rounded-xl border bg-card text-card-foreground",
        className
      )}
      data-slot="queue-section"
      defaultOpen={defaultOpen}
      {...rest}
    />
  );
};

export const QueueSectionTrigger = (
  props: React.ComponentProps<typeof CollapsibleTrigger>
) => {
  const { className, children, ...rest } = props;

  return (
    <CollapsibleTrigger
      className={cn(
        "flex w-full items-center justify-between gap-2 px-3 py-2 text-start text-sm",
        className
      )}
      data-slot="queue-section-trigger"
      {...rest}
    >
      {children}
      <ChevronDownIcon
        aria-hidden="true"
        className="size-4 shrink-0 text-muted-foreground transition-transform group-data-[state=open]/collapsible:rotate-180"
      />
    </CollapsibleTrigger>
  );
};

interface QueueSectionLabelProps extends React.ComponentProps<typeof ark.span> {
  /**
   * The number of items in the queue section.
   */
  count?: number;
  /**
   * The icon of the queue section.
   */
  icon?: React.ReactNode;
  /**
   * The label of the queue section.
   */
  label: string;
}

export const QueueSectionLabel = (props: QueueSectionLabelProps) => {
  const { className, count, icon, label, ...rest } = props;

  return (
    <ark.span
      className={cn("flex min-w-0 items-center gap-2", className)}
      data-slot="queue-section-label"
      {...rest}
    >
      {icon}
      <span className="truncate font-medium">
        {count === undefined ? label : `${count} ${label}`}
      </span>
    </ark.span>
  );
};

export const QueueSectionContent = (
  props: React.ComponentProps<typeof CollapsibleContent>
) => {
  const { className, ...rest } = props;

  return (
    <CollapsibleContent
      className={cn("border-t px-3 py-2", className)}
      data-slot="queue-section-content"
      {...rest}
    />
  );
};

export const QueueList = (props: React.ComponentProps<typeof ark.ul>) => {
  const { className, ...rest } = props;

  return (
    <ark.ul
      className={cn("flex flex-col gap-1", className)}
      data-slot="queue-list"
      {...rest}
    />
  );
};

export const QueueItem = (props: React.ComponentProps<typeof ark.li>) => {
  const { className, ...rest } = props;

  return (
    <ark.li
      className={cn(
        "flex min-w-0 items-start gap-2 rounded-lg px-2 py-1.5 text-sm hover:bg-muted/60",
        className
      )}
      data-slot="queue-item"
      {...rest}
    />
  );
};

interface QueueItemIndicatorProps
  extends React.ComponentProps<typeof ark.span> {
  /**
   * Whether the item is completed.
   */
  completed?: boolean;
}

export const QueueItemIndicator = (props: QueueItemIndicatorProps) => {
  const { className, completed = false, ...rest } = props;

  return (
    <ark.span
      aria-hidden="true"
      className={cn(
        "mt-1.5 size-2 shrink-0 rounded-full",
        completed ? "bg-muted-foreground/40" : "bg-primary",
        className
      )}
      data-completed={completed ? "" : undefined}
      data-slot="queue-item-indicator"
      {...rest}
    />
  );
};

interface QueueItemContentProps extends React.ComponentProps<typeof ark.span> {
  /**
   * Whether the item is completed.
   */
  completed?: boolean;
}

export const QueueItemContent = (props: QueueItemContentProps) => {
  const { completed = false, className, ...rest } = props;

  return (
    <span
      className={cn(
        "wrap-break-word min-w-0 flex-1",
        completed && "text-muted-foreground line-through",
        className
      )}
      data-slot="queue-item-content"
      {...rest}
    />
  );
};

export const QueueItemActions = (
  props: React.ComponentProps<typeof ark.div>
) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn("ms-auto flex shrink-0 items-center gap-1", className)}
      data-slot="queue-item-actions"
      {...rest}
    />
  );
};

export const QueueItemAction = (props: React.ComponentProps<typeof Button>) => {
  const {
    size = "icon-xs",
    type = "button",
    variant = "ghost",
    ...rest
  } = props;

  return (
    <Button
      data-slot="queue-item-action"
      size={size}
      type={type}
      variant={variant}
      {...rest}
    />
  );
};
