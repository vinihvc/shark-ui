import { Bubble, BubbleContent } from "@/registry/react/components/bubble";
import {
  Message,
  MessageContent,
  MessageFooter,
  MessageHeader,
} from "@/registry/react/components/message";

const Example = () => (
  <div className="flex w-full max-w-md flex-col gap-6">
    <Message>
      <MessageContent>
        <MessageHeader>Olivia</MessageHeader>
        <Bubble>
          <BubbleContent>I already checked the logs.</BubbleContent>
        </Bubble>
      </MessageContent>
    </Message>
    <Message align="end">
      <MessageContent>
        <Bubble align="end" variant="secondary">
          <BubbleContent>
            Send the report to the team. Ping @shadcn if you need help.
          </BubbleContent>
        </Bubble>
        <MessageFooter>Read Yesterday</MessageFooter>
      </MessageContent>
    </Message>
  </div>
);

export default Example;
