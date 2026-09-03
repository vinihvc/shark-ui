"use client";

import {
  BookOpenIcon,
  BotIcon,
  ChevronRightIcon,
  EllipsisIcon,
  FolderIcon,
  PlusIcon,
  SearchIcon,
} from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback } from "@/registry/react/components/avatar";
import { Badge } from "@/registry/react/components/badge";
import { IconTile } from "@/registry/react/components/icon-tile";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/react/components/input-group";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/registry/react/components/sidebar";

export interface ConversationSummary {
  group: string;
  id: string;
  title: string;
}

export type ChatView = "chat" | "projects";

const PINNED_PROJECTS = [
  { id: "research-analysis", title: "Research & Analysis" },
  { id: "web-search", title: "Web Search" },
  { id: "knowledge-base", title: "Knowledge Base" },
] as const;

interface ChatSidebarProps {
  activeConversationId: string | null;
  activeView: ChatView;
  conversations: readonly ConversationSummary[];
  onConversationSelect: (id: string) => void;
  onNewChat: () => void;
  onProjectsSelect: () => void;
  onViewChange: (view: ChatView) => void;
}

export const ChatSidebar = ({
  activeConversationId,
  activeView,
  conversations,
  onConversationSelect,
  onNewChat,
  onProjectsSelect,
  onViewChange,
}: ChatSidebarProps) => {
  const [query, setQuery] = React.useState("");

  const filtered = React.useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) {
      return conversations;
    }
    return conversations.filter((conversation) =>
      conversation.title.toLowerCase().includes(needle)
    );
  }, [conversations, query]);

  const groups = React.useMemo(() => {
    const order: string[] = [];
    const map = new Map<string, ConversationSummary[]>();
    for (const conversation of filtered) {
      if (!map.has(conversation.group)) {
        order.push(conversation.group);
        map.set(conversation.group, []);
      }
      map.get(conversation.group)?.push(conversation);
    }
    return order.map((group) => ({
      group,
      items: map.get(group) ?? [],
    }));
  }, [filtered]);

  const handleConversationClick = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const { conversationId } = event.currentTarget.dataset;
      if (conversationId) {
        onViewChange("chat");
        onConversationSelect(conversationId);
      }
    },
    [onConversationSelect, onViewChange]
  );

  const handleQueryChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(event.target.value);
    },
    []
  );

  const handleNewChatClick = React.useCallback(() => {
    onViewChange("chat");
    onNewChat();
  }, [onNewChat, onViewChange]);

  const handleProjectsClick = React.useCallback(() => {
    onProjectsSelect();
  }, [onProjectsSelect]);

  const handleLibraryClick = React.useCallback(() => {
    onViewChange("chat");
  }, [onViewChange]);

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="font-semibold text-foreground"
              size="lg"
              tooltip="Shark Assistant"
            >
              <IconTile
                aria-hidden="true"
                className="border-transparent shadow-none"
                size="sm"
                variant="primary"
              >
                <BotIcon aria-hidden="true" className="size-4" />
              </IconTile>
              <span>Shark Assistant</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        <InputGroup className="group-data-[collapsible=icon]:hidden">
          <InputGroupInput
            aria-label="Search conversations"
            onChange={handleQueryChange}
            placeholder="Search..."
            type="search"
            value={query}
          />
          <InputGroupAddon align="inline-start">
            <SearchIcon aria-hidden="true" />
          </InputGroupAddon>
        </InputGroup>

        <SidebarMenu className="group-data-[collapsible=icon]:hidden">
          <SidebarMenuItem>
            <SidebarMenuButton
              isActive={activeView === "chat" && !activeConversationId}
              onClick={handleNewChatClick}
            >
              <PlusIcon aria-hidden="true" className="size-4" />
              <span>New chat</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              isActive={activeView === "projects"}
              onClick={handleProjectsClick}
            >
              <FolderIcon aria-hidden="true" className="size-4" />
              <span>Projects</span>
              <ChevronRightIcon
                aria-hidden="true"
                className="ms-auto size-4 opacity-0 group-hover/menu-item:opacity-100"
              />
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={handleLibraryClick}>
              <BookOpenIcon aria-hidden="true" className="size-4" />
              <span>Library</span>
              <ChevronRightIcon
                aria-hidden="true"
                className="ms-auto size-4 opacity-0 group-hover/menu-item:opacity-100"
              />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
          <SidebarGroupLabel>Pinned</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {PINNED_PROJECTS.map((project) => (
                <SidebarMenuItem key={project.id}>
                  <SidebarMenuButton onClick={handleProjectsClick}>
                    <FolderIcon aria-hidden="true" className="size-4" />
                    <span>{project.title}</span>
                    <ChevronRightIcon
                      aria-hidden="true"
                      className="ms-auto size-4 opacity-0 group-hover/menu-item:opacity-100"
                    />
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {groups.map(({ group, items }) => (
          <SidebarGroup key={group}>
            <SidebarGroupLabel className="text-sidebar-foreground!">
              {group}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((conversation) => (
                  <SidebarMenuItem key={conversation.id}>
                    <SidebarMenuButton
                      data-conversation-id={conversation.id}
                      isActive={
                        activeView === "chat" &&
                        activeConversationId === conversation.id
                      }
                      onClick={handleConversationClick}
                      tooltip={conversation.title}
                    >
                      <span className="truncate">{conversation.title}</span>
                    </SidebarMenuButton>
                    <SidebarMenuAction
                      aria-label={`More options for ${conversation.title}`}
                      showOnHover
                    >
                      <EllipsisIcon aria-hidden="true" />
                    </SidebarMenuAction>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="text-foreground" size="lg">
              <Avatar className="size-10 rounded-full">
                <AvatarFallback className="rounded-full">JB</AvatarFallback>
              </Avatar>
              <span className="grid min-w-0 flex-1 text-start text-sm leading-tight">
                <span className="flex items-center gap-1.5 truncate font-medium">
                  James Brown
                  <Badge className="uppercase" variant="secondary">
                    Pro
                  </Badge>
                </span>
                <span className="truncate text-muted-foreground text-xs">
                  james@northstar.dev
                </span>
              </span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};
