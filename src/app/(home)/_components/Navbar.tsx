import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";

const links = [
  { href: "#services", label: "Serviços" },
  { href: "#about", label: "Quem Somos" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#pricing", label: "Planos" },
];

export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Edita<span className="text-primary">Criativo</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button>Orçamento</Button>
      </Container>
    </header>
  );
}
