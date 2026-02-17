import { FormatByte } from "@/registry/react/components/format";

const FormatByteUnitDisplayExample = () => (
  <div className="flex flex-col gap-3">
    <div>
      <span className="text-muted-foreground text-sm">Long: </span>
      <FormatByte value={1_500_000} unitDisplay="long" />
    </div>
    <div>
      <span className="text-muted-foreground text-sm">Short: </span>
      <FormatByte value={1_500_000} unitDisplay="short" />
    </div>
    <div>
      <span className="text-muted-foreground text-sm">Narrow: </span>
      <FormatByte value={1_500_000} unitDisplay="narrow" />
    </div>
  </div>
);

export default FormatByteUnitDisplayExample;
