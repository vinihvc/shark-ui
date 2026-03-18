import { ComponentsExamples } from "@/app/(app)/(home)/_components/components-examples";
import { DotPattern } from "@/components/background/dot-pattern";
import { source } from "@/lib/fumadocs";
import { HomeFooter } from "./_components/footer";
import { HeroSection } from "./_components/hero";
import { Supports } from "./_components/supports";

export const dynamic = "force-static";
export const revalidate = false;

const HomePage = () => {
  const rawCount = source.getPages().length;
  const componentsCount = rawCount - (rawCount % 10);

  return (
    <main className="relative max-w-screen overflow-hidden">
      <div className="absolute inset-0 h-96">
        <DotPattern className="absolute inset-0 text-muted-foreground/40" />
        <div className="absolute inset-0 bg-linear-to-t from-background to-background/10" />
      </div>
      <div className="container relative flex flex-col flex-nowrap gap-14 max-md:mb-22 lg:flex-row">
        <div className="mt-16 flex flex-col gap-8 sm:mt-32 lg:shrink-0">
          <HeroSection count={componentsCount} />
          <Supports />
        </div>
        <div
          aria-hidden
          className="overflow-hidden lg:max-h-[calc(100vh-var(--header-height))] lg:min-w-max lg:shrink-0"
          tabIndex={-1}
        >
          <ComponentsExamples className="max-md:hidden" />
        </div>
      </div>

      <HomeFooter />
    </main>
  );
};

export default HomePage;
