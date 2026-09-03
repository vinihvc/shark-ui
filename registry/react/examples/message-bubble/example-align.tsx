import {
  MessageBubble,
  MessageBubbleContent,
} from "@/registry/react/components/message-bubble";

const Example = () => (
  <div className="flex w-full max-w-sm flex-col gap-3">
    <MessageBubble align="start" variant="secondary">
      <MessageBubbleContent>You lock the back door?</MessageBubbleContent>
    </MessageBubble>
    <MessageBubble align="end">
      <MessageBubbleContent>
        Yeah, the key is under the mat.
      </MessageBubbleContent>
    </MessageBubble>
  </div>
);

export default Example;
