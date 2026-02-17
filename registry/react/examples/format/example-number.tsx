import { FormatNumber } from "@/registry/react/components/format";

const FormatNumberExample = () => (
  <div className="inline-flex items-baseline gap-1">
    <span className="text-muted-foreground text-sm">Downloads</span>
    <span className="font-medium text-foreground tabular-nums tracking-tight">
      <FormatNumber value={1234567} />
    </span>
    <span className="text-muted-foreground text-sm">per month</span>
  </div>
);

export default FormatNumberExample;
