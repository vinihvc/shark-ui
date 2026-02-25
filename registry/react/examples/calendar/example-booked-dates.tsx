"use client";

import { getDay } from "date-fns";
import {
  Calendar,
  CalendarMonthSelect,
  CalendarTable,
  CalendarTableDays,
  CalendarViewControl,
  CalendarWeekDays,
  CalendarYearSelect,
} from "@/registry/react/components/calendar";
import { Card, CardContent } from "@/registry/react/components/card";

const Example = () => (
  <Card className="[--space:--spacing(2)]">
    <CardContent>
      <Calendar isDateUnavailable={isWeekend}>
        <CalendarViewControl>
          <CalendarMonthSelect />
          <CalendarYearSelect />
        </CalendarViewControl>
        <CalendarTable>
          <CalendarWeekDays />
          <CalendarTableDays />
        </CalendarTable>
      </Calendar>
    </CardContent>
  </Card>
);

const isWeekend = (date: { year: number; month: number; day: number }) => {
  const dayOfWeek = getDay(new Date(date.year, date.month - 1, date.day));
  return dayOfWeek === 0 || dayOfWeek === 6;
};

export default Example;
