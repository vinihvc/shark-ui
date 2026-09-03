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
    <Menu positioning={{ placement: "right-start" }}>
      <MessageBubble>
        <MessageBubbleContent>
          Need a hand with the registry build?
        </MessageBubbleContent>
        <MenuTrigger asChild>
          <MessageBubbleTrigger />
        </MenuTrigger>
      </MessageBubble>
      <MenuContent className="min-w-48">
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
      </MenuContent>
    </Menu>
  </div>
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
