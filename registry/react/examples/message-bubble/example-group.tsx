import {
  MessageBubble,
  MessageBubbleContent,
  MessageBubbleGroup,
  MessageBubbleReactions,
} from "@/registry/react/components/message-bubble";

const Example = () => (
  <div className="flex w-full max-w-sm flex-col gap-8">
    <MessageBubbleGroup>
      <MessageBubble variant="secondary">
        <MessageBubbleContent>
          Can you tell me what's the issue?
        </MessageBubbleContent>
      </MessageBubble>
      <MessageBubble variant="secondary">
        <MessageBubbleContent>You tell me!</MessageBubbleContent>
      </MessageBubble>
      <MessageBubble variant="secondary">
        <MessageBubbleContent>
          It worked yesterday. You broke it!
        </MessageBubbleContent>
      </MessageBubble>
    </MessageBubbleGroup>
    <MessageBubbleGroup>
      <MessageBubble align="end">
        <MessageBubbleContent>Find the bug and fix it.</MessageBubbleContent>
        <MessageBubbleReactions aria-label="Reactions: eyes" role="img">
          <span>👀</span>
        </MessageBubbleReactions>
      </MessageBubble>
      <MessageBubble align="end">
        <MessageBubbleContent>
          Want me to diff yesterday's you against today's you? It's a bit
          embarrassing.
        </MessageBubbleContent>
      </MessageBubble>
    </MessageBubbleGroup>
  </div>
);

export default Example;
