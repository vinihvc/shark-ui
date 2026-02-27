"use client";

import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

const Example = () => (
  <Field className="w-full max-w-xs" orientation="vertical">
    <FieldLabel>Name</FieldLabel>
    <Input placeholder="Enter your name" type="text" />
    <FieldDescription>
      Stacks label, control, and description vertically.
    </FieldDescription>
  </Field>
);

export default Example;
