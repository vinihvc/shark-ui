import { Bubble, BubbleContent } from "@/registry/react/components/bubble";
import { Message, MessageContent } from "@/registry/react/components/message";

const Example = () => (
  <div className="flex w-full max-w-md flex-col gap-6">
    <Message>
      <MessageContent>
        <Bubble>
          <BubbleContent>Incoming from the other person.</BubbleContent>
        </Bubble>
      </MessageContent>
    </Message>
    <Message align="end">
      <MessageContent>
        <Bubble align="end" variant="secondary">
          <BubbleContent>Outgoing on the end side.</BubbleContent>
        </Bubble>
      </MessageContent>
    </Message>
  </div>
);

export default Example;
