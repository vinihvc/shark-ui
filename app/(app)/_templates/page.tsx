import { ArrowDownIcon, ArrowRightIcon, SparklesIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { CompositionViewer } from "@/components/registry-compositions/composition-viewer";
import { createMetadata } from "@/lib/metadata";
import { createTemplateFileTree, getPublishedTemplates } from "@/lib/templates";
import {
  Announcement,
  AnnouncementTitle,
} from "@/registry/react/components/announcement";
import { Badge } from "@/registry/react/components/badge";
import { Button } from "@/registry/react/components/button";
import { Skeleton } from "@/registry/react/components/skeleton";
import { SkipNavContent } from "@/registry/react/components/skip-nav";

export const revalidate = false;
export const dynamic = "force-static";

export const metadata: Metadata = createMetadata({
  description:
    "Production-ready Shark UI starters you can preview, install, and adapt.",
  title: "Templates",
  url: "/templates",
});

const TEMPLATES_DIRECTION_CONTRACT = {
  finish:
    "unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance",
  firstViewport:
    "A centered, oversized product statement fills most of the canvas, followed by an honest technical stack and the opening edge of the live AI Chat showcase. The primary action moves directly into the working template.",
  form: "User-pinned editorial catalog inspired by the supplied Magic UI Pro reference, translated into Shark UI's established visual world. A concept roll is not applicable because the reference fixes the direction.",
  ownWorld:
    "Shark UI semantic neutrals, Hanken Grotesk hierarchy, compact controls, restrained borders, proportional radii, and one configurable accent.",
  story:
    "Understand the value of a complete starter, see the real stack behind it, then exercise the app, inspect every file, and install it into an isolated route.",
  thesis:
    "The template is the proof: a bold promise gives way to a complete, live, source-backed product shell within the first scroll.",
} as const;

const TEMPLATE_STACK = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Ark UI",
] as const;

const TemplatesPage = async () => {
  const templates = await getPublishedTemplates();

  return (
    <SkipNavContent>
      <script
        // This is inert, auditable build metadata rather than executable code.
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON is serialized from a local constant and escaped before emission.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(TEMPLATES_DIRECTION_CONTRACT).replaceAll(
            "<",
            "\\u003c"
          ),
        }}
        data-impeccable-direction-contract="templates"
        type="application/json"
      />

      <main>
        <section className="overflow-hidden border-b">
          <div className="container px-0">
            <div className="flex min-h-[calc(100svh-var(--header-height)-5rem)] flex-col items-center justify-center border-x px-4 py-16 text-center sm:min-h-[42rem] sm:px-8 sm:py-20 lg:min-h-[46rem]">
              <h1
                aria-label="Start with a complete product, not a blank page."
                className="max-w-5xl text-balance font-heading font-semibold text-5xl leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl xl:text-8xl"
              >
                Start with a complete product,
                <span className="text-muted-foreground">
                  {" "}
                  not a blank page.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-balance text-base text-muted-foreground leading-relaxed sm:text-xl">
                Production-ready Shark UI starters with live previews,
                copy-ready files, and the structure to make them your own.
              </p>

              <div className="mt-8 flex w-full max-w-sm flex-col justify-center gap-2 sm:w-auto sm:max-w-none sm:flex-row">
                <Button asChild size="xl">
                  <Link href="#ai-chat-01">
                    Explore AI Chat
                    <ArrowDownIcon aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild size="xl" variant="outline">
                  <Link href="/blocks">
                    View blocks
                    <ArrowRightIcon aria-hidden="true" />
                  </Link>
                </Button>
              </div>

              <div className="mt-12 border-t pt-5 sm:mt-14">
                <p className="text-muted-foreground text-sm">
                  Built for the tools already in your workflow
                </p>
                <ul
                  aria-label="Template technology stack"
                  className="mt-3 flex max-w-3xl flex-wrap justify-center gap-x-5 gap-y-2"
                >
                  {TEMPLATE_STACK.map((technology) => (
                    <li className="font-medium text-sm" key={technology}>
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>

              <Announcement className="mt-6 bg-background p-0 shadow-sm/5">
                <Link
                  className="inline-flex min-w-0 max-w-full items-center gap-2 rounded-2xl py-0.5 ps-0.5 pe-3 outline-none transition-colors hover:bg-input/12 focus-visible:ring-[3px] focus-visible:ring-ring/32 motion-reduce:transition-none"
                  href="#ai-chat-01"
                >
                  <Badge pill size="sm" variant="secondary">
                    <SparklesIcon aria-hidden="true" />
                    New
                  </Badge>
                  <AnnouncementTitle>
                    AI Chat template is now available
                  </AnnouncementTitle>
                  <ArrowRightIcon aria-hidden="true" />
                </Link>
              </Announcement>
            </div>
          </div>
        </section>

        <section className="bg-muted/20" id="templates-catalog">
          <div className="container border-x px-4 py-14 motion-safe:animate-[templates-workbench-in_1s_cubic-bezier(0.16,1,0.3,1)_both] sm:px-6 sm:py-16 lg:px-8 lg:py-20 motion-safe:[animation-range:entry_0%_entry_30%] motion-safe:[animation-timeline:view()]">
            <div className="flex flex-col gap-16">
              {templates.map((item) => (
                <Suspense
                  fallback={<Skeleton className="h-[820px] w-full" />}
                  key={item.name}
                >
                  <CompositionViewer
                    item={item}
                    kind="templates"
                    tree={createTemplateFileTree(item.files)}
                  />
                </Suspense>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y">
          <div className="container border-x px-4 py-14 sm:px-8 sm:py-16">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-balance font-heading font-semibold text-3xl tracking-[-0.03em] sm:text-4xl">
                  Need a smaller starting point?
                </h2>
                <p className="mt-2 max-w-xl text-muted-foreground">
                  Browse composed sections you can add without adopting a full
                  product shell.
                </p>
              </div>
              <Button asChild className="w-full sm:w-auto" size="xl">
                <Link href="/blocks">
                  Browse blocks
                  <ArrowRightIcon aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </SkipNavContent>
  );
};

export default TemplatesPage;
