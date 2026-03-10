import { Field, FieldLabel } from "@/registry/react/components/field";
import { Progress } from "@/registry/react/components/progress";

const Example = () => (
  <Field className="w-full max-w-xs">
    <FieldLabel>Establishing connection...</FieldLabel>
    <Progress indeterminate />
  </Field>
);

export default Example;
