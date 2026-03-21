"use client";

import { usePathname } from "next/navigation";
import React from "react";
import type { Block } from "@/app/(app)/blocks/_data/blocks-data";
import { Badge } from "@/registry/react/components/badge";
import { Input } from "@/registry/react/components/input";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/registry/react/components/sidebar";
import { NavLink } from "../nav-link";

export interface BlocksSidebarProps {
  /**
   * The blocks to display.
   */
  blocks: Block[];
}

export const BlocksSidebar = (props: BlocksSidebarProps) => {
  const { blocks } = props;

  const pathname = usePathname();

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

  return (
    <Sidebar
      className="sticky top-(--header-height) h-[calc(100svh-var(--header-height))] bg-transparent"
      collapsible="none"
      variant="inset"
    >
      <SidebarContent className="px-4 py-2">
        <SidebarGroup className="gap-1">
          <SidebarGroupContent>
            <div className="px-1 pb-2">
              <Input placeholder="Filter categories..." />
            </div>

            <SidebarMenu className="gap-1">
              {categories.map((category) => (
                <SidebarMenuItem key={category.category}>
                  <SidebarMenuButton
                    asChild
                    className="ps-3.5 text-muted-foreground hover:bg-muted [.active]:bg-muted [.active]:text-foreground"
                    isActive={pathname === `/blocks/${category.category}`}
                  >
                    <NavLink href={`/blocks/${category.category}`}>
                      {category.categoryLabel}
                      <div className="ms-auto">
                        <Badge size="sm">{category.count}</Badge>
                      </div>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
