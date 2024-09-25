"use client";

import { CalendarIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Calendar,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  CalendarHeading,
} from "@/components/ui/calendar"
import {
  DatePicker,
  DatePickerContent,
} from "@/components/ui/date-picker"
import { DateInput } from "@/components/ui/datefield"
import { FieldGroup, Label } from "@/components/ui/field"

export default function Page() {
  return (
    <div className="flex items-center justify-center h-screen"><DatePicker className="w-[208px] space-y-1">
    <Label>Date</Label>
    <FieldGroup>
      <DateInput className="flex-1" variant="ghost" />
      <Button
        variant="ghost"
        size="icon"
        className="mr-1 size-6 data-[focus-visible]:ring-offset-0"
      >
        <CalendarIcon aria-hidden className="size-4" />
      </Button>
    </FieldGroup>
    <DatePickerContent>
      <Calendar>
        <CalendarHeading />
        <CalendarGrid>
          <CalendarGridHeader>
            {(day) => <CalendarHeaderCell>{day}</CalendarHeaderCell>}
          </CalendarGridHeader>
          <CalendarGridBody>
            {(date) => <CalendarCell date={date} />}
          </CalendarGridBody>
        </CalendarGrid>
      </Calendar>
    </DatePickerContent>
  </DatePicker></div>
    
  )
}
