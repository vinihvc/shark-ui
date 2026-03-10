import { Checkbox } from "@/registry/react/components/checkbox";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";

const Example = () => {
  return (
    <FieldGroup className="mx-auto w-56">
      <Field invalid orientation="horizontal">
        <Checkbox />
        <FieldLabel>Accept terms and conditions</FieldLabel>
      </Field>
    </FieldGroup>
  );
};

export default Example;
