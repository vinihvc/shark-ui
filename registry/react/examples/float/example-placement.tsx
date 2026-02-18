import { Float } from "@/registry/react/components/float";

const FloatPlacementDemo = () => (
  <div className="grid grid-cols-3 gap-8">
    {(
      [
        "top-start",
        "top-center",
        "top-end",
        "middle-start",
        "middle-center",
        "middle-end",
        "bottom-start",
        "bottom-center",
        "bottom-end",
      ] as const
    ).map((placement) => (
      <div
        className="relative flex size-24 items-center justify-center rounded-lg border bg-muted/30"
        key={placement}
      >
        <span className="text-muted-foreground text-xs">{placement}</span>
        <Float placement={placement}>
          <span className="flex size-6 items-center justify-center rounded-full bg-primary font-medium text-primary-foreground text-xs">
            3
          </span>
        </Float>
      </div>
    ))}
  </div>
);

export default FloatPlacementDemo;
