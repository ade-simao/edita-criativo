"use client";

import { useEffect } from "react";

import { trackPageView } from "@/lib/analytics";
import { useScrollAnalytics } from "@/hooks/useScrollAnalytics";

export function AnalyticsProvider() {
  useScrollAnalytics();

  useEffect(() => {
    trackPageView();
  }, []);

  return null;
}
