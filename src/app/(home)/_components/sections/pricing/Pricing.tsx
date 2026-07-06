"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/typography/Heading";
import { Text } from "@/components/typography/Text";

import { PricingCard } from "./PricingCard";
import { plans } from "./data";

export function Pricing() {
  return (
    <Section id="pricing">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Heading className="font-semibold uppercase tracking-[.3em] text-primary">
            Planos para diferentes necessidades
          </Heading>

          <Text className="mt-6">
            Escolha o plano ideal ou solicite uma proposta personalizada.
          </Text>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3 h-full">
          {plans.map((plan, index) => (
            <PricingCard key={plan.title} index={index} {...plan} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
