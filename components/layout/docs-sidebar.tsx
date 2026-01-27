"use client";

import Link from "fumadocs-core/link";
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
import { cn } from "@/lib/utils";

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
const EXCLUDED_SECTIONS = ["installation", "(root)"];
const EXCLUDED_PAGES = ["/docs", "/docs/changelog"];

export const DocsSidebar = (
  props: React.ComponentProps<typeof Sidebar> & { tree: typeof source.pageTree }
) => {
  const { tree, className, ...rest } = props;

  const pathname = usePathname();

  return (
    <Sidebar
      className={cn(
        "sticky top-(--header-height) z-30",
        "h-[calc(100svh-var(--header-height))]",
        "hidden lg:flex",
        "bg-transparent",
        className
      )}
      collapsible="none"
      {...rest}
    >
      <SidebarContent className="overflow-x-hidden px-2 pb-12">
        <div className="h-(--top-spacing) shrink-0" />
        <SidebarGroup>
          <SidebarGroupLabel className="font-medium text-muted-foreground">
            Sections
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {TOP_LEVEL_SECTIONS.map(({ name, href, exact }) => {
                return (
                  <SidebarMenuItem key={name}>
                    <SidebarMenuButton
                      asChild
                      className={cn(
                        "relative",
                        "h-[30px] w-fit",
                        "font-medium text-[0.8rem]",
                        "overflow-visible",
                        "data-[active=true]:bg-muted-foreground/25"
                      )}
                      isActive={
                        exact ? pathname === href : pathname.startsWith(href)
                      }
                    >
                      <Link href={href}>{name}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {tree.children.map((item) => {
          if (EXCLUDED_SECTIONS.includes(item.$id ?? "")) {
            return null;
          }

          return (
            <SidebarGroup key={item.$id}>
              <SidebarGroupLabel className="font-medium text-muted-foreground">
                {item.name}
              </SidebarGroupLabel>

              <SidebarGroupContent>
                {item.type === "folder" && (
                  <SidebarMenu className="gap-0.5">
                    {item.children.map((subitem) => {
                      if (
                        subitem.type === "page" &&
                        subitem.url?.includes("/mcp")
                      ) {
                        return null;
                      }

                      return (
                        subitem.type === "page" &&
                        !EXCLUDED_PAGES.includes(subitem.url) && (
                          <SidebarMenuItem key={subitem.url}>
                            <SidebarMenuButton
                              asChild
                              className={cn(
                                "relative",
                                "h-[30px] w-fit",
                                "font-medium text-[0.8rem]",
                                "overflow-visible",
                                "data-[active=true]:bg-muted-foreground/25"
                              )}
                              isActive={subitem.url === pathname}
                            >
                              <Link href={subitem.url}>{subitem.name}</Link>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        )
                      );
                    })}
                  </SidebarMenu>
                )}
              </SidebarGroupContent>
            </SidebarGroup>
          );
        })}
      </SidebarContent>
    </Sidebar>
  );
};
