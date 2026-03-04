"use client";

import { FilterIcon } from "lucide-react";
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/react/components/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/react/components/input-group";

const Example = () => (
  <Field className="max-w-64">
    <FieldLabel>Filter</FieldLabel>
    <InputGroup>
      <InputGroupAddon align="inline-start">
        <FilterIcon aria-hidden />
      </InputGroupAddon>
      <InputGroupInput placeholder="Search..." />
    </InputGroup>
    <FieldDescription>Icon positioned at the start.</FieldDescription>
  </Field>
);

export default Example;
