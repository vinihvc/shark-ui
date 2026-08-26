import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/react/components/avatar";
import { Bubble, BubbleContent } from "@/registry/react/components/bubble";
import {
  Message,
  MessageAvatar,
  MessageContent,
} from "@/registry/react/components/message";

const Example = () => (
  <div className="flex w-full max-w-md flex-col gap-2">
    <Message>
      <MessageAvatar>
        <Avatar size="sm">
          <AvatarImage alt="R" src="https://github.com/shadcn.png" />
          <AvatarFallback>R</AvatarFallback>
        </Avatar>
      </MessageAvatar>
      <MessageContent>
        <Bubble>
          <BubbleContent>
            The build failed during dependency installation.
          </BubbleContent>
        </Bubble>
      </MessageContent>
    </Message>
    <Message>
      <MessageAvatar>
        <Avatar size="sm">
          <AvatarImage alt="R" src="https://github.com/shadcn.png" />
          <AvatarFallback>R</AvatarFallback>
        </Avatar>
      </MessageAvatar>
      <MessageContent>
        <Bubble>
          <BubbleContent>Can you share the exact error?</BubbleContent>
        </Bubble>
      </MessageContent>
    </Message>
    <Message align="end">
      <MessageContent>
        <Bubble align="end" variant="secondary">
          <BubbleContent>Here's the error from the logs</BubbleContent>
        </Bubble>
      </MessageContent>
    </Message>
  </div>
);

export default Example;
