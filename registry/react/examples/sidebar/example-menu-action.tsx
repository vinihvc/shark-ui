"use client";

import { MoreHorizontal } from "lucide-react";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
} from "@/registry/react/components/menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/registry/react/components/sidebar";

const projects = [
  { name: "Design Engineering", url: "#" },
  { name: "Sales & Marketing", url: "#" },
  { name: "Travel", url: "#" },
  { name: "Documentation", url: "#" },
  { name: "Support", url: "#" },
];

function Example() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <SidebarProvider className="h-full">
        <Sidebar className="absolute" collapsible="offcanvas">
          <SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton size="lg">
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                    P
                  </div>
                  <span>Projects</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Projects</SidebarGroupLabel>
              <SidebarMenu>
                {projects.map((project) => (
                  <SidebarMenuItem key={project.name}>
                    <SidebarMenuButton asChild>
                      <a href={project.url}>
                        <span>{project.name}</span>
                      </a>
                    </SidebarMenuButton>
                    <Menu
                      positioning={{
                        placement: "right-start",
                        offset: { mainAxis: 4 },
                      }}
                    >
                      <MenuTrigger asChild>
                        <SidebarMenuAction aria-label="More" showOnHover>
                          <MoreHorizontal />
                        </SidebarMenuAction>
                      </MenuTrigger>
                      <MenuContent>
                        <MenuItem value="view">View project</MenuItem>
                        <MenuItem value="share">Share project</MenuItem>
                        <MenuItem value="delete">Delete project</MenuItem>
                      </MenuContent>
                    </Menu>
                  </SidebarMenuItem>
                ))}
                <SidebarMenuItem>
                  <SidebarMenuButton className="text-sidebar-foreground/70">
                    <MoreHorizontal className="text-sidebar-foreground/70" />
                    <span>More</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter />
          <SidebarRail />
        </Sidebar>
        <SidebarInset>
          <header className="flex h-12 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <span className="font-medium">Menu Action</span>
          </header>
          <main className="flex flex-1 flex-col gap-4 p-4">
            <div className="rounded-lg border bg-muted/50 p-4">
              <p className="text-muted-foreground text-sm">
                Use SidebarMenuAction with <code>showOnHover</code> to display
                actions (e.g. context menu) that appear when hovering over a
                menu item.
              </p>
            </div>
          </main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}

export default Example;
