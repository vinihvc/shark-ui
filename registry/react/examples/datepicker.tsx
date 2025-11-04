"use client";

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

const DatePickerDemo = () => (
  <DatePicker className="rounded-lg border p-2" selectionMode="range">
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
);

export default DatePickerDemo;
