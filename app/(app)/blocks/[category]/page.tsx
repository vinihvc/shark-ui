import { BlockCard } from "../_components/block-card";

const BlocksCategoryPage = async (props: PageProps<"/blocks/[category]">) => {
  const { category } = await props.params;

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        <BlockCard
          data={{
            previewUrl: "/blocks/charts/chart-area-default",
            category: "charts",
            categoryLabel: "Charts",
            description: "Charts block for your website.",
            id: "chart-area-default",
            name: "Chart Area Default",
            subcategory: "area",
            subcategoryLabel: "Area",
          }}
        />
      </div>
    </div>
  );
};

export default BlocksCategoryPage;
