import { NumberField } from "@/registry/react/components/number-input";

const Example = () => (
  <NumberField className="w-full max-w-40" defaultValue="5" max={10} min={0} />
);

export default Example;
