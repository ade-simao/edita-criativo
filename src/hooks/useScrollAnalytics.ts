"use client";

import { useEffect, useRef } from "react";

import { trackScroll } from "@/lib/analytics";

export function useScrollAnalytics() {
  const fired = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (fired.current) return;

      const scroll = window.scrollY + window.innerHeight;

      const total = document.documentElement.scrollHeight;

      if (scroll / total > 0.9) {
        fired.current = true;

        trackScroll(90);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}
