import { DotPattern } from "@/components/dot-pattern";
import { Footer } from "@/components/layout/footer";
import { ShowcaseCard } from "./_components/showcase-card";
import { ShowcaseHero } from "./_components/hero";
import { MOCK_SHOWCASES } from "./_data/mock-showcases";

export const revalidate = false;
export const dynamic = "force-static";

const ShowcasePage = () => {
  return (
    <>
      <main className="relative max-w-screen overflow-hidden">
        <div className="absolute inset-0 h-96">
          <DotPattern className="absolute inset-0 text-muted-foreground/40" />
          <div className="absolute inset-0 bg-linear-to-t from-background to-background/10" />
        </div>

        <div className="container relative flex flex-col gap-14 pt-16 pb-16 sm:pt-32">
          <ShowcaseHero />

          <section aria-labelledby="showcase-heading">
            <h2 className="sr-only" id="showcase-heading">
              Showcase
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {MOCK_SHOWCASES.map((showcase) => (
                <ShowcaseCard key={showcase.id} showcase={showcase} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ShowcasePage;
