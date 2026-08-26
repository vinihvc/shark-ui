"use client";

import { ark } from "@ark-ui/react/factory";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { Badge } from "@/registry/react/components/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleIndicator,
  CollapsibleTrigger,
} from "@/registry/react/components/collapsible";
import { Spinner } from "@/registry/react/components/spinner";

export type ToolStatus = "completed" | "error" | "pending" | "running";

const toolStatusLabel: Record<ToolStatus, string> = {
  completed: "Completed",
  error: "Error",
  pending: "Pending",
  running: "Running",
};

const toolStatusVariant = {
  completed: "success",
  error: "destructive",
  pending: "outline",
  running: "info",
} as const;

interface ToolProps extends React.ComponentProps<typeof Collapsible> {
  status?: ToolStatus;
}

export const Tool = (props: ToolProps) => {
  const { className, defaultOpen, status = "completed", ...rest } = props;

  return (
    <Collapsible
      className={cn(
        "w-full min-w-0 overflow-hidden rounded-xl border bg-card text-card-foreground",
        className
      )}
      data-slot="tool"
      data-status={status}
      defaultOpen={defaultOpen ?? status === "running"}
      {...rest}
    />
  );
};

export const ToolHeader = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "flex min-w-0 items-center gap-2 px-3 py-2 text-sm",
        className
      )}
      data-slot="tool-header"
      {...rest}
    />
  );
};

export const ToolTrigger = (
  props: React.ComponentProps<typeof CollapsibleTrigger>
) => {
  const { className, children, ...rest } = props;

  return (
    <CollapsibleTrigger
      className={cn(
        "flex w-full min-w-0 items-center gap-2 rounded-none px-3 py-2 text-start text-sm",
        className
      )}
      data-slot="tool-trigger"
      {...rest}
    >
      {children}
      <CollapsibleIndicator className="ms-auto text-muted-foreground" />
    </CollapsibleTrigger>
  );
};

export const ToolName = (props: React.ComponentProps<typeof ark.span>) => {
  const { className, ...rest } = props;

  return (
    <ark.span
      className={cn("min-w-0 truncate font-medium font-mono", className)}
      data-slot="tool-name"
      {...rest}
    />
  );
};

interface ToolStatusBadgeProps
  extends Omit<React.ComponentProps<typeof Badge>, "variant"> {
  status?: ToolStatus;
}

export const ToolStatusBadge = (props: ToolStatusBadgeProps) => {
  const { className, status = "completed", children, ...rest } = props;

  return (
    <Badge
      className={cn("w-fit shrink-0", className)}
      data-slot="tool-status"
      size="sm"
      variant={toolStatusVariant[status]}
      {...rest}
    >
      {status === "running" ? <Spinner className="size-3" /> : null}
      {children ?? toolStatusLabel[status]}
    </Badge>
  );
};

export const ToolContent = (
  props: React.ComponentProps<typeof CollapsibleContent>
) => {
  const { className, ...rest } = props;

  return (
    <CollapsibleContent
      className={cn(
        "flex flex-col items-start gap-3 border-t px-3 py-3 text-sm",
        className
      )}
      data-slot="tool-content"
      {...rest}
    />
  );
};

const toolSectionVariants = tv({
  base: "flex flex-col items-start gap-1.5",
});

interface ToolInputProps
  extends React.ComponentProps<typeof ark.div>,
    VariantProps<typeof toolSectionVariants> {}

export const ToolInput = (props: ToolInputProps) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(toolSectionVariants(), className)}
      data-slot="tool-input"
      {...rest}
    />
  );
};

export const ToolOutput = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(toolSectionVariants(), className)}
      data-slot="tool-output"
      {...rest}
    />
  );
};

export const ToolLabel = (props: React.ComponentProps<typeof ark.span>) => {
  const { className, ...rest } = props;

  return (
    <ark.span
      className={cn("font-medium text-muted-foreground text-xs", className)}
      data-slot="tool-label"
      {...rest}
    />
  );
};

export const ToolFile = (props: React.ComponentProps<typeof Badge>) => {
  const { className, variant = "outline", ...rest } = props;

  return (
    <Badge
      className={cn("w-fit max-w-full font-mono", className)}
      data-slot="tool-file"
      size="sm"
      variant={variant}
      {...rest}
    />
  );
};
