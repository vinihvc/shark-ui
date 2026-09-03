import {
  MessageBubble,
  MessageBubbleContent,
} from "@registry/react/components/message-bubble";

const Example = () => (
  <div className="flex w-full max-w-sm flex-col gap-2">
    <MessageBubble variant="secondary">
      <MessageBubbleContent>How can I help you today?</MessageBubbleContent>
    </MessageBubble>
    <MessageBubble align="end" variant="secondary">
      <MessageBubbleContent asChild>
        <button type="button">I forgot my password</button>
      </MessageBubbleContent>
    </MessageBubble>
    <MessageBubble align="end" variant="secondary">
      <MessageBubbleContent asChild>
        <button type="button">I need help with my subscription</button>
      </MessageBubbleContent>
    </MessageBubble>
    <MessageBubble align="end" variant="secondary">
      <MessageBubbleContent asChild>
        <button type="button">Something else. Talk to a human.</button>
      </MessageBubbleContent>
    </MessageBubble>
  </div>
);

export default Example;
