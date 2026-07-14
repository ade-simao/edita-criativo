"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { dashboardData } from "@/lib/dashboard/data";
import { ChartTooltip } from "./ChartTooltip";

export function VisitorsChart() {
  const PRIMARY = "#AE4C16";

  return (
    <section className="rounded-2xl border border-border/60 bg-card/60 p-5 backdrop-blur">
      <div className="mb-8">
        <h2 className="text-lg font-semibold">Visitantes</h2>

        <p className="mt-1 text-sm text-muted-foreground">Últimos 7 dias</p>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={dashboardData.visitors}>
            <defs>
              <linearGradient id="visitors" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={PRIMARY} stopOpacity={0.55} />
                <stop offset="95%" stopColor={PRIMARY} stopOpacity={0.05} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="2 8" opacity={0.15} />

            <XAxis dataKey="day" tickLine={false} axisLine={false} />

            <YAxis tickLine={false} axisLine={false} />

            <Tooltip content={<ChartTooltip />} />

            <Area
              type="monotone"
              dataKey="visits"
              stroke={PRIMARY}
              strokeWidth={3}
              fill="url(#visitors)"
              dot={{
                r: 3,
                fill: PRIMARY,
              }}
              activeDot={{
                r: 6,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
