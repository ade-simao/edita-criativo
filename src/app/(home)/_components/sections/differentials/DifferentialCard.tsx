"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
};

export function DifferentialCard({
  icon: Icon,
  title,
  description,
  index,
}: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      className="group rounded-2xl border border-border bg-card/60 p-8 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-[0_0_40px_rgba(174,76,22,.15)]"
    >
      <Icon className="mb-6 h-8 w-8 text-primary transition-transform group-hover:scale-110" />

      <h3 className="mb-3 text-xl font-semibold">{title}</h3>

      <p className="text-muted-foreground leading-7">{description}</p>
    </motion.article>
  );
}
