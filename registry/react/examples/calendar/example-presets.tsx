import { Button } from "@/registry/react/components/button";
import {
  Calendar,
  CalendarMonthSelect,
  CalendarNextTrigger,
  CalendarPresetTrigger,
  CalendarPrevTrigger,
  CalendarTable,
  CalendarTableDays,
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
  <Calendar selectionMode="range">
    <Card className="w-full max-w-xs [--space:--spacing(2)]">
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
      <CardFooter className="flex flex-wrap">
        {presets.map((preset) => (
          <CalendarPresetTrigger
            asChild
            key={preset.value}
            value={preset.value}
          >
            <Button className="flex-1" size="sm" variant="outline">
              {preset.label}
            </Button>
          </CalendarPresetTrigger>
        ))}
      </CardFooter>
    </Card>
  </Calendar>
);

const presets = [
  { label: "Last 7 days", value: "last7Days" as const },
  { label: "Last 14 days", value: "last14Days" as const },
  { label: "Last 30 days", value: "last30Days" as const },
  { label: "This month", value: "thisMonth" as const },
];

export default Example;
