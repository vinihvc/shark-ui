"use client";

import { ark } from "@ark-ui/react/factory";
import { CircleCheckIcon, CircleIcon, CircleXIcon } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/registry/react/components/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleIndicator,
  CollapsibleTrigger,
} from "@/registry/react/components/collapsible";
import { Spinner } from "@/registry/react/components/spinner";

export type TaskStatus = "completed" | "error" | "in-progress" | "pending";

const TaskItemStatusContext = React.createContext({} as TaskStatus);

interface TaskItemProps extends React.ComponentProps<typeof Collapsible> {
  /**
   * The status of the task.
   */
  status?: TaskStatus;
}

export const TaskItem = (props: TaskItemProps) => {
  const { className, defaultOpen, status = "pending", ...rest } = props;

  return (
    <TaskItemStatusContext.Provider value={status}>
      <Collapsible
        className={cn(
          "w-full min-w-0 text-sm",
          "[&>[data-slot=collapsible-content]]:w-full",
          "[&>[data-slot=collapsible-content]]:min-w-0",
          className
        )}
        data-slot="task-item"
        data-status={status}
        defaultOpen={defaultOpen ?? status === "in-progress"}
        {...rest}
      />
    </TaskItemStatusContext.Provider>
  );
};

interface TaskItemTriggerProps
  extends React.ComponentProps<typeof CollapsibleTrigger> {
  /**
   * The status of the task.
   */
  status?: TaskStatus;
  /**
   * The title of the task.
   */
  title: string;
}

export const TaskItemTrigger = (props: TaskItemTriggerProps) => {
  const inheritedStatus = useTaskItem();

  const {
    status = inheritedStatus ?? "pending",
    title,
    className,
    children,
    ...rest
  } = props;

  return (
    <CollapsibleTrigger
      className={cn(
        "w-full min-w-0",
        "flex items-center gap-2",
        "px-2 py-1.5",
        "text-start",
        "rounded-lg",
        "transition-colors",
        "hover:bg-muted/60",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className
      )}
      data-slot="task-item-trigger"
      {...rest}
    >
      {children ?? (
        <>
          <TaskStatusIcon status={status} />
          <span
            className={cn(
              "min-w-0 flex-1 truncate",
              status === "completed" && "text-muted-foreground",
              status === "error" && "text-destructive-foreground"
            )}
          >
            <span className="sr-only">{statusLabels[status]}: </span>
            {title}
          </span>
          <CollapsibleIndicator className="text-muted-foreground" />
        </>
      )}
    </CollapsibleTrigger>
  );
};

export const TaskItemContent = (
  props: React.ComponentProps<typeof CollapsibleContent>
) => {
  const { className, ...rest } = props;

  return (
    <CollapsibleContent
      className={cn(
        "min-w-0",
        "flex flex-col gap-1",
        "ms-4 ps-4 pt-1",
        "border-s",
        className
      )}
      data-slot="task-item-content"
      {...rest}
    />
  );
};

export const TaskItemDetail = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "min-w-0",
        "px-2 py-1",
        "text-muted-foreground text-sm leading-6",
        "rounded-md",
        className
      )}
      data-slot="task-item-detail"
      {...rest}
    />
  );
};

export const TaskItemDetailFile = (
  props: React.ComponentProps<typeof Badge>
) => {
  const { variant = "outline", className, ...rest } = props;

  return (
    <Badge
      className={cn(
        "w-fit max-w-full",
        "truncate",
        "align-baseline",
        "mx-1",
        "font-mono text-xs",
        className
      )}
      data-slot="task-item-detail-file"
      size="sm"
      variant={variant}
      {...rest}
    />
  );
};

interface TaskProps extends React.ComponentProps<typeof ark.div> {
  /**
   * The number of completed tasks.
   */
  completed?: number;
  /**
   * The total number of tasks.
   */
  total?: number;
}

export const Task = (props: TaskProps) => {
  const { children, className, completed, total, ...rest } = props;

  const hasProgress = completed !== undefined && total !== undefined;

  return (
    <ark.div
      className={cn("flex w-full min-w-0 flex-col gap-2", className)}
      data-slot="task"
      {...rest}
    >
      {children}
      {hasProgress ? (
        <span
          aria-live="polite"
          className="pt-1 text-muted-foreground text-sm tabular-nums"
          data-slot="task-progress"
        >
          {completed} of {total} tasks complete
        </span>
      ) : null}
    </ark.div>
  );
};

const statusLabels: Record<TaskStatus, string> = {
  completed: "Completed",
  error: "Failed",
  "in-progress": "In progress",
  pending: "Pending",
};

const TaskStatusIcon = ({ status }: { status: TaskStatus }) => {
  if (status === "in-progress") {
    return <Spinner aria-hidden="true" className="size-4 shrink-0" />;
  }

  let Icon = CircleIcon;
  if (status === "completed") {
    Icon = CircleCheckIcon;
  }
  if (status === "error") {
    Icon = CircleXIcon;
  }

  return (
    <Icon
      aria-hidden="true"
      className={cn(
        "size-4 shrink-0",
        status === "completed" && "text-success-foreground",
        status === "error" && "text-destructive-foreground",
        status === "pending" && "text-muted-foreground"
      )}
    />
  );
};

const useTaskItem = () => {
  const context = React.useContext(TaskItemStatusContext);

  if (!context) {
    throw new Error("TaskItemStatusContext not found");
  }

  return context;
};
