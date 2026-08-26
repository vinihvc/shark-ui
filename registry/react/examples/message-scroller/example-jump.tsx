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
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerViewport,
} from "@/registry/react/components/message-scroller";

const lines = Array.from(
  { length: 16 },
  (_, index) => `Turn ${index + 1}: keep scrolling to reveal the jump controls.`
);

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
                  <Bubble
                    align={isYou ? "end" : "start"}
                    variant={isYou ? "secondary" : "muted"}
                  >
                    <BubbleContent>{text}</BubbleContent>
                  </Bubble>
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

export default Example;
