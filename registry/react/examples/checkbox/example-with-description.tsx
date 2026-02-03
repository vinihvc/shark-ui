import { Checkbox } from "@/registry/react/components/checkbox";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";

const Example = () => {
  return (
    <FieldGroup className="max-w-sm">
      <Field orientation="horizontal">
        <Checkbox defaultChecked />
        <FieldContent>
          <FieldLabel>Receive notifications</FieldLabel>
          <FieldDescription>
            You'll receive a notification when someone posts a comment on your
            post
          </FieldDescription>
        </FieldContent>
      </Field>
    </FieldGroup>
  );
};

export default Example;
