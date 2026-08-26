import {
  CircularProgress,
  CircularProgressLabel,
} from "@/registry/react/components/circular-progress";
import { Field } from "@/registry/react/components/field";

const Example = () => (
  <Field className="w-full max-w-xs">
    <CircularProgress className="flex-col gap-2" indeterminate>
      <CircularProgressLabel className="justify-center">
        Establishing connection...
      </CircularProgressLabel>
    </CircularProgress>
  </Field>
);

export default Example;
