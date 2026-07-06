import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ScrollProgress } from "@/components/layout/ScrollProgress";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Edita Criativo",
  description: `A Edita Criativo é um estúdio especializado em edição profissional de vídeos
   para criadores de conteúdo, empresas e marcas que desejam fortalecer 
   sua presença digital através de conteúdos audiovisuais de alta qualidade.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={cn("antialiased", inter.variable)}>
      <body>
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
