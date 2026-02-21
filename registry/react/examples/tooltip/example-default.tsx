import {
  BoldIcon,
  ItalicIcon,
  StrikethroughIcon,
  UnderlineIcon,
} from "lucide-react";
import { Button } from "@/registry/react/components/button";
import { ButtonGroup } from "@/registry/react/components/button-group";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/react/components/tooltip";

const TooltipDemo = () => (
  <ButtonGroup>
    <Tooltip>
      <TooltipTrigger asChild>
        <Button clickEffect={false} size="icon-md" variant="outline">
          <BoldIcon />
        </Button>
      </TooltipTrigger>
      <TooltipContent>Bold</TooltipContent>
    </Tooltip>

    <Tooltip>
      <TooltipTrigger asChild>
        <Button clickEffect={false} size="icon-md" variant="outline">
          <ItalicIcon />
        </Button>
      </TooltipTrigger>
      <TooltipContent>Italic</TooltipContent>
    </Tooltip>

    <Tooltip>
      <TooltipTrigger asChild>
        <Button clickEffect={false} size="icon-md" variant="outline">
          <UnderlineIcon />
        </Button>
      </TooltipTrigger>
      <TooltipContent>Underline</TooltipContent>
    </Tooltip>

    <Tooltip>
      <TooltipTrigger asChild>
        <Button clickEffect={false} size="icon-md" variant="outline">
          <StrikethroughIcon />
        </Button>
      </TooltipTrigger>
      <TooltipContent>Strikethrough</TooltipContent>
    </Tooltip>
  </ButtonGroup>
);

export default TooltipDemo;
