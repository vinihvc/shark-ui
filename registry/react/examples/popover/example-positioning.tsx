import { Button } from "@/registry/react/components/button";
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@/registry/react/components/popover";

const sides = ["left", "top", "bottom", "right"] as const;

const Example = () => (
  <div className="flex flex-wrap justify-center gap-2">
    {sides.map((side) => (
      <Popover key={side} positioning={{ placement: side }}>
        <PopoverTrigger asChild>
          <Button className="capitalize" variant="outline">
            {side}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-56">
          <PopoverHeader
            description={`This popover appears on the ${side} side of the trigger.`}
            title="Popover"
          />
        </PopoverContent>
      </Popover>
    ))}
  </div>
);

export default Example;
