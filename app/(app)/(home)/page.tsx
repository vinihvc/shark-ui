import { ComponentsExamples } from "@/app/(app)/(home)/_components/components-examples";
import { DotPattern } from "@/components/dot-pattern";
import { source } from "@/lib/fumadocs";
import { Footer } from "./_components/footer";
import { HeroSection } from "./_components/hero";

const HomePage = () => {
  const rawCount = source.getPages().length;
  const componentsCount = rawCount - (rawCount % 10);

  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 h-96">
        <DotPattern className="absolute inset-0 text-muted-foreground/40" />
        <div className="absolute inset-0 bg-linear-to-t from-background to-background/10" />
      </div>
      <div className="container relative flex flex-nowrap gap-14">
        <HeroSection className="lg:shrink-0" count={componentsCount} />
        <div
          aria-hidden
          className="hidden max-h-[calc(100vh-var(--header-height))] min-w-max shrink-0 overflow-y-hidden lg:block"
          tabIndex={-1}
        >
          <ComponentsExamples />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default HomePage;
