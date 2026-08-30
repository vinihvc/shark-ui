import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/react/components/avatar";
import { Bubble, BubbleContent } from "@/registry/react/components/bubble";
import { Marker, MarkerContent } from "@/registry/react/components/marker";
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageHeader,
} from "@/registry/react/components/message";
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
        <MessageScrollerItem>
          <Marker variant="separator">
            <MarkerContent>Today</MarkerContent>
          </Marker>
        </MessageScrollerItem>
        {turns.map((turn) => {
          const isYou = turn.from === "you";

          return (
            <MessageScrollerItem key={turn.text}>
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
                  {isYou ? null : <MessageHeader>Ada</MessageHeader>}
                  <Bubble
                    align={isYou ? "end" : "start"}
                    variant={isYou ? "secondary" : "default"}
                  >
                    <BubbleContent>{turn.text}</BubbleContent>
                  </Bubble>
                </MessageContent>
              </Message>
            </MessageScrollerItem>
          );
        })}
      </MessageScrollerContent>
    </MessageScrollerViewport>
    <MessageScrollerButton />
  </MessageScroller>
);

const turns = [
  { from: "ada", text: "Morning. Did the preview deploy?" },
  { from: "you", text: "Yes. Checking the chat primitives next." },
  { from: "ada", text: "Scroller first. Jump buttons if I scroll away." },
  { from: "you", text: "Ark ScrollArea, no extra headless package." },
  { from: "ada", text: "Nice. Marker for the date break?" },
  { from: "you", text: "Separator variant. Coming up." },
  { from: "ada", text: "Attachments too, if you still have time." },
  { from: "you", text: "File card is in. Image cards after lunch." },
  { from: "ada", text: "Ship a draft when the docs page renders." },
  { from: "you", text: "On it." },
] as const;

export default Example;
