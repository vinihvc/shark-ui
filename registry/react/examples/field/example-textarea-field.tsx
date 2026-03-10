"use client";

import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/react/components/field";
import { Textarea } from "@/registry/react/components/textarea";

const Example = () => (
  <Field className="w-full max-w-xs">
    <FieldLabel>Bio</FieldLabel>
    <Textarea placeholder="Tell us about yourself…" />
    <FieldDescription>
      Write a short bio. Maximum 500 characters.
    </FieldDescription>
  </Field>
);

export default Example;
