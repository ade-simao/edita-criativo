import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://editacriativo.vercel.app",
      priority: 1,
      changeFrequency: "weekly",
      lastModified: new Date(),
    },
  ];
}
