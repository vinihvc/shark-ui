import { findNeighbour } from "fumadocs-core/page-tree";
import {
  ArrowUpRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DocsCopyPage } from "@/components/layout/docs-copy-page";
import { DocsTableOfContents } from "@/components/layout/docs-toc";
import { source } from "@/lib/fumadocs";
import { createMetadata, createOgImageUrl } from "@/lib/metadata";
import { cn } from "@/lib/utils";
import { mdxComponents } from "@/mdx-components";
import { Badge } from "@/registry/react/components/badge";
import { Button } from "@/registry/react/components/button";
import { ScrollArea } from "@/registry/react/components/scroll-area";
import { SkipNavContent } from "@/registry/react/components/skip-nav";

export const revalidate = false;
export const dynamic = "force-static";

export const generateStaticParams = () => source.generateParams();

export const generateMetadata = async (
  props: PageProps<"/docs/[[...slug]]">
): Promise<Metadata> => {
  const params = await props.params;

  const page = source.getPage(params.slug);

  if (!page) {
    notFound();
  }

  const doc = page.data;

  if (!(doc.title && doc.description)) {
    notFound();
  }

  return createMetadata({
    title: doc.title,
    description: doc.description,
    url: page.url,
    imageUrl: createOgImageUrl({
      title: doc.title,
      description: doc.description,
    }),
  });
};

const DocsPage = async (props: PageProps<"/docs/[[...slug]]">) => {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if (!page) {
    notFound();
  }

  const rawContent = await page.data.getText("raw");

  const isChangelog = params.slug?.[0] === "changelog";
  const neighbours = isChangelog
    ? { previous: null, next: null }
    : findNeighbour(source.pageTree, page.url);

  const MDX = page.data.body;

  const links = page.data.links;

  return (
    <div className="size-full">
      <div className="flex items-stretch xl:w-full" data-slot="docs">
        <div className="relative flex w-full min-w-0 flex-1 flex-col lg:me-4 lg:mt-8 lg:mb-8">
          <div className="relative flex w-full flex-col border bg-card text-card-foreground shadow-lg/5 max-lg:border-none lg:rounded-2xl">
            <div className="flex-1 px-4 py-6 sm:px-6 lg:p-8">
              <div
                className={cn("mx-auto w-full", {
                  "max-w-3xl": page.data.toc.length > 0,
                })}
              >
                <div className="flex min-w-0 flex-col gap-8">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between gap-2">
                      <h1
                        className="scroll-m-20 font-semibold text-3xl"
                        id="page-title"
                      >
                        {page.data.title}
                      </h1>

                      <div className="flex items-center gap-2">
                        <DocsCopyPage data={rawContent} url={page.url} />

                        <div className="flex items-center gap-2">
                          {neighbours.previous ? (
                            <Button
                              aria-label="Previous"
                              asChild
                              size="icon-sm"
                              variant="outline"
                            >
                              <Link href={neighbours.previous.url}>
                                <ChevronLeftIcon
                                  aria-hidden
                                  className="rtl:rotate-180"
                                />
                              </Link>
                            </Button>
                          ) : (
                            <Button disabled size="icon-sm" variant="outline">
                              <ChevronLeftIcon
                                aria-hidden
                                className="rtl:rotate-180"
                              />
                            </Button>
                          )}

                          {neighbours.next ? (
                            <Button
                              aria-label="Next"
                              asChild
                              size="icon-sm"
                              variant="outline"
                            >
                              <Link href={neighbours.next.url}>
                                <ChevronRightIcon
                                  aria-hidden
                                  className="rtl:rotate-180"
                                />
                              </Link>
                            </Button>
                          ) : (
                            <Button disabled size="icon-sm" variant="outline">
                              <ChevronRightIcon
                                aria-hidden
                                className="rtl:rotate-180"
                              />
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>

                    {page.data.description && (
                      <p className="text-[1.05rem] text-muted-foreground sm:text-base md:max-w-[80%]">
                        {page.data.description}
                      </p>
                    )}

                    {links && (
                      <div className="flex items-center gap-2 pt-4">
                        {links?.doc && (
                          <Badge asChild size="lg" variant="secondary">
                            <a
                              href={links.doc}
                              rel="noreferrer"
                              target="_blank"
                            >
                              Docs <ArrowUpRightIcon aria-hidden />
                            </a>
                          </Badge>
                        )}

                        {links?.api && (
                          <Badge asChild size="lg" variant="secondary">
                            <a
                              href={links.api}
                              rel="noreferrer"
                              target="_blank"
                            >
                              API <ArrowUpRightIcon aria-hidden />
                            </a>
                          </Badge>
                        )}
                      </div>
                    )}
                  </div>

                  <SkipNavContent className="w-full flex-1 *:data-[slot=alert]:first:mt-0">
                    <MDX components={mdxComponents()} />
                  </SkipNavContent>
                </div>
              </div>
            </div>
          </div>
        </div>

        {page.data.toc.length > 0 && (
          <div className="sticky top-(--header-height) z-30 ms-auto hidden h-[calc(100svh-var(--header-height))] w-64 flex-col overflow-hidden xl:flex">
            <ScrollArea
              className="[--fade-size:3rem] **:data-[slot=scroll-area-scrollbar]:hidden"
              scrollFade
            >
              <div className="flex min-h-0 flex-col gap-2 overflow-auto py-2">
                <div className="h-(--top-spacing) shrink-0" />
                <DocsTableOfContents data={page.data.toc} />
              </div>
            </ScrollArea>
          </div>
        )}
      </div>
    </div>
  );
};

export default DocsPage;
