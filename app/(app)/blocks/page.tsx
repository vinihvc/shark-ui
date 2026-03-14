import { DotPattern } from "@/components/dot-pattern";
import { Footer } from "@/components/layout/footer";
import { BlockCard } from "./_components/block-card";
import { BlocksHero } from "./_components/hero";
import { MOCK_BLOCKS } from "./_data/mock-blocks";

export const revalidate = false;
export const dynamic = "force-static";

const BlocksPage = () => {
  return (
    <>
      <main className="relative max-w-screen overflow-hidden">
        <div className="absolute inset-0 h-96">
          <DotPattern className="absolute inset-0 text-muted-foreground/40" />
          <div className="absolute inset-0 bg-linear-to-t from-background to-background/10" />
        </div>

        <div className="container relative flex flex-col gap-14 pt-16 pb-16 sm:pt-32">
          <BlocksHero />

          <section aria-labelledby="blocks-heading">
            <h2 className="sr-only" id="blocks-heading">
              Blocks
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {MOCK_BLOCKS.map((block) => (
                <BlockCard block={block} key={block.id} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default BlocksPage;
