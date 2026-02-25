"use client";

import { DatePicker as ArkDatePicker } from "@ark-ui/react/date-picker";
import { Portal } from "@ark-ui/react/portal";
import { CalendarIcon, ClockIcon } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import { Calendar } from "@/registry/react/components/calendar";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/registry/react/components/input-group";
import type { Input } from "./input";

export const DatePicker = (props: React.ComponentProps<typeof Calendar>) => {
  const { className, lazyMount = true, unmountOnExit = true, ...rest } = props;

  return (
    <Calendar
      className={cn("w-fit", className)}
      data-slot="date-picker"
      inline={false}
      lazyMount={lazyMount}
      unmountOnExit={unmountOnExit}
      {...rest}
    />
  );
};

interface DatePickerTriggerProps
  extends Omit<React.ComponentProps<typeof ArkDatePicker.Input>, "size"> {
  /**
   * Whether to show the clear button.
   *
   * @default false
   */
  showClear?: boolean;
}

export const DatePickerInput = (props: DatePickerTriggerProps) => {
  const { showClear = false, ...rest } = props;

  return (
    <ArkDatePicker.Control data-slot="date-picker-control">
      <InputGroup>
        <ArkDatePicker.Input asChild data-slot="date-picker-input" {...rest}>
          <InputGroupInput />
        </ArkDatePicker.Input>

        <InputGroupAddon align="inline-end">
          <InputGroupButton
            asChild
            className="group-has-data-[slot=date-picker-clear-trigger]/input-group:hidden"
            data-slot="input-group-button"
            size="icon-xs"
            variant="ghost"
          >
            <ArkDatePicker.Trigger asChild data-slot="date-picker-trigger">
              <Button size="icon-md" variant="outline">
                <CalendarIcon aria-hidden className="size-4" />
              </Button>
            </ArkDatePicker.Trigger>
          </InputGroupButton>

          {showClear && (
            <ArkDatePicker.ClearTrigger
              asChild
              data-slot="date-picker-clear-trigger"
            >
              <Button size="sm" variant="ghost">
                Clear
              </Button>
            </ArkDatePicker.ClearTrigger>
          )}
        </InputGroupAddon>
      </InputGroup>
    </ArkDatePicker.Control>
  );
};

interface DatePickerRangeInputProps {
  /** Placeholder for the end date input. */
  endPlaceholder?: string;
  /**
   * Whether to show the clear button.
   *
   * @default false
   */
  showClear?: boolean;
  /** Placeholder for the start date input. */
  startPlaceholder?: string;
}

export const DatePickerRangeInput = (props: DatePickerRangeInputProps) => {
  const {
    showClear = false,
    startPlaceholder = "Start date",
    endPlaceholder = "End date",
  } = props;

  return (
    <ArkDatePicker.Control data-slot="date-picker-control">
      <InputGroup className="gap-2">
        <ArkDatePicker.Input
          asChild
          data-slot="date-picker-input"
          index={0}
          placeholder={startPlaceholder}
        >
          <InputGroupInput className="min-w-28" />
        </ArkDatePicker.Input>
        <span className="text-muted-foreground text-sm">to</span>
        <ArkDatePicker.Input
          asChild
          data-slot="date-picker-input"
          index={1}
          placeholder={endPlaceholder}
        >
          <InputGroupInput className="min-w-28" />
        </ArkDatePicker.Input>

        <InputGroupAddon align="inline-end">
          <InputGroupButton
            asChild
            className="group-has-data-[slot=date-picker-clear-trigger]/input-group:hidden"
            data-slot="input-group-button"
            size="icon-xs"
            variant="ghost"
          >
            <ArkDatePicker.Trigger asChild data-slot="date-picker-trigger">
              <Button size="icon-md" variant="outline">
                <CalendarIcon aria-hidden className="size-4" />
              </Button>
            </ArkDatePicker.Trigger>
          </InputGroupButton>

          {showClear && (
            <ArkDatePicker.ClearTrigger
              asChild
              data-slot="date-picker-clear-trigger"
            >
              <Button size="sm" variant="ghost">
                Clear
              </Button>
            </ArkDatePicker.ClearTrigger>
          )}
        </InputGroupAddon>
      </InputGroup>
    </ArkDatePicker.Control>
  );
};

export const DatePickerPositioner = (
  props: React.ComponentProps<typeof ArkDatePicker.Positioner>
) => {
  const { className, ...rest } = props;

  return (
    <ArkDatePicker.Positioner
      className={cn(
        "z-50",
        "data-[state=closed]:animate-out data-[state=open]:animate-in",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        className
      )}
      data-slot="date-picker-positioner"
      {...rest}
    />
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
      <DatePickerPositioner>
        <ArkDatePicker.Content
          className={cn(
            "w-fit min-w-72",
            "rounded-lg border bg-popover p-3 text-popover-foreground shadow-lg",
            "outline-none",
            "[--cell-size:--spacing(8)]",
            className
          )}
          data-slot="date-picker-content"
          {...rest}
        />
      </DatePickerPositioner>
    </Portal>
  );
};
