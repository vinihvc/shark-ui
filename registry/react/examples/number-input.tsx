import {
  Field,
  FieldInput,
  FieldLabel,
} from "@/registry/react/components/field";
import { NumberInput } from "@/registry/react/components/number-input";

const NumberInputDemo = () => (
  <Field>
    <FieldLabel>Amount</FieldLabel>
    <FieldInput>
      <NumberInput className="w-32" defaultValue="10" />
    </FieldInput>
  </Field>
);

export default NumberInputDemo;
