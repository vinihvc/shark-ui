import {
  createCompositionCatalog,
  createCompositionFileTree,
  getCompositionFileDisplayPath,
} from "@/lib/compositions";
import type { TemplateDefinition } from "@/lib/registry";
import { TEMPLATE_CATEGORIES } from "@/registry/react/templates/_categories";
import { TEMPLATES } from "@/registry/react/templates/_registry";

const catalog = createCompositionCatalog({
  categories: TEMPLATE_CATEGORIES,
  definitions: TEMPLATES,
  label: "templates",
  sourceDirectory: "templates",
});

export const validateTemplateDefinitions = (
  definitions: readonly TemplateDefinition[] = TEMPLATES
) => catalog.validateDefinitions(definitions);

export const getTemplateRegistryArtifacts = catalog.getCompositionArtifacts;
export const getPublishedTemplates = catalog.getPublishedCompositions;
export const getPublishedTemplate = catalog.getPublishedComposition;
export const getTemplateDefinition = catalog.getDefinition;
export const createTemplateFileTree = createCompositionFileTree;
export const getTemplateFileDisplayPath = getCompositionFileDisplayPath;
