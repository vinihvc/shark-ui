import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/react/components/field";
import { Textarea } from "@/registry/react/components/textarea";

const Example = () => (
  <Field className="max-w-xs">
    <FieldLabel>Message</FieldLabel>
    <Textarea placeholder="Type your message..." />
    <FieldDescription>
      Add a short message to include with your submission.
    </FieldDescription>
  </Field>
);

export default Example;
