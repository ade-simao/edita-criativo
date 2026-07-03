"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function AboutImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative aspect-square overflow-hidden rounded-3xl"
    >
      <Image
        src="/images/about.jpg"
        alt="Edita Criativo"
        fill
        className="object-top"
      />

      <div className="absolute inset-0 bg-linear-to-t from-background via-transparent" />
    </motion.div>
  );
}
