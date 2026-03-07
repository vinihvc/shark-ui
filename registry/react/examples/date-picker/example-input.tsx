import {
  CalendarMonthSelect,
  CalendarTable,
  CalendarTableDays,
  CalendarViewControl,
  CalendarWeekDays,
  CalendarYearSelect,
} from "@/registry/react/components/calendar";
import {
  DatePicker,
  DatePickerContent,
  DatePickerInput,
} from "@/registry/react/components/date-picker";

const Example = () => (
  <DatePicker>
    <DatePickerInput placeholder="Select date" />
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
);

export default Example;
