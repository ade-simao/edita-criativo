import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";

import { LenisProvider } from "@/components/providers/LenisProvider";
import { ScrollProgress } from "@/components/layout/ScrollProgress";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://editacriativo.vercel.app"),

  title: {
    default: "Edita Criativo | Edição de Vídeo Profissional",
    template: "%s | Edita Criativo",
  },

  description:
    "Transformamos ideias em vídeos profissionais para empresas, marcas e criadores de conteúdo.",

  keywords: [
    "edição de vídeo",
    "motion design",
    "vídeos institucionais",
    "social media",
    "branding",
    "Edita Criativo",
  ],

  authors: [
    {
      name: "Edita Criativo",
    },
  ],

  creator: "Edita Criativo",

  publisher: "Edita Criativo",

  applicationName: "Edita Criativo",

  category: "Business",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Edita Criativo",
    description:
      "Edição de vídeo profissional para empresas, criadores de conteúdo e marcas.",

    url: "https://editacriativo.vercel.app",

    siteName: "Edita Criativo",

    locale: "pt_PT",

    type: "website",

    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Edita Criativo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Edita Criativo",

    description:
      "Edição de vídeo profissional para empresas, criadores de conteúdo e marcas.",

    images: ["/opengraph-image.png"],
  },
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
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
