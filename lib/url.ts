const TRAILING_SLASH = /\/$/;

const getBaseUrl = (): string => {
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(TRAILING_SLASH, "")}`;
  }

  return "http://localhost:3000";
};

export const absoluteUrl = (path: string) => {
  const base = getBaseUrl();

  return path.startsWith("/") ? `${base}${path}` : `${base}/${path}`;
};
