import { FormatNumber } from "@/registry/react/components/format";

const FormatNumberCurrencyExample = () => (
  <div className="flex flex-col gap-3">
    <div>
      <span className="text-muted-foreground text-sm">USD: </span>
      <FormatNumber value={99.99} style="currency" currency="USD" />
    </div>
    <div>
      <span className="text-muted-foreground text-sm">EUR: </span>
      <FormatNumber value={99.99} style="currency" currency="EUR" />
    </div>
    <div>
      <span className="text-muted-foreground text-sm">BRL: </span>
      <FormatNumber value={99.99} style="currency" currency="BRL" />
    </div>
  </div>
);

export default FormatNumberCurrencyExample;
