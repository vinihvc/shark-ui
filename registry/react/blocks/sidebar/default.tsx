"use client";

import {
  BadgeCheck,
  Bell,
  BookOpen,
  Bot,
  ChevronRight,
  ChevronsUpDown,
  CreditCard,
  Folder,
  Forward,
  Frame,
  GalleryVerticalEnd,
  LogOut,
  Map as MapIcon,
  MoreHorizontal,
  PieChart,
  Plus,
  Settings2,
  Sparkles,
  SquareTerminal,
  Trash2,
} from "lucide-react";
import React from "react";
import { SharkIcon } from "@/components/icons/shark";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/react/components/avatar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/react/components/collapsible";
import {
  Menu,
  MenuContent,
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuSeparator,
  MenuShortcut,
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
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
  useSidebar,
} from "@/registry/react/components/sidebar";

const data = {
  navMain: [
    {
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
      title: "Playground",
      url: "#",
    },
    {
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
      title: "Models",
      url: "#",
    },
    {
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
      title: "Documentation",
      url: "#",
    },
    {
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
      title: "Settings",
      url: "#",
    },
  ],
  projects: [
    {
      icon: Frame,
      name: "Design Engineering",
      url: "#",
    },
    {
      icon: PieChart,
      name: "Sales & Marketing",
      url: "#",
    },
    {
      icon: MapIcon,
      name: "Travel",
      url: "#",
    },
  ],
  teams: [
    {
      logo: GalleryVerticalEnd,
      name: "Acme Inc",
      plan: "Enterprise",
    },
    {
      logo: SharkIcon,
      name: "Shark Corp.",
      plan: "Startup",
    },
  ],
  user: {
    avatar: "https://github.com/vinihvc.png",
    email: "m@example.com",
    name: "vini",
  },
};

interface TeamSwitcherProps {
  teams: {
    name: string;
    logo: React.ElementType;
    plan: string;
  }[];
}

const TeamSwitcher = ({ teams }: TeamSwitcherProps) => {
  const [activeTeam, setActiveTeam] = React.useState(teams[0]);

  if (!activeTeam) {
    return null;
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <Menu
          positioning={{
            placement: "right-start",
          }}
        >
          <MenuTrigger asChild>
            <SidebarMenuButton
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              size="lg"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <activeTeam.logo className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{activeTeam.name}</span>
                <span className="truncate text-xs">{activeTeam.plan}</span>
              </div>
              <ChevronsUpDown className="ms-auto size-4" />
            </SidebarMenuButton>
          </MenuTrigger>
          <MenuContent className="w-(--reference-width) min-w-56 rounded-lg">
            <MenuGroup>
              <MenuGroupLabel className="text-muted-foreground text-xs">
                Teams
              </MenuGroupLabel>
              {teams.map((team, index) => (
                <MenuItem
                  className="gap-2 p-2"
                  key={team.name}
                  onClick={() => setActiveTeam(team)}
                  value={team.name}
                >
                  <div className="flex size-6 items-center justify-center rounded-md border border-input">
                    <team.logo className="size-3.5 shrink-0" />
                  </div>
                  {team.name}
                  <MenuShortcut>⌘{index + 1}</MenuShortcut>
                </MenuItem>
              ))}
            </MenuGroup>
            <MenuSeparator />
            <MenuGroup>
              <MenuItem className="gap-2 p-2" value="add-team">
                <div className="flex size-6 items-center justify-center rounded-md border border-input bg-transparent">
                  <Plus className="size-4" />
                </div>
                <div className="font-medium text-muted-foreground">
                  Add team
                </div>
              </MenuItem>
            </MenuGroup>
          </MenuContent>
        </Menu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

interface NavMainProps {
  items: {
    title: string;
    url: string;
    icon?: React.ElementType;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}

const NavMain = ({ items }: NavMainProps) => (
  <SidebarGroup>
    <SidebarGroupLabel>Platform</SidebarGroupLabel>
    <SidebarMenu>
      {items.map((item) => (
        <Collapsible
          asChild
          className="group/collapsible"
          defaultOpen={item.isActive}
          key={item.title}
        >
          <SidebarMenuItem>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton tooltip={item.title}>
                {item.icon && <item.icon />}
                <span>{item.title}</span>
                <ChevronRight className="ms-auto size-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarMenuSub>
                {item.items?.map((subItem) => (
                  <SidebarMenuSubItem key={subItem.title}>
                    <SidebarMenuSubButton asChild>
                      <a href={subItem.url}>
                        <span>{subItem.title}</span>
                      </a>
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

interface NavProjectsProps {
  projects: {
    name: string;
    url: string;
    icon: React.ElementType;
  }[];
}

const NavProjects = ({ projects }: NavProjectsProps) => (
  <SidebarGroup className="group-data-[collapsible=icon]:hidden">
    <SidebarGroupLabel>Projects</SidebarGroupLabel>
    <SidebarMenu>
      {projects.map((item) => (
        <SidebarMenuItem key={item.name}>
          <SidebarMenuButton asChild>
            <a href={item.url}>
              <item.icon />
              <span>{item.name}</span>
            </a>
          </SidebarMenuButton>
          <Menu
            positioning={{
              placement: "right-start",
            }}
          >
            <MenuTrigger asChild>
              <SidebarMenuAction showOnHover>
                <MoreHorizontal />
                <span className="sr-only">More</span>
              </SidebarMenuAction>
            </MenuTrigger>
            <MenuContent className="w-48 rounded-lg">
              <MenuGroup>
                <MenuItem value={`${item.name}-view`}>
                  <Folder />
                  View Project
                </MenuItem>
                <MenuItem value={`${item.name}-share`}>
                  <Forward />
                  Share Project
                </MenuItem>
              </MenuGroup>
              <MenuSeparator />
              <MenuGroup>
                <MenuItem value={`${item.name}-delete`} variant="destructive">
                  <Trash2 />
                  Delete Project
                </MenuItem>
              </MenuGroup>
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
);

interface NavUserProps {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
}

const NavUser = ({ user }: NavUserProps) => {
  const { isMobile } = useSidebar();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <Menu
          positioning={{
            placement: isMobile ? "bottom-end" : "right-end",
          }}
        >
          <MenuTrigger asChild>
            <SidebarMenuButton
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              size="lg"
            >
              <Avatar className="size-8 rounded-lg">
                <AvatarImage alt={user.name} src={user.avatar} />
                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{user.name}</span>
                <span className="truncate text-xs">{user.email}</span>
              </div>
              <ChevronsUpDown className="ms-auto size-4" />
            </SidebarMenuButton>
          </MenuTrigger>
          <MenuContent className="w-full rounded-lg sm:w-64">
            <MenuGroup>
              <MenuGroupLabel className="p-0 font-normal">
                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                  <Avatar className="size-8 rounded-lg">
                    <AvatarImage alt={user.name} src={user.avatar} />
                    <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">{user.name}</span>
                    <span className="truncate text-xs">{user.email}</span>
                  </div>
                </div>
              </MenuGroupLabel>
            </MenuGroup>
            <MenuSeparator />
            <MenuGroup>
              <MenuItem value="upgrade">
                <Sparkles />
                Upgrade to Pro
              </MenuItem>
            </MenuGroup>
            <MenuSeparator />
            <MenuGroup>
              <MenuItem value="account">
                <BadgeCheck />
                Account
              </MenuItem>
              <MenuItem value="billing">
                <CreditCard />
                Billing
              </MenuItem>
              <MenuItem value="notifications">
                <Bell />
                Notifications
              </MenuItem>
            </MenuGroup>
            <MenuSeparator />
            <MenuGroup>
              <MenuItem value="logout">
                <LogOut />
                Log out
              </MenuItem>
            </MenuGroup>
          </MenuContent>
        </Menu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

const AppSidebar = () => (
  <SidebarProvider>
    <Sidebar collapsible="icon" defaultOpen>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ms-1" />
        </div>
      </header>
    </SidebarInset>
  </SidebarProvider>
);

export default AppSidebar;
