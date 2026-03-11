"use client";

import React from "react";
import {
  Calendar,
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
import { Card, CardContent } from "@/registry/react/components/card";

const Example = () => {
  const [value, setValue] = React.useState([parseDate(new Date(Date.now()))]);

  return (
    <div className="flex flex-col gap-4">
      <Card className="[--space:--spacing(2)]">
        <CardContent>
          <Calendar
            onValueChange={({ value }) => setValue(value)}
            value={value}
          >
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
          </Calendar>
        </CardContent>
      </Card>
      <p className="text-center text-muted-foreground text-sm">
        {value.map((date) => date.toString())}
      </p>
    </div>
  );
};

export default Example;
