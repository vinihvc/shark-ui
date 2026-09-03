"use client";

import {
  CopyIcon,
  ForwardIcon,
  PinIcon,
  ReplyIcon,
  SmileIcon,
  StarIcon,
  Trash2Icon,
} from "lucide-react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuTrigger,
} from "@/registry/react/components/context-menu";
import {
  Menu,
  MenuContent,
  MenuGroup,
  MenuItem,
  MenuSeparator,
  MenuTrigger,
} from "@/registry/react/components/menu";
import {
  MessageBubble,
  MessageBubbleContent,
  MessageBubbleTrigger,
} from "@/registry/react/components/message-bubble";

const Example = () => (
  <div className="flex w-full max-w-sm flex-col gap-3">
    <MessageBubble>
      <ContextMenu>
        <ContextMenuTrigger asChild>
          <MessageBubbleContent>
            Need a hand with the registry build?
          </MessageBubbleContent>
        </ContextMenuTrigger>
        <ContextMenuContent className="min-w-48">
          <MessageActions />
        </ContextMenuContent>
      </ContextMenu>
      <Menu>
        <MenuTrigger asChild>
          <MessageBubbleTrigger />
        </MenuTrigger>
        <MenuContent className="min-w-48">
          <MessageActions />
        </MenuContent>
      </Menu>
    </MessageBubble>
  </div>
);

const MessageActions = () => (
  <MenuGroup>
    {actions.map((action) => (
      <MenuItem key={action.value} value={action.value}>
        <action.icon aria-hidden="true" />
        {action.label}
      </MenuItem>
    ))}
    <MenuSeparator />
    <MenuItem value="delete" variant="destructive">
      <Trash2Icon aria-hidden="true" />
      Delete
    </MenuItem>
  </MenuGroup>
);

const actions = [
  { icon: ReplyIcon, label: "Reply", value: "reply" },
  { icon: CopyIcon, label: "Copy", value: "copy" },
  { icon: SmileIcon, label: "React", value: "react" },
  { icon: ForwardIcon, label: "Forward", value: "forward" },
  { icon: PinIcon, label: "Pin", value: "pin" },
  { icon: StarIcon, label: "Star", value: "star" },
];

export default Example;
