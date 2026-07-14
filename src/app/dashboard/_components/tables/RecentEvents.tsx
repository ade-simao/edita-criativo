"use client";

import { dashboardData } from "@/lib/dashboard/data";

export function RecentEvents() {
  return (
    <section className="rounded-2xl border border-border/60 bg-card/60 p-5 backdrop-blur">
      <div className="mb-8">
        <h2 className="text-lg font-semibold">Eventos recentes</h2>

        <p className="mt-1 text-sm text-muted-foreground">
          Últimas interações registadas.
        </p>
      </div>

      <div className="space-y-3">
        {dashboardData.recentEvents.map((event) => (
          <div
            key={`${event.event}-${event.time}`}
            className="flex items-center justify-between rounded-xl border border-border/50 px-4 py-2.5 transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-[0_0_40px_rgba(174,76,22,.15)]"
          >
            <div>
              <p className="font-medium">{event.event}</p>

              <p className="text-sm text-muted-foreground">{event.page}</p>
            </div>

            <span className="text-sm text-primary">{event.time}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
