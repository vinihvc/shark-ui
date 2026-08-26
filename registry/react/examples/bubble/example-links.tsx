import { Bubble, BubbleContent } from "@/registry/react/components/bubble";

const Example = () => (
  <div className="flex w-full max-w-sm flex-col gap-2">
    <Bubble variant="muted">
      <BubbleContent>How can I help you today?</BubbleContent>
    </Bubble>
    <Bubble align="end" variant="secondary">
      <BubbleContent asChild>
        <button type="button">I forgot my password</button>
      </BubbleContent>
    </Bubble>
    <Bubble align="end" variant="secondary">
      <BubbleContent asChild>
        <button type="button">I need help with my subscription</button>
      </BubbleContent>
    </Bubble>
    <Bubble align="end" variant="secondary">
      <BubbleContent asChild>
        <button type="button">Something else. Talk to a human.</button>
      </BubbleContent>
    </Bubble>
  </div>
);

export default Example;
