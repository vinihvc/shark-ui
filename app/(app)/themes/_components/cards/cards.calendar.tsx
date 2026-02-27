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

export const CardsCalendar = () => (
  <Card className="hidden p-0 sm:flex">
    <CardContent>
      <Calendar selectionMode="range">
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
