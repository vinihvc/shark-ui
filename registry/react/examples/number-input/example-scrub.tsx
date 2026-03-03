import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldScrubber,
} from "@/registry/react/components/number-input";

const Example = () => (
  <NumberField className="w-full max-w-40" defaultValue="10">
    <NumberFieldScrubber>Quantity</NumberFieldScrubber>
    <NumberFieldGroup>
      <NumberFieldDecrement />
      <NumberFieldInput />
      <NumberFieldIncrement />
    </NumberFieldGroup>
  </NumberField>
);

export default Example;
