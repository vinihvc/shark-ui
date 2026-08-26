import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import {
  createBlockFileTree,
  getPublishedBlock,
  getPublishedBlocks,
} from "@/lib/blocks";
import { createMetadata } from "@/lib/metadata";
import { BLOCK_CATEGORIES } from "@/registry/react/blocks/_categories";
import { Skeleton } from "@/registry/react/components/skeleton";
import { BlocksBrowser } from "../../_components/blocks-browser";

export const dynamic = "force-static";
export const dynamicParams = false;
export const revalidate = false;

export const generateStaticParams = async () => {
  const blocks = await getPublishedBlocks();
  return blocks.map((block) => ({
    block: block.name,
    category: block.category,
  }));
};

export const generateMetadata = async (
  props: PageProps<"/blocks/[category]/[block]">
): Promise<Metadata> => {
  const { block: name, category: slug } = await props.params;
  const item = await getPublishedBlock(slug, name);

  if (!item) {
    notFound();
  }

  return createMetadata({
    description: item.description,
    title: item.title,
    url: `/blocks/${item.category}/${item.name}`,
  });
};

const BlockPage = async (props: PageProps<"/blocks/[category]/[block]">) => {
  const { block: name, category: slug } = await props.params;
  const [item, blocks] = await Promise.all([
    getPublishedBlock(slug, name),
    getPublishedBlocks(),
  ]);

  const category = BLOCK_CATEGORIES.find((entry) => entry.slug === slug);
  if (!(item && category)) {
    notFound();
  }

  const browserBlocks = blocks.map((block) => ({
    block,
    tree: createBlockFileTree(block.files),
  }));

  return (
    <Suspense fallback={<Skeleton className="container h-[900px] w-full" />}>
      <BlocksBrowser
        activeBlockName={item.name}
        blocks={browserBlocks}
        categories={BLOCK_CATEGORIES}
        categorySlug={category.slug}
        isDetailPage
      />
    </Suspense>
  );
};

export default BlockPage;
