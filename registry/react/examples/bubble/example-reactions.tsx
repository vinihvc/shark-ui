import {
  Bubble,
  BubbleContent,
  BubbleReactions,
} from "@/registry/react/components/bubble";
import { Button } from "@/registry/react/components/button";

const Example = () => (
  <div className="flex w-full max-w-sm flex-col gap-8 py-4">
    <Bubble>
      <BubbleContent>I don't need tests, I know my code works.</BubbleContent>
      <BubbleReactions aria-label="Reactions: thumbs up, surprised" role="img">
        <span>👍</span>
        <span>😮</span>
      </BubbleReactions>
    </Bubble>
    <Bubble align="end" variant="secondary">
      <BubbleContent>
        Bold. Fine I'll add some tests. I'll let you know when they're done.
      </BubbleContent>
      <BubbleReactions
        align="start"
        aria-label="Reactions: eyes, rocket, and 2 more"
        role="img"
      >
        <span>👀</span>
        <span>🚀</span>
        <span>+2</span>
      </BubbleReactions>
    </Bubble>
    <Bubble variant="muted">
      <BubbleContent>Are you sure I can run this command?</BubbleContent>
      <BubbleReactions>
        <Button size="xs" variant="secondary">
          Yes, run it
        </Button>
      </BubbleReactions>
    </Bubble>
  </div>
);

export default Example;
