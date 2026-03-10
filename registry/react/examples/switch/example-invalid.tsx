import {
  Field,
  FieldContent,
  FieldLabel,
} from "@/registry/react/components/field";
import { Switch } from "@/registry/react/components/switch";

const Example = () => (
  <Field className="max-w-64" invalid orientation="horizontal">
    <Switch />
    <FieldContent>
      <FieldLabel>Accept terms and conditions</FieldLabel>
    </FieldContent>
  </Field>
);

export default Example;
