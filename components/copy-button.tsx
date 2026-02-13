import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import {
  Clipboard,
  ClipboardIndicator,
  ClipboardTrigger,
} from "@/registry/react/components/clipboard";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/react/components/tooltip";

export const CopyButton = (props: React.ComponentProps<typeof Clipboard>) => {
  const { className, ...rest } = props;

  return (
    <Tooltip openDelay={400}>
      <Clipboard
        rootClassName={cn("absolute top-1.5 right-1.5 z-10", className)}
        {...rest}
      >
        <TooltipTrigger asChild>
          <ClipboardTrigger asChild>
            <Button
              className="opacity-64 hover:opacity-100 focus-visible:opacity-100"
              size="icon-sm"
              variant="ghost"
            >
              <ClipboardIndicator />
            </Button>
          </ClipboardTrigger>
        </TooltipTrigger>
        <TooltipContent>Copy to clipboard</TooltipContent>
      </Clipboard>
    </Tooltip>
  );
};
