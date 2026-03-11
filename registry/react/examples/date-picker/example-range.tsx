"use client";

import { CalendarIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  CalendarMonthSelect,
  CalendarNextTrigger,
  CalendarPrevTrigger,
  CalendarTable,
  CalendarTableDays,
  CalendarViewControl,
  CalendarWeekDays,
  CalendarYearSelect,
  parseDate,
} from "@/registry/react/components/calendar";
import {
  DatePicker,
  DatePickerContent,
  DatePickerTrigger,
  DatePickerValue,
} from "@/registry/react/components/date-picker";

const Example = () => {
  return (
    <DatePicker focusedValue={parseDate(new Date())} selectionMode="range">
      <DatePickerTrigger asChild>
        <Button className="min-w-56" variant="outline">
          <CalendarIcon aria-hidden="true" />
          <DatePickerValue placeholder="Pick a date range" />
        </Button>
      </DatePickerTrigger>
      <DatePickerContent>
        <CalendarViewControl>
          <CalendarPrevTrigger />
          <CalendarMonthSelect />
          <CalendarYearSelect />
          <CalendarNextTrigger />
        </CalendarViewControl>
        <CalendarTable>
          <CalendarWeekDays />
          <CalendarTableDays />
        </CalendarTable>
      </DatePickerContent>
    </DatePicker>
  );
};

export default Example;
