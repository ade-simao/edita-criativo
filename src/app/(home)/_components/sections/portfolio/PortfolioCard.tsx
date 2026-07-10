"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

type Props = {
  title: string;
  category: string;
  thumbnail: string;
  video: string;
  description: string;
  index: number;
  onClick: () => void;
};

export function PortfolioCard({
  title,
  category,
  thumbnail,
  index,
  onClick,
}: Props) {
  return (
    <motion.article
      role="button"
      aria-label={`Abrir projeto ${title}`}
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="group relative aspect-4/5 lg:aspect-9/16 overflow-hidden rounded-3xl border border-border/50 bg-card cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent transition-colors duration-500 group-hover:from-black/90" />

        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition group-hover:opacity-100">
          <div className="rounded-full bg-primary p-5 shadow-xl ring-4 ring-primary/20 transition-all duration-300 group-hover:scale-110">
            <Play className="fill-white text-white" size={28} />
          </div>
        </div>

        <div className="absolute bottom-0 w-full p-6">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            {category}
          </p>

          <h3 className="mt-2 text-2xl transition-colors duration-300 group-hover:text-primary font-semibold text-white">
            {title}
          </h3>
        </div>
      </div>
    </motion.article>
  );
}
