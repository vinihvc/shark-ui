import {
  NumberField,
  NumberFieldGroup,
  NumberFieldInput,
} from "@/registry/react/components/number-input";

const Example = () => (
  <NumberField className="w-full max-w-40" defaultValue="0">
    <NumberFieldGroup>
      <NumberFieldInput className="text-start" />
    </NumberFieldGroup>
  </NumberField>
);

export default Example;
