"use client";

import { usePathname } from "next/navigation";
import type React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/registry/react/components/badge";
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

export interface BlocksSidebarProps
  extends React.ComponentProps<typeof Sidebar> {
  /**
   * The blocks to display.
   */
  blocks: Record<string, number>;
}

export const BlocksSidebar = (props: BlocksSidebarProps) => {
  const { blocks, className, ...rest } = props;

  const pathname = usePathname();

  return (
    <Sidebar
      className={cn(
        "sticky top-(--header-height) h-[calc(100svh-var(--header-height))] bg-transparent",
        className
      )}
      collapsible="none"
      {...rest}
    >
      <SidebarContent className="px-4 py-2">
        <div className="h-(--top-spacing) shrink-0" />
        <SidebarGroup className="gap-1">
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {Object.entries(blocks).map(([category, count]) => (
                <SidebarMenuItem key={category}>
                  <SidebarMenuButton
                    asChild
                    className="ps-3.5 text-muted-foreground hover:bg-muted [.active]:bg-muted [.active]:text-foreground"
                    isActive={pathname === `/blocks/${category}`}
                  >
                    <NavLink href={`/blocks/${category}`}>
                      {category}
                      <div className="ms-auto">
                        <Badge size="sm">{count}</Badge>
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
