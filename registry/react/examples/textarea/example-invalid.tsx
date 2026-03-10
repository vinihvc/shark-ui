import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/react/components/field";
import { Textarea } from "@/registry/react/components/textarea";

const Example = () => (
  <Field className="max-w-xs" invalid>
    <FieldLabel>Feedback</FieldLabel>
    <Textarea placeholder="Type your feedback here" />
    <FieldDescription>Please provide at least 20 characters.</FieldDescription>
  </Field>
);

export default Example;
