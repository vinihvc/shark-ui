import { InfoIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  ToggleTooltip,
  ToggleTooltipContent,
  ToggleTooltipTrigger,
} from "@/registry/react/components/toggle-tooltip";

const Example = () => (
  <ToggleTooltip>
    <ToggleTooltipTrigger asChild>
      <Button aria-label="More information" size="icon-md" variant="outline">
        <InfoIcon />
      </Button>
    </ToggleTooltipTrigger>
    <ToggleTooltipContent className="max-w-52">
      Hover or click to see this content. Works on touch devices too.
    </ToggleTooltipContent>
  </ToggleTooltip>
);

export default Example;
