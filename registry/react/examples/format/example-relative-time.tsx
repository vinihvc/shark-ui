import { FormatRelativeTime } from "@/registry/react/components/format";

const Example = () => (
  <div className="inline-flex items-baseline gap-1">
    <span className="text-muted-foreground text-sm">Last updated</span>
    <span className="font-medium text-foreground tabular-nums tracking-tight">
      <FormatRelativeTime value={new Date("2025-05-05")} />
    </span>
  </div>
);

export default Example;
