import { Bold, Italic, Strikethrough, Underline } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/react/components/tooltip";
import { ButtonGroup } from "../components/button-group";

const TooltipDemo = () => (
  <ButtonGroup>
    <Tooltip>
      <TooltipTrigger asChild>
        <Button clickEffect={false} size="icon-md" variant="outline">
          <Bold />
        </Button>
      </TooltipTrigger>
      <TooltipContent>Bold</TooltipContent>
    </Tooltip>

    <Tooltip>
      <TooltipTrigger asChild>
        <Button clickEffect={false} size="icon-md" variant="outline">
          <Italic />
        </Button>
      </TooltipTrigger>
      <TooltipContent>Italic</TooltipContent>
    </Tooltip>

    <Tooltip>
      <TooltipTrigger asChild>
        <Button clickEffect={false} size="icon-md" variant="outline">
          <Underline />
        </Button>
      </TooltipTrigger>
      <TooltipContent>Underline</TooltipContent>
    </Tooltip>

    <Tooltip>
      <TooltipTrigger asChild>
        <Button clickEffect={false} size="icon-md" variant="outline">
          <Strikethrough />
        </Button>
      </TooltipTrigger>
      <TooltipContent>Strikethrough</TooltipContent>
    </Tooltip>
  </ButtonGroup>
);

export default TooltipDemo;
