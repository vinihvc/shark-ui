import {
  MessageBubble,
  MessageBubbleContent,
} from "@registry/react/components/message-bubble";
import { Message, MessageContent } from "@/registry/react/components/message";

const Example = () => (
  <div className="flex w-full max-w-md flex-col gap-6">
    <Message>
      <MessageContent>
        <MessageBubble>
          <MessageBubbleContent>
            Incoming from the other person.
          </MessageBubbleContent>
        </MessageBubble>
      </MessageContent>
    </Message>
    <Message align="end">
      <MessageContent>
        <MessageBubble align="end" variant="secondary">
          <MessageBubbleContent>Outgoing on the end side.</MessageBubbleContent>
        </MessageBubble>
      </MessageContent>
    </Message>
  </div>
);

export default Example;
