import { Checkbox } from "@/registry/react/components/checkbox";
import {
  Field,
  FieldContent,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";

const Example = () => (
  <FieldGroup className="mx-auto w-40">
    <Field orientation="horizontal">
      <Checkbox checked="indeterminate" />
      <FieldContent>
        <FieldLabel>Select all items</FieldLabel>
      </FieldContent>
    </Field>
  </FieldGroup>
);

export default Example;
