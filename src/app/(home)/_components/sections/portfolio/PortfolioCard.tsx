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
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onClick();
        }
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut",
      }}
      className="group relative aspect-4/5 lg:aspect-9/16 overflow-hidden rounded-3xl border border-border/50 bg-card transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl"
    >
      <Image
        src={thumbnail}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-black/10 transition-colors duration-500 group-hover:from-black/90" />

      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition group-hover:opacity-100">
        <div className="rounded-full bg-primary/95 p-5 backdrop-blur transition duration-300 group-hover:scale-110">
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
    </motion.article>
  );
}
