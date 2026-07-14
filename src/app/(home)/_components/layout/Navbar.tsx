"use client";

import Link from "next/link";

import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";

import { useScroll } from "@/hooks/useScroll";
import { useActiveSection } from "@/hooks/useActiveSection";

import { whatsapp } from "@/constants/contact";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Container } from "@/components/layout/Container";
import { trackWhatsApp } from "@/lib/analytics";

const links = [
  { id: "about", label: "Quem Somos" },
  { id: "services", label: "Serviços" },
  { id: "portfolio", label: "Portfólio" },
  { id: "pricing", label: "Planos" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contacto" },
];

export function Navbar() {
  const scrolled = useScroll();
  const activeSection = useActiveSection();

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/50 bg-background/80 backdrop-blur-xl shadow-xl"
          : "bg-transparent",
      )}
    >
      <Container
        className={cn(
          "flex items-center justify-between transition-all duration-300",
          scrolled ? "py-3" : "py-5",
        )}
      >
        <Link
          href="/"
          className="text-xl font-bold transition-transform duration-300 hover:scale-105"
        >
          Edita<span className="text-primary">Criativo</span>
        </Link>

        {/* Desktop */}

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.id}
              href={`#${link.id}`}
              className={cn(
                `relative py-0.5 text-sm transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:rounded-full after:bg-primary after:transition-all after:duration-300`,
                activeSection === link.id
                  ? "text-primary after:w-full"
                  : "text-muted-foreground after:w-0 hover:text-foreground hover:after:w-full",
              )}
            >
              {link.label}

              <span
                className={cn(
                  "absolute -bottom-1 left-0 h-0.5 rounded-full bg-primary transition-all duration-300",
                  activeSection === link.id ? "w-full" : "w-0",
                )}
              />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild>
            <Link
              href={whatsapp("Olá! Vim pelo site e gostaria de um orçamento.")}
              onClick={() => trackWhatsApp("navbar")}
              target="_blank"
            >
              Falar agora
            </Link>
          </Button>
        </div>

        {/* Mobile */}

        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button size="icon" variant="ghost">
              <Menu size={22} />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="flex w-[320px] flex-col">
            <div className="mt-12 flex flex-col gap-2">
              {links.map((link) => (
                <SheetClose asChild key={link.id}>
                  <Link
                    href={`#${link.id}`}
                    className={cn(
                      "rounded-xl px-4 py-3 transition-all duration-300",
                      activeSection === link.id
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted",
                    )}
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
            </div>

            <div className="mt-auto">
              <Button asChild className="w-full">
                <Link
                  href={whatsapp(
                    "Olá! Vim pelo site e gostaria de um orçamento.",
                  )}
                  target="_blank"
                >
                  Falar no WhatsApp
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  );
}
