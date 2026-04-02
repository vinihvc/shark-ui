import { getLLMFullText, getPatternPages } from "@/lib/llms";
import {
  getAllRegistryComponentNames,
  getComponentExamplesForLLM,
} from "@/lib/llms-registry-examples";

export const revalidate = false;

export const GET = async () => {
  const pages = getPatternPages();

  const scanned = await Promise.all(pages.map(getLLMFullText));

  const componentNames = getAllRegistryComponentNames();
  const patternExamples = getComponentExamplesForLLM(componentNames);

  const content = [...scanned, patternExamples].filter(Boolean).join("\n\n");

  return new Response(content);
};
