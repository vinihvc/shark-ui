"use client";

import { parseDate } from "@ark-ui/react";
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
} from "@/registry/react/components/calendar";
import {
  DatePicker,
  DatePickerContent,
  DatePickerTrigger,
  DatePickerValue,
} from "@/registry/react/components/date-picker";

const Example = () => {
  const [value, setValue] = React.useState([parseDate(new Date(Date.now()))]);

  const handleValueChange = (details: { value: typeof value }) => {
    setValue(details.value);
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <DatePicker onValueChange={handleValueChange} value={value}>
        <DatePickerTrigger asChild>
          <Button className="min-w-56" variant="outline">
            <CalendarIcon />
            <DatePickerValue placeholder="Pick a date" />
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
      <p className="text-muted-foreground text-sm">
        {value.map((date) => date.toString()).join(", ")}
      </p>
    </div>
  );
};

export default Example;
