import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/registry/react/components/field";
import { Switch } from "@/registry/react/components/switch";

const Example = () => (
  <FieldLabel className="w-full max-w-sm">
    <Field orientation="horizontal">
      <FieldContent>
        <FieldTitle>Enable notifications</FieldTitle>
        <FieldDescription>
          You can enable or disable notifications at any time.
        </FieldDescription>
      </FieldContent>
      <Switch defaultChecked />
    </Field>
  </FieldLabel>
);

export default Example;
