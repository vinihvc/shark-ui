"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import type { Block } from "@/app/(app)/blocks/_data/blocks-data";
import { Input } from "@/registry/react/components/input";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/registry/react/components/sidebar";

export interface BlocksSidebarProps {
  blocks: Block[];
}

export const BlocksSidebar = (props: BlocksSidebarProps) => {
  const { blocks } = props;

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const selectedCategoryParam = searchParams.get("category") ?? "all";

  const categories = React.useMemo(() => {
    const map = new Map<
      string,
      { category: string; categoryLabel: string; count: number }
    >();

    for (const block of blocks) {
      const existing = map.get(block.category);

      if (!existing) {
        map.set(block.category, {
          category: block.category,
          categoryLabel: block.categoryLabel,
          count: 1,
        });
        continue;
      }

      existing.count += 1;
    }

    return Array.from(map.values());
  }, [blocks]);

  const validCategories = React.useMemo(() => {
    return new Set(categories.map((category) => category.category));
  }, [categories]);

  const selectedCategory = React.useMemo(() => {
    if (selectedCategoryParam === "all") {
      return "all";
    }

    if (!validCategories.has(selectedCategoryParam)) {
      return "all";
    }

    return selectedCategoryParam;
  }, [selectedCategoryParam, validCategories]);

  const [categoryQuery, setCategoryQuery] = React.useState("");

  const filteredCategories = React.useMemo(() => {
    const query = categoryQuery.trim().toLowerCase();

    if (!query) {
      return categories;
    }

    return categories.filter(({ categoryLabel }) =>
      categoryLabel.toLowerCase().includes(query)
    );
  }, [categoryQuery, categories]);

  const handleSelectCategory = (next: string) => {
    const params = new URLSearchParams(searchParams);

    if (next === "all") {
      params.delete("category");
    } else {
      params.set("category", next);
    }

    const qs = params.toString();
    const url = qs ? `${pathname}?${qs}` : pathname;
    router.replace(url);
  };

  return (
    <Sidebar
      className="sticky top-(--header-height) h-[calc(100svh-var(--header-height))] bg-transparent"
      collapsible="none"
      variant="inset"
    >
      <SidebarContent className="px-4 py-2" scrollFade>
        <SidebarGroup className="gap-1">
          <SidebarGroupLabel className="h-7 px-0 text-sidebar-accent-foreground">
            Categories
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <div className="px-1 pb-2">
              <Input
                onChange={(e) => setCategoryQuery(e.target.value)}
                placeholder="Filter categories..."
                value={categoryQuery}
              />
            </div>

            <SidebarMenu className="gap-1">
              <SidebarMenuItem>
                <SidebarMenuButton
                  className="ps-3.5 text-muted-foreground hover:bg-muted [.active]:bg-muted [.active]:text-foreground"
                  isActive={selectedCategory === "all"}
                  onClick={() => handleSelectCategory("all")}
                >
                  <span>All Patterns</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {filteredCategories.map((category) => (
                <SidebarMenuItem key={category.category}>
                  <SidebarMenuButton
                    className="ps-3.5 text-muted-foreground hover:bg-muted [&>span:last-child]:text-muted-foreground/80 [.active]:bg-muted [.active]:text-foreground"
                    isActive={selectedCategory === category.category}
                    onClick={() => handleSelectCategory(category.category)}
                  >
                    <span>{category.categoryLabel}</span>
                    <span className="text-xs">{category.count}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}

              {filteredCategories.length === 0 && (
                <p className="px-3 py-3 text-muted-foreground text-sm">
                  No categories match your filter.
                </p>
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
