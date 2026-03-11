"use client";

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
  parseDate,
} from "@/registry/react/components/calendar";
import {
  DatePicker,
  DatePickerContent,
  DatePickerPresetTrigger,
  DatePickerTrigger,
  DatePickerValue,
} from "@/registry/react/components/date-picker";

const Example = () => {
  return (
    <DatePicker defaultValue={[parseDate(new Date())]}>
      <DatePickerTrigger asChild>
        <Button className="min-w-40" variant="outline">
          <CalendarIcon aria-hidden="true" />
          <DatePickerValue />
        </Button>
      </DatePickerTrigger>
      <DatePickerContent>
        <div className="flex max-sm:flex-col">
          <div className="relative py-1 ps-1 max-sm:order-1 max-sm:border-t">
            <div className="flex h-full flex-col sm:border-e sm:pe-3">
              {presets.map((preset) => (
                <DatePickerPresetTrigger
                  asChild
                  key={preset.label}
                  value={[
                    parseDate(
                      new Date(
                        new Date().setDate(new Date().getDate() + preset.days)
                      )
                    ),
                  ]}
                >
                  <Button
                    className="w-full justify-start"
                    size="sm"
                    variant="ghost"
                  >
                    {preset.label}
                  </Button>
                </DatePickerPresetTrigger>
              ))}
            </div>
          </div>
          <div className="max-sm:pb-3 sm:ps-2">
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
          </div>
        </div>
      </DatePickerContent>
    </DatePicker>
  );
};

const presets = [
  { label: "Today", days: 0 },
  { label: "Tomorrow", days: 1 },
  { label: "In 3 days", days: 3 },
  { label: "In a week", days: 7 },
] as const;

export default Example;
