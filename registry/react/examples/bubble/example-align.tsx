import { Bubble, BubbleContent } from "@/registry/react/components/bubble";

const Example = () => (
  <div className="flex w-full max-w-sm flex-col gap-3">
    <Bubble>
      <BubbleContent>
        This bubble is aligned to the start. This is the default alignment.
      </BubbleContent>
    </Bubble>
    <Bubble align="end" variant="secondary">
      <BubbleContent>
        This bubble is aligned to the end. Use this for user messages.
      </BubbleContent>
    </Bubble>
  </div>
);

export default Example;
