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

const Example = () => (
  <Card className="[--space:--spacing(2)]">
    <CardContent>
      <Calendar selectionMode="range">
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
);

export default Example;
