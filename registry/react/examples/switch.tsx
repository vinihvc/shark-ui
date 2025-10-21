import {
  Field,
  FieldHelper,
  FieldLabel,
} from "@/registry/react/components/field";
import { Switch } from "@/registry/react/components/switch";

const SwitchDemo = () => (
  <Field>
    <div className="flex items-center gap-2">
      <Switch />

      <FieldLabel>Receive notifications</FieldLabel>
    </div>

    <FieldHelper>
      You'll receive a notification when someone posts a comment
    </FieldHelper>
  </Field>
);

export default SwitchDemo;
