import { Button } from "@/registry/react/components/button";
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@/registry/react/components/popover";

const Example = () => (
  <Popover modal={false}>
    <PopoverTrigger asChild>
      <Button variant="outline">Open</Button>
    </PopoverTrigger>
    <PopoverContent className="w-64">
      <PopoverHeader
        description="You are all caught up!"
        title="Notifications"
      />
    </PopoverContent>
  </Popover>
);

export default Example;
