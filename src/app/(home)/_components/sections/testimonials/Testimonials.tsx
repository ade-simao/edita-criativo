"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/typography/Heading";
import { Section } from "@/components/layout/Section";
import { Text } from "@/components/typography/Text";

import { testimonials } from "./data";
import { TestimonialCard } from "./TestimonialCard";

export function Testimonials() {
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

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="mt-20 flex w-max gap-6 lg:gap-8"
        >
          {[...testimonials, ...testimonials].map((item, index) => (
            <TestimonialCard key={index} {...item} />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
