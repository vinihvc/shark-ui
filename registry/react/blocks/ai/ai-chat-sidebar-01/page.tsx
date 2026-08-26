"use client";

import { useCallback, useState } from "react";
import {
  SidebarInset,
  SidebarProvider,
} from "@/registry/react/components/sidebar";
import {
  ChatSidebar,
  type ConversationSummary,
} from "./components/chat-sidebar";

const DEMO_CONVERSATIONS: readonly ConversationSummary[] = [
  { group: "Recents", id: "launch-plan", title: "Launch plan" },
  {
    group: "Recents",
    id: "research-notes",
    title: "User research analysis",
  },
  { group: "Yesterday", id: "release-checklist", title: "Release checklist" },
];

const SidebarDemo = () => {
  const [activeConversationId, setActiveConversationId] = useState<
    string | null
  >("launch-plan");
  const [activeView, setActiveView] = useState<"chat" | "projects">("chat");

  const handleConversationSelect = useCallback((id: string) => {
    setActiveConversationId(id);
  }, []);

  const handleNewChat = useCallback(() => {
    setActiveConversationId(null);
  }, []);

  const handleProjectsSelect = useCallback(() => {
    setActiveView("projects");
  }, []);

  const handleViewChange = useCallback((view: "chat" | "projects") => {
    setActiveView(view);
  }, []);

  return (
    <SidebarProvider className="min-h-svh">
      <ChatSidebar
        activeConversationId={activeConversationId}
        activeView={activeView}
        conversations={DEMO_CONVERSATIONS}
        onConversationSelect={handleConversationSelect}
        onNewChat={handleNewChat}
        onProjectsSelect={handleProjectsSelect}
        onViewChange={handleViewChange}
      />
      <SidebarInset className="hidden lg:block" />
    </SidebarProvider>
  );
};

export default SidebarDemo;
