import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/react/components/radio-group";

const Example = () => {
  return (
    <FieldGroup className="mx-auto max-w-sm">
      <Field invalid orientation="vertical">
        <FieldLabel>Select an option</FieldLabel>
        <FieldDescription>
          You must select one option to continue
        </FieldDescription>
        <FieldContent>
          <RadioGroup>
            <RadioGroupItem value="1">Option 1</RadioGroupItem>
            <RadioGroupItem value="2">Option 2</RadioGroupItem>
            <RadioGroupItem value="3">Option 3</RadioGroupItem>
          </RadioGroup>
        </FieldContent>
      </Field>
    </FieldGroup>
  );
};

export default Example;
