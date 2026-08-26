import {
  CopyIcon,
  RefreshCcwIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
} from "lucide-react";
import { Bubble, BubbleContent } from "@/registry/react/components/bubble";
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
        <Bubble>
          <BubbleContent>
            The install failure is coming from the workspace package.
          </BubbleContent>
        </Bubble>
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
        <Bubble align="end" variant="secondary">
          <BubbleContent>Okay drop me a link. Taking a look...</BubbleContent>
        </Bubble>
        <MessageFooter>Failed to send</MessageFooter>
      </MessageContent>
    </Message>
  </div>
);

export default Example;
