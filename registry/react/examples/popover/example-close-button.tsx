import { Button } from "@/registry/react/components/button";
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@/registry/react/components/popover";

const Example = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline">Open</Button>
    </PopoverTrigger>
    <PopoverContent className="w-72" showCloseButton>
      <PopoverHeader
        description="You are all caught up!"
        title="Notifications"
      />
    </PopoverContent>
  </Popover>
);

export default Example;
