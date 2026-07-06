"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
};

export function TimelineItem({ icon: Icon, title, description, index }: Props) {
  const reverse = index % 2 !== 0;

  const Card = (
    <div className="rounded-3xl border border-border bg-card/70 p-8 backdrop-blur transition-all duration-300 lg:translate-y-15 hover:translate-y-7 hover:border-primary hover:shadow-[0_0_40px_rgba(174,76,22,.15)]">
      <div className="inline-flex rounded-xl bg-primary/10 p-4">
        <Icon className="text-primary" size={28} />
      </div>

      <h3 className="mt-5 text-2xl font-semibold">{title}</h3>

      <p className="mt-4 leading-7 text-muted-foreground">{description}</p>
    </div>
  );

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
        scale: 0.96,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="relative"
    >
      {/* Desktop */}
      <div className="hidden lg:grid lg:grid-cols-2 lg:gap-20">
        {reverse ? (
          <>
            <div className="relative">
              <span className="absolute right-0 top-0 translate-x-13.25 rounded-full border-4 border-background flex h-6 w-6 items-center justify-center bg-background">
                <span className="h-3 w-3 rounded-full bg-primary" />
              </span>
            </div>

            {Card}
          </>
        ) : (
          <>
            <div className="text-right">{Card}</div>

            <div className="relative">
              <span className="absolute left-0 top-0 -translate-x-12.75 rounded-full border-4 border-background flex h-6 w-6 items-center justify-center bg-background">
                <span className="h-3 w-3 rounded-full bg-primary" />
              </span>
            </div>
          </>
        )}
      </div>

      {/* Mobile */}
      <div className="relative pl-14 lg:hidden">
        <span className="absolute left-5 top-8 -translate-x-1/2 h-4 w-4 rounded-full border-4 border-background bg-primary" />

        {Card}
      </div>
    </motion.div>
  );
}
