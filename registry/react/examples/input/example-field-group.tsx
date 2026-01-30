import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";
import { Button } from "../../components/button";

const Example = () => (
  <FieldGroup className="w-full max-w-64">
    <Field>
      <FieldLabel>Name</FieldLabel>
      <Input placeholder="First name" />
    </Field>
    <Field>
      <FieldLabel>Email</FieldLabel>
      <Input placeholder="you@example.com" type="email" />
      <FieldDescription>We'll use this email to contact you</FieldDescription>
    </Field>
    <Field orientation="horizontal" reverse>
      <Button>Submit</Button>
      <Button variant="outline">Reset</Button>
    </Field>
  </FieldGroup>
);

export default Example;
