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
      <Button aria-label="Learn more about this feature" variant="outline">
        <InfoIcon />
      </Button>
    </ToggleTooltipTrigger>
    <ToggleTooltipContent>
      This is a popover, so it can contain interactive content like{" "}
      <a
        className="underline underline-offset-2"
        href="https://ark-ui.com"
        rel="noopener"
        target="_blank"
      >
        this link
      </a>
      .
    </ToggleTooltipContent>
  </ToggleTooltip>
);

export default Example;
