"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/typography/Heading";
import { Section } from "@/components/layout/Section";
import { Text } from "@/components/typography/Text";

import { faqs } from "./data";

export function FAQ() {
  return (
    <Section id="faq">
      <Container className="max-w-4xl">
        <div className="text-center">
          <Heading className="font-semibold uppercase tracking-[.3em] text-primary">
            Perguntas Frequentes
          </Heading>

          <Text className="mt-6">
            Tudo o que precisa saber antes de iniciar o seu projeto.
          </Text>
        </div>

        <Accordion type="single" collapsible className="mt-16">
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>

              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Section>
  );
}
