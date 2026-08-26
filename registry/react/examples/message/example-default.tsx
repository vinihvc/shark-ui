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
  MessageFooter,
  MessageHeader,
} from "@/registry/react/components/message";

const Example = () => (
  <div className="flex w-full max-w-md flex-col gap-6">
    <Message>
      <MessageAvatar>
        <Avatar size="sm">
          <AvatarImage alt="Ada" src="https://github.com/shadcn.png" />
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
      </MessageAvatar>
      <MessageContent>
        <MessageHeader>Ada</MessageHeader>
        <Bubble>
          <BubbleContent>The thread is looking good. Ship it?</BubbleContent>
        </Bubble>
        <MessageFooter>10:04 AM</MessageFooter>
      </MessageContent>
    </Message>
    <Message align="end">
      <MessageContent>
        <Bubble align="end" variant="secondary">
          <BubbleContent>Give me two minutes and I’ll push.</BubbleContent>
        </Bubble>
        <MessageFooter>10:05 AM</MessageFooter>
      </MessageContent>
    </Message>
  </div>
);

export default Example;
