import {
  Bubble,
  BubbleContent,
  BubbleGroup,
  BubbleReactions,
} from "@/registry/react/components/bubble";

const Example = () => (
  <div className="flex w-full max-w-sm flex-col gap-8">
    <BubbleGroup>
      <Bubble variant="muted">
        <BubbleContent>Can you tell me what's the issue?</BubbleContent>
      </Bubble>
      <Bubble variant="muted">
        <BubbleContent>You tell me!</BubbleContent>
      </Bubble>
      <Bubble variant="muted">
        <BubbleContent>It worked yesterday. You broke it!</BubbleContent>
      </Bubble>
    </BubbleGroup>
    <BubbleGroup>
      <Bubble align="end">
        <BubbleContent>Find the bug and fix it.</BubbleContent>
        <BubbleReactions aria-label="Reactions: eyes" role="img">
          <span>👀</span>
        </BubbleReactions>
      </Bubble>
      <Bubble align="end">
        <BubbleContent>
          Want me to diff yesterday's you against today's you? It's a bit
          embarrassing.
        </BubbleContent>
      </Bubble>
    </BubbleGroup>
  </div>
);

export default Example;
