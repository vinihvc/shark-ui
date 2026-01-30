import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

const Example = () => (
  <FieldGroup className="grid w-full max-w-xs grid-cols-2">
    <Field>
      <FieldLabel>First name</FieldLabel>
      <Input placeholder="John" />
    </Field>
    <Field>
      <FieldLabel>Last name</FieldLabel>
      <Input placeholder="Doe" />
    </Field>
    <Field className="col-span-2">
      <FieldLabel>Address</FieldLabel>
      <Input placeholder="123 Main St" />
    </Field>
  </FieldGroup>
);

export default Example;
