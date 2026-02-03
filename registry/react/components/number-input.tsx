"use client";

import { NumberInput as ArkNumberInput } from "@ark-ui/react/number-input";
import { Minus, Plus } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";
import { Input, type InputProps } from "@/registry/react/components/input";
import { Button } from "./button";

interface NumberFieldProps
  extends React.ComponentProps<typeof ArkNumberInput.Root>,
    Pick<InputProps, "size"> {
  /**
   * The label to display on the scrubber.
   *
   * @default ""
   */
  label?: string;
  /**
   * Whether to show the scrubber.
   *
   * @default false
   */
  scrubber?: boolean;
}

export const NumberField = (props: NumberFieldProps) => {
  const { className, size = "md", scrubber = false, label, ...rest } = props;

  return (
    <ArkNumberInput.Root
      className={cn(
        "group/number-input flex w-full flex-col items-start gap-2",
        className
      )}
      data-size={size}
      data-slot="number-input"
      {...rest}
    >
      {scrubber && <NumberFieldScrubber>{label}</NumberFieldScrubber>}
      <NumberFieldGroup>
        <NumberFieldDecrement />
        <NumberFieldInput size={size} />
        <NumberFieldIncrement />
      </NumberFieldGroup>
    </ArkNumberInput.Root>
  );
};

const NumberFieldGroup = (
  props: React.ComponentProps<typeof ArkNumberInput.Control>
) => {
  const { className, ...rest } = props;

  return (
    <ArkNumberInput.Control
      className={cn(
        "relative",
        "flex w-full justify-between",
        "bg-background",
        "text-base",
        "rounded-lg border border-input shadow-xs ring-ring/24",
        "transition-shadow",
        "focus-within:border-ring focus-within:ring-[3px]",
        "data-disabled:pointer-events-none data-disabled:opacity-50",
        "aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/20",
        "dark:aria-invalid:border-destructive-foreground dark:aria-invalid:text-destructive-foreground dark:aria-invalid:ring-destructive-foreground/20",
        className
      )}
      data-slot="number-input-group"
      {...rest}
    />
  );
};

const NumberFieldDecrement = (
  props: React.ComponentProps<typeof ArkNumberInput.DecrementTrigger>
) => {
  const { className, ...rest } = props;

  return (
    <ArkNumberInput.DecrementTrigger
      asChild
      className={cn(
        "relative",
        "h-8 in-data-[size=lg]:h-9 in-data-[size=sm]:h-7",
        "flex shrink-0",
        "text-foreground",
        "rounded-none rounded-s-[calc(var(--radius-md)-1px)]",
        "cursor-pointer",
        "pointer-coarse:after:absolute pointer-coarse:after:size-full pointer-coarse:after:min-h-11 pointer-coarse:after:min-w-11",
        className
      )}
      data-slot="number-input-decrement"
      {...rest}
    >
      <Button variant="ghost">
        <Minus aria-hidden />
        <span className="sr-only">Decrement</span>
      </Button>
    </ArkNumberInput.DecrementTrigger>
  );
};

const NumberFieldIncrement = (
  props: React.ComponentProps<typeof ArkNumberInput.IncrementTrigger>
) => {
  const { className, ...rest } = props;

  return (
    <ArkNumberInput.IncrementTrigger
      asChild
      className={cn(
        "relative",
        "h-8 in-data-[size=lg]:h-9 in-data-[size=sm]:h-7",
        "flex shrink-0",
        "text-foreground",
        "rounded-none rounded-e-[calc(var(--radius-md)-1px)]",
        "cursor-pointer",
        "pointer-coarse:after:absolute pointer-coarse:after:size-full pointer-coarse:after:min-h-11 pointer-coarse:after:min-w-11",
        className
      )}
      data-slot="number-input-increment"
      {...rest}
    >
      <Button variant="ghost">
        <Plus aria-hidden />
        <span className="sr-only">Increment</span>
      </Button>
    </ArkNumberInput.IncrementTrigger>
  );
};

const NumberFieldInput = (props: React.ComponentProps<typeof Input>) => {
  const { size, className, ...rest } = props;

  return (
    <ArkNumberInput.Input asChild data-slot="number-input-input" {...rest}>
      <Input
        className={cn(
          "grow",
          "dark:bg-transparent",
          "text-center tabular-nums",
          "border-0",
          "focus-visible:ring-0 aria-invalid:ring-0",
          className
        )}
        size={size}
      />
    </ArkNumberInput.Input>
  );
};

const NumberFieldScrubber = (
  props: React.ComponentProps<typeof ArkNumberInput.Scrubber>
) => {
  const { className, children, ...rest } = props;

  return (
    <ArkNumberInput.Scrubber
      asChild
      className={cn("flex cursor-ew-resize", className)}
      data-slot="number-input-scrubber"
      {...rest}
    >
      <ArkNumberInput.Label data-slot="number-input-scrubber-label">
        {children}
      </ArkNumberInput.Label>
    </ArkNumberInput.Scrubber>
  );
};
