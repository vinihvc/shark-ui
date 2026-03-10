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

export const CalendarDemo = () => {
  return (
    <Card className="[--space:--spacing(2)]">
      <CardContent>
        <Calendar className="w-full" selectionMode="range" tabIndex={-1}>
          <CalendarViewControl>
            <CalendarMonthSelect tabIndex={-1} />
            <CalendarYearSelect tabIndex={-1} />
          </CalendarViewControl>
          <CalendarTable>
            <CalendarWeekDays />
            <CalendarTableDays />
          </CalendarTable>
        </Calendar>
      </CardContent>
    </Card>
  );
};
