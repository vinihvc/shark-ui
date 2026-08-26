"use client";

import { EllipsisIcon, ListTodoIcon, XIcon } from "lucide-react";
import type React from "react";
import { useCallback, useRef, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/react/components/breadcrumb";
import { Button } from "@/registry/react/components/button";
import {
  Context,
  ContextBody,
  ContextCacheUsage,
  ContextContent,
  ContextFooter,
  ContextHeader,
  ContextInputUsage,
  ContextOutputUsage,
  ContextReasoningUsage,
  ContextTrigger,
} from "@/registry/react/components/context";
import {
  Queue,
  QueueItem,
  QueueItemAction,
  QueueItemActions,
  QueueItemContent,
  QueueItemIndicator,
  QueueList,
  QueueSection,
  QueueSectionContent,
  QueueSectionLabel,
  QueueSectionTrigger,
} from "@/registry/react/components/queue";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/registry/react/components/sidebar";
import { ChatComposer } from "./chat-composer";
import { ChatProjects } from "./chat-projects";
import {
  ChatSidebar,
  type ChatView,
  type ConversationSummary,
} from "./chat-sidebar";
import { type ChatMessage, ChatThread } from "./chat-thread";

interface Conversation extends ConversationSummary {
  messages: readonly ChatMessage[];
  project?: string;
}

const MODEL_OPTIONS = [
  { group: "Models", label: "GPT-4", value: "gpt-4" },
  { group: "Models", label: "GPT-4.1", value: "gpt-4.1" },
  { group: "Models", label: "GPT-4.1 Mini", value: "gpt-4.1-mini" },
  { group: "Agents", label: "Research", value: "agent-research" },
  { group: "Agents", label: "Coding", value: "agent-coding" },
] as const;

const conversations: readonly Conversation[] = [
  {
    group: "Recents",
    id: "launch-plan",
    messages: [
      {
        attachment: {
          description: "PDF · 1.2 MB",
          name: "launch-brief.pdf",
        },
        content:
          "Turn this launch brief into a concise plan for the product team.",
        id: "launch-user",
        role: "user",
      },
      {
        approvalPlan: {
          steps: [
            { id: "1", title: "Confirm audience and release boundary" },
            { id: "2", title: "Assign owners to launch risks" },
            { id: "3", title: "Draft weekly milestone reviews" },
            { id: "4", title: "Publish one-page summary" },
          ],
          summary:
            "Lock scope, assign risk owners, and turn the brief into weekly milestones.",
          title: "Launch plan",
        },
        confirmation: "Allow reading launch-brief.pdf for planning context?",
        content:
          "Start with three decisions: confirm the audience, lock the release boundary, and assign one owner to each launch risk. Then turn the brief into milestones that can be reviewed weekly.",
        id: "launch-assistant",
        plan: {
          description: "Audience, risks, then weekly milestones.",
          tasks: [
            {
              file: "launch-brief.pdf",
              status: "completed",
              title: "Extract decisions from the brief",
            },
            {
              status: "in-progress",
              title: "Draft milestone checklist",
            },
          ],
          title: "Launch readiness",
        },
        reasoning: {
          content:
            "The brief already names the audience and three launch risks. I should convert those into owned decisions and a weekly review cadence instead of inventing new workstreams.",
          duration: 6,
        },
        role: "assistant",
        sources: [
          {
            href: "https://shark.vini.one/docs",
            title: "Shark UI Docs",
          },
          {
            href: "https://ark-ui.com",
            title: "Ark UI",
          },
        ],
        tool: {
          file: "launch-brief.pdf",
          name: "Read",
          pathLabel: "File",
        },
      },
    ],
    project: "Launch planning",
    title: "Launch plan",
  },
  {
    group: "Recents",
    id: "research-notes",
    messages: [
      {
        content:
          "Summarize the strongest themes from last week's research notes.",
        id: "research-user",
        role: "user",
      },
      {
        content:
          "The recurring themes are faster onboarding, clearer ownership, and fewer context switches. Validate them against the original notes before using them as product evidence.",
        id: "research-assistant",
        role: "assistant",
      },
    ],
    project: "Research & Analysis",
    title: "User research analysis",
  },
  {
    group: "Yesterday",
    id: "release-checklist",
    messages: [
      {
        content: "Draft a short release checklist for a frontend change.",
        id: "release-user",
        role: "user",
      },
      {
        content:
          "Check keyboard navigation, responsive layouts, theme variants, loading and empty states, then run lint, type checking, and the production build.",
        id: "release-assistant",
        role: "assistant",
      },
    ],
    project: "Release notes",
    title: "Release checklist",
  },
] as const;

const INITIAL_QUEUE = [
  { id: "q1", title: "Summarize competitor notes" },
  { id: "q2", title: "Draft launch FAQ" },
] as const;

const getConversation = (id: string) =>
  conversations.find((conversation) => conversation.id === id) ?? null;

export const AIChat = () => {
  const nextMessageId = useRef(0);
  const [activeView, setActiveView] = useState<ChatView>("chat");
  const [activeConversationId, setActiveConversationId] = useState<
    string | null
  >(conversations[0]?.id ?? null);
  const [messages, setMessages] = useState<readonly ChatMessage[]>(
    conversations[0]?.messages ?? []
  );
  const [thinkMode, setThinkMode] = useState(true);
  const [model, setModel] = useState("gpt-4");
  const [usedTokens, setUsedTokens] = useState(18_420);
  const [queueItems, setQueueItems] = useState(() => [...INITIAL_QUEUE]);

  const activeConversation = activeConversationId
    ? getConversation(activeConversationId)
    : null;
  const selectedModel =
    MODEL_OPTIONS.find((option) => option.value === model) ?? MODEL_OPTIONS[0];

  const breadcrumbProject =
    activeView === "projects"
      ? "Projects"
      : (activeConversation?.project ?? "Design help");
  const breadcrumbTitle =
    activeView === "projects"
      ? "All projects"
      : (activeConversation?.title ?? "New chat");

  const handleConversationSelect = useCallback((id: string) => {
    const conversation = getConversation(id);
    if (!conversation) {
      return;
    }
    setActiveConversationId(id);
    setMessages(conversation.messages);
  }, []);

  const handleNewChat = useCallback(() => {
    setActiveConversationId(null);
    setMessages([]);
  }, []);

  const handleProjectsSelect = useCallback(() => {
    setActiveView("projects");
  }, []);

  const handleViewChange = useCallback((view: ChatView) => {
    setActiveView(view);
  }, []);

  const handleSend = useCallback(
    (content: string) => {
      const sequence = nextMessageId.current;
      nextMessageId.current += 1;
      const modelLabel = selectedModel.label;
      setUsedTokens((current) => Math.min(current + 420, 128_000));
      setMessages((current) => [
        ...current,
        {
          content,
          id: `local-user-${sequence}`,
          role: "user",
        },
        {
          content: thinkMode
            ? `Using ${modelLabel}, a useful next step is to name the owner, the deadline, and the risk for each item, then share a one-page summary with the team.`
            : `Using ${modelLabel}: name the owner, deadline, and risk for each item, then share a one-page summary.`,
          id: `local-assistant-${sequence}`,
          reasoning: thinkMode
            ? {
                content:
                  "The user wants an actionable reply. Keep the answer short, name owners and risks, and avoid inventing backend work.",
                duration: 4,
              }
            : undefined,
          role: "assistant",
        },
      ]);
    },
    [selectedModel.label, thinkMode]
  );

  const handleSuggestion = useCallback(
    (text: string) => {
      handleSend(text);
    },
    [handleSend]
  );

  const handleRemoveQueueItem = useCallback((id: string) => {
    setQueueItems((current) => current.filter((item) => item.id !== id));
  }, []);

  const handleRemoveQueueItemClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const { queueItemId } = event.currentTarget.dataset;
      if (queueItemId) {
        handleRemoveQueueItem(queueItemId);
      }
    },
    [handleRemoveQueueItem]
  );

  const showQueue =
    activeView === "chat" && messages.length > 0 && queueItems.length > 0;

  return (
    <SidebarProvider className="h-svh min-h-0">
      <ChatSidebar
        activeConversationId={activeConversationId}
        activeView={activeView}
        conversations={conversations}
        onConversationSelect={handleConversationSelect}
        onNewChat={handleNewChat}
        onProjectsSelect={handleProjectsSelect}
        onViewChange={handleViewChange}
      />
      <SidebarInset className="min-h-0 overflow-hidden">
        <div className="flex h-svh min-h-0 flex-col lg:p-1.5 lg:ps-0">
          <div className="relative flex min-h-0 flex-1 flex-col bg-background lg:rounded-3xl lg:border lg:py-4 lg:ps-5 lg:pe-4">
            <header className="flex shrink-0 items-center justify-between gap-3 px-4 pt-4 lg:px-0 lg:pt-0">
              <div className="flex min-w-0 items-center gap-2">
                <SidebarTrigger className="lg:hidden" />
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbPage className="font-normal text-muted-foreground">
                        {breadcrumbProject}
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>{breadcrumbTitle}</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
              <div className="flex items-center gap-1">
                <Context
                  costLabel="$0.042"
                  maxTokens={128_000}
                  usage={{
                    cache: 1200,
                    input: 4200,
                    output: 860,
                    reasoning: 640,
                  }}
                  usedTokens={usedTokens}
                >
                  <ContextTrigger />
                  <ContextContent>
                    <ContextHeader />
                    <ContextBody>
                      <ContextInputUsage />
                      <ContextOutputUsage />
                      <ContextReasoningUsage />
                      <ContextCacheUsage />
                    </ContextBody>
                    <ContextFooter />
                  </ContextContent>
                </Context>
                <Button
                  aria-label="Conversation options"
                  size="icon-xs"
                  type="button"
                  variant="ghost"
                >
                  <EllipsisIcon aria-hidden="true" />
                </Button>
              </div>
            </header>

            <div className="flex min-h-0 flex-1 flex-col">
              {activeView === "projects" ? (
                <ChatProjects />
              ) : (
                <ChatThread
                  messages={messages}
                  onSuggestion={handleSuggestion}
                  userName="James"
                />
              )}
            </div>

            {showQueue ? (
              <div className="shrink-0 px-3 py-2 sm:px-4">
                <Queue className="mx-auto w-full max-w-3xl">
                  <QueueSection defaultOpen>
                    <QueueSectionTrigger>
                      <QueueSectionLabel
                        count={queueItems.length}
                        icon={
                          <ListTodoIcon aria-hidden="true" className="size-4" />
                        }
                        label="Queued"
                      />
                    </QueueSectionTrigger>
                    <QueueSectionContent>
                      <QueueList>
                        {queueItems.map((item) => (
                          <QueueItem key={item.id}>
                            <QueueItemIndicator />
                            <QueueItemContent>{item.title}</QueueItemContent>
                            <QueueItemActions>
                              <QueueItemAction
                                aria-label={`Remove ${item.title}`}
                                data-queue-item-id={item.id}
                                onClick={handleRemoveQueueItemClick}
                              >
                                <XIcon aria-hidden="true" />
                              </QueueItemAction>
                            </QueueItemActions>
                          </QueueItem>
                        ))}
                      </QueueList>
                    </QueueSectionContent>
                  </QueueSection>
                </Queue>
              </div>
            ) : null}

            {activeView === "chat" ? (
              <div className="shrink-0 px-3 pt-2 pb-4 sm:px-4">
                <ChatComposer
                  model={model}
                  modelOptions={MODEL_OPTIONS}
                  onModelChange={setModel}
                  onSend={handleSend}
                  onThinkModeChange={setThinkMode}
                  thinkMode={thinkMode}
                />
              </div>
            ) : null}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};
