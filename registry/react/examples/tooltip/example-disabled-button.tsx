import { Button } from "@/registry/react/components/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/react/components/tooltip";

const Example = () => (
  <Tooltip>
    <TooltipTrigger asChild>
      <span>
        <Button disabled variant="outline">
          Disabled
        </Button>
      </span>
    </TooltipTrigger>
    <TooltipContent>
      <p>You can still show a tooltip on a disabled element</p>
    </TooltipContent>
  </Tooltip>
);

export default Example;
