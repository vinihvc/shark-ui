"use client";

import { Checkbox, CheckboxGroup } from "@/registry/react/components/checkbox";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/registry/react/components/field";

const Example = () => (
  <FieldGroup className="w-full max-w-xs">
    <FieldSet>
      <FieldLegend variant="label">Newsletter</FieldLegend>
      <FieldDescription>
        Choose how you want to receive updates about new features and product
        releases.
      </FieldDescription>
      <CheckboxGroup className="gap-3" defaultValue={["weekly"]}>
        <Field className="w-full max-w-xs" orientation="horizontal">
          <Checkbox disabled id="weekly" value="weekly" />
          <FieldLabel className="font-normal" htmlFor="weekly">
            Weekly digest
          </FieldLabel>
        </Field>
      </CheckboxGroup>
    </FieldSet>
    <FieldSeparator />
    <FieldSet>
      <FieldLegend variant="label">Updates</FieldLegend>
      <FieldDescription>
        Get notified about important account activity.{" "}
        <a href="#">View activity log</a>
      </FieldDescription>
      <CheckboxGroup className="gap-3">
        <Field className="w-full max-w-xs" orientation="horizontal">
          <Checkbox id="security" value="security" />
          <FieldLabel className="font-normal" htmlFor="security">
            Security alerts
          </FieldLabel>
        </Field>
        <Field className="w-full max-w-xs" orientation="horizontal">
          <Checkbox id="billing" value="billing" />
          <FieldLabel className="font-normal" htmlFor="billing">
            Billing reminders
          </FieldLabel>
        </Field>
      </CheckboxGroup>
    </FieldSet>
  </FieldGroup>
);

export default Example;
