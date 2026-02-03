import { Button } from "@/registry/react/components/button";
import {
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@/registry/react/components/popover";

const Example = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline">Open</Button>
    </PopoverTrigger>
    <PopoverContent className="w-64">
      <PopoverHeader
        description="Check your notifications."
        title="Notifications"
      />
      <PopoverBody>
        <Popover>
          <PopoverTrigger asChild>
            <Button size="sm" variant="outline">
              Open nested
            </Button>
          </PopoverTrigger>

          <PopoverContent className="w-56">
            <PopoverHeader
              description="You are all caught up!"
              title="Nested popover"
            />
          </PopoverContent>
        </Popover>
      </PopoverBody>
    </PopoverContent>
  </Popover>
);

export default Example;
