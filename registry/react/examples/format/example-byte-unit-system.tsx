import { FormatByte } from "@/registry/react/components/format";

const FormatByteUnitSystemExample = () => (
  <div className="flex flex-col gap-4">
    <div>
      <span className="text-muted-foreground text-sm">Decimal (1000): </span>
      <FormatByte unitSystem="decimal" value={1024} />
    </div>
    <div>
      <span className="text-muted-foreground text-sm">Binary (1024): </span>
      <FormatByte unitSystem="binary" value={1024} />
    </div>
  </div>
);

export default FormatByteUnitSystemExample;
