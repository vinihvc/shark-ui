import {
  Field,
  FieldContent,
  FieldLabel,
} from "@/registry/react/components/field";
import { Switch } from "@/registry/react/components/switch";

const Example = () => (
  <div className="max-w-sm">
    <Field disabled orientation="horizontal">
      <Switch />
      <FieldContent>
        <FieldLabel>Marketing emails</FieldLabel>
      </FieldContent>
    </Field>
  </div>
);

export default Example;
