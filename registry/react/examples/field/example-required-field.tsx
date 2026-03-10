"use client";

import {
  Field,
  FieldError,
  FieldLabel,
  FieldRequiredIndicator,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

const Example = () => (
  <Field className="w-full max-w-xs" required>
    <FieldLabel>
      Password <FieldRequiredIndicator />
    </FieldLabel>
    <Input placeholder="Enter password" type="password" />
    <FieldError>Please fill out this field.</FieldError>
  </Field>
);

export default Example;
