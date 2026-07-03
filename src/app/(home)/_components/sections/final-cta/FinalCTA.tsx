import { Button } from "@/components/ui/button";

import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/typography/Heading";
import { Section } from "@/components/layout/Section";
import { Text } from "@/components/typography/Text";

export function FinalCTA() {
  return (
    <Section className="relative overflow-hidden">
      <Container className="text-center">
        <Heading className="font-semibold capitalize tracking-[.2em] text-3xl text-primary mx-auto max-w-4xl">
          Vamos transformar o seu próximo vídeo em algo memorável.
        </Heading>

        <Text className="mx-auto mt-6 max-w-2xl">
          Entre em contacto e receba um orçamento personalizado para o seu
          projeto.
        </Text>

        <Button size="lg" className="mt-10">
          Solicitar orçamento
        </Button>
      </Container>
    </Section>
  );
}
