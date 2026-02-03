import { Checkbox } from "@/registry/react/components/checkbox";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";

const CheckboxDemo = () => {
  return (
    <FieldGroup className="max-w-sm">
      <Field orientation="horizontal">
        <Checkbox defaultChecked />

        <FieldLabel>Accept terms and conditions</FieldLabel>
      </Field>

      <Field orientation="horizontal">
        <Checkbox />
        <FieldContent>
          <FieldLabel>Receive notifications</FieldLabel>
          <FieldDescription>
            You'll receive a notification when someone posts a comment
          </FieldDescription>
        </FieldContent>
      </Field>

      <Field orientation="horizontal">
        <Checkbox disabled />
        <FieldContent>
          <FieldLabel>Receive marketing emails</FieldLabel>
        </FieldContent>
      </Field>
    </FieldGroup>
  );
};

export default CheckboxDemo;
