"use client";

import { PanelLeftIcon, SearchXIcon } from "lucide-react";
import Link from "next/link";
import { useCallback, useState } from "react";
import { CompositionViewer } from "@/components/registry-compositions/composition-viewer";
import type {
  BlockCategory,
  BlockFileTreeNode,
  PublishedBlock,
} from "@/lib/registry";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/react/components/accordion";
import { Button } from "@/registry/react/components/button";
import {
  Sheet,
  SheetBody,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/registry/react/components/sheet";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/registry/react/components/sidebar";

export interface BrowserBlock {
  block: PublishedBlock;
  tree: BlockFileTreeNode[];
}

interface BlocksBrowserProps {
  activeBlockName?: string;
  blocks: BrowserBlock[];
  categories: readonly BlockCategory[];
  categorySlug?: string;
  isDetailPage?: boolean;
}

interface CatalogNavigationProps {
  activeBlockCategory?: string;
  activeBlockName?: string;
  blocks: BrowserBlock[];
  categories: readonly BlockCategory[];
  getBlockHref: (entry: BrowserBlock) => string;
  onNavigate?: () => void;
}

const CatalogNavigation = ({
  activeBlockCategory,
  activeBlockName,
  blocks,
  categories,
  getBlockHref,
  onNavigate,
}: CatalogNavigationProps) => {
  const visibleCategories = categories.map((category) => ({
    category,
    categoryBlocks: blocks.filter(
      (entry) => entry.block.category === category.slug
    ),
    categoryCount: blocks.filter(
      (entry) => entry.block.category === category.slug
    ).length,
  }));

  return (
    <SidebarContent className="px-4 py-2" scrollFade>
      <div className="h-(--top-spacing) shrink-0" />
      <SidebarGroup className="gap-1">
        <SidebarGroupLabel className="h-7 px-0 text-sidebar-accent-foreground">
          Categories
        </SidebarGroupLabel>
        <SidebarGroupContent>
          <Accordion
            className="w-full"
            defaultValue={
              activeBlockCategory ? [activeBlockCategory] : undefined
            }
          >
            {visibleCategories.map(
              ({ category, categoryBlocks, categoryCount }) => (
                <AccordionItem
                  className="border-0"
                  key={category.slug}
                  value={category.slug}
                >
                  <AccordionTrigger className="w-full justify-start gap-2 rounded-lg px-3 py-2 font-medium text-muted-foreground text-xs hover:bg-muted hover:text-foreground focus-visible:border-transparent [&_[data-slot=accordion-indicator]_svg]:size-3.5 [&_[data-slot=accordion-indicator]_svg]:translate-y-0 [&_[data-slot=accordion-indicator]_svg]:text-muted-foreground">
                    <span className="min-w-0 truncate">{category.label}</span>
                    <span className="ms-auto font-normal text-xs tabular-nums">
                      {categoryCount}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="[&>div]:pb-0">
                    <SidebarMenu className="gap-0.5 pb-2">
                      {categoryBlocks.map((entry) => (
                        <SidebarMenuItem key={entry.block.name}>
                          <SidebarMenuButton
                            asChild
                            className="h-8 px-3 py-2 ps-5 font-normal text-muted-foreground text-sm hover:bg-muted data-[active=true]:bg-muted data-[active=true]:font-medium data-[active=true]:text-foreground"
                            isActive={activeBlockName === entry.block.name}
                          >
                            <Link
                              href={getBlockHref(entry)}
                              onClick={onNavigate}
                            >
                              <span>{entry.block.title}</span>
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </AccordionContent>
                </AccordionItem>
              )
            )}
          </Accordion>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  );
};

export const BlocksBrowser = ({
  blocks,
  categories,
  activeBlockName,
  categorySlug,
  isDetailPage = false,
}: BlocksBrowserProps) => {
  const [navigationOpen, setNavigationOpen] = useState(false);

  const visibleBlocks = blocks.filter(
    (entry) => !categorySlug || entry.block.category === categorySlug
  );
  const activeEntry =
    visibleBlocks.find((entry) => entry.block.name === activeBlockName) ??
    visibleBlocks[0];
  const handleNavigationClose = useCallback(() => setNavigationOpen(false), []);
  const handleNavigationOpenChange = useCallback(
    ({ open }: { open: boolean }) => setNavigationOpen(open),
    []
  );
  const getBlockHref = useCallback(
    (entry: BrowserBlock) =>
      `/blocks/${entry.block.category}/${entry.block.name}`,
    []
  );
  const navigationProps: CatalogNavigationProps = {
    activeBlockCategory: activeEntry?.block.category,
    activeBlockName: activeEntry?.block.name,
    blocks,
    categories,
    getBlockHref,
  };
  const heading = activeEntry?.block.title ?? "Blocks";

  return (
    <main id="blocks-catalog">
      <SidebarProvider className="container min-h-[calc(100svh-var(--header-height))] px-0 [--sidebar-width:17rem] [--top-spacing:0] lg:grid lg:grid-cols-[var(--sidebar-width)_minmax(0,1fr)] lg:border-x lg:[--top-spacing:--spacing(4)]">
        <Sidebar
          className="sticky top-(--header-height) z-30 hidden h-[calc(100svh-var(--header-height))] border-e bg-transparent lg:flex"
          collapsible="none"
        >
          <CatalogNavigation {...navigationProps} />
        </Sidebar>

        <div className="min-w-0">
          <div className="sticky top-(--header-height) z-20 flex items-center gap-3 border-b bg-background/95 px-4 py-2 backdrop-blur lg:hidden">
            <Sheet
              onOpenChange={handleNavigationOpenChange}
              open={navigationOpen}
            >
              <SheetTrigger asChild>
                <Button variant="outline">
                  <PanelLeftIcon aria-hidden="true" className="size-4" />
                  Browse
                </Button>
              </SheetTrigger>
              <SheetContent placement="left">
                <SheetHeader title="Blocks" />
                <SheetBody className="min-h-0 p-0">
                  <div className="flex h-full min-h-0 flex-col">
                    <CatalogNavigation
                      {...navigationProps}
                      onNavigate={handleNavigationClose}
                    />
                  </div>
                </SheetBody>
              </SheetContent>
            </Sheet>
            <p className="min-w-0 truncate font-medium text-sm">{heading}</p>
          </div>

          <div className="flex flex-col gap-4 p-4 sm:p-6">
            {isDetailPage ? null : <h1 className="sr-only">{heading}</h1>}
            {activeEntry ? (
              <CompositionViewer
                compact
                headingLevel={isDetailPage ? "h1" : "h2"}
                item={activeEntry.block}
                kind="blocks"
                showDescription={isDetailPage}
                tree={activeEntry.tree}
              />
            ) : (
              <div className="grid min-h-80 place-items-center rounded-xl border border-dashed px-6 text-center">
                <div className="max-w-sm">
                  <SearchXIcon
                    aria-hidden="true"
                    className="mx-auto size-8 text-muted-foreground"
                  />
                  <h2 className="mt-4 font-semibold text-lg">
                    No blocks in this category
                  </h2>
                  <p className="mt-1 text-muted-foreground text-sm">
                    Choose another category from the sidebar.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </SidebarProvider>
    </main>
  );
};
