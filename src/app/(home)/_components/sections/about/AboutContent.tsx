"use client";

import { motion } from "framer-motion";

import { Heading } from "@/components/typography/Heading";
import { Text } from "@/components/typography/Text";

export function AboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      <span className="font-semibold uppercase tracking-[.3em] text-primary">
        Quem Somos
      </span>

      <Heading className="mt-6">
        Criamos experiências visuais que fazem marcas serem lembradas.
      </Heading>

      <Text className="mt-8">
        A Edita Criativo nasceu para transformar vídeos comuns em conteúdos
        profissionais, capazes de comunicar melhor, gerar confiança e aumentar o
        valor percebido de empresas, marcas e criadores de conteúdo.
      </Text>

      <Text className="mt-6">
        Cada projeto recebe atenção aos detalhes, narrativa visual e acabamento
        cinematográfico para entregar muito mais do que uma simples edição.
      </Text>
    </motion.div>
  );
}
