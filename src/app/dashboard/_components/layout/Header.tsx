"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { ArrowUpRight, LogOut } from "lucide-react";

import { Button } from "@/components/ui/button";

import { loadDashboard } from "@/lib/dashboard/service";

import {
  PeriodSelector,
  type DashboardFilter,
} from "../filters/PeriodSelector";

import type { DashboardSession } from "../../_lib/session";

export function Header() {
  const [filter, setFilter] = useState<DashboardFilter>({
    period: "today",
  });

  const [user, setUser] = useState<DashboardSession | null>(null);

  const [avatarError, setAvatarError] = useState(false);

  useEffect(() => {
    loadDashboard(filter);
  }, [filter]);

  useEffect(() => {
    fetch("/dashboard/api/session")
      .then(async (res) => {
        if (!res.ok) {
          setUser(null);
          return;
        }

        const data = await res.json();
        setUser(data);
      })
      .catch(() => setUser(null));
  }, []);

  async function handleLogout() {
    await fetch("/dashboard/api/logout", {
      method: "POST",
    });

    window.location.href = "/dashboard/login";
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="flex h-16 items-center justify-between px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <h1 className="hidden text-xl font-semibold tracking-tight sm:block">
            Dashboard
          </h1>

          <span className="hidden text-sm text-muted-foreground md:inline">
            •
          </span>

          <span className="text-xl sm:text-sm font-medium text-muted-foreground">
            {user ? user.name : "Edita Criativo"}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <PeriodSelector value={filter} onChange={setFilter} />

          <Button variant="outline" asChild>
            <Link href="/" target="_blank">
              Ver site
              <ArrowUpRight size={16} />
            </Link>
          </Button>

          {user && (
            <Button variant="ghost" size="icon" onClick={handleLogout}>
              <LogOut size={18} />
            </Button>
          )}

          {user && !avatarError ? (
            <Image
              src={user.avatar}
              alt={user.name}
              width={36}
              height={36}
              onError={() => setAvatarError(true)}
              className="h-9 w-9 rounded-full object-cover"
            />
          ) : (
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
              {
                <Image
                  src={"/favicon.ico"}
                  alt={"Edita Criativo"}
                  width={36}
                  height={36}
                  onError={() => setAvatarError(true)}
                  className="h-9 w-9 rounded-full object-cover"
                />
              }
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
