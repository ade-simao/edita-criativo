"use client";

import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import {
  SidebarProvider,
  useSidebar,
} from "./_components/providers/SidebarProvider";

import { Sidebar } from "./_components/layout/Sidebar";
import { Header } from "./_components/layout/Header";

type Props = {
  children: ReactNode;
};

function DashboardContent({ children }: Props) {
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
        <Header />

        <main className="mx-auto w-full p-4">{children}</main>
      </div>
    </>
  );
}

export default function DashboardLayout({ children }: Props) {
  return (
    <SidebarProvider>
      <div className="min-h-screen bg-background">
        <DashboardContent>{children}</DashboardContent>
      </div>
    </SidebarProvider>
  );
}
