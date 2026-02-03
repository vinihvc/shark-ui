import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

const Example = () => (
  <Field className="w-full max-w-64">
    <FieldLabel>Picture</FieldLabel>
    <Input type="file" />
    <FieldDescription>Choose a picture for your profile</FieldDescription>
  </Field>
);

export default Example;
