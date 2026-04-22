import { Field, FieldDescription } from "@/registry/react/components/field";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/react/components/radio-group";

const Example = () => (
  <RadioGroup defaultValue="all">
    <Field>
      <RadioGroupItem value="all">Default</RadioGroupItem>
      <FieldDescription>Standard spacing for most use cases.</FieldDescription>
    </Field>
    <Field>
      <RadioGroupItem value="mentions">Comfortable</RadioGroupItem>
      <FieldDescription>More space between elements.</FieldDescription>
    </Field>
    <Field>
      <RadioGroupItem value="none">Compact</RadioGroupItem>
      <FieldDescription>Minimal spacing for dense layouts.</FieldDescription>
    </Field>
  </RadioGroup>
);

export default Example;
