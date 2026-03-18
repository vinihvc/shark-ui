import type { MetadataRoute } from "next";
import { source } from "@/lib/fumadocs";
import { absoluteUrl } from "@/lib/url";

export const revalidate = 86_400;

const sitemap = (): MetadataRoute.Sitemap => {
  const staticRoutes = [
    { url: absoluteUrl("/"), changeFrequency: "weekly", priority: 1 },
    {
      url: absoluteUrl("/docs/changelog"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/templates"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    { url: absoluteUrl("/blocks"), changeFrequency: "monthly", priority: 0.6 },
    {
      url: absoluteUrl("/showcase"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    { url: absoluteUrl("/themes"), changeFrequency: "monthly", priority: 0.6 },
  ];

  const docPages = source.getPages().map((page) => ({
    url: absoluteUrl(page.url),
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: page.url === "/docs" ? 0.9 : 0.7,
  }));

  return [...staticRoutes, ...docPages] as MetadataRoute.Sitemap;
};

export default sitemap;
