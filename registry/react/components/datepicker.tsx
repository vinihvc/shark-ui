import { DatePicker as ArkDatePicker } from "@ark-ui/react/date-picker";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";
import {
  type InputProps,
  inputVariants,
} from "@/registry/react/components/input";
import { Button } from "./button";

export const DatePicker = (
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
      data-slot="datepicker"
      lazyMount={lazyMount}
      open={open}
      unmountOnExit={unmountOnExit}
      {...rest}
    >
      <ArkDatePicker.Content
        className={cn("min-w-72", className)}
        data-slot="datepicker-content"
      >
        {children}
      </ArkDatePicker.Content>
    </ArkDatePicker.Root>
  );
};

export const DatePickerControl = (
  props: React.ComponentProps<typeof ArkDatePicker.Control>
) => {
  const { className, ...rest } = props;

  return (
    <ArkDatePicker.Control
      className={cn("inline-flex gap-2.5", className)}
      data-slot="datepicker-control"
      {...rest}
    />
  );
};

interface DatePickerInputProps
  extends Omit<React.ComponentProps<typeof ArkDatePicker.Input>, "size">,
    Pick<InputProps, "size"> {}

export const DatePickerInput = (props: DatePickerInputProps) => {
  const { size = "md", className, ...rest } = props;

  return (
    <ArkDatePicker.Input
      className={cn(inputVariants({ size }), className)}
      data-slot="datepicker-input"
      {...rest}
    />
  );
};

export const DatePickerYearSelect = (
  props: React.ComponentProps<typeof ArkDatePicker.YearSelect>
) => {
  const { className, ...rest } = props;

  return (
    <span className="relative" data-slot="datepicker-year-select-wrapper">
      <ArkDatePicker.YearSelect
        className={cn(
          "appearance-none",
          "px-2 py-1 pr-6",
          "text-sm",
          "rounded-md border",
          "outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
          className
        )}
        data-slot="datepicker-year-select"
        {...rest}
      />

      <span
        className={cn(
          "absolute inset-y-0 right-1",
          "flex items-center",
          "[&_svg]:size-3.5 [&_svg]:text-muted-foreground"
        )}
      >
        <ChevronDown />
      </span>
    </span>
  );
};

export const DatePickerMonthSelect = (
  props: React.ComponentProps<typeof ArkDatePicker.MonthSelect>
) => {
  const { className, ...rest } = props;

  return (
    <span className="relative">
      <ArkDatePicker.MonthSelect
        className={cn(
          "appearance-none",
          "px-2 py-1 pr-6",
          "text-sm",
          "rounded-md border",
          "outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
          className
        )}
        data-slot="datepicker-month-select"
        {...rest}
      />

      <span
        className={cn(
          "absolute inset-y-0 right-1",
          "flex items-center",
          "[&_svg]:size-3.5 [&_svg]:text-muted-foreground"
        )}
      >
        <ChevronDown />
      </span>
    </span>
  );
};

export const DatePickerView = (
  props: React.ComponentProps<typeof ArkDatePicker.View>
) => {
  const { className, ...rest } = props;

  return (
    <ArkDatePicker.View
      className={cn("flex flex-col gap-2.5", className)}
      data-slot="datepicker-view"
      {...rest}
    />
  );
};

export const DatePickerContext = (
  props: React.ComponentProps<typeof ArkDatePicker.Context>
) => <ArkDatePicker.Context data-slot="datepicker-context" {...props} />;

export const DatePickerViewControl = (
  props: React.ComponentProps<typeof ArkDatePicker.ViewControl>
) => {
  const { className, ...rest } = props;

  return (
    <ArkDatePicker.ViewControl
      className={cn("flex items-center justify-between", className)}
      data-slot="datepicker-view-control"
      {...rest}
    />
  );
};

export const DatePickerPrevTrigger = (
  props: React.ComponentProps<typeof ArkDatePicker.PrevTrigger>
) => (
  <ArkDatePicker.PrevTrigger
    asChild
    data-slot="datepicker-prev-trigger"
    {...props}
  >
    <Button size="icon-sm" variant="ghost">
      <ChevronLeft />
    </Button>
  </ArkDatePicker.PrevTrigger>
);

export const DatePickerNextTrigger = (
  props: React.ComponentProps<typeof ArkDatePicker.NextTrigger>
) => (
  <ArkDatePicker.NextTrigger
    asChild
    data-slot="datepicker-next-trigger"
    {...props}
  >
    <Button size="icon-sm" variant="ghost">
      <ChevronRight />
    </Button>
  </ArkDatePicker.NextTrigger>
);

export const DatePickerViewTrigger = (
  props: React.ComponentProps<typeof ArkDatePicker.ViewTrigger>
) => {
  const { className, ...rest } = props;

  return (
    <ArkDatePicker.ViewTrigger
      className={cn("rounded border-0 px-5 py-1", className)}
      data-slot="datepicker-view-trigger"
      {...rest}
    />
  );
};

export const DatePickerRangeText = (
  props: React.ComponentProps<typeof ArkDatePicker.RangeText>
) => {
  const { className, ...rest } = props;

  return (
    <ArkDatePicker.RangeText
      className={cn(className)}
      data-slot="datepicker-range-text"
      {...rest}
    />
  );
};

export const DatePickerTable = (
  props: React.ComponentProps<typeof ArkDatePicker.Table>
) => {
  const { className, ...rest } = props;

  return (
    <ArkDatePicker.Table
      className={cn("w-full min-w-[240px] border-collapse", className)}
      data-slot="datepicker-table"
      {...rest}
    />
  );
};

export const DatePickerTableHead = (
  props: React.ComponentProps<typeof ArkDatePicker.TableHead>
) => <ArkDatePicker.TableHead data-slot="datepicker-table-head" {...props} />;

export const DatePickerTableRow = (
  props: React.ComponentProps<typeof ArkDatePicker.TableRow>
) => (
  <ArkDatePicker.TableRow
    className="mt-2 flex w-full"
    data-slot="datepicker-table-row"
    {...props}
  />
);

export const DatePickerTableHeader = (
  props: React.ComponentProps<typeof ArkDatePicker.TableHeader>
) => {
  const { className, ...rest } = props;

  return (
    <ArkDatePicker.TableHeader
      className={cn(
        "flex-1 select-none rounded-md font-normal text-[0.8rem] text-muted-foreground",
        className
      )}
      data-slot="datepicker-table-header"
      {...rest}
    />
  );
};

export const DatePickerTableBody = (
  props: React.ComponentProps<typeof ArkDatePicker.TableBody>
) => {
  const { className, ...rest } = props;

  return (
    <ArkDatePicker.TableBody
      className={cn(className)}
      data-slot="datepicker-table-body"
      {...rest}
    />
  );
};

export const DatePickerTableCell = (
  props: React.ComponentProps<typeof ArkDatePicker.TableCell>
) => {
  const { className, ...rest } = props;

  return (
    <ArkDatePicker.TableCell
      className={cn(
        "group/day",
        "size-full",
        "relative",
        "p-0",
        "select-none text-center",
        "aspect-square",
        "[&:first-child[aria-selected=true]_div]:rounded-l-md [&:last-child[aria-selected=true]_div]:rounded-r-md",
        className
      )}
      data-slot="datepicker-table-cell"
      {...rest}
    />
  );
};

export const DatePickerTableCellTrigger = (
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
        "rounded-md",
        "hover:bg-accent hover:text-accent-foreground",
        "data-today:bg-primary/5 data-today:text-primary",
        "data-focus:bg-accent/30 data-focus:text-primary",
        "outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
        "data-disabled:pointer-events-none data-disabled:opacity-20",
        "data-in-range:not-[data-selected]:bg-primary/10",
        "data-selected:bg-primary! data-selected:text-primary-foreground!",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20",
        "data-hover-range-end:rounded-r-md! data-range-end:rounded-r-md",
        "data-range-start:rounded-l-md",
        "data-in-range:rounded-none",
        "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      data-slot="datepicker-table-cell-trigger"
      {...rest}
    />
  );
};
