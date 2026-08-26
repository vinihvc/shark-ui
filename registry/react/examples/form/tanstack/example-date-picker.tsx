"use client";

import type { DateValue } from "@ark-ui/react";
import { toast } from "@registry/react/components/toast";
import { useForm } from "@tanstack/react-form";
import { CalendarIcon } from "lucide-react";
import * as z from "zod";
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

const formSchema = z.object({
  interviewDate: z
    .array(z.custom<DateValue>((val) => val != null && typeof val === "object"))
    .min(1, {
      message: "Please choose your preferred interview date.",
    }),
});

const Example = () => {
  const form = useForm({
    defaultValues: {
      interviewDate: [] as DateValue[],
    },
    onSubmit: ({ value }) => {
      toast.info({
        description: (
          <pre className="mt-2">
            <code>
              {JSON.stringify(
                { interviewDate: value.interviewDate[0] },
                null,
                2
              )}
            </code>
          </pre>
        ),
        id: "interview-date-submitted",
        title: "Interview preference saved",
      });
    },
    validators: {
      onSubmit: formSchema,
    },
  });

  return (
    <Card asChild className="w-full sm:max-w-md">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <CardHeader>
          <CardTitle>Scheduling</CardTitle>
          <CardDescription>
            Pick a day that works for a first-round interview. We will confirm
            by email.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <form.Field
              children={(field) => (
                <Field invalid={!field.state.meta.isValid}>
                  <DatePicker
                    onValueChange={({ value }) => field.handleChange(value)}
                    value={field.state.value}
                  >
                    <DatePickerLabel>Preferred interview date</DatePickerLabel>
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
                  <FieldError>
                    {field.state.meta.errors.map((e) => e?.message).join(", ")}
                  </FieldError>
                </Field>
              )}
              name="interviewDate"
            />
          </FieldGroup>
        </CardContent>
        <CardFooter>
          <Button onClick={() => form.reset()} type="button" variant="outline">
            Reset
          </Button>
          <Button type="submit">Save</Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default Example;
