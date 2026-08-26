"use client";

import { ark } from "@ark-ui/react/factory";
import type React from "react";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleIndicator,
  CollapsibleTrigger,
} from "@/registry/react/components/collapsible";

export const Plan = (props: React.ComponentProps<typeof Collapsible>) => {
  const { className, defaultOpen = true, ...rest } = props;

  return (
    <Collapsible
      className={cn(
        "w-full min-w-0 overflow-hidden rounded-xl border bg-card text-card-foreground",
        className
      )}
      data-slot="plan"
      defaultOpen={defaultOpen}
      {...rest}
    />
  );
};

export const PlanHeader = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn("flex min-w-0 items-start gap-2 px-3 py-2", className)}
      data-slot="plan-header"
      {...rest}
    />
  );
};

export const PlanTitle = (props: React.ComponentProps<typeof ark.p>) => {
  const { className, ...rest } = props;

  return (
    <ark.p
      className={cn("font-medium text-sm", className)}
      data-slot="plan-title"
      {...rest}
    />
  );
};

export const PlanDescription = (props: React.ComponentProps<typeof ark.p>) => {
  const { className, ...rest } = props;

  return (
    <ark.p
      className={cn("text-muted-foreground text-xs", className)}
      data-slot="plan-description"
      {...rest}
    />
  );
};

export const PlanAction = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn("ms-auto shrink-0", className)}
      data-slot="plan-action"
      {...rest}
    />
  );
};

export const PlanTrigger = (
  props: React.ComponentProps<typeof CollapsibleTrigger>
) => {
  const { className, children, ...rest } = props;

  return (
    <CollapsibleTrigger
      className={cn("rounded-lg p-1 text-muted-foreground", className)}
      data-slot="plan-trigger"
      {...rest}
    >
      {children ?? <CollapsibleIndicator />}
    </CollapsibleTrigger>
  );
};

export const PlanContent = (
  props: React.ComponentProps<typeof CollapsibleContent>
) => {
  const { className, ...rest } = props;

  return (
    <CollapsibleContent
      className={cn("flex flex-col gap-2 border-t px-3 py-3", className)}
      data-slot="plan-content"
      {...rest}
    />
  );
};
