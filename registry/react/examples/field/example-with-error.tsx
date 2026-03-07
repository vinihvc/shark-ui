"use client";

import {
  Field,
  FieldError,
  FieldLabel,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

const Example = () => (
  <Field className="w-full max-w-xs" invalid>
    <FieldLabel>Email</FieldLabel>
    <Input placeholder="Enter your email" type="email" />
    <FieldError>Please enter a valid email address.</FieldError>
  </Field>
);

export default Example;
