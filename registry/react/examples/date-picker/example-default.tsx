"use client";

import { CalendarIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  CalendarMonthSelect,
  CalendarTable,
  CalendarTableDays,
  CalendarViewControl,
  CalendarWeekDays,
  CalendarYearSelect,
} from "@/registry/react/components/calendar";
import {
  DatePicker,
  DatePickerContent,
  DatePickerTrigger,
  DatePickerValue,
} from "@/registry/react/components/date-picker";

const Example = () => (
  <DatePicker>
    <DatePickerTrigger asChild>
      <Button className="min-w-56" variant="outline">
        <CalendarIcon aria-hidden="true" />
        <DatePickerValue placeholder="Pick a date" />
      </Button>
    </DatePickerTrigger>
    <DatePickerContent>
      <CalendarViewControl>
        <CalendarMonthSelect />
        <CalendarYearSelect />
      </CalendarViewControl>
      <CalendarTable>
        <CalendarWeekDays />
        <CalendarTableDays />
      </CalendarTable>
    </DatePickerContent>
  </DatePicker>
);

export default Example;
