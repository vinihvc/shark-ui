import { Field, FieldLabel } from "@/registry/react/components/field";
import { NumberInput } from "@/registry/react/components/number-input";

const NumberInputDemo = () => (
  <Field>
    <FieldLabel>Amount</FieldLabel>
    <NumberInput className="w-32" defaultValue="10" />
  </Field>
);

export default NumberInputDemo;
