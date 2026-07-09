"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/typography/Heading";
import { Section } from "@/components/layout/Section";
import { Text } from "@/components/typography/Text";

import { testimonials } from "./data";
import { TestimonialCard } from "./TestimonialCard";

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [paused]);

  const next = () => {
    setPaused(true);

    setCurrent((prev) => (prev + 1) % testimonials.length);

    setTimeout(() => setPaused(false), 5000);
  };

  const previous = () => {
    setPaused(true);

    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

    setTimeout(() => setPaused(false), 5000);
  };

  return (
    <Section id="testimonials" className="overflow-hidden">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Heading className="font-semibold uppercase tracking-[.3em] text-primary">
            O que os nossos clientes dizem
          </Heading>

          <Text className="mt-6">
            Resultados reais para marcas e criadores.
          </Text>
        </div>

        <div
          className="relative mt-20"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
              }}
              className="flex justify-center"
            >
              <TestimonialCard {...testimonials[current]} />
            </motion.div>
          </AnimatePresence>

          <button
            onClick={previous}
            className="
      absolute
      left-0
      top-1/2
      -translate-y-1/2

      rounded-full

      border

      bg-background/80

      p-3

      backdrop-blur

      transition

      hover:border-primary
    "
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={next}
            className="
      absolute
      right-0
      top-1/2
      -translate-y-1/2

      rounded-full

      border

      bg-background/80

      p-3

      backdrop-blur

      transition

      hover:border-primary
    "
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </Container>
    </Section>
  );
}
