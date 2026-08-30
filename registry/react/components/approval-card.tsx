"use client";

import { ark } from "@ark-ui/react/factory";
import { createContext } from "@ark-ui/react/utils";
import type React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import {
  Questionnaire,
  type QuestionnaireProps,
} from "@/registry/react/components/questionnaire";

export interface ApprovalCardApproveDetails {
  formData?: FormData;
}

export interface ApprovalCardProps extends Omit<QuestionnaireProps, "items"> {
  items?: QuestionnaireProps["items"];
  onApprove?: (details?: ApprovalCardApproveDetails) => void;
  onReject?: () => void;
}

interface ApprovalCardContextValue {
  reject: () => void;
}

const [ApprovalCardProvider, useApprovalCardContext] =
  createContext<ApprovalCardContextValue>({
    name: "ApprovalCardContext",
    providerName: "ApprovalCard",
  });

const DEFAULT_ITEMS = [{ name: "approval" }] as const;

export const ApprovalCard = (props: ApprovalCardProps) => {
  const {
    className,
    items = DEFAULT_ITEMS,
    onApprove,
    onReject,
    onSubmit,
    ...rest
  } = props;

  const reject = () => onReject?.();

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    onSubmit?.(event);
    if (event.defaultPrevented) {
      return;
    }
    event.preventDefault();
    onApprove?.({ formData: new FormData(event.currentTarget) });
  };

  return (
    <ApprovalCardProvider value={{ reject }}>
      <Questionnaire
        {...rest}
        className={cn(
          "gap-3 rounded-xl border bg-card p-3 text-card-foreground",
          className
        )}
        items={items}
        onSubmit={handleSubmit}
      />
    </ApprovalCardProvider>
  );
};

export const ApprovalCardHeader = (
  props: React.ComponentProps<typeof ark.div>
) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      {...rest}
      className={cn("flex min-w-0 items-start gap-2", className)}
      data-slot="approval-card-header"
    />
  );
};

export const ApprovalCardIcon = (
  props: React.ComponentProps<typeof ark.div>
) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      {...rest}
      className={cn(
        "grid size-8 shrink-0 place-items-center rounded-lg bg-muted text-foreground [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      data-slot="approval-card-icon"
    />
  );
};

export const ApprovalCardTitle = (
  props: React.ComponentProps<typeof ark.p>
) => {
  const { className, ...rest } = props;

  return (
    <ark.p
      {...rest}
      className={cn("font-medium", className)}
      data-slot="approval-card-title"
    />
  );
};

export const ApprovalCardDescription = (
  props: React.ComponentProps<typeof ark.p>
) => {
  const { className, ...rest } = props;

  return (
    <ark.p
      {...rest}
      className={cn("text-muted-foreground text-xs", className)}
      data-slot="approval-card-description"
    />
  );
};

export const ApprovalCardContent = (
  props: React.ComponentProps<typeof ark.div>
) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      {...rest}
      className={cn("min-w-0", className)}
      data-slot="approval-card-content"
    />
  );
};

export const ApprovalCardFooter = (
  props: React.ComponentProps<typeof ark.div>
) => {
  const { className, ...rest } = props;
  return (
    <ark.div
      {...rest}
      className={cn("flex flex-wrap items-center gap-2", className)}
      data-slot="approval-card-footer"
    />
  );
};

export const ApprovalCardActions = (
  props: React.ComponentProps<typeof ark.div>
) => {
  const { className, ...rest } = props;
  return (
    <ark.div
      {...rest}
      className={cn("ms-auto flex items-center gap-2", className)}
      data-slot="approval-card-actions"
    />
  );
};

export const ApprovalCardApprove = (
  props: React.ComponentProps<typeof Button>
) => {
  const { children = "Approve", ...rest } = props;
  return (
    <Button
      {...rest}
      aria-keyshortcuts="Enter Control+Enter Meta+Enter"
      data-slot="approval-card-approve"
      type="submit"
    >
      {children}
    </Button>
  );
};

export const ApprovalCardReject = (
  props: React.ComponentProps<typeof Button>
) => {
  const { children = "Reject", onClick, ...rest } = props;
  const { reject } = useApprovalCardContext();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
    if (!event.defaultPrevented) {
      reject();
    }
  };
  return (
    <Button
      {...rest}
      data-slot="approval-card-reject"
      onClick={handleClick}
      type="button"
      variant="ghost"
    >
      {children}
    </Button>
  );
};
