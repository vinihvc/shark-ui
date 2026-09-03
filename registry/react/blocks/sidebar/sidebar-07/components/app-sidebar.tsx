"use client";

import {
  BlocksIcon,
  BotIcon,
  ChevronsUpDownIcon,
  CircleUserRoundIcon,
  CommandIcon,
  FolderIcon,
  GalleryVerticalEndIcon,
  LifeBuoyIcon,
  Settings2Icon,
  SquareTerminalIcon,
} from "lucide-react";
import { IconTile } from "@/registry/react/components/icon-tile";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/registry/react/components/sidebar";

const primaryNavigation = [
  { icon: SquareTerminalIcon, label: "Playground" },
  { icon: BotIcon, label: "Models" },
  { icon: BlocksIcon, label: "Components" },
  { icon: Settings2Icon, label: "Settings" },
];

const projects = ["Design system", "Sales workspace", "Travel plans"];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" variant="inset">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" tooltip="Acme workspace">
              <IconTile
                aria-hidden="true"
                className="border-transparent bg-sidebar-primary text-sidebar-primary-foreground shadow-none"
                size="sm"
                variant="primary"
              >
                <GalleryVerticalEndIcon aria-hidden="true" className="size-4" />
              </IconTile>
              <span className="grid flex-1 text-start text-sm leading-tight">
                <span className="truncate font-semibold">Acme Inc.</span>
                <span className="truncate text-xs">Enterprise</span>
              </span>
              <ChevronsUpDownIcon aria-hidden="true" className="ms-auto" />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Platform</SidebarGroupLabel>
          <SidebarMenu>
            {primaryNavigation.map((item, index) => (
              <SidebarMenuItem key={item.label}>
                <SidebarMenuButton
                  asChild
                  isActive={index === 0}
                  tooltip={item.label}
                >
                  <a href="#">
                    <item.icon aria-hidden="true" />
                    <span>{item.label}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarMenu>
            {projects.map((project) => (
              <SidebarMenuItem key={project}>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <FolderIcon aria-hidden="true" />
                    <span>{project}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Support">
              <a href="#">
                <LifeBuoyIcon aria-hidden="true" />
                <span>Support</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" tooltip="vini@example.com">
              <IconTile
                aria-hidden="true"
                className="border-transparent bg-sidebar-accent text-sidebar-foreground shadow-none"
                size="sm"
              >
                <CircleUserRoundIcon aria-hidden="true" className="size-4" />
              </IconTile>
              <span className="grid flex-1 text-start text-sm leading-tight">
                <span className="truncate font-medium">Vini</span>
                <span className="truncate text-xs">vini@example.com</span>
              </span>
              <CommandIcon aria-hidden="true" className="ms-auto" />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
