import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldRequiredIndicator,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

const Example = () => (
  <Field className="w-full max-w-64" required>
    <FieldLabel>
      Email <FieldRequiredIndicator />
    </FieldLabel>
    <Input placeholder="john@doe.com" />

    <FieldDescription>This field must be filled out..</FieldDescription>
  </Field>
);

export default Example;
