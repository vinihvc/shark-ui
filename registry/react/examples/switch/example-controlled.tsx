"use client";

import React from "react";
import {
  Field,
  FieldContent,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";
import { Switch } from "@/registry/react/components/switch";

const Example = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <FieldGroup className="flex max-w-sm flex-col items-center gap-4">
      <Field className="w-48" orientation="horizontal">
        <Switch
          checked={checked}
          onCheckedChange={({ checked }) => setChecked(checked ?? false)}
        />
        <FieldContent>
          <FieldLabel>Enable notifications</FieldLabel>
        </FieldContent>
      </Field>

      <p className="text-center">{checked ? "✅" : "❌"}</p>
    </FieldGroup>
  );
};

export default Example;
