"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/typography/Heading";
import { Text } from "@/components/typography/Text";

import { Navbar } from "../../Navbar";

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

      <div className="absolute inset-0 -z-10 bg-black/80" />

      <div className="absolute inset-0 -z-10 bg-linear-to-b from-black/30 via-black/60 to-background/70" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex min-h-screen flex-col items-center justify-center text-center"
        >
          {/* <span className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-primary">
            Edita Criativo
          </span> */}

          <Heading
            as="h1"
            className="max-w-5xl text-4xl font-extrabold md:text-7xl xl:text-7xl 2xl:text-8xl"
          >
            Transformamos vídeos em conteúdos que prendem atenção.
          </Heading>

          <Text className="mt-8 max-w-2xl text-lg md:text-xl">
            Edição profissional para criadores, empresas e marcas que querem
            comunicar com mais impacto.
          </Text>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="text-white">
              Solicitar orçamento
            </Button>

            <Button size="lg" variant="outline">
              Ver trabalhos
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
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
