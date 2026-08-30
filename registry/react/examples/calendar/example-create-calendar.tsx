"use client";

import { PersianCalendar } from "@internationalized/date";
import {
  Calendar,
  CalendarNextTrigger,
  CalendarPrevTrigger,
  CalendarTable,
  CalendarTableDays,
  CalendarViewControl,
  CalendarViewDate,
  CalendarWeekDays,
} from "@/registry/react/components/calendar";
import { Card, CardContent } from "@/registry/react/components/card";

const Example = () => (
  <Card className="[--space:--spacing(2)]">
    <CardContent>
      <Calendar createCalendar={createCalendar} locale="fa-IR">
        <CalendarViewControl>
          <CalendarPrevTrigger />
          <CalendarViewDate />
          <CalendarNextTrigger />
        </CalendarViewControl>
        <CalendarTable>
          <CalendarWeekDays />
          <CalendarTableDays />
        </CalendarTable>
      </Calendar>
    </CardContent>
  </Card>
);

const createCalendar = (identifier: string) => {
  switch (identifier) {
    case "persian":
      return new PersianCalendar();
    default:
      throw new Error(`Unsupported calendar: ${identifier}`);
  }
};

export default Example;
