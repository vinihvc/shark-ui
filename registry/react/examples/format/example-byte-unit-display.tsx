import { FormatByte } from "@/registry/react/components/format";

const FormatByteUnitDisplayExample = () => (
  <div className="flex flex-col gap-4">
    <div>
      <span className="text-muted-foreground text-sm">Long: </span>
      <FormatByte unitDisplay="long" value={1_500_000} />
    </div>
    <div>
      <span className="text-muted-foreground text-sm">Short: </span>
      <FormatByte unitDisplay="short" value={1_500_000} />
    </div>
    <div>
      <span className="text-muted-foreground text-sm">Narrow: </span>
      <FormatByte unitDisplay="narrow" value={1_500_000} />
    </div>
  </div>
);

export default FormatByteUnitDisplayExample;
