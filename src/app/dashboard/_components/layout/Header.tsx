"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

import { loadDashboard } from "@/lib/dashboard/service";

import {
  PeriodSelector,
  type DashboardFilter,
} from "../filters/PeriodSelector";

export function Header() {
  const [filter, setFilter] = useState<DashboardFilter>({
    period: "today",
  });

  useEffect(() => {
    loadDashboard(filter);
  }, [filter]);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="flex h-16 items-center justify-between px-6 lg:px-8">
        <h1 className="text-xl font-semibold tracking-tight">Dashboard</h1>

        <div className="flex items-center gap-4">
          <PeriodSelector value={filter} onChange={setFilter} />

          <Button variant="outline" asChild>
            <Link href="/" target="_blank">
              Ver site
              <ArrowUpRight size={16} />
            </Link>
          </Button>

          <button className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
            EC
          </button>
        </div>
      </div>
    </header>
  );
}
