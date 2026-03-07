import { FormatNumber } from "@/registry/react/components/format";

const FormatNumberCurrencyExample = () => (
  <div className="flex flex-col gap-4">
    <div>
      <span className="text-muted-foreground text-sm">USD: </span>
      <FormatNumber currency="USD" style="currency" value={99.99} />
    </div>
    <div>
      <span className="text-muted-foreground text-sm">EUR: </span>
      <FormatNumber currency="EUR" style="currency" value={99.99} />
    </div>
    <div>
      <span className="text-muted-foreground text-sm">BRL: </span>
      <FormatNumber currency="BRL" style="currency" value={99.99} />
    </div>
  </div>
);

export default FormatNumberCurrencyExample;
