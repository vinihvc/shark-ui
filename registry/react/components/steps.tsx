"use client";

import { ark } from "@ark-ui/react/factory";
import { Steps as ArkSteps } from "@ark-ui/react/steps";
import { CheckIcon } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";

export const Steps = (props: React.ComponentProps<typeof ArkSteps.Root>) => {
  const { className, ...rest } = props;

  return (
    <ArkSteps.Root
      className={cn(
        "flex flex-col gap-4",
        "data-[orientation=vertical]:min-h-32 data-[orientation=vertical]:flex-row data-[orientation=vertical]:gap-8",
        className
      )}
      data-slot="steps"
      {...rest}
    />
  );
};

export const StepsList = (
  props: React.ComponentProps<typeof ArkSteps.List>
) => {
  const { className, ...rest } = props;

  return (
    <ArkSteps.List
      className={cn(
        "[--steps-gutter:--spacing(2)] [--steps-icon-size:--spacing(4)] [--steps-size:--spacing(8)]",
        "flex",
        "data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start",
        "data-[orientation=horizontal]:items-center data-[orientation=horizontal]:justify-between",
        className
      )}
      data-slot="steps-list"
      {...rest}
    />
  );
};

export const StepsItem = (
  props: React.ComponentProps<typeof ArkSteps.Item>
) => {
  const { className, ...rest } = props;

  return (
    <ArkSteps.Item
      className={cn(
        "group/step",
        "relative flex flex-1",
        "data-[orientation=vertical]:items-start",
        "data-[orientation=horizontal]:items-center",
        "last:flex-initial last:**:data-[slot=steps-separator]:hidden",
        className
      )}
      data-slot="steps-item"
      {...rest}
    />
  );
};

interface StepsTriggerProps
  extends React.ComponentProps<typeof ArkSteps.Trigger> {}

export const StepsTrigger = (props: StepsTriggerProps) => {
  const { className, ...rest } = props;

  return (
    <ArkSteps.Trigger
      className={cn(
        "inline-flex items-center gap-3",
        "cursor-pointer rounded-full outline-none",
        "disabled:pointer-events-none disabled:opacity-64",
        className
      )}
      data-slot="steps-trigger"
      {...rest}
    />
  );
};

export const StepsIndicator = (
  props: React.ComponentProps<typeof ArkSteps.Indicator>
) => {
  const { className, children, ...rest } = props;

  return (
    <ArkSteps.Indicator
      className={cn(
        "flex shrink-0 items-center justify-center",
        "size-(--steps-size)",
        "bg-muted text-muted-foreground",
        "font-medium text-sm",
        "rounded-full border",
        "transition-colors",
        "in-focus-visible:ring-[3px] in-focus-visible:ring-ring/32",
        "data-current:border-primary data-current:bg-primary data-current:text-primary-foreground",
        "data-complete:border-primary data-complete:bg-primary data-complete:text-primary-foreground",
        "[&_svg]:size-(--steps-icon-size) [&_svg]:shrink-0",
        className
      )}
      data-slot="steps-indicator"
      {...rest}
    >
      <span className="group-data-complete/step:hidden">{children}</span>
      <CheckIcon className="hidden group-data-complete/step:block" />
    </ArkSteps.Indicator>
  );
};

export const StepsSeparator = (
  props: React.ComponentProps<typeof ArkSteps.Separator>
) => {
  const { className, ...rest } = props;

  return (
    <ArkSteps.Separator
      className={cn(
        "flex-1",
        "bg-border",
        "rounded-full",
        "transition-colors",
        "data-complete:bg-primary",
        "data-[orientation=horizontal]:mx-(--steps-gutter) data-[orientation=horizontal]:h-0.5 data-[orientation=horizontal]:w-full",
        "data-[orientation=vertical]:absolute data-[orientation=vertical]:top-[calc(var(--steps-size)+var(--steps-gutter))] data-[orientation=vertical]:left-[calc(var(--steps-size)/2-1px)] data-[orientation=vertical]:h-full data-[orientation=vertical]:max-h-[calc(100%-(var(--steps-size)+var(--steps-gutter)*2))] data-[orientation=vertical]:w-0.5",
        className
      )}
      data-slot="steps-separator"
      {...rest}
    />
  );
};

export const StepsTitle = (props: React.ComponentProps<typeof ark.span>) => {
  const { className, ...rest } = props;

  return (
    <ark.span
      className={cn("font-medium text-sm leading-none", className)}
      data-slot="steps-title"
      {...rest}
    />
  );
};

export const StepsDescription = (
  props: React.ComponentProps<typeof ark.span>
) => {
  const { className, ...rest } = props;

  return (
    <ark.span
      className={cn("text-muted-foreground text-xs", className)}
      data-slot="steps-description"
      {...rest}
    />
  );
};

export const StepsContent = (
  props: React.ComponentProps<typeof ArkSteps.Content>
) => {
  const { className, ...rest } = props;

  return (
    <ArkSteps.Content
      className={cn("data-[orientation=vertical]:flex-1", className)}
      data-slot="steps-content"
      {...rest}
    />
  );
};

export const StepsCompletedContent = (
  props: React.ComponentProps<typeof ArkSteps.CompletedContent>
) => {
  const { className, ...rest } = props;

  return (
    <ArkSteps.CompletedContent
      className={cn("data-[orientation=vertical]:flex-1", className)}
      data-slot="steps-completed-content"
      {...rest}
    />
  );
};

export const StepsPrevious = (
  props: React.ComponentProps<typeof ArkSteps.PrevTrigger>
) => <ArkSteps.PrevTrigger data-slot="steps-previous" {...props} />;

export const StepsNext = (
  props: React.ComponentProps<typeof ArkSteps.NextTrigger>
) => <ArkSteps.NextTrigger data-slot="steps-next" {...props} />;
