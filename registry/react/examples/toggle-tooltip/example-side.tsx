import { Button } from "@/registry/react/components/button";
import {
  ToggleTooltip,
  ToggleTooltipContent,
  ToggleTooltipTrigger,
} from "@/registry/react/components/toggle-tooltip";

const placements = ["left", "top", "bottom", "right"] as const;

const Example = () => (
  <div className="flex flex-wrap items-center justify-center gap-4">
    {placements.map((placement) => (
      <ToggleTooltip key={placement} positioning={{ placement }}>
        <ToggleTooltipTrigger asChild>
          <Button className="capitalize" variant="outline">
            {placement}
          </Button>
        </ToggleTooltipTrigger>
        <ToggleTooltipContent>Info on {placement}</ToggleTooltipContent>
      </ToggleTooltip>
    ))}
  </div>
);

export default Example;
