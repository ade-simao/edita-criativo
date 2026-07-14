"use client";

import { useState } from "react";
import type { DateRange } from "react-day-picker";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";

import { CalendarDays, ChevronDown } from "lucide-react";

import { dashboardPeriods } from "@/lib/dashboard/periods";
import { DateRangePicker } from "./DateRangePicker";

export type DashboardFilter = {
  period: string;
  startDate?: Date;
  endDate?: Date;
};

type Props = {
  value: DashboardFilter;
  onChange: (filter: DashboardFilter) => void;
};

export function PeriodSelector({ value, onChange }: Props) {
  const [openCalendar, setOpenCalendar] = useState(false);

  const currentPeriod = dashboardPeriods.find(
    (item) => item.value === value.period,
  );

  function handleCustom(range: DateRange | undefined) {
    if (!range?.from || !range?.to) return;

    onChange({
      period: "custom",
      startDate: range.from,
      endDate: range.to,
    });

    setOpenCalendar(false);
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="hidden gap-2 md:flex">
            <CalendarDays size={16} />

            <span>{currentPeriod?.label}</span>

            <ChevronDown size={16} />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-56">
          {dashboardPeriods.map((item) => (
            <DropdownMenuItem
              key={item.value}
              onClick={() => {
                if (item.value === "custom") {
                  setOpenCalendar(true);
                  return;
                }

                onChange({
                  period: item.value,
                });
              }}
            >
              {item.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {openCalendar && (
        <div className="absolute right-0 top-16 z-50 rounded-2xl border border-border bg-background shadow-xl">
          <DateRangePicker onApply={handleCustom} />
        </div>
      )}
    </>
  );
}
