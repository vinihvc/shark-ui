import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

const Example = () => (
  <Field className="w-full max-w-64" invalid>
    <FieldLabel>Email</FieldLabel>
    <Input placeholder="john@doe.com" />
    <FieldDescription>Please enter a valid email address</FieldDescription>
  </Field>
);

export default Example;
