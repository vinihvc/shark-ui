import type { CompositionDefinition } from "@/lib/registry";
import { BLOCKS } from "@/registry/react/blocks/_registry";

export interface CommandCompositionItem {
  group: "Blocks";
  installName: string;
  isComponent: true;
  keywords: string;
  label: string;
  url: string;
  value: string;
}

const toCommandItem = (
  definition: Pick<
    CompositionDefinition,
    "category" | "description" | "name" | "title"
  >
): CommandCompositionItem => {
  const url = `/blocks/${definition.category}?block=${definition.name}`;

  return {
    group: "Blocks",
    installName: definition.name,
    isComponent: true,
    keywords: [
      definition.name,
      definition.title,
      definition.description,
      definition.category,
    ].join(" "),
    label: definition.title,
    url,
    value: url,
  };
};

export const getCommandCompositionItems = (): CommandCompositionItem[] =>
  BLOCKS.map((block) => toCommandItem(block));
