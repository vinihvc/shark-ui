import {
  MessageBubble,
  MessageBubbleContent,
  MessageBubbleReactions,
} from "@/registry/react/components/message-bubble";

const Example = () => (
  <div className="flex w-full max-w-sm flex-col gap-4">
    <MessageBubble variant="secondary">
      <MessageBubbleContent>I booked us a table at 8.</MessageBubbleContent>
      <MessageBubbleReactions
        align="start"
        aria-label="Reactions: thumbs up"
        role="img"
        side="top"
      >
        <span>👍</span>
      </MessageBubbleReactions>
    </MessageBubble>
    <MessageBubble align="end">
      <MessageBubbleContent>See you there.</MessageBubbleContent>
      <MessageBubbleReactions
        align="end"
        aria-label="Reactions: party popper"
        role="img"
        side="top"
      >
        <span>🎉</span>
      </MessageBubbleReactions>
    </MessageBubble>
    <MessageBubble variant="secondary">
      <MessageBubbleContent>Is that 8 your time or mine?</MessageBubbleContent>
      <MessageBubbleReactions
        align="start"
        aria-label="Reactions: eyes"
        role="img"
        side="bottom"
      >
        <span>👀</span>
      </MessageBubbleReactions>
    </MessageBubble>
    <MessageBubble align="end">
      <MessageBubbleContent>Eastern. It's on the invite.</MessageBubbleContent>
      <MessageBubbleReactions
        align="end"
        aria-label="Reactions: thumbs up, surprised"
        role="img"
        side="bottom"
      >
        <span>👍</span>
        <span>😮</span>
      </MessageBubbleReactions>
    </MessageBubble>
  </div>
);

export default Example;
