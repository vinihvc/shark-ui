import Link from "fumadocs-core/link";
import { findNeighbour } from "fumadocs-core/page-tree";
import { createRelativeLink } from "fumadocs-ui/mdx";
import { ArrowUpRightIcon, ChevronLeft, ChevronRight } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DocsCopyPage } from "@/components/layout/docs-copy-page";
import { DocsTableOfContents } from "@/components/layout/docs-toc";
import { getPageImage, source } from "@/lib/fumadocs";
import { getMDXComponents } from "@/mdx-components";
import { Badge } from "@/registry/react/components/badge";
import { Button } from "@/registry/react/components/button";
import { ScrollArea } from "@/registry/react/components/scroll-area";

export const generateStaticParams = () => source.generateParams();

export const generateMetadata = async (
  props: PageProps<"/docs/[[...slug]]">
): Promise<Metadata> => {
  const params = await props.params;

  const page = source.getPage(params.slug);

  if (!page) {
    notFound();
  }

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      images: getPageImage(page).url,
    },
  };
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
        <div className="relative flex w-full min-w-0 flex-1 flex-col lg:mt-8 lg:mr-4 lg:mb-8">
          <div className="relative flex w-full flex-col border bg-muted/32 text-card-foreground shadow-xs/5 max-lg:border-none lg:rounded-2xl">
            <div className="flex-1 p-6 px-4 py-6 sm:px-6 lg:p-8">
              <div className="mx-auto w-full">
                <div className="flex min-w-0 flex-col gap-8">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between gap-2">
                      <h1 className="scroll-m-20 font-semibold text-3xl">
                        {page.data.title}
                      </h1>

                      <div className="flex items-center gap-2">
                        <DocsCopyPage data={rawContent} url={page.url} />

                        <div className="flex items-center gap-2">
                          {neighbours.previous ? (
                            <Button size="icon-sm" variant="outline">
                              <Link href={neighbours.previous.url}>
                                <ChevronLeft />
                              </Link>
                            </Button>
                          ) : (
                            <Button disabled size="icon-sm" variant="outline">
                              <ChevronLeft />
                            </Button>
                          )}

                          {neighbours.next ? (
                            <Button asChild size="icon-sm" variant="outline">
                              <Link href={neighbours.next.url}>
                                <ChevronRight />
                              </Link>
                            </Button>
                          ) : (
                            <Button disabled size="icon-sm" variant="outline">
                              <ChevronRight />
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>

                    {page.data.description && (
                      <p className="text-[1.05rem] text-muted-foreground sm:text-balance sm:text-base md:max-w-[80%]">
                        {page.data.description}
                      </p>
                    )}

                    {links && (
                      <div className="flex items-center gap-2 pt-4">
                        {links?.doc && (
                          <Badge asChild pill variant="outline">
                            <a
                              href={links.doc}
                              rel="noreferrer"
                              target="_blank"
                            >
                              Docs <ArrowUpRightIcon />
                            </a>
                          </Badge>
                        )}

                        {links?.api && (
                          <Badge asChild pill variant="outline">
                            <a
                              href={links.api}
                              rel="noreferrer"
                              target="_blank"
                            >
                              API <ArrowUpRightIcon />
                            </a>
                          </Badge>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="mt-6 w-full flex-1 *:data-[slot=alert]:first:mt-0">
                    <MDX
                      components={getMDXComponents({
                        // this allows you to link to other pages with relative file paths
                        a: createRelativeLink(source, page),
                      })}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sticky top-(--header-height) z-30 ms-auto hidden h-[calc(100svh-var(--header-height))] w-72 flex-col overflow-hidden overscroll-none xl:flex">
          <ScrollArea className="**:data-[slot=scroll-area-scrollbar]:hidden">
            <div className="flex min-h-0 flex-col gap-2 overflow-auto py-2">
              <div className="h-(--top-spacing) shrink-0" />
              {page.data.toc && page.data.toc.length > 0 && (
                <DocsTableOfContents data={page.data.toc} />
              )}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default DocsPage;
