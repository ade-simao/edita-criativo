"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { dashboardData } from "@/lib/dashboard/data";
import { ChartTooltip } from "./ChartTooltip";

export function CTAChart() {
  const PRIMARY = "#AE4C16";

  return (
    <section className="rounded-2xl border border-border/60 bg-card/60 p-5 backdrop-blur">
      <div className="mb-8">
        <h2 className="text-lg font-semibold">Origem dos cliques</h2>

        <p className="mt-1 text-sm text-muted-foreground">
          CTAs mais utilizados pelos visitantes.
        </p>
      </div>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={dashboardData.ctas}>
            <CartesianGrid strokeDasharray="4 4" opacity={0.15} />

            <XAxis dataKey="name" tickLine={false} axisLine={false} />

            <YAxis tickLine={false} axisLine={false} />

            <Tooltip
              cursor={{
                fill: "rgba(174,76,22,.08)",
              }}
              content={<ChartTooltip />}
            />

            <Bar
              dataKey="clicks"
              fill={PRIMARY}
              radius={[8, 8, 0, 0]}
              maxBarSize={70}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
