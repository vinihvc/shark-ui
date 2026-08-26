"use client";

import { ark } from "@ark-ui/react/factory";
import type React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/registry/react/components/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleIndicator,
  CollapsibleTrigger,
} from "@/registry/react/components/collapsible";
import { Spinner } from "@/registry/react/components/spinner";

export type TaskStatus = "completed" | "in-progress" | "pending";

interface TaskProps extends React.ComponentProps<typeof Collapsible> {
  status?: TaskStatus;
}

export const Task = (props: TaskProps) => {
  const { className, defaultOpen, status = "pending", ...rest } = props;

  return (
    <Collapsible
      className={cn("w-full min-w-0 text-sm", className)}
      data-slot="task"
      data-status={status}
      defaultOpen={defaultOpen ?? status === "in-progress"}
      {...rest}
    />
  );
};

interface TaskTriggerProps
  extends React.ComponentProps<typeof CollapsibleTrigger> {
  status?: TaskStatus;
  title: string;
}

export const TaskTrigger = (props: TaskTriggerProps) => {
  const { className, status = "pending", title, children, ...rest } = props;

  return (
    <CollapsibleTrigger
      className={cn(
        "flex w-full min-w-0 items-center gap-2 rounded-lg py-1 text-start",
        className
      )}
      data-slot="task-trigger"
      {...rest}
    >
      {children ?? (
        <>
          {status === "in-progress" ? (
            <Spinner className="size-3.5" />
          ) : (
            <span
              aria-hidden="true"
              className={cn(
                "size-3.5 rounded-full border",
                status === "completed" && "border-success bg-success",
                status === "pending" && "border-muted-foreground/40"
              )}
            />
          )}
          <span
            className={cn(
              "min-w-0 flex-1 truncate",
              status === "completed" && "text-muted-foreground line-through"
            )}
          >
            {title}
          </span>
          <CollapsibleIndicator className="text-muted-foreground" />
        </>
      )}
    </CollapsibleTrigger>
  );
};

export const TaskContent = (
  props: React.ComponentProps<typeof CollapsibleContent>
) => {
  const { className, ...rest } = props;

  return (
    <CollapsibleContent
      className={cn("flex flex-wrap items-start gap-1.5 ps-6 pt-1", className)}
      data-slot="task-content"
      {...rest}
    />
  );
};

export const TaskItemFile = (props: React.ComponentProps<typeof Badge>) => {
  const { className, variant = "outline", ...rest } = props;

  return (
    <Badge
      className={cn("w-fit max-w-full font-mono", className)}
      data-slot="task-item-file"
      size="sm"
      variant={variant}
      {...rest}
    />
  );
};

export const TaskList = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn("flex flex-col gap-1", className)}
      data-slot="task-list"
      {...rest}
    />
  );
};
