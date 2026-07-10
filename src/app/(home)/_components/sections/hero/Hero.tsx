"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/typography/Heading";
import { Text } from "@/components/typography/Text";

import { CONTACT, whatsapp } from "@/constants/contact";

export function Hero() {
  return (
    <Section className="relative flex min-h-screen items-center overflow-hidden py-0">
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-neutral-950" />

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        <source
          src="https://cdn.pixabay.com/video/2023/08/31/178565-860270644_large.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 -z-10 bg-black/60 backdrop-blur-[1px]" />

      <div className="absolute inset-0 -z-10 bg-linear-to-b from-black/30 via-black/60 to-background/70" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex min-h-screen flex-col items-center justify-center text-center pt-14"
        >
          <span className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-primary">
            Edita Criativo
          </span>

          <Heading
            as="h1"
            className="max-w-5xl font-extrabold text-4xl sm:text-5xl lg:text-7xl"
          >
            Transformamos vídeos em conteúdos que prendem atenção.
          </Heading>

          <Text className="mt-8 max-w-2xl text-base sm:text-lg lg:text-xl">
            Edição profissional para criadores, empresas e marcas que querem
            comunicar com mais impacto e converter vídeos em clientes.
          </Text>

          <div className="mt-12 flex flex-col w-full gap-4 sm:flex-row sm:w-auto">
            <Button
              size="lg"
              asChild
              className="transition-all duration-300 hover:scale-110"
            >
              <Link
                href={whatsapp("Olá! Gostaria de solicitar um orçamento.")}
                target="_blank"
              >
                Solicitar orçamento
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="px-7 transition-all duration-300 hover:scale-110"
            >
              <Link href={CONTACT.social.instagram} target="_blank">
                Ver trabalhos
              </Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="hidden absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>

            <div className="h-10 w-5 rounded-full border border-white/30 p-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                }}
                className="h-2 w-2 mx-auto rounded-full bg-primary"
              />
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
