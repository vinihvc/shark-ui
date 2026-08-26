import {
  Bubble,
  BubbleContent,
  BubbleReactions,
} from "@/registry/react/components/bubble";

const Example = () => (
  <div className="flex w-full max-w-sm flex-col gap-4">
    <Bubble>
      <BubbleContent>This is the default primary bubble.</BubbleContent>
    </Bubble>
    <Bubble variant="secondary">
      <BubbleContent>This is the secondary variant.</BubbleContent>
    </Bubble>
    <Bubble variant="muted">
      <BubbleContent>
        This one is muted. It uses a lower emphasis color for the chat bubble.
      </BubbleContent>
      <BubbleReactions aria-label="Reaction: thumbs up" role="img">
        <span>👍</span>
      </BubbleReactions>
    </Bubble>
    <Bubble variant="tinted">
      <BubbleContent>
        This one is tinted. The tint is a softer color derived from the primary
        color.
      </BubbleContent>
    </Bubble>
    <Bubble variant="outline">
      <BubbleContent>We can also use an outlined variant.</BubbleContent>
    </Bubble>
    <Bubble variant="destructive">
      <BubbleContent>Or a destructive variant with a reaction.</BubbleContent>
      <BubbleReactions aria-label="Reaction: fire" role="img">
        <span>🔥</span>
      </BubbleReactions>
    </Bubble>
    <Bubble variant="ghost">
      <BubbleContent>
        Ghost bubbles work for assistant text, markdown, and other content that
        should not be framed.
      </BubbleContent>
    </Bubble>
  </div>
);

export default Example;
