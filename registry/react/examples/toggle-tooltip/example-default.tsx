import { InfoIcon } from "lucide-react";
import {
  ToggleTooltip,
  ToggleTooltipContent,
  ToggleTooltipTrigger,
} from "@/registry/react/components/toggle-tooltip";

const Example = () => (
  <ToggleTooltip>
    <ToggleTooltipTrigger asChild>
      <button
        aria-label="More information"
        className="inline-flex text-muted-foreground hover:text-foreground"
        type="button"
      >
        <InfoIcon className="size-4" />
      </button>
    </ToggleTooltipTrigger>
    <ToggleTooltipContent>
      Hover or click to see this content. Works on touch devices too.
    </ToggleTooltipContent>
  </ToggleTooltip>
);

export default Example;
