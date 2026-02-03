import { Button } from "@/registry/react/components/button";
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@/registry/react/components/popover";

const Example = () => (
  <div className="flex flex-wrap justify-center gap-4">
    <Popover closeOnInteractOutside={false}>
      <PopoverTrigger asChild>
        <Button variant="outline">Open outside click</Button>
      </PopoverTrigger>
      <PopoverContent className="w-64" showCloseButton>
        <PopoverHeader
          description="Clicking outside does not close this popover. Press ESC to close."
          title="Stays on outside click"
        />
      </PopoverContent>
    </Popover>
    <Popover closeOnEscape={false}>
      <PopoverTrigger asChild>
        <Button variant="outline">Open escape</Button>
      </PopoverTrigger>
      <PopoverContent className="w-64" showCloseButton>
        <PopoverHeader
          description="Pressing escape does not close this popover. Click outside to close."
          title="Escape disabled"
        />
      </PopoverContent>
    </Popover>
  </div>
);

export default Example;
