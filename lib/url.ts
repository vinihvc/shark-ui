import { SITE_CONFIG } from "@/config/site";

const TRAILING_SLASH = /\/$/;

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
