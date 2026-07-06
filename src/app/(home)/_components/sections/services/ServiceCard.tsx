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
        ease: "easeIn",
      }}
      className="group h-full"
    >
      <div className="w-full h-full rounded-2xl border border-border bg-card/60 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 p-8 ">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
          <Icon className="h-7 w-7 text-primary" />
        </div>

        <h3 className="mb-4 text-2xl font-semibold">{title}</h3>

        <p className="leading-7 text-muted-foreground">{description}</p>
      </div>
    </motion.article>
  );
}
