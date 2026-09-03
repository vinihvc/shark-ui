import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/react/components/avatar";
import { Marker, MarkerContent } from "@/registry/react/components/marker";
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
} from "@/registry/react/components/message";
import {
  MessageBubble,
  MessageBubbleContent,
} from "@/registry/react/components/message-bubble";

const MessageDemo = () => (
  <div className="flex w-full max-w-sm flex-col gap-6">
    <Message align="end">
      <MessageAvatar>
        <Avatar size="sm">
          <AvatarImage alt="@vinihvc" src="https://github.com/vinihvc.png" />
          <AvatarFallback>VV</AvatarFallback>
        </Avatar>
      </MessageAvatar>
      <MessageContent>
        <MessageBubble align="end">
          <MessageBubbleContent>
            Deploying to prod real quick.
          </MessageBubbleContent>
        </MessageBubble>
      </MessageContent>
    </Message>
    <Message>
      <MessageAvatar>
        <Avatar size="sm">
          <AvatarImage
            alt="@segunadebayo"
            src="https://github.com/segunadebayo.png"
          />
          <AvatarFallback>SA</AvatarFallback>
        </Avatar>
      </MessageAvatar>
      <MessageContent>
        <MessageBubble variant="secondary">
          <MessageBubbleContent>
            It's 4:55 PM. On a Friday.
          </MessageBubbleContent>
        </MessageBubble>
      </MessageContent>
    </Message>
    <Message align="end">
      <MessageAvatar>
        <Avatar size="sm">
          <AvatarImage alt="@vinihvc" src="https://github.com/vinihvc.png" />
          <AvatarFallback>VV</AvatarFallback>
        </Avatar>
      </MessageAvatar>
      <MessageContent>
        <MessageBubble align="end">
          <MessageBubbleContent>It's a one-line change.</MessageBubbleContent>
        </MessageBubble>
        <MessageFooter>Delivered</MessageFooter>
      </MessageContent>
    </Message>
    <Marker role="status">
      <MarkerContent className="shimmer">
        <span className="font-medium">Sage</span> is typing...
      </MarkerContent>
    </Marker>
  </div>
);

export default MessageDemo;
