import { Suspense } from "react";
import { createBlockFileTree, getPublishedBlocks } from "@/lib/blocks";
import { BLOCK_CATEGORIES } from "@/registry/react/blocks/_categories";
import { Skeleton } from "@/registry/react/components/skeleton";
import { BlocksBrowser } from "./_components/blocks-browser";

export const dynamic = "force-static";
export const revalidate = false;

const BlocksPage = async () => {
  const blocks = await getPublishedBlocks();
  const browserBlocks = blocks.map((block) => ({
    block,
    tree: createBlockFileTree(block.files),
  }));

  return (
    <Suspense fallback={<Skeleton className="container h-[900px] w-full" />}>
      <BlocksBrowser blocks={browserBlocks} categories={BLOCK_CATEGORIES} />
    </Suspense>
  );
};

export default BlocksPage;
