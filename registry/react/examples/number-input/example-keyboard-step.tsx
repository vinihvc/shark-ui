import { FieldLabel } from "@/registry/react/components/field";
import {
  NumberInput,
  NumberInputDecrement,
  NumberInputGroup,
  NumberInputIncrement,
  NumberInputInput,
} from "@/registry/react/components/number-input";

const Example = () => (
  <NumberInput
    className="w-full max-w-48"
    defaultValue="10"
    largeStep={20}
    smallStep={0.5}
    step={1}
  >
    <FieldLabel>Keyboard step</FieldLabel>
    <NumberInputGroup>
      <NumberInputDecrement />
      <NumberInputInput />
      <NumberInputIncrement />
    </NumberInputGroup>
  </NumberInput>
);

export default Example;
