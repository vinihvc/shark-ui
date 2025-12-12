import { Bold, Italic, Strikethrough, Underline } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/react/components/tooltip";

const TooltipDemo = () => (
  <div className="flex flex-wrap gap-2">
    <Tooltip>
      <TooltipTrigger asChild>
        <Button size="icon-md">
          <Bold />
        </Button>
      </TooltipTrigger>
      <TooltipContent>Bold</TooltipContent>
    </Tooltip>

    <Tooltip>
      <TooltipTrigger asChild>
        <Button size="icon-md">
          <Italic />
        </Button>
      </TooltipTrigger>
      <TooltipContent>Italic</TooltipContent>
    </Tooltip>

    <Tooltip>
      <TooltipTrigger asChild>
        <Button size="icon-md">
          <Underline />
        </Button>
      </TooltipTrigger>
      <TooltipContent>Underline</TooltipContent>
    </Tooltip>

    <Tooltip>
      <TooltipTrigger asChild>
        <Button size="icon-md">
          <Strikethrough />
        </Button>
      </TooltipTrigger>
      <TooltipContent>Strikethrough</TooltipContent>
    </Tooltip>
  </div>
);

export default TooltipDemo;
