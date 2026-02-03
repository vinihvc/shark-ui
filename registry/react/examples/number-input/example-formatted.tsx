import { NumberField } from "@/registry/react/components/number-input";

const Example = () => (
  <NumberField
    className="w-full max-w-40"
    defaultValue="19.00"
    formatOptions={{ currency: "USD", style: "currency" }}
  />
);

export default Example;
