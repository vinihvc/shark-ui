import { CalendarIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  CalendarMonthSelect,
  CalendarNextTrigger,
  CalendarPrevTrigger,
  CalendarTable,
  CalendarTableDays,
  CalendarViewControl,
  CalendarWeekDays,
  CalendarYearSelect,
} from "@/registry/react/components/calendar";
import {
  DatePicker,
  DatePickerContent,
  DatePickerTrigger,
  DatePickerValue,
} from "@/registry/react/components/date-picker";
import {
  Field,
  FieldError,
  FieldLabel,
} from "@/registry/react/components/field";

const Example = () => (
  <Field className="w-fit" invalid>
    <FieldLabel>Appointment</FieldLabel>
    <DatePicker invalid>
      <DatePickerTrigger asChild>
        <Button className="min-w-56" variant="outline">
          <CalendarIcon />
          <DatePickerValue placeholder="Pick a date" />
        </Button>
      </DatePickerTrigger>
      <DatePickerContent>
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
      </DatePickerContent>
    </DatePicker>
    <FieldError>Select a valid date.</FieldError>
  </Field>
);

export default Example;
