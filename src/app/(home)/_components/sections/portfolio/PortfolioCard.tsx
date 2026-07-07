"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

type Props = {
  title: string;
  category: string;
  thumbnail: string;
  index: number;
};

export function PortfolioCard({ title, category, thumbnail, index }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut",
      }}
      className="group relative aspect-4/5 lg:aspect-9/16 overflow-hidden rounded-3xl"
    >
      <Image
        src={thumbnail}
        alt={title}
        fill
        className="object-cover transition duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />

      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition group-hover:opacity-100">
        <div className="rounded-full bg-primary p-5">
          <Play className="fill-white text-white" size={28} />
        </div>
      </div>

      <div className="absolute bottom-0 w-full p-6">
        <p className="text-sm text-primary">{category}</p>

        <h3 className="mt-2 text-2xl font-semibold text-white">{title}</h3>
      </div>
    </motion.article>
  );
}
