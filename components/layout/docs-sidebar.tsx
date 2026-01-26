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
const EXCLUDED_SECTIONS = ["installation", "dark-mode"];
const EXCLUDED_PAGES = ["/docs", "/docs/changelog"];

export function DocsSidebar({
  tree,
  ...props
}: React.ComponentProps<typeof Sidebar> & { tree: typeof source.pageTree }) {
  const pathname = usePathname();

  return (
    <Sidebar
      className="sticky top-(--header-height) z-30 hidden h-[calc(100svh-var(--header-height))] bg-transparent lg:flex"
      collapsible="none"
      {...props}
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
                if (href.includes("/mcp")) {
                  return null;
                }

                return (
                  <SidebarMenuItem key={name}>
                    <SidebarMenuButton
                      asChild
                      className="relative h-[30px] 3xl:fixed:w-full w-fit 3xl:fixed:max-w-48 overflow-visible border border-transparent font-medium text-[0.8rem] after:absolute after:inset-x-0 after:-inset-y-1 after:z-0 after:rounded-md data-[active=true]:border-accent data-[active=true]:bg-accent"
                      isActive={
                        exact ? pathname === href : pathname.startsWith(href)
                      }
                    >
                      <Link href={href}>
                        <span className="absolute inset-0 flex w-(--sidebar-width) bg-transparent" />
                        {name}
                      </Link>
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
                              className="relative h-[30px] 3xl:fixed:w-full w-fit 3xl:fixed:max-w-48 overflow-visible border border-transparent font-medium text-[0.8rem] after:absolute after:inset-x-0 after:-inset-y-1 after:z-0 after:rounded-md data-[active=true]:border-accent data-[active=true]:bg-accent"
                              isActive={subitem.url === pathname}
                            >
                              <Link href={subitem.url}>
                                <span className="absolute inset-0 flex w-(--sidebar-width) bg-transparent" />
                                {subitem.name}
                              </Link>
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
}
