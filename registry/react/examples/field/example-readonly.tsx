import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

const Example = () => (
  <Field className="w-full max-w-xs" readOnly>
    <FieldLabel>Workspace ID</FieldLabel>
    <Input defaultValue="ws_8f2a1c" readOnly type="text" />
    <FieldDescription>This value cannot be edited.</FieldDescription>
  </Field>
);

export default Example;
