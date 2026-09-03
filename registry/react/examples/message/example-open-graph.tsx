import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardMedia,
  CardTitle,
} from "@/registry/react/components/card";
import { LinkBox, LinkOverlay } from "@/registry/react/components/link-overlay";
import { Message, MessageContent } from "@/registry/react/components/message";
import {
  MessageBubble,
  MessageBubbleContent,
} from "@/registry/react/components/message-bubble";

const Example = () => (
  <div className="flex w-full max-w-sm flex-col">
    <Message align="end">
      <MessageContent>
        <LinkBox asChild>
          <Card className="w-full max-w-64 [--space:--spacing(3)]">
            <CardMedia className="h-32 bg-muted" variant="image">
              <img alt="" height={144} src={preview.image} width={256} />
            </CardMedia>
            <CardHeader>
              <LinkOverlay asChild>
                <CardTitle asChild>
                  <a href={preview.url}>{preview.title}</a>
                </CardTitle>
              </LinkOverlay>
              <CardDescription>{preview.description}</CardDescription>
            </CardHeader>
            <CardContent>{preview.hostname}</CardContent>
          </Card>
        </LinkBox>
        <MessageBubble align="end">
          <MessageBubbleContent asChild>
            <a href={preview.url}>{preview.url}</a>
          </MessageBubbleContent>
        </MessageBubble>
      </MessageContent>
    </Message>
  </div>
);

const preview = {
  description:
    "An advanced online playground for Tailwind CSS that lets you use all of your custom config.",
  hostname: "play.tailwindcss.com",
  image: "/images/gradients/green-dark.svg",
  title: "Tailwind Play",
  url: "https://play.tailwindcss.com",
};

export default Example;
