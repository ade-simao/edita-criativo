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

        <div className="mx-auto mt-24 flex max-w-5xl flex-col gap-20">
          {steps.map((step, index) => (
            <TimelineItem key={step.title} index={index} {...step} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
