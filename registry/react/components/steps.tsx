import { Steps as ArkSteps } from "@ark-ui/react/steps";
import type React from "react";
import { cn } from "@/lib/utils";

export const Steps = (props: React.ComponentProps<typeof ArkSteps.Root>) => {
  const { className, ...rest } = props;

  return (
    <ArkSteps.Root
      className={cn(
        "flex gap-4",
        "data-[orientation=horizontal]:flex-col",
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
        "flex justify-between",
        "data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start",
        "data-[orientation=horizontal]:items-center",
        className
      )}
      data-slot="steps-list"
      style={
        {
          "--steps-gutter": "12px",
          "--steps-size": "40px",
          "--steps-icon-size": "20px",
        } as React.CSSProperties
      }
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
        "relative flex flex-1",
        "data-[orientation=vertical]:items-start",
        "data-[orientation=horizontal]:items-center",
        "last:flex-initial last:**:data-[slot=separator]:hidden",
        className
      )}
      data-slot="steps-item"
      {...rest}
    />
  );
};

export const StepsTrigger = (
  props: React.ComponentProps<typeof ArkSteps.Trigger>
) => {
  const { className, ...rest } = props;

  return (
    <ArkSteps.Trigger
      className={cn("flex items-center gap-3 rounded-md", className)}
      data-slot="steps-trigger"
      {...rest}
    />
  );
};

export const StepsIndicator = (
  props: React.ComponentProps<typeof ArkSteps.Indicator>
) => {
  const { className, ...rest } = props;

  return (
    <ArkSteps.Indicator
      className={cn(
        "flex shrink-0 items-center justify-center tabular-nums",
        "size-(--steps-size)",
        "font-semibold",
        "rounded-full",
        "border",
        "data-current:bg-border",
        "data-complete:bg-primary data-complete:text-primary-foreground",
        "[&_svg]:size-(--steps-icon-size) [&_svg]:shrink-0",
        className
      )}
      data-slot="steps-indicator"
      {...rest}
    />
  );
};

export const StepsSeparator = (
  props: React.ComponentProps<typeof ArkSteps.Separator>
) => {
  const { className, ...rest } = props;

  return (
    <ArkSteps.Separator
      className={cn(
        "flex-1 bg-border",
        "data-complete:bg-primary",
        "data-[orientation=vertical]:absolute data-[orientation=vertical]:top-[calc(var(--steps-size)+var(--steps-gutter))]",
        "data-[orientation=vertical]:left-[calc(var(--steps-size)/2-1px)]",
        "data-[orientation=vertical]:h-full data-[orientation=vertical]:max-h-[calc(100%-(var(--steps-size)+var(--steps-gutter)*2))]",
        "data-[orientation=vertical]:w-0.5",
        "data-[orientation=horizontal]:mx-(--steps-gutter)",
        "data-[orientation=horizontal]:h-0.5",
        "data-[orientation=horizontal]:w-full",
        className
      )}
      data-slot="steps-separator"
      {...rest}
    />
  );
};

export const StepsContent = (
  props: React.ComponentProps<typeof ArkSteps.Content>
) => <ArkSteps.Content data-slot="steps-content" {...props} />;

export const StepsCompletedContent = (
  props: React.ComponentProps<typeof ArkSteps.CompletedContent>
) => (
  <ArkSteps.CompletedContent data-slot="steps-completed-content" {...props} />
);

export const StepsPrevious = (
  props: React.ComponentProps<typeof ArkSteps.PrevTrigger>
) => <ArkSteps.PrevTrigger data-slot="steps-previous" {...props} />;

export const StepsNext = (
  props: React.ComponentProps<typeof ArkSteps.NextTrigger>
) => <ArkSteps.NextTrigger data-slot="steps-next" {...props} />;
