import {
  FormatByte,
  FormatNumber,
  FormatRelativeTime,
} from "@/registry/react/components/format";

const FormatDemo = () => (
  <div className="flex flex-col gap-6">
    <div className="flex flex-col gap-1">
      <span className="text-muted-foreground text-sm">File size</span>
      <span className="font-semibold text-2xl text-foreground tabular-nums tracking-tight">
        <FormatByte value={120_000} />
      </span>
    </div>
    <div className="inline-flex items-baseline gap-1">
      <span className="text-muted-foreground text-sm">Last updated</span>
      <span className="font-medium text-foreground tabular-nums tracking-tight">
        <FormatRelativeTime value={new Date("2025-05-05")} />
      </span>
    </div>
    <div className="inline-flex items-baseline gap-1">
      <span className="text-muted-foreground text-sm">Downloads</span>
      <span className="font-medium text-foreground tabular-nums tracking-tight">
        <FormatNumber notation="compact" value={120_000} />
      </span>
      <span className="text-muted-foreground text-sm">per month</span>
    </div>
  </div>
);

export default FormatDemo;
