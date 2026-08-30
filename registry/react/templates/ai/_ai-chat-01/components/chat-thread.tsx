"use client";

import {
  BotIcon,
  CopyIcon,
  FileTextIcon,
  ListTodoIcon,
  RefreshCcwIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
} from "lucide-react";
import {
  ApprovalCard,
  ApprovalCardActions,
  ApprovalCardApprove,
  ApprovalCardContent,
  ApprovalCardDescription,
  ApprovalCardFooter,
  ApprovalCardHeader,
  ApprovalCardIcon,
  ApprovalCardReject,
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
import { Bubble, BubbleContent } from "@/registry/react/components/bubble";
import {
  Confirmation,
  ConfirmationAction,
  ConfirmationActions,
  ConfirmationRequest,
  ConfirmationTitle,
} from "@/registry/react/components/confirmation";
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
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerViewport,
} from "@/registry/react/components/message-scroller";
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
  ToolResult,
  ToolResultName,
  ToolResultTitle,
  ToolResultTrigger,
} from "@/registry/react/components/tool-result";

export interface ChatMessageAttachment {
  description: string;
  name: string;
}

export interface ChatMessageSource {
  href: string;
  title: string;
}

interface ApprovalPlanStep {
  detail?: string;
  id: string;
  title: string;
}

export interface ChatMessage {
  approvalPlan?: {
    steps: ApprovalPlanStep[];
    summary: string;
    title: string;
  };
  attachment?: ChatMessageAttachment;
  confirmation?: string;
  content: string;
  id: string;
  plan?: {
    description: string;
    tasks: {
      file?: string;
      status: "completed" | "in-progress" | "pending";
      title: string;
    }[];
    title: string;
  };
  reasoning?: { content: string; duration: number };
  role: "assistant" | "user";
  sources?: ChatMessageSource[];
  tool?: { file: string; name: string; pathLabel?: string };
}

interface ChatThreadProps {
  messages: readonly ChatMessage[];
  onSuggestion: (text: string) => void;
  userName?: string;
}

const noop = () => undefined;

const EmptyConversation = ({
  onSuggestion,
  userName,
}: {
  onSuggestion: (text: string) => void;
  userName: string;
}) => (
  <div className="flex min-h-full flex-col items-center justify-center px-6 py-16 text-center">
    <span className="mb-5 grid size-8 place-items-center text-muted-foreground">
      <BotIcon aria-hidden="true" className="size-8" />
    </span>
    <h2 className="font-medium text-lg">Hello {userName}</h2>
    <p className="mt-1 text-muted-foreground text-sm">
      What can I help you with today?
    </p>
    <Suggestions className="mt-6 max-w-lg">
      <Suggestion
        onClick={onSuggestion}
        suggestion="Turn this launch brief into a plan"
      />
      <Suggestion
        onClick={onSuggestion}
        suggestion="Summarize research themes"
      />
      <Suggestion
        onClick={onSuggestion}
        suggestion="Draft a release checklist"
      />
    </Suggestions>
  </div>
);

const MessageSources = ({ sources }: { sources: ChatMessageSource[] }) => (
  <Sources defaultOpen>
    <SourcesTrigger count={sources.length} />
    <SourcesContent>
      {sources.map((source) => (
        <Source href={source.href} key={source.href} title={source.title} />
      ))}
    </SourcesContent>
  </Sources>
);

const MessageReasoning = ({
  content,
  duration,
}: {
  content: string;
  duration: number;
}) => (
  <Reasoning duration={duration}>
    <ReasoningTrigger duration={duration} />
    <ReasoningContent>{content}</ReasoningContent>
  </Reasoning>
);

const MessageTool = ({
  file,
  name,
}: {
  file: string;
  name: string;
  pathLabel?: string;
}) => (
  <ToolResult status="success">
    <ToolResultTrigger>
      <ToolResultTitle>{name}</ToolResultTitle>
      <ToolResultName>{file}</ToolResultName>
    </ToolResultTrigger>
  </ToolResult>
);

const MessageConfirmation = ({ title }: { title: string }) => (
  <Confirmation state="request">
    <ConfirmationRequest>
      <ConfirmationTitle>{title}</ConfirmationTitle>
    </ConfirmationRequest>
    <ConfirmationActions>
      <ConfirmationAction variant="outline">Reject</ConfirmationAction>
      <ConfirmationAction>Approve</ConfirmationAction>
    </ConfirmationActions>
  </Confirmation>
);

const MessageApprovalPlan = ({
  steps,
  summary,
  title,
}: NonNullable<ChatMessage["approvalPlan"]>) => (
  <ApprovalCard onApprove={noop} onReject={noop}>
    <ApprovalCardHeader>
      <ApprovalCardIcon>
        <ListTodoIcon aria-hidden="true" />
      </ApprovalCardIcon>
      <div className="min-w-0">
        <ApprovalCardTitle>{title}</ApprovalCardTitle>
        <ApprovalCardDescription>{summary}</ApprovalCardDescription>
      </div>
    </ApprovalCardHeader>
    <ApprovalCardContent>
      <ol className="flex flex-col gap-1 rounded-lg border bg-muted/30 p-2">
        {steps.map((step) => (
          <li
            className="flex items-start gap-2 px-2 py-1.5 text-xs"
            key={step.id}
          >
            <span className="mt-1 size-2 shrink-0 rounded-full border border-muted-foreground/50" />
            <span className="min-w-0">
              <span className="font-medium">{step.title}</span>
              {step.detail ? (
                <span className="mt-0.5 block text-muted-foreground">
                  {step.detail}
                </span>
              ) : null}
            </span>
          </li>
        ))}
      </ol>
    </ApprovalCardContent>
    <ApprovalCardFooter>
      <ApprovalCardActions>
        <ApprovalCardReject>View plan</ApprovalCardReject>
        <ApprovalCardApprove>Approve</ApprovalCardApprove>
      </ApprovalCardActions>
    </ApprovalCardFooter>
  </ApprovalCard>
);

const MessagePlan = ({
  description,
  tasks,
  title,
}: NonNullable<ChatMessage["plan"]>) => (
  <Plan defaultOpen>
    <PlanHeader>
      <div className="min-w-0">
        <PlanTitle>{title}</PlanTitle>
        <PlanDescription>{description}</PlanDescription>
      </div>
      <PlanAction>
        <PlanTrigger />
      </PlanAction>
    </PlanHeader>
    <PlanContent>
      {tasks.map((task) => (
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
);

const MessageAttachmentBlock = ({
  description,
  name,
}: ChatMessageAttachment) => (
  <Attachment size="sm">
    <AttachmentMedia>
      <FileTextIcon aria-hidden="true" />
    </AttachmentMedia>
    <AttachmentContent>
      <AttachmentTitle>{name}</AttachmentTitle>
      <AttachmentDescription>{description}</AttachmentDescription>
    </AttachmentContent>
  </Attachment>
);

const AssistantActions = () => (
  <MessageFooter>
    <MessageActions>
      <MessageAction tooltip="Copy">
        <CopyIcon aria-hidden="true" />
      </MessageAction>
      <MessageAction tooltip="Regenerate">
        <RefreshCcwIcon aria-hidden="true" />
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

const ChatMessageItem = ({ message }: { message: ChatMessage }) => {
  const isUser = message.role === "user";
  const firstSource = message.sources?.[0];

  return (
    <MessageScrollerItem className="[content-visibility:visible]">
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
          {message.sources?.length ? (
            <MessageSources sources={message.sources} />
          ) : null}
          {message.reasoning ? (
            <MessageReasoning
              content={message.reasoning.content}
              duration={message.reasoning.duration}
            />
          ) : null}
          {message.tool ? (
            <MessageTool
              file={message.tool.file}
              name={message.tool.name}
              pathLabel={message.tool.pathLabel}
            />
          ) : null}
          {message.confirmation ? (
            <MessageConfirmation title={message.confirmation} />
          ) : null}
          {message.approvalPlan ? (
            <MessageApprovalPlan {...message.approvalPlan} />
          ) : null}
          {message.plan ? <MessagePlan {...message.plan} /> : null}
          <Bubble
            align={isUser ? "end" : "start"}
            variant={isUser ? "secondary" : "ghost"}
          >
            <BubbleContent>
              {message.content}
              {firstSource ? (
                <InlineCitation
                  href={firstSource.href}
                  index={1}
                  title={firstSource.title}
                />
              ) : null}
            </BubbleContent>
          </Bubble>
          {message.attachment ? (
            <MessageAttachmentBlock {...message.attachment} />
          ) : null}
          {isUser ? null : <AssistantActions />}
        </MessageContent>
      </Message>
    </MessageScrollerItem>
  );
};

export const ChatThread = ({
  messages,
  onSuggestion,
  userName = "James",
}: ChatThreadProps) => (
  <MessageScroller className="min-h-0 flex-1">
    <MessageScrollerViewport aria-live="polite">
      {messages.length === 0 ? (
        <EmptyConversation onSuggestion={onSuggestion} userName={userName} />
      ) : (
        <MessageScrollerContent className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6">
          {messages.map((message) => (
            <ChatMessageItem key={message.id} message={message} />
          ))}
        </MessageScrollerContent>
      )}
    </MessageScrollerViewport>
    <MessageScrollerButton />
  </MessageScroller>
);
