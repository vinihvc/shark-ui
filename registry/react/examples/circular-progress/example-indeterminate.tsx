import { CircularProgress } from "@/registry/react/components/circular-progress";
import { Field, FieldLabel } from "@/registry/react/components/field";

const Example = () => (
  <Field className="w-full max-w-xs">
    <FieldLabel className="justify-center">
      Establishing connection...
    </FieldLabel>
    <CircularProgress indeterminate />
  </Field>
);

export default Example;
