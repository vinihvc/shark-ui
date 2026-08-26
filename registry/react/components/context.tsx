"use client";

import type React from "react";
import { createContext, useContext } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/registry/react/components/hover-card";
import { Progress } from "@/registry/react/components/progress";

export interface ContextUsage {
  cache?: number;
  input?: number;
  output?: number;
  reasoning?: number;
}

interface ContextValue {
  costLabel?: string;
  maxTokens: number;
  usage?: ContextUsage;
  usedTokens: number;
}

const ContextValueContext = createContext<ContextValue | null>(null);

const useContextValue = () => {
  const value = useContext(ContextValueContext);
  if (!value) {
    throw new Error("Context components must be used within Context");
  }
  return value;
};

const formatCompact = (value: number) =>
  new Intl.NumberFormat("en-US", { notation: "compact" }).format(value);

const formatPercent = (value: number) =>
  new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 1,
    style: "percent",
  }).format(value);

interface ContextProps extends React.ComponentProps<typeof HoverCard> {
  costLabel?: string;
  maxTokens: number;
  usage?: ContextUsage;
  usedTokens: number;
}

export const Context = (props: ContextProps) => {
  const { children, costLabel, maxTokens, usage, usedTokens, ...rest } = props;

  return (
    <ContextValueContext.Provider
      value={{ costLabel, maxTokens, usage, usedTokens }}
    >
      <HoverCard
        data-slot="context"
        positioning={{ placement: "top" }}
        {...rest}
      >
        {children}
      </HoverCard>
    </ContextValueContext.Provider>
  );
};

const ContextIcon = ({ className }: { className?: string }) => {
  const { maxTokens, usedTokens } = useContextValue();
  const radius = 10;
  const circumference = 2 * Math.PI * radius;
  const usedPercent = maxTokens > 0 ? usedTokens / maxTokens : 0;
  const dashOffset =
    circumference * (1 - Math.min(Math.max(usedPercent, 0), 1));

  return (
    <svg
      aria-hidden="true"
      className={cn("size-4 shrink-0", className)}
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="stroke-muted-foreground/24"
        cx="12"
        cy="12"
        r={radius}
        strokeWidth="2"
      />
      <circle
        className="origin-center -rotate-90 stroke-foreground"
        cx="12"
        cy="12"
        r={radius}
        strokeDasharray={circumference}
        strokeDashoffset={dashOffset}
        strokeLinecap="round"
        strokeWidth="2"
      />
    </svg>
  );
};

export const ContextTrigger = (
  props: React.ComponentProps<typeof HoverCardTrigger>
) => {
  const { children, asChild, ...rest } = props;
  const { maxTokens, usedTokens } = useContextValue();
  const usedPercent = maxTokens > 0 ? usedTokens / maxTokens : 0;

  if (children) {
    return (
      <HoverCardTrigger asChild={asChild} data-slot="context-trigger" {...rest}>
        {children}
      </HoverCardTrigger>
    );
  }

  return (
    <HoverCardTrigger asChild data-slot="context-trigger" {...rest}>
      <Button
        aria-label={`Context used ${formatPercent(usedPercent)}`}
        className="gap-1.5 font-normal text-muted-foreground"
        size="sm"
        type="button"
        variant="ghost"
      >
        <ContextIcon />
        <span>{formatPercent(usedPercent)}</span>
      </Button>
    </HoverCardTrigger>
  );
};

export const ContextContent = (
  props: React.ComponentProps<typeof HoverCardContent>
) => {
  const { className, ...rest } = props;

  return (
    <HoverCardContent
      className={cn("w-72 gap-0 p-0", className)}
      data-slot="context-content"
      {...rest}
    />
  );
};

export const ContextHeader = (props: React.ComponentProps<"div">) => {
  const { children, className, ...rest } = props;
  const { maxTokens, usedTokens } = useContextValue();
  const usedPercent = maxTokens > 0 ? usedTokens / maxTokens : 0;

  return (
    <div
      className={cn("flex flex-col gap-2 border-b p-3", className)}
      data-slot="context-header"
      {...rest}
    >
      {children ?? (
        <>
          <div className="flex items-center justify-between gap-2 text-xs">
            <span className="font-medium">{formatPercent(usedPercent)}</span>
            <span className="text-muted-foreground tabular-nums">
              {formatCompact(usedTokens)} / {formatCompact(maxTokens)}
            </span>
          </div>
          <Progress value={usedPercent * 100} />
        </>
      )}
    </div>
  );
};

export const ContextBody = (props: React.ComponentProps<"div">) => {
  const { className, ...rest } = props;

  return (
    <div
      className={cn("flex flex-col gap-2 p-3", className)}
      data-slot="context-body"
      {...rest}
    />
  );
};

export const ContextFooter = (props: React.ComponentProps<"div">) => {
  const { children, className, ...rest } = props;
  const { costLabel } = useContextValue();

  return (
    <div
      className={cn(
        "flex items-center justify-between gap-2 border-t bg-muted/40 px-3 py-2 text-xs",
        className
      )}
      data-slot="context-footer"
      {...rest}
    >
      {children ?? (
        <>
          <span className="text-muted-foreground">Total cost</span>
          <span className="font-medium tabular-nums">{costLabel ?? "—"}</span>
        </>
      )}
    </div>
  );
};

interface ContextUsageRowProps extends React.ComponentProps<"div"> {
  label: string;
  tokens?: number;
}

const ContextUsageRow = (props: ContextUsageRowProps) => {
  const { className, label, tokens, ...rest } = props;

  if (tokens === undefined || tokens <= 0) {
    return null;
  }

  return (
    <div
      className={cn(
        "flex items-center justify-between gap-2 text-xs",
        className
      )}
      {...rest}
    >
      <span className="text-muted-foreground">{label}</span>
      <span className="tabular-nums">{formatCompact(tokens)}</span>
    </div>
  );
};

export const ContextInputUsage = (
  props: Omit<ContextUsageRowProps, "label" | "tokens">
) => {
  const { usage } = useContextValue();
  return (
    <ContextUsageRow
      data-slot="context-input-usage"
      label="Input"
      tokens={usage?.input}
      {...props}
    />
  );
};

export const ContextOutputUsage = (
  props: Omit<ContextUsageRowProps, "label" | "tokens">
) => {
  const { usage } = useContextValue();
  return (
    <ContextUsageRow
      data-slot="context-output-usage"
      label="Output"
      tokens={usage?.output}
      {...props}
    />
  );
};

export const ContextReasoningUsage = (
  props: Omit<ContextUsageRowProps, "label" | "tokens">
) => {
  const { usage } = useContextValue();
  return (
    <ContextUsageRow
      data-slot="context-reasoning-usage"
      label="Reasoning"
      tokens={usage?.reasoning}
      {...props}
    />
  );
};

export const ContextCacheUsage = (
  props: Omit<ContextUsageRowProps, "label" | "tokens">
) => {
  const { usage } = useContextValue();
  return (
    <ContextUsageRow
      data-slot="context-cache-usage"
      label="Cache"
      tokens={usage?.cache}
      {...props}
    />
  );
};
