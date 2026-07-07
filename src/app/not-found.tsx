import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/typography/Heading";
import { Text } from "@/components/typography/Text";

export default function NotFound() {
  return (
    <Section>
      <Container className="flex min-h-[70vh] flex-col items-center justify-center text-center">
        <Heading
          as="h1"
          className="max-w-5xl text-primary font-extrabold text-4xl sm:text-5xl lg:text-7xl"
        >
          404
        </Heading>

        <Text className="mt-6 max-w-lg">
          A página que procura não existe ou foi movida.
        </Text>

        <Button
          size="lg"
          asChild
          className="mt-10 transition-all duration-300 hover:scale-110 px-4"
        >
          <Link href="/">Voltar ao início</Link>
        </Button>
      </Container>
    </Section>
  );
}
