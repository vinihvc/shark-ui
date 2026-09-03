"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import type { UIMessage } from "ai";
import {
  BotIcon,
  CopyIcon,
  FileTextIcon,
  ListTodoIcon,
  PaperclipIcon,
  SearchIcon,
  SquarePenIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
  XIcon,
} from "lucide-react";
import { useCallback, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import {
  ApprovalCard,
  ApprovalCardFooter,
  ApprovalCardHeader,
  ApprovalCardReject,
  ApprovalCardSubmit,
  ApprovalCardTitle,
} from "@/registry/react/components/approval-card";
import {
  Attachment,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "@/registry/react/components/attachment";
import { Avatar, AvatarFallback } from "@/registry/react/components/avatar";
import { Button } from "@/registry/react/components/button";
import {
  CodeBlock,
  CodeBlockContent,
  CodeBlockCopy,
  CodeBlockHeader,
  CodeBlockTitle,
} from "@/registry/react/components/code-block";
import {
  Context,
  ContextBody,
  ContextContent,
  ContextFooter,
  ContextHeader,
  ContextMeter,
  ContextTitle,
  ContextTrigger,
  ContextUsageRow,
} from "@/registry/react/components/context";
import {
  Diff,
  DiffContent,
  DiffFile,
  DiffHeader,
  DiffLine,
  DiffStats,
} from "@/registry/react/components/diff";
import {
  FileUpload,
  FileUploadTrigger,
} from "@/registry/react/components/file-upload";
import { IconTile } from "@/registry/react/components/icon-tile";
import {
  Marker,
  MarkerContent,
  MarkerIcon,
} from "@/registry/react/components/marker";
import {
  Message,
  MessageAction,
  MessageActions,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageHeader,
} from "@/registry/react/components/message";
import {
  MessageBubble,
  MessageBubbleContent,
} from "@/registry/react/components/message-bubble";
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerViewport,
} from "@/registry/react/components/message-scroller";
import {
  ModelSelector,
  ModelSelectorContent,
  ModelSelectorEmpty,
  ModelSelectorGroup,
  ModelSelectorInput,
  ModelSelectorItem,
  ModelSelectorLabel,
  ModelSelectorList,
  ModelSelectorTrigger,
} from "@/registry/react/components/model-selector";
import {
  Plan,
  PlanAction,
  PlanContent,
  PlanDescription,
  PlanHeader,
  PlanTitle,
  PlanTrigger,
} from "@/registry/react/components/plan";
import {
  PromptInput,
  PromptInputButton,
  PromptInputFooter,
  type PromptInputStatus,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputTools,
} from "@/registry/react/components/prompt-input";
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
  Reasoning,
  ReasoningContent,
  ReasoningTrigger,
} from "@/registry/react/components/reasoning";
import {
  InlineCitation,
  Source,
  Sources,
  SourcesContent,
  SourcesTrigger,
} from "@/registry/react/components/sources";
import { SpeechInput } from "@/registry/react/components/speech-input";
import {
  Suggestion,
  Suggestions,
} from "@/registry/react/components/suggestion";
import {
  TaskItem,
  TaskItemContent,
  TaskItemDetailFile,
  TaskItemTrigger,
} from "@/registry/react/components/task";
import {
  Terminal,
  TerminalContent,
  TerminalHeader,
} from "@/registry/react/components/terminal";
import {
  ToolResult,
  ToolResultContent,
  ToolResultName,
  ToolResultTitle,
  ToolResultTrigger,
} from "@/registry/react/components/tool-result";
import { useChatSimulator } from "@/registry/react/hooks/use-chat-simulator";
import {
  CONTEXT_USAGE,
  chat,
  type DemoMessageExtras,
  getMessageText,
  MESSAGE_EXTRAS,
  MODEL_OPTIONS,
  SUGGESTIONS,
  USER_TURNS,
} from "../demo";

interface AiChatProps {
  className?: string;
}

const noop = () => undefined;

const toPromptStatus = (status: string): PromptInputStatus => {
  switch (status) {
    case "error":
      return "error";
    case "streaming":
      return "streaming";
    case "submitted":
      return "submitted";
    default:
      return "ready";
  }
};

const EmptyConversation = ({
  nextText,
  onSuggestion,
}: {
  nextText: string;
  onSuggestion: (text: string) => void;
}) => (
  <div className="flex min-h-full flex-col items-center justify-center px-6 py-10 text-center">
    <IconTile aria-hidden="true" size="lg">
      <BotIcon aria-hidden="true" />
    </IconTile>
    <h2 className="mt-6 font-semibold text-2xl tracking-tight">
      Morning, shadcn!
    </h2>
    <p className="mt-2 max-w-sm text-balance text-muted-foreground text-sm">
      What are we working on today? Press send to start a new conversation.
    </p>
    <Suggestions className="mt-8 max-w-lg">
      {SUGGESTIONS.map((item) => (
        <Suggestion
          disabled={item.text !== nextText}
          key={item.label}
          onClick={onSuggestion}
          suggestion={item.text}
        >
          {item.label}
        </Suggestion>
      ))}
    </Suggestions>
  </div>
);

const AssistantActions = () => (
  <MessageFooter>
    <MessageActions>
      <MessageAction tooltip="Copy">
        <CopyIcon aria-hidden="true" />
      </MessageAction>
      <MessageAction tooltip="Good response">
        <ThumbsUpIcon aria-hidden="true" />
      </MessageAction>
      <MessageAction tooltip="Bad response">
        <ThumbsDownIcon aria-hidden="true" />
      </MessageAction>
    </MessageActions>
  </MessageFooter>
);

const MessageExtras = ({ extras }: { extras: DemoMessageExtras }) => {
  const added = extras.diff?.lines.filter((line) => line.type === "add").length;
  const removed = extras.diff?.lines.filter(
    (line) => line.type === "delete"
  ).length;

  return (
    <>
      {extras.sources?.length ? (
        <Sources defaultOpen>
          <SourcesTrigger count={extras.sources.length} />
          <SourcesContent>
            {extras.sources.map((source) => (
              <Source
                href={source.href}
                key={source.href}
                title={source.title}
              />
            ))}
          </SourcesContent>
        </Sources>
      ) : null}
      {extras.reasoning ? (
        <Reasoning duration={extras.reasoning.duration}>
          <ReasoningTrigger duration={extras.reasoning.duration} />
          <ReasoningContent>{extras.reasoning.content}</ReasoningContent>
        </Reasoning>
      ) : null}
      {extras.tool ? (
        <ToolResult defaultOpen={Boolean(extras.terminal)} status="success">
          <ToolResultTrigger>
            <ToolResultTitle>{extras.tool.name}</ToolResultTitle>
            <ToolResultName>{extras.tool.file}</ToolResultName>
          </ToolResultTrigger>
          {extras.terminal ? (
            <ToolResultContent>
              <Terminal output={extras.terminal.output}>
                <TerminalHeader>{extras.terminal.header}</TerminalHeader>
                <TerminalContent />
              </Terminal>
            </ToolResultContent>
          ) : null}
        </ToolResult>
      ) : null}
      {extras.tool || !extras.terminal ? null : (
        <Terminal output={extras.terminal.output}>
          <TerminalHeader>{extras.terminal.header}</TerminalHeader>
          <TerminalContent />
        </Terminal>
      )}
      {extras.diff ? (
        <Diff>
          <DiffHeader>
            <DiffFile>{extras.diff.file}</DiffFile>
            <DiffStats added={added ?? 0} removed={removed ?? 0} />
          </DiffHeader>
          <DiffContent>
            {extras.diff.lines.map((line) => (
              <DiffLine
                key={`${line.type}-${line.line}-${line.text}`}
                line={line.line}
                type={line.type}
              >
                {line.text}
              </DiffLine>
            ))}
          </DiffContent>
        </Diff>
      ) : null}
      {extras.approval ? (
        <ApprovalCard onApprove={noop} onReject={noop}>
          <ApprovalCardHeader>
            <ApprovalCardTitle>{extras.approval}</ApprovalCardTitle>
          </ApprovalCardHeader>
          <ApprovalCardFooter>
            <ApprovalCardReject type="button" variant="outline">
              Reject
            </ApprovalCardReject>
            <ApprovalCardSubmit type="button">Approve</ApprovalCardSubmit>
          </ApprovalCardFooter>
        </ApprovalCard>
      ) : null}
      {extras.plan ? (
        <Plan defaultOpen>
          <PlanHeader>
            <div className="min-w-0">
              <PlanTitle>{extras.plan.title}</PlanTitle>
              <PlanDescription>{extras.plan.description}</PlanDescription>
            </div>
            <PlanAction>
              <PlanTrigger />
            </PlanAction>
          </PlanHeader>
          <PlanContent>
            {extras.plan.tasks.map((task) => (
              <TaskItem key={task.title} status={task.status}>
                <TaskItemTrigger status={task.status} title={task.title} />
                {task.file ? (
                  <TaskItemContent>
                    <TaskItemDetailFile>{task.file}</TaskItemDetailFile>
                  </TaskItemContent>
                ) : null}
              </TaskItem>
            ))}
          </PlanContent>
        </Plan>
      ) : null}
      {extras.code ? (
        <CodeBlock code={extras.code.code}>
          <CodeBlockHeader>
            <CodeBlockTitle>{extras.code.title}</CodeBlockTitle>
            <CodeBlockCopy />
          </CodeBlockHeader>
          <CodeBlockContent showLineNumbers>
            {extras.code.code}
          </CodeBlockContent>
        </CodeBlock>
      ) : null}
      {extras.attachment ? (
        <Attachment size="sm">
          <AttachmentMedia>
            <FileTextIcon aria-hidden="true" />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>{extras.attachment.name}</AttachmentTitle>
            <AttachmentDescription>
              {extras.attachment.description}
            </AttachmentDescription>
          </AttachmentContent>
        </Attachment>
      ) : null}
    </>
  );
};

const ChatMessageItem = ({
  extras,
  message,
}: {
  extras?: DemoMessageExtras;
  message: UIMessage;
}) => {
  const isUser = message.role === "user";
  const text = getMessageText(message);
  const firstSource = extras?.sources?.[0];

  return (
    <MessageScrollerItem>
      <Message align={isUser ? "end" : "start"}>
        {isUser ? null : (
          <MessageAvatar>
            <Avatar size="sm">
              <AvatarFallback>
                <BotIcon aria-hidden="true" className="size-4" />
              </AvatarFallback>
            </Avatar>
          </MessageAvatar>
        )}
        <MessageContent>
          {isUser ? null : <MessageHeader>Shark Assistant</MessageHeader>}
          {extras ? <MessageExtras extras={extras} /> : null}
          {text ? (
            <MessageBubble
              align={isUser ? "end" : "start"}
              variant={isUser ? "secondary" : "ghost"}
            >
              <MessageBubbleContent>
                {text}
                {firstSource ? (
                  <InlineCitation
                    href={firstSource.href}
                    index={1}
                    title={firstSource.title}
                  />
                ) : null}
              </MessageBubbleContent>
            </MessageBubble>
          ) : null}
          {isUser ? null : <AssistantActions />}
        </MessageContent>
      </Message>
    </MessageScrollerItem>
  );
};

const ChatSession = ({
  className,
  onReset,
}: {
  className?: string;
  onReset: () => void;
}) => {
  const [model, setModel] = useState(MODEL_OPTIONS[0].value);
  const { contains } = useFilter({ sensitivity: "base" });
  const { collection, filter } = useListCollection({
    filter: contains,
    groupBy: (item) => item.group,
    initialItems: [...MODEL_OPTIONS],
  });
  const { canSendNext, messages, nextMessage, sendNext, status, stop } =
    useChatSimulator({
      adapter: "ai-sdk",
      chat,
    });
  const nextText = nextMessage ? getMessageText(nextMessage) : "";
  const promptStatus = toPromptStatus(status);
  const selectedModel =
    MODEL_OPTIONS.find((option) => option.value === model) ?? MODEL_OPTIONS[0];
  const messageIds = useMemo(
    () => new Set(messages.map((message) => message.id)),
    [messages]
  );
  const queuedTurns = USER_TURNS.filter(
    (turn) => !messageIds.has(turn.id) && turn.id !== nextMessage?.id
  );
  const usedTokens = Math.min(18_420 + messages.length * 640, 128_000);
  const isBusy = status === "submitted" || status === "streaming";
  const hasMessages = messages.length > 0;
  const firstUserMessage = messages.find((message) => message.role === "user");
  const threadTitle = firstUserMessage
    ? getMessageText(firstUserMessage)
    : "New Chat";

  const handleSendNext = useCallback(() => {
    sendNext()?.catch(noop);
  }, [sendNext]);
  const handleSuggestion = useCallback(
    (text: string) => {
      if (text === nextText) {
        handleSendNext();
      }
    },
    [handleSendNext, nextText]
  );
  const handleSubmit = useCallback(() => {
    if (canSendNext) {
      handleSendNext();
    }
  }, [canSendNext, handleSendNext]);
  const handleInputValueChange = useCallback(
    ({ inputValue }: { inputValue: string }) => {
      filter(inputValue);
    },
    [filter]
  );
  const handleModelChange = useCallback(({ value }: { value: string[] }) => {
    setModel(value[0] ?? "");
  }, []);

  return (
    <div
      className={cn("flex min-h-0 w-full flex-col bg-background", className)}
    >
      <header
        aria-label="Chat"
        className={cn(
          "flex h-12 shrink-0 items-center gap-3 px-4",
          hasMessages && "border-b"
        )}
      >
        {hasMessages ? (
          <h2 className="min-w-0 flex-1 truncate font-medium text-sm">
            {threadTitle}
          </h2>
        ) : null}
        <div className="ms-auto flex items-center gap-1">
          <Context
            costLabel="$0.042"
            maxTokens={128_000}
            usedTokens={usedTokens}
          >
            <ContextTrigger />
            <ContextContent>
              <ContextHeader>
                <ContextTitle showCloseButton>Context Usage</ContextTitle>
                <ContextMeter />
              </ContextHeader>
              <ContextBody>
                {CONTEXT_USAGE.map((usage) => (
                  <ContextUsageRow key={usage.title} {...usage} />
                ))}
              </ContextBody>
              <ContextFooter />
            </ContextContent>
          </Context>
          <Button
            aria-label="New chat"
            onClick={onReset}
            size="icon-sm"
            type="button"
            variant="ghost"
          >
            <SquarePenIcon aria-hidden="true" />
          </Button>
        </div>
      </header>

      <MessageScroller className="min-h-0 flex-1">
        <MessageScrollerViewport aria-live="polite">
          {messages.length === 0 ? (
            <EmptyConversation
              nextText={nextText}
              onSuggestion={handleSuggestion}
            />
          ) : (
            <MessageScrollerContent className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6">
              <MessageScrollerItem>
                <Marker variant="separator">
                  <MarkerContent>Today</MarkerContent>
                </Marker>
              </MessageScrollerItem>
              {isBusy ? (
                <MessageScrollerItem>
                  <Marker>
                    <MarkerIcon>
                      <SearchIcon />
                    </MarkerIcon>
                    <MarkerContent className="shimmer">
                      Reading the thread component
                    </MarkerContent>
                  </Marker>
                </MessageScrollerItem>
              ) : null}
              {messages.map((message) => (
                <ChatMessageItem
                  extras={MESSAGE_EXTRAS[message.id]}
                  key={message.id}
                  message={message}
                />
              ))}
            </MessageScrollerContent>
          )}
        </MessageScrollerViewport>
        <MessageScrollerButton />
      </MessageScroller>

      <div className="mx-auto flex w-full max-w-3xl flex-col gap-3 px-4 pt-2 pb-4 sm:px-6">
        {hasMessages && queuedTurns.length > 0 ? (
          <Queue>
            <QueueSection defaultOpen>
              <QueueSectionTrigger>
                <QueueSectionLabel
                  count={queuedTurns.length}
                  icon={<ListTodoIcon aria-hidden="true" className="size-4" />}
                  label="Queued"
                />
              </QueueSectionTrigger>
              <QueueSectionContent>
                <QueueList>
                  {queuedTurns.map((turn) => (
                    <QueueItem key={turn.id}>
                      <QueueItemIndicator />
                      <QueueItemContent>{turn.label}</QueueItemContent>
                      <QueueItemActions>
                        <QueueItemAction aria-label={`Remove ${turn.label}`}>
                          <XIcon aria-hidden="true" />
                        </QueueItemAction>
                      </QueueItemActions>
                    </QueueItem>
                  ))}
                </QueueList>
              </QueueSectionContent>
            </QueueSection>
          </Queue>
        ) : null}

        <div className="rounded-2xl bg-muted/50 p-0.5">
          <FileUpload
            accept="image/*,.pdf,.txt,.md"
            className="gap-0"
            maxFiles={4}
          >
            <PromptInput
              className="rounded-xl border-0 bg-card shadow-xs"
              onStop={stop}
              onSubmit={handleSubmit}
              status={promptStatus}
            >
              <PromptInputTextarea
                aria-label="Message"
                placeholder="Ask the assistant to continue the demo..."
                readOnly
                rows={3}
                value={nextText}
              />
              <PromptInputFooter>
                <PromptInputTools>
                  <FileUploadTrigger asChild>
                    <PromptInputButton aria-label="Attach file" size="icon-xs">
                      <PaperclipIcon aria-hidden="true" />
                    </PromptInputButton>
                  </FileUploadTrigger>
                  <ModelSelector
                    collection={collection}
                    onInputValueChange={handleInputValueChange}
                    onValueChange={handleModelChange}
                    value={[model]}
                  >
                    <ModelSelectorTrigger size="xs" variant="ghost">
                      {selectedModel.label}
                    </ModelSelectorTrigger>
                    <ModelSelectorContent>
                      <ModelSelectorInput placeholder="Search models" />
                      <ModelSelectorList>
                        <ModelSelectorEmpty />
                        {collection.group().map(([group, items]) => (
                          <ModelSelectorGroup key={group}>
                            <ModelSelectorLabel>{group}</ModelSelectorLabel>
                            {items.map((item) => (
                              <ModelSelectorItem item={item} key={item.value}>
                                {item.label}
                              </ModelSelectorItem>
                            ))}
                          </ModelSelectorGroup>
                        ))}
                      </ModelSelectorList>
                    </ModelSelectorContent>
                  </ModelSelector>
                  <SpeechInput />
                </PromptInputTools>
                <PromptInputSubmit disabled={!(canSendNext || isBusy)} />
              </PromptInputFooter>
            </PromptInput>
          </FileUpload>
        </div>
        <p className="text-center text-muted-foreground text-xs">
          Demo is read-only. Press send to send messages.
        </p>
      </div>
    </div>
  );
};

export const AiChat = ({ className }: AiChatProps) => {
  const [session, setSession] = useState(0);
  const handleReset = useCallback(() => {
    setSession((current) => current + 1);
  }, []);

  return (
    <ChatSession className={className} key={session} onReset={handleReset} />
  );
};
