"use client";

import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

const Example = () => (
  <Field className="w-full max-w-xs" disabled>
    <FieldLabel>Email</FieldLabel>
    <Input disabled placeholder="Enter your email" type="email" />
    <FieldDescription>This field is currently disabled.</FieldDescription>
  </Field>
);

export default Example;
