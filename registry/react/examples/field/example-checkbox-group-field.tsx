"use client";

import { Checkbox, CheckboxGroup } from "@/registry/react/components/checkbox";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/registry/react/components/field";

const Example = () => (
  <FieldSet>
    <FieldLegend variant="label">
      Select the items you want to show:
    </FieldLegend>
    <FieldGroup>
      <CheckboxGroup
        className="gap-3"
        defaultValue={["hard-disks", "external-disks"]}
      >
        <Field orientation="horizontal">
          <Checkbox defaultChecked value="hard-disks" />
          <FieldLabel className="font-normal">Hard disks</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Checkbox defaultChecked value="external-disks" />
          <FieldLabel className="font-normal">External disks</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Checkbox value="cds-dvds-ipods" />
          <FieldLabel className="font-normal">CDs, DVDs, and iPods</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Checkbox value="connected-servers" />
          <FieldLabel className="font-normal">Connected servers</FieldLabel>
        </Field>
      </CheckboxGroup>
    </FieldGroup>
  </FieldSet>
);

export default Example;
