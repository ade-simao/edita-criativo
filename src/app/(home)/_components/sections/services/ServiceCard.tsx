"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
};

export function ServiceCard({ icon: Icon, title, description, index }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay: index * 0.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group h-full"
    >
      <div className="w-full h-full p-8 rounded-3xl border border-border bg-card/60 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-[0_0_40px_rgba(174,76,22,.15)]">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
          <Icon className="h-7 w-7 text-primary" />
        </div>

        <h3 className="mb-4 text-2xl font-semibold">{title}</h3>

        <p className="leading-7 text-muted-foreground">{description}</p>
      </div>
    </motion.article>
  );
}
