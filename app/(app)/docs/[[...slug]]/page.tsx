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
    <div className="flex w-full items-stretch">
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="relative flex w-full min-w-0 flex-1 flex-col gap-8 bg-card/64 p-4 shadow-sm/5 sm:p-6 lg:my-6 lg:rounded-2xl lg:border lg:p-8 dark:bg-muted/64">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between gap-2">
                <h1 className="scroll-m-20 font-semibold text-3xl tracking-tight">
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
                <p className="text-muted-foreground">{page.data.description}</p>
              )}
            </div>

            {links && (
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
            )}
          </div>
          <div className="prose w-full flex-1 *:data-[slot=alert]:first:mt-0">
            <MDX
              components={getMDXComponents({
                // this allows you to link to other pages with relative file paths
                a: createRelativeLink(source, page),
              })}
            />
          </div>
        </div>
      </div>

      <div className="sticky top-18 z-30 ml-auto hidden h-full w-72 flex-col gap-4 overflow-hidden overscroll-none pb-8 lg:flex">
        {page.data.toc && page.data.toc.length > 0 && (
          <div className="overflow-y-auto px-8">
            <DocsTableOfContents data={page.data.toc} />
            <div className="h-12" />
          </div>
        )}
      </div>
    </div>
  );
};

export default DocsPage;
