import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/registry/react/components/field";
import { Switch } from "@/registry/react/components/switch";

const Example = () => (
  <Field className="max-w-sm" orientation="horizontal">
    <Switch defaultChecked />
    <FieldContent>
      <FieldLabel>Share across devices</FieldLabel>
      <FieldDescription>
        Focus is shared across devices, and turns off when you leave the app.
      </FieldDescription>
    </FieldContent>
  </Field>
);

export default Example;
