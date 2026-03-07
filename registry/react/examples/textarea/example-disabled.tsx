import { Field, FieldLabel } from "@/registry/react/components/field";
import { Textarea } from "@/registry/react/components/textarea";

const Example = () => (
  <Field className="max-w-xs" disabled>
    <FieldLabel>Feedback</FieldLabel>
    <Textarea placeholder="Type your feedback here" />
  </Field>
);

export default Example;
