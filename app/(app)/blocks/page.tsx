import type { Metadata } from "next";
import { DotPattern } from "@/components/background/dot-pattern";
import { Footer } from "@/components/layout/footer";
import { createMetadata } from "@/lib/metadata";
import { BlockCard } from "./_components/block-card";
import { BlocksHero } from "./_components/hero";
import { BLOCKS_BY_CATEGORY_AND_SUBCATEGORY } from "./_data/blocks-data";

export const revalidate = false;
export const dynamic = "force-static";

export const metadata: Metadata = createMetadata({
  title: "Blocks",
  description: "Pre-built UI blocks for faster development.",
  url: "/blocks",
});

const BlocksPage = () => {
  return (
    <>
      <main className="relative max-w-screen overflow-hidden">
        <div className="absolute inset-0 h-96">
          <DotPattern className="absolute inset-0 text-muted-foreground/40" />
          <div className="absolute inset-0 bg-linear-to-t from-background to-background/10" />
        </div>

        <div className="container relative flex flex-col gap-14 pt-16 pb-16 sm:pt-32">
          <div className="flex flex-col flex-nowrap gap-14 lg:flex-row lg:items-start">
            <div className="flex flex-col gap-4 lg:shrink-0">
              <BlocksHero />
            </div>
          </div>

          <section aria-labelledby="blocks-heading">
            <h2 className="sr-only" id="blocks-heading">
              Blocks
            </h2>
            <div className="flex flex-col gap-14">
              {Object.entries(BLOCKS_BY_CATEGORY_AND_SUBCATEGORY).map(
                ([category, subcategories]) => {
                  const categoryLabel =
                    Object.values(subcategories).flat().at(0)?.categoryLabel ??
                    category;
                  return (
                    <div className="flex flex-col gap-10" key={category}>
                      <h3 className="font-semibold text-foreground text-xl tracking-tight">
                        {categoryLabel}
                      </h3>
                      <div className="flex flex-col gap-10">
                        {Object.entries(subcategories).map(
                          ([subcategory, blocks]) =>
                            blocks.length > 0 && (
                              <div key={subcategory}>
                                <h4 className="mb-4 font-medium text-base text-muted-foreground tracking-tight">
                                  {blocks[0].subcategoryLabel}
                                </h4>
                                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                                  {blocks.map((block) => (
                                    <BlockCard
                                      block={block}
                                      key={`${block.category}/${block.subcategory}/${block.id}`}
                                    />
                                  ))}
                                </div>
                              </div>
                            )
                        )}
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default BlocksPage;
