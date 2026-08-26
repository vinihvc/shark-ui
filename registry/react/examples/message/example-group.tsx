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
  MessageGroup,
} from "@/registry/react/components/message";

const Example = () => (
  <MessageGroup className="w-full max-w-md">
    <Message>
      <MessageAvatar />
      <MessageContent>
        <Bubble>
          <BubbleContent>I checked the registry addresses.</BubbleContent>
        </Bubble>
      </MessageContent>
    </Message>
    <Message>
      <MessageAvatar>
        <Avatar size="sm">
          <AvatarImage alt="CN" src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </MessageAvatar>
      <MessageContent>
        <Bubble>
          <BubbleContent>
            The component and example JSON now live under the UI registry.
          </BubbleContent>
        </Bubble>
      </MessageContent>
    </Message>
  </MessageGroup>
);

export default Example;
