import {
  MessageBubble,
  MessageBubbleContent,
} from "@/registry/react/components/message-bubble";

const Example = () => (
  <div className="flex w-full max-w-sm flex-col">
    <MessageBubble variant="secondary">
      <MessageBubbleContent>Running 10 minutes late.</MessageBubbleContent>
    </MessageBubble>
  </div>
);

export default Example;
