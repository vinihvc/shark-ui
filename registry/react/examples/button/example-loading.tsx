import { Button } from "@/registry/react/components/button";
import { Field, FieldLabel, FieldSet } from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

const Example = () => (
  <FieldSet aria-label="Login form">
    <Field>
      <FieldLabel>Enter your email</FieldLabel>
      <Input placeholder="john.doe@example.com" readOnly type="email" />
    </Field>
    <Button isLoading>Login</Button>
  </FieldSet>
);

export default Example;
