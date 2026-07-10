"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function AboutImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative aspect-square max-w-xl w-full mx-auto overflow-hidden rounded-3xl"
    >
      <Image
        src="/images/about/morais.jpg"
        alt="Edita Criativo"
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-linear-to-t from-background via-transparent" />
    </motion.div>
  );
}
