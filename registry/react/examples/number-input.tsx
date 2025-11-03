import { Field, FieldInput, FieldLabel } from "../components/field";
import { NumberInput } from "../components/number-input";

const NumberInputDemo = () => (
  <Field>
    <FieldLabel>Amount</FieldLabel>
    <FieldInput>
      <NumberInput className="w-32" defaultValue="10" />
    </FieldInput>
  </Field>
);

export default NumberInputDemo;
