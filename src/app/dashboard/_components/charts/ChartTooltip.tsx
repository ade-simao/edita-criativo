"use client";

import type {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";

import type { TooltipProps } from "recharts";

export function ChartTooltip({
  active,
  payload,
  label,
}: TooltipProps<ValueType, NameType>) {
  if (!active || !payload || payload.length === 0) {
    return null;
  }

  const value = payload[0]?.value;

  return (
    <div className="rounded-xl border border-border bg-background/95 px-4 py-3 shadow-xl backdrop-blur">
      <p className="text-xs uppercase tracking-wider text-muted-foreground">
        {String(label)}
      </p>

      <p className="mt-2 text-lg font-semibold">{value}</p>
    </div>
  );
}
