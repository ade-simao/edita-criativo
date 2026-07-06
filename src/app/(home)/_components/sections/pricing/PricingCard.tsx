"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import { Check } from "./data";
import { Button } from "@/components/ui/button";

import { whatsapp } from "@/constants/contact";

type Props = {
  title: string;
  price: string;
  description: string;
  features: string[];
  featured: boolean;
  index: number;
};

export function PricingCard({
  title,
  price,
  description,
  features,
  featured,
  index,
}: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      className={`rounded-3xl border p-8 backdrop-blur transition duration-300 hover:-translate-y-2 ${
        featured
          ? "border-primary bg-primary/10 shadow-[0_0_40px_rgba(174,76,22,.2)]"
          : "border-border bg-card/60"
      }`}
    >
      <h3 className="text-2xl font-bold">{title}</h3>

      <p className="mt-2 text-muted-foreground">{description}</p>

      <p className="mt-8 text-4xl font-extrabold text-primary">{price}</p>

      <ul className="mt-8 mb-10 space-y-4">
        {features.map((item) => (
          <li key={item} className="flex items-center gap-3">
            <Check size={18} className="text-primary" />

            {item}
          </li>
        ))}
      </ul>

      <Button asChild className="mt-auto w-full">
        <Link
          href={whatsapp(`Olá! Tenho interesse no plano ${title}.`)}
          target="_blank"
        >
          Solicitar orçamento
        </Link>
      </Button>
    </motion.article>
  );
}
