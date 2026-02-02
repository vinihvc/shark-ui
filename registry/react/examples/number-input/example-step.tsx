import { NumberField } from "@/registry/react/components/number-input";

const Example = () => (
  <div className="flex flex-col gap-6">
    <NumberField className="w-full max-w-40" defaultValue="0" step={5} />
    <NumberField className="w-full max-w-40" defaultValue="0.1" step={0.1} />
  </div>
);

export default Example;
