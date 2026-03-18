import { buildLLMIndex } from "@/lib/fumadocs";

export const revalidate = false;

export const GET = () => {
  const intro = `# Shark UI Documentation

> Documentation for Shark UI component library.

Shark UI is a component library built on [Tailwind CSS](https://tailwindcss.com/) and [Ark UI](https://ark-ui.com/). Components are accessible, customizable, and ready to use with your preferred framework.

**Key Features:**

- Beautiful by default - Professional look out of the box
- Accessible - Built with accessibility best practices
- Flexible - Customizable components with predictable patterns
- Developer-friendly - Fully typed APIs and excellent autocompletion

## Documentation Index

`;

  const index = buildLLMIndex();
  const content = `${intro}${index}
`;

  return new Response(content);
};
