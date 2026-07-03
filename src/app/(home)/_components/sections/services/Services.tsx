"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/typography/Heading";
import { Text } from "@/components/typography/Text";

import { ServiceCard } from "./ServiceCard";
import { services } from "./data";

export function Services() {
  return (
    <Section id="services" className="bg-background">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Heading>Soluções para quem leva conteúdo a sério.</Heading>

          <Text className="mt-6">
            Independentemente do tamanho do seu projeto, entregamos edições
            profissionais pensadas para gerar impacto.
          </Text>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
