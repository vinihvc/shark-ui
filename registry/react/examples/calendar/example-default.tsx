"use client";

import { Card, CardContent } from "@/registry/react/components/card";
import {
  Calendar,
  CalendarContext,
  CalendarMonthSelect,
  CalendarNextTrigger,
  CalendarPrevTrigger,
  CalendarTable,
  CalendarTableBody,
  CalendarTableCell,
  CalendarTableCellTrigger,
  CalendarTableHead,
  CalendarTableHeader,
  CalendarTableRow,
  CalendarView,
  CalendarViewControl,
  CalendarYearSelect,
} from "@/registry/react/components/calendar";

const CalendarDemo = () => (
  <Card>
    <CardContent>
      <Calendar selectionMode="range">
        <CalendarView view="day">
          <CalendarContext>
            {(calendar) => (
              <>
                <CalendarViewControl>
                  <CalendarPrevTrigger />
                  <CalendarMonthSelect />
                  <CalendarYearSelect />
                  <CalendarNextTrigger />
                </CalendarViewControl>

                <CalendarTable>
                  <CalendarTableHead>
                    <CalendarTableRow>
                      {calendar.weekDays.map((weekDay) => (
                        <CalendarTableHeader key={weekDay.short}>
                          {weekDay.narrow}
                        </CalendarTableHeader>
                      ))}
                    </CalendarTableRow>
                  </CalendarTableHead>

                  <CalendarTableBody>
                    {calendar.weeks.map((week) => (
                      <CalendarTableRow
                        key={
                          week[0]
                            ? `${week[0].year}-${week[0].month}-${week[0].day}`
                            : ""
                        }
                      >
                        {week.map((day) => (
                          <CalendarTableCell key={day.day} value={day}>
                            <CalendarTableCellTrigger>
                              {day.day}
                            </CalendarTableCellTrigger>
                          </CalendarTableCell>
                        ))}
                      </CalendarTableRow>
                    ))}
                  </CalendarTableBody>
                </CalendarTable>
              </>
            )}
          </CalendarContext>
        </CalendarView>
      </Calendar>
    </CardContent>
  </Card>
);

export default CalendarDemo;
