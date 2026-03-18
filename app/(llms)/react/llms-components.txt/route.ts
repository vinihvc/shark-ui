import {
  getAllRegistryComponentNames,
  getComponentExamplesForLLM,
} from "@/lib/llms-component-examples";

export const revalidate = false;

const INTRO = `# Shark UI Component Usage Examples

Usage examples for all components in the Shark UI design system. Import paths use \`@/components/ui\` (install via CLI or manual setup first).

`;

export const GET = () => {
  const componentNames = getAllRegistryComponentNames();
  const examples = getComponentExamplesForLLM(componentNames);
  return new Response(`${INTRO}${examples}`);
};
