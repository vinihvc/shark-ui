import { Field } from "@/registry/react/components/field";
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/registry/react/components/progress";

const Example = () => (
  <Field className="w-full max-w-xs">
    <Progress value={66}>
      <ProgressLabel>Upload progress</ProgressLabel>
      <ProgressValue />
    </Progress>
  </Field>
);

export default Example;
