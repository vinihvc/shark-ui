import { Button } from "@/registry/react/components/button";
import { Kbd, KbdGroup } from "@/registry/react/components/kbd";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/react/components/tooltip";

const Example = () => (
  <Tooltip>
    <TooltipTrigger asChild>
      <Button size="sm" variant="outline">
        Dark mode
      </Button>
    </TooltipTrigger>
    <TooltipContent className="flex items-center gap-2">
      Toggle mode
      <KbdGroup className="ml-1.5 inline">
        <Kbd>D</Kbd>
      </KbdGroup>
    </TooltipContent>
  </Tooltip>
);

export default Example;
