import { FormatNumber } from "@/registry/react/components/format";

const Example = () => (
  <div className="flex flex-col gap-4">
    <div>
      <span className="text-muted-foreground text-sm">1.2M: </span>
      <FormatNumber notation="compact" value={1_200_000} />
    </div>
    <div>
      <span className="text-muted-foreground text-sm">120K: </span>
      <FormatNumber notation="compact" value={120_000} />
    </div>
    <div>
      <span className="text-muted-foreground text-sm">Downloads: </span>
      <FormatNumber notation="compact" value={1_234_567} />
      <span className="text-muted-foreground text-sm"> per month</span>
    </div>
  </div>
);

export default Example;
