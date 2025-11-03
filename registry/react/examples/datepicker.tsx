"use client";

import {
  DatePicker,
  DatePickerContent,
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

const DatePickerDemo = () => (
  <DatePicker open selectionMode="range">
    <DatePickerContent>
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
                        {weekDay.short}
                      </DatePickerTableHeader>
                    ))}
                  </DatePickerTableRow>
                </DatePickerTableHead>

                <DatePickerTableBody>
                  {datePicker.weeks.map((week, id) => (
                    <DatePickerTableRow key={id}>
                      {week.map((day, id) => (
                        <DatePickerTableCell key={id} value={day}>
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
    </DatePickerContent>
  </DatePicker>
);

export default DatePickerDemo;
