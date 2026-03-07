"use client";

import { DatePicker as ArkDatePicker } from "@ark-ui/react/date-picker";
import { Portal } from "@ark-ui/react/portal";
import { CalendarIcon, ClockIcon } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import {
  Calendar,
  CalendarPresetTrigger,
} from "@/registry/react/components/calendar";
import type { Input, InputProps } from "@/registry/react/components/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/registry/react/components/input-group";

export const DatePicker = (props: React.ComponentProps<typeof Calendar>) => {
  const { positioning = { placement: "top" }, ...rest } = props;

  return (
    <Calendar
      data-slot="date-picker"
      inline={false}
      positioning={positioning}
      {...rest}
    />
  );
};

export const DatePickerTrigger = (
  props: React.ComponentProps<typeof ArkDatePicker.Trigger>
) => {
  const { className, children, ...rest } = props;

  return (
    <ArkDatePicker.Control data-slot="date-picker-control">
      <ArkDatePicker.Trigger
        className={cn(
          "justify-start",
          "text-left data-placeholder-shown:[&>span]:text-muted-foreground",
          "active:scale-100",
          className
        )}
        data-slot="date-picker-trigger"
        {...rest}
      >
        {children}
      </ArkDatePicker.Trigger>
    </ArkDatePicker.Control>
  );
};

interface DatePickerInputProps
  extends Omit<React.ComponentProps<typeof ArkDatePicker.Input>, "size">,
    InputProps {}

export const DatePickerInput = (props: DatePickerInputProps) => {
  const { size, className, ...rest } = props;

  return (
    <ArkDatePicker.Control data-slot="date-picker-control">
      <InputGroup size={size}>
        <ArkDatePicker.Input asChild data-slot="date-picker-input" {...rest}>
          <InputGroupInput />
        </ArkDatePicker.Input>

        <InputGroupAddon align="inline-end">
          <InputGroupButton
            asChild
            data-slot="input-group-button"
            size="icon-xs"
            variant="ghost"
          >
            <ArkDatePicker.Trigger asChild data-slot="date-picker-trigger">
              <Button size="icon-md" variant="ghost">
                <CalendarIcon aria-hidden />
              </Button>
            </ArkDatePicker.Trigger>
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </ArkDatePicker.Control>
  );
};

export const DatePickerTimer = (props: React.ComponentProps<typeof Input>) => {
  const { id, value, defaultValue, className, ...rest } = props;

  return (
    <InputGroup {...rest}>
      <InputGroupAddon>
        <ClockIcon />
      </InputGroupAddon>
      <InputGroupInput
        className={cn(
          "[&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none",
          className
        )}
        defaultValue={defaultValue}
        id={id}
        step="1"
        type="time"
        value={value}
      />
    </InputGroup>
  );
};

export const DatePickerContent = (
  props: React.ComponentProps<typeof ArkDatePicker.Content>
) => {
  const { className, ...rest } = props;

  return (
    <Portal>
      <ArkDatePicker.Positioner data-slot="date-picker-positioner">
        <ArkDatePicker.Content
          className={cn(
            "[--cell-size:--spacing(8)]",
            "z-[calc(50+var(--layer-index,0))]",
            "w-fit min-w-72",
            "p-3",
            "bg-popover",
            "text-popover-foreground",
            "rounded-2xl border shadow-lg/5",
            "outline-none",
            "origin-(--transform-origin)",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            "data-[state=closed]:animate-out data-[state=open]:animate-in",
            "data-[state=closed]:zoom-out-[98%] data-[state=open]:zoom-in-[98%]",
            className
          )}
          data-slot="date-picker-content"
          {...rest}
        />
      </ArkDatePicker.Positioner>
    </Portal>
  );
};

export const DatePickerValue = (
  props: React.ComponentProps<typeof ArkDatePicker.ValueText>
) => {
  const { className, ...rest } = props;

  return (
    <ArkDatePicker.ValueText
      className={cn("font-medium text-sm", className)}
      data-slot="date-picker-value"
      {...rest}
    />
  );
};

export const DatePickerPresetTrigger = (
  props: React.ComponentProps<typeof ArkDatePicker.PresetTrigger>
) => {
  return (
    <CalendarPresetTrigger data-slot="date-picker-preset-trigger" {...props} />
  );
};
