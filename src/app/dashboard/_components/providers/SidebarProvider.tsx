"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type SidebarContextType = {
  collapsed: boolean;
  toggle: () => void;
};

const SidebarContext = createContext<SidebarContextType | null>(null);

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(() => {
    if (typeof window === "undefined") {
      return true;
    }

    return localStorage.getItem("sidebar") === "collapsed";
  });

  useEffect(() => {
    localStorage.setItem("sidebar", collapsed ? "collapsed" : "expanded");
  }, [collapsed]);

  function toggle() {
    setCollapsed((prev) => {
      const next = !prev;

      localStorage.setItem(
        "dashboard-sidebar",
        next ? "collapsed" : "expanded",
      );

      return next;
    });
  }

  return (
    <SidebarContext.Provider
      value={{
        collapsed,
        toggle,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error("useSidebar must be used inside SidebarProvider");
  }

  return context;
}
