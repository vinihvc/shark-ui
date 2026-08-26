import { buttonVariants } from "@registry/react/components/button";
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
import { JsonLd } from "@/components/seo/json-ld";
import { getDateFromFile } from "@/lib/changelog";
import { source } from "@/lib/fumadocs";
import { createMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/url";
import { cn } from "@/lib/utils";
import { mdxComponents } from "@/mdx-components";
import { Badge } from "@/registry/react/components/badge";
import { ScrollArea } from "@/registry/react/components/scroll-area";
import { SkipNavContent } from "@/registry/react/components/skip-nav";

export const revalidate = false;
export const dynamic = "force-static";
export const dynamicParams = false;

export const generateStaticParams = () => source.generateParams();

const humanizeSlug = (slug: string) =>
  slug.replaceAll("-", " ").replace(/\b\w/g, (letter) => letter.toUpperCase());

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

  const title = doc.seoTitle ?? doc.title;
  const description = doc.seoDescription ?? doc.description;

  return createMetadata({
    description,
    title,
    url: page.url,
  });
};

const DocsPage = async (props: PageProps<"/docs/[[...slug]]">) => {
  const params = await props.params;

  const page = source.getPage(params.slug);

  if (!page) {
    notFound();
  }

  const rawContent = await page.data.getText("raw");

  const isIndexPage = params.slug?.[0] === undefined;

  const isChangelog = params.slug?.[0] === "changelog";
  const changelogDate = isChangelog ? getDateFromFile(page.slugs) : null;
  const description = page.data.seoDescription ?? page.data.description;
  const breadcrumbItems = [
    { name: "Home", url: absoluteUrl("/") },
    { name: "Documentation", url: absoluteUrl("/docs") },
    ...(page.slugs.length === 0
      ? []
      : page.slugs.map((slug, index) => ({
          name:
            index === page.slugs.length - 1
              ? page.data.title
              : humanizeSlug(slug),
          url: absoluteUrl(`/docs/${page.slugs.slice(0, index + 1).join("/")}`),
        }))),
  ];
  const neighbours = isChangelog
    ? { next: null, previous: null }
    : findNeighbour(source.pageTree, page.url);

  const MDX = page.data.body;

  const { links } = page.data;

  return (
    <div className="size-full">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbItems.map((item, index) => ({
            "@type": "ListItem",
            item: item.url,
            name: item.name,
            position: index + 1,
          })),
        }}
      />
      {isChangelog && page.slugs.length > 1 && changelogDate ? (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "TechArticle",
            datePublished: changelogDate.toISOString(),
            description,
            headline: page.data.title,
            mainEntityOfPage: absoluteUrl(page.url),
          }}
        />
      ) : null}
      <div className="flex items-stretch xl:w-full" data-slot="docs">
        <div className="relative flex w-full min-w-0 flex-1 flex-col lg:me-4 lg:mt-8">
          <div className="relative flex w-full flex-col border bg-white text-card-foreground shadow-lg/5 max-lg:border-none lg:rounded-2xl dark:bg-card">
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
                        className="scroll-m-20 font-heading font-semibold text-3xl"
                        id="page-title"
                      >
                        {page.data.title}
                      </h1>
                      {!isIndexPage && (
                        <DocsCopyPage data={rawContent} url={page.url} />
                      )}
                    </div>

                    {page.data.description ? (
                      <p className="text-[1.05rem] text-muted-foreground sm:text-base md:max-w-[80%]">
                        {page.data.description}
                      </p>
                    ) : null}

                    {links ? (
                      <div className="flex items-center gap-2 pt-4">
                        {links.doc ? (
                          <Badge asChild size="lg" variant="outline">
                            <a
                              href={links.doc}
                              rel="noreferrer"
                              target="_blank"
                            >
                              Docs <ArrowUpRightIcon />
                            </a>
                          </Badge>
                        ) : null}

                        {links.api ? (
                          <Badge asChild size="lg" variant="outline">
                            <a
                              href={links.api}
                              rel="noreferrer"
                              target="_blank"
                            >
                              API <ArrowUpRightIcon />
                            </a>
                          </Badge>
                        ) : null}
                      </div>
                    ) : null}
                  </div>

                  <SkipNavContent className="w-full flex-1 *:data-[slot=alert]:first:mt-0">
                    <MDX components={mdxComponents} />
                  </SkipNavContent>
                </div>
              </div>
            </div>
          </div>
          <div className="grid w-full min-w-0 grid-cols-1 gap-4 pt-4 pb-8 max-lg:container max-lg:bg-white sm:grid-cols-2 max-lg:dark:bg-card">
            {neighbours.previous ? (
              <Link
                className={cn(
                  buttonVariants({ clickEffect: false, variant: "outline" }),
                  "h-auto w-full min-w-0",
                  "p-4",
                  "flex flex-col items-start",
                  "bg-white dark:bg-card",
                  "lg:rounded-2xl"
                )}
                href={neighbours.previous.url}
              >
                <p className="text-muted-foreground text-xs uppercase tracking-wide">
                  Previous page
                </p>
                <div className="flex items-center gap-2">
                  <ChevronLeftIcon className="size-4 rtl:rotate-180" />
                  <span className="text-base">{neighbours.previous.name}</span>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {neighbours.next ? (
              <Link
                className={cn(
                  buttonVariants({ clickEffect: false, variant: "outline" }),
                  "h-auto w-full min-w-0",
                  "p-4",
                  "flex flex-col items-end",
                  "bg-white dark:bg-card",
                  "lg:rounded-2xl"
                )}
                href={neighbours.next.url}
              >
                <p className="text-muted-foreground text-xs uppercase tracking-wide">
                  Next page
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-base">{neighbours.next.name}</span>
                  <ChevronRightIcon className="size-4 rtl:rotate-180" />
                </div>
              </Link>
            ) : null}
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
