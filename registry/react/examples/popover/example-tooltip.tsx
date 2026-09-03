import { useId } from "react";
import { Button } from "@/registry/react/components/button";
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@/registry/react/components/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/react/components/tooltip";

const Example = () => {
  const triggerId = useId();

  return (
    <Popover ids={{ trigger: triggerId }}>
      <Tooltip ids={{ trigger: triggerId }}>
        <TooltipTrigger asChild>
          <PopoverTrigger asChild>
            <Button variant="outline">Show details</Button>
          </PopoverTrigger>
        </TooltipTrigger>
        <TooltipContent>Show more details</TooltipContent>
      </Tooltip>
      <PopoverContent className="w-64">
        <PopoverHeader
          description="Additional information appears here."
          title="Details"
        />
      </PopoverContent>
    </Popover>
  );
};

export default Example;
