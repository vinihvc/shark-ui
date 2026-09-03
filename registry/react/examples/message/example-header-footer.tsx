import {
  MessageBubble,
  MessageBubbleContent,
} from "@registry/react/components/message-bubble";
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
        <MessageBubble>
          <MessageBubbleContent>
            I already checked the logs.
          </MessageBubbleContent>
        </MessageBubble>
      </MessageContent>
    </Message>
    <Message align="end">
      <MessageContent>
        <MessageBubble align="end" variant="secondary">
          <MessageBubbleContent>
            Send the report to the team. Ping @shadcn if you need help.
          </MessageBubbleContent>
        </MessageBubble>
        <MessageFooter>Read Yesterday</MessageFooter>
      </MessageContent>
    </Message>
  </div>
);

export default Example;
