import { getLLMFullText, source } from "@/lib/fumadocs";

export const revalidate = false;

export const GET = async () => {
  const scan = source.getPages().map(getLLMFullText);

  const scanned = await Promise.all(scan);

  return new Response(scanned.join("\n\n"));
};
