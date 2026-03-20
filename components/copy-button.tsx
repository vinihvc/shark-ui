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
  const { className, children, ...rest } = props;

  return (
    <Tooltip openDelay={400}>
      <Clipboard
        rootClassName={cn("absolute inset-e-1.5 top-1.5 z-10", className)}
        {...rest}
      >
        <ClipboardTrigger asChild>
          <TooltipTrigger asChild>
            <Button
              className="opacity-64 hover:opacity-100 focus-visible:opacity-100"
              size="icon-sm"
              variant="ghost"
            >
              <ClipboardIndicator />
              {children}
            </Button>
          </TooltipTrigger>
        </ClipboardTrigger>
        <TooltipContent>Copy to clipboard</TooltipContent>
      </Clipboard>
    </Tooltip>
  );
};
