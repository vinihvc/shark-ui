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
    <FieldGroup className="mx-auto max-w-sm">
      <Field orientation="horizontal">
        <Checkbox
          checked={checked}
          onCheckedChange={({ checked }) => setChecked(checked)}
        />
        <FieldLabel>Accept terms and conditions</FieldLabel>
      </Field>

      <p className="text-center text-muted-foreground text-sm">
        Terms were {checked ? "accepted" : "not accepted"}
      </p>
    </FieldGroup>
  );
};

export default Example;
