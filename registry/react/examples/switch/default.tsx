import {
  Field,
  FieldHelper,
  FieldLabel,
} from "@/registry/react/components/field";
import { Switch } from "@/registry/react/components/switch";

const SwitchDemo = () => (
  <Field>
    <Field orientation="horizontal">
      <Switch />

      <FieldLabel>Receive notifications</FieldLabel>
    </Field>

    <FieldHelper>
      You'll receive a notification when someone posts a comment
    </FieldHelper>
  </Field>
);

export default SwitchDemo;
