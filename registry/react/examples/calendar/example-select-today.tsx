import {
  Calendar,
  CalendarMonthSelect,
  CalendarNextTrigger,
  CalendarPrevTrigger,
  CalendarTable,
  CalendarTableDays,
  CalendarTodayTrigger,
  CalendarViewControl,
  CalendarWeekDays,
  CalendarYearSelect,
} from "@/registry/react/components/calendar";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/registry/react/components/card";

const Example = () => (
  <Calendar>
    <Card className="[--space:--spacing(2)]">
      <CardContent>
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
      </CardContent>
      <CardFooter>
        <CalendarTodayTrigger className="w-full" />
      </CardFooter>
    </Card>
  </Calendar>
);

export default Example;
