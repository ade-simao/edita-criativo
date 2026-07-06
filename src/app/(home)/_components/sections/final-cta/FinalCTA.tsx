import Link from "next/link";

import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6";

import { Mail } from "lucide-react";

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

        <div className="mt-24 border-t border-border/50 pt-10">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link href="#" className="transition hover:text-primary">
              <FaInstagram size={20} />
            </Link>

            <Link href="#" className="transition hover:text-primary">
              <FaFacebookF size={18} />
            </Link>

            <Link href="#" className="transition hover:text-primary">
              <FaLinkedinIn size={18} />
            </Link>

            <Link href="#" className="transition hover:text-primary">
              <FaWhatsapp size={20} />
            </Link>
          </div>

          <div className="mt-8 flex flex-col items-center gap-3 text-sm text-muted-foreground">
            <a
              href="mailto:contato@editacriativo.com"
              className="flex items-center gap-2 hover:text-primary"
            >
              <Mail size={16} />
              contato@editacriativo.com
            </a>

            <p>© 2026 Edita Criativo. Todos os direitos reservados.</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
