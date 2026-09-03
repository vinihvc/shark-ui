"use client";

import { ark } from "@ark-ui/react/factory";
import { createContext } from "@ark-ui/react/utils";
import {
  BanIcon,
  CircleCheckIcon,
  CircleXIcon,
  LoaderCircleIcon,
} from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleIndicator,
  CollapsibleTrigger,
} from "@/registry/react/components/collapsible";

export type ToolResultStatus = "cancelled" | "error" | "running" | "success";

interface ToolResultContextValue {
  /**
   * The status of the tool result.
   */
  status: ToolResultStatus;
}

const [ToolResultProvider, useToolResult] =
  createContext<ToolResultContextValue>({
    name: "ToolResultContext",
    providerName: "ToolResult",
  });

const STATUS_LABEL: Record<ToolResultStatus, string> = {
  cancelled: "Cancelled",
  error: "Failed",
  running: "Running",
  success: "Completed",
};

const STATUS_CLASS: Record<ToolResultStatus, string> = {
  cancelled: "text-muted-foreground",
  error: "text-destructive-foreground",
  running: "text-info-foreground",
  success: "text-success-foreground",
};

const ToolResultStatusIcon = (props: { status: ToolResultStatus }) => {
  const { status } = props;

  switch (status) {
    case "cancelled":
      return <BanIcon aria-hidden="true" className="size-3" />;
    case "error":
      return <CircleXIcon aria-hidden="true" className="size-3" />;
    case "running":
      return (
        <LoaderCircleIcon
          aria-hidden="true"
          className="size-3 animate-spin motion-reduce:animate-none"
        />
      );
    case "success":
      return <CircleCheckIcon aria-hidden="true" className="size-3" />;
    default: {
      const _exhaustive: never = status;
      return _exhaustive;
    }
  }
};

interface ToolResultProps
  extends React.ComponentProps<typeof Collapsible>,
    ToolResultContextValue {}

export const ToolResult = (props: ToolResultProps) => {
  const { defaultOpen, status = "success", className, ...rest } = props;

  const value = React.useMemo(() => ({ status }), [status]);

  return (
    <ToolResultProvider value={value}>
      <Collapsible
        aria-busy={status === "running"}
        className={cn("w-full min-w-0 text-sm", className)}
        data-slot="tool-result"
        data-status={status}
        defaultOpen={defaultOpen ?? status === "running"}
        {...rest}
      />
    </ToolResultProvider>
  );
};

export const ToolResultTrigger = (
  props: React.ComponentProps<typeof CollapsibleTrigger>
) => {
  const { className, children, ...rest } = props;

  return (
    <CollapsibleTrigger
      className={cn(
        "min-h-9 w-full min-w-0",
        "flex items-center gap-2",
        "py-1",
        "text-start",
        "rounded-md",
        "outline-none",
        "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
      data-slot="tool-result-trigger"
      {...rest}
    >
      <span className="flex min-w-0 flex-1 items-center gap-2">{children}</span>
      <ToolResultStatus />
      <CollapsibleIndicator className="size-3.5 shrink-0 text-muted-foreground/50" />
    </CollapsibleTrigger>
  );
};

export const ToolResultTitle = (
  props: React.ComponentProps<typeof ark.span>
) => {
  const { className, ...rest } = props;

  return (
    <ark.span
      className={cn(
        "min-w-0",
        "truncate font-medium text-foreground",
        className
      )}
      data-slot="tool-result-title"
      {...rest}
    />
  );
};

export const ToolResultMeta = (
  props: React.ComponentProps<typeof ark.span>
) => {
  const { className, ...rest } = props;

  return (
    <ark.span
      className={cn("shrink-0", "text-muted-foreground text-xs", className)}
      data-slot="tool-result-meta"
      {...rest}
    />
  );
};

export const ToolResultName = (
  props: React.ComponentProps<typeof ark.span>
) => {
  const { className, ...rest } = props;

  return (
    <ark.span
      className={cn(
        "min-w-0",
        "truncate font-mono text-muted-foreground text-xs",
        className
      )}
      data-slot="tool-result-name"
      {...rest}
    />
  );
};

export const ToolResultStatus = (
  props: React.ComponentProps<typeof ark.span>
) => {
  const { className, children, ...rest } = props;

  const { status } = useToolResult();

  return (
    <ark.span
      className={cn(
        "inline-flex shrink-0 items-center gap-1",
        "font-medium text-xs",
        STATUS_CLASS[status],
        className
      )}
      data-slot="tool-result-status"
      {...rest}
    >
      <ToolResultStatusIcon status={status} />
      {children ?? STATUS_LABEL[status]}
    </ark.span>
  );
};

export const ToolResultContent = (
  props: React.ComponentProps<typeof CollapsibleContent>
) => {
  const { className, ...rest } = props;

  return (
    <CollapsibleContent
      className={cn("pt-1.5", className)}
      data-slot="tool-result-content"
      {...rest}
    />
  );
};
