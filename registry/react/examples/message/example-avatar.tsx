import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/react/components/avatar";
import {
  Message,
  MessageAvatar,
  MessageContent,
} from "@/registry/react/components/message";
import {
  MessageBubble,
  MessageBubbleContent,
  MessageBubbleGroup,
  MessageBubbleReactions,
} from "@/registry/react/components/message-bubble";

const Example = () => (
  <div className="flex w-full max-w-sm flex-col gap-6">
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
            The build failed during dependency installation.
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
          <MessageBubbleContent>
            Can you share the exact error?
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
        <MessageBubbleGroup>
          <MessageBubble variant="secondary">
            <MessageBubbleContent>
              Here's the error from the logs
            </MessageBubbleContent>
            <MessageBubbleReactions>
              <span>👀</span>
            </MessageBubbleReactions>
          </MessageBubble>
          <MessageBubble variant="secondary">
            <MessageBubbleContent>
              Something went wrong with the build. The libraries are not
              installed correctly. Try running the build again.
            </MessageBubbleContent>
          </MessageBubble>
        </MessageBubbleGroup>
      </MessageContent>
    </Message>
  </div>
);

export default Example;
