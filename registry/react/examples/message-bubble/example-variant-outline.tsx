import {
  MessageBubble,
  MessageBubbleContent,
} from "@/registry/react/components/message-bubble";

const Example = () => (
  <div className="flex w-full max-w-sm flex-col">
    <MessageBubble variant="outline">
      <MessageBubbleContent>
        I'll send the address in a minute.
      </MessageBubbleContent>
    </MessageBubble>
  </div>
);

export default Example;
