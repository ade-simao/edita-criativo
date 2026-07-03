import { Navbar } from "../../Navbar";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/typography/Heading";
import { Text } from "@/components/typography/Text";

export function Hero() {
  return (
    <Section className="relative flex min-h-screen items-center overflow-hidden py-0">
      <Navbar />

      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-neutral-950" />

      {/* TODO: substituir por vídeo */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#AE4C1625,transparent_60%)]" />

      {/* Overlay */}
      <div className="absolute inset-0 -z-10 bg-black/65" />

      <Container>
        <div className="flex min-h-screen flex-col items-center justify-center text-center">
          <span className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-primary">
            Edita Criativo
          </span>

          <Heading
            as="h1"
            className="max-w-5xl max-h-full text-5xl font-extrabold leading-tight md:text-7xl xl:text-7xl"
          >
            Transformamos vídeos em conteúdos que prendem atenção.
          </Heading>

          <Text className="mt-8 max-w-2xl text-lg md:text-xl">
            Edição profissional para criadores de conteúdo, empresas e marcas
            que procuram elevar a qualidade da sua comunicação digital.
          </Text>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Button size="lg">Solicitar orçamento</Button>

            <Button variant="outline" size="lg">
              Ver trabalhos
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
