import { Field } from "@/registry/react/components/field";
import { Progress, ProgressLabel } from "@/registry/react/components/progress";

const Example = () => (
  <Field className="w-full max-w-xs">
    <Progress indeterminate>
      <ProgressLabel>Establishing connection...</ProgressLabel>
    </Progress>
  </Field>
);

export default Example;
