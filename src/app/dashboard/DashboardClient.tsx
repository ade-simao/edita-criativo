"use client";

import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import {
  SidebarProvider,
  useSidebar,
} from "./_components/providers/SidebarProvider";

import { Sidebar } from "./_components/layout/Sidebar";
import { Header } from "./_components/layout/Header";
import type { DashboardSession } from "./_lib/session";

type Props = {
  children: ReactNode;
  session: DashboardSession;
};

function DashboardContent({ children, session }: Props) {
  const { collapsed } = useSidebar();

  return (
    <>
      <Sidebar />

      <div
        className={cn(
          "transition-all duration-300",
          collapsed ? "lg:pl-16" : "lg:pl-54",
        )}
      >
        <Header session={session} />

        <main className="mx-auto w-full p-4">{children}</main>
      </div>
    </>
  );
}

export default function DashboardClient({ children, session }: Props) {
  return (
    <SidebarProvider>
      <div className="min-h-screen bg-background">
        <DashboardContent session={session}>{children}</DashboardContent>
      </div>
    </SidebarProvider>
  );
}
