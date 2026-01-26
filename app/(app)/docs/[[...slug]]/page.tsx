import Link from "fumadocs-core/link";
import { createRelativeLink } from "fumadocs-ui/mdx";
import {
  ArrowUpRightIcon,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ChatGptIcon } from "@/components/icons/chat-gpt";
import { ClaudeIcon } from "@/components/icons/claude";
import { GithubIcon } from "@/components/icons/github";
import { MarkdownIcon } from "@/components/icons/markdown";
import { DocsTableOfContents } from "@/components/layout/docs-toc";
import { getPageImage, source } from "@/lib/fumadocs";
import { getMDXComponents } from "@/mdx-components";
import { Badge } from "@/registry/react/components/badge";
import { Button } from "@/registry/react/components/button";
import { ButtonGroup } from "@/registry/react/components/button-group";
import {
  Clipboard,
  ClipboardIndicator,
  ClipboardTrigger,
} from "@/registry/react/components/clipboard";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
} from "@/registry/react/components/menu";

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
    <div className="size-full">
      <div className="flex items-stretch xl:w-full" data-slot="docs">
        <div className="relative flex w-full min-w-0 flex-1 flex-col lg:mt-8 lg:mr-4 lg:mb-8">
          <div className="relative flex w-full flex-col rounded-2xl border bg-muted/64 text-card-foreground shadow-xs/5 max-lg:border-none">
            <div className="flex-1 p-6 px-4 py-6 sm:px-6 lg:p-8">
              <div className="mx-auto w-full max-w-3xl">
                <div className="flex min-w-0 flex-col gap-8">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between gap-2">
                      <h1 className="scroll-m-20 font-semibold text-3xl xl:text-4xl">
                        {page.data.title}
                      </h1>

                      <ButtonGroup className="hidden sm:flex">
                        <ButtonGroup>
                          <Clipboard>
                            <ClipboardTrigger asChild>
                              <Button
                                className="rounded-r-none"
                                size="sm"
                                variant="outline"
                              >
                                <ClipboardIndicator />
                                Copy Markdown
                              </Button>
                            </ClipboardTrigger>
                          </Clipboard>

                          <Menu
                            positioning={{
                              placement: "bottom-start",
                              strategy: "absolute",
                            }}
                          >
                            <MenuTrigger asChild>
                              <Button size="icon-sm" variant="outline">
                                <ChevronDown />
                              </Button>
                            </MenuTrigger>

                            <MenuContent>
                              <MenuItem asChild value="edit">
                                <Link href="">
                                  <MarkdownIcon />
                                  View as Markdown
                                </Link>
                              </MenuItem>

                              <MenuItem asChild value="github">
                                <Link href="">
                                  <GithubIcon />
                                  Open in GitHub
                                </Link>
                              </MenuItem>

                              <MenuItem asChild value="gpt">
                                <Link href="">
                                  <ChatGptIcon />
                                  Open in ChatGPT
                                </Link>
                              </MenuItem>

                              <MenuItem asChild value="claude">
                                <Link href="">
                                  <ClaudeIcon />
                                  Open in Claude
                                </Link>
                              </MenuItem>
                            </MenuContent>
                          </Menu>
                        </ButtonGroup>

                        <ButtonGroup>
                          <Button asChild size="icon-sm" variant="outline">
                            <Link href="/">
                              <ChevronLeft />
                            </Link>
                          </Button>

                          <Button asChild size="icon-sm" variant="outline">
                            <Link href="">
                              <ChevronRight />
                            </Link>
                          </Button>
                        </ButtonGroup>
                      </ButtonGroup>
                    </div>

                    {page.data.description && (
                      <p className="text-muted-foreground sm:text-lg">
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
          {page.data.toc && page.data.toc.length > 0 && (
            <div className="no-scrollbar flex min-h-0 flex-col gap-2 overflow-auto py-2">
              <div className="h-(--top-spacing) shrink-0" />
              <DocsTableOfContents data={page.data.toc} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DocsPage;
