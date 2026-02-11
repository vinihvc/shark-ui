import { Bold, Italic, Underline } from "lucide-react";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/react/components/toggle-group";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/react/components/tooltip";

const ToggleGroupWithTooltipsDemo = () => (
  <ToggleGroup defaultValue={["bold"]} multiple>
    <Tooltip>
      <TooltipTrigger asChild>
        <ToggleGroupItem aria-label="Toggle bold" value="bold">
          <Bold />
        </ToggleGroupItem>
      </TooltipTrigger>
      <TooltipContent>Bold</TooltipContent>
    </Tooltip>
    <Tooltip>
      <TooltipTrigger asChild>
        <ToggleGroupItem aria-label="Toggle italic" value="italic">
          <Italic />
        </ToggleGroupItem>
      </TooltipTrigger>
      <TooltipContent>Italic</TooltipContent>
    </Tooltip>
    <Tooltip>
      <TooltipTrigger asChild>
        <ToggleGroupItem aria-label="Toggle underline" value="underline">
          <Underline />
        </ToggleGroupItem>
      </TooltipTrigger>
      <TooltipContent>Underline</TooltipContent>
    </Tooltip>
  </ToggleGroup>
);

export default ToggleGroupWithTooltipsDemo;
