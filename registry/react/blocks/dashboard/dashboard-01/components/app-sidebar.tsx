"use client";

import {
  BarChart3Icon,
  BellIcon,
  BoxesIcon,
  CreditCardIcon,
  LayoutDashboardIcon,
  LifeBuoyIcon,
  Settings2Icon,
  UsersIcon,
  WavesIcon,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/registry/react/components/avatar";
import { IconTile } from "@/registry/react/components/icon-tile";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/registry/react/components/sidebar";

const workspaceItems = [
  { icon: LayoutDashboardIcon, label: "Overview" },
  { icon: BarChart3Icon, label: "Analytics" },
  { icon: UsersIcon, label: "Customers" },
  { icon: BoxesIcon, label: "Projects" },
];

const manageItems = [
  { icon: CreditCardIcon, label: "Billing" },
  { icon: BellIcon, label: "Notifications" },
  { icon: Settings2Icon, label: "Settings" },
];

export const AppSidebar = () => (
  <Sidebar collapsible="icon">
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton
            className="font-semibold text-foreground"
            size="lg"
          >
            <IconTile
              aria-hidden="true"
              className="border-transparent bg-sidebar-primary text-sidebar-primary-foreground shadow-none"
              size="sm"
              variant="primary"
            >
              <WavesIcon aria-hidden="true" className="size-4" />
            </IconTile>
            <span>Northstar</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel className="text-foreground/80">
          Workspace
        </SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {workspaceItems.map((item, index) => (
              <SidebarMenuItem key={item.label}>
                <SidebarMenuButton
                  className="text-foreground"
                  isActive={index === 0}
                >
                  <item.icon aria-hidden="true" className="size-4" />
                  <span>{item.label}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <SidebarGroup>
        <SidebarGroupLabel className="text-foreground/80">
          Manage
        </SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {manageItems.map((item) => (
              <SidebarMenuItem key={item.label}>
                <SidebarMenuButton className="text-foreground">
                  <item.icon aria-hidden="true" className="size-4" />
                  <span>{item.label}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton className="text-foreground" size="lg">
            <Avatar className="size-8 rounded-lg">
              <AvatarFallback className="rounded-lg text-foreground">
                MC
              </AvatarFallback>
            </Avatar>
            <span className="grid min-w-0 flex-1 text-start text-sm leading-tight">
              <span className="truncate font-medium">Maya Chen</span>
              <span className="truncate text-foreground/70 text-xs">
                maya@northstar.dev
              </span>
            </span>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton className="text-foreground">
            <LifeBuoyIcon aria-hidden="true" className="size-4" />
            <span>Help and support</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
    <SidebarRail />
  </Sidebar>
);
