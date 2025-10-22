import { Checkbox } from "@/registry/react/components/checkbox";
import { Field, FieldLabel } from "@/registry/react/components/field";

const CheckboxExample = () => (
  <Field className="flex-row">
    <Checkbox />

    <FieldLabel>Accept terms and conditions</FieldLabel>
  </Field>
);

export default CheckboxExample;
