import { Progress } from "@/registry/react/components/progress";
import { Field, FieldLabel } from "../../components/field";

const Example = () => (
  <Field className="w-full max-w-xs">
    <FieldLabel>Establishing connection...</FieldLabel>
    <Progress indeterminate />
  </Field>
);

export default Example;
