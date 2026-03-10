"use client";

import { Card, CardContent } from "@/registry/react/components/card";
import {
  DatePicker,
  DatePickerContext,
  DatePickerMonthSelect,
  DatePickerNextTrigger,
  DatePickerPrevTrigger,
  DatePickerTable,
  DatePickerTableBody,
  DatePickerTableCell,
  DatePickerTableCellTrigger,
  DatePickerTableHead,
  DatePickerTableHeader,
  DatePickerTableRow,
  DatePickerView,
  DatePickerViewControl,
  DatePickerYearSelect,
} from "@/registry/react/components/datepicker";

const start = new Date(2025, 5, 5);

export const CardsCalendar = () => (
<<<<<<< Updated upstream
  <Card className="hidden p-0 sm:flex">
    <CardContent className="p-0">
      <DatePicker className="rounded-lg p-2" selectionMode="range">
        <DatePickerView view="day">
          <DatePickerContext>
            {(datePicker) => (
              <>
                <DatePickerViewControl>
                  <DatePickerPrevTrigger />
                  <DatePickerMonthSelect />
                  <DatePickerYearSelect />
                  <DatePickerNextTrigger />
                </DatePickerViewControl>

                <DatePickerTable>
                  <DatePickerTableHead>
                    <DatePickerTableRow>
                      {datePicker.weekDays.map((weekDay, id) => (
                        <DatePickerTableHeader key={id}>
                          {weekDay.narrow}
                        </DatePickerTableHeader>
                      ))}
                    </DatePickerTableRow>
                  </DatePickerTableHead>

                  <DatePickerTableBody>
                    {datePicker.weeks.map((week, id) => (
                      <DatePickerTableRow key={id}>
                        {week.map((day) => (
                          <DatePickerTableCell key={day.day} value={day}>
                            <DatePickerTableCellTrigger>
                              {day.day}
                            </DatePickerTableCellTrigger>
                          </DatePickerTableCell>
                        ))}
                      </DatePickerTableRow>
                    ))}
                  </DatePickerTableBody>
                </DatePickerTable>
              </>
            )}
          </DatePickerContext>
        </DatePickerView>
      </DatePicker>
=======
  <Card>
    <CardContent>
      <Calendar selectionMode="range">
        <CalendarViewControl>
          <CalendarMonthSelect />
          <CalendarYearSelect />
        </CalendarViewControl>
        <CalendarTable>
          <CalendarWeekDays />
          <CalendarTableDays />
        </CalendarTable>
      </Calendar>
>>>>>>> Stashed changes
    </CardContent>
  </Card>
);
