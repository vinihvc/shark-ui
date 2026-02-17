import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/react/components/toggle-group";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/react/components/tooltip";

const Example = () => (
  <ToggleGroup defaultValue={["bold"]} multiple>
    <Tooltip>
      <TooltipTrigger asChild>
        <ToggleGroupItem aria-label="Toggle bold" value="bold">
          <BoldIcon />
        </ToggleGroupItem>
      </TooltipTrigger>
      <TooltipContent>Bold</TooltipContent>
    </Tooltip>
    <Tooltip>
      <TooltipTrigger asChild>
        <ToggleGroupItem aria-label="Toggle italic" value="italic">
          <ItalicIcon />
        </ToggleGroupItem>
      </TooltipTrigger>
      <TooltipContent>Italic</TooltipContent>
    </Tooltip>
    <Tooltip>
      <TooltipTrigger asChild>
        <ToggleGroupItem aria-label="Toggle underline" value="underline">
          <UnderlineIcon />
        </ToggleGroupItem>
      </TooltipTrigger>
      <TooltipContent>Underline</TooltipContent>
    </Tooltip>
  </ToggleGroup>
);

export default Example;
