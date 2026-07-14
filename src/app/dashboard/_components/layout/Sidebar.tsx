"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useSidebar } from "../providers/SidebarProvider";

import {
  PanelLeftClose,
  PanelLeftOpen,
  BarChart3,
  LayoutDashboard,
  MousePointerClick,
  Settings,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const links = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    disabled: false,
  },
  {
    title: "Relatórios",
    href: "#",
    icon: BarChart3,
    disabled: true,
  },
  {
    title: "Eventos",
    href: "#",
    icon: MousePointerClick,
    disabled: true,
  },
  {
    title: "Configurações",
    href: "#",
    icon: Settings,
    disabled: true,
  },
];

export function Sidebar() {
  const pathname = usePathname();
  // const { collapsed, toggle } = useSidebar();
  const { collapsed, toggle } = useSidebar();

  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 hidden border-r border-border/60 bg-card/40 backdrop-blur-xl transition-all duration-300 lg:flex lg:flex-col",
        collapsed ? "w-16" : "w-54",
      )}
    >
      <div className="flex h-16 items-center justify-between px-2">
        {!collapsed && (
          <Link href="/" className="text-xl font-bold">
            Edita<span className="text-primary">Criativo</span>
          </Link>
        )}

        <Button
          size="icon"
          variant="ghost"
          onClick={toggle}
          className="cursor-pointer"
        >
          {collapsed ? (
            <PanelLeftOpen size={18} />
          ) : (
            <PanelLeftClose size={18} />
          )}
        </Button>
      </div>

      <nav className="flex-1 space-y-1.5 p-2">
        {links.map((link) => {
          const Icon = link.icon;

          const active = pathname === link.href;

          if (link.disabled) {
            return (
              <div
                key={link.title}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3 py-2.5 opacity-45",
                  collapsed && "justify-center gap-0 p-2.5",
                )}
              >
                <Icon size={18} />

                <span
                  className={cn(
                    "overflow-hidden whitespace-nowrap text-sm font-medium transition-all duration-300",
                    collapsed ? "w-0 opacity-0" : "w-auto opacity-100",
                  )}
                >
                  {link.title}
                </span>
              </div>
            );
          }

          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "group flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all duration-300",
                active
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
                collapsed && "justify-center gap-0 p-2.5",
              )}
            >
              <Icon
                size={18}
                className="transition-transform duration-300 group-hover:scale-110"
              />

              <span
                className={cn(
                  "overflow-hidden whitespace-nowrap text-sm font-medium transition-all duration-300",
                  collapsed ? "w-0 opacity-0" : "w-auto opacity-100",
                )}
              >
                {link.title}
              </span>
            </Link>
          );
        })}
      </nav>

      {!collapsed && (
        <div className="rounded-xl bg-muted/40 p-4">
          <div className="rounded-xl bg-muted/40 p-4">
            <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              Projeto
            </p>

            <h3 className="mt-2 text-sm font-semibold">Edita Criativo</h3>

            <p className="mt-1 text-xs text-muted-foreground">
              Dashboard Analytics
            </p>
          </div>
        </div>
      )}
    </aside>
  );
}
