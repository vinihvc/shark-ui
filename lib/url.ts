import { SITE_CONFIG } from "@/config/site";
import type { RegistryBuildFramework } from "@/lib/registry-framework";

const TRAILING_SLASH = /\/$/;

const REGISTRY_URL_PREFIX: Record<RegistryBuildFramework, string> = {
  react: "/r",
  solid: "/s",
};

const getBaseUrl = (): string => {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (envUrl) {
    return envUrl.replace(TRAILING_SLASH, "");
  }

  if (process.env.NODE_ENV === "production") {
    return SITE_CONFIG.url.replace(TRAILING_SLASH, "");
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(TRAILING_SLASH, "")}`;
  }

  return "http://localhost:3000";
};

export const absoluteUrl = (path: string) => {
  const base = getBaseUrl();

  return path.startsWith("/") ? `${base}${path}` : `${base}/${path}`;
};

/** Absolute URL to a published registry item JSON for a given framework. */
export const absoluteRegistryItemUrl = (
  framework: RegistryBuildFramework,
  itemName: string
) => absoluteUrl(`${REGISTRY_URL_PREFIX[framework]}/${itemName}.json`);
