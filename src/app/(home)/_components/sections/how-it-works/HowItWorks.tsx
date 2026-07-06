"use client";

import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/typography/Heading";
import { Section } from "@/components/layout/Section";
import { Text } from "@/components/typography/Text";

import { steps } from "./data";
import { TimelineItem } from "./TimelineItem";

export function HowItWorks() {
  return (
    <Section id="how-it-works">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Heading className="font-semibold uppercase tracking-[.3em] text-primary">
            Como funciona
          </Heading>

          <Text className="mt-6">
            Um processo simples, transparente e pensado para entregar qualidade
            em cada etapa.
          </Text>
        </div>

        <div className="relative mx-auto mt-24 max-w-6xl">
          {/* Linha Desktop */}
          <div className="absolute left-1/2 top-0 hidden h-[105.5%] w-px -translate-x-1/2 bg-border lg:block bg-linear-to-b from-primary/40 via-border to-primary/40" />

          {/* Linha Mobile */}
          <div className="absolute left-5 top-0 h-full w-px bg-border lg:hidden bg-linear-to-b from-primary/40 via-border to-primary/40" />

          <div className="space-y-20 lg:space-y-24">
            {steps.map((step, index) => (
              <TimelineItem key={step.title} index={index} {...step} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
