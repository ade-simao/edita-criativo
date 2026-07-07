import Link from "next/link";

import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6";

import { Mail } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/typography/Heading";
import { Text } from "@/components/typography/Text";
import { Button } from "@/components/ui/button";

import { CONTACT, whatsapp } from "@/constants/contact";

export function FinalCTA() {
  return (
    <Section className="relative overflow-hidden">
      <Container className="text-center">
        <Heading className="font-semibold capitalize tracking-[.2em] text-3xl text-primary mx-auto max-w-3xl">
          Vamos transformar o seu próximo vídeo em algo memorável.
        </Heading>

        <Text className="mx-auto mt-6 max-w-xl">
          Entre em contacto e receba um orçamento personalizado para o seu
          projeto.
        </Text>

        <Button
          asChild
          size="lg"
          className="mt-10 px-10 w-full sm:w-auto transition-all duration-300 hover:scale-110"
        >
          <Link
            href={whatsapp("Olá! Gostaria de conversar sobre um projeto.")}
            target="_blank"
          >
            Solicitar orçamento
          </Link>
        </Button>

        <div className="mt-24 border-t border-border/50 pt-10">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link
              href={CONTACT.social.instagram}
              target="_blank"
              className="transition hover:text-primary"
            >
              <FaInstagram
                size={24}
                className="transition-all duration-300 hover:scale-130 m-3"
              />
            </Link>

            <Link
              href={CONTACT.social.facebook}
              target="_blank"
              className="transition hover:text-primary"
            >
              <FaFacebookF
                size={22}
                className="transition-all duration-300 hover:scale-130 m-3"
              />
            </Link>

            <Link
              href={CONTACT.social.linkedin}
              target="_blank"
              className="transition hover:text-primary"
            >
              <FaLinkedinIn
                size={22}
                className="transition-all duration-300 hover:scale-130 m-3"
              />
            </Link>

            <Link
              href={CONTACT.social.instagram}
              target="_blank"
              className="transition hover:text-primary"
            >
              <FaWhatsapp
                size={24}
                className="transition-all duration-300 hover:scale-130 m-3"
              />
            </Link>
          </div>

          <div className="mt-8 flex flex-col items-center gap-3 text-muted-foreground">
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-2 hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Mail size={18} />
              {CONTACT.email}
            </a>

            <p>© 2026 Edita Criativo. Todos os direitos reservados.</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
