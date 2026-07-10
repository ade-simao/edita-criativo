import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

import "./globals.css";

import { cn } from "@/lib/utils";

import { LenisProvider } from "@/components/providers/LenisProvider";
import { ScrollProgress } from "@/components/layout/ScrollProgress";

import { CLARITY_PROJECT_ID, GA_MEASUREMENT_ID } from "@/constants/analytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

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

        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />

            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];

                function gtag(){dataLayer.push(arguments);}

                gtag('js', new Date());

                gtag('config', '${GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}

        {CLARITY_PROJECT_ID && (
          <Script id="clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);
                  t.async=1;
                  t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];
                  y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
            `}
          </Script>
        )}
      </body>
    </html>
  );
}
