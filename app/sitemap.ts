import type { MetadataRoute } from "next";
import { BLOCKS } from "@/app/(app)/blocks/_data/blocks-data";
import { MOCK_TEMPLATES } from "@/app/(app)/templates/_data/mock-templates";
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

  const templateDemos = MOCK_TEMPLATES.filter((t) => t.status === "available")
    .filter((t) => t.previewUrl)
    .map((t) => ({
      url: absoluteUrl(t.previewUrl as string),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    }));

  const blockDemos = BLOCKS.map((block) => ({
    url: absoluteUrl(block.blockUrl),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  const docPages = source.getPages().map((page) => ({
    url: absoluteUrl(page.url),
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: page.url === "/docs" ? 0.9 : 0.7,
  }));

  return [
    ...staticRoutes,
    ...templateDemos,
    ...blockDemos,
    ...docPages,
  ] as MetadataRoute.Sitemap;
};

export default sitemap;
