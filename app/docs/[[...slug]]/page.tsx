import { InlineTOC } from "fumadocs-ui/components/inline-toc";
import { createRelativeLink } from "fumadocs-ui/mdx";
import { ArrowUpRightIcon } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPageImage, source } from "@/lib/source";
import { getMDXComponents } from "@/mdx-components";
import { Badge } from "@/registry/react/components/badge";

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

  const MDX = page.data.body;

  const links = page.data.links;

  return (
    <div className="flex items-stretch text-[1.05rem] sm:text-[15px] xl:w-full">
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="h-(--top-spacing) shrink-0" />
        <div className="mx-auto flex w-full min-w-0 max-w-2xl flex-1 flex-col gap-8 px-4 py-6 text-neutral-800 md:px-0 lg:py-8 dark:text-neutral-300">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <h1 className="scroll-m-20 font-semibold text-4xl tracking-tight sm:text-3xl xl:text-4xl">
                {page.data.title}
              </h1>

              {page.data.description && (
                <p className="text-muted-foreground">{page.data.description}</p>
              )}
            </div>

            {links ? (
              <div className="flex items-center gap-2 pt-4">
                {links?.doc && (
                  <Badge asChild className="rounded-full" variant="secondary">
                    <a href={links.doc} rel="noreferrer" target="_blank">
                      Docs <ArrowUpRightIcon />
                    </a>
                  </Badge>
                )}

                {links?.api && (
                  <Badge asChild className="rounded-full" variant="secondary">
                    <a href={links.api} rel="noreferrer" target="_blank">
                      API <ArrowUpRightIcon />
                    </a>
                  </Badge>
                )}
              </div>
            ) : null}
          </div>
          <div className="prose w-full flex-1 *:data-[part=alert]:first:mt-0">
            <MDX
              components={getMDXComponents({
                // this allows you to link to other pages with relative file paths
                a: createRelativeLink(source, page),
              })}
            />
          </div>
        </div>
      </div>
      <div className="sticky top-[calc(var(--header-height)+1px)] z-30 ml-auto hidden h-[calc(100svh-var(--footer-height)+2rem)] w-72 flex-col gap-4 overflow-hidden overscroll-none pb-8 xl:flex">
        <div className="h-(--top-spacing) shrink-0" />
        {page.data.toc && page.data.toc.length > 0 ? (
          <div className="overflow-y-auto px-8">
            <InlineTOC defaultOpen items={page.data.toc} />
            <div className="h-12" />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default DocsPage;
