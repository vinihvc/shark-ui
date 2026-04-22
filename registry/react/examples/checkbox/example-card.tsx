import { Checkbox } from "@/registry/react/components/checkbox";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/registry/react/components/field";

const Example = () => (
  <FieldLabel className="w-full max-w-sm">
    <Field orientation="horizontal">
      <Checkbox />
      <FieldContent>
        <FieldTitle>Enable notifications</FieldTitle>
        <FieldDescription>
          You can enable or disable notifications at any time.
        </FieldDescription>
      </FieldContent>
    </Field>
  </FieldLabel>
);

export default Example;
