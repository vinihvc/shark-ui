import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/react/components/tooltip";

const TooltipDemo = () => (
  <Tooltip>
    <TooltipTrigger asChild>
      <Button>Tooltip</Button>
    </TooltipTrigger>
    <TooltipContent>Tooltip content</TooltipContent>
  </Tooltip>
);

export default TooltipDemo;
