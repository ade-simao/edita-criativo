"use client";

import { ArrowDown, ArrowUp } from "lucide-react";

import { dashboardData } from "@/lib/dashboard/data";

export function StatsCards() {
  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {dashboardData.stats.map((stat) => {
        const Icon = stat.icon;

        const positive = stat.change >= 0;

        return (
          <article
            key={stat.title}
            className="group rounded-2xl border border-border/60 bg-card/60 p-5 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-[0_0_40px_rgba(174,76,22,.15)]"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{stat.title}</p>

                <h2 className="mt-2 text-3xl font-bold tracking-tight">
                  {stat.value}
                </h2>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon size={20} />
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2">
              {positive ? (
                <ArrowUp size={16} className="text-emerald-500" />
              ) : (
                <ArrowDown size={16} className="text-red-500" />
              )}

              <span
                className={`text-sm font-medium ${
                  positive ? "text-emerald-500" : "text-red-500"
                }`}
              >
                {Math.abs(stat.change)}%
              </span>

              <span className="text-sm text-muted-foreground">
                em relação ao período anterior
              </span>
            </div>
          </article>
        );
      })}
    </section>
  );
}
