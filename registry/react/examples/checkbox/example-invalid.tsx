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
    <FieldGroup className="mx-auto max-w-sm">
      <Field invalid orientation="horizontal">
        <Checkbox />
        <FieldContent>
          <FieldLabel>Accept terms and conditions</FieldLabel>
          <FieldDescription>
            You must accept the terms to continue
          </FieldDescription>
        </FieldContent>
      </Field>
    </FieldGroup>
  );
};

export default Example;
