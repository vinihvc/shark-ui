"use client";

import {
  Field,
  FieldError,
  FieldLabel,
  FieldLabelRequired,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

const Example = () => (
  <Field className="w-full max-w-xs">
    <FieldLabel>
      Password <FieldLabelRequired />
    </FieldLabel>
    <Input placeholder="Enter password" required type="password" />
    <FieldError>Please fill out this field.</FieldError>
  </Field>
);

export default Example;
