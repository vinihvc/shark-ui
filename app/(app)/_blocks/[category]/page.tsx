import { notFound } from "next/navigation";
import { getAllRegistryItems } from "@/lib/registry";
import { BlockCard } from "../_components/block-card";

const GRID_COLSPAN = {
  chart: 3,
  sidebar: 1,
} as const;

const BlocksCategoryPage = async (props: PageProps<"/blocks/[category]">) => {
  const { category } = await props.params;

  const blocks = await getAllRegistryItems({ folderType: "blocks" });

  const blocksByCategory = blocks.filter(
    (block) => block.category === category
  );

  if (blocksByCategory.length === 0) {
    notFound();
  }

  return (
    <div
      className="grid gap-6"
      style={{
        gridTemplateColumns: `repeat(${GRID_COLSPAN[category as keyof typeof GRID_COLSPAN] || 1}, 1fr)`,
      }}
    >
      {blocksByCategory.map((block) => (
        <>
          <BlockCard
            data={{
              name: block.name,
              src: `/view/${block.type}/${block.category}/${block.name.replace(".tsx", "")}`,
            }}
            key={block.name}
          />
        </>
      ))}
    </div>
  );
};

export default BlocksCategoryPage;
