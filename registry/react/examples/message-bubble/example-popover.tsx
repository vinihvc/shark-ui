import { InfoIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  MessageBubble,
  MessageBubbleContent,
  MessageBubbleReactions,
} from "@/registry/react/components/message-bubble";
import {
  ToggleTooltip,
  ToggleTooltipContent,
  ToggleTooltipTrigger,
} from "@/registry/react/components/toggle-tooltip";

const Example = () => (
  <div className="flex w-full max-w-sm flex-col gap-8 py-4">
    <MessageBubble align="end" variant="secondary">
      <MessageBubbleContent>Run the build script.</MessageBubbleContent>
    </MessageBubble>
    <MessageBubble variant="destructive">
      <MessageBubbleContent>Failed to run the command.</MessageBubbleContent>
      <MessageBubbleReactions align="end">
        <ToggleTooltip>
          <ToggleTooltipTrigger asChild>
            <Button
              aria-label="Show error details"
              clickEffect={false}
              pill
              size="icon-xs"
              variant="ghost"
            >
              <InfoIcon aria-hidden="true" />
            </Button>
          </ToggleTooltipTrigger>
          <ToggleTooltipContent className="max-w-64">
            The workspace package could not resolve. Check the lockfile and try
            again.
          </ToggleTooltipContent>
        </ToggleTooltip>
      </MessageBubbleReactions>
    </MessageBubble>
  </div>
);

export default Example;
