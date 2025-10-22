import {
  Field,
  FieldError,
  FieldHelper,
  FieldInput,
  FieldLabel,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

const FieldDemo = () => (
  <Field className="w-64">
    <FieldLabel>Email</FieldLabel>

    <FieldInput asChild>
      <Input placeholder="john.doe@example.com" required type="email" />
    </FieldInput>

    <FieldHelper>Enter your email address</FieldHelper>
    <FieldError>Email is required</FieldError>
  </Field>
);

export default FieldDemo;
