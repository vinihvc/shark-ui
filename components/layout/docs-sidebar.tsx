"use client";

import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import type { source } from "@/lib/fumadocs";
import { NavLink } from "../nav-link";

const TOP_LEVEL_SECTIONS = [
  { name: "Introduction", href: "/docs", exact: true },
  { name: "Installation", href: "/docs/installation", exact: true },
  {
    name: "Components",
    href: "/docs/components",
    exact: true,
  },
  {
    name: "asChild prop",
    href: "/docs/as-child",
    exact: true,
  },
  {
    name: "Changelog",
    href: "/docs/changelog",
  },
];

export const DocsSidebar = (
  props: React.ComponentProps<typeof Sidebar> & { tree: typeof source.pageTree }
) => {
  const { tree, className, ...rest } = props;

  const pathname = usePathname();

  return (
    <Sidebar
      className="sticky top-(--header-height) z-30 hidden h-[calc(100svh-var(--header-height))] bg-transparent lg:flex"
      collapsible="none"
      {...rest}
    >
      <SidebarContent className="px-4 py-2">
        <div className="h-(--top-spacing) shrink-0" />
        {tree.children.map((item) => (
          <SidebarGroup className="gap-1" key={item.$id}>
            <SidebarGroupLabel className="h-7 px-0 text-sidebar-accent-foreground">
              {item.name}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              {item.type === "folder" && (
                <SidebarMenu className="gap-0.5">
                  {item.children.map((item) => {
                    return (
                      item.type === "page" && (
                        <SidebarMenuItem key={item.url}>
                          <SidebarMenuButton
                            asChild
                            className="ps-3.5 text-muted-foreground hover:bg-transparent [.active]:bg-muted"
                            isActive={item.url === pathname}
                          >
                            <NavLink href={item.url}>{item.name}</NavLink>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      )
                    );
                  })}
                </SidebarMenu>
              )}
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
};
