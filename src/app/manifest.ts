import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Edita Criativo",

    short_name: "Edita",

    description: "Edição de vídeo profissional.",

    start_url: "/",

    display: "standalone",

    background_color: "#0B0B0B",

    theme_color: "#0B0B0B",

    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
