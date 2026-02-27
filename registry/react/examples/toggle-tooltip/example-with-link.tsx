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
        aria-label="Learn more about this feature"
        className="inline-flex text-muted-foreground hover:text-foreground"
        type="button"
      >
        <InfoIcon className="size-4" />
      </button>
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
