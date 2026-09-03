import {
  MessageBubble,
  MessageBubbleContent,
} from "@/registry/react/components/message-bubble";

const Example = () => (
  <div className="flex w-full max-w-sm flex-col">
    <MessageBubble>
      <MessageBubbleContent>I'll be there around 7.</MessageBubbleContent>
    </MessageBubble>
  </div>
);

export default Example;
