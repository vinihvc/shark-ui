"use client";

import {
  BarChart2,
  FolderKanban,
  HelpCircle,
  Home,
  Settings,
} from "lucide-react";
import * as React from "react";
import { Button } from "@/registry/react/components/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/registry/react/components/sidebar";

export default function SidebarExampleControlled() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <SidebarProvider className="h-full" onOpenChange={setOpen} open={open}>
        <Sidebar className="absolute" collapsible="icon">
          <SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton size="lg" tooltip="Home">
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                    <Home className="size-4" />
                  </div>
                  <span>Acme Inc</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild tooltip="Home">
                      <a href="#">
                        <Home />
                        <span>Home</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild tooltip="Dashboard">
                      <a href="#">
                        <BarChart2 />
                        <span>Dashboard</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild tooltip="Projects">
                      <a href="#">
                        <FolderKanban />
                        <span>Projects</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild tooltip="Settings">
                      <a href="#">
                        <Settings />
                        <span>Settings</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild tooltip="Help">
                      <a href="#">
                        <HelpCircle />
                        <span>Help</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton size="lg" tooltip="Settings">
                  <Settings />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset>
          <header className="flex h-12 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <span className="font-medium">Controlled Sidebar</span>
          </header>
          <main className="flex flex-1 flex-col gap-4 p-4">
            <div className="flex flex-wrap gap-2">
              <Button onClick={() => setOpen(true)} size="sm" variant="outline">
                Open sidebar
              </Button>
              <Button
                onClick={() => setOpen(false)}
                size="sm"
                variant="outline"
              >
                Close sidebar
              </Button>
            </div>
            <div className="rounded-lg border bg-muted/50 p-4">
              <p className="text-muted-foreground text-sm">
                Use the <code>open</code> and <code>onOpenChange</code> props on
                SidebarProvider to control the sidebar state programmatically.
              </p>
            </div>
          </main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
