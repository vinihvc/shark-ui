import {
  MessageBubble,
  MessageBubbleContent,
} from "@/registry/react/components/message-bubble";

const Example = () => (
  <div className="flex w-full max-w-sm flex-col">
    <MessageBubble variant="destructive">
      <MessageBubbleContent>
        Couldn't save. The file is open in another window.
      </MessageBubbleContent>
    </MessageBubble>
  </div>
);

export default Example;
