import { Button } from "@/registry/react/components/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/react/components/tooltip";

const sides = ["left", "top", "bottom", "right"] as const;

const Example = () => (
  <div className="flex flex-wrap items-center justify-center gap-4">
    {sides.map((side) => (
      <Tooltip key={side} positioning={{ placement: side }}>
        <TooltipTrigger asChild>
          <Button className="capitalize" variant="outline">
            {side}
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
