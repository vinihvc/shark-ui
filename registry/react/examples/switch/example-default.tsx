import { Field, FieldLabel } from "@/registry/react/components/field";
import { Switch } from "@/registry/react/components/switch";

const SwitchDemo = () => (
  <div className="max-w-sm">
    <Field orientation="horizontal">
      <Switch defaultChecked />
      <FieldLabel> Airplane mode</FieldLabel>
    </Field>
  </div>
);

export default SwitchDemo;
