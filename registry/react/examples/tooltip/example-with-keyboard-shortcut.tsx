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
      <Button variant="outline">Add to library</Button>
    </TooltipTrigger>
    <TooltipContent className="flex items-center gap-2">
      <p>Add to library</p>
      <KbdGroup className="ml-1.5 inline">
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
    </TooltipContent>
  </Tooltip>
);

export default Example;
