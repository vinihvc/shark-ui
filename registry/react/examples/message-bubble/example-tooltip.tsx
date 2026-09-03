import { CheckCheckIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  MessageBubble,
  MessageBubbleContent,
  MessageBubbleReactions,
} from "@/registry/react/components/message-bubble";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/react/components/tooltip";

const Example = () => (
  <div className="flex w-full max-w-sm flex-col gap-8 py-4">
    <MessageBubble variant="secondary">
      <MessageBubbleContent>
        Did you remove the stale route?
      </MessageBubbleContent>
    </MessageBubble>
    <MessageBubble align="end" variant="secondary">
      <MessageBubbleContent>
        Yes, removed it from the registry.
      </MessageBubbleContent>
      <MessageBubbleReactions>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              aria-label="Read 10:05 AM"
              clickEffect={false}
              pill
              size="icon-xs"
              variant="ghost"
            >
              <CheckCheckIcon aria-hidden="true" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Read 10:05 AM</TooltipContent>
        </Tooltip>
      </MessageBubbleReactions>
    </MessageBubble>
  </div>
);

export default Example;
