import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/config/site";

export const dynamic = "force-static";
export const revalidate = false;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      allow: "/",
      disallow: ["/api/"],
      userAgent: "*",
    },
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
  };
}
