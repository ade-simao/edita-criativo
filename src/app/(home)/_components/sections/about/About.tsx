"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

import { AboutContent } from "./AboutContent";
import { AboutImage } from "./AboutImage";

export function About() {
  return (
    <Section id="about" className="overflow-hidden">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <AboutImage />
          <AboutContent />
        </div>
      </Container>
    </Section>
  );
}
