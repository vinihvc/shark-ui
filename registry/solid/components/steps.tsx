import { ark } from "@ark-ui/solid/factory";
import { Steps as ArkSteps, useStepsContext } from "@ark-ui/solid/steps";
import { CheckIcon } from "lucide-solid";
import type { ComponentProps } from "solid-js";

import { cn } from "@/lib/utils";

export const useSteps = useStepsContext;

export const Steps = (props: ComponentProps<typeof ArkSteps.Root>) => {
  const { class: className, ...rest } = props;

  return (
    <ArkSteps.Root
      class={cn(
        "flex flex-col gap-4",
        "data-[orientation=vertical]:min-h-32 data-[orientation=vertical]:flex-row data-[orientation=vertical]:gap-8",
        className
      )}
      data-slot="steps"
      {...rest}
    />
  );
};

export const StepsList = (props: ComponentProps<typeof ArkSteps.List>) => {
  const { class: className, ...rest } = props;

  return (
    <ArkSteps.List
      class={cn(
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

export const StepsItem = (props: ComponentProps<typeof ArkSteps.Item>) => {
  const { class: className, ...rest } = props;

  return (
    <ArkSteps.Item
      class={cn(
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

interface StepsTriggerProps extends ComponentProps<typeof ArkSteps.Trigger> {}

export const StepsTrigger = (props: StepsTriggerProps) => {
  const { class: className, ...rest } = props;

  return (
    <ArkSteps.Trigger
      class={cn(
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
  props: ComponentProps<typeof ArkSteps.Indicator>
) => {
  const { class: className, children, ...rest } = props;

  return (
    <ArkSteps.Indicator
      class={cn(
        "flex shrink-0 items-center justify-center tabular-nums",
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
      <span class="group-data-complete/step:hidden">{children}</span>
      <CheckIcon class="hidden group-data-complete/step:block" />
    </ArkSteps.Indicator>
  );
};

export const StepsSeparator = (
  props: ComponentProps<typeof ArkSteps.Separator>
) => {
  const { class: className, ...rest } = props;

  return (
    <ArkSteps.Separator
      class={cn(
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

export const StepsTitle = (props: ComponentProps<typeof ark.span>) => {
  const { class: className, ...rest } = props;

  return (
    <ark.span
      class={cn("font-medium text-sm leading-none", className)}
      data-slot="steps-title"
      {...rest}
    />
  );
};

export const StepsDescription = (props: ComponentProps<typeof ark.span>) => {
  const { class: className, ...rest } = props;

  return (
    <ark.span
      class={cn("text-muted-foreground text-xs", className)}
      data-slot="steps-description"
      {...rest}
    />
  );
};

export const StepsContent = (
  props: ComponentProps<typeof ArkSteps.Content>
) => {
  const { class: className, ...rest } = props;

  return (
    <ArkSteps.Content
      class={cn("data-[orientation=vertical]:flex-1", className)}
      data-slot="steps-content"
      {...rest}
    />
  );
};

export const StepsCompletedContent = (
  props: ComponentProps<typeof ArkSteps.CompletedContent>
) => {
  const { class: className, ...rest } = props;

  return (
    <ArkSteps.CompletedContent
      class={cn("data-[orientation=vertical]:flex-1", className)}
      data-slot="steps-completed-content"
      {...rest}
    />
  );
};

export const StepsPrevious = (
  props: ComponentProps<typeof ArkSteps.PrevTrigger>
) => <ArkSteps.PrevTrigger data-slot="steps-previous" {...props} />;

export const StepsNext = (
  props: ComponentProps<typeof ArkSteps.NextTrigger>
) => <ArkSteps.NextTrigger data-slot="steps-next" {...props} />;
