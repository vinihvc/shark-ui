import { DotPattern } from "@/components/background/dot-pattern";
import { Footer } from "@/components/layout/footer";
import { TemplatesHero } from "./_components/hero";
import { TemplateCard } from "./_components/template-card";
import { MOCK_TEMPLATES } from "./_data/mock-templates";

export const revalidate = false;
export const dynamic = "force-static";

const TemplatesPage = () => {
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
              <TemplatesHero />
            </div>
          </div>

          <section aria-labelledby="templates-heading">
            <h2 className="sr-only" id="templates-heading">
              Templates
            </h2>
            <div className="grid gap-8 sm:grid-cols-2">
              {MOCK_TEMPLATES.map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default TemplatesPage;
