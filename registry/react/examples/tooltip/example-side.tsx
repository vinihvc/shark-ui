import { Button } from "@/registry/react/components/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/react/components/tooltip";

const placements = ["left", "top", "bottom", "right"] as const;

const Example = () => (
  <div className="flex flex-wrap items-center justify-center gap-4">
    {placements.map((placement) => (
      <Tooltip key={placement} positioning={{ placement }}>
        <TooltipTrigger asChild>
          <Button className="capitalize" variant="outline">
            {placement}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    ))}
  </div>
);

export default Example;
