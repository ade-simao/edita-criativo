"use client";

import { useState } from "react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/typography/Heading";
import { Text } from "@/components/typography/Text";

import { portfolio } from "./data";
import { PortfolioCard } from "./PortfolioCard";
import { PortfolioModal } from "./PortfolioModal";
import { trackPortfolio } from "@/lib/analytics";

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof portfolio)[number] | null
  >(null);

  return (
    <Section id="portfolio">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Heading className="font-semibold uppercase tracking-[.3em] text-primary">
            Trabalhos em Destaque
          </Heading>

          <Text className="mt-6">
            Alguns projetos desenvolvidos para marcas, empresas e criadores de
            conteúdo.
          </Text>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {portfolio.map((item, index) => (
            <PortfolioCard
              key={item.title}
              index={index}
              {...item}
              onClick={() => {
                trackPortfolio(item.title);
                setSelectedProject(item);
              }}
            />
          ))}
        </div>
      </Container>

      <PortfolioModal
        open={selectedProject !== null}
        onClose={() => {
          setSelectedProject(null);
        }}
        title={selectedProject?.title ?? ""}
        video={selectedProject?.video ?? ""}
        description={selectedProject?.description ?? ""}
      />
    </Section>
  );
}
