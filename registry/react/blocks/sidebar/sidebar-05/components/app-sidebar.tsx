"use client";

import {
  ChartNoAxesCombinedIcon,
  ChevronRightIcon,
  CircleGaugeIcon,
  FileTextIcon,
  FolderKanbanIcon,
  SettingsIcon,
  UsersIcon,
} from "lucide-react";
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
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/registry/react/components/sidebar";

const navigation = [
  {
    icon: CircleGaugeIcon,
    items: ["Overview", "Activity", "Reports"],
    label: "Dashboard",
  },
  {
    icon: FolderKanbanIcon,
    items: ["Active", "Archived", "Templates"],
    label: "Projects",
  },
  {
    icon: UsersIcon,
    items: ["Members", "Teams", "Invitations"],
    label: "People",
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="font-semibold" size="lg">
              <ChartNoAxesCombinedIcon aria-hidden="true" />
              <span>Northstar</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Workspace</SidebarGroupLabel>
          <SidebarMenu>
            {navigation.map((item, index) => (
              <Collapsible
                asChild
                className="group/collapsible"
                defaultOpen={index === 0}
                key={item.label}
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={item.label}>
                      <item.icon aria-hidden="true" />
                      <span>{item.label}</span>
                      <ChevronRightIcon
                        aria-hidden="true"
                        className="ms-auto transition-transform group-data-[state=open]/collapsible:rotate-90 motion-reduce:transition-none"
                      />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items.map((subItem) => (
                        <SidebarMenuSubItem key={subItem}>
                          <SidebarMenuSubButton asChild>
                            <a href="#">{subItem}</a>
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
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          {[
            { icon: FileTextIcon, label: "Documentation" },
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
