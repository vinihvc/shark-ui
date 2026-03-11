"use client";

import React from "react";
import {
  Calendar,
  CalendarNextTrigger,
  CalendarPrevTrigger,
  CalendarTable,
  CalendarTableDays,
  CalendarTableNextMonth,
  CalendarViewControl,
  CalendarViewDate,
  CalendarWeekDays,
  parseDate,
} from "@/registry/react/components/calendar";
import { Card, CardContent } from "@/registry/react/components/card";

const Example = () => {
  const [value, setValue] = React.useState([parseDate(new Date(Date.now()))]);

  return (
    <Card className="[--space:--spacing(2)]">
      <CardContent>
        <Calendar
          numOfMonths={2}
          onValueChange={({ value }) => setValue(value)}
          selectionMode="range"
          value={value}
        >
          <CalendarViewControl>
            <CalendarPrevTrigger />
            <CalendarViewDate />
            <CalendarNextTrigger />
          </CalendarViewControl>
          <div className="flex gap-4">
            <CalendarTable>
              <CalendarWeekDays />
              <CalendarTableDays />
            </CalendarTable>
            <CalendarTable>
              <CalendarWeekDays />
              <CalendarTableNextMonth />
            </CalendarTable>
          </div>
        </Calendar>
      </CardContent>
    </Card>
  );
};

export default Example;
