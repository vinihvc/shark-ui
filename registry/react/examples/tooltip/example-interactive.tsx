import { Button } from "@/registry/react/components/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/react/components/tooltip";

const Example = () => (
  <Tooltip interactive>
    <TooltipTrigger asChild>
      <Button variant="outline">Hover</Button>
    </TooltipTrigger>
    <TooltipContent className="flex max-w-xs flex-col gap-2">
      <p>
        Move the pointer here—the tooltip stays open so you can use the link.
      </p>
      <a
        className="font-medium underline underline-offset-2"
        href="https://shark.vini.one/docs/components"
        rel="noreferrer"
        target="_blank"
      >
        Shark UI docs
      </a>
    </TooltipContent>
  </Tooltip>
);

export default Example;
