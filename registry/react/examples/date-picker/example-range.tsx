import {
  CalendarMonthSelect,
  CalendarTable,
  CalendarTableDays,
  CalendarViewControl,
  CalendarWeekDays,
  CalendarYearSelect,
} from "@/registry/react/components/calendar";
import { Card, CardContent } from "@/registry/react/components/card";
import {
  DatePicker,
  DatePickerContent,
  DatePickerRangeInput,
} from "@/registry/react/components/date-picker";

const Example = () => (
  <Card>
    <CardContent>
      <DatePicker selectionMode="range">
        <DatePickerRangeInput
          endPlaceholder="End date"
          showClear
          startPlaceholder="Start date"
        />
        <DatePickerContent>
          <CalendarViewControl>
            <CalendarMonthSelect />
            <CalendarYearSelect />
          </CalendarViewControl>
          <CalendarTable>
            <CalendarWeekDays />
            <CalendarTableDays />
          </CalendarTable>
        </DatePickerContent>
      </DatePicker>
    </CardContent>
  </Card>
);

export default Example;
