"use client";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import React from "react";
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
} from "@/registry/react/components/date-picker";

const Example = () => {
  const [value, setValue] = React.useState([parseDate("2025-01-15")]);

  const formattedDate = format(value[0].toString(), "PPP");

  return (
    <DatePicker onValueChange={({ value }) => setValue(value)} value={value}>
      <DatePickerTrigger asChild>
        <Button className="min-w-48" variant="outline">
          <CalendarIcon aria-hidden="true" />
          {formattedDate}
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
