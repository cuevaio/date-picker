"use client";

import { CalendarIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  CalendarHeading,
  RangeCalendar,
} from "@/components/ui/calendar"
import {
  DatePickerContent,
  DateRangePicker,
} from "@/components/ui/date-picker"
import { DateInput } from "@/components/ui/datefield"
import { FieldGroup, Label } from "@/components/ui/field"
import { parseDate } from "@internationalized/date";

export default function Page() {
  return (
    <div className="flex items-center justify-center h-screen flex-col">

    <DateRangePicker className="w-[320px] space-y-1" minValue={parseDate("2020-01-01")} maxValue={parseDate("2030-01-01")}>
      <Label>Date range</Label>
      <FieldGroup>
        <DateInput variant="ghost" slot={"start"} />
        <span aria-hidden className="px-2 text-sm text-muted-foreground">
          -
        </span>
        <DateInput className="flex-1" variant="ghost" slot={"end"} />

        <Button
          variant="ghost"
          size="icon"
          className="mr-1 size-6 data-[focus-visible]:ring-offset-0"
        >
          <CalendarIcon aria-hidden className="size-4" />
        </Button>
      </FieldGroup>
      <DatePickerContent>
        <RangeCalendar>
          <CalendarHeading />
          <CalendarGrid>
            <CalendarGridHeader>
              {(day) => <CalendarHeaderCell>{day}</CalendarHeaderCell>}
            </CalendarGridHeader>
            <CalendarGridBody>
              {(date) => <CalendarCell date={date} />}
            </CalendarGridBody>
          </CalendarGrid>
        </RangeCalendar>
      </DatePickerContent>
    </DateRangePicker>
    <div className="my-4">
        <div>Min: 2020-01-01</div>
        <div>Max: 2030-01-01</div>
      </div>
    </div>
  )
}
