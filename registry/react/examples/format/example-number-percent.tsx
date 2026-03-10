import { FormatNumber } from "@/registry/react/components/format";

const FormatNumberPercentExample = () => (
  <div className="flex flex-col gap-4">
    <div>
      <span className="text-muted-foreground text-sm">Default: </span>
      <FormatNumber style="percent" value={0.75} />
    </div>
    <div>
      <span className="text-muted-foreground text-sm">With decimals: </span>
      <FormatNumber minimumFractionDigits={2} style="percent" value={0.7567} />
    </div>
  </div>
);

export default FormatNumberPercentExample;
