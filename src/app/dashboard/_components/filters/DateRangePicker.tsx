"use client";

import { useState } from "react";

import { DateRange } from "react-day-picker";

import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";

type Props = {
  onApply: (range: DateRange | undefined) => void;
};

export function DateRangePicker({ onApply }: Props) {
  const [range, setRange] = useState<DateRange>();

  return (
    <div className="space-y-4 p-2">
      <Calendar
        mode="range"
        selected={range}
        onSelect={setRange}
        numberOfMonths={2}
      />

      <Button
        className="w-full"
        disabled={!range?.from || !range?.to}
        onClick={() => onApply(range)}
      >
        Aplicar
      </Button>
    </div>
  );
}
