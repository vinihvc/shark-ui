"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { source } from "@/lib/source";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";

const TOP_LEVEL_SECTIONS = [
  { name: "Get Started", href: "/docs" },
  {
    name: "Components",
    href: "/docs/components",
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
      className="sticky top-[calc(var(--header-height)+1px)] z-30 hidden h-[calc(100svh-var(--footer-height)+2rem)] bg-transparent lg:flex"
      collapsible="none"
      {...props}
    >
      <SidebarContent className="no-scrollbar overflow-x-hidden px-2 pb-12">
        <div className="h-(--top-spacing) shrink-0" />
        <SidebarGroup>
          <SidebarGroupLabel className="font-medium text-muted-foreground">
            Sections
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {TOP_LEVEL_SECTIONS.map(({ name, href }) => {
                if (href.includes("/mcp")) {
                  return null;
                }

                return (
                  <SidebarMenuItem key={name}>
                    <SidebarMenuButton
                      asChild
                      className="after:-inset-y-1 relative h-[30px] 3xl:fixed:w-full w-fit 3xl:fixed:max-w-48 overflow-visible border border-transparent font-medium text-[0.8rem] after:absolute after:inset-x-0 after:z-0 after:rounded-md data-[active=true]:border-accent data-[active=true]:bg-accent"
                      isActive={
                        href === "/docs"
                          ? pathname === href
                          : pathname.startsWith(href)
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
                    {item.children.map((item) => {
                      if (item.type === "page" && item.url?.includes("/mcp")) {
                        return null;
                      }

                      return (
                        item.type === "page" &&
                        !EXCLUDED_PAGES.includes(item.url) && (
                          <SidebarMenuItem key={item.url}>
                            <SidebarMenuButton
                              asChild
                              className="after:-inset-y-1 relative h-[30px] 3xl:fixed:w-full w-fit 3xl:fixed:max-w-48 overflow-visible border border-transparent font-medium text-[0.8rem] after:absolute after:inset-x-0 after:z-0 after:rounded-md data-[active=true]:border-accent data-[active=true]:bg-accent"
                              isActive={item.url === pathname}
                            >
                              <Link href={item.url}>
                                <span className="absolute inset-0 flex w-(--sidebar-width) bg-transparent" />
                                {item.name}
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
