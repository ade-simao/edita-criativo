"use client";

import { useEffect, useState } from "react";

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section[id]"),
    );

    if (!sections.length) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      let current = sections[0].id;

      for (const section of sections) {
        if (scrollPosition >= section.offsetTop) {
          current = section.id;
        } else {
          break;
        }
      }

      setActiveSection(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return activeSection;
}
