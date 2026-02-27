import { Button } from "@/registry/react/components/button";
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@/registry/react/components/popover";

const placements = ["left", "top", "bottom", "right"] as const;

const Example = () => (
  <div className="flex flex-wrap justify-center gap-2">
    {placements.map((placement) => (
      <Popover key={placement} positioning={{ placement }}>
        <PopoverTrigger asChild>
          <Button className="capitalize" variant="outline">
            {placement}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-56">
          <PopoverHeader
            description={`This popover appears on the ${placement} placement of the trigger.`}
            title="Popover"
          />
        </PopoverContent>
      </Popover>
    ))}
  </div>
);

export default Example;
