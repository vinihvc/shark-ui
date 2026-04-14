import {
  NumberInput as ArkNumberInput,
  useNumberInputContext,
} from "@ark-ui/solid/number-input";
import { MinusIcon, PlusIcon } from "lucide-solid";
import type { ComponentProps } from "solid-js";

import { cn } from "@/lib/utils";
import { Button } from "@/registry/solid/components/button";
import { FieldLabel } from "@/registry/solid/components/field";
import { Input, type InputProps } from "@/registry/solid/components/input";

export const useNumberInput = useNumberInputContext;

interface NumberFieldProps
  extends ComponentProps<typeof ArkNumberInput.Root>,
    Pick<InputProps, "size"> {}

export const NumberField = (props: NumberFieldProps) => {
  const { size = "md", className, ...rest } = props;

  return (
    <ArkNumberInput.Root
      class={cn(
        "group/number-input flex w-full flex-col items-start gap-2",
        className
      )}
      data-size={size}
      data-slot="number-input"
      {...rest}
    />
  );
};

export const NumberFieldGroup = (
  props: ComponentProps<typeof ArkNumberInput.Control>
) => {
  const { class: className, ...rest } = props;

  return (
    <ArkNumberInput.Control
      class={cn(
        "relative",
        "flex w-full justify-between",
        "bg-transparent dark:bg-input/30",
        "text-base",
        "rounded-lg border border-input shadow-xs/5 ring-ring/32",
        "transition-shadow",
        "focus-within:border-primary focus-within:ring-[3px] focus-within:ring-ring/32",
        "data-disabled:pointer-events-none data-disabled:opacity-64",
        "aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/24",
        "dark:aria-invalid:border-destructive-foreground dark:aria-invalid:text-destructive-foreground dark:aria-invalid:ring-destructive-foreground/20",
        className
      )}
      data-slot="number-input-group"
      {...rest}
    />
  );
};

export const NumberFieldDecrement = (
  props: ComponentProps<typeof ArkNumberInput.DecrementTrigger>
) => {
  const { class: className, ...rest } = props;

  return (
    <ArkNumberInput.DecrementTrigger
      asChild
      class={cn(
        "relative",
        "h-8 in-data-[size=lg]:h-9 in-data-[size=sm]:h-7",
        "flex shrink-0",
        "text-foreground",
        "rounded-none rounded-s-[calc(var(--radius-xl)-1px)]",
        "cursor-pointer",
        "pointer-coarse:after:absolute pointer-coarse:after:size-full pointer-coarse:after:min-h-11 pointer-coarse:after:min-w-11",
        className
      )}
      data-slot="number-input-decrement"
      {...rest}
    >
      <Button aria-label="Decrement" variant="ghost">
        <MinusIcon aria-hidden />
      </Button>
    </ArkNumberInput.DecrementTrigger>
  );
};

export const NumberFieldIncrement = (
  props: ComponentProps<typeof ArkNumberInput.IncrementTrigger>
) => {
  const { class: className, ...rest } = props;

  return (
    <ArkNumberInput.IncrementTrigger
      asChild
      class={cn(
        "relative",
        "h-8 in-data-[size=lg]:h-9 in-data-[size=sm]:h-7",
        "flex shrink-0",
        "text-foreground",
        "rounded-none rounded-e-[calc(var(--radius-xl)-1px)]",
        "cursor-pointer",
        "pointer-coarse:after:absolute pointer-coarse:after:size-full pointer-coarse:after:min-h-11 pointer-coarse:after:min-w-11",
        className
      )}
      data-slot="number-input-increment"
      {...rest}
    >
      <Button aria-label="Increment" variant="ghost">
        <PlusIcon aria-hidden />
      </Button>
    </ArkNumberInput.IncrementTrigger>
  );
};

export const NumberFieldInput = (props: ComponentProps<typeof Input>) => {
  const { size, className, ...rest } = props;

  return (
    <ArkNumberInput.Input asChild data-slot="number-input-input" {...rest}>
      <Input
        class={cn(
          "grow",
          "dark:bg-transparent",
          "text-center tabular-nums",
          "border-0 shadow-none ring-0",
          "focus-visible:ring-0 aria-invalid:ring-0 data-invalid:ring-0",
          className
        )}
        size={size}
      />
    </ArkNumberInput.Input>
  );
};

export const NumberFieldScrubber = (
  props: ComponentProps<typeof ArkNumberInput.Scrubber>
) => {
  const { class: className, children, ...rest } = props;

  return (
    <ArkNumberInput.Scrubber
      asChild
      class={cn("flex cursor-ew-resize", className)}
      data-slot="number-input-scrubber"
      {...rest}
    >
      <ArkNumberInput.Label asChild>
        <FieldLabel>{children}</FieldLabel>
      </ArkNumberInput.Label>
    </ArkNumberInput.Scrubber>
  );
};
