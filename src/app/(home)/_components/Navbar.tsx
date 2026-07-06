"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

import { useScroll } from "@/hooks/useScroll";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";

const links = [
  { href: "#services", label: "Serviços" },
  { href: "#about", label: "Quem Somos" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#pricing", label: "Planos" },
];

export function Navbar() {
  const scrolled = useScroll();

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/50 bg-background/80 backdrop-blur-xl shadow-sm"
          : "bg-transparent",
      )}
    >
      <Container
        className={cn(
          "flex items-center justify-between transition-all duration-300",
          scrolled ? "py-3" : "py-5",
        )}
      >
        <Link href="/" className="text-xl font-bold">
          Edita<span className="text-primary">Criativo</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground relative transition-colors
after:absolute
after:-bottom-1
after:left-0
after:h-0.5
after:w-0
after:bg-primary
after:transition-all
hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button
          className="
transition-all
duration-300
hover:-translate-y-1
hover:scale-[1.02]
active:scale-95
"
        >
          Orçamento
        </Button>
      </Container>
    </header>
  );
}
