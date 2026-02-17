import { FormatByte } from "@/registry/react/components/format";

const FormatByteUnitSystemExample = () => (
  <div className="flex flex-col gap-3">
    <div>
      <span className="text-muted-foreground text-sm">Decimal (1000): </span>
      <FormatByte value={1024} unitSystem="decimal" />
    </div>
    <div>
      <span className="text-muted-foreground text-sm">Binary (1024): </span>
      <FormatByte value={1024} unitSystem="binary" />
    </div>
  </div>
);

export default FormatByteUnitSystemExample;
