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
} from "@/registry/react/components/message-bubble";
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerViewport,
} from "@/registry/react/components/message-scroller";

const Example = () => (
  <MessageScroller className="h-96 w-full max-w-md rounded-xl border">
    <MessageScrollerViewport className="px-4 py-6">
      <MessageScrollerContent>
        {lines.map((text, index) => {
          const isYou = index % 2 === 1;

          return (
            <MessageScrollerItem key={text}>
              <Message align={isYou ? "end" : "start"}>
                {isYou ? null : (
                  <MessageAvatar>
                    <Avatar size="sm">
                      <AvatarImage
                        alt="Ada"
                        src="https://github.com/shadcn.png"
                      />
                      <AvatarFallback>A</AvatarFallback>
                    </Avatar>
                  </MessageAvatar>
                )}
                <MessageContent>
                  <MessageBubble
                    align={isYou ? "end" : "start"}
                    variant="secondary"
                  >
                    <MessageBubbleContent>{text}</MessageBubbleContent>
                  </MessageBubble>
                </MessageContent>
              </Message>
            </MessageScrollerItem>
          );
        })}
      </MessageScrollerContent>
    </MessageScrollerViewport>
    <MessageScrollerButton direction="start" />
    <MessageScrollerButton direction="end" />
  </MessageScroller>
);

const lines = Array.from(
  { length: 16 },
  (_, index) => `Turn ${index + 1}: keep scrolling to reveal the jump controls.`
);

export default Example;
