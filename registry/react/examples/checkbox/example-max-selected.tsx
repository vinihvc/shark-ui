import { Checkbox, CheckboxGroup } from "@/registry/react/components/checkbox";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/registry/react/components/field";

const Example = () => (
  <FieldSet>
    <FieldLegend variant="label">Notifications</FieldLegend>
    <FieldDescription>Choose up to two channels.</FieldDescription>
    <FieldGroup>
      <CheckboxGroup className="gap-3" maxSelectedValues={2}>
        <Field orientation="horizontal">
          <Checkbox value="email" />
          <FieldLabel className="font-normal">Email</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Checkbox value="sms" />
          <FieldLabel className="font-normal">SMS</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Checkbox value="push" />
          <FieldLabel className="font-normal">Push</FieldLabel>
        </Field>
      </CheckboxGroup>
    </FieldGroup>
  </FieldSet>
);

export default Example;
