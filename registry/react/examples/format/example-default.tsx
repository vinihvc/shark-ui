import { FormatByte } from "@/registry/react/components/format";

const FormatDemo = () => (
  <div className="flex flex-col gap-1">
    <span className="text-muted-foreground text-sm">File size</span>
    <span className="font-semibold text-2xl text-foreground tabular-nums tracking-tight">
      <FormatByte value={120_000} />
    </span>
  </div>
);

export default FormatDemo;
