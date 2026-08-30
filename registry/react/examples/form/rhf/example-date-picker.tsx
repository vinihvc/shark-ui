"use client";

import type { DateValue } from "@ark-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@registry/react/components/toast";
import { CalendarIcon } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
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

const Example = () => {
  const form = useForm({
    defaultValues: {
      interviewDate: [],
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    toast.info({
      description: (
        <pre className="mt-2">
          <code>
            {JSON.stringify({ interviewDate: data.interviewDate[0] }, null, 2)}
          </code>
        </pre>
      ),
      id: "interview-date-submitted",
      title: "Interview preference saved",
    });
  };

  return (
    <Card asChild className="w-full sm:max-w-md">
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CardHeader>
          <CardTitle>Scheduling</CardTitle>
          <CardDescription>
            Pick a day that works for a first-round interview. We will confirm
            by email.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <Controller
              control={form.control}
              name="interviewDate"
              render={({ field, fieldState }) => (
                <Field invalid={fieldState.invalid}>
                  <DatePicker
                    onValueChange={({ value }) => field.onChange(value)}
                    value={field.value}
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
                  <FieldError>{fieldState.error?.message}</FieldError>
                </Field>
              )}
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

const formSchema = z.object({
  interviewDate: z
    .array(z.custom<DateValue>((val) => val != null && typeof val === "object"))
    .min(1, {
      message: "Please choose your preferred interview date.",
    }),
});

export default Example;
