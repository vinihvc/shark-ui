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
} from "@/registry/react/components/calendar";
import { Card, CardContent } from "@/registry/react/components/card";

export const CalendarRangeExample = () => {
  return (
    <Card className="[--space:--spacing(2)]">
      <CardContent>
        <Calendar
          className="w-full"
          fixedWeeks
          selectionMode="range"
          tabIndex={-1}
        >
          <CalendarViewControl>
            <CalendarPrevTrigger tabIndex={-1} />
            <CalendarMonthSelect tabIndex={-1} />
            <CalendarYearSelect tabIndex={-1} />
            <CalendarNextTrigger tabIndex={-1} />
          </CalendarViewControl>
          <CalendarTable>
            <CalendarWeekDays />
            <CalendarTableDays tabIndex={-1} />
          </CalendarTable>
        </Calendar>
      </CardContent>
    </Card>
  );
};
