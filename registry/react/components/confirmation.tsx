"use client";

import { ark } from "@ark-ui/react/factory";
import type React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";

export type ConfirmationState = "accepted" | "rejected" | "request";

interface ConfirmationProps extends React.ComponentProps<typeof ark.div> {
  state?: ConfirmationState;
}

export const Confirmation = (props: ConfirmationProps) => {
  const { className, state = "request", ...rest } = props;

  return (
    <ark.div
      className={cn(
        "group/confirmation flex w-full min-w-0 flex-col gap-3 rounded-xl border bg-card p-3 text-card-foreground text-sm",
        className
      )}
      data-slot="confirmation"
      data-state={state}
      {...rest}
    />
  );
};

export const ConfirmationRequest = (
  props: React.ComponentProps<typeof ark.div>
) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "flex flex-col gap-1 group-data-[state=accepted]/confirmation:hidden group-data-[state=rejected]/confirmation:hidden",
        className
      )}
      data-slot="confirmation-request"
      {...rest}
    />
  );
};

export const ConfirmationAccepted = (
  props: React.ComponentProps<typeof ark.div>
) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "hidden items-center gap-2 text-success group-data-[state=accepted]/confirmation:flex",
        className
      )}
      data-slot="confirmation-accepted"
      {...rest}
    />
  );
};

export const ConfirmationRejected = (
  props: React.ComponentProps<typeof ark.div>
) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "hidden items-center gap-2 text-destructive group-data-[state=rejected]/confirmation:flex",
        className
      )}
      data-slot="confirmation-rejected"
      {...rest}
    />
  );
};

export const ConfirmationActions = (
  props: React.ComponentProps<typeof ark.div>
) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "flex items-center justify-end gap-2 group-data-[state=accepted]/confirmation:hidden group-data-[state=rejected]/confirmation:hidden",
        className
      )}
      data-slot="confirmation-actions"
      {...rest}
    />
  );
};

export const ConfirmationAction = (
  props: React.ComponentProps<typeof Button>
) => {
  const { type = "button", size = "sm", ...rest } = props;

  return (
    <Button data-slot="confirmation-action" size={size} type={type} {...rest} />
  );
};

export const ConfirmationTitle = (
  props: React.ComponentProps<typeof ark.p>
) => {
  const { className, ...rest } = props;

  return (
    <ark.p
      className={cn("font-medium", className)}
      data-slot="confirmation-title"
      {...rest}
    />
  );
};
