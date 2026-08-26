import { Bubble, BubbleContent } from "@/registry/react/components/bubble";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/react/components/tooltip";

const Example = () => (
  <div className="flex w-full max-w-sm flex-col gap-3">
    <Bubble variant="muted">
      <BubbleContent>Did you remove the stale route?</BubbleContent>
    </Bubble>
    <Tooltip>
      <TooltipTrigger asChild>
        <Bubble align="end" variant="secondary">
          <BubbleContent>Yes, removed it from the registry.</BubbleContent>
        </Bubble>
      </TooltipTrigger>
      <TooltipContent>Read 10:05 AM</TooltipContent>
    </Tooltip>
  </div>
);

export default Example;
