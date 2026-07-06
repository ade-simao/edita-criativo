"use client";

import { RefObject } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function useReveal(
  ref: RefObject<HTMLElement | null>,
  options?: gsap.TweenVars,
) {
  useGSAP(
    () => {
      if (!ref.current) return;

      gsap.from(ref.current, {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },

        ...options,
      });
    },
    { scope: ref },
  );
}
