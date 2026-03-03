"use client";

import { Field, FieldLabel } from "@/registry/react/components/field";
import { Switch } from "@/registry/react/components/switch";

const Example = () => (
  <Field className="w-full max-w-xs" orientation="horizontal">
    <Switch defaultChecked />
    <FieldLabel> Airplane mode</FieldLabel>
  </Field>
);

export default Example;
