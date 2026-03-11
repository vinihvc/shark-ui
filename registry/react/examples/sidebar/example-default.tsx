"use client";

import { ChevronRight, Home, Settings, SquareTerminal } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/react/components/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/registry/react/components/sidebar";

const navItems = [
  {
    title: "Playground",
    icon: SquareTerminal,
    items: [
      { title: "History", url: "#" },
      { title: "Starred", url: "#" },
      { title: "Templates", url: "#" },
    ],
  },
  {
    title: "Settings",
    icon: Settings,
    items: [
      { title: "General", url: "#" },
      { title: "Team", url: "#" },
      { title: "Security", url: "#" },
    ],
  },
];

function NavMain() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {navItems.map((item) => (
          <Collapsible
            asChild
            className="group/collapsible"
            defaultOpen={item.title === "Playground"}
            key={item.title}
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title}>
                  <item.icon />
                  <span>{item.title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton href={subItem.url}>
                        <span>{subItem.title}</span>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}

export default function SidebarExampleDefault() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <SidebarProvider className="h-full">
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
            <NavMain />
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
          <SidebarRail />
        </Sidebar>
        <SidebarInset>
          <header className="flex h-12 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <span className="font-medium">Dashboard</span>
          </header>
          <main className="flex flex-1 flex-col gap-4 p-4">
            <div className="rounded-lg border bg-muted/50 p-4">
              <p className="text-muted-foreground text-sm">
                Main content area. Use{" "}
                <kbd className="rounded border px-1.5 py-0.5 font-mono text-xs">
                  ⌘B
                </kbd>{" "}
                to toggle the sidebar.
              </p>
            </div>
          </main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
