"use client";

import {
  DatePicker as ArkCalendar,
  parseDate as arkParseDate,
} from "@ark-ui/react/date-picker";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import { nativeSelectVariants } from "@/registry/react/components/native-select";

export const parseDate = arkParseDate;

export const Calendar = (
  props: React.ComponentProps<typeof ArkCalendar.Root>
) => {
  const { lazyMount = true, unmountOnExit = true, className, ...rest } = props;

  return (
    <ArkCalendar.Root
      className={cn("[--cell-size:--spacing(8)]", "w-fit", className)}
      data-slot="calendar"
      inline
      lazyMount={lazyMount}
      unmountOnExit={unmountOnExit}
      {...rest}
    />
  );
};

export const CalendarControl = (
  props: React.ComponentProps<typeof ArkCalendar.Control>
) => (
  <ArkCalendar.Control
    className="inline-flex items-center gap-2"
    data-slot="calendar-control"
    {...props}
  />
);

export const CalendarLabel = (
  props: React.ComponentProps<typeof ArkCalendar.Label>
) => (
  <ArkCalendar.Label
    className="font-medium text-sm"
    data-slot="calendar-label"
    {...props}
  />
);

export const CalendarTrigger = (
  props: React.ComponentProps<typeof ArkCalendar.Trigger>
) => {
  return <ArkCalendar.Trigger data-slot="calendar-trigger" {...props} />;
};

export const CalendarPresetTrigger = (
  props: React.ComponentProps<typeof ArkCalendar.PresetTrigger>
) => {
  const { className, ...rest } = props;

  return (
    <ArkCalendar.PresetTrigger
      className={cn(className)}
      data-slot="calendar-preset-trigger"
      {...rest}
    />
  );
};

export const CalendarViewDate = (
  props: React.ComponentProps<typeof ArkCalendar.RangeText>
) => {
  const { className, ...rest } = props;

  return (
    <ArkCalendar.RangeText
      className={cn("font-medium text-sm", className)}
      data-slot="calendar-range-text"
      {...rest}
    />
  );
};

export const CalendarTodayTrigger = (
  props: React.ComponentProps<typeof Button>
) => {
  const { variant = "outline", size = "lg", ...rest } = props;

  return (
    <CalendarContext>
      {(calendar) => (
        <Button
          data-slot="calendar-today-trigger"
          onClick={() => calendar.selectToday()}
          size={size}
          variant={variant}
          {...rest}
        >
          Today
        </Button>
      )}
    </CalendarContext>
  );
};

export const CalendarClearTrigger = (
  props: React.ComponentProps<typeof ArkCalendar.ClearTrigger>
) => {
  const { className, ...rest } = props;

  return (
    <ArkCalendar.ClearTrigger
      className={cn(className)}
      data-slot="calendar-clear-trigger"
      {...rest}
    />
  );
};

export const CalendarYearSelect = (
  props: React.ComponentProps<typeof ArkCalendar.YearSelect>
) => {
  const { className, ...rest } = props;

  return (
    <div
      className={cn("relative w-fit has-[select:disabled]:opacity-64")}
      data-slot="calendar-year-select-wrapper"
    >
      <ArkCalendar.YearSelect
        className={cn(nativeSelectVariants())}
        data-slot="calendar-year-select"
        {...rest}
      />
      <ChevronDownIcon
        aria-hidden="true"
        className={cn(
          "absolute inset-e-2.5 top-1/2 -translate-y-1/2",
          "size-4",
          "select-none text-muted-foreground",
          "pointer-events-none"
        )}
        data-slot="calendar-year-select-icon"
      />
    </div>
  );
};

export const CalendarMonthSelect = (
  props: React.ComponentProps<typeof ArkCalendar.MonthSelect>
) => {
  const { className, ...rest } = props;

  return (
    <div
      className={cn("relative w-fit has-[select:disabled]:opacity-64")}
      data-slot="calendar-year-select-wrapper"
    >
      <ArkCalendar.MonthSelect
        className={cn(nativeSelectVariants(), className)}
        data-slot="calendar-year-select"
        {...rest}
      />
      <ChevronDownIcon
        aria-hidden="true"
        className={cn(
          "absolute inset-e-2.5 top-1/2 -translate-y-1/2",
          "size-4",
          "select-none text-muted-foreground",
          "pointer-events-none"
        )}
        data-slot="calendar-year-select-icon"
      />
    </div>
  );
};

export const CalendarView = (
  props: React.ComponentProps<typeof ArkCalendar.View>
) => {
  const { className, ...rest } = props;

  return (
    <ArkCalendar.View
      className={cn("flex flex-col gap-1", className)}
      data-slot="calendar-view"
      {...rest}
    />
  );
};

export const CalendarContext = (
  props: React.ComponentProps<typeof ArkCalendar.Context>
) => <ArkCalendar.Context data-slot="calendar-context" {...props} />;

export const CalendarViewControl = (
  props: React.ComponentProps<typeof ArkCalendar.ViewControl>
) => {
  const { className, ...rest } = props;

  return (
    <ArkCalendar.ViewControl
      className={cn(
        "relative",
        "h-auto w-full",
        "flex items-center gap-1.5",
        className
      )}
      data-slot="calendar-view-control"
      {...rest}
    />
  );
};

export const CalendarPrevTrigger = (
  props: React.ComponentProps<typeof ArkCalendar.PrevTrigger>
) => {
  return (
    <ArkCalendar.PrevTrigger
      asChild
      data-slot="calendar-prev-trigger"
      {...props}
    >
      <Button className="me-auto" size="icon-md" variant="ghost">
        <ChevronLeftIcon aria-hidden className="rtl:rotate-180" />
      </Button>
    </ArkCalendar.PrevTrigger>
  );
};

export const CalendarNextTrigger = (
  props: React.ComponentProps<typeof ArkCalendar.NextTrigger>
) => {
  return (
    <ArkCalendar.NextTrigger
      asChild
      data-slot="calendar-next-trigger"
      {...props}
    >
      <Button className="ms-auto" size="icon-md" variant="ghost">
        <ChevronRightIcon aria-hidden className="rtl:rotate-180" />
      </Button>
    </ArkCalendar.NextTrigger>
  );
};

export const CalendarTable = (
  props: React.ComponentProps<typeof ArkCalendar.Table>
) => {
  const { className, ...rest } = props;

  return (
    <ArkCalendar.Table
      className={cn("group", "w-full min-w-60", "border-collapse", className)}
      data-slot="calendar-table"
      {...rest}
    />
  );
};

interface CalendarWeekDaysProps
  extends React.ComponentProps<typeof ArkCalendar.TableHead> {
  /**
   * The format of the week days
   *
   * @default 'narrow'
   */
  format?: "narrow" | "short" | "long";
}

export const CalendarWeekDays = (props: CalendarWeekDaysProps) => {
  const { format = "narrow", className, ...rest } = props;

  return (
    <CalendarContext>
      {(calendar) => (
        <CalendarTableHead
          className={cn(className)}
          data-slot="calendar-table-head"
          {...rest}
        >
          <CalendarTableRow>
            {calendar.weekDays.map((weekDay) => (
              <CalendarTableHeader key={weekDay.short}>
                {weekDay[format]}
              </CalendarTableHeader>
            ))}
          </CalendarTableRow>
        </CalendarTableHead>
      )}
    </CalendarContext>
  );
};

export const CalendarTableDays = (
  props: React.ComponentProps<typeof CalendarTableBody>
) => {
  const { tabIndex, ...rest } = props;
  return (
    <CalendarContext>
      {(calendar) => (
        <CalendarTableBody {...rest}>
          {calendar.weeks.map((week, index) => (
            <CalendarTableRow key={index}>
              {week.map((day) => (
                <CalendarTableCell
                  key={day.day}
                  tabIndex={tabIndex ?? undefined}
                  value={day}
                >
                  {day.day}
                </CalendarTableCell>
              ))}
            </CalendarTableRow>
          ))}
        </CalendarTableBody>
      )}
    </CalendarContext>
  );
};

interface CalendarTableNextMonthProps
  extends React.ComponentProps<typeof CalendarTableBody> {
  /**
   * The number of months to offset
   *
   * @default 1
   */
  months?: number;
}

export const CalendarTableNextMonth = (props: CalendarTableNextMonthProps) => {
  const { months = 1, tabIndex, ...rest } = props;

  return (
    <CalendarContext>
      {(calendar) => {
        const offset = calendar.getOffset({ months });

        return (
          <CalendarTableBody {...rest}>
            {offset.weeks.map((week, index) => (
              <CalendarTableRow key={index}>
                {week.map((day) => (
                  <CalendarTableCell
                    key={day.day}
                    tabIndex={tabIndex ?? undefined}
                    value={day}
                    visibleRange={offset.visibleRange}
                  >
                    {day.day}
                  </CalendarTableCell>
                ))}
              </CalendarTableRow>
            ))}
          </CalendarTableBody>
        );
      }}
    </CalendarContext>
  );
};

export const CalendarTableHead = (
  props: React.ComponentProps<typeof ArkCalendar.TableHead>
) => <ArkCalendar.TableHead data-slot="calendar-table-head" {...props} />;

export const CalendarTableRow = (
  props: React.ComponentProps<typeof ArkCalendar.TableRow>
) => {
  const { className, ...rest } = props;
  return (
    <ArkCalendar.TableRow
      className={cn("mt-1 flex w-full", className)}
      data-slot="calendar-table-row"
      {...rest}
    />
  );
};

export const CalendarTableHeader = (
  props: React.ComponentProps<typeof ArkCalendar.TableHeader>
) => {
  const { className, ...rest } = props;

  return (
    <ArkCalendar.TableHeader
      className={cn(
        "h-(--cell-size) w-full",
        "flex items-center justify-center",
        "select-none font-medium text-muted-foreground/64 text-xs",
        "rounded-lg",
        className
      )}
      data-slot="calendar-table-header"
      {...rest}
    />
  );
};

export const CalendarTableBody = (
  props: React.ComponentProps<typeof ArkCalendar.TableBody>
) => {
  return <ArkCalendar.TableBody data-slot="calendar-table-body" {...props} />;
};

export const CalendarTableCell = (
  props: React.ComponentProps<typeof ArkCalendar.TableCell>
) => {
  const { value, visibleRange, className, ...rest } = props;

  return (
    <ArkCalendar.TableCell
      className={cn(
        "relative",
        "h-(--cell-size) w-full",
        "select-none text-center",
        "[&:first-child[aria-selected=true]_div]:rounded-l-md",
        "[&:last-child[aria-selected=true]_div]:rounded-r-md"
      )}
      data-slot="calendar-table-cell"
      value={value}
      visibleRange={visibleRange}
    >
      <ArkCalendar.TableCellTrigger
        className={cn(
          "inline-flex items-center justify-center gap-1",
          "h-(--cell-size) w-full min-w-(--cell-size) data-[view=day]:h-(--cell-size)",
          "select-none whitespace-nowrap font-normal text-base text-foreground leading-none sm:text-sm",
          "rounded-md border border-transparent",
          "hover:bg-accent hover:text-accent-foreground",
          "data-today:data-selected:after:bg-background data-today:after:absolute data-today:after:bottom-1 data-today:after:left-1/2 data-today:after:size-1 data-today:after:-translate-x-1/2 data-today:after:rounded-full data-today:after:bg-primary",
          "data-focus:border-primary data-focus:bg-accent/30 data-focus:text-primary data-focus:ring-[3px] data-focus:ring-ring/32",
          "outline-none focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-ring/32",
          "data-disabled:pointer-events-none data-disabled:opacity-64",
          "data-unavailable:pointer-events-none data-unavailable:line-through data-unavailable:opacity-64",
          "data-[view=day]:data-in-range:rounded-none data-[view=day]:data-in-range:not-[data-selected]:bg-primary/10",
          "data-selected:bg-primary! data-selected:text-primary-foreground!",
          "data-hover-range-start:rounded-l-md! data-range-start:rounded-l-md!",
          "data-hover-range-end:rounded-r-md! data-range-end:rounded-r-md!",
          "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
          className
        )}
        data-slot="calendar-table-cell-trigger"
        {...rest}
      />
    </ArkCalendar.TableCell>
  );
};
