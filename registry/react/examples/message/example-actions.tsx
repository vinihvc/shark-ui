import {
  MessageBubble,
  MessageBubbleContent,
} from "@registry/react/components/message-bubble";
import {
  CopyIcon,
  RefreshCcwIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
} from "lucide-react";
import {
  Message,
  MessageAction,
  MessageActions,
  MessageContent,
  MessageFooter,
} from "@/registry/react/components/message";

const Example = () => (
  <div className="flex w-full max-w-md flex-col gap-6">
    <Message>
      <MessageContent>
        <MessageBubble>
          <MessageBubbleContent>
            The install failure is coming from the workspace package.
          </MessageBubbleContent>
        </MessageBubble>
        <MessageFooter>
          <MessageActions>
            <MessageAction tooltip="Copy">
              <CopyIcon aria-hidden="true" />
            </MessageAction>
            <MessageAction tooltip="Regenerate">
              <RefreshCcwIcon aria-hidden="true" />
            </MessageAction>
            <MessageAction tooltip="Good response">
              <ThumbsUpIcon aria-hidden="true" />
            </MessageAction>
            <MessageAction tooltip="Bad response">
              <ThumbsDownIcon aria-hidden="true" />
            </MessageAction>
          </MessageActions>
        </MessageFooter>
      </MessageContent>
    </Message>
    <Message align="end">
      <MessageContent>
        <MessageBubble align="end" variant="secondary">
          <MessageBubbleContent>
            Okay drop me a link. Taking a look...
          </MessageBubbleContent>
        </MessageBubble>
        <MessageFooter>Failed to send</MessageFooter>
      </MessageContent>
    </Message>
  </div>
);

export default Example;
