import { Badge } from "@/registry/react/components/badge";
import { Float } from "@/registry/react/components/float";

const Example = () => (
  <div className="grid grid-cols-3 gap-4">
    {placements.map((placement) => (
      <div
        className="flex flex-col items-center justify-center gap-2"
        key={placement}
      >
        <span className="text-muted-foreground text-xs">{placement}</span>
        <div className="relative size-16 rounded-lg border bg-muted/30">
          <Float placement={placement}>
            <Badge>3</Badge>
          </Float>
        </div>
      </div>
    ))}
  </div>
);

const placements = [
  "top-start",
  "top-center",
  "top-end",
  "middle-start",
  "middle-center",
  "middle-end",
  "bottom-start",
  "bottom-center",
  "bottom-end",
] as const;

export default Example;
