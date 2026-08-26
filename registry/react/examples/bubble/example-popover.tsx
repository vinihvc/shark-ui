import { InfoIcon } from "lucide-react";
import { Bubble, BubbleContent } from "@/registry/react/components/bubble";
import {
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@/registry/react/components/popover";

const Example = () => (
  <div className="flex w-full max-w-sm flex-col gap-3">
    <Bubble align="end" variant="secondary">
      <BubbleContent>Run the build script.</BubbleContent>
    </Bubble>
    <Popover>
      <PopoverTrigger asChild>
        <Bubble variant="destructive">
          <BubbleContent className="flex items-center gap-2">
            Failed to run the command.
            <InfoIcon aria-hidden="true" className="size-3.5" />
          </BubbleContent>
        </Bubble>
      </PopoverTrigger>
      <PopoverContent className="w-72">
        <PopoverHeader title="Build failed" />
        <PopoverBody className="text-muted-foreground text-sm">
          The workspace package could not resolve. Check the lockfile and try
          again.
        </PopoverBody>
      </PopoverContent>
    </Popover>
  </div>
);

export default Example;
