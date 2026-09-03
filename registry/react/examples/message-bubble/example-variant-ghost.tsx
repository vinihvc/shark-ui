import {
  MessageBubble,
  MessageBubbleContent,
} from "@/registry/react/components/message-bubble";

const Example = () => (
  <div className="flex w-full max-w-sm flex-col">
    <MessageBubble variant="ghost">
      <MessageBubbleContent>
        Your package left this morning. Tracking says Wednesday.
      </MessageBubbleContent>
    </MessageBubble>
  </div>
);

export default Example;
