"use client";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "@/registry/react/components/input-group";
import {
  NumberField,
  NumberFieldInput,
} from "@/registry/react/components/number-input";

const Example = () => (
  <InputGroup className="max-w-64">
    <NumberField aria-label="Enter the amount" defaultValue="10">
      <NumberFieldInput className="text-start" />
    </NumberField>
    <InputGroupAddon>
      <InputGroupText>€</InputGroupText>
    </InputGroupAddon>
    <InputGroupAddon align="inline-end">
      <InputGroupText>EUR</InputGroupText>
    </InputGroupAddon>
  </InputGroup>
);

export default Example;
