import { StatsCards } from "./_components/cards/StatsCards";
import { RecentEvents } from "./_components/tables/RecentEvents";
import { CTAChart, VisitorsChart } from "./_components/charts";

export default function DashboardPage() {
  return (
    <div className="space-y-4">
      <StatsCards />

      <VisitorsChart />

      <div className="grid gap-4 xl:grid-cols-2">
        <CTAChart />

        <RecentEvents />
      </div>
    </div>
  );
}
