import { getLLMFullText, source } from "@/lib/fumadocs";

export const revalidate = false;

export const GET = async () => {
  const pages = source.getPages();
  const scanned = await Promise.all(pages.map(getLLMFullText));
  return new Response(scanned.join("\n\n"));
};
