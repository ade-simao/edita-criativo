"use client";

import { AnimatePresence, motion, PanInfo } from "framer-motion";
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

  const swipeThreshold = 80;

  const visibleTestimonials = () => {
    const visible =
      typeof window !== "undefined"
        ? window.innerWidth >= 1280
          ? 3
          : window.innerWidth >= 768
            ? 2
            : 1
        : 3;

    return Array.from({ length: visible }, (_, i) => {
      return testimonials[(current + i) % testimonials.length];
    });
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
          onMouseEnter={() => {
            setPaused(true);
          }}
          onMouseLeave={() => {
            setPaused(false);
          }}
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
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={(_, info: PanInfo) => {
                if (info.offset.x < -swipeThreshold) {
                  next();
                }

                if (info.offset.x > swipeThreshold) {
                  previous();
                }
              }}
              className="flex justify-center cursor-grab active:cursor-grabbing"
            >
              <div className="grid w-full gap-6 md:grid-cols-2 xl:grid-cols-3">
                {visibleTestimonials().map((item) => (
                  <TestimonialCard key={item.name} {...item} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex justify-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setPaused(true);
                  setCurrent(index);

                  setTimeout(() => setPaused(false), 5000);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === index ? "w-8 bg-primary" : "w-2 bg-muted"
                }`}
              />
            ))}
          </div>

          <button
            onClick={previous}
            aria-label="Testemunho anterior"
            className="absolute top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur transition-all duration-300 hover:scale-110 hover:border-primary hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={next}
            aria-label="Próximo testemunho"
            className="absolute top-1/2 right-2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur transition-all duration-300 hover:scale-110 hover:border-primary hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronRight size={20} />
          </button>

          <div className="mx-auto mt-8 h-1 w-40 overflow-hidden rounded-full bg-border">
            <motion.div
              key={current}
              initial={{ width: 0 }}
              animate={{ width: paused ? 0 : "100%" }}
              transition={{
                duration: 5,
                ease: "linear",
              }}
              className="h-full rounded-full bg-primary"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
