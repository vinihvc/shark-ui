"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import type { Block } from "../_data/blocks-data";
import { useBlocksCategoryState } from "../_lib/blocks-url-state";
import { BlockCard } from "./block-card";

export interface BlocksCatalogProps {
  /**
   * The blocks to display.
   */
  blocks: Block[];
}

const blockMatchesQuery = (block: Block, query: string) => {
  const q = query.trim().toLowerCase();

  if (!q) {
    return true;
  }

  const haystack = [
    block.name,
    block.description,
    block.id,
    block.subcategoryLabel,
    block.categoryLabel,
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(q);
};

export const BlocksCatalog = (props: BlocksCatalogProps) => {
  const { blocks } = props;
  const searchParams = useSearchParams();
  const q = searchParams.get("q") ?? "";

  const validCategories = useMemo(
    () => new Set(blocks.map((b) => b.category)),
    [blocks]
  );

  const { selectedCategory } = useBlocksCategoryState(validCategories);

  const filteredBlocks = useMemo(() => {
    return blocks.filter((block) => {
      if (selectedCategory !== "all" && block.category !== selectedCategory) {
        return false;
      }

      return blockMatchesQuery(block, q);
    });
  }, [blocks, selectedCategory, q]);

  if (filteredBlocks.length === 0) {
    return (
      <p className="text-muted-foreground text-sm">
        No blocks match your filters.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-2 md:grid-cols-3">
      {filteredBlocks.map((block) => (
        <BlockCard data={block} key={block.id} />
      ))}
    </div>
  );
};
