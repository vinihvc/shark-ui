"use client";

import type { CheckboxCheckedState } from "@ark-ui/react";
import React from "react";
import { Checkbox } from "@/registry/react/components/checkbox";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";

const Example = () => {
  const [checked, setChecked] = React.useState<CheckboxCheckedState>(false);

  return (
    <FieldGroup className="mx-auto w-56">
      <Field orientation="horizontal">
        <Checkbox
          checked={checked}
          onCheckedChange={({ checked }) => setChecked(checked)}
        />
        <FieldLabel>Accept terms and conditions</FieldLabel>
      </Field>

      <p className="text-center">{checked ? "✅" : "❌"}</p>
    </FieldGroup>
  );
};

export default Example;
