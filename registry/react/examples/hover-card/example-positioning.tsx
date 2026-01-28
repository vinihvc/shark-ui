import { Button } from "@/registry/react/components/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/registry/react/components/hover-card";

const sides = ["left", "top", "bottom", "right"] as const;

const Example = () => (
  <div className="flex flex-wrap justify-center gap-2">
    {sides.map((side) => (
      <HoverCard key={side} positioning={{ placement: side }}>
        <HoverCardTrigger asChild>
          <Button className="capitalize" variant="outline">
            {side}
          </Button>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className="flex flex-col gap-1">
            <h4 className="font-medium">Hover Card</h4>
            <p>This hover card appears on the {side} side of the trigger.</p>
          </div>
        </HoverCardContent>
      </HoverCard>
    ))}
  </div>
);

export default Example;
