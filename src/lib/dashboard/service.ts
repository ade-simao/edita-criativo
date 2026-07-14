import type { DashboardFilter } from "@/app/dashboard/_components/filters/PeriodSelector";

import { dashboardData } from "./data";

export async function loadDashboard(filter: DashboardFilter) {
  console.log("Dashboard Filter:", filter);

  return dashboardData;
}
