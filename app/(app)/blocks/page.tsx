import React from "react";
import { createBlockFileTree, getPublishedBlocks } from "@/lib/blocks";
import { createMetadata } from "@/lib/metadata";
import { BLOCK_CATEGORIES } from "@/registry/react/blocks/_categories";
import { Skeleton } from "@/registry/react/components/skeleton";
import { SkipNavContent } from "../../../registry/react/components/skip-nav";
import { BlocksBrowser } from "./_components/blocks-browser";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata = createMetadata({
  description: "Composed Shark UI interfaces you can copy or install.",
  title: "Blocks",
  url: "/blocks",
});

const BlocksPage = async () => {
  const blocks = await getPublishedBlocks();

  const browserBlocks = blocks.map((block) => ({
    block,
    tree: createBlockFileTree(block.files),
  }));

  return (
    <SkipNavContent>
      <React.Suspense
        fallback={<Skeleton className="container h-[900px] w-full" />}
      >
        <BlocksBrowser blocks={browserBlocks} categories={BLOCK_CATEGORIES} />
      </React.Suspense>
    </SkipNavContent>
  );
};

export default BlocksPage;
