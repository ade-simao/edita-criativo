"use client";

import { useRef } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { HelpCircle } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/typography/Heading";
import { Section } from "@/components/layout/Section";
import { Text } from "@/components/typography/Text";

import { faqs } from "./data";
import { trackFAQ } from "@/lib/analytics";

export function FAQ() {
  const trackedQuestions = useRef(new Set<string>());

  return (
    <Section id="faq">
      <Container className="max-w-4xl">
        <div className="mx-auto max-w-3xl text-center">
          <Heading className="font-semibold uppercase tracking-[.3em] text-primary">
            Perguntas Frequentes
          </Heading>

          <Text className="mt-6">
            Respondemos às dúvidas mais comuns para que tenha total confiança
            antes de iniciar o seu projeto.
          </Text>
        </div>

        <Accordion
          onValueChange={(value) => {
            if (!value) return;

            if (trackedQuestions.current.has(value)) return;

            trackedQuestions.current.add(value);

            trackFAQ(value);
          }}
          type="single"
          collapsible
          className="mt-20 space-y-5"
        >
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.question}
              value={faq.question}
              className="
                overflow-hidden
                rounded-3xl
                border
                border-border/70
                bg-card/50
                px-6
                backdrop-blur
                transition-all
                duration-300

                hover:border-primary/40
                hover:shadow-lg
              "
            >
              <AccordionTrigger className="py-7 text-left text-lg font-semibold hover:no-underline">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <HelpCircle size={20} />
                  </div>

                  <span>{faq.question}</span>
                </div>
              </AccordionTrigger>

              <AccordionContent className="pb-7 pl-15 text-base leading-8 text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Section>
  );
}
