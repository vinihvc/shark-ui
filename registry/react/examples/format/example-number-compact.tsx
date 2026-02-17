import { FormatNumber } from "@/registry/react/components/format";

const FormatNumberCompactExample = () => (
  <div className="flex flex-col gap-3">
    <div>
      <span className="text-muted-foreground text-sm">1.2M: </span>
      <FormatNumber value={1_200_000} notation="compact" />
    </div>
    <div>
      <span className="text-muted-foreground text-sm">120K: </span>
      <FormatNumber value={120_000} notation="compact" />
    </div>
    <div>
      <span className="text-muted-foreground text-sm">Downloads: </span>
      <FormatNumber value={1_234_567} notation="compact" />
      <span className="text-muted-foreground text-sm"> per month</span>
    </div>
  </div>
);

export default FormatNumberCompactExample;
