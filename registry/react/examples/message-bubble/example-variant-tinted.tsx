import {
  MessageBubble,
  MessageBubbleContent,
} from "@/registry/react/components/message-bubble";

const Example = () => (
  <div className="flex w-full max-w-sm flex-col">
    <MessageBubble variant="tinted">
      <MessageBubbleContent>Parking is around back.</MessageBubbleContent>
    </MessageBubble>
  </div>
);

export default Example;
