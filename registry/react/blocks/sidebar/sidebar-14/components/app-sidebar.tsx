"use client";

import {
  ArchiveIcon,
  CircleHelpIcon,
  InboxIcon,
  MessageSquareTextIcon,
  SendIcon,
  SettingsIcon,
  StarIcon,
  Trash2Icon,
} from "lucide-react";
import { IconTile } from "@/registry/react/components/icon-tile";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/registry/react/components/sidebar";

const mailboxes = [
  { count: 24, icon: InboxIcon, label: "Inbox" },
  { count: 8, icon: StarIcon, label: "Starred" },
  { icon: SendIcon, label: "Sent" },
  { icon: ArchiveIcon, label: "Archive" },
  { icon: Trash2Icon, label: "Trash" },
];

export function AppSidebar() {
  return (
    <Sidebar placement="right">
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 py-1.5">
          <IconTile
            aria-hidden="true"
            className="border-transparent bg-sidebar-primary text-sidebar-primary-foreground shadow-none"
            size="sm"
            variant="primary"
          >
            <MessageSquareTextIcon aria-hidden="true" className="size-4" />
          </IconTile>
          <div className="min-w-0">
            <p className="truncate font-semibold text-sm">Messages</p>
            <p className="truncate text-sidebar-foreground/65 text-xs">
              team@acme.co
            </p>
          </div>
        </div>
        <SidebarInput
          aria-label="Search messages"
          placeholder="Search messages"
          type="search"
        />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Mailboxes</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mailboxes.map((item, index) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton asChild isActive={index === 0}>
                    <a href="#">
                      <item.icon aria-hidden="true" />
                      <span>{item.label}</span>
                    </a>
                  </SidebarMenuButton>
                  {item.count ? (
                    <SidebarMenuBadge>{item.count}</SidebarMenuBadge>
                  ) : null}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          {[
            { icon: CircleHelpIcon, label: "Help" },
            { icon: SettingsIcon, label: "Settings" },
          ].map((item) => (
            <SidebarMenuItem key={item.label}>
              <SidebarMenuButton asChild>
                <a href="#">
                  <item.icon aria-hidden="true" />
                  <span>{item.label}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
