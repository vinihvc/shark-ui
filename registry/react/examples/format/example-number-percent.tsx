import { FormatNumber } from "@/registry/react/components/format";

const FormatNumberPercentExample = () => (
  <div className="flex flex-col gap-3">
    <div>
      <span className="text-muted-foreground text-sm">Default: </span>
      <FormatNumber value={0.75} style="percent" />
    </div>
    <div>
      <span className="text-muted-foreground text-sm">With decimals: </span>
      <FormatNumber value={0.7567} style="percent" minimumFractionDigits={2} />
    </div>
  </div>
);

export default FormatNumberPercentExample;
