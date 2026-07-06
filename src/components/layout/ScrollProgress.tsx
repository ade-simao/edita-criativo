"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;

      setProgress((window.scrollY / height) * 100);
    };

    update();

    window.addEventListener("scroll", update);

    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      className="fixed left-0 top-0 z-999 h-0.75 bg-primary transition-[width] duration-150"
      style={{
        width: `${progress}%`,
      }}
    />
  );
}
