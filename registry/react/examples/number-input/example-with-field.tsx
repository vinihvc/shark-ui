"use client";

import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/react/components/field";
import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
} from "@/registry/react/components/number-input";

const Example = () => (
  <Field className="w-full max-w-52">
    <FieldLabel>Quantity</FieldLabel>
    <NumberField defaultValue="1" max={99} min={0}>
      <NumberFieldGroup>
        <NumberFieldDecrement />
        <NumberFieldInput />
        <NumberFieldIncrement />
      </NumberFieldGroup>
    </NumberField>
    <FieldDescription>Enter a value between 0 and 99</FieldDescription>
  </Field>
);

export default Example;
