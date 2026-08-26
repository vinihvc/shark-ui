import {
  createCompositionCatalog,
  createCompositionFileTree,
  getCompositionFileDisplayPath,
} from "@/lib/compositions";
import type { BlockDefinition } from "@/lib/registry";
import { BLOCK_CATEGORIES } from "@/registry/react/blocks/_categories";
import { BLOCKS } from "@/registry/react/blocks/_registry";

const catalog = createCompositionCatalog({
  categories: BLOCK_CATEGORIES,
  definitions: BLOCKS,
  label: "blocks",
  sourceDirectory: "blocks",
});

export const validateBlockDefinitions = (
  definitions: readonly BlockDefinition[] = BLOCKS
) => catalog.validateDefinitions(definitions);

export const getBlockRegistryArtifacts = catalog.getCompositionArtifacts;
export const getPublishedBlocks = catalog.getPublishedCompositions;
export const getPublishedBlock = catalog.getPublishedComposition;
export const getBlockDefinition = catalog.getDefinition;
export const createBlockFileTree = createCompositionFileTree;
export const getBlockFileDisplayPath = getCompositionFileDisplayPath;
