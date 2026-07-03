"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/typography/Heading";
import { Text } from "@/components/typography/Text";

import { DifferentialCard } from "./DifferentialCard";
import { differentials } from "./data";

export function Differentials() {
  return (
    <Section id="differentials">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Heading className="font-semibold uppercase tracking-[.3em] text-primary">
            Por que escolher a Edita Criativo?
          </Heading>

          <Text className="mt-6">
            Trabalhamos para que cada vídeo entregue transmita profissionalismo,
            criatividade e resultados.
          </Text>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {differentials.map((item, index) => (
            <DifferentialCard key={item.title} index={index} {...item} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
