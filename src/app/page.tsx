'use client';

import { parseDate } from '@internationalized/date';
import { CalendarIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Calendar,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  CalendarHeading,
  CalendarMonthYearSelector,
} from '@/components/ui/calendar';
import { DatePicker, DatePickerContent } from '@/components/ui/date-picker';
import { DateInput } from '@/components/ui/datefield';
import { FieldGroup, Label } from '@/components/ui/field';

export default function Page() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <DatePicker
        className="w-[200px] space-y-1"
        minValue={parseDate('2020-01-01')}
        maxValue={parseDate('2030-01-01')}
      >
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
            <CalendarMonthYearSelector />
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
      </DatePicker>

      <div className="my-4">
        <div>Min: 2020-01-01</div>
        <div>Max: 2030-01-01</div>
      </div>
    </div>
  );
}
