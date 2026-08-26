"use client";

import {
  DateInput,
  DateInputLabel,
} from "@/registry/react/components/date-input";
import { Field, FieldDescription } from "@/registry/react/components/field";

const Example = () => (
  <Field className="w-full max-w-64">
    <DateInput>
      <DateInputLabel>Date of birth</DateInputLabel>
    </DateInput>
    <FieldDescription>Use your local date format.</FieldDescription>
  </Field>
);

export default Example;
