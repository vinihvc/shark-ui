import { Field, FieldLabel } from "@/registry/react/components/field";
import { Progress, ProgressValue } from "@/registry/react/components/progress";

const Example = () => (
  <Field className="w-full max-w-xs">
    <Progress value={66}>
      <FieldLabel>Upload progress</FieldLabel>

      <ProgressValue />
    </Progress>
  </Field>
);

export default Example;
