"use client";

import type { DateValue } from "@ark-ui/react";
import {
  Form,
  Field as FormischField,
  reset,
  type SubmitHandler,
  useForm,
} from "@formisch/react";
import { toast } from "@registry/react/components/toast";
import { CalendarIcon } from "lucide-react";
import * as v from "valibot";
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
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/react/components/card";
import {
  DatePicker,
  DatePickerContent,
  DatePickerLabel,
  DatePickerTrigger,
  DatePickerValue,
} from "@/registry/react/components/date-picker";
import {
  Field,
  FieldError,
  FieldGroup,
} from "@/registry/react/components/field";

const formSchema = v.object({
  interviewDate: v.custom<DateValue[]>(
    (val) => Array.isArray(val) && val.length >= 1,
    "Please choose your preferred interview date."
  ),
});

const Example = () => {
  const form = useForm({
    initialInput: { interviewDate: [] as DateValue[] },
    schema: formSchema,
  });

  const onSubmit: SubmitHandler<typeof formSchema> = (output) => {
    toast.info({
      description: (
        <pre className="mt-2">
          <code>
            {JSON.stringify(
              { interviewDate: output.interviewDate[0] },
              null,
              2
            )}
          </code>
        </pre>
      ),
      id: "interview-date-submitted",
      title: "Interview preference saved",
    });
  };

  return (
    <Card asChild className="w-full sm:max-w-md">
      <Form of={form} onSubmit={onSubmit}>
        <CardHeader>
          <CardTitle>Scheduling</CardTitle>
          <CardDescription>
            Pick a day that works for a first-round interview. We will confirm
            by email.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <FormischField of={form} path={["interviewDate"]}>
              {(field) => {
                const value = (field.input as DateValue[]) ?? [];
                return (
                  <Field invalid={Boolean(field.errors?.length)}>
                    <DatePicker
                      onValueChange={({ value }) => field.onChange(value)}
                      value={value}
                    >
                      <DatePickerLabel>
                        Preferred interview date
                      </DatePickerLabel>
                      <DatePickerTrigger asChild>
                        <Button className="w-full" variant="outline">
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
                    <FieldError>{field.errors?.[0]}</FieldError>
                  </Field>
                );
              }}
            </FormischField>
          </FieldGroup>
        </CardContent>
        <CardFooter>
          <Button onClick={() => reset(form)} type="button" variant="outline">
            Reset
          </Button>
          <Button type="submit">Save</Button>
        </CardFooter>
      </Form>
    </Card>
  );
};

export default Example;
