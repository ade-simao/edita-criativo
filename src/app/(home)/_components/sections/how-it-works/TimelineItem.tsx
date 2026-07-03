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

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: reverse ? 80 : -80,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className={`relative grid items-center gap-10 lg:grid-cols-2 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className={`${reverse ? "lg:text-right" : ""}`}>
        <div className="inline-flex rounded-xl bg-primary/10 p-4">
          <Icon className="text-primary" size={28} />
        </div>

        <h3 className="mt-5 text-2xl font-semibold">{title}</h3>

        <p className="mt-4 text-muted-foreground leading-7">{description}</p>
      </div>

      <div className="relative hidden lg:block">
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-border" />

        <div className="absolute left-1/2 top-10 h-5 w-5 -translate-x-1/2 rounded-full border-4 border-background bg-primary" />
      </div>
    </motion.div>
  );
}
