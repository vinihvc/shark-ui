import { SITE_CONFIG } from "@/config/site";

const TRAILING_SLASH = /\/$/;

const getBaseUrl = (): string => {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (envUrl) {
    return envUrl.replace(TRAILING_SLASH, "");
  }

  return SITE_CONFIG.url.replace(TRAILING_SLASH, "");
};

export const absoluteUrl = (path: string) => {
  const base = getBaseUrl();

  return path.startsWith("/") ? `${base}${path}` : `${base}/${path}`;
};
