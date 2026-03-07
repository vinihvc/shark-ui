import {
  Calendar,
  CalendarTable,
  CalendarTableDays,
  CalendarViewControl,
  CalendarViewDate,
  CalendarWeekDays,
} from "@/registry/react/components/calendar";
import { Card, CardContent } from "@/registry/react/components/card";

const CalendarDemo = () => (
  <Card className="[--space:--spacing(2)]">
    <CardContent>
      <Calendar>
        <CalendarViewControl>
          <CalendarViewDate />
        </CalendarViewControl>
        <CalendarTable>
          <CalendarWeekDays />
          <CalendarTableDays />
        </CalendarTable>
      </Calendar>
    </CardContent>
  </Card>
);

export default CalendarDemo;
