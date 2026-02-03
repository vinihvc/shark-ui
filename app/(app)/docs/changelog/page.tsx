import Link from "next/link";
import { DocsTableOfContents } from "@/components/layout/docs-toc";
import { SITE_CONFIG } from "@/config/site";
import { type ChangelogPageData, getChangelogPages } from "@/lib/changelog";
import { mdxComponents } from "@/mdx-components";
import { ScrollArea } from "@/registry/react/components/scroll-area";

export const revalidate = false;
export const dynamic = "force-static";

export function generateMetadata() {
  return {
    title: "Changelog",
    description: "Latest updates and announcements.",
    openGraph: {
      title: "Changelog",
      description: "Latest updates and announcements.",
      type: "article",
      url: `${SITE_CONFIG.url}/docs/changelog`,
      images: [
        {
          url: `/og?title=${encodeURIComponent(
            "Changelog"
          )}&description=${encodeURIComponent(
            "Latest updates and announcements."
          )}`,
        },
      ],
    },
  };
}

const ChangelogPage = () => {
  const pages = getChangelogPages();
  const latestPages = pages.slice(0, 5);
  const olderPages = pages.slice(5);

  return (
    <div
      className="flex scroll-mt-24 items-stretch pb-8 text-[1.05rem] sm:text-[15px] xl:w-full"
      data-slot="docs"
    >
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="h-(--top-spacing) shrink-0" />
        <div className="mx-auto flex w-full min-w-0 max-w-160 flex-1 flex-col gap-6 px-4 py-6 text-neutral-800 md:px-0 lg:py-8 dark:text-neutral-300">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <h1 className="scroll-m-24 font-semibold text-4xl tracking-tight sm:text-3xl">
                Changelog
              </h1>
            </div>
            <p className="text-[1.05rem] text-muted-foreground sm:text-balance sm:text-base md:max-w-[80%]">
              Latest updates and announcements.
            </p>
          </div>
          <div className="w-full flex-1 pb-16 sm:pb-0">
            {latestPages.map((page) => {
              const data = page.data as ChangelogPageData;
              const MDX = page.data.body;

              return (
                <article className="mb-12 border-b pb-12" key={page.url}>
                  <h2 className="font-semibold text-xl tracking-tight">
                    {data.title}
                  </h2>
                  <div className="prose-changelog mt-6 *:first:mt-0">
                    <MDX components={mdxComponents()} />
                  </div>
                </article>
              );
            })}
            {olderPages.length > 0 && (
              <div className="mb-24 scroll-mt-24">
                <h2 className="mb-6 font-semibold text-xl tracking-tight">
                  More Updates
                </h2>
                <ul className="flex flex-col gap-4">
                  {olderPages.map((page) => {
                    const data = page.data as ChangelogPageData;
                    return (
                      <li className="flex items-center gap-3" key={page.url}>
                        <Link
                          className="font-medium hover:underline"
                          href={page.url}
                        >
                          {data.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="sticky top-(--header-height) z-30 ms-auto hidden h-[calc(100svh-var(--header-height))] w-72 flex-col overflow-hidden overscroll-none xl:flex">
        <ScrollArea className="**:data-[slot=scroll-area-scrollbar]:hidden">
          <div className="flex min-h-0 flex-col gap-2 overflow-auto py-2">
            <div className="h-(--top-spacing) shrink-0" />
            {latestPages.length > 0 && (
              <DocsTableOfContents
                data={latestPages.map((page) => ({
                  title: page.data.title,
                  url: page.url,
                  depth: 1,
                }))}
              />
            )}
            {olderPages.length > 0 && (
              <DocsTableOfContents
                data={olderPages.map((page) => ({
                  title: page.data.title,
                  url: page.url,
                  depth: 1,
                }))}
              />
            )}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default ChangelogPage;
