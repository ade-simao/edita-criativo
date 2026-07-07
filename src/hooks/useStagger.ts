"use client";

import { RefObject } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function useStagger(ref: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      if (!ref.current) return;

      gsap.from(
        ref.current.children,

        {
          opacity: 0,
          y: 50,

          stagger: 0.15,

          duration: 0.8,

          ease: "power3.out",

          scrollTrigger: {
            trigger: ref.current,

            start: "top 80%",

            toggleActions: "play none none reverse",
          },
        },
      );
    },
    { scope: ref },
  );
}
