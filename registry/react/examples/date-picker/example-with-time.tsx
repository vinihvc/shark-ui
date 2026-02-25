import {
  CalendarMonthSelect,
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
import {
  DatePicker,
  DatePickerContent,
  DatePickerInput,
  DatePickerTimer,
} from "@/registry/react/components/date-picker";
import { Field, FieldLabel } from "@/registry/react/components/field";

const Example = () => (
  <Card className="w-fit">
    <CardContent>
      <DatePicker>
        <DatePickerInput />
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
    <CardFooter>
      <Field>
        <FieldLabel htmlFor="time-from">Time</FieldLabel>
        <DatePickerTimer id="time-from" />
      </Field>
    </CardFooter>
  </Card>
);

export default Example;
