"use client";

import { EyeIcon } from "lucide-react";
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
    <FieldLabel>Password</FieldLabel>
    <InputGroup>
      <InputGroupInput placeholder="Enter password" />
      <InputGroupAddon align="inline-end">
        <EyeIcon aria-hidden />
      </InputGroupAddon>
    </InputGroup>
    <FieldDescription>Icon positioned at the end.</FieldDescription>
  </Field>
);

export default Example;
