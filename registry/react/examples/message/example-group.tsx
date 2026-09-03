import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/react/components/avatar";
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageGroup,
} from "@/registry/react/components/message";
import {
  MessageBubble,
  MessageBubbleContent,
} from "@/registry/react/components/message-bubble";

const Example = () => (
  <MessageGroup className="w-full max-w-sm">
    <Message>
      <MessageAvatar />
      <MessageContent>
        <MessageBubble variant="secondary">
          <MessageBubbleContent>
            I checked the registry addresses.
          </MessageBubbleContent>
        </MessageBubble>
      </MessageContent>
    </Message>
    <Message>
      <MessageAvatar>
        <Avatar size="sm">
          <AvatarImage alt="VV" src="https://github.com/vinihvc.png" />
          <AvatarFallback>VV</AvatarFallback>
        </Avatar>
      </MessageAvatar>
      <MessageContent>
        <MessageBubble variant="secondary">
          <MessageBubbleContent>
            The component and example JSON now live under the UI registry.
          </MessageBubbleContent>
        </MessageBubble>
      </MessageContent>
    </Message>
  </MessageGroup>
);

export default Example;
