import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
} from "@/registry/react/components/number-input";
import { FieldLabel } from "../../components/field";

const Example = () => (
  <div className="flex flex-col gap-6">
    <NumberField className="w-full max-w-40" defaultValue="0" step={5}>
      <FieldLabel>Step 5</FieldLabel>
      <NumberFieldGroup>
        <NumberFieldDecrement />
        <NumberFieldInput />
        <NumberFieldIncrement />
      </NumberFieldGroup>
    </NumberField>
    <NumberField className="w-full max-w-40" defaultValue="0.1" step={0.1}>
      <FieldLabel>Step 0.1</FieldLabel>
      <NumberFieldGroup>
        <NumberFieldDecrement />
        <NumberFieldInput />
        <NumberFieldIncrement />
      </NumberFieldGroup>
    </NumberField>
  </div>
);

export default Example;
