"use client";

import { DatePicker as ArkDatePicker } from "@ark-ui/react/date-picker";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import {
  type InputProps,
  inputVariants,
} from "@/registry/react/components/input";

export const Calendar = (
  props: React.ComponentProps<typeof ArkDatePicker.Root>
) => {
  const {
    open = true,
    lazyMount = true,
    unmountOnExit = true,
    className,
    children,
    ...rest
  } = props;

  return (
    <ArkDatePicker.Root
      data-slot="calendar"
      lazyMount={lazyMount}
      open={open}
      unmountOnExit={unmountOnExit}
      {...rest}
    >
      <ArkDatePicker.Content
        className={cn("min-w-72", className)}
        data-slot="calendar-content"
      >
        {children}
      </ArkDatePicker.Content>
    </ArkDatePicker.Root>
  );
};

export const CalendarControl = (
  props: React.ComponentProps<typeof ArkDatePicker.Control>
) => {
  const { className, ...rest } = props;

  return (
    <ArkDatePicker.Control
      className={cn("inline-flex gap-2.5", className)}
      data-slot="calendar-control"
      {...rest}
    />
  );
};

interface CalendarInputProps
  extends Omit<React.ComponentProps<typeof ArkDatePicker.Input>, "size">,
    Pick<InputProps, "size"> {}

export const CalendarInput = (props: CalendarInputProps) => {
  const { size = "md", className, ...rest } = props;

  return (
    <ArkDatePicker.Input
      className={cn(inputVariants({ size }), className)}
      data-slot="calendar-input"
      {...rest}
    />
  );
};

export const CalendarYearSelect = (
  props: React.ComponentProps<typeof ArkDatePicker.YearSelect>
) => {
  const { className, ...rest } = props;

  return (
    <span className="relative" data-slot="calendar-year-select-wrapper">
      <ArkDatePicker.YearSelect
        className={cn(
          "appearance-none",
          "px-2 py-1 pe-6",
          "text-sm",
          "rounded-lg border",
          "outline-none focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-ring/32",
          className
        )}
        data-slot="calendar-year-select"
        {...rest}
      />

      <span
        className={cn(
          "absolute inset-e-1 inset-y-0",
          "flex items-center",
          "[&_svg]:size-3.5 [&_svg]:text-muted-foreground"
        )}
      >
        <ChevronDown />
      </span>
    </span>
  );
};

export const CalendarMonthSelect = (
  props: React.ComponentProps<typeof ArkDatePicker.MonthSelect>
) => {
  const { className, ...rest } = props;

  return (
    <span className="relative">
      <ArkDatePicker.MonthSelect
        className={cn(
          "appearance-none",
          "px-2 py-1 pe-6",
          "text-sm",
          "rounded-lg border",
          "outline-none focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-ring/32",
          className
        )}
        data-slot="calendar-month-select"
        {...rest}
      />

      <span
        className={cn(
          "absolute inset-e-1 inset-y-0",
          "flex items-center",
          "[&_svg]:size-3.5 [&_svg]:text-muted-foreground"
        )}
      >
        <ChevronDown />
      </span>
    </span>
  );
};

export const CalendarView = (
  props: React.ComponentProps<typeof ArkDatePicker.View>
) => {
  const { className, ...rest } = props;

  return (
    <ArkDatePicker.View
      className={cn("flex flex-col gap-2.5", className)}
      data-slot="calendar-view"
      {...rest}
    />
  );
};

export const CalendarContext = (
  props: React.ComponentProps<typeof ArkDatePicker.Context>
) => <ArkDatePicker.Context data-slot="calendar-context" {...props} />;

export const CalendarViewControl = (
  props: React.ComponentProps<typeof ArkDatePicker.ViewControl>
) => {
  const { className, ...rest } = props;

  return (
    <ArkDatePicker.ViewControl
      className={cn("flex items-center justify-between", className)}
      data-slot="calendar-view-control"
      {...rest}
    />
  );
};

export const CalendarPrevTrigger = (
  props: React.ComponentProps<typeof ArkDatePicker.PrevTrigger>
) => (
  <ArkDatePicker.PrevTrigger
    asChild
    data-slot="calendar-prev-trigger"
    {...props}
  >
    <Button size="icon-sm" variant="ghost">
      <ChevronLeft />
    </Button>
  </ArkDatePicker.PrevTrigger>
);

export const CalendarNextTrigger = (
  props: React.ComponentProps<typeof ArkDatePicker.NextTrigger>
) => (
  <ArkDatePicker.NextTrigger
    asChild
    data-slot="calendar-next-trigger"
    {...props}
  >
    <Button size="icon-sm" variant="ghost">
      <ChevronRight />
    </Button>
  </ArkDatePicker.NextTrigger>
);

export const CalendarViewTrigger = (
  props: React.ComponentProps<typeof ArkDatePicker.ViewTrigger>
) => {
  const { className, ...rest } = props;

  return (
    <ArkDatePicker.ViewTrigger
      className={cn("rounded border-0 px-5 py-1", className)}
      data-slot="calendar-view-trigger"
      {...rest}
    />
  );
};

export const CalendarRangeText = (
  props: React.ComponentProps<typeof ArkDatePicker.RangeText>
) => {
  const { className, ...rest } = props;

  return (
    <ArkDatePicker.RangeText
      className={cn(className)}
      data-slot="calendar-range-text"
      {...rest}
    />
  );
};

export const CalendarTable = (
  props: React.ComponentProps<typeof ArkDatePicker.Table>
) => {
  const { className, ...rest } = props;

  return (
    <ArkDatePicker.Table
      className={cn("w-full min-w-[240px] border-collapse", className)}
      data-slot="calendar-table"
      {...rest}
    />
  );
};

export const CalendarTableHead = (
  props: React.ComponentProps<typeof ArkDatePicker.TableHead>
) => <ArkDatePicker.TableHead data-slot="calendar-table-head" {...props} />;

export const CalendarTableRow = (
  props: React.ComponentProps<typeof ArkDatePicker.TableRow>
) => (
  <ArkDatePicker.TableRow
    className="mt-2 flex w-full"
    data-slot="calendar-table-row"
    {...props}
  />
);

export const CalendarTableHeader = (
  props: React.ComponentProps<typeof ArkDatePicker.TableHeader>
) => {
  const { className, ...rest } = props;

  return (
    <ArkDatePicker.TableHeader
      className={cn(
        "flex-1",
        "rounded-lg",
        "select-none font-normal text-[0.8rem] text-muted-foreground",
        className
      )}
      data-slot="calendar-table-header"
      {...rest}
    />
  );
};

export const CalendarTableBody = (
  props: React.ComponentProps<typeof ArkDatePicker.TableBody>
) => {
  const { className, ...rest } = props;

  return (
    <ArkDatePicker.TableBody
      className={cn(className)}
      data-slot="calendar-table-body"
      {...rest}
    />
  );
};

export const CalendarTableCell = (
  props: React.ComponentProps<typeof ArkDatePicker.TableCell>
) => {
  const { className, ...rest } = props;

  return (
    <ArkDatePicker.TableCell
      className={cn(
        "group/day",
        "relative",
        "size-full",
        "p-0",
        "select-none text-center",
        "aspect-square",
        "[&:first-child[aria-selected=true]_div]:rounded-l-lg [&:last-child[aria-selected=true]_div]:rounded-r-lg",
        className
      )}
      data-slot="calendar-table-cell"
      {...rest}
    />
  );
};

export const CalendarTableCellTrigger = (
  props: React.ComponentProps<typeof ArkDatePicker.TableCellTrigger>
) => {
  const { className, ...rest } = props;

  return (
    <ArkDatePicker.TableCellTrigger
      className={cn(
        "flex shrink-0 flex-col items-center justify-center gap-1 whitespace-nowrap",
        "aspect-square size-auto w-full min-w-8",
        "select-none font-normal text-foreground text-sm leading-none",
        "transition-[background-color,color]",
        "rounded-lg border border-transparent",
        "hover:bg-accent hover:text-accent-foreground",
        "data-today:after:absolute data-today:after:bottom-1 data-today:after:left-1/2 data-today:after:size-1 data-today:after:-translate-x-1/2 data-today:after:rounded-full data-today:after:bg-primary",
        "data-focus:bg-accent/30 data-focus:text-primary",
        "outline-none focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-ring/32",
        "data-disabled:pointer-events-none data-disabled:opacity-64",
        "data-in-range:not-[data-selected]:bg-primary/10",
        "data-selected:bg-primary! data-selected:text-primary-foreground!",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20",
        "data-hover-range-end:rounded-r-lg! data-range-end:rounded-r-lg",
        "data-range-start:rounded-l-lg",
        "data-in-range:rounded-none",
        "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      data-slot="calendar-table-cell-trigger"
      {...rest}
    />
  );
};
