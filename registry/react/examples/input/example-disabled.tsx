import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

const Example = () => (
  <Field className="w-full max-w-64" disabled>
    <FieldLabel>Email</FieldLabel>
    <Input placeholder="john@doe.com" />
    <FieldDescription>The field is currently disabled</FieldDescription>
  </Field>
);

export default Example;
