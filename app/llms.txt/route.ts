import { getLLMText, source } from "@/lib/fumadocs";

export const revalidate = false;

export const GET = async () => {
  const scan = source.getPages().map(getLLMText);

  const intro = `# Shark UI\n
> Shark UI is a collection of beautifully-designed, accessible components and a code distribution platform. It is built with TypeScript, Tailwind CSS, and Ark UI primitives. It supports multiple frameworks including Next.js, Vite, Remix, Astro, and more. Open Source. Open Code. AI-Ready. It also comes with a command-line tool to install and manage components.
`;

  const scanned = await Promise.all(scan);

  const content = `${intro}\n${scanned.join("\n\n")}
  `;

  return new Response(content);
};
