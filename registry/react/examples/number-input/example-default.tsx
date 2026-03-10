import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
} from "@/registry/react/components/number-input";

const NumberInputDemo = () => (
  <NumberField className="w-full max-w-40" defaultValue="1">
    <NumberFieldGroup>
      <NumberFieldDecrement />
      <NumberFieldInput />
      <NumberFieldIncrement />
    </NumberFieldGroup>
  </NumberField>
);

export default NumberInputDemo;
