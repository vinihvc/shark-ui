import { Bubble, BubbleContent } from "@/registry/react/components/bubble";

const Example = () => (
  <div className="flex w-full max-w-sm flex-col gap-3">
    <Bubble>
      <BubbleContent>Need a hand with the registry build?</BubbleContent>
    </Bubble>
  </div>
);

export default Example;
